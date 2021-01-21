import React from 'react';
import { connect } from 'react-redux';
import {startEditUser} from '../actions/user';
import {startEditLesson} from '../actions/lessons';

export class ReportPopup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {report: '', offence: '', error: false};
	};
	onReportValueChange = (e) => {
		const reportValue = e.target.value;
		this.setState(() => ({report: reportValue}));
	};
	onOffenceValueChange = (e) => {
		const offenceValue = e.target.value;
		this.setState(() => ({offence: offenceValue}));
	};
	onSubmit = (e) => {
		e.preventDefault();
		
		if(this.state.report === '' || this.state.offence === '') {
			this.setState(() => ({
				error: true
			}));
		} else {
			this.setState(() => ({
				error: false
			}));

			let myReports = {};
			this.props.user.reportsList ? myReports = this.props.user.reportsList : myReports = {};
			myReports[this.props.lesson.id] = {report: this.state.report, offence: this.state.offence}
			const newUser = {...this.props.user, reportsList: myReports}
			this.props.startEditUser(this.props.myId, newUser);

			let newReports = {};
			this.props.lesson.reportsList ? newReports = this.props.lesson.reportsList : newReports = {};
			newReports[this.props.myId] = {report: this.state.report, offence: this.state.offence};
			const newLesson = {...this.props.lesson, reportsList: newReports}
			this.props.startEditLesson(this.props.lesson.id, newLesson);

			this.props.backgroundClick(e);
		}
	};
	render() {
		return (
			<div className="popup">
				<div className="popup-background" onClick={this.props.backgroundClick}>
				</div>
				<div className="popup-container">
					<div className="input-popup">
						<div className="list-body">
							<div className="list-item">
								<h3 className="list-item__title">Report Lesson</h3>
							</div>
							<div className="list-item">
								<div className="list-item__pair">
									<h3 className="list-item__sub-title list-item__sub-title--left">Offence Type:</h3>
									<select className="dropdown dropdown--right" onChange={this.onOffenceValueChange}>
										<option selected hidden >Select Offence</option>
										<option value="Inappropriate Content">Inappropriate Content</option>
									  	<option value="Incorrect Curriculum Links">Incorrect Curriculum Links</option>
									  	<option value="Insufficient Information Provided">Insufficient Information Provided</option>
									  	<option value="Spelling Errors">Spelling Errors</option>
									  	<option value="Other">Other</option>
									</select>
								</div>
								{this.state.error && this.state.offence === '' ? <p className="form__error">*Please select an offence.</p> : ""}
							</div>
							<div className="list-item">
								<h3 className="list-item__sub-title">Additional Report Information:</h3>
								<textarea 
									placeholder="Report Information"
									className="textarea"
									value={this.state.report}
									onChange={this.onReportValueChange}
								/>
								{this.state.error && this.state.report === '' ? <p className="form__error">*Please provide additional report information.</p> : ""}
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

export default connect(mapStateToProps, mapDispatchToProps)(ReportPopup);