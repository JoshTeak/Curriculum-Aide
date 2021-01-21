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

export const linkArray = () => [
	{
		levelName: 'Level A',
		primaryTitles: [
			{
				primaryName: 'Self-Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Recognition and expression of emotion',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE052',
								linkDescription: 'React to people and express emotions.',
							}
						]
					},
					{
						secondaryName: 'Development of resilience',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE053',
								linkDescription: 'Identify significant objects and people and make a choice between alternatives to show what they like.',
							},
							{
								linkCode: 'VCPSCSE054',
								linkDescription: 'Experience problems within everyday situations and assist to implement routine and accept assistance from familiar adults to manage problems.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Social Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Relationships and diversity',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE055',
								linkDescription: 'Identify significant people by gesturing, vocalising or orienting towards them.',
							},
							{
								linkCode: 'VCPSCSE056',
								linkDescription: 'Supported to interact with others.',
							}
						]
					},
					{
						secondaryName: 'Collaboration',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE057',
								linkDescription: 'Develop ability to focus attention on others and acknowledge their presence.',
							},
							{
								linkCode: 'VCPSCSE058',
								linkDescription: 'Interact with another showing cooperation.',
							}
						]
					}
				]
			}
		]
	},

	{
		levelName: 'Level B',
		primaryTitles: [
			{
				primaryName: 'Self-Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Recognition and expression of emotion',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE059',
								linkDescription: 'Respond to people or events and demonstrate a range of emotions.',
							}
						]
					},
					{
						secondaryName: 'Development of resilience',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE060',
								linkDescription: 'Indicate the personal characteristics and the abilities they possess.',
							},
							{
								linkCode: 'VCPSCSE061',
								linkDescription: 'Follow teacher direction and orientate their attention to an activity or person and persist in a task when supported by teacher.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Social Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Relationships and diversity',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE062',
								linkDescription: 'Identify members of their family and some members of their class.',
							},
							{
								linkCode: 'VCPSCSE063',
								linkDescription: 'Participate in routine activities and interact with others in a range of familiar contexts instigated by the teacher.',
							}
						]
					},
					{
						secondaryName: 'Collaboration',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE064',
								linkDescription: 'Demonstrate some simple social skills including attending to others, greeting, and following adult directions.',
							},
							{
								linkCode: 'VCPSCSE065',
								linkDescription: 'Demonstrate awareness of basic social rules by responding to assistance provided by an adult.',
							}
						]
					}
				]
			}
		]
	},

	{
		levelName: 'Level C',
		primaryTitles: [
			{
				primaryName: 'Self-Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Recognition and expression of emotion',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE066',
								linkDescription: 'Name emotions shown by self and match these emotions to familiar events or experiences.',
							}
						]
					},
					{
						secondaryName: 'Development of resilience',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE067',
								linkDescription: 'Change, accept and reject things based on their personal preference.',
							},
							{
								linkCode: 'VCPSCSE068',
								linkDescription: 'Try a variety of activities and completing some steps in a set routine independently.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Social Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Relationships and diversity',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE069',
								linkDescription: 'Identify familiar adults and explore groups they belong to.',
							},
							{
								linkCode: 'VCPSCSE070',
								linkDescription: 'Follow adult directions to intentionally participate in class activities and follow rules and routines.',
							}
						]
					},
					{
						secondaryName: 'Collaboration',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE071',
								linkDescription: 'Follow basic social rules regarding the sharing and care of property and social expectations regarding behaviour.',
							},
							{
								linkCode: 'VCPSCSE072',
								linkDescription: 'Identify reactions and solutions to familiar social problems in supported situations.',
							}
						]
					}
				]
			}
		]
	},

	{
		levelName: 'Level D',
		primaryTitles: [
			{
				primaryName: 'Self-Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Recognition and expression of emotion',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE073',
								linkDescription: 'Name a range of emotions and describe how these are expressed or shown.',
							}
						]
					},
					{
						secondaryName: 'Development of resilience',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE074',
								linkDescription: 'Identify characteristics of self and share their likes and dislikes',
							},
							{
								linkCode: 'VCPSCSE075',
								linkDescription: 'Identify situations that could be a problem or challenge and discuss relevant self-help skills.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Social Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Relationships and diversity',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE076',
								linkDescription: 'Categorise familiar people and members of their family and class.',
							},
							{
								linkCode: 'VCPSCSE077',
								linkDescription: 'Work with various peers, including participating in an activity they didn’t like.',
							}
						]
					},
					{
						secondaryName: 'Collaboration',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE078',
								linkDescription: 'Respond to others in group situations, playing or working in a small group cooperatively.',
							},
							{
								linkCode: 'VCPSCSE079',
								linkDescription: 'Demonstrate some understanding that negative words and actions are hurtful and that their behaviour can impact on others.',
							}
						]
					}
				]
			}
		]
	},

	{
		levelName: 'Foundation Level',
		primaryTitles: [
			{
				primaryName: 'Self-Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Recognition and expression of emotion',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE001',
								linkDescription: 'Develop a vocabulary and practise the expression of emotions to describe how they feel in different familiar situations.',
							}
						]
					},
					{
						secondaryName: 'Development of resilience',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE002',
								linkDescription: 'Identify their likes and dislikes, needs and wants, abilities and strengths.',
							},
							{
								linkCode: 'VCPSCSE003',
								linkDescription: 'Recognise that problems or challenges are a normal part of life and that there are actions that can be undertaken to manage problems.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Social Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Relationships and diversity',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE004',
								linkDescription: 'Identify a range of groups to which they, their family and members of their class belong.',
							},
							{
								linkCode: 'VCPSCSE005',
								linkDescription: 'Practise the skills required to include others and make friends with peers, teachers and other adults.',
							}
						]
					},
					{
						secondaryName: 'Collaboration',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE006',
								linkDescription: 'Name and practise basic skills required to work collaboratively with peers.',
							},
							{
								linkCode: 'VCPSCSE007',
								linkDescription: 'Use appropriate language to describe what happens and how they feel when experiencing positive interactions or conflict.',
							}
						]
					}
				]
			}
		]
	},

	{
		levelName: 'Levels 1 and 2',
		primaryTitles: [
			{
				primaryName: 'Self-Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Recognition and expression of emotion',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE008',
								linkDescription: 'Extend their vocabulary through which to recognise and describe emotions and when, how and with whom it is appropriate to share emotions.',
							}
						]
					},
					{
						secondaryName: 'Development of resilience',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE009',
								linkDescription: 'Identify personal strengths and describe how these strengths are useful in school or family life.',
							},
							{
								linkCode: 'VCPSCSE010',
								linkDescription: 'Explain how being prepared to try new things can help identify strategies when faced with unfamiliar or challenging situations.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Social Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Relationships and diversity',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE011',
								linkDescription: 'Identify how families can have a range of relationships.',
							},
							{
								linkCode: 'VCPSCSE012',
								linkDescription: 'Listen to others’ ideas, and recognise that others may see things differently.',
							},
							{
								linkCode: 'VCPSCSE013',
								linkDescription: 'Describe ways of making and keeping friends, including how actions and words can help or hurt others, and the effects of modifying their behaviour.',
							}
						]
					},
					{
						secondaryName: 'Collaboration',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE014',
								linkDescription: 'Use basic skills required for participation in group tasks and respond to simple questions about their contribution to group tasks.',
							},
							{
								linkCode: 'VCPSCSE015',
								linkDescription: 'Recognise that conflict occurs and distinguish between appropriate and inappropriate ways to deal with conflict.',
							}
						]
					}
				]
			}
		]
	},

	{
		levelName: 'Levels 3 and 4',
		primaryTitles: [
			{
				primaryName: 'Self-Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Recognition and expression of emotion',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE016',
								linkDescription: 'Identify and explore the expression of emotions in social situations and the impact on self and others.',
							}
						]
					},
					{
						secondaryName: 'Development of resilience',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE017',
								linkDescription: 'Identify personal strengths and select personal qualities that could be further developed.',
							},
							{
								linkCode: 'VCPSCSE018',
								linkDescription: 'Identify how persistence and adaptability can be used when faced with challenging situations and change.',
							},
							{
								linkCode: 'VCPSCSE019',
								linkDescription: 'Name and describe the skills required to work independently.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Social Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Relationships and diversity',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE020',
								linkDescription: 'Examine the similarities and differences between individuals and groups based on factors such as sex, age, ability, language, culture and religion.',
							},
							{
								linkCode: 'VCPSCSE021',
								linkDescription: 'Describe the ways in which similarities and differences can affect relationships.',
							},
							{
								linkCode: 'VCPSCSE022',
								linkDescription: 'Identify the importance of including others in activities, groups and games.',
							}
						]
					},
					{
						secondaryName: 'Collaboration',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE023',
								linkDescription: 'Demonstrate skills for effective participation in group tasks and use criteria provided to reflect on the effectiveness of the teams in which they participate.',
							},
							{
								linkCode: 'VCPSCSE024',
								linkDescription: 'Identify conflicts that may occur in peer groups and suggest possible causes and resolutions.',
							}
						]
					}
				]
			}
		]
	},

	{
		levelName: 'Levels 5 and 6',
		primaryTitles: [
			{
				primaryName: 'Self-Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Recognition and expression of emotion',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE025',
								linkDescription: 'Explore the links between their emotions and their behaviour.',
							}
						]
					},
					{
						secondaryName: 'Development of resilience',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE026',
								linkDescription: 'Reflect on how personal strengths have assisted in achieving success at home, at school or in the community.',
							},
							{
								linkCode: 'VCPSCSE027',
								linkDescription: 'Describe what it means to be confident, adaptable and persistent and why these attributes are important in dealing with new or challenging situations.',
							},
							{
								linkCode: 'VCPSCSE028',
								linkDescription: 'Identify the skills for working independently and describe their performance when undertaking independent tasks.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Social Awareness and Management',
				secondaryTitles: [
					{
						secondaryName: 'Relationships and diversity',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE029',
								linkDescription: 'Explore and discuss behaviours that demonstrate sensitivity to individual, social and cultural differences.',
							},
							{
								linkCode: 'VCPSCSE030',
								linkDescription: 'Define and recognise examples of stereotypes, discrimination and prejudice and discuss how they impact on the individual.',
							},
							{
								linkCode: 'VCPSCSE031',
								linkDescription: 'Describe the characteristics of respectful relationships and suggest ways that respectful relationships can be achieved.',
							}
						]
					},
					{
						secondaryName: 'Collaboration',
						linksToSecondary: [
							{
								linkCode: 'VCPSCSE032',
								linkDescription: 'Identify the characteristics of an effective team and develop descriptions for particular roles including leadership, and describe both their own and their team’s performance when undertaking various roles.',
							},
							{
								linkCode: 'VCPSCSE033',
								linkDescription: 'Describe the various causes of conflict and evaluate possible strategies to address conflict.',
							}
						]
					}
				]
			}
		]
	},
]