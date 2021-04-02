import React from 'react';
import { connect } from 'react-redux';
import LessonListItem from './LessonListItem';
import selectLessons from '../selectors/lessons';
import { startSetLessons } from '../actions/lessons';
import LoadingPage from './LoadingPage';

class LessonList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pageNumber: 1,
			currentPageLessons: '',
			pageLimit: 12
		}
	};

	changePage = (e) => {
		const command = e.target.getAttribute('command');
		const pages = Math.ceil(this.props.lessons.length / this.state.pageLimit)
		let lessons = [];
		switch(command) {
			case 'NEXT':
				if(pages > this.state.pageNumber)
				{
					this.setState({pageNumber: this.state.pageNumber + 1})
				}
				break;
			case 'BACK':
				if(1 < this.state.pageNumber)
				{
					this.setState({pageNumber: this.state.pageNumber - 1})
				}
				break;
			default:
				this.setState({pageNumber: parseInt(command)})
				break;
		}
	}

	getLessons = (myPage) => {
		let i;
		let pageLessonArray = new Array();
		let numberOfLessonsOnPage;
		const startingLessonIndex = (myPage - 1) * this.state.pageLimit;
		const pages = Math.ceil(this.props.lessons.length / this.state.pageLimit)

		if(myPage < pages || this.props.lessons.length % this.state.pageLimit === 0)
		{
			numberOfLessonsOnPage = this.state.pageLimit;
		} 
		else 
		{
			numberOfLessonsOnPage = this.props.lessons.length % this.state.pageLimit;
		}

		for(i = 0; i < numberOfLessonsOnPage; i++)
		{
			pageLessonArray[i] = this.props.lessons[startingLessonIndex + i];
		}
		return pageLessonArray;
	}

	render() {
		return (
			<div className="content-container">
				<div className="lesson-list-container">
					<div className="page-navigation">
						<div className="page-navigation-buttons">
							{
								this.state.pageNumber === 1 ? <div className="button button-navigation-sideways-hidden"></div> :
								<button className="button button-navigation-sideways" command={"BACK"} onClick={this.changePage}>
									<div className="icon-container" command={"BACK"}>
			                            <img className="icon" src="/images/Arrow Left.png" alt="Arrow Left" command={"BACK"} />
			                        </div>
								</button>
							}
						</div>
						{
							Math.ceil(this.props.lessons.length / this.state.pageLimit) === 1 ? '' :
							<div className="page-navigation-numbers">
								{
									(Math.ceil(this.props.lessons.length / this.state.pageLimit) < this.state.pageNumber - 2 || this.state.pageNumber - 2 <= 0) ? '' :
									<button className="button button-navigation" command={this.state.pageNumber - 2} onClick={this.changePage}>
										{this.state.pageNumber - 2}
									</button>
								}
								{
									(Math.ceil(this.props.lessons.length / this.state.pageLimit) < this.state.pageNumber - 1 || this.state.pageNumber - 1 <= 0) ? '' :
									<button className="button button-navigation" command={this.state.pageNumber - 1} onClick={this.changePage}>
										{this.state.pageNumber - 1}
									</button>
								}
								{
									Math.ceil(this.props.lessons.length / this.state.pageLimit) < this.state.pageNumber ? '' :
									<button className="button button-navigation button-navigation-selected" command={this.state.pageNumber} onClick={this.changePage}>
										{this.state.pageNumber}
									</button>
								}
								{
									Math.ceil(this.props.lessons.length / this.state.pageLimit) < this.state.pageNumber + 1 ? '' :
									<button className="button button-navigation" command={this.state.pageNumber + 1} onClick={this.changePage}>
										{this.state.pageNumber + 1}
									</button>
								}
								{
									Math.ceil(this.props.lessons.length / this.state.pageLimit) < this.state.pageNumber + 2 ? '' :
									<button className="button button-navigation" command={this.state.pageNumber + 2} onClick={this.changePage}>
										{this.state.pageNumber + 2}
									</button>
								}
							</div>
						}
						<div className="page-navigation-buttons">
							{	
								this.state.pageNumber >= Math.ceil(this.props.lessons.length / this.state.pageLimit) ? 
								<div className="button button-navigation-sideways-hidden"></div> :
								<button className="button button-navigation-sideways" command={"NEXT"} onClick={this.changePage}>
									<div className="icon-container" command={"NEXT"}>
			                            <img className="icon" src="/images/Arrow Right.png" alt="Arrow Right" command={"NEXT"} />
			                        </div>
								</button>
							}
						</div>
					</div>
					<div className="lesson-list">
						{			
							this.props.lessons.length === 0 ? (
								<p>No lessons</p>
							) : (
								this.getLessons(this.state.pageNumber).map((lesson) => {
									return <LessonListItem key={lesson.id} lesson={lesson}/>
								})
							)
						}
					</div>
				</div>
			</div>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		lessons: selectLessons(state.lessons, state.filters)
	};
};

export default connect(mapStateToProps)(LessonList);