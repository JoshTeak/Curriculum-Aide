import React from 'react';
import { linkStructure } from './CurriculumAddresses';

export default class CheckboxList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {curriculumLinks: props.curriculumLinks, onChangeFunction: props.onChangeFunction}

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

	CheckDisplayedLevel = () => {
		if(window.innerWidth >= 1800) {
			return ["levelD", "FoundationLevel", "Levels1and2"];
		} else if (window.innerWidth >= 1500 && window.innerWidth < 1800) {
			return ["levelD", "FoundationLevel"];
		} else {
			return ["levelD"];
		}
	}

	SingleCheckbox = (onChangeFunction, curriculumStructureSegment) => (
		<div>
			{
				Object.keys(curriculumStructureSegment).map((link) => {
					return <div className="curriculum-item__link">
								<h3 className="curriculum-item__descriptor">{curriculumStructureSegment[link].linkDescription}</h3>
								<div className="curriculum-item__pair">
									<h3 className="curriculum-item__code">{'(' + link + ')'}</h3>
									<input
										key={link}
										type="checkbox" 
										value={link}
										onChange={onChangeFunction}
										checked={curriculumStructureSegment[link].isSet}
									/>
								</div>
							</div>
				})
			}
		</div>
	);

	render() {
		return (
			<div>
				<h1 className="curriculum-header">Curriculum Links</h1>
				<div className="curriculum-body">
					{
						Object.keys(linkStructure(this.state.curriculumLinks).pascCurriculum).map((level) => {
							const years = this.CheckDisplayedLevel();
							if(years.indexOf(level) !== -1)
							{
								return <div className="curriculum-level">
										<h3 className="curriculum-level__title">{level}</h3>	
										<div className="curriculum-item__half">
											<h3 className="curriculum-item__title">Self-Awareness and Management</h3>
											<div className="curriculum-item__section">
												<h3 className="curriculum-item__sub-title">Recognition and expression of emotion</h3>
												<div className="curriculum-item__sub-section">
													{this.SingleCheckbox(this.state.onChangeFunction, linkStructure(this.state.curriculumLinks).pascCurriculum[level].seaam.raeoe)}
												</div>
											</div>
											<div>
												<h3 className="curriculum-item__sub-title">Development of resilience</h3>
												<div className="curriculum-item__sub-section">
													{this.SingleCheckbox(this.state.onChangeFunction, linkStructure(this.state.curriculumLinks).pascCurriculum[level].seaam.dor)}
												</div>
											</div>
										</div>
										<div className="curriculum-item__half">
											<h3 className="curriculum-item__title">Social Awareness and Management</h3>
											<div className="curriculum-item__section">
												<h3 className="curriculum-item__sub-title">Relationships and diversity</h3>
												<div className="curriculum-item__sub-section">
													{this.SingleCheckbox(this.state.onChangeFunction, linkStructure(this.state.curriculumLinks).pascCurriculum[level].soaam.rad)}
												</div>
											</div>
											<div>
												<h3 className="curriculum-item__sub-title">Collaboration</h3>	
												<div className="curriculum-item__sub-section">
													{this.SingleCheckbox(this.state.onChangeFunction, linkStructure(this.state.curriculumLinks).pascCurriculum[level].soaam.col)}
												</div>
											</div>
										</div>	
									</div>
							}
						})	
					}
				</div>
			</div>
		);
	};
};
