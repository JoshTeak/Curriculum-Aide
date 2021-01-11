import React from 'react';
import ReactPlayer from "react-player";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class LessonPopup extends React.Component {
	constructor(props) {
		super(props);

		this.isDisplayed = "none";
		this.lessonDuration = this.calculateLessonDuration(this.props.lesson.lessonStructure);
	};

	optionsMenu = (e) => {
		e.preventDefault();
		
	  	if(this.isDisplayed === "none")
	  	{
	  		this.isDisplayed = "block";
	  	} else if(this.isDisplayed === "block")
	  	{
	  		this.isDisplayed = "none";
	  	}
	  	this.forceUpdate();
	}

	onlyTrueLinks = (links) => {
		if(links)
		{
			let linksArray = [];

			Object.keys(links).forEach(link => {
				if(links[link].isSet === true)
				{
					linksArray.push(links[link]);
				}
			});
			return linksArray;
		}
		return '';
	}

	calculateLessonDuration = (structure) => {
		let totalLessonDuration = 0;
		structure.forEach(segment => {
				totalLessonDuration += segment.duration
			}
		)
		return totalLessonDuration;
	}

	render() {
		return (
			<div className="popup">
				<div className="popup-background" onClick={this.props.backgroundClick}>
				</div>
				<div className="popup-container">
					<div className="lesson-body">
						<div className="list-body">
							<div className="list-item list-item--row-end">
								<button className="button button--dropdown" onClick={this.optionsMenu}>Options</button>
								{
									this.isDisplayed === "none" ? "" : (
										<div className="dropdown-list">
											<button className="button" onClick={this.optionsMenu}>Options</button>
											<div className="dropdown-list-body">
												<div className="dropdown-list-item">
													<h3 className="dropdown-list-item__option">Print</h3>
												</div>
												<div className="dropdown-list-item">
													<h3 className="dropdown-list-item__option">Favourite</h3>
												</div>
												<div className="dropdown-list-item">
													<h3 className="dropdown-list-item__option">Rate</h3>
												</div>
												<div className="dropdown-list-item">
													<h3 className="dropdown-list-item__option">Report</h3>
												</div>
												{
													this.props.myUid != this.props.lesson.uid ? "" : (
														<div className="dropdown-list-item ">
															<Link to={`/edit/:${this.props.lesson.id}`}>
																<h3 className="dropdown-list-item__option">Edit</h3>
															</Link>
														</div>
													)
												}
											</div>
										</div>
									)
								}
							</div>
							<div className="list-item">
								<h3 className="list-item__title">{this.props.lesson.title}</h3>
							</div>
							<div className="list-item">
								<p className="list-item__text">{this.props.lesson.description}</p>
							</div>
							<div className="list-item list-item--multiple">
								<div className="list-item__pair">
									<h3 className="list-item__sub-title list-item__sub-title--left">Year: </h3>
									<p className="list-item__text-with-border">{this.props.lesson.level}</p>
								</div>
								<div className="list-item__pair">
									<h3 className="list-item__sub-title list-item__sub-title--left">Lesson Duration: </h3>
									<p className="list-item__text-with-border">{this.lessonDuration + " minutes"}</p>
								</div>
							</div>
							<div className="list-item">
								<h3 className="list-item__sub-title">Learning Outcomes: </h3>
								<p className="list-item__text-with-border">{this.props.lesson.learningOutcomes}</p>
							</div>
							<div className="list-item">
								<h3 className="list-item__sub-title">Resource: </h3>
								{this.props.lesson.resources.map(resource => 
									{
										switch(resource.type) {
											case "webLink":
												return (
													<div className="list-item__text-with-border">
														<a href={resource.value}>{resource.value}</a>
													</div>
												)
												break;
											case "embeddedVideo":
												return (
													<div>
													    <ReactPlayer
													        url={resource.value}
													    />
												    </div>
												)
												break;
											case "PDF":
												return (
													<div><a className="list-item__text-with-border">A PDF with a value of {resource.value}</a></div>
												)
												break;
											default:
												return "";
										}
									}
							    )}
							</div>
							<div className="list-item">
								<h3 className="list-item__sub-title">Lesson Structure:</h3>
								<div className="list-item__table  no-background">
									<div className="list-item__table-row">
										<div className="list-item__table-segment flex-ratio-one">
											<p>Duration: </p>
										</div>
										<div className="list-item__table-segment flex-ratio-four">
											<p>Content:</p>
										</div>
										<div className="list-item__table-segment flex-ratio-three">
											<p>Pedagogy:</p>
										</div>
										<div className="list-item__table-segment flex-ratio-two">
											<p>Materials:</p>
										</div>
									</div>
									{
										this.props.lesson.lessonStructure.map(segment => 
											<div className="list-item__table-row">
												<div className="list-item__table-segment flex-ratio-one">
													<p>{segment.duration  + " minutes"}</p>
												</div>
												<div className="list-item__table-segment flex-ratio-four">
													<p>{segment.title + ': '}</p>
													<p>{segment.content}</p>
												</div>
												<div className="list-item__table-segment flex-ratio-three">
													<p>{segment.pedagogy}</p>
												</div>
												<div className="list-item__table-segment flex-ratio-two">
													<p>{segment.materials}</p>
												</div>
											</div>
										)
									}
								</div>
							</div>
							<div className="list-item">
								<h3 className="list-item__sub-title">Curriculum Links: </h3>
								<div className="list-item__text-with-border">
									{this.onlyTrueLinks(this.props.lesson.curriculumLinks).map(link => <p>- {link.linkDescription}</p>)}
								</div>
							</div>
							<div className="list-item">
								<h3 className="list-item__sub-title">Prior Knowledge: </h3>
								<p className="list-item__text-with-border">{this.props.lesson.priorKnowledge}</p>
							</div>
							<div className="list-item">
								<p className="list-item__text">{'Rating: ' + this.props.lesson.rating}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
  myUid: state.auth.uid
});

export default connect(mapStateToProps)(LessonPopup);