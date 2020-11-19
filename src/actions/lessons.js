import uuid from 'uuid';								// uuid unique identifiers
import database from '../firebase/firebase';
import defaultLinks from '../components/CurriculumAddresses';

export const addLesson = (lesson) => ({
	type: 'ADD_LESSON',
	lesson
});

export const startAddLesson = (lessonData = {}) => {
	return (dispatch) => {
		const {
			title = '', 
			description = '', 
			resource = '',
			curriculumLinks = defaultLinks(), 
			rating = 0
		} = lessonData;
		const lesson = {title, description, resource, curriculumLinks, rating};

		return database.ref('lessons').push(lesson).then((ref) => {
			dispatch(addLesson({
				id: ref.key,
				...lesson
			}));
		});
	};
};

export const removeLesson = ({ id } = {}) => ({
	type: 'REMOVE_LESSON',
	id
});

export const editLesson = (id, updates) => ({
	type: 'EDIT_LESSON',
	id,
	updates
});

export const startEditLesson = (id, updates) => {
	return (dispatch) => {
		return database.ref(`lessons/${id}`).update(updates).then(() => {
			dispatch(editLesson(id, updates))
		});
	};
};