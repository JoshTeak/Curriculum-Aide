import React from 'react';
import { connect } from 'react-redux';
import LessonListItem from './LessonListItem';
import selectLessons from '../selectors/lessons';
import { startSetLessons } from '../actions/lessons';
import LoadingPage from './LoadingPage';

class LessonList extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<div className="content-container content-container--major">
				<div className="lesson-header">
					<div>Lesson List</div>
				</div>
				<div className="lesson-list">
					{			
						this.props.lessons.length === 0 ? (
							<p>No lessons</p>
						) : (
							this.props.lessons.map((lesson) => {
								return <LessonListItem key={lesson.id} lesson={lesson}/>
							})
						)
					}
				</div> 
			</div>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		lessons: selectLessons(state.lessons, state.filters)
	};
};

export default connect(mapStateToProps)(LessonList);