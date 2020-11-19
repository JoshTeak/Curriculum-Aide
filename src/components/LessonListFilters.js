import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, setCurriculumLinksFilter} from '../actions/filters';
import CheckboxList from './CheckboxList';
import defaultLinks from '../components/CurriculumAddresses';

class ExpenseListFilters extends React.Component {
	constructor(props) {
		super(props);

		this.state = {curriculumLinks: defaultLinks()};
	}
	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	}
	onCurriculumLinkChange = (e) => {
		Object.keys(this.state.curriculumLinks).forEach(key => {
			if(key === e.target.value)
			{
				this.state.curriculumLinks[key] = e.target.checked;
			}
		});
		this.props.setCurriculumLinksFilter(this.state.curriculumLinks);
	}
	render() {
		return (
			<div>
				<input 
					type="text" 
					defaultValue={this.props.filters.text}
					onChange={this.onTextChange}
				/>
				<CheckboxList 
					onChangeFunction={this.onCurriculumLinkChange}
					curriculumLinks={this.state.curriculumLinks}
				/>
			</div>
		);
	};	
};

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	};
};

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	setCurriculumLinksFilter: (curriculumLinks) => dispatch(setCurriculumLinksFilter(curriculumLinks))
});


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);