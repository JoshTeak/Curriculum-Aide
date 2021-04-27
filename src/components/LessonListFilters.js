import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, setCurriculumLinksFilter, sortByRating, sortByTitle, sortByLevel ,sortByDuration, sortByFavourite, sortAll, resetFilter} from '../actions/filters';
import CheckboxList from './CheckboxList';
import { defaultLinks } from '../components/CurriculumAddresses';

class LessonListFilters extends React.Component {
	constructor(props) {
		super(props);

		this.state = {curriculumLinks: defaultLinks(), isFavouritesChecked: false, viewAll: true, sidebarExpanded: false, isDesktop: false};
		this.checkForNoFiltering();

	    this.updatePredicate = this.updatePredicate.bind(this);
	}

	componentDidMount() {
		this.updatePredicate();
		window.addEventListener("resize", this.updatePredicate);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updatePredicate);
	}

	updatePredicate() {
		this.setState({ isDesktop: window.innerWidth > 900 });

		this.checkSidebarStatus();
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
		sidebar.style.transition = "all 1s ease";

		if(sidebar.style.transform === "translateX(100%)")
		{
			sidebar.style.transform = "translateX(0px)";
			this.setState({sidebarExpanded: false})
		} else {
			sidebar.style.transform = "translateX(100%)";
			this.setState({sidebarExpanded: true})
		}
	}

	mobileCollapsibleSidebar = () => {
		const sidebar = document.getElementById("sidebar");
		sidebar.style.transition = "all 1s ease";

		if(sidebar.style.transform === "translateY(calc(-100vh + 267px))")
		{
			sidebar.style.transform = "translateY(0px)";
			this.setState({sidebarExpanded: false})
			document.documentElement.style.overflow = "auto"
		} else {
			sidebar.style.transform = "translateY(calc(-100vh + 267px))";
			this.setState({sidebarExpanded: true})
			document.documentElement.scrollTop = 0;
			document.documentElement.style.overflow = "hidden"
		}
	}

	checkSidebarStatus = () => {
		const sidebar = document.getElementById("sidebar");
		sidebar.style.transition = "all 0s ease";

		if(this.state.sidebarExpanded)
		{
			if(this.state.isDesktop)
			{
				sidebar.style.transform = "translateY(0px)";
				sidebar.style.transform = "translateX(100%)";
				document.documentElement.style.overflow = "auto"
			} else {
				sidebar.style.transform = "translateX(0px)";
				sidebar.style.transform = "translateY(calc(-100vh + 267px))";
				document.documentElement.scrollTop = 0;
				document.documentElement.style.overflow = "hidden"
			}
		}
	}

	clearFilter = () => {
		this.setState(() => ({
			isFavouritesChecked: false
		}));
		this.props.resetFilter();
	}

	render() {
		return (
			<div>
				{this.state.isDesktop ? 
					<div>
						<div className="collapsibleSidebar" id="sidebar">
							<div className="collapsibleSidebar__header-options">
								<div className="button-group button-group-filter">
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
											onChangeFunction={this.onCurriculumLinkChange}
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
					</div>

					: 

					<div>
						<div className="mobile--collapsibleSidebar" id="sidebar">
							<div className="collapsibleSidebar__header-options">
								<div className="button-group button-group-filter">
									<button className="button button--close selectable" onClick={this.mobileCollapsibleSidebar}>
										<div className="button-close-icon">
											<div className="button-close-x">x</div>
										</div>
									</button>
								</div>
							</div>
							<div className="mobile--filter">
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
											onChangeFunction={this.onCurriculumLinkChange}
											curriculumLinks={this.state.curriculumLinks}
										/>
									</div>	
								</div>
							</div>
						</div>
						<div className="mobile--collapsibleSidebar__button selectable">
							{ 
								this.state.sidebarExpanded ?
								'' :
								<button className="collapsibleSidebar__button-icon" onClick={this.mobileCollapsibleSidebar}>Filter</button>
							}
						</div>
					</div>
				}
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