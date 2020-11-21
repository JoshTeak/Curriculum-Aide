import React from 'react';
import { connect } from 'react-redux';
import LessonListItem from './LessonListItem';
import selectLessons from '../selectors/lessons';

const LessonList = (props) => (
	<div className="content-container">
		<div className="list-header">
			<div>Lessons</div>
		</div>
		<h1>Lesson List</h1>
		{			
			props.lessons.length === 0 ? (
				<p>No lessons</p>
			) : (
				props.lessons.map((lesson) => {
					return <LessonListItem key={lesson.id} {...lesson}/>
				})
			)
		}
	</div>
);

const mapStateToProps = (state) => {
	return {
		lessons: selectLessons(state.lessons, state.filters)
	};
};

export default connect(mapStateToProps)(LessonList);