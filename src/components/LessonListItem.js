import React from 'react';
import { Link } from 'react-router-dom';

function onlyTrueLinks(links) {

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

const LessonListItem = ({id, title, description, level, duration, learningOutcomes, resource, lessonStructure, curriculumLinks, priorKnowledge, rating}) => (

	<Link className="lesson-item" to={`/edit/${id}`}>
		<div className="lesson-body">
			<div className="lesson-item__part">
				<h3 className="lesson-item__title">{title}</h3>
			</div>
			<div className="lesson-item__part">
				<p className="lesson-item__data">{description}</p>
			</div>
			<div className="lesson-item__grouped-part">
				<div className="lesson-item__part--pair">
					<h3 className="lesson-item__sub-title">Year: </h3>
					<p>{level}</p>
				</div>
				<div className="lesson-item__part--pair">
					<h3 className="lesson-item__sub-title">Lesson Duration: </h3>
					<p>{duration}</p>
				</div>
			</div>
			<div className="lesson-item__part">
				<h3 className="lesson-item__sub-title">Learning Outcomes: </h3>
				<p className="lesson-item__data">{learningOutcomes}</p>
			</div>
			<div className="lesson-item__part">
				<h3 className="lesson-item__sub-title">Resource: </h3>
				<p className="lesson-item__data">{resource}</p>
			</div>
			<div className="lesson-item__part">
				<h3 className="lesson-item__sub-title">lessonStructure: </h3>
				<p className="lesson-item__data">{lessonStructure}</p>
			</div>
			<div className="lesson-item__part">
				<h3 className="lesson-item__sub-title">Curriculum Links: </h3>
				{onlyTrueLinks(curriculumLinks)}
			</div>
			<div className="lesson-item__part">
				<h3 className="lesson-item__sub-title">Prior Knowledge: </h3>
				<p className="lesson-item__data">{priorKnowledge}</p>
			</div>
			<p>{'Rating: ' + rating}</p>
		</div>
	</Link>
);

export default LessonListItem;