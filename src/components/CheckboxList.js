import React from 'react';
import { linkArray, MathimaticsCurriculumArray, ScienceCurriculumArray} from './CurriculumAddresses';
import CheckboxListPrimary from './CheckboxListPrimary';

export default class CheckboxList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {curriculumLinks: props.curriculumLinks, onChangeFunction: props.onChangeFunction, subject: '', levels: []}

		this.firstLevelDisplayed = 0;

		let previousWindowWidth = window.innerWidth;

		window.addEventListener('resize', (event) => {
			const largeWindow = window.innerWidth >= 1800 && previousWindowWidth < 1800;
			const mediumWindow = (window.innerWidth >= 1500 || window.innerWidth < 1800) && (previousWindowWidth >= 1800 || previousWindowWidth < 1500);
			const smallWindow = window.innerWidth < 1500 && previousWindowWidth >= 1500;

			if(largeWindow) {
				previousWindowWidth = window.innerWidth;			
				this.forceUpdate();
			} else if (mediumWindow){
				previousWindowWidth = window.innerWidth;
				this.forceUpdate();
			} else if (smallWindow){
				previousWindowWidth = window.innerWidth;
				this.forceUpdate();
			}
		});
	}
	CheckDisplayedLevel = (currentLevel) => {
		if(window.innerWidth >= 1800) {
			return this.state.levels.slice(currentLevel, currentLevel + 3);
		} else if (window.innerWidth >= 1500 && window.innerWidth < 1800) {
			return this.state.levels.slice(currentLevel, currentLevel + 2);
		} else {
			return this.state.levels.slice(currentLevel, currentLevel + 1);
		}
	}
	DisplayedLevels = (type) => {
		let scroll = document.getElementsByClassName('curriculum-level-scroll')[0];
		let transitionAmount;
		switch (type) {
			case 'increase':
				if(this.firstLevelDisplayed < this.state.levels.length - this.CheckDisplayedLevel(this.firstLevelDisplayed).length)
				{
					this.firstLevelDisplayed++;
				}
				break;
			case 'decrease':
				if(this.firstLevelDisplayed > 0)
				{
					this.firstLevelDisplayed--;
				}
				break;
			default:
		};	
		transitionAmount = this.firstLevelDisplayed * 100 / this.state.levels.length;
		scroll.style.transform = `translate(-${transitionAmount}%)`;
	};
	onLevelClick = (e) => {
		const levelName = e.target.getAttribute('levelname');
		let curriculumCodesArray = []
		this.getSubjectStructure().forEach((level) => {
			if(level.levelName === levelName) {
				level.primaryTitles.map((primary) => {
					primary.secondaryTitles.map((secondary) => {
						secondary.linksToSecondary.map((link) => {
							curriculumCodesArray.push(link.linkCode)
						})
					})
				})
			}
		})
		
		this.props.onYearChange(curriculumCodesArray);
	}
	onSubjectChange = (e) => {
		this.firstLevelDisplayed = 0;
		this.DisplayedLevels();						// resets the level scroll back to start position

		const subject = e.target.value;
		if(this.props.selectSubject)
		{
			this.props.selectSubject(subject)
		}
		this.state.subject = subject;
		this.forceUpdate();
	}
	getSubjectStructure = () => {
		switch (this.state.subject) {
			case 'Personal and Social Capability':
			{
				this.state.levels = ["Level A", "Level B", "Level C", "Level D", "Foundation Level", "Levels 1 and 2", "Levels 3 and 4", "Levels 5 and 6"];
				return linkArray()
			}
			case 'Mathematics':
			{
				this.state.levels = ["Foundation Year", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10", "Year 10A"];
				return MathimaticsCurriculumArray()
			}
			case 'Science':
			{
				this.state.levels = ["Foundation Year", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10"];
				return ScienceCurriculumArray()
			}
		}
	}
	printCurriculumList = () => {			//todo remove when finished all curriculums
		let myString = '';
		this.getSubjectStructure().map((level) => {
			level.primaryTitles.map((primary) => {
				primary.secondaryTitles.map((secondary) => {
					secondary.linksToSecondary.map((link) => {
						let newString = `${link.linkCode}: {isSet: false, curriculum: 'Science', level: '${level.levelName}', linkDescription: '${link.linkDescription}'}, \n`
						myString = myString.concat(newString)
					})
				})										
			})		
		})
	}
	render() {
		return (
			<div>
				<div className="list-item">
					<h3 className="list-item__sub-title list-item__sub-title--left">Subject:</h3>
					<select className="dropdown dropdown--right" onChange={this.onSubjectChange}>
						<option value="">All Subject</option>
						<option value="Personal and Social Capability">Personal and Social Capability</option>
						<option value="Mathematics">Mathematics</option>
						<option value="Science">Science</option>
					</select>
				</div>
				<h1 className="curriculum-header">Curriculum Links</h1>
				<div className="curriculum-navigation">
					<button className="button button--secondary" onClick={(e) => {
						e.preventDefault();
						this.DisplayedLevels("decrease");
			        }}>Previous</button>
					<button className="button button--secondary" onClick={(e) => {
						e.preventDefault();
						this.DisplayedLevels("increase");
			        }}>Next</button>
				</div>
				<div className="curriculum-body">
					<div className="curriculum-level-scroll">
						{
							this.state.subject === '' ? '' : this.getSubjectStructure().map((level) => {
								return (
									<div>
										<div className="curriculum-level">
											<h3 className="curriculum-level__title selectable" levelname={level.levelName} onClick={this.onLevelClick}>{level.levelName}</h3>	
											{
												level.primaryTitles.map((primary) => {
													return(
														<CheckboxListPrimary
															primary={primary}
															curriculumLinks={this.state.curriculumLinks}
															onChangeFunction={this.state.onChangeFunction}
														/>
													)
												})
											}
										</div>
									</div>
								)
							})	
						}
					</div>
				</div>
			</div>
		);
	};
};
