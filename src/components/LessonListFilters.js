import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, setCurriculumLinksFilter, sortByRating, sortByTitle, sortByLevel ,sortByDuration} from '../actions/filters';
import CheckboxList from './CheckboxList';
import { defaultLinks } from '../components/CurriculumAddresses';

class LessonListFilters extends React.Component {
	constructor(props) {
		super(props);

		this.state = {curriculumLinks: defaultLinks()};
	}
	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	}
	onSortChange = (e) => {
	    switch (e.target.value) {
			case 'rating':
				this.props.sortByRating();
				break;
			case 'title':
				this.props.sortByTitle();	
				break;
			case 'level':
				this.props.sortByLevel();
				break;
			case 'duration':
				this.props.sortByDuration();
				break;
			default:
				console.log('default');
		}
	};
	onCurriculumLinkChange = (e) => {
		Object.keys(this.state.curriculumLinks).forEach(link => {
			if(link === e.target.value)
			{
				this.state.curriculumLinks[link].isSet = e.target.checked;
			}
		});
		this.props.setCurriculumLinksFilter(this.state.curriculumLinks);
	}
	collapsibleSidebar = () => {
		const sidebar = document.getElementById("sidebar");

		if(sidebar.style.transform === "translateX(0px)")
		{
			sidebar.style.transform = "translateX(calc(1.6rem - 100%))";
			sidebar.style.position = "absolute";
		} else {
			sidebar.style.transform = "translateX(0px)";
			sidebar.style.position = "unset";
		}
	}
	render() {
		return (
			<div className="collapsibleSidebar" id="sidebar">
				<div className="filter">
					<div className="input-group">
						<div className="input-group__item">
							<input 
								type="text"
								className="text-input" 
								placeholder="Search lessons"
								value={this.props.filters.text}
								onChange={this.onTextChange}
							/>
						</div>
						<div className="input-group__item">
							<select className="dropdown"> 
								<option value="">All Levels</option>
								<option value="levelA">level A</option>
								<option value="levelB">level B</option>
								<option value="levelC">level C</option>
								<option value="levelD">level D</option>
								<option value="FoundationLevel">Foundation Level</option>
								<option value="Levels1and2">Levels 1 and 2</option>
								<option value="Levels3and4">Levels 3 and 4</option>
								<option value="Levels5and6">Levels 5 and 6</option>
							</select>
						</div>
						<div className="input-group__item">
							<select className="dropdown" value={this.props.filters.sortBy} onChange={this.onSortChange}> 
								<option value="">Sort By</option>
								<option value="title">Alphabetical Order</option>
								<option value="duration">Lesson Duration</option>
								<option value="level">Level</option>
								<option value="rating">Rating</option>
							</select>
						</div>
					</div>
					<div className="input-group">
						<div className="input-group__item">
							<CheckboxList 
								onChangeFunction={this.onCurriculumLinkChange}
								curriculumLinks={this.state.curriculumLinks}
							/>
						</div>
					</div>	
				</div>
				<button className="collapsibleSidebar__button" onClick={this.collapsibleSidebar}>
				</button>
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
	setCurriculumLinksFilter: (curriculumLinks) => dispatch(setCurriculumLinksFilter(curriculumLinks)),
	sortByRating: () => dispatch(sortByRating()),
	sortByTitle: () => dispatch(sortByTitle()),
	sortByLevel: () => dispatch(sortByLevel()),
	sortByDuration: () => dispatch(sortByDuration())
});


export default connect(mapStateToProps, mapDispatchToProps)(LessonListFilters);