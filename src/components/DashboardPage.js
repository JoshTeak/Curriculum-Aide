import React from 'react';
import LessonList from './LessonList';
import LessonListFilters from './LessonListFilters';
import LoadingPage from './LoadingPage';
import { startSetUser } from '../actions/user';
import { startSetLessons } from '../actions/lessons';
import { resetFilter } from '../actions/filters'
import { connect } from 'react-redux';
import Footer from '../components/Footer';

class DashboardPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {initialization: false};
		document.documentElement.style.overflow = "auto";
	};
	componentDidMount() {
		this.initializePage();
	}
	clearFilter = () => {
		this.setState(() => ({
			isFavouritesChecked: false
		}));
		this.props.resetFilter();
	}

	initializePage = () => {
		if(this.props.user.length === 0 || this.props.lessons === 0)
		{
			this.props.startSetLessons().then(() => {
				this.props.startSetUser(this.props.auth.uid).then(() => {
					this.setState(() => ({
						initialization: true
					}));
				});
	        });
		} else {
			this.setState(() => ({
				initialization: true
			}));
		}
		this.clearFilter();
	}
	render() {
		return (
			<div className="main">
				<div className="header-veil">
				</div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Lesson plans</h1>
					</div>
				</div>
				{
			    	this.state.initialization ?
					<div className="page-body">
						<LessonListFilters />
						<LessonList />
					</div>
					: <LoadingPage />
				}
        		<Footer />
			</div>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		lessons: state.lessons,
		user: state.user,
		auth: state.auth
	};
};

const mapDispatchToProps = (dispatch) => ({
	startSetUser: (id) => dispatch(startSetUser(id)),
	startSetLessons: () => dispatch(startSetLessons()),
	resetFilter: () => dispatch(resetFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);