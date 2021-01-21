import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import LessonPopup from './LessonPopup';
import { defaultLinks } from '../components/CurriculumAddresses';
import { startEditUser } from '../actions/user'
import { startEditLesson } from '../actions/lessons'

export class LessonListItem extends React.Component {
	constructor(props) {
		super(props);

		this.isDisplayed = "none";

		if(this.props.lesson.favoritesList && this.props.lesson.favoritesList[this.props.user.id])
		{
			this.boxChecked = this.props.lesson.favoritesList[this.props.user.id].favorated;
		} else {
			this.boxChecked = false;
		}
	}
	lessonClicked = (e) => {
		if(e.target.type !== "checkbox")
		{
			if(this.isDisplayed === "none")
		  	{
		  		this.isDisplayed = "block";
		  	} else if(this.isDisplayed === "block")
		  	{
		  		this.isDisplayed = "none";
		  	}
		  	this.forceUpdate();
		}
	}
	favorateClicked = (e) => {

		let myFavorites = {};
		this.props.user.favoritesList ? myFavorites = this.props.user.favoritesList : myFavorites = {};
		let newFavorites = {};
		this.props.lesson.favoritesList ? newFavorites = this.props.lesson.favoritesList : newFavorites = {};

		if(!this.boxChecked)
		{	
			myFavorites[this.props.lesson.id] = {favorated: true}
			newFavorites[this.props.user.id] = {favorated: true};
		} else {
			delete myFavorites[this.props.lesson.id];
			delete newFavorites[this.props.user.id];
		}

		const newUser = {...this.props.user, favoritesList: myFavorites}
		this.props.startEditUser(this.props.user.id, newUser);
		const newLesson = {...this.props.lesson, favoritesList: newFavorites}
		this.props.startEditLesson(this.props.lesson.id, newLesson);
		
		this.boxChecked = !this.boxChecked;
	}
	render() {
		return (
			<div className="lesson">
				<div className="lesson-selector">
					<div className="list-body" onClick={this.lessonClicked}>
						<div className="list-item list-item--multiple">
							<div className="list-item__pair">
								<p className="list-item__text">{this.props.lesson.level}</p>
							</div>
							<div className="list-item__pair">
								<p className="list-item__text">{this.props.lesson.duration}</p>
							</div>
						</div>
						<div className="list-item">
							<h3 className="list-item__title">{this.props.lesson.title}</h3>
						</div>
						<div className="list-item">
							<p className="list-item__text">{this.props.lesson.description}</p>
						</div>						
						<div className="list-item list-item--multiple">
							<div className="list-item__pair">
								<p className="list-item__text">{'Rating: ' + this.props.lesson.rating}</p>
							</div>
							<div className="list-item__pair">
								<input
									type="checkbox" 
									onChange={this.favorateClicked}
									checked={this.boxChecked}
								/>
							</div>
						</div>
					</div>					
				</div>
				{
					this.isDisplayed === "none" ? "" : (
						<LessonPopup 
							lesson={this.props.lesson} 
							backgroundClick={this.lessonClicked}
							favorated={this.favorateClicked}
							isChecked={this.boxChecked}
						/>
					)
				}
			</div>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
}

const mapDispatchToProps = (dispatch) => ({
	startEditUser: (myId, updates) => dispatch(startEditUser(myId, updates)),
	startEditLesson: (lessonId, updates) => dispatch(startEditLesson(lessonId, updates))
})

export default connect(mapStateToProps, mapDispatchToProps)(LessonListItem)