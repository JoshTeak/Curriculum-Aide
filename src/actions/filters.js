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
