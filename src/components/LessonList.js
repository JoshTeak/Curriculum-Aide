import React from 'react';
import { connect } from 'react-redux';
import LessonListItem from './LessonListItem';
import selectLessons from '../selectors/lessons';

const LessonList = (props) => (
	<div className="content-container">
		<div className="lesson-header">
			<div>Lesson List</div>
		</div>
		<div className="lesson-list">
			{			
				props.lessons.length === 0 ? (
					<p>No lessons</p>
				) : (
					props.lessons.map((lesson) => {
						return <LessonListItem key={lesson.id} lesson={lesson}/>
					})
				)
			}
		</div>
	</div>
);

const mapStateToProps = (state) => {
	return {
		lessons: selectLessons(state.lessons, state.filters)
	};
};

export default connect(mapStateToProps)(LessonList);