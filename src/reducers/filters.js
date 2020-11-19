const filterReducerDefaultState = {
	text: '',
	sortBy: 'rating',
	curriculumLinks: {link1: false, link2: false, link3: false}
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
				curriculumLinks: action.curriculumLinks
			};		
		case 'SORT_BY_RATING':
			return {
				...state,
				sortBy: 'rating'
			};
		default:
			return state;
	}
}