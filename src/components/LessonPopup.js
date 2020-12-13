import React from 'react';

const LessonPopup = (props) => (
	<div> 
		{
			props.display === "none" ? "" : (
				<div>
					<div className="popup-background" onClick={props.backgroundClick}>
					</div>
					<div className="popup">
						<div className="lesson-page">
							<div className="lesson-body">
								<div className="lesson-item__part">
									<h3 className="lesson-item__title">{props.lesson.title}</h3>
								</div>
								<div className="lesson-item__part">
									<p className="lesson-item__data">{props.lesson.description}</p>
								</div>
								<div className="lesson-item__grouped-part">
									<div className="lesson-item__part--pair">
										<h3 className="lesson-item__sub-title">Year: </h3>
										<p>{props.lesson.level}</p>
									</div>
									<div className="lesson-item__part--pair">
										<h3 className="lesson-item__sub-title">Lesson Duration: </h3>
										<p>{props.lesson.duration}</p>
									</div>
								</div>
								<div className="lesson-item__part">
									<h3 className="lesson-item__sub-title">Learning Outcomes: </h3>
									<p className="lesson-item__data">{props.lesson.learningOutcomes}</p>
								</div>
								<div className="lesson-item__part">
									<h3 className="lesson-item__sub-title">Resource: </h3>
									<p className="lesson-item__data">{props.lesson.resource}</p>
								</div>
								<div className="lesson-item__part">
									<h3 className="lesson-item__sub-title">lessonStructure: </h3>
									<p className="lesson-item__data">{props.lesson.lessonStructure}</p>
								</div>
								<div className="lesson-item__part">
									<h3 className="lesson-item__sub-title">Curriculum Links: </h3>
									{onlyTrueLinks(props.lesson.curriculumLinks)}
								</div>
								<div className="lesson-item__part">
									<h3 className="lesson-item__sub-title">Prior Knowledge: </h3>
									<p className="lesson-item__data">{props.lesson.priorKnowledge}</p>
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
		return <p className="lesson-item__data">{linksString}</p>;
	}
	return '';
}

export default LessonPopup;