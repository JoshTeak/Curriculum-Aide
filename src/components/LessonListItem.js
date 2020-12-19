import React from 'react';
import { Link } from 'react-router-dom';
import LessonPopup from './LessonPopup';
import { defaultLinks } from '../components/CurriculumAddresses';

export default class LessonListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = props.lesson;
		this.isDisplayed = "none";
	}

	lessonClicked = () => {
	  	if(this.isDisplayed === "none")
	  	{
	  		this.isDisplayed = "block";
	  	} else if(this.isDisplayed === "block")
	  	{
	  		this.isDisplayed = "none";
	  	}
	  	this.forceUpdate();
	}

	render() {
		return (
			<div className="lesson-selector">
				<div className="lesson-item" onClick={this.lessonClicked}>
					<div className="lesson-body" id="popup">
						<div className="lesson-item__grouped-part">
							<div className="lesson-item__part--pair">
								<p>{this.state.level}</p>
							</div>
							<div className="lesson-item__part--pair">
								<p>{this.state.duration}</p>
							</div>
						</div>
						<div className="lesson-item__part">
							<h3 className="lesson-item__title">{this.state.title}</h3>
						</div>
						<div className="lesson-item__part">
							<p className="lesson-item__data">{this.state.description}</p>
						</div>						
						<div className="lesson-item__grouped-part">
							<div className="lesson-item__part--pair">
								<p>{'Rating: ' + this.state.rating}</p>
							</div>
							<div className="lesson-item__part--pair">
								<input
									type="checkbox" 
								/>
							</div>
						</div>
					</div>
				</div>
				<LessonPopup lesson={this.state} display={this.isDisplayed} backgroundClick={this.lessonClicked}/>
			</div>
		);
	};
};