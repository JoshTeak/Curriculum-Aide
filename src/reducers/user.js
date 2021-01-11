// Expenses Reducer
const userReducerDefaultState = [];

export default (state = userReducerDefaultState, action) => {
	switch (action.type) {
		case 'CREATE_USER':
			return action.user;
		case 'SET_USER':
			return action.user;
		default:
			return state;
	}
};