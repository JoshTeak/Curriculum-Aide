import React from 'react';
import { connect } from 'react-redux';
import { selectCurriculum } from '../actions/filters';
import { linkArray, MathimaticsCurriculumArray, ScienceCurriculumArray, EnglishCurriculumArray} from './CurriculumAddresses';
import CheckboxListPrimary from './CheckboxListPrimary';

class CheckboxList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			curriculumLinks: props.curriculumLinks, 
			onChangeFunction: props.onChangeFunction, 
			subject: this.props.filters.subject, 
			levels: [], 
			lessons: this.props.lessons
		}

		this.numberOfEnglish = 0;
		this.numberOfScience = 0;
		this.numberOfMath = 0; 
		this.numberOfPaSC = 0;
		this.firstLevelDisplayed = 0;

		this.numberOfLessonsInSubject();

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
	numberOfLessonsInSubject = () => {
		let science = 0;
		let math = 0;
		let english = 0;
		let PaSC = 0;

		this.state.lessons.forEach((lesson) => {
			switch (lesson.subjects) {
				case 'Science ':
					science++;
					break;
				case 'Mathematics ':
					math++;
					break;
				case 'English ':
					english++;
					break;
				case 'Personal and Social Capability ':
					PaSC++
					break;
				default:
			}
		})

		this.numberOfEnglish = english;
		this.numberOfScience = science;
		this.numberOfMath = math;
		this.numberOfPaSC = PaSC;
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
		if(this.selectSubject)
		{
			this.selectSubject(subject)
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
			case 'English':
			{
				this.state.levels = ["Foundation Year", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10"];
				return EnglishCurriculumArray()
			}
		}
	}
	selectSubject = (subject) => {
		this.props.selectCurriculum(subject);
	}
	printCurriculumList = () => {			//todo remove when finished all curriculums
		let myString = '';
		this.getSubjectStructure().map((level) => {
			level.primaryTitles.map((primary) => {
				primary.secondaryTitles.map((secondary) => {
					secondary.linksToSecondary.map((link) => {
						let newString = `${link.linkCode}: {isSet: false, curriculum: 'English', level: '${level.levelName}', linkDescription: '${link.linkDescription}'}, \n`
						myString = myString.concat(newString)
					})
				})										
			})		
		})
	}
	render() {
		return (
			<div>
				<div className="list-item list-item-left-align">
					<h3 className="list-item__sub-title">Subject:</h3>
					<select className="dropdown dropdown--bottom" onChange={this.onSubjectChange} value={this.props.filters.subject}>
						<option value="">All Subject</option>
						<option value="Personal and Social Capability">Personal and Social Capability: {this.numberOfPaSC}</option>
						<option value="Mathematics">Mathematics: {this.numberOfMath}</option>
						<option value="Science">Science: {this.numberOfScience}</option>
						<option value="English">English: {this.numberOfEnglish}</option>
					</select>
				</div>
				<div className="curriculum-body">
					{
						this.props.filters.subject === '' ? 
						<div className="filter-request">
							<div className="filter-instruction">
								<p>Narrow your search by selecting a subject.</p>
							</div>
							<div className="filter-image-box">
								<img src="/images/Education.jpg" alt="Education" />
							</div>
						</div> :
						<div>
							<h1 className="curriculum-header">Curriculum Links</h1>
							<div className="curriculum-navigation">
								<button className="button button--secondary" onClick={(e) => {
									e.preventDefault();
									this.DisplayedLevels("decrease");
						        }}>
									<div className="icon-container">
			                            <img className="icon" src="/images/Arrow Left.png" alt="Arrow Left" />
			                        </div>
								</button>
								<button className="button button--secondary" onClick={(e) => {
									e.preventDefault();
									this.DisplayedLevels("increase");
						        }}>
									<div className="icon-container">
			                            <img className="icon" src="/images/Arrow Right.png" alt="Arrow Right" />
			                        </div>
								</button>
							</div>
						</div>
					}
					<div className="curriculum-level-scroll">
						{
							this.props.filters.subject === '' ? '' : this.getSubjectStructure().map((level) => {
								return (
									<div>
										<div className="curriculum-level">
											<h3 className="curriculum-level__title selectable" levelname={level.levelName} onClick={this.onLevelClick}>{level.levelName}</h3>	
											{
												level.primaryTitles.map((primary) => {
													return(
														<CheckboxListPrimary
															primary={primary}
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

const mapDispatchToProps = (dispatch) => ({
	selectCurriculum: (subject) => dispatch(selectCurriculum(subject))
});

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
		lessons: state.lessons
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxList);