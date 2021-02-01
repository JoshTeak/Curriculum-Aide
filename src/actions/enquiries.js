import database from '../firebase/firebase';

export const startAddEnquiry = (enquiryData = {}) => {
	return (dispatch) => {
		const {
			email = '', 
			name = '',
			subject = '',
			description = '',
		} = enquiryData;

		const enquiry = {email, name, subject, description};

		return database.ref('enquiries').push(enquiry);
	};
};