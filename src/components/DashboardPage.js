import React from 'react';
import LessonList from './LessonList';
import LessonListFilters from './LessonListFilters';
import LoadingPage from './LoadingPage';
import { startSetLessons } from '../actions/lessons';
import { resetFilter } from '../actions/filters'
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { startSetUser } from '../actions/user';

class DashboardPage extends React.Component {
	constructor(props) {
		super(props)
		this.initialization = false;
		document.documentElement.style.overflow = "auto";
	};

	componentDidMount() {
		this.props.resetFilter();
	}

	initializePage = () => {
		if(!!this.props.auth.uid)
		{
    		this.props.startSetUser(this.props.auth.uid).then(() => {
    			if(this.props.lessons.length === 0)
				{
					this.props.startSetLessons().then(() => {
						this.initialization = true;
			        });
				} else {
					this.initialization = true;
				}
    		});
		} else {
			if(this.props.user.length === 0 || this.props.lessons.length === 0)
			{
				this.props.startSetLessons().then(() => {
					this.initialization = true;
		        });
			} else {
				this.initialization = true;
			}
		}
	}
	render() {
		return (
			<div className="main">
				{this.initializePage()}
				<div className="header-veil">
				</div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Lesson plans</h1>
					</div>
				</div>
				{
			    	this.initialization ?
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
	startSetUser: (uid) => dispatch(startSetUser(uid)),
	startSetLessons: () => dispatch(startSetLessons()),
	resetFilter: () => dispatch(resetFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);