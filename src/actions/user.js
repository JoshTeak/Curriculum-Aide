import database from '../firebase/firebase';
import {firebase} from '../firebase/firebase';

export const createUser = (user) => ({
	type: 'CREATE_USER',
	user
});

export const startCreateUser = (myId, userData = {}) => {
	return (dispatch) => {
		const {
			name = 'New user', 
			email = '1',
			favorites = [],
			ratings = [],
			reports = [],
			lessons = []
		} = userData;

		const user = {name, email, favorites, ratings, reports, lessons};

		return database.ref(`users/${myId}`).update(user).then(() => {
			dispatch(createUser(user));
		});
	};
};

export const setUser = (user) => ({
	type: 'SET_USER',
	user
});

export const startSetUser = (myId) => {
	return (dispatch) => {
		return database.ref(`users/${myId}`).once('value').then((snapshot) => {
			const user = snapshot.val();;
			dispatch(setUser(user));
		})
	};
};

