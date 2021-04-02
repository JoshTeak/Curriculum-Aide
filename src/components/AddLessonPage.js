import React from 'react';
import { connect } from 'react-redux';
import LessonForm from './LessonForm';
import {startAddLesson} from '../actions/lessons';
import Footer from '../components/Footer';

export class AddLessonPage extends React.Component {
	onSubmit = (lesson) => {
		this.props.startAddLesson(lesson);
		this.props.history.push('/');
	}
	render() {
		return (
			<div className="main">
				<div className="header-veil">
				</div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Add Lesson</h1>
					</div>
				</div>
				<div className="page-body">
					<LessonForm 
						onSubmit={this.onSubmit}
					/>
				</div>
				<Footer />
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	startAddLesson: (lesson) => dispatch(startAddLesson(lesson))
});

export default connect(undefined, mapDispatchToProps)(AddLessonPage);