import defaultLinks from '../components/CurriculumAddresses';

export const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

export const setCurriculumLinksFilter = (curriculumLinks = defaultLinks()) => ({
	type: 'SET_CURRICULUM_LINK_FILTER',
	curriculumLinks
});

export const selectCurriculum = (subject = '') => ({
	type: 'SELECT_SUBJECT',
	subject
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

export const sortByFavourite = (favourites = {}) => ({
	type: 'SORT_BY_FAVOURITE',
	favourites
});

export const sortAll = () => ({
	type: 'SORT_ALL'
});

export const resetFilter = () => ({
	type: 'RESET'
});
