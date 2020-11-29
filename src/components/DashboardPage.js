import React from 'react';
import LessonList from './LessonList';
import LessonListFilters from './LessonListFilters';

const DashboardPage = () => (
	<div>
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">Lesson plans</h1>
			</div>
		</div>
		<div className="page-body">
			<LessonListFilters />
			<LessonList />
		</div>
	</div>
);

export default DashboardPage;
