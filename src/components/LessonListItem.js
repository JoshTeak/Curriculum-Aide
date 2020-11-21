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
		return <p>{'Links to the curriculum: ' + linksString}</p>;
	}
	return '';
}

const LessonListItem = ({id, title, learningOutcomes, resource, curriculumLinks, rating}) => (

	<Link className="list-item" to={`/edit/${id}`}>
		<div>
			<h3>{title}</h3>
			<p>{'Learning Outcomes: ' + learningOutcomes}</p>
			<p>{'Resource: ' + resource}</p>
			{onlyTrueLinks(curriculumLinks)}
			<p>{'Rating: ' + rating}</p>
		</div>
	</Link>
);

export default LessonListItem;