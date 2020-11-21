// Expenses Reducer
const lessonsReducerDefaultState = [];

export default (state = lessonsReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_LESSON':
			return [
				...state,
				action.lesson
			];
		case 'EDIT_LESSON':
			return state.map((lesson) => {
				if(lesson.id === action.id) {
					return {
						...lesson,
						...action.updates
					};
				} else {
					return lesson;
				}
			});
		case 'REMOVE_LESSON':
			return state.filter(({id}) => id !== action.id);
		case 'SET_LESSONS':
			return action.lessons;
		default:
			return state;
	}
};