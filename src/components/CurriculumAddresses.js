import React from 'react';

export const defaultLinks = () => {
	const curriculumLinks = {
		VCPSCSE073: {isSet: false, linkDescription: 'Name a range of emotions and describe how these are expressed or shown.'}, 
		VCPSCSE074: {isSet: false, linkDescription: 'Identify characteristics of self and share their likes and dislikes'}, 
		VCPSCSE075: {isSet: false, linkDescription: 'Identify situations that could be a problem or challenge and discuss relevant self-help skills.'},
		VCPSCSE076: {isSet: false, linkDescription: 'Categorise familiar people and members of their family and class.'},
		VCPSCSE077: {isSet: false, linkDescription: 'Work with various peers, including participating in an activity they didn’t like.'},
		VCPSCSE078: {isSet: false, linkDescription: 'Respond to others in group situations, playing or working in a small group cooperatively.'},
		VCPSCSE079: {isSet: false, linkDescription: 'Demonstrate some understanding that negative words and actions are hurtful and that their behaviour can impact on others.'},
	};

	return curriculumLinks;
}

const newDefaultLinks = () => {
	const curriculumLinks = {
		pascCurriculum: {
			levelD: {
				seaam: {
					raeoe: {
						VCPSCSE073: {isSet: false, linkDescription: 'Name a range of emotions and describe how these are expressed or shown.'}
					},
					dor: {
						VCPSCSE074: {isSet: false, linkDescription: 'Identify characteristics of self and share their likes and dislikes'}, 
						VCPSCSE075: {isSet: false, linkDescription: 'Identify situations that could be a problem or challenge and discuss relevant self-help skills.'}
					}
				},
				soaam: {
					rad: {
						VCPSCSE076: {isSet: false, linkDescription: 'Categorise familiar people and members of their family and class.'},
						VCPSCSE077: {isSet: false, linkDescription: 'Work with various peers, including participating in an activity they didn’t like.'}
					},
					col: {
						VCPSCSE078: {isSet: false, linkDescription: 'Respond to others in group situations, playing or working in a small group cooperatively.'},
 						VCPSCSE079: {isSet: false, linkDescription: 'Demonstrate some understanding that negative words and actions are hurtful and that their behaviour can impact on others.'}
					}
				}
			} 
		}
	};

	return curriculumLinks;
}
