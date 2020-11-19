import React from 'react';
import { Link } from 'react-router-dom';

function onlyTrueLinks(links) {

	if(links)
	{
		let linksString = '';

		Object.keys(links).forEach(link => {
			if(links[link] === true)
			{
				linksString = linksString + ' ' + link
			}
		});
		return <p>{linksString}</p>;
	}
	return '';
}

const LessonListItem = ({id, title, description, resource, curriculumLinks, rating}) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{title}</h3>
		</Link>
		<p>{description}</p>
		<p>{resource}</p>
		{onlyTrueLinks(curriculumLinks)}
		<p>{rating}</p>
	</div>
);

export default LessonListItem;