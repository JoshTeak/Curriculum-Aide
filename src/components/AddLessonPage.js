import React from 'react';
import { connect } from 'react-redux';
import LessonForm from './LessonForm';
import {startAddLesson} from '../actions/lessons';

export class AddLessonPage extends React.Component {
	onSubmit = (lesson) => {
		this.props.startAddLesson(lesson);
		this.props.history.push('/');
	}
	render() {
		return (
			<div>
				<h1>Add Lesson</h1>
				<LessonForm 
					onSubmit={this.onSubmit}
				/>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	startAddLesson: (lesson) => dispatch(startAddLesson(lesson))
});

export default connect(undefined, mapDispatchToProps)(AddLessonPage);