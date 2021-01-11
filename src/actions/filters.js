import defaultLinks from '../components/CurriculumAddresses';

export const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

export const setCurriculumLinksFilter = (curriculumLinks = defaultLinks()) => ({
	type: 'SET_CURRICULUM_LINK_FILTER',
	curriculumLinks
});

export const sortByRating = () => ({
	type: 'SORT_BY_RATING'
});

export const sortByTitle = () => ({
	type: 'SORT_BY_TITLE'
});

export const sortByLevel = () => ({
	type: 'SORT_BY_LEVEL'
});

export const sortByDuration = () => ({
	type: 'SORT_BY_DURATION'
});