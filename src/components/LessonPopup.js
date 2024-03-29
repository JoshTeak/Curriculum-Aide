import React from 'react';
import ReactPlayer from "react-player";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import RatingPopup from './RatingPopup';
import ReportPopup from './ReportPopup';
import { history } from '../routers/AppRouter';
import { findResourceFile } from '../actions/lessons';

class LessonPopup extends React.Component {
	constructor(props) {
		super(props);

		this.displayMenuPopup = "none";
		this.displayedRatingPopup = "none";
		this.displayedReportPopup = "none";
		this.lessonDuration = this.calculateLessonDuration(this.props.lesson.lessonStructure);
	};
	optionsMenu = () => {		
	  	if(this.displayMenuPopup === "none")
	  	{
	  		this.displayMenuPopup = "block";
	  	} else if(this.displayMenuPopup === "block")
	  	{
	  		this.displayMenuPopup = "none";
	  	}
	  	this.forceUpdate();
	}
	addRatingClicked = (e) => {
		e.preventDefault();

	  	if(this.displayedRatingPopup === "none")
	  	{
	  		this.displayedRatingPopup = "block";
	  	} else if(this.displayedRatingPopup === "block")
	  	{
	  		this.displayedRatingPopup = "none";
	  	}
	  	this.forceUpdate();
	}
	addReportClicked = (e) => {
		e.preventDefault();

	  	if(this.displayedReportPopup === "none")
	  	{
	  		this.displayedReportPopup = "block";
	  	} else if(this.displayedReportPopup === "block")
	  	{
	  		this.displayedReportPopup = "none";
	  	}
	  	this.forceUpdate();
	}
	downloadFileClicked = (e) => {
		e.preventDefault();
		const selectedFileName = e.target.getAttribute('filename');					// cant pass whole file through attributes so reference the name from resources
		this.props.findResourceFile(selectedFileName, this.props.lesson.id);
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
	calculateLessonRating = (lessonObject) => {
		if(lessonObject.ratingsList)
		{
			const ratingsObject = lessonObject.ratingsList;
			let totalRating;
			let rating;
			if(ratingsObject)
			{
				Object.values(ratingsObject).forEach(val => {
					rating = parseInt(val.rating, 10);
					totalRating =+ rating;
				})
			}	

			const averageRating = totalRating / Object.values(ratingsObject).length;

			return averageRating;
		} else {
			return 0;
		}
	}
	printLesson = () => {
		this.optionsMenu();
	    let iframe = document.createElement('IFRAME');
		document.body.appendChild(iframe);
	    const el = document.getElementById('printable');
	    iframe.style.display = "none";
	    iframe.contentWindow.document.open();
	    iframe.contentWindow.document.write('<link rel="stylesheet" type="text/css" href="/dist/styles.css" />'); 
	    iframe.contentWindow.document.write('<div>' + el.innerHTML + '</div>');
	    iframe.contentWindow.document.close();
	    iframe.onload = () => {
			iframe.focus();
			iframe.contentWindow.print();
		}
	}

	render() {
		return (
			<div className="popup">
				<div className="popup-background" onClick={this.props.backgroundClick}>
				</div>
				<div className="popup-group lesson-popup" id="printable">
					<div className="popup-container">
						<div className="lesson-body">
							<div className="list-body">
								<div className="list-item list-item--row-end">
									<div className="button-group">
										<button className="button button--options selectable" onClick={this.optionsMenu}>
											<div className="button-option-icon">
												<div className="button-option-dot">.</div>
												<div className="button-option-dot">.</div>
												<div className="button-option-dot">.</div>
											</div>
										</button>
										<button className="button button--close selectable" onClick={this.props.backgroundClick}>
											<div className="button-close-icon">
												<div className="button-close-x">x</div>
											</div>
										</button>
									</div>
									{
										this.displayMenuPopup === "none" ? "" : (
											<div className="dropdown-list">
												<div className="dropdown-list-body">
													<div className="dropdown-list-item selectable"  onClick={this.printLesson}>
														<div className="icon-container">
								                            <img className="icon" src="/images/Printer.png" alt="Printer" />
								                        </div>
														<h3 className="dropdown-list-item__option">Print</h3>
													</div>
													<div className="dropdown-list-item selectable" onClick={this.props.favorated}>
														<div className="icon-container">
															<div class="round-checkbox">
															    <input
																	type="checkbox" 
																	checked={this.props.isChecked}
																/>
																{
																	this.props.isChecked ? 
															    	<img className="icon" src="/images/Checkmark Circle.png" alt="Checkmark Circle" /> :
															    	<img className="icon" src="/images/Circle.png" alt="Circle" />
															    }
															</div>
														</div>
														<h3 className="dropdown-list-item__option">Favourite</h3>
													</div>
													<div className="dropdown-list-item selectable" onClick={this.addRatingClicked}>
														<div className="icon-container">
								                            <img className="icon" src="/images/Flag 1.png" alt="Flag 1" />
								                        </div>
														<h3 className="dropdown-list-item__option">Rate</h3>
													</div>
													<div className="dropdown-list-item selectable" onClick={this.addReportClicked}>
														<div className="icon-container">
								                            <img className="icon" src="/images/Alert Sign Circle.png" alt="Alert Sign Circle" />
								                        </div>
														<h3 className="dropdown-list-item__option">Report</h3>
													</div>
													{
														this.props.myUid != this.props.lesson.uid ? "" : (
															<div className="dropdown-list-item selectable"onClick={() => {
														          history.push({
														            pathname: `/edit/:${this.props.lesson.id}`,
														            state: { previousPath: history.location, duration: 1000 }
														          });
														        }}>
														        <div className="icon-container">
										                            <img className="icon" src="/images/Pencil 2.png" alt="Pencil 2" />
										                        </div>
																<h3 className="dropdown-list-item__option">Edit</h3>																
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
									<p className="list-item__text-without-border">{this.props.lesson.description}</p>
								</div>
								<div className="list-item list-item--multiple">
									<div className="list-item__pair">
										<h3 className="list-item__sub-title list-item__sub-title--left">Subject: </h3>
										<p className="list-item__text-with-border">{this.props.lesson.subjects}</p>
									</div>
									<div className="list-item__pair">
										<h3 className="list-item__sub-title list-item__sub-title--left">Level: </h3>
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
														<div className="list-item__text-with-border">
															<div className="list-item__video">
															    <ReactPlayer
															        url={resource.value}
															    />
														    </div>
													    </div>
													)
													break;
												case "file":
													return (
														<div className="list-item__text-with-border">
															<p onClick={this.downloadFileClicked} filename={resource.value.fileName}>{resource.value.fileName}</p>
														</div>
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
											<div className="list-item__table-segment table-segment-one">
												<p>Duration: </p>
											</div>
											<div className="list-item__table-segment table-segment-two">
												<p>Content:</p>
											</div>
											<div className="list-item__table-segment table-segment-three">
												<p>Materials:</p>
											</div>
										</div>
										{
											this.props.lesson.lessonStructure.map(segment => 
												<div className="list-item__table-row">
													<div className="list-item__table-segment table-segment-one">
														<p>{segment.duration  + " minutes"}</p>
													</div>
													<div className="list-item__table-segment table-segment-two">
														<p>{segment.title + ': '}</p>
														<p>{segment.content}</p>
													</div>
													<div className="list-item__table-segment table-segment-three">
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
									<p className="list-item__text">{'Rating: ' + this.calculateLessonRating(this.props.lesson)}</p>
								</div>
							</div>
						</div>
						{
							this.displayedRatingPopup === "none" ? "" : (
								<RatingPopup 
									backgroundClick={this.addRatingClicked} 
									lesson={this.props.lesson}
									myId={this.props.myUid}
								/>
							)
						}
						{
							this.displayedReportPopup === "none" ? "" : (
								<ReportPopup 
									backgroundClick={this.addReportClicked} 
									lesson={this.props.lesson}
									myId={this.props.myUid}
								/>
							)
						}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
  myUid: state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
	findResourceFile: (resourceName, lessonId) => dispatch(findResourceFile(resourceName, lessonId))
})

export default connect(mapStateToProps, mapDispatchToProps)(LessonPopup);
