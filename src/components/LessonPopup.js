import React from 'react';
import ReactPlayer from "react-player";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class LessonPopup extends React.Component {
	constructor(props) {
		super(props);

		this.isDisplayed = "none";
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
			let linksString = '';

			Object.keys(links).forEach(link => {
				if(links[link].isSet === true)
				{
					linksString = linksString + ' ' + links[link].linkDescription
				}
			});
			return <p className="list-item__text-with-border">{linksString}</p>;
		}
		return '';
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
							<div className="list-item ">
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
									<p className="list-item__text-with-border">{this.props.lesson.duration}</p>
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
													<div><a className="list-item__text-with-border" href={resource.value}>{resource.value}</a></div>
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
								<h3 className="list-item__sub-title">lessonStructure: </h3>
								<p className="list-item__text-with-border">{this.props.lesson.lessonStructure}</p>
							</div>
							<div className="list-item">
								<h3 className="list-item__sub-title">Curriculum Links: </h3>
								{this.onlyTrueLinks(this.props.lesson.curriculumLinks)}
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