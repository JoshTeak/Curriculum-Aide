import React from 'react';
import { connect } from 'react-redux';
import {startEditUser} from '../actions/user';
import {startEditLesson} from '../actions/lessons';

export class RatingPopup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {rating: '', error: false};
	};
	onRatingValueChange = (e) => {
		const optionsArray = document.getElementsByClassName("button-array-option");
		let i;
		for (i = 0; i < optionsArray.length; i++)
		{
			optionsArray[i].classList.add("selectable");
			optionsArray[i].classList.remove("selected");
		}
		e.target.classList.add("selected");
		e.target.classList.remove("selectable");
		const ratingValue = e.target.value;
		this.setState(() => ({rating: ratingValue}));
	};
	calculateLessonRating = (ratingsList) => {
		if(ratingsList)
		{
			let totalRating;
			let rating;
			if(ratingsList)
			{
				Object.values(ratingsList).forEach(val => {
					rating = parseInt(val.rating, 10);
					totalRating =+ rating;
				})
			}	

			const averageRating = totalRating / Object.values(ratingsList).length;
			return averageRating;
		} else {
			return 0;
		}
	}
	onSubmit = (e) => {
		e.preventDefault();
		
		if(this.state.rating === '') {
			this.setState(() => ({
				error: true
			}));
		} else {
			this.setState(() => ({
				error: false
			}));


			let myRatings = this.props.user.ratingsList;
			myRatings[this.props.lesson.id] = {rating: this.state.rating}
			const newUser = {...this.props.user, ratingsList: myRatings}
			this.props.startEditUser(this.props.myId, newUser);

			let newRatings = {};
			this.props.lesson.ratingsList ? newRatings = this.props.lesson.ratingsList : newRatings = {};
			newRatings[this.props.myId] = {rating: this.state.rating};
			const lessonAverageRating = this.calculateLessonRating(newRatings);
			const newLesson = {...this.props.lesson, ratingsList: newRatings, rating: lessonAverageRating}
			this.props.startEditLesson(this.props.lesson.id, newLesson);

			this.props.backgroundClick(e);
		}
	};
	render() {
		return (
			<div className="popup">
				<div className="popup-background" onClick={this.props.backgroundClick}>
				</div>
				<div className="popup-group">
					<div className="popup-container">
						<div className="input-popup">
							<div className="list-body">
								<div className="list-item">
									<h3 className="list-item__title">Rate Lesson</h3>
								</div>
								<div className="list-item">
									<div className="button-array">
										<option className="button-array-option selectable" value="1" onClick={this.onRatingValueChange}>1</option>
										<option className="button-array-option selectable" value="2" onClick={this.onRatingValueChange}>2</option>
										<option className="button-array-option selectable" value="3" onClick={this.onRatingValueChange}>3</option>
										<option className="button-array-option selectable" value="4" onClick={this.onRatingValueChange}>4</option>
										<option className="button-array-option selectable" value="5" onClick={this.onRatingValueChange}>5</option>
									</div>
									{this.state.error ? <p className="form__error">*Please select the number of stars you want to rate this lesson.</p> : ""}
								</div>
								<div className="list-item list-item--multiple">
									<div className="list-item__pairr">
										<button className="button" onClick={this.onSubmit}>Add</button>
									</div>
									<div className="list-item__pair">
										<button className="button" onClick={this.props.backgroundClick}>Cancel</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
}

const mapDispatchToProps = (dispatch) => ({
	startEditUser: (myId, updates) => dispatch(startEditUser(myId, updates)),
	startEditLesson: (lessonId, updates) => dispatch(startEditLesson(lessonId, updates))
});

const mapStateToProps = (state) => ({
	user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(RatingPopup);