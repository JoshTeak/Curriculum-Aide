// Expenses Reducer
const popupsReducerDefaultState = {popupFilter: false};

export default (state = popupsReducerDefaultState, action) => {
	switch (action.type) {
		case 'POPUP_FILTER':
			return {
				popupFilter: !state.popupFilter
			};
		default:
			return state;
	}
};