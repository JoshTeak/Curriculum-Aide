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
		VCPSCSE001: {isSet: false, linkDescription: 'Develop a vocabulary and practise the expression of emotions to describe how they feel in different familiar situations.'}, 
		VCPSCSE002: {isSet: false, linkDescription: 'Identify their likes and dislikes, needs and wants, abilities and strengths'}, 
		VCPSCSE003: {isSet: false, linkDescription: 'Recognise that problems or challenges are a normal part of life and that there are actions that can be undertaken to manage problems.'}, 
		VCPSCSE004: {isSet: false, linkDescription: 'Identify a range of groups to which they, their family and members of their class belong.'}, 
		VCPSCSE005: {isSet: false, linkDescription: 'Practise the skills required to include others and make friends with peers, teachers and other adults.'}, 
		VCPSCSE006: {isSet: false, linkDescription: 'Name and practise basic skills required to work collaboratively with peers.'}, 
		VCPSCSE007: {isSet: false, linkDescription: 'Use appropriate language to describe what happens and how they feel when experiencing positive interactions or conflict.'},
		VCPSCSE008: {isSet: false, linkDescription: 'Extend their vocabulary through which to recognise and describe emotions and when, how and with whom it is appropriate to share emotions.'}, 
		VCPSCSE009: {isSet: false, linkDescription: 'Identify personal strengths and describe how these strengths are useful in school or family life'}, 
		VCPSCSE010: {isSet: false, linkDescription: 'Explain how being prepared to try new things can help identify strategies when faced with unfamiliar or challenging situations.'}, 
		VCPSCSE011: {isSet: false, linkDescription: 'Identify how families can have a range of relationships.'}, 
		VCPSCSE012: {isSet: false, linkDescription: 'Listen to others’ ideas, and recognise that others may see things differently.'}, 
		VCPSCSE013: {isSet: false, linkDescription: 'Describe ways of making and keeping friends, including how actions and words can help or hurt others, and the effects of modifying their behaviour.'}, 
		VCPSCSE014: {isSet: false, linkDescription: 'Use basic skills required for participation in group tasks and respond to simple questions about their contribution to group tasks.'},
		VCPSCSE015: {isSet: false, linkDescription: 'Recognise that conflict occurs and distinguish between appropriate and inappropriate ways to deal with conflict.'}
	};

	return curriculumLinks;
}

export const linkStructure = (currentLinks) => {
	const curriculumLinks = {
		pascCurriculum: {
			levelD: {
				seaam: {
					raeoe: {
						VCPSCSE073: currentLinks.VCPSCSE073
					},
					dor: {
						VCPSCSE074: currentLinks.VCPSCSE074,
						VCPSCSE075: currentLinks.VCPSCSE075
					}
				},
				soaam: {
					rad: {
						VCPSCSE076: currentLinks.VCPSCSE076,
						VCPSCSE077: currentLinks.VCPSCSE077
					},
					col: {
						VCPSCSE078: currentLinks.VCPSCSE078,
 						VCPSCSE079: currentLinks.VCPSCSE079
					}
				}
			}, 
			FoundationLevel: {
				seaam: {
					raeoe: {
						VCPSCSE001: currentLinks.VCPSCSE001
					},
					dor: {
						VCPSCSE002: currentLinks.VCPSCSE002,
						VCPSCSE003: currentLinks.VCPSCSE003
					}
				},
				soaam: {
					rad: {
						VCPSCSE004: currentLinks.VCPSCSE004,
						VCPSCSE005: currentLinks.VCPSCSE005
					},
					col: {
						VCPSCSE006: currentLinks.VCPSCSE006,
 						VCPSCSE007: currentLinks.VCPSCSE007
					}
				}
			},
			Levels1and2: {
				seaam: {
					raeoe: {
						VCPSCSE008: currentLinks.VCPSCSE008
					},
					dor: {
						VCPSCSE009: currentLinks.VCPSCSE009,
						VCPSCSE010: currentLinks.VCPSCSE010
					}
				},
				soaam: {
					rad: {
						VCPSCSE011: currentLinks.VCPSCSE011,
						VCPSCSE012: currentLinks.VCPSCSE012,
						VCPSCSE013: currentLinks.VCPSCSE013
					},
					col: {
						VCPSCSE014: currentLinks.VCPSCSE014,
 						VCPSCSE015: currentLinks.VCPSCSE015
					}
				}
			} 
		}
	};

	return curriculumLinks;
}
