import uuid from 'uuid';								// uuid unique identifiers
import database from '../firebase/firebase';
import { defaultLinks } from '../components/CurriculumAddresses';

export const addLesson = (lesson) => ({
	type: 'ADD_LESSON',
	lesson
});

export const startAddLesson = (lessonData = {}) => {
	return (dispatch, getState) => {
		const myId = getState().auth.uid;
		const {
			title = '', 
			description = '',
			level = '',
			duration = '',
			learningOutcomes = '', 
			resource = '',
			lessonStructure = '',
			curriculumLinks = defaultLinks(), 
			priorKnowledge = '',
			rating = 0,
			uid = myId
		} = lessonData;
		const lesson = {title, description, level, duration, learningOutcomes, resource, lessonStructure, curriculumLinks, priorKnowledge, rating, uid};

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

export const startRemoveLesson = ({ id } = {}) => {
	return (dispatch) => {
		return database.ref(`lessons/${id}`).remove().then(() => {
			dispatch(removeExpense({id}));
		});
	};
};

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

export const setLessons = (lessons) => ({
	type: 'SET_LESSONS',
	lessons
});

export const startSetLessons = () => {
	return (dispatch) => {
		return database.ref('lessons').once('value').then((snapshot) => {
			const lessons = [];

			snapshot.forEach((childSnapshot) => {
				lessons.push({
					id: childSnapshot.key,
					...childSnapshot.val()
				});
			});
			dispatch(setLessons(lessons));
		})
	};
};