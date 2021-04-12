import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import LessonPopup from './LessonPopup';
import LoginPopup from './LoginPopup';
import { defaultLinks } from './CurriculumAddresses';
import { startEditUser } from '../actions/user';
import LoadingPage from './LoadingPage';

export class LessonListItem extends React.Component {
	constructor(props) {
		super(props);

		this.isDisplayed = "none";
		this.boxChecked = false;	
	}

	initializeBoxes = () => {
		if(this.props.isAuthenticated)
		{
			if(!!this.props.user.favoritesList && !!this.props.user.favoritesList[this.props.lesson.id])
			{
				this.boxChecked = true;
			}
		} else {
			this.boxChecked = false;
		}
	}

	lessonClicked = (e) => {
		if(e.target.className !== "icon")
		{
			if(this.isDisplayed === "none")
		  	{
		  		this.isDisplayed = "block";
				document.documentElement.scrollTop = 0;
				document.documentElement.style.overflow = "hidden"
		  	} else if(this.isDisplayed === "block")
		  	{
		  		this.isDisplayed = "none";
		  		document.documentElement.style.overflow = "auto"
		  	}
		  	this.forceUpdate();
		}
	}
	
	favorateClicked = (e) => {
		if(this.props.isAuthenticated)
		{
			let myFavorites = {};
			this.props.user.favoritesList ? myFavorites = this.props.user.favoritesList : myFavorites = {};
			if(!this.boxChecked)
			{	
				myFavorites[this.props.lesson.id] = {favorated: true}
			} else {
				delete myFavorites[this.props.lesson.id];
			}

			const newUser = {favoritesList: myFavorites}
			this.props.startEditUser(this.props.user.id, newUser);

			this.boxChecked = !this.boxChecked;
		} else {
			this.isDisplayed = "block";
			this.forceUpdate();
		}
	}
	render() {
		return (
			<div className="lesson">
				{this.initializeBoxes()}
				<div className="lesson-selector">
					<div className="list-body" onClick={this.lessonClicked}>
						<div className="list-item list-item--multiple">
							<div className="list-item__pair">
								<p className="list-item__text">Levels: {this.props.lesson.level}</p>
							</div>
							<div className="list-item__pair">
								<p className="list-item__text">Duration: {this.props.lesson.duration} minutes</p>
							</div>
						</div>
						<div className="list-item">
							<h4 className="list-item__title">{this.props.lesson.title}</h4>
						</div>
						<div className="list-item list-item-description">
							<span className="list-item__text">{this.props.lesson.description}</span>
						</div>						
						<div className="list-item list-item--multiple">
							<div className="list-item__pair">
								<p className="list-item__text">{'Rating: ' + this.props.lesson.rating}</p>
							</div>
							<div className="list-item__pair">
								<div className="list-item-icon-container">
									<div class="round-checkbox" onClick={this.favorateClicked}>
									    <input
											type="checkbox" 
											checked={this.boxChecked}
										/>
										{
											this.boxChecked ? 
									    	<img className="icon" src="/images/Checkmark Circle.png" alt="Checkmark Circle" /> :
									    	<img className="icon" src="/images/Circle.png" alt="Circle" />
									    }
									</div>
								</div>
							</div>
						</div>
					</div>					
				</div>
				{
					this.isDisplayed === "block" && this.props.isAuthenticated ? 
					<LessonPopup 
						lesson={this.props.lesson} 
						backgroundClick={this.lessonClicked}
						favorated={this.favorateClicked}
						isChecked={this.boxChecked}
					/> : ''
				}
				{
					this.isDisplayed === "block" && !this.props.isAuthenticated ? 
					<LoginPopup 
						backgroundClick={this.lessonClicked}
					/> : ''
				}
			</div>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
		isAuthenticated: !!state.auth.uid
	};
}

const mapDispatchToProps = (dispatch) => ({
	startEditUser: (myId, updates) => dispatch(startEditUser(myId, updates))
})

export default connect(mapStateToProps, mapDispatchToProps)(LessonListItem)