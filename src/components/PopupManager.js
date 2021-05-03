import React from 'react';
import ReactDOM from 'react-dom';
import LessonListFilters from './LessonListFilters';

class PopupManager extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<LessonListFilters />
		)
	}
}


export default PopupManager;