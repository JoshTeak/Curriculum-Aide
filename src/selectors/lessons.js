export default (lessons, { text, sortBy, favourites, curriculumLinks, subject, sortAll}) => {
	return lessons.filter((lesson) => {
		const textMatch = lesson.title.toLowerCase().includes(text.toLowerCase());
		
		const findLinkMatches = () => {
			let match = false;
			Object.keys(lesson.curriculumLinks).forEach(lessonLink => {
				if(lesson.curriculumLinks[lessonLink].isSet === true) {
					if((sortAll && subject === curriculumLinks[lessonLink].curriculum)  || curriculumLinks[lessonLink].isSet === true || (sortAll && subject === '')) 
					{
						if(Object.keys(favourites).length === 0) 	// if no favourite object has been passed in it will show all lessons
						{
							match = true;
						} else {
							Object.keys(favourites).forEach(favoritedLesson => {
								if(favoritedLesson === lesson.id) 
								{
									match = true;
								}
							})
						}
					} 
				} 
			});
			return match;
		}
		const linkMatch = findLinkMatches();

		return (textMatch && linkMatch);
	}).sort((a, b) => {
		switch (sortBy) {
			case 'rating':
				return a.rating < b.rating ? 1 : -1;				// sort function needs to return -1 if a is selected and 1 if b is selected
			case 'title':
				return a.title < b.title ? -1 : 1;				// sort function needs to return -1 if a is selected and 1 if b is selected
			case 'level':
				return a.level < b.level ? -1 : 1;				// sort function needs to return -1 if a is selected and 1 if b is selected
			case 'duration':
				return a.duration < b.duration ? -1 : 1;				// sort function needs to return -1 if a is selected and 1 if b is selected
			default:
		}
	});
};

