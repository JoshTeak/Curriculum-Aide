import React from 'react';
import LessonList from './LessonList';
import LessonListFilters from './LessonListFilters';

const DashboardPage = () => (
	<div>
		<LessonListFilters />
		<LessonList />
	</div>
);

export default DashboardPage;
