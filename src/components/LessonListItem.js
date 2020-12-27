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
			<div className="lesson">
				<div className="lesson-selector">
					<div className="list-body" onClick={this.lessonClicked}>
						<div className="list-item list-item--multiple">
							<div className="list-item__pair">
								<p className="list-item__text">{this.state.level}</p>
							</div>
							<div className="list-item__pair">
								<p className="list-item__text">{this.state.duration}</p>
							</div>
						</div>
						<div className="list-item">
							<h3 className="list-item__title">{this.state.title}</h3>
						</div>
						<div className="list-item">
							<p className="list-item__text">{this.state.description}</p>
						</div>						
						<div className="list-item list-item--multiple">
							<div className="list-item__pair">
								<p className="list-item__text">{'Rating: ' + this.state.rating}</p>
							</div>
							<div className="list-item__pair">
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