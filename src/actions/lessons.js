import uuid from 'uuid';								// uuid unique identifiers
import database from '../firebase/firebase';
import { defaultLinks } from '../components/CurriculumAddresses';
import firebase from "firebase/app";
import "firebase/storage";

export const pullFilesFromResources = (resources, lessonId) => {
	resources.map(resource => {
		if(resource.type === 'file')
		{
			uploadFile(resource.value.file, lessonId);
		}
	})
}

export const uploadFile = (file, lessonId) => {
	const storageRef = firebase.storage().ref();
	const fileRef = storageRef.child('resources/' + lessonId + '/' + file.name);

	fileRef.put(file).then((snapshot) => {
	    console.log('Uploaded a blob or file!')
	});
}

export const findResourceFile = (fileName, lessonId) => {
	return () => {
		const storageRef = firebase.storage().ref()
		const selectedFile = storageRef.child('resources/' + lessonId + '/' + fileName);
		return selectedFile.getDownloadURL()
			.then((url) => {
				
			    var xhr = new XMLHttpRequest();
			    xhr.responseType = 'blob';
			    xhr.onload = (event) => {
			    	var blob = xhr.response;
			  		
			    	var objectURL = window.URL.createObjectURL(blob);
			        var link = document.createElement('a');
			        link.href = objectURL;
			        link.download = selectedFile.name;
			        document.body.appendChild(link);
			        link.click();
			        link.remove();
			    };
			    xhr.open('GET', url);
			    xhr.send();
			})
	}
}

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
			subjects = '',
			duration = '',
			learningOutcomes = '', 
			resources = [],
			lessonStructure = [],
			curriculumLinks = defaultLinks(), 
			priorKnowledge = '',
			rating = 0,
			ratingsList = {[myId]: {rating: '0'}},
			uid = myId
		} = lessonData;
		const lesson = {title, description, level, subjects, duration, learningOutcomes, resources, lessonStructure, curriculumLinks, priorKnowledge, rating, ratingsList, uid};
		
		return database.ref('lessons').push(lesson).then((ref) => {
			pullFilesFromResources(resources, ref.key);
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
			dispatch(removeLesson({id}));
		});
	};
};

export const editLesson = (id, updates) => ({
	type: 'EDIT_LESSON',
	id,
	updates
});

export const startEditLesson = (id, updates) => {
	delete updates["id"]; 
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