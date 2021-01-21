import React from 'react';
import { linkArray } from './CurriculumAddresses';

export default class CheckboxList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {curriculumLinks: props.curriculumLinks, onChangeFunction: props.onChangeFunction}
		this.levels = ["Level A", "Level B", "Level C", "Level D", "Foundation Level", "Levels 1 and 2", "Levels 3 and 4", "Levels 5 and 6"];
		this.firstLevelDisplayed = 0;
		this.levelToLinksArray = [];
		this.levelsToLinksObject = {};

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
			return this.levels.slice(currentLevel, currentLevel + 3);
		} else if (window.innerWidth >= 1500 && window.innerWidth < 1800) {
			return this.levels.slice(currentLevel, currentLevel + 2);
		} else {
			return this.levels.slice(currentLevel, currentLevel + 1);
		}
	}
	DisplayedLevels = (type) => {
		switch (type) {
			case 'increase':
				if(this.firstLevelDisplayed < this.levels.length - this.CheckDisplayedLevel(this.firstLevelDisplayed).length)
				{
					this.firstLevelDisplayed++;
					this.forceUpdate();
				}
				break;
			case 'decrease':
				if(this.firstLevelDisplayed > 0)
				{
					this.firstLevelDisplayed--;
					this.forceUpdate();
				}
				break;
			default:
		};	
	};
	addToLinkArray = (link) => {
		this.levelToLinksArray.push([link.linkCode])
	}
	createLevelsToLinks = (level) => {
		if(this.levelToLinksArray !== [])
		{
			this.levelsToLinksObject = {...this.levelsToLinksObject, [level.levelName]: this.levelToLinksArray}
		}
		this.levelToLinksArray = [];
	}
	onLevelClick = (e) => {
		const level = e.target.getAttribute('levelname');
		this.props.onYearChange(this.levelsToLinksObject[level]);
	}
	render() {
		return (
			<div>
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
					{
						linkArray().map((level) => {
							return (
								<div>
									{this.CheckDisplayedLevel(this.firstLevelDisplayed).indexOf(level.levelName) !== -1 ?
										<div className="curriculum-level">
											<h3 className="curriculum-level__title" levelname={level.levelName} onClick={this.onLevelClick}>{level.levelName}</h3>	
											{
												level.primaryTitles.map((primary) => {
													return (
														<div className="curriculum-item__half">
															<h3 className="curriculum-item__title">{primary.primaryName}</h3>
															{
																primary.secondaryTitles.map((secondary) => {
																	return (
																		<div className="curriculum-item__section">
																			<h3 className="curriculum-item__sub-title">{secondary.secondaryName}</h3>
																			{
																				secondary.linksToSecondary.map((link) => {
																					return (
																						<div className="curriculum-item__link">
																							<h3 className="curriculum-item__descriptor">{link.linkDescription}</h3>
																							<div className="curriculum-item__pair">
																								<h3 className="curriculum-item__code">{'(' + link.linkCode + ')'}</h3>
																								<input
																									key={link.linkCode}
																									type="checkbox" 
																									value={link.linkCode}
																									onChange={this.state.onChangeFunction}
																									checked={this.state.curriculumLinks[link.linkCode].isSet}
																								/>
																							</div>
																							{this.addToLinkArray(link)}
																						</div>
																					)
																				})
																			}
																		</div>
																	)
																})
															}
														</div>
													)
												})
											}
										</div> : ''
									}
									{this.createLevelsToLinks(level)}
								</div>
							)
						})	
					}
				</div>
			</div>
		);
	};
};
