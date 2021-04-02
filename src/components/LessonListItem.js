import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import LessonPopup from './LessonPopup';
import { defaultLinks } from './CurriculumAddresses';
import { startEditUser } from '../actions/user';
import LoadingPage from './LoadingPage';

export class LessonListItem extends React.Component {
	constructor(props) {
		super(props);

		this.isDisplayed = "none";
		this.state = {boxChecked: false};	
	}

	componentDidMount() {
		this.initializePage();
	}

	initializePage = () => {
		if(!!this.props.user.favoritesList[this.props.lesson.id])
		{
			this.setState(() => ({
				boxChecked: true
			}));
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

		let myFavorites = {};
		this.props.user.favoritesList ? myFavorites = this.props.user.favoritesList : myFavorites = {};
		if(!this.state.boxChecked)
		{	
			myFavorites[this.props.lesson.id] = {favorated: true}
		} else {
			delete myFavorites[this.props.lesson.id];
		}

		const newUser = {favoritesList: myFavorites}
		this.props.startEditUser(this.props.user.id, newUser);

		this.setState(() => ({
			boxChecked: !this.state.boxChecked
		}));
	}
	render() {
		return (
			<div className="lesson">
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
											checked={this.state.boxChecked}
										/>
										{
											this.state.boxChecked ? 
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
					this.isDisplayed === "none" ? "" : (
						<LessonPopup 
							lesson={this.props.lesson} 
							backgroundClick={this.lessonClicked}
							favorated={this.favorateClicked}
							isChecked={this.state.boxChecked}
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
	startEditUser: (myId, updates) => dispatch(startEditUser(myId, updates))
})

export default connect(mapStateToProps, mapDispatchToProps)(LessonListItem)