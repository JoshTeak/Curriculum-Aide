import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, setCurriculumLinksFilter, sortByRating, sortByTitle, sortByLevel ,sortByDuration, sortByFavourite, sortAll, resetFilter} from '../actions/filters';
import CheckboxList from './CheckboxList';
import { defaultLinks } from '../components/CurriculumAddresses';

class LessonListFilters extends React.Component {
	constructor(props) {
		super(props);

		this.state = {curriculumLinks: defaultLinks(), isFavouritesChecked: false, viewAll: true, sidebarExpanded: false};
		this.checkForNoFiltering();
	}

	checkForNoFiltering = () => {
		const links = this.state.curriculumLinks
		let viewAllLatch = true;
		Object.keys(links).forEach(key => {
			if(links[key].isSet)
			{
				viewAllLatch = false;
			}
		})
		this.state.viewAll = viewAllLatch;
		if(viewAllLatch) 
		{
			this.props.sortAll();
		}
	}
	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	}
	onFavouriteChecked = (e) => {
		const checked = !this.state.isFavouritesChecked;
		this.setState(() => ({isFavouritesChecked: checked}));
		if(!this.state.isFavouritesChecked)
		{
			this.props.sortByFavourite(this.props.user.favoritesList);
		} else {
			this.props.sortByFavourite({});
		}
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
		}
	}
	onCurriculumLinkChange = (e) => {
		this.state.curriculumLinks[e.target.value].isSet = e.target.checked;
		this.props.setCurriculumLinksFilter(this.state.curriculumLinks);
		this.checkForNoFiltering();
	}
	onCurriculumYearSelected = (yearLinksArray) => {			// This is weird but it works to turn the whole level on/off
		let latch = false;

		yearLinksArray.forEach(link => {
			if(this.state.curriculumLinks[link].isSet === false)
			{
				latch = true;
			}
		})

		if(latch === true)
		{
			yearLinksArray.forEach(link => {
				this.state.curriculumLinks[link].isSet = true;
				this.props.setCurriculumLinksFilter(this.state.curriculumLinks);
				this.checkForNoFiltering();
			})
		} else {
			yearLinksArray.forEach(link => {
				this.state.curriculumLinks[link].isSet = false;
				this.props.setCurriculumLinksFilter(this.state.curriculumLinks);
				this.checkForNoFiltering();
			})
		}
	}
	collapsibleSidebar = () => {
		const sidebar = document.getElementById("sidebar");

		if(sidebar.style.transform === "translateX(0px)")
		{
			sidebar.style.transform = "translateX(-100%)";
			this.setState({sidebarExpanded: false})
		} else {
			sidebar.style.transform = "translateX(0px)";
			this.setState({sidebarExpanded: true})
		}
	}
	clearFilter = () => {
		this.setState(() => ({
			isFavouritesChecked: false
		}));
		this.props.setTextFilter('');
		this.props.sortByFavourite({});
		this.props.setCurriculumLinksFilter(defaultLinks());
		this.props.resetFilter();
	}
	render() {
		return (
			<div className="collapsibleSidebar" id="sidebar">
				<div className="collapsibleSidebar__header-options">
					<div className="button-group">
						<button className="button button--close selectable" onClick={this.collapsibleSidebar}>
							<div className="button-close-icon">
								<div className="button-close-x">x</div>
							</div>
						</button>
					</div>
				</div>
				<div className="filter">
					<div className="list-item__title">
						<h2 className="filter-title">Filter</h2>
					</div>
					<div className="list-body">
						<div className="list-item list-item--multiple-left-align">
							<div className="list-item__pair list-item-left-align">
								<input 
									type="text"
									className="text-input" 
									placeholder="Search lessons"
									value={this.props.filters.text}
									onChange={this.onTextChange}
								/>
							</div>
							<div className="list-item__pair">
								<button className="button" onClick={this.clearFilter}>Clear Filter</button>
							</div>
						</div>
						<div className="list-item list-item--multiple-breakable">
							<div className="list-item__pair-breakable list-item-left-align">
								<h3 className="list-item__sub-title list-item__sub-title--left">Search Favourites:</h3>
								<div className="list-item__text-with-border text-border--right list-checkbox">
									<input
										type="checkbox" 
										onChange={this.onFavouriteChecked}
										checked={this.state.isFavouritesChecked}
									/>
								</div>
							</div>
							<div className="list-item__pair-breakable">
								<h3 className="list-item__sub-title list-item__sub-title--left">Filter By:</h3>
								<select className="dropdown dropdown--right" value={this.props.filters.sortBy} onChange={this.onSortChange}>
									<option value="title">Alphabetical Order</option>
									<option value="duration">Lesson Duration</option>
									<option value="level">Level</option>
									<option value="rating">Rating</option>
								</select>
							</div>
						</div>
						<div className="list-item">
							<CheckboxList 
								selectSubject={this.selectSubject}
								onChangeFunction={this.onCurriculumLinkChange}
								onYearChange={this.onCurriculumYearSelected}
								curriculumLinks={this.state.curriculumLinks}
							/>
						</div>	
					</div>
				</div>
				<div className="collapsibleSidebar__button selectable">
					{ 
						this.state.sidebarExpanded ?
						'' :
						<button className="collapsibleSidebar__button-icon" onClick={this.collapsibleSidebar}>Filter</button>
					}
				</div>
			</div>
		);
	};	
};

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
		user: state.user
	};
};

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	setCurriculumLinksFilter: (curriculumLinks) => dispatch(setCurriculumLinksFilter(curriculumLinks)),
	sortByRating: () => dispatch(sortByRating()),
	sortByTitle: () => dispatch(sortByTitle()),
	sortByLevel: () => dispatch(sortByLevel()),
	sortByDuration: () => dispatch(sortByDuration()),
	sortByFavourite: (favourites) => dispatch(sortByFavourite(favourites)),
	sortAll: () => dispatch(sortAll()),
	resetFilter: () => dispatch(resetFilter())
});


export default connect(mapStateToProps, mapDispatchToProps)(LessonListFilters);