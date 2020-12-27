import React from 'react';
import ReactPlayer from "react-player"

const LessonPopup = (props) => (
	<div> 
		{
			props.display === "none" ? "" : (
				<div className="popup">
					<div className="popup-background" onClick={props.backgroundClick}>
					</div>
					<div className="popup-container">
						<div className="lesson-body">
							<div className="list-body">
								<div className="list-item">
									<h3 className="list-item__title">{props.lesson.title}</h3>
								</div>
								<div className="list-item">
									<p className="list-item__text">{props.lesson.description}</p>
								</div>
								<div className="list-item list-item--multiple">
									<div className="list-item__pair">
										<h3 className="list-item__sub-title">Year: </h3>
										<p>{props.lesson.level}</p>
									</div>
									<div className="list-item__pair">
										<h3 className="list-item__sub-title">Lesson Duration: </h3>
										<p>{props.lesson.duration}</p>
									</div>
								</div>
								<div className="list-item">
									<h3 className="list-item__sub-title">Learning Outcomes: </h3>
									<p className="list-item__text">{props.lesson.learningOutcomes}</p>
								</div>
								<div className="list-item">
									<h3 className="list-item__sub-title">Resource: </h3>
									{props.lesson.resources.map(resource => 
										{
											switch(resource.type) {
												case "webLink":
													return (
														<div><a className="list-item__text" href={resource.value}>{resource.value}</a></div>
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
														<div><a className="list-item__text">A PDF with a value of {resource.value}</a></div>
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
									<p className="list-item__text">{props.lesson.lessonStructure}</p>
								</div>
								<div className="list-item">
									<h3 className="list-item__sub-title">Curriculum Links: </h3>
									{onlyTrueLinks(props.lesson.curriculumLinks)}
								</div>
								<div className="list-item">
									<h3 className="list-item__sub-title">Prior Knowledge: </h3>
									<p className="list-item__text">{props.lesson.priorKnowledge}</p>
								</div>
								<p>{'Rating: ' + props.lesson.rating}</p>
							</div>
						</div>
					</div>
				</div>
			)
		}
	</div>
);

const onlyTrueLinks = (links) => {
	if(links)
	{
		let linksString = '';

		Object.keys(links).forEach(link => {
			if(links[link].isSet === true)
			{
				linksString = linksString + ' ' + links[link].linkDescription
			}
		});
		return <p className="list-item__text">{linksString}</p>;
	}
	return '';
}

export default LessonPopup;