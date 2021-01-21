import { defaultLinks } from '../components/CurriculumAddresses';

const filterReducerDefaultState = {
	text: '',
	sortBy: 'title',
	favourites: {},
	curriculumLinks: defaultLinks(),
	sortAll: false
}

export default (state = filterReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SET_CURRICULUM_LINK_FILTER':
			return {
				...state,
				curriculumLinks: action.curriculumLinks,
				sortAll: false
			};		
		case 'SORT_BY_RATING':
			return {
				...state,
				sortBy: 'rating'
			};
		case 'SORT_BY_TITLE':
			return {
				...state,
				sortBy: 'title'
			};
		case 'SORT_BY_LEVEL':
			return {
				...state,
				sortBy: 'level'
			};
		case 'SORT_BY_DURATION':
			return {
				...state,
				sortBy: 'duration'
			};
		case 'SORT_BY_FAVOURITE':
			return {
				...state,
				favourites: action.favourites
			}
		case 'SORT_ALL':
			return {
				...state,
				sortAll: true
			}
		default:
			return state;
	}
}