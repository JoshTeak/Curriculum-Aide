import React from 'react';

export const defaultLinks = () => {
	const curriculumLinks = {
		VCPSCSE052: {isSet: false, linkDescription: 'React to people and express emotions.'}, 
		VCPSCSE053: {isSet: false, linkDescription: 'Identify significant objects and people and make a choice between alternatives to show what they like.'}, 
		VCPSCSE054: {isSet: false, linkDescription: 'Experience problems within everyday situations and assist to implement routine and accept assistance from familiar adults to manage problems.'}, 
		VCPSCSE055: {isSet: false, linkDescription: 'Identify significant people by gesturing, vocalising or orienting towards them.'}, 
		VCPSCSE056: {isSet: false, linkDescription: 'Supported to interact with others.'}, 
		VCPSCSE057: {isSet: false, linkDescription: 'Develop ability to focus attention on others and acknowledge their presence.'}, 
		VCPSCSE058: {isSet: false, linkDescription: 'Interact with another showing cooperation.'},
		VCPSCSE059: {isSet: false, linkDescription: 'Respond to people or events and demonstrate a range of emotions.'}, 
		VCPSCSE060: {isSet: false, linkDescription: 'Indicate the personal characteristics and the abilities they possess.'}, 
		VCPSCSE061: {isSet: false, linkDescription: 'Follow teacher direction and orientate their attention to an activity or person and persist in a task when supported by teacher.'}, 
		VCPSCSE062: {isSet: false, linkDescription: 'Identify members of their family and some members of their class.'}, 
		VCPSCSE063: {isSet: false, linkDescription: 'Participate in routine activities and interact with others in a range of familiar contexts instigated by the teacher.'}, 
		VCPSCSE064: {isSet: false, linkDescription: 'Demonstrate some simple social skills including attending to others, greeting, and following adult directions.'}, 
		VCPSCSE065: {isSet: false, linkDescription: 'Demonstrate awareness of basic social rules by responding to assistance provided by an adult.'}, 
		VCPSCSE066: {isSet: false, linkDescription: 'Name emotions shown by self and match these emotions to familiar events or experiences.'}, 
		VCPSCSE067: {isSet: false, linkDescription: 'Change, accept and reject things based on their personal preference.'}, 
		VCPSCSE068: {isSet: false, linkDescription: 'Try a variety of activities and completing some steps in a set routine independently.'}, 
		VCPSCSE069: {isSet: false, linkDescription: 'Identify familiar adults and explore groups they belong to.'}, 
		VCPSCSE070: {isSet: false, linkDescription: 'Follow adult directions to intentionally participate in class activities and follow rules and routines.'},
		VCPSCSE071: {isSet: false, linkDescription: 'Follow basic social rules regarding the sharing and care of property and social expectations regarding behaviour.'}, 
		VCPSCSE072: {isSet: false, linkDescription: 'Identify reactions and solutions to familiar social problems in supported situations.'}, 
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
		VCPSCSE015: {isSet: false, linkDescription: 'Recognise that conflict occurs and distinguish between appropriate and inappropriate ways to deal with conflict.'},
		VCPSCSE016: {isSet: false, linkDescription: 'Identify and explore the expression of emotions in social situations and the impact on self and others.'},
		VCPSCSE017: {isSet: false, linkDescription: 'Identify personal strengths and select personal qualities that could be further developed.'}, 
		VCPSCSE018: {isSet: false, linkDescription: 'Identify how persistence and adaptability can be used when faced with challenging situations and change.'},
		VCPSCSE019: {isSet: false, linkDescription: 'Name and describe the skills required to work independently.'},
		VCPSCSE020: {isSet: false, linkDescription: 'Examine the similarities and differences between individuals and groups based on factors such as sex, age, ability, language, culture and religion.'},
		VCPSCSE021: {isSet: false, linkDescription: 'Describe the ways in which similarities and differences can affect relationships.'}, 
		VCPSCSE022: {isSet: false, linkDescription: 'Identify the importance of including others in activities, groups and games.'},
		VCPSCSE023: {isSet: false, linkDescription: 'Demonstrate skills for effective participation in group tasks and use criteria provided to reflect on the effectiveness of the teams in which they participate.'},
		VCPSCSE024: {isSet: false, linkDescription: 'Identify conflicts that may occur in peer groups and suggest possible causes and resolutions.'},
		VCPSCSE025: {isSet: false, linkDescription: 'Explore the links between their emotions and their behaviour.'},
		VCPSCSE026: {isSet: false, linkDescription: 'Reflect on how personal strengths have assisted in achieving success at home, at school or in the community.'}, 
		VCPSCSE027: {isSet: false, linkDescription: 'Describe what it means to be confident, adaptable and persistent and why these attributes are important in dealing with new or challenging situations.'},
		VCPSCSE028: {isSet: false, linkDescription: 'Identify the skills for working independently and describe their performance when undertaking independent tasks.'},
		VCPSCSE029: {isSet: false, linkDescription: 'Explore and discuss behaviours that demonstrate sensitivity to individual, social and cultural differences.'},
		VCPSCSE030: {isSet: false, linkDescription: 'Define and recognise examples of stereotypes, discrimination and prejudice and discuss how they impact on the individual.'}, 
		VCPSCSE031: {isSet: false, linkDescription: 'Describe the characteristics of respectful relationships and suggest ways that respectful relationships can be achieved.'},
		VCPSCSE032: {isSet: false, linkDescription: 'Identify the characteristics of an effective team and develop descriptions for particular roles including leadership, and describe both their own and their team’s performance when undertaking various roles.'},
		VCPSCSE033: {isSet: false, linkDescription: 'Describe the various causes of conflict and evaluate possible strategies to address conflict.'}
	};

	return curriculumLinks;
}

export const linkStructure = (currentLinks) => {
	const curriculumLinks = {
		pascCurriculum: {
			levelA: {
				seaam: {
					raeoe: {
						VCPSCSE052: currentLinks.VCPSCSE052
					},
					dor: {
						VCPSCSE053: currentLinks.VCPSCSE053,
						VCPSCSE054: currentLinks.VCPSCSE054
					}
				},
				soaam: {
					rad: {
						VCPSCSE055: currentLinks.VCPSCSE055,
						VCPSCSE056: currentLinks.VCPSCSE056
					},
					col: {
						VCPSCSE057: currentLinks.VCPSCSE057,
 						VCPSCSE058: currentLinks.VCPSCSE058
					}
				}
			},
			levelB: {
				seaam: {
					raeoe: {
						VCPSCSE059: currentLinks.VCPSCSE059
					},
					dor: {
						VCPSCSE060: currentLinks.VCPSCSE060,
						VCPSCSE061: currentLinks.VCPSCSE061
					}
				},
				soaam: {
					rad: {
						VCPSCSE062: currentLinks.VCPSCSE062,
						VCPSCSE063: currentLinks.VCPSCSE063
					},
					col: {
						VCPSCSE064: currentLinks.VCPSCSE064,
 						VCPSCSE065: currentLinks.VCPSCSE065
					}
				}
			}, 
			levelC: {
				seaam: {
					raeoe: {
						VCPSCSE066: currentLinks.VCPSCSE066
					},
					dor: {
						VCPSCSE067: currentLinks.VCPSCSE067,
						VCPSCSE068: currentLinks.VCPSCSE068
					}
				},
				soaam: {
					rad: {
						VCPSCSE069: currentLinks.VCPSCSE069,
						VCPSCSE070: currentLinks.VCPSCSE070
					},
					col: {
						VCPSCSE071: currentLinks.VCPSCSE071,
 						VCPSCSE072: currentLinks.VCPSCSE072
					}
				}
			}, 
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
			},
			Levels3and4: {
				seaam: {
					raeoe: {
						VCPSCSE016: currentLinks.VCPSCSE016
					},
					dor: {
						VCPSCSE017: currentLinks.VCPSCSE017,
						VCPSCSE018: currentLinks.VCPSCSE018,
						VCPSCSE019: currentLinks.VCPSCSE019
					}
				},
				soaam: {
					rad: {
						VCPSCSE020: currentLinks.VCPSCSE020,
						VCPSCSE021: currentLinks.VCPSCSE021,
						VCPSCSE022: currentLinks.VCPSCSE022
					},
					col: {
						VCPSCSE023: currentLinks.VCPSCSE023,
 						VCPSCSE024: currentLinks.VCPSCSE024
					}
				}
			},
			Levels5and6: {
				seaam: {
					raeoe: {
						VCPSCSE025: currentLinks.VCPSCSE025
					},
					dor: {
						VCPSCSE026: currentLinks.VCPSCSE026,
						VCPSCSE027: currentLinks.VCPSCSE027,
						VCPSCSE028: currentLinks.VCPSCSE028
					}
				},
				soaam: {
					rad: {
						VCPSCSE029: currentLinks.VCPSCSE029,
						VCPSCSE030: currentLinks.VCPSCSE030,
						VCPSCSE031: currentLinks.VCPSCSE031
					},
					col: {
						VCPSCSE032: currentLinks.VCPSCSE032,
 						VCPSCSE033: currentLinks.VCPSCSE033
					}
				}
			} 
		}
	};

	return curriculumLinks;
}
