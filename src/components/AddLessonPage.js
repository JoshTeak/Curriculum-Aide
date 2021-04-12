import React from 'react';
import { connect } from 'react-redux';
import LessonForm from './LessonForm';
import { startAddLesson } from '../actions/lessons';
import Footer from '../components/Footer';
import { history } from '../routers/AppRouter';
import LoginPage from './LoginPage';

export class AddLessonPage extends React.Component {
	onSubmit = (lesson) => {
		this.props.startAddLesson(lesson);
		history.push({
	        pathname: "/dashboard",
	        state: { previousPath: history.location}
        });
	}

	render() {
		return (
			<div className="main">
				<div className="header-veil">
				</div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Create Lesson</h1>
					</div>
				</div>
				<div className="page-body">
					{
						this.props.isAuthenticated ? 
						<LessonForm 
							onSubmit={this.onSubmit}
						/> :
						<LoginPage />
					}
				</div>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: !!state.auth.uid
	};
}


const mapDispatchToProps = (dispatch) => ({
	startAddLesson: (lesson) => dispatch(startAddLesson(lesson))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLessonPage);