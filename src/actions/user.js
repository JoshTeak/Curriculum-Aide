import database from '../firebase/firebase';
import {firebase} from '../firebase/firebase';

export const setUser = (user) => ({
	type: 'SET_USER',
	user
});
export const startSetUser = (myId, userData = {}) => {
	return (dispatch) => {
		return database.ref(`users/${myId}`).once('value').then((snapshot) => {
			if(snapshot.val())
			{			
				return database.ref(`users/${myId}`).once('value').then((snapshot) => {
					const user = snapshot.val();
					dispatch(setUser({
						id: myId,
						favoritesList: {},
						ratingsList: {},
						reportsList: {},
						...user
					}));
				})
			} else {
				const {
					name = 'New user', 
					email = '1',
					favoritesList = {},
					ratingsList = {},
					reportsList = {},
					comments = '',
					lessons = ''
				} = userData;	
				const user = {name, email, favoritesList, ratingsList, reportsList, comments, lessons};
				return database.ref(`users/${myId}`).update(user).then(() => {
					dispatch(setUser({
						id: myId,
						...user
					}));
				});
			}
		});
	};
};

export const editUser = (updates) => ({
	type: 'EDIT_USER',
	updates
});

export const startEditUser = (myId, updates) => {
	delete updates["id"]; 

	return (dispatch) => {
		return database.ref(`users/${myId}`).update(updates).then(() => {
			dispatch(editUser(updates))
		});
	};
};