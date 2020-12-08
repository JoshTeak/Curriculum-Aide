export default (lessons, { text, sortBy, curriculumLinks }) => {
	return lessons.filter((lesson) => {
		const textMatch = lesson.title.toLowerCase().includes(text.toLowerCase());
		
		const findLinkMatches = () => {
			console.log(lesson.curriculumLinks);
			let match = false;
			Object.keys(lesson.curriculumLinks).forEach(lessonLink => {
				Object.keys(curriculumLinks).forEach(Link => {
					if(lessonLink === Link) 
					{
						if(lesson.curriculumLinks[lessonLink].isSet === true && curriculumLinks[Link].isSet === true)
						{
							match = true;
						}
					}
				});
			});
			return match;
		}
		const linkMatch = findLinkMatches();

		return (textMatch && linkMatch);
	}).sort((a, b) => {
		if(sortBy === 'rating') {
			return a.rating < b.rating ? 1 : -1;				// sort function needs to return -1 if a is selected and 1 if b is selected
		}
	});
};

