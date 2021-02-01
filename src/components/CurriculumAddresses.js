import React from 'react';

export const defaultLinks = () => {
	const curriculumLinks = {
		VCPSCSE052: {isSet: false, curriculum: 'Personal and Social Capability', level: 'A', linkDescription: 'React to people and express emotions.'}, 
		VCPSCSE053: {isSet: false, curriculum: 'Personal and Social Capability', level: 'A', linkDescription: 'Identify significant objects and people and make a choice between alternatives to show what they like.'}, 
		VCPSCSE054: {isSet: false, curriculum: 'Personal and Social Capability', level: 'A', linkDescription: 'Experience problems within everyday situations and assist to implement routine and accept assistance from familiar adults to manage problems.'}, 
		VCPSCSE055: {isSet: false, curriculum: 'Personal and Social Capability', level: 'A', linkDescription: 'Identify significant people by gesturing, vocalising or orienting towards them.'}, 
		VCPSCSE056: {isSet: false, curriculum: 'Personal and Social Capability', level: 'A', linkDescription: 'Supported to interact with others.'}, 
		VCPSCSE057: {isSet: false, curriculum: 'Personal and Social Capability', level: 'A', linkDescription: 'Develop ability to focus attention on others and acknowledge their presence.'}, 
		VCPSCSE058: {isSet: false, curriculum: 'Personal and Social Capability', level: 'A', linkDescription: 'Interact with another showing cooperation.'},
		VCPSCSE059: {isSet: false, curriculum: 'Personal and Social Capability', level: 'B', linkDescription: 'Respond to people or events and demonstrate a range of emotions.'}, 
		VCPSCSE060: {isSet: false, curriculum: 'Personal and Social Capability', level: 'B', linkDescription: 'Indicate the personal characteristics and the abilities they possess.'}, 
		VCPSCSE061: {isSet: false, curriculum: 'Personal and Social Capability', level: 'B', linkDescription: 'Follow teacher direction and orientate their attention to an activity or person and persist in a task when supported by teacher.'}, 
		VCPSCSE062: {isSet: false, curriculum: 'Personal and Social Capability', level: 'B', linkDescription: 'Identify members of their family and some members of their class.'}, 
		VCPSCSE063: {isSet: false, curriculum: 'Personal and Social Capability', level: 'B', linkDescription: 'Participate in routine activities and interact with others in a range of familiar contexts instigated by the teacher.'}, 
		VCPSCSE064: {isSet: false, curriculum: 'Personal and Social Capability', level: 'B', linkDescription: 'Demonstrate some simple social skills including attending to others, greeting, and following adult directions.'}, 
		VCPSCSE065: {isSet: false, curriculum: 'Personal and Social Capability', level: 'B', linkDescription: 'Demonstrate awareness of basic social rules by responding to assistance provided by an adult.'}, 
		VCPSCSE066: {isSet: false, curriculum: 'Personal and Social Capability', level: 'C', linkDescription: 'Name emotions shown by self and match these emotions to familiar events or experiences.'}, 
		VCPSCSE067: {isSet: false, curriculum: 'Personal and Social Capability', level: 'C', linkDescription: 'Change, accept and reject things based on their personal preference.'}, 
		VCPSCSE068: {isSet: false, curriculum: 'Personal and Social Capability', level: 'C', linkDescription: 'Try a variety of activities and completing some steps in a set routine independently.'}, 
		VCPSCSE069: {isSet: false, curriculum: 'Personal and Social Capability', level: 'C', linkDescription: 'Identify familiar adults and explore groups they belong to.'}, 
		VCPSCSE070: {isSet: false, curriculum: 'Personal and Social Capability', level: 'C', linkDescription: 'Follow adult directions to intentionally participate in class activities and follow rules and routines.'},
		VCPSCSE071: {isSet: false, curriculum: 'Personal and Social Capability', level: 'C', linkDescription: 'Follow basic social rules regarding the sharing and care of property and social expectations regarding behaviour.'}, 
		VCPSCSE072: {isSet: false, curriculum: 'Personal and Social Capability', level: 'C', linkDescription: 'Identify reactions and solutions to familiar social problems in supported situations.'}, 
		VCPSCSE073: {isSet: false, curriculum: 'Personal and Social Capability', level: 'D', linkDescription: 'Name a range of emotions and describe how these are expressed or shown.'}, 
		VCPSCSE074: {isSet: false, curriculum: 'Personal and Social Capability', level: 'D', linkDescription: 'Identify characteristics of self and share their likes and dislikes'}, 
		VCPSCSE075: {isSet: false, curriculum: 'Personal and Social Capability', level: 'D', linkDescription: 'Identify situations that could be a problem or challenge and discuss relevant self-help skills.'}, 
		VCPSCSE076: {isSet: false, curriculum: 'Personal and Social Capability', level: 'D', linkDescription: 'Categorise familiar people and members of their family and class.'}, 
		VCPSCSE077: {isSet: false, curriculum: 'Personal and Social Capability', level: 'D', linkDescription: 'Work with various peers, including participating in an activity they didn’t like.'}, 
		VCPSCSE078: {isSet: false, curriculum: 'Personal and Social Capability', level: 'D', linkDescription: 'Respond to others in group situations, playing or working in a small group cooperatively.'}, 
		VCPSCSE079: {isSet: false, curriculum: 'Personal and Social Capability', level: 'D', linkDescription: 'Demonstrate some understanding that negative words and actions are hurtful and that their behaviour can impact on others.'},
		VCPSCSE001: {isSet: false, curriculum: 'Personal and Social Capability', level: 'foundation', linkDescription: 'Develop a vocabulary and practise the expression of emotions to describe how they feel in different familiar situations.'}, 
		VCPSCSE002: {isSet: false, curriculum: 'Personal and Social Capability', level: 'foundation', linkDescription: 'Identify their likes and dislikes, needs and wants, abilities and strengths'}, 
		VCPSCSE003: {isSet: false, curriculum: 'Personal and Social Capability', level: 'foundation', linkDescription: 'Recognise that problems or challenges are a normal part of life and that there are actions that can be undertaken to manage problems.'}, 
		VCPSCSE004: {isSet: false, curriculum: 'Personal and Social Capability', level: 'foundation', linkDescription: 'Identify a range of groups to which they, their family and members of their class belong.'}, 
		VCPSCSE005: {isSet: false, curriculum: 'Personal and Social Capability', level: 'foundation', linkDescription: 'Practise the skills required to include others and make friends with peers, teachers and other adults.'}, 
		VCPSCSE006: {isSet: false, curriculum: 'Personal and Social Capability', level: 'foundation', linkDescription: 'Name and practise basic skills required to work collaboratively with peers.'}, 
		VCPSCSE007: {isSet: false, curriculum: 'Personal and Social Capability', level: 'foundation', linkDescription: 'Use appropriate language to describe what happens and how they feel when experiencing positive interactions or conflict.'},
		VCPSCSE008: {isSet: false, curriculum: 'Personal and Social Capability', level: '1, 2', linkDescription: 'Extend their vocabulary through which to recognise and describe emotions and when, how and with whom it is appropriate to share emotions.'}, 
		VCPSCSE009: {isSet: false, curriculum: 'Personal and Social Capability', level: '1, 2', linkDescription: 'Identify personal strengths and describe how these strengths are useful in school or family life'}, 
		VCPSCSE010: {isSet: false, curriculum: 'Personal and Social Capability', level: '1, 2', linkDescription: 'Explain how being prepared to try new things can help identify strategies when faced with unfamiliar or challenging situations.'}, 
		VCPSCSE011: {isSet: false, curriculum: 'Personal and Social Capability', level: '1, 2', linkDescription: 'Identify how families can have a range of relationships.'}, 
		VCPSCSE012: {isSet: false, curriculum: 'Personal and Social Capability', level: '1, 2', linkDescription: 'Listen to others’ ideas, and recognise that others may see things differently.'}, 
		VCPSCSE013: {isSet: false, curriculum: 'Personal and Social Capability', level: '1, 2', linkDescription: 'Describe ways of making and keeping friends, including how actions and words can help or hurt others, and the effects of modifying their behaviour.'}, 
		VCPSCSE014: {isSet: false, curriculum: 'Personal and Social Capability', level: '1, 2', linkDescription: 'Use basic skills required for participation in group tasks and respond to simple questions about their contribution to group tasks.'},
		VCPSCSE015: {isSet: false, curriculum: 'Personal and Social Capability', level: '1, 2', linkDescription: 'Recognise that conflict occurs and distinguish between appropriate and inappropriate ways to deal with conflict.'},
		VCPSCSE016: {isSet: false, curriculum: 'Personal and Social Capability', level: '3, 4', linkDescription: 'Identify and explore the expression of emotions in social situations and the impact on self and others.'},
		VCPSCSE017: {isSet: false, curriculum: 'Personal and Social Capability', level: '3, 4', linkDescription: 'Identify personal strengths and select personal qualities that could be further developed.'}, 
		VCPSCSE018: {isSet: false, curriculum: 'Personal and Social Capability', level: '3, 4', linkDescription: 'Identify how persistence and adaptability can be used when faced with challenging situations and change.'},
		VCPSCSE019: {isSet: false, curriculum: 'Personal and Social Capability', level: '3, 4', linkDescription: 'Name and describe the skills required to work independently.'},
		VCPSCSE020: {isSet: false, curriculum: 'Personal and Social Capability', level: '3, 4', linkDescription: 'Examine the similarities and differences between individuals and groups based on factors such as sex, age, ability, language, culture and religion.'},
		VCPSCSE021: {isSet: false, curriculum: 'Personal and Social Capability', level: '3, 4', linkDescription: 'Describe the ways in which similarities and differences can affect relationships.'}, 
		VCPSCSE022: {isSet: false, curriculum: 'Personal and Social Capability', level: '3, 4', linkDescription: 'Identify the importance of including others in activities, groups and games.'},
		VCPSCSE023: {isSet: false, curriculum: 'Personal and Social Capability', level: '3, 4', linkDescription: 'Demonstrate skills for effective participation in group tasks and use criteria provided to reflect on the effectiveness of the teams in which they participate.'},
		VCPSCSE024: {isSet: false, curriculum: 'Personal and Social Capability', level: '3, 4', linkDescription: 'Identify conflicts that may occur in peer groups and suggest possible causes and resolutions.'},
		VCPSCSE025: {isSet: false, curriculum: 'Personal and Social Capability', level: '5, 6', linkDescription: 'Explore the links between their emotions and their behaviour.'},
		VCPSCSE026: {isSet: false, curriculum: 'Personal and Social Capability', level: '5, 6', linkDescription: 'Reflect on how personal strengths have assisted in achieving success at home, at school or in the community.'}, 
		VCPSCSE027: {isSet: false, curriculum: 'Personal and Social Capability', level: '5, 6', linkDescription: 'Describe what it means to be confident, adaptable and persistent and why these attributes are important in dealing with new or challenging situations.'},
		VCPSCSE028: {isSet: false, curriculum: 'Personal and Social Capability', level: '5, 6', linkDescription: 'Identify the skills for working independently and describe their performance when undertaking independent tasks.'},
		VCPSCSE029: {isSet: false, curriculum: 'Personal and Social Capability', level: '5, 6', linkDescription: 'Explore and discuss behaviours that demonstrate sensitivity to individual, social and cultural differences.'},
		VCPSCSE030: {isSet: false, curriculum: 'Personal and Social Capability', level: '5, 6', linkDescription: 'Define and recognise examples of stereotypes, discrimination and prejudice and discuss how they impact on the individual.'}, 
		VCPSCSE031: {isSet: false, curriculum: 'Personal and Social Capability', level: '5, 6', linkDescription: 'Describe the characteristics of respectful relationships and suggest ways that respectful relationships can be achieved.'},
		VCPSCSE032: {isSet: false, curriculum: 'Personal and Social Capability', level: '5, 6', linkDescription: 'Identify the characteristics of an effective team and develop descriptions for particular roles including leadership, and describe both their own and their team’s performance when undertaking various roles.'},
		VCPSCSE033: {isSet: false, curriculum: 'Personal and Social Capability', level: '5, 6', linkDescription: 'Describe the various causes of conflict and evaluate possible strategies to address conflict.'},

		ACMNA001: {isSet: false, curriculum: 'Mathematics', level: 'F', linkDescription: 'Connect number names, numerals and quantities, including zero, initially up to 10 and then beyond.'},
		ACMNA002: {isSet: false, curriculum: 'Mathematics', level: 'F', linkDescription: 'Subitise small collections of objects.'},
		ACMNA003: {isSet: false, curriculum: 'Mathematics', level: 'F', linkDescription: 'Compare, order and make correspondences between collections, initially to 20, and explain reasoning.'},
		ACMNA004: {isSet: false, curriculum: 'Mathematics', level: 'F', linkDescription: 'Represent practical situations to model addition and sharing.'},
		ACMNA005: {isSet: false, curriculum: 'Mathematics', level: 'F', linkDescription: 'Sort and classify familiar objects and explain the basis for these classifications. Copy, continue and create patterns with objects and drawings.'},
		ACMMG006: {isSet: false, curriculum: 'Mathematics', level: 'F', linkDescription: 'Use direct and indirect comparisons to decide which is longer, heavier or holds more, and explain reasoning in everyday language.'},
		ACMMG007: {isSet: false, curriculum: 'Mathematics', level: 'F', linkDescription: 'Compare and order duration of events using everyday language of time.'},
		ACMMG008: {isSet: false, curriculum: 'Mathematics', level: 'F', linkDescription: 'Connect days of the week to familiar events and actions.'},
		ACMMG009: {isSet: false, curriculum: 'Mathematics', level: 'F', linkDescription: 'Sort, describe and name familiar two-dimensional shapes and three-dimensional objects in the environment.'},
		ACMMG010: {isSet: false, curriculum: 'Mathematics', level: 'F', linkDescription: 'Describe position and movement.'},
		ACMSP011: {isSet: false, curriculum: 'Mathematics', level: 'F', linkDescription: 'Answer yes/no questions to collect information and make simple inferences.'},
		ACMNA012: {isSet: false, curriculum: 'Mathematics', level: '1', linkDescription: 'Develop confidence with number sequences to and from 100 by ones from any starting point. Skip count by twos, fives and tens starting from zero.'},
		ACMNA013: {isSet: false, curriculum: 'Mathematics', level: '1', linkDescription: 'Recognise, model, read, write and order numbers to at least 100. Locate these numbers on a number line.'},
		ACMNA014: {isSet: false, curriculum: 'Mathematics', level: '1', linkDescription: 'Count collections to 100 by partitioning numbers using place value.'},
		ACMNA015: {isSet: false, curriculum: 'Mathematics', level: '1', linkDescription: 'Represent and solve simple addition and subtraction problems using a range of strategies including counting on, partitioning and rearranging parts.'},
		ACMNA016: {isSet: false, curriculum: 'Mathematics', level: '1', linkDescription: 'Recognise and describe one-half as one of two equal parts of a whole.'},
		ACMNA017: {isSet: false, curriculum: 'Mathematics', level: '1', linkDescription: 'Recognise, describe and order Australian coins according to their value.'},
		ACMNA018: {isSet: false, curriculum: 'Mathematics', level: '1', linkDescription: 'Investigate and describe number patterns formed by skip-counting and patterns with objects.'},
		ACMMG019: {isSet: false, curriculum: 'Mathematics', level: '1', linkDescription: 'Measure and compare the lengths and capacities of pairs of objects using uniform informal units.'},
		ACMMG020: {isSet: false, curriculum: 'Mathematics', level: '1', linkDescription: 'Tell time to the half-hour.'},
		ACMMG021: {isSet: false, curriculum: 'Mathematics', level: '1', linkDescription: 'Describe duration using months, weeks, days and hours.'},
		ACMMG022: {isSet: false, curriculum: 'Mathematics', level: '1', linkDescription: 'Recognise and classify familiar two-dimensional shapes and three-dimensional objects using obvious features.'},
		ACMMG023: {isSet: false, curriculum: 'Mathematics', level: '1', linkDescription: 'Give and follow directions to familiar locations.'},
		ACMSP024: {isSet: false, curriculum: 'Mathematics', level: '1', linkDescription: 'Identify outcomes of familiar events involving chance and describe them using everyday language such as ‘will happen’, ‘won’t happen’ or ‘might happen’.'},
		ACMSP262: {isSet: false, curriculum: 'Mathematics', level: '1', linkDescription: 'Choose simple questions and gather responses and make simple inferences.'},
		ACMSP263: {isSet: false, curriculum: 'Mathematics', level: '1', linkDescription: 'Represent data with objects and drawings where one object or drawing represents one data value. Describe the displays.'},
		ACMNA026: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Investigate number sequences, initially those increasing and decreasing by twos, threes, fives and tens from any starting point, then moving to other sequences.'},
		ACMNA027: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Recognise, model, represent and order numbers to at least 1000.'},
		ACMNA028: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Group, partition and rearrange collections up to 1000 in hundreds, tens and ones to facilitate more efficient counting.'},
		ACMNA029: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Explore the connection between addition and subtraction.'},
		ACMNA030: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Solve simple addition and subtraction problems using a range of efficient mental and written strategies.'},
		ACMNA031: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Recognise and represent multiplication as repeated addition, groups and arrays.'},
		ACMNA032: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Recognise and represent division as grouping into equal sets and solve simple problems using these representations.'},
		ACMNA033: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Recognise and interpret common uses of halves, quarters and eighths of shapes and collections.'},
		ACMNA034: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Count and order small collections of Australian coins and notes according to their value.'},
		ACMNA035: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Describe patterns with numbers and identify missing elements.'},
		ACMNA036: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Solve problems by using number sentences for addition or subtraction.'},
		ACMMG037: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Compare and order several shapes and objects based on length, area, volume and capacity using appropriate uniform informal units.'},
		ACMMG038: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Compare masses of objects using balance scales.'},
		ACMMG039: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Tell time to the quarter-hour, using the language of ‘past’ and ‘to’.'},
		ACMMG040: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Name and order months and seasons.'},
		ACMMG041: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Use a calendar to identify the date and determine the number of days in each month.'},
		ACMMG042: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Describe and draw two-dimensional shapes, with and without digital technologies.'},
		ACMMG043: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Describe the features of three-dimensional objects.'},
		ACMMG044: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Interpret simple maps of familiar locations and identify the relative positions of key features.'},
		ACMMG045: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Investigate the effect of one-step slides and flips with and without digital technologies.'},
		ACMMG046: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Identify and describe half and quarter turns.'},
		ACMSP047: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Identify practical activities and everyday events that involve chance. Describe outcomes as ‘likely’ or ‘unlikely’ and identify some events as ‘certain’ or ‘impossible’.'},
		ACMSP048: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Identify a question of interest based on one categorical variable. Gather data relevant to the question.'},
		ACMSP049: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Collect, check and classify data.'},
		ACMSP050: {isSet: false, curriculum: 'Mathematics', level: '2', linkDescription: 'Create displays of data using lists, table and picture graphs and interpret them.'},
		ACMNA051: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Investigate the conditions required for a number to be odd or even and identify odd and even numbers.'},
		ACMNA052: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Recognise, model, represent and order numbers to at least 10 000.'},
		ACMNA053: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Apply place value to partition, rearrange and regroup numbers to at least 10 000 to assist calculations and solve problems.'},
		ACMNA054: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Recognise and explain the connection between addition and subtraction.'},
		ACMNA055: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Recall addition facts for single-digit numbers and related subtraction facts to develop increasingly efficient mental strategies for computation.'},
		ACMNA056: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Recall multiplication facts of two, three, five and ten and related division facts.'},
		ACMNA057: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Represent and solve problems involving multiplication using efficient mental and written strategies and appropriate digital technologies.'},
		ACMNA058: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Model and represent unit fractions including 1/2, 1/4, 1/3, 1/5 and their multiples to a complete whole.'},
		ACMNA059: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Represent money values in multiple ways and count the change required for simple transactions to the nearest five cents.'},
		ACMMG060: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Describe, continue, and create number patterns resulting from performing addition or subtraction.'},
		ACMMG061: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Measure, order and compare objects using familiar metric units of length, mass and capacity.'},
		ACMMG062: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Tell time to the minute and investigate the relationship between units of time.'},
		ACMMG063: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Make models of three-dimensional objects and describe key features.'},
		ACMMG065: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Create and interpret simple grid maps to show position and pathways.'},
		ACMMG066: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Identify symmetry in the environment.'},
		ACMMG064: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Identify angles as measures of turn and compare angle sizes in everyday situations.'},
		ACMSP067: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Conduct chance experiments, identify and describe possible outcomes and recognise variation in results.'},
		ACMSP068: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Identify questions or issues for categorical variables. Identify data sources and plan methods of data collection and recording.'},
		ACMSP069: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Collect data, organise into categories and create displays using lists, tables, picture graphs and simple column graphs, with and without the use of digital technologies.'},
		ACMSP070: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Interpret and compare data displays.'},
		ACMNA071: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Investigate and use the properties of odd and even numbers.'},
		ACMNA072: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Recognise, represent and order numbers to at least tens of thousands.'},
		ACMNA073: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Apply place value to partition, rearrange and regroup numbers to at least tens of thousands to assist calculations and solve problems.'},
		ACMNA074: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Investigate number sequences involving multiples of 3, 4, 6, 7, 8, and 9.'},
		ACMNA075: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Recall multiplication facts up to 10 × 10 and related division facts.'},
		ACMNA076: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Develop efficient mental and written strategies and use appropriate digital technologies for multiplication and for division where there is no remainder.'},
		ACMNA077: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Investigate equivalent fractions used in contexts.'},
		ACMNA078: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Count by quarters halves and thirds, including with mixed numerals. Locate and represent these fractions on a number line.'},
		ACMNA079: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Recognise that the place value system can be extended to tenths and hundredths. Make connections between fractions and decimal notation.'},
		ACMNA080: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Solve problems involving purchases and the calculation of change to the nearest five cents with and without digital technologies.'},
		ACMNA081: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Explore and describe number patterns resulting from performing multiplication.'},
		ACMNA082: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Solve word problems by using number sentences involving multiplication or division where there is no remainder.'},
		ACMNA083: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Find unknown quantities in number sentences involving addition and subtraction and identify equivalent number sentences involving addition and subtraction.'},
		ACMMG084: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Use scaled instruments to measure and compare lengths, masses, capacities and temperatures.'},
		ACMMG290: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Compare objects using familiar metric units of area and volume.'},
		ACMMG085: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Convert between units of time.'},
		ACMMG086: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Use ‘am’ and ‘pm’ notation and solve simple time problems.'},
		ACMMG087: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Compare the areas of regular and irregular shapes by informal means.'},
		ACMMG088: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Compare and describe two dimensional shapes that result from combining and splitting common shapes, with and without the use of digital technologies.'},
		ACMMG090: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Use simple scales, legends and directions to interpret information contained in basic maps.'},
		ACMMG091: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Create symmetrical patterns, pictures and shapes with and without digital technologies.'},
		ACMMG089: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Compare angles and classify them as equal to, greater than, or less than, a right angle.'},
		ACMSP092: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Describe possible everyday events and order their chances of occurring.'},
		ACMSP093: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Identify everyday events where one cannot happen if the other happens.'},
		ACMSP094: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Identify events where the chance of one will not be affected by the occurrence of the other.'},
		ACMSP095: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Select and trial methods for data collection, including survey questions and recording sheets.'},
		ACMSP096: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Construct suitable data displays, with and without the use of digital technologies, from given or collected data. Include tables, column graphs and picture graphs where one picture can represent many data values.'},
		ACMSP097: {isSet: false, curriculum: 'Mathematics', level: '4', linkDescription: 'Evaluate the effectiveness of different displays in illustrating data features including variability.'},
		ACMNA098: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Identify and describe factors and multiples of whole numbers and use them to solve problems.'},
		ACMNA099: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Use estimation and rounding to check the reasonableness of answers to calculations.'},
		ACMNA100: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Solve problems involving multiplication of large numbers by one- or two-digit numbers using efficient mental, written strategies and appropriate digital technologies.'},
		ACMNA101: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Solve problems involving division by a one digit number, including those that result in a remainder.'},
		ACMNA291: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Use efficient mental and written strategies and apply appropriate digital technologies to solve problems.'},
		ACMNA102: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Compare and order common unit fractions and locate and represent them on a number line.'},
		ACMNA103: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Investigate strategies to solve problems involving addition and subtraction of fractions with the same denominator.'},
		ACMNA104: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Recognise that the place value system can be extended beyond hundredths.'},
		ACMNA105: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Compare, order and represent decimals.'},
		ACMNA106: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Create simple financial plans.'},
		ACMNA107: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Describe, continue and create patterns with fractions, decimals and whole numbers resulting from addition and subtraction.'},
		ACMNA121: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Find unknown quantities in number sentences involving multiplication and division and identify equivalent number sentences involving multiplication and division.'},
		ACMMG108: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Choose appropriate units of measurement for length, area, volume, capacity and mass.'},
		ACMMG109: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Calculate perimeter and area of rectangles using familiar metric units.'},
		ACMMG110: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Compare 12- and 24-hour time systems and convert between them.'},
		ACMMG111: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Connect three-dimensional objects with their nets and other two-dimensional representations.'},
		ACMMG113: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Use a grid reference system to describe locations. Describe routes using landmarks and directional language.'},
		ACMMG114: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Describe translations, reflections and rotations of two-dimensional shapes. Identify line and rotational symmetries.'},
		ACMMG115: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Apply the enlargement transformation to familiar two dimensional shapes and explore the properties of the resulting image compared with the original.'},
		ACMMG112: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Estimate, measure and compare angles using degrees. Construct angles using a protractor.'},
		ACMSP116: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'List outcomes of chance experiments involving equally likely outcomes and represent probabilities of those outcomes using fractions.'},
		ACMSP117: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Recognise that probabilities range from 0 to 1.'},
		ACMSP118: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Pose questions and collect categorical or numerical data by observation or survey.'},
		ACMSP119: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Construct displays, including column graphs, dot plots and tables, appropriate for data type, with and without the use of digital technologies.'},
		ACMSP120: {isSet: false, curriculum: 'Mathematics', level: '5', linkDescription: 'Describe and interpret different data sets in context.'},
		ACMNA122: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Identify and describe properties of prime, composite, square and triangular numbers.'},
		ACMNA123: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Select and apply efficient mental and written strategies and appropriate digital technologies to solve problems involving all four operations with whole numbers.'},
		ACMNA124: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Investigate everyday situations that use integers. Locate and represent these numbers on a number line.'},
		ACMNA125: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Compare fractions with related denominators and locate and represent them on a number line.'},
		ACMNA126: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Solve problems involving addition and subtraction of fractions with the same or related denominators.'},
		ACMNA127: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Find a simple fraction of a quantity where the result is a whole number, with and without digital technologies.'},
		ACMNA128: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Add and subtract decimals, with and without digital technologies, and use estimation and rounding to check the reasonableness of answers.'},
		ACMNA129: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Multiply decimals by whole numbers and perform divisions by non-zero whole numbers where the results are terminating decimals, with and without digital technologies.'},
		ACMNA130: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Multiply and divide decimals by powers of 10.'},
		ACMNA131: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Make connections between equivalent fractions, decimals and percentages.'},
		ACMNA132: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Investigate and calculate percentage discounts of 10%, 25% and 50% on sale items, with and without digital technologies.'},
		ACMNA133: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Continue and create sequences involving whole numbers, fractions and decimals. Describe the rule used to create the sequence.'},
		ACMNA134: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Explore the use of brackets and order of operations to write number sentences.'},
		ACMMG135: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Connect decimal representations to the metric system.'},
		ACMMG136: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Convert between common metric units of length, mass and capacity.'},
		ACMMG137: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Solve problems involving the comparison of lengths and areas using appropriate units.'},
		ACMMG138: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Connect volume and capacity and their units of measurement.'},
		ACMMG139: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Interpret and use timetables.'},
		ACMMG140: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Construct simple prisms and pyramids.'},
		ACMMG142: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Investigate combinations of translations, reflections and rotations, with and without the use of digital technologies.'},
		ACMMG143: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Introduce the Cartesian coordinate system using all four quadrants.'},
		ACMMG141: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Investigate, with and without digital technologies, angles on a straight line, angles at a point and vertically opposite angles. Use results to find unknown angles.'},
		ACMSP144: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Describe probabilities using fractions, decimals and percentages.'},
		ACMSP145: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Conduct chance experiments with both small and large numbers of trials using appropriate digital technologies.'},
		ACMSP146: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Compare observed frequencies across experiments with expected frequencies.'},
		ACMSP147: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Interpret and compare a range of data displays, including side-by-side column graphs for two categorical variables.'},
		ACMSP148: {isSet: false, curriculum: 'Mathematics', level: '6', linkDescription: 'Interpret secondary data presented in digital media and elsewhere.'},
		ACMNA149: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Investigate index notation and represent whole numbers as products of powers of prime numbers.'},
		ACMNA150: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Investigate and use square roots of perfect square numbers.'},
		ACMNA151: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Apply the associative, commutative and distributive laws to aid mental and written computation.'},
		ACMNA280: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Compare, order, add and subtract integers.'},
		ACMNA152: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Compare fractions using equivalence. Locate and represent positive and negative fractions and mixed numbers on a number line.'},
		ACMNA153: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Solve problems involving addition and subtraction of fractions, including those with unrelated denominators.'},
		ACMNA154: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Multiply and divide fractions and decimals using efficient written strategies and digital technologies.'},
		ACMNA155: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Express one quantity as a fraction of another, with and without the use of digital technologies.'},
		ACMNA156: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Round decimals to a specified number of decimal places.'},
		ACMNA157: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Connect fractions, decimals and percentages and carry out simple conversions.'},
		ACMNA158: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Find percentages of quantities and express one quantity as a percentage of another, with and without digital technologies.'},
		ACMNA173: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Recognise and solve problems involving simple ratios.'},
		ACMNA174: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Investigate and calculate ‘best buys’, with and without digital technologies.'},
		ACMNA175: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Introduce the concept of variables as a way of representing numbers using letters.'},
		ACMNA176: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Create algebraic expressions and evaluate them by substituting a given value for each variable.'},
		ACMNA177: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Extend and apply the laws and properties of arithmetic to algebraic terms and expressions.'},
		ACMNA178: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Given coordinates, plot points on the Cartesian plane, and find coordinates for a given point.'},
		ACMNA179: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Solve simple linear equations.'},
		ACMNA180: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Investigate, interpret and analyse graphs from authentic data.'},
		ACMMG159: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Connect decimal representations to the metric system.'},
		ACMMG160: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Convert between common metric units of length, mass and capacity.'},
		ACMMG161: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Construct simple prisms and pyramids.'},
		ACMMG181: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Investigate combinations of translations, reflections and rotations, with and without the use of digital technologies.'},
		ACMMG165: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Investigate, with and without digital technologies, angles on a straight line, angles at a point and vertically opposite angles. Use results to find unknown angles.'},
		ACMMG166: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Investigate, with and without digital technologies, angles on a straight line, angles at a point and vertically opposite angles. Use results to find unknown angles.'},
		ACMMG163: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Investigate, with and without digital technologies, angles on a straight line, angles at a point and vertically opposite angles. Use results to find unknown angles.'},
		ACMMG164: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Investigate, with and without digital technologies, angles on a straight line, angles at a point and vertically opposite angles. Use results to find unknown angles.'},
		ACMSP167: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Construct sample spaces for single-step experiments with equally likely outcomes.'},
		ACMSP168: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Assign probabilities to the outcomes of events and determine probabilities for events.'},
		ACMSP169: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Identify and investigate issues involving numerical data collected from primary and secondary sources.'},
		ACMSP170: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Construct and compare a range of data displays including stem-and-leaf plots and dot plots.'},
		ACMSP171: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Calculate mean, median, mode and range for sets of data. Interpret these statistics in the context of data.'},
		ACMSP172: {isSet: false, curriculum: 'Mathematics', level: '7', linkDescription: 'Describe and interpret data displays using median, mean and range.'},
		ACMNA182: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Use index notation with numbers to establish the index laws with positive integral indices and the zero index.'},
		ACMNA183: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Carry out the four operations with rational numbers and integers, using efficient mental and written strategies and appropriate digital technologies.'},
		ACMNA184: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Investigate terminating and recurring decimals.'},
		ACMNA186: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Investigate the concept of irrational numbers, including π.'},
		ACMNA187: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Solve problems involving the use of percentages, including percentage increases and decreases, with and without digital technologies.'},
		ACMNA188: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Solve a range of problems involving rates and ratios, with and without digital technologies.'},
		ACMNA189: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Solve problems involving profit and loss, with and without digital technologies.'},
		ACMNA190: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Extend and apply the distributive law to the expansion of algebraic expressions.'},
		ACMNA191: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Factorise algebraic expressions by identifying numerical factors.'},
		ACMNA192: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Simplify algebraic expressions involving the four operations.'},
		ACMNA193: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Plot linear relationships on the Cartesian plane with and without the use of digital technologies.'},
		ACMNA194: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Solve linear equations using algebraic and graphical techniques. Verify solutions by substitution.'},
		ACMMG195: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Choose appropriate units of measurement for area and volume and convert from one unit to another.'},
		ACMMG196: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Find perimeters and areas of parallelograms, trapeziums, rhombuses and kites.'},
		ACMMG197: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Investigate the relationship between features of circles such as circumference, area, radius and diameter. Use formulas to solve problems involving circumference and area.'},
		ACMMG198: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Develop formulas for volumes of rectangular and triangular prisms and prisms in general. Use formulas to solve problems involving volume.'},
		ACMMG199: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Solve problems involving duration, including using 12- and 24-hour time within a single time zone.'},
		ACMMG200: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Define congruence of plane shapes using transformations.'},
		ACMMG201: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Develop the conditions for congruence of triangles.'},
		ACMMG202: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Establish properties of quadrilaterals using congruent triangles and angle properties, and solve related numerical problems using reasoning.'},
		ACMSP204: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Identify complementary events and use the sum of probabilities to solve problems.'},
		ACMSP205: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Describe events using language of ‘at least’, exclusive ‘or’ (A or B but not both), inclusive ‘or’ (A or B or both) and ‘and’..'},
		ACMSP292: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Represent events in two-way tables and Venn diagrams and solve related problems.'},
		ACMSP284: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Investigate techniques for collecting data, including census, sampling and observation.'},
		ACMSP206: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Explore the practicalities and implications of obtaining data through sampling using a variety of investigative processes.'},
		ACMSP293: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Explore the variation of means and proportions of random samples drawn from the same population.'},
		ACMSP207: {isSet: false, curriculum: 'Mathematics', level: '8', linkDescription: 'Investigate the effect of individual data values, including outliers, on the mean and median.'},
		ACMNA208: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Solve problems involving direct proportion. Explore the relationship between graphs and equations corresponding to simple rate problems.'},
		ACMNA209: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Apply index laws to numerical expressions with integer indices.'},
		ACMNA210: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Express numbers in scientific notation.'},
		ACMNA211: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Solve problems involving simple interest.'},
		ACMNA212: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Extend and apply the index laws to variables, using positive integer indices and the zero index.'},
		ACMNA213: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Apply the distributive law to the expansion of algebraic expressions, including binomials, and collect like terms where appropriate.'},
		ACMNA214: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Find the distance between two points located on the Cartesian plane using a range of strategies, including graphing software.'},
		ACMNA294: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Find the midpoint and gradient of a line segment (interval) on the Cartesian plane using a range of strategies, including graphing software.'},
		ACMNA215: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Sketch linear graphs using the coordinates of two points and solve linear equations.'},
		ACMNA296: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Graph simple non-linear relations with and without the use of digital technologies and solve simple related equations.'},
		ACMMG216: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Calculate areas of composite shapes.'},
		ACMMG217: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Calculate the surface area and volume of cylinders and solve related problems .'},
		ACMMG218: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Solve problems involving the surface area and volume of right prisms.'},
		ACMMG219: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Investigate very small and very large time scales and intervals.'},
		ACMMG220: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Use the enlargement transformation to explain similarity and develop the conditions for triangles to be similar.'},
		ACMMG221: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Solve problems using ratio and scale factors in similar figures.'},
		ACMMG222: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Investigate Pythagoras’ Theorem and its application to solving simple problems involving right angled triangles.'},
		ACMMG223: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Use similarity to investigate the constancy of the sine, cosine and tangent ratios for a given angle in right-angled triangles.'},
		ACMMG224: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Apply trigonometry to solve right-angled triangle problems.'},
		ACMSP225: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'List all outcomes for two-step chance experiments, both with and without replacement using tree diagrams or arrays. Assign probabilities to outcomes and determine probabilities for events.'},
		ACMSP226: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Calculate relative frequencies from given or collected data to estimate probabilities of events involving ‘and’ or ‘or’.'},
		ACMSP227: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Investigate reports of surveys in digital media and elsewhere for information on how data were obtained to estimate population means and medians.'},
		ACMSP228: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Identify everyday questions and issues involving at least one numerical and at least one categorical variable, and collect data directly and from secondary sources .'},
		ACMSP282: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Construct back-to-back stem-and-leaf plots and histograms and describe data, using terms including ‘skewed’, ‘symmetric’ and ‘bi modal’.'},
		ACMSP283: {isSet: false, curriculum: 'Mathematics', level: '9', linkDescription: 'Compare data displays using mean, median and range to describe and interpret numerical data sets in terms of location (centre) and spread.'},
		ACMNA229: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Connect the compound interest formula to repeated applications of simple interest using appropriate digital technologies.'},
		ACMNA230: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Factorise algebraic expressions by taking out a common algebraic factor.'},
		ACMNA231: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Simplify algebraic products and quotients using index laws.'},
		ACMNA232: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Apply the four operations to simple algebraic fractions with numerical denominators.'},
		ACMNA233: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Expand binomial products and factorise monic quadratic expressions using a variety of strategies.'},
		ACMNA234: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Substitute values into formulas to determine an unknown.'},
		ACMNA235: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Solve problems involving linear equations, including those derived from formulas.'},
		ACMNA236: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Solve linear inequalities and graph their solutions on a number line.'},
		ACMNA237: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Solve linear simultaneous equations, using algebraic and graphical techniques, including using digital technology.'},
		ACMNA238: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Solve problems involving parallel and perpendicular lines.'},
		ACMNA239: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Explore the connection between algebraic and graphical representations of relations such as simple quadratics, circles and exponentials using digital technology as appropriate.'},
		ACMNA240: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Solve linear equations involving simple algebraic fractions.'},
		ACMNA241: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Solve simple quadratic equations using a range of strategies.'},
		ACMMG242: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Solve problems involving surface area and volume for a range of prisms, cylinders and composite solids.'},
		ACMMG243: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Formulate proofs involving congruent triangles and angle properties.'},
		ACMMG244: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Apply logical reasoning, including the use of congruence and similarity, to proofs and numerical exercises involving plane shapes.'},
		ACMMG245: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Solve right-angled triangle problems including those involving direction and angles of elevation and depression.'},
		ACMSP246: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Describe the results of two- and three-step chance experiments, both with and without replacements, assign probabilities to outcomes and determine probabilities of events. Investigate the concept of independence.'},
		ACMSP247: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Use the language of ‘if ....then, ‘given’, ‘of’, ‘knowing that’ to investigate conditional statements and identify common mistakes in interpreting such language.'},
		ACMSP248: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Determine quartiles and interquartile range.'},
		ACMSP249: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Construct and interpret box plots and use them to compare data sets.'},
		ACMSP250: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Compare shapes of box plots to corresponding histograms and dot plots.'},
		ACMSP251: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Use scatter plots to investigate and comment on relationships between two numerical variables.'},
		ACMSP252: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Investigate and describe bivariate numerical data where the independent variable is time.'},
		ACMSP253: {isSet: false, curriculum: 'Mathematics', level: '10', linkDescription: 'Evaluate statistical reports in the media and other places by linking claims to displays, statistics and representative data.'},
		ACMNA264: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Define rational and irrational numbers and perform operations with surds and fractional indices.'},
		ACMNA265: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Use the definition of a logarithm to establish and apply the laws of logarithms.'},
		ACMNA266: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Investigate the concept of a polynomial and apply the factor and remainder theorems to solve problems.'},
		ACMNA270: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Solve simple exponential equations.'},
		ACMNA267: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Describe, interpret and sketch parabolas, hyperbolas, circles and exponential functions and their transformations.'},
		ACMNA268: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Apply understanding of polynomials to sketch a range of curves and describe the features of these curves from their equation.'},
		ACMNA269: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Factorise monic and non-monic quadratic expressions and solve a wide range of quadratic equations derived from a variety of contexts.'},
		ACMMG271: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Solve problems involving surface area and volume of right pyramids, right cones, spheres and related composite solids.'},
		ACMMG272: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Prove and apply angle and chord properties of circles.'},
		ACMMG273: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Establish the sine, cosine and area rules for any triangle and solve related problems.'},
		ACMMG274: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Use the unit circle to define trigonometric functions, and graph them with and without the use of digital technologies.'},
		ACMMG275: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Solve simple trigonometric equations.'},
		ACMMG276: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Apply Pythagoras’ Theorem and trigonometry to solving three-dimensional problems in right-angled triangles.'},
		ACMSP277: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Investigate reports of studies in digital media and elsewhere for information on their planning and implementation.'},
		ACMSP278: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Calculate and interpret the mean and standard deviation of data and use these to compare data sets.'},
		ACMSP279: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Use information technologies to investigate bivariate numerical data sets. Where appropriate use a straight line to describe the relationship allowing for variation.'}
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


export const MathimaticsCurriculumArray = () => [
	{
		levelName: 'Foundation Year',
		primaryTitles: [
			{
				primaryName: 'Number and Algebra',
				secondaryTitles: [
					{
						secondaryName: 'Number and place value',
						linksToSecondary: [
							{
								linkCode: 'ACMNA001',
								linkDescription: 'Connect number names, numerals and quantities, including zero, initially up to 10 and then beyond.',
							},
							{
								linkCode: 'ACMNA002',
								linkDescription: 'Subitise small collections of objects.',
							},
							{
								linkCode: 'ACMNA003',
								linkDescription: 'Compare, order and make correspondences between collections, initially to 20, and explain reasoning.',
							},
							{
								linkCode: 'ACMNA004',
								linkDescription: 'Represent practical situations to model addition and sharing.',
							}
						]
					},
					{
						secondaryName: 'Patterns and algebra',
						linksToSecondary: [
							{
								linkCode: 'ACMNA005',
								linkDescription: 'Sort and classify familiar objects and explain the basis for these classifications. Copy, continue and create patterns with objects and drawings.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Measurement and Geometry',
				secondaryTitles: [
					{
						secondaryName: 'Using units of measurement',
						linksToSecondary: [
							{
								linkCode: 'ACMMG006',
								linkDescription: 'Use direct and indirect comparisons to decide which is longer, heavier or holds more, and explain reasoning in everyday language.',
							},
							{
								linkCode: 'ACMMG007',
								linkDescription: 'Compare and order duration of events using everyday language of time.',
							},
							{
								linkCode: 'ACMMG008',
								linkDescription: 'Connect days of the week to familiar events and actions.',
							}
						]
					},
					{
						secondaryName: 'Shape',
						linksToSecondary: [
							{
								linkCode: 'ACMMG009',
								linkDescription: 'Sort, describe and name familiar two-dimensional shapes and three-dimensional objects in the environment.',
							}
						]
					},
					{
						secondaryName: 'Location and transformation',
						linksToSecondary: [
							{
								linkCode: 'ACMMG010',
								linkDescription: 'Describe position and movement.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Statistics and Probability',
				secondaryTitles: [
					{
						secondaryName: 'Data representation and interpretation',
						linksToSecondary: [
							{
								linkCode: 'ACMSP011',
								linkDescription: 'Answer yes/no questions to collect information and make simple inferences.',
							}
						]
					}
				]
			}
		]
	},
	{
		levelName: 'Year 1',
		primaryTitles: [
			{
				primaryName: 'Number and Algebra',
				secondaryTitles: [
					{
						secondaryName: 'Number and place value',
						linksToSecondary: [
							{
								linkCode: 'ACMNA012',
								linkDescription: 'Develop confidence with number sequences to and from 100 by ones from any starting point. Skip count by twos, fives and tens starting from zero.',
							},
							{
								linkCode: 'ACMNA013',
								linkDescription: 'Recognise, model, read, write and order numbers to at least 100. Locate these numbers on a number line.',
							},
							{
								linkCode: 'ACMNA014',
								linkDescription: 'Count collections to 100 by partitioning numbers using place value.',
							},
							{
								linkCode: 'ACMNA015',
								linkDescription: 'Represent and solve simple addition and subtraction problems using a range of strategies including counting on, partitioning and rearranging parts.',
							}
						]
					},
					{
						secondaryName: 'Fractions and decimals',
						linksToSecondary: [
							{
								linkCode: 'ACMNA016',
								linkDescription: 'Recognise and describe one-half as one of two equal parts of a whole.',
							}
						]
					},
					{
						secondaryName: 'Money and financial mathematics',
						linksToSecondary: [
							{
								linkCode: 'ACMNA017',
								linkDescription: 'Recognise, describe and order Australian coins according to their value.',
							}
						]
					},
					{
						secondaryName: 'Patterns and algebra',
						linksToSecondary: [
							{
								linkCode: 'ACMNA018',
								linkDescription: 'Investigate and describe number patterns formed by skip-counting and patterns with objects.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Measurement and Geometry',
				secondaryTitles: [
					{
						secondaryName: 'Using units of measurement',
						linksToSecondary: [
							{
								linkCode: 'ACMMG019',
								linkDescription: 'Measure and compare the lengths and capacities of pairs of objects using uniform informal units.',
							},
							{
								linkCode: 'ACMMG020',
								linkDescription: 'Tell time to the half-hour.',
							},
							{
								linkCode: 'ACMMG021',
								linkDescription: 'Describe duration using months, weeks, days and hours.',
							}
						]
					},
					{
						secondaryName: 'Shape',
						linksToSecondary: [
							{
								linkCode: 'ACMMG022',
								linkDescription: 'Recognise and classify familiar two-dimensional shapes and three-dimensional objects using obvious features.',
							}
						]
					},
					{
						secondaryName: 'Location and transformation',
						linksToSecondary: [
							{
								linkCode: 'ACMMG023',
								linkDescription: 'Give and follow directions to familiar locations.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Statistics and Probability',
				secondaryTitles: [
					{
						secondaryName: 'Chance',
						linksToSecondary: [
							{
								linkCode: 'ACMSP024',
								linkDescription: 'Identify outcomes of familiar events involving chance and describe them using everyday language such as ‘will happen’, ‘won’t happen’ or ‘might happen’.',
							}
						]
					},
					{
						secondaryName: 'Data representation and interpretation',
						linksToSecondary: [
							{
								linkCode: 'ACMSP262',
								linkDescription: 'Choose simple questions and gather responses and make simple inferences.',
							},
							{
								linkCode: 'ACMSP263',
								linkDescription: 'Represent data with objects and drawings where one object or drawing represents one data value. Describe the displays.',
							}
						]
					}
				]
			}
		]
	},
	{
		levelName: 'Year 2',
		primaryTitles: [
			{
				primaryName: 'Number and Algebra',
				secondaryTitles: [
					{
						secondaryName: 'Number and place value',
						linksToSecondary: [
							{
								linkCode: 'ACMNA026',
								linkDescription: 'Investigate number sequences, initially those increasing and decreasing by twos, threes, fives and tens from any starting point, then moving to other sequences.',
							},
							{
								linkCode: 'ACMNA027',
								linkDescription: 'Recognise, model, represent and order numbers to at least 1000.',
							},
							{
								linkCode: 'ACMNA028',
								linkDescription: 'Group, partition and rearrange collections up to 1000 in hundreds, tens and ones to facilitate more efficient counting.',
							},
							{
								linkCode: 'ACMNA029',
								linkDescription: 'Explore the connection between addition and subtraction.',
							},
							{
								linkCode: 'ACMNA030',
								linkDescription: 'Solve simple addition and subtraction problems using a range of efficient mental and written strategies.',
							},
							{
								linkCode: 'ACMNA031',
								linkDescription: 'Recognise and represent multiplication as repeated addition, groups and arrays.',
							},
							{
								linkCode: 'ACMNA032',
								linkDescription: 'Recognise and represent division as grouping into equal sets and solve simple problems using these representations.',
							}
						]
					},
					{
						secondaryName: 'Fractions and decimals',
						linksToSecondary: [
							{
								linkCode: 'ACMNA033',
								linkDescription: 'Recognise and interpret common uses of halves, quarters and eighths of shapes and collections.',
							}
						]
					},
					{
						secondaryName: 'Money and financial mathematics',
						linksToSecondary: [
							{
								linkCode: 'ACMNA034',
								linkDescription: 'Count and order small collections of Australian coins and notes according to their value.',
							}
						]
					},
					{
						secondaryName: 'Patterns and algebra',
						linksToSecondary: [
							{
								linkCode: 'ACMNA035',
								linkDescription: 'Describe patterns with numbers and identify missing elements.',
							},
							{
								linkCode: 'ACMNA036',
								linkDescription: 'Solve problems by using number sentences for addition or subtraction.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Measurement and Geometry',
				secondaryTitles: [
					{
						secondaryName: 'Using units of measurement',
						linksToSecondary: [
							{
								linkCode: 'ACMMG037',
								linkDescription: 'Compare and order several shapes and objects based on length, area, volume and capacity using appropriate uniform informal units.',
							},
							{
								linkCode: 'ACMMG038',
								linkDescription: 'Compare masses of objects using balance scales.',
							},
							{
								linkCode: 'ACMMG039',
								linkDescription: 'Tell time to the quarter-hour, using the language of ‘past’ and ‘to’.',
							},
							{
								linkCode: 'ACMMG040',
								linkDescription: 'Name and order months and seasons.',
							},
							{
								linkCode: 'ACMMG041',
								linkDescription: 'Use a calendar to identify the date and determine the number of days in each month.',
							}
						]
					},
					{
						secondaryName: 'Shape',
						linksToSecondary: [
							{
								linkCode: 'ACMMG042',
								linkDescription: 'Describe and draw two-dimensional shapes, with and without digital technologies.',
							},
							{
								linkCode: 'ACMMG043',
								linkDescription: 'Describe the features of three-dimensional objects.',
							}
						]
					},
					{
						secondaryName: 'Location and transformation',
						linksToSecondary: [
							{
								linkCode: 'ACMMG044',
								linkDescription: 'Interpret simple maps of familiar locations and identify the relative positions of key features.',
							},
							{
								linkCode: 'ACMMG045',
								linkDescription: 'Investigate the effect of one-step slides and flips with and without digital technologies.',
							},
							{
								linkCode: 'ACMMG046',
								linkDescription: 'Identify and describe half and quarter turns.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Statistics and Probability',
				secondaryTitles: [
					{
						secondaryName: 'Chance',
						linksToSecondary: [
							{
								linkCode: 'ACMSP047',
								linkDescription: 'Identify practical activities and everyday events that involve chance. Describe outcomes as ‘likely’ or ‘unlikely’ and identify some events as ‘certain’ or ‘impossible’.',
							}
						]
					},
					{
						secondaryName: 'Data representation and interpretation',
						linksToSecondary: [
							{
								linkCode: 'ACMSP048',
								linkDescription: 'Identify a question of interest based on one categorical variable. Gather data relevant to the question.',
							},
							{
								linkCode: 'ACMSP049',
								linkDescription: 'Collect, check and classify data.',
							},
							{
								linkCode: 'ACMSP050',
								linkDescription: 'Create displays of data using lists, table and picture graphs and interpret them.',
							}
						]
					}
				]
			}
		]
	},
	{
		levelName: 'Year 3',
		primaryTitles: [
			{
				primaryName: 'Number and Algebra',
				secondaryTitles: [
					{
						secondaryName: 'Number and place value',
						linksToSecondary: [
							{
								linkCode: 'ACMNA051',
								linkDescription: 'Investigate the conditions required for a number to be odd or even and identify odd and even numbers.',
							},
							{
								linkCode: 'ACMNA052',
								linkDescription: 'Recognise, model, represent and order numbers to at least 10 000.',
							},
							{
								linkCode: 'ACMNA053',
								linkDescription: 'Apply place value to partition, rearrange and regroup numbers to at least 10 000 to assist calculations and solve problems.',
							},
							{
								linkCode: 'ACMNA054',
								linkDescription: 'Recognise and explain the connection between addition and subtraction.',
							},
							{
								linkCode: 'ACMNA055',
								linkDescription: 'Recall addition facts for single-digit numbers and related subtraction facts to develop increasingly efficient mental strategies for computation.',
							},
							{
								linkCode: 'ACMNA056',
								linkDescription: 'Recall multiplication facts of two, three, five and ten and related division facts.',
							},
							{
								linkCode: 'ACMNA057',
								linkDescription: 'Represent and solve problems involving multiplication using efficient mental and written strategies and appropriate digital technologies.',
							}
						]
					},
					{
						secondaryName: 'Fractions and decimals',
						linksToSecondary: [
							{
								linkCode: 'ACMNA058',
								linkDescription: 'Model and represent unit fractions including 1/2, 1/4, 1/3, 1/5 and their multiples to a complete whole.',
							}
						]
					},
					{
						secondaryName: 'Money and financial mathematics',
						linksToSecondary: [
							{
								linkCode: 'ACMNA059',
								linkDescription: 'Represent money values in multiple ways and count the change required for simple transactions to the nearest five cents.',
							}
						]
					},
					{
						secondaryName: 'Patterns and algebra',
						linksToSecondary: [
							{
								linkCode: 'ACMNA060',
								linkDescription: 'Describe, continue, and create number patterns resulting from performing addition or subtraction.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Measurement and Geometry',
				secondaryTitles: [
					{
						secondaryName: 'Using units of measurement',
						linksToSecondary: [
							{
								linkCode: 'ACMMG061',
								linkDescription: 'Measure, order and compare objects using familiar metric units of length, mass and capacity.',
							},
							{
								linkCode: 'ACMMG062',
								linkDescription: 'Tell time to the minute and investigate the relationship between units of time.',
							}
						]
					},
					{
						secondaryName: 'Shape',
						linksToSecondary: [
							{
								linkCode: 'ACMMG063',
								linkDescription: 'Make models of three-dimensional objects and describe key features.',
							}
						]
					},
					{
						secondaryName: 'Location and transformation',
						linksToSecondary: [
							{
								linkCode: 'ACMMG065',
								linkDescription: 'Create and interpret simple grid maps to show position and pathways.',
							},
							{
								linkCode: 'ACMMG066',
								linkDescription: 'Identify symmetry in the environment.',
							}
						]
					},
					{
						secondaryName: 'Geometric reasoning',
						linksToSecondary: [
							{
								linkCode: 'ACMMG064',
								linkDescription: 'Identify angles as measures of turn and compare angle sizes in everyday situations.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Statistics and Probability',
				secondaryTitles: [
					{
						secondaryName: 'Chance',
						linksToSecondary: [
							{
								linkCode: 'ACMSP067',
								linkDescription: 'Conduct chance experiments, identify and describe possible outcomes and recognise variation in results.',
							}
						]
					},
					{
						secondaryName: 'Data representation and interpretation',
						linksToSecondary: [
							{
								linkCode: 'ACMSP068',
								linkDescription: 'Identify questions or issues for categorical variables. Identify data sources and plan methods of data collection and recording.',
							},
							{
								linkCode: 'ACMSP069',
								linkDescription: 'Collect data, organise into categories and create displays using lists, tables, picture graphs and simple column graphs, with and without the use of digital technologies.',
							},
							{
								linkCode: 'ACMSP070',
								linkDescription: 'Interpret and compare data displays.',
							}
						]
					}
				]
			}
		]
	},
	{
		levelName: 'Year 4',
		primaryTitles: [
			{
				primaryName: 'Number and Algebra',
				secondaryTitles: [
					{
						secondaryName: 'Number and place value',
						linksToSecondary: [
							{
								linkCode: 'ACMNA071',
								linkDescription: 'Investigate and use the properties of odd and even numbers.',
							},
							{
								linkCode: 'ACMNA072',
								linkDescription: 'Recognise, represent and order numbers to at least tens of thousands.',
							},
							{
								linkCode: 'ACMNA073',
								linkDescription: 'Apply place value to partition, rearrange and regroup numbers to at least tens of thousands to assist calculations and solve problems.',
							},
							{
								linkCode: 'ACMNA074',
								linkDescription: 'Investigate number sequences involving multiples of 3, 4, 6, 7, 8, and 9.',
							},
							{
								linkCode: 'ACMNA075',
								linkDescription: 'Recall multiplication facts up to 10 × 10 and related division facts.',
							},
							{
								linkCode: 'ACMNA076',
								linkDescription: 'Develop efficient mental and written strategies and use appropriate digital technologies for multiplication and for division where there is no remainder.',
							}
						]
					},
					{
						secondaryName: 'Fractions and decimals',
						linksToSecondary: [
							{
								linkCode: 'ACMNA077',
								linkDescription: 'Investigate equivalent fractions used in contexts.',
							},
							{
								linkCode: 'ACMNA078',
								linkDescription: 'Count by quarters halves and thirds, including with mixed numerals. Locate and represent these fractions on a number line.',
							},
							{
								linkCode: 'ACMNA079',
								linkDescription: 'Recognise that the place value system can be extended to tenths and hundredths. Make connections between fractions and decimal notation.',
							}
						]
					},
					{
						secondaryName: 'Money and financial mathematics',
						linksToSecondary: [
							{
								linkCode: 'ACMNA080',
								linkDescription: 'Solve problems involving purchases and the calculation of change to the nearest five cents with and without digital technologies.',
							}
						]
					},
					{
						secondaryName: 'Patterns and algebra',
						linksToSecondary: [
							{
								linkCode: 'ACMNA081',
								linkDescription: 'Explore and describe number patterns resulting from performing multiplication.',
							},
							{
								linkCode: 'ACMNA082',
								linkDescription: 'Solve word problems by using number sentences involving multiplication or division where there is no remainder.',
							},
							{
								linkCode: 'ACMNA083',
								linkDescription: 'Find unknown quantities in number sentences involving addition and subtraction and identify equivalent number sentences involving addition and subtraction.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Measurement and Geometry',
				secondaryTitles: [
					{
						secondaryName: 'Using units of measurement',
						linksToSecondary: [
							{
								linkCode: 'ACMMG084',
								linkDescription: 'Use scaled instruments to measure and compare lengths, masses, capacities and temperatures.',
							},
							{
								linkCode: 'ACMMG290',
								linkDescription: 'Compare objects using familiar metric units of area and volume.',
							},
							{
								linkCode: 'ACMMG085',
								linkDescription: 'Convert between units of time.',
							},
							{
								linkCode: 'ACMMG086',
								linkDescription: 'Use ‘am’ and ‘pm’ notation and solve simple time problems.',
							}
						]
					},
					{
						secondaryName: 'Shape',
						linksToSecondary: [
							{
								linkCode: 'ACMMG087',
								linkDescription: 'Compare the areas of regular and irregular shapes by informal means.',
							},
							{
								linkCode: 'ACMMG088',
								linkDescription: 'Compare and describe two dimensional shapes that result from combining and splitting common shapes, with and without the use of digital technologies.',
							}
						]
					},
					{
						secondaryName: 'Location and transformation',
						linksToSecondary: [
							{
								linkCode: 'ACMMG090',
								linkDescription: 'Use simple scales, legends and directions to interpret information contained in basic maps.',
							},
							{
								linkCode: 'ACMMG091',
								linkDescription: 'Create symmetrical patterns, pictures and shapes with and without digital technologies.',
							}
						]
					},
					{
						secondaryName: 'Geometric reasoning',
						linksToSecondary: [
							{
								linkCode: 'ACMMG089',
								linkDescription: 'Compare angles and classify them as equal to, greater than, or less than, a right angle.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Statistics and Probability',
				secondaryTitles: [
					{
						secondaryName: 'Chance',
						linksToSecondary: [
							{
								linkCode: 'ACMSP092',
								linkDescription: 'Describe possible everyday events and order their chances of occurring.',
							},
							{
								linkCode: 'ACMSP093',
								linkDescription: 'Identify everyday events where one cannot happen if the other happens.',
							},
							{
								linkCode: 'ACMSP094',
								linkDescription: 'Identify events where the chance of one will not be affected by the occurrence of the other.',
							}
						]
					},
					{
						secondaryName: 'Data representation and interpretation',
						linksToSecondary: [
							{
								linkCode: 'ACMSP095',
								linkDescription: 'Select and trial methods for data collection, including survey questions and recording sheets.',
							},
							{
								linkCode: 'ACMSP096',
								linkDescription: 'Construct suitable data displays, with and without the use of digital technologies, from given or collected data. Include tables, column graphs and picture graphs where one picture can represent many data values.',
							},
							{
								linkCode: 'ACMSP097',
								linkDescription: 'Evaluate the effectiveness of different displays in illustrating data features including variability.',
							}
						]
					}
				]
			}
		]
	},
	{
		levelName: 'Year 5',
		primaryTitles: [
			{
				primaryName: 'Number and Algebra',
				secondaryTitles: [
					{
						secondaryName: 'Number and place value',
						linksToSecondary: [
							{
								linkCode: 'ACMNA098',
								linkDescription: 'Identify and describe factors and multiples of whole numbers and use them to solve problems.',
							},
							{
								linkCode: 'ACMNA099',
								linkDescription: 'Use estimation and rounding to check the reasonableness of answers to calculations.',
							},
							{
								linkCode: 'ACMNA100',
								linkDescription: 'Solve problems involving multiplication of large numbers by one- or two-digit numbers using efficient mental, written strategies and appropriate digital technologies.',
							},
							{
								linkCode: 'ACMNA101',
								linkDescription: 'Solve problems involving division by a one digit number, including those that result in a remainder.',
							},
							{
								linkCode: 'ACMNA291',
								linkDescription: 'Use efficient mental and written strategies and apply appropriate digital technologies to solve problems.',
							}
						]
					},
					{
						secondaryName: 'Fractions and decimals',
						linksToSecondary: [
							{
								linkCode: 'ACMNA102',
								linkDescription: 'Compare and order common unit fractions and locate and represent them on a number line.',
							},
							{
								linkCode: 'ACMNA103',
								linkDescription: 'Investigate strategies to solve problems involving addition and subtraction of fractions with the same denominator.',
							},
							{
								linkCode: 'ACMNA104',
								linkDescription: 'Recognise that the place value system can be extended beyond hundredths.',
							},
							{
								linkCode: 'ACMNA105',
								linkDescription: 'Compare, order and represent decimals.',
							}
						]
					},
					{
						secondaryName: 'Money and financial mathematics',
						linksToSecondary: [
							{
								linkCode: 'ACMNA106',
								linkDescription: 'Create simple financial plans.',
							}
						]
					},
					{
						secondaryName: 'Patterns and algebra',
						linksToSecondary: [
							{
								linkCode: 'ACMNA107',
								linkDescription: 'Describe, continue and create patterns with fractions, decimals and whole numbers resulting from addition and subtraction.',
							},
							{
								linkCode: 'ACMNA121',
								linkDescription: 'Find unknown quantities in number sentences involving multiplication and division and identify equivalent number sentences involving multiplication and division.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Measurement and Geometry',
				secondaryTitles: [
					{
						secondaryName: 'Using units of measurement',
						linksToSecondary: [
							{
								linkCode: 'ACMMG108',
								linkDescription: 'Choose appropriate units of measurement for length, area, volume, capacity and mass.',
							},
							{
								linkCode: 'ACMMG109',
								linkDescription: 'Calculate perimeter and area of rectangles using familiar metric units.',
							},
							{
								linkCode: 'ACMMG110',
								linkDescription: 'Compare 12- and 24-hour time systems and convert between them.',
							}
						]
					},
					{
						secondaryName: 'Shape',
						linksToSecondary: [
							{
								linkCode: 'ACMMG111',
								linkDescription: 'Connect three-dimensional objects with their nets and other two-dimensional representations.',
							}
						]
					},
					{
						secondaryName: 'Location and transformation',
						linksToSecondary: [
							{
								linkCode: 'ACMMG113',
								linkDescription: 'Use a grid reference system to describe locations. Describe routes using landmarks and directional language.',
							},
							{
								linkCode: 'ACMMG114',
								linkDescription: 'Describe translations, reflections and rotations of two-dimensional shapes. Identify line and rotational symmetries.',
							},
							{
								linkCode: 'ACMMG115',
								linkDescription: 'Apply the enlargement transformation to familiar two dimensional shapes and explore the properties of the resulting image compared with the original.',
							}
						]
					},
					{
						secondaryName: 'Geometric reasoning',
						linksToSecondary: [
							{
								linkCode: 'ACMMG112',
								linkDescription: 'Estimate, measure and compare angles using degrees. Construct angles using a protractor.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Statistics and Probability',
				secondaryTitles: [
					{
						secondaryName: 'Chance',
						linksToSecondary: [
							{
								linkCode: 'ACMSP116',
								linkDescription: 'List outcomes of chance experiments involving equally likely outcomes and represent probabilities of those outcomes using fractions.',
							},
							{
								linkCode: 'ACMSP117',
								linkDescription: 'Recognise that probabilities range from 0 to 1.',
							}
						]
					},
					{
						secondaryName: 'Data representation and interpretation',
						linksToSecondary: [
							{
								linkCode: 'ACMSP118',
								linkDescription: 'Pose questions and collect categorical or numerical data by observation or survey.',
							},
							{
								linkCode: 'ACMSP119',
								linkDescription: 'Construct displays, including column graphs, dot plots and tables, appropriate for data type, with and without the use of digital technologies.',
							},
							{
								linkCode: 'ACMSP120',
								linkDescription: 'Describe and interpret different data sets in context.',
							}
						]
					}
				]
			}
		]
	},
	{
		levelName: 'Year 6',
		primaryTitles: [
			{
				primaryName: 'Number and Algebra',
				secondaryTitles: [
					{
						secondaryName: 'Number and place value',
						linksToSecondary: [
							{
								linkCode: 'ACMNA122',
								linkDescription: 'Identify and describe properties of prime, composite, square and triangular numbers.',
							},
							{
								linkCode: 'ACMNA123',
								linkDescription: 'Select and apply efficient mental and written strategies and appropriate digital technologies to solve problems involving all four operations with whole numbers.',
							},
							{
								linkCode: 'ACMNA124',
								linkDescription: 'Investigate everyday situations that use integers. Locate and represent these numbers on a number line.',
							}
						]
					},
					{
						secondaryName: 'Fractions and decimals',
						linksToSecondary: [
							{
								linkCode: 'ACMNA125',
								linkDescription: 'Compare fractions with related denominators and locate and represent them on a number line.',
							},
							{
								linkCode: 'ACMNA126',
								linkDescription: 'Solve problems involving addition and subtraction of fractions with the same or related denominators.',
							},
							{
								linkCode: 'ACMNA127',
								linkDescription: 'Find a simple fraction of a quantity where the result is a whole number, with and without digital technologies.',
							},
							{
								linkCode: 'ACMNA128',
								linkDescription: 'Add and subtract decimals, with and without digital technologies, and use estimation and rounding to check the reasonableness of answers.',
							},
							{
								linkCode: 'ACMNA129',
								linkDescription: 'Multiply decimals by whole numbers and perform divisions by non-zero whole numbers where the results are terminating decimals, with and without digital technologies.',
							},
							{
								linkCode: 'ACMNA130',
								linkDescription: 'Multiply and divide decimals by powers of 10.',
							},
							{
								linkCode: 'ACMNA131',
								linkDescription: 'Make connections between equivalent fractions, decimals and percentages.',
							}
						]
					},
					{
						secondaryName: 'Money and financial mathematics',
						linksToSecondary: [
							{
								linkCode: 'ACMNA132',
								linkDescription: 'Investigate and calculate percentage discounts of 10%, 25% and 50% on sale items, with and without digital technologies.',
							}
						]
					},
					{
						secondaryName: 'Patterns and algebra',
						linksToSecondary: [
							{
								linkCode: 'ACMNA133',
								linkDescription: 'Continue and create sequences involving whole numbers, fractions and decimals. Describe the rule used to create the sequence.',
							},
							{
								linkCode: 'ACMNA134',
								linkDescription: 'Explore the use of brackets and order of operations to write number sentences.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Measurement and Geometry',
				secondaryTitles: [
					{
						secondaryName: 'Using units of measurement',
						linksToSecondary: [
							{
								linkCode: 'ACMMG135',
								linkDescription: 'Connect decimal representations to the metric system.',
							},
							{
								linkCode: 'ACMMG136',
								linkDescription: 'Convert between common metric units of length, mass and capacity.',
							},
							{
								linkCode: 'ACMMG137',
								linkDescription: 'Solve problems involving the comparison of lengths and areas using appropriate units.',
							},
							{
								linkCode: 'ACMMG138',
								linkDescription: 'Connect volume and capacity and their units of measurement.',
							},
							{
								linkCode: 'ACMMG139',
								linkDescription: 'Interpret and use timetables.',
							}
						]
					},
					{
						secondaryName: 'Shape',
						linksToSecondary: [
							{
								linkCode: 'ACMMG140',
								linkDescription: 'Construct simple prisms and pyramids.',
							}
						]
					},
					{
						secondaryName: 'Location and transformation',
						linksToSecondary: [
							{
								linkCode: 'ACMMG142',
								linkDescription: 'Investigate combinations of translations, reflections and rotations, with and without the use of digital technologies.',
							},
							{
								linkCode: 'ACMMG143',
								linkDescription: 'Introduce the Cartesian coordinate system using all four quadrants.',
							}
						]
					},
					{
						secondaryName: 'Geometric reasoning',
						linksToSecondary: [
							{
								linkCode: 'ACMMG141',
								linkDescription: 'Investigate, with and without digital technologies, angles on a straight line, angles at a point and vertically opposite angles. Use results to find unknown angles.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Statistics and Probability',
				secondaryTitles: [
					{
						secondaryName: 'Chance',
						linksToSecondary: [
							{
								linkCode: 'ACMSP144',
								linkDescription: 'Describe probabilities using fractions, decimals and percentages.',
							},
							{
								linkCode: 'ACMSP145',
								linkDescription: 'Conduct chance experiments with both small and large numbers of trials using appropriate digital technologies.',
							},
							{
								linkCode: 'ACMSP146',
								linkDescription: 'Compare observed frequencies across experiments with expected frequencies.',
							}
						]
					},
					{
						secondaryName: 'Data representation and interpretation',
						linksToSecondary: [
							{
								linkCode: 'ACMSP147',
								linkDescription: 'Interpret and compare a range of data displays, including side-by-side column graphs for two categorical variables.',
							},
							{
								linkCode: 'ACMSP148',
								linkDescription: 'Interpret secondary data presented in digital media and elsewhere.',
							}
						]
					}
				]
			}
		]
	},
	{
		levelName: 'Year 7',
		primaryTitles: [
			{
				primaryName: 'Number and Algebra',
				secondaryTitles: [
					{
						secondaryName: 'Number and place value',
						linksToSecondary: [
							{
								linkCode: 'ACMNA149',
								linkDescription: 'Investigate index notation and represent whole numbers as products of powers of prime numbers.',
							},
							{
								linkCode: 'ACMNA150',
								linkDescription: 'Investigate and use square roots of perfect square numbers.',
							},
							{
								linkCode: 'ACMNA151',
								linkDescription: 'Apply the associative, commutative and distributive laws to aid mental and written computation.',
							},
							{
								linkCode: 'ACMNA280',
								linkDescription: 'Compare, order, add and subtract integers.',
							}
						]
					},
					{
						secondaryName: 'Real numbers',
						linksToSecondary: [
							{
								linkCode: 'ACMNA152',
								linkDescription: 'Compare fractions using equivalence. Locate and represent positive and negative fractions and mixed numbers on a number line.',
							},
							{
								linkCode: 'ACMNA153',
								linkDescription: 'Solve problems involving addition and subtraction of fractions, including those with unrelated denominators.',
							},
							{
								linkCode: 'ACMNA154',
								linkDescription: 'Multiply and divide fractions and decimals using efficient written strategies and digital technologies.',
							},
							{
								linkCode: 'ACMNA155',
								linkDescription: 'Express one quantity as a fraction of another, with and without the use of digital technologies.',
							},
							{
								linkCode: 'ACMNA156',
								linkDescription: 'Round decimals to a specified number of decimal places.',
							},
							{
								linkCode: 'ACMNA157',
								linkDescription: 'Connect fractions, decimals and percentages and carry out simple conversions.',
							},
							{
								linkCode: 'ACMNA158',
								linkDescription: 'Find percentages of quantities and express one quantity as a percentage of another, with and without digital technologies.',
							},
							{
								linkCode: 'ACMNA173',
								linkDescription: 'Recognise and solve problems involving simple ratios.',
							}
						]
					},
					{
						secondaryName: 'Money and financial mathematics',
						linksToSecondary: [
							{
								linkCode: 'ACMNA174',
								linkDescription: 'Investigate and calculate ‘best buys’, with and without digital technologies.',
							}
						]
					},
					{
						secondaryName: 'Patterns and algebra',
						linksToSecondary: [
							{
								linkCode: 'ACMNA175',
								linkDescription: 'Introduce the concept of variables as a way of representing numbers using letters.',
							},
							{
								linkCode: 'ACMNA176',
								linkDescription: 'Create algebraic expressions and evaluate them by substituting a given value for each variable.',
							},
							{
								linkCode: 'ACMNA177',
								linkDescription: 'Extend and apply the laws and properties of arithmetic to algebraic terms and expressions.',
							}
						]
					},
					{
						secondaryName: 'Linear and non-linear relationships',
						linksToSecondary: [
							{
								linkCode: 'ACMNA178',
								linkDescription: 'Given coordinates, plot points on the Cartesian plane, and find coordinates for a given point.',
							},
							{
								linkCode: 'ACMNA179',
								linkDescription: 'Solve simple linear equations.',
							},
							{
								linkCode: 'ACMNA180',
								linkDescription: 'Investigate, interpret and analyse graphs from authentic data.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Measurement and Geometry',
				secondaryTitles: [
					{
						secondaryName: 'Using units of measurement',
						linksToSecondary: [
							{
								linkCode: 'ACMMG159',
								linkDescription: 'Connect decimal representations to the metric system.',
							},
							{
								linkCode: 'ACMMG160',
								linkDescription: 'Convert between common metric units of length, mass and capacity.',
							}
						]
					},
					{
						secondaryName: 'Shape',
						linksToSecondary: [
							{
								linkCode: 'ACMMG161',
								linkDescription: 'Construct simple prisms and pyramids.',
							}
						]
					},
					{
						secondaryName: 'Location and transformation',
						linksToSecondary: [
							{
								linkCode: 'ACMMG181',
								linkDescription: 'Investigate combinations of translations, reflections and rotations, with and without the use of digital technologies.',
							}
						]
					},
					{
						secondaryName: 'Geometric reasoning',
						linksToSecondary: [
							{
								linkCode: 'ACMMG165',
								linkDescription: 'Investigate, with and without digital technologies, angles on a straight line, angles at a point and vertically opposite angles. Use results to find unknown angles.',
							},
							{
								linkCode: 'ACMMG166',
								linkDescription: 'Investigate, with and without digital technologies, angles on a straight line, angles at a point and vertically opposite angles. Use results to find unknown angles.',
							},
							{
								linkCode: 'ACMMG163',
								linkDescription: 'Investigate, with and without digital technologies, angles on a straight line, angles at a point and vertically opposite angles. Use results to find unknown angles.',
							},
							{
								linkCode: 'ACMMG164',
								linkDescription: 'Investigate, with and without digital technologies, angles on a straight line, angles at a point and vertically opposite angles. Use results to find unknown angles.',
							}

						]
					}
				]
			},
			{
				primaryName: 'Statistics and Probability',
				secondaryTitles: [
					{
						secondaryName: 'Chance',
						linksToSecondary: [
							{
								linkCode: 'ACMSP167',
								linkDescription: 'Construct sample spaces for single-step experiments with equally likely outcomes.',
							},
							{
								linkCode: 'ACMSP168',
								linkDescription: 'Assign probabilities to the outcomes of events and determine probabilities for events.',
							}
						]
					},
					{
						secondaryName: 'Data representation and interpretation',
						linksToSecondary: [
							{
								linkCode: 'ACMSP169',
								linkDescription: 'Identify and investigate issues involving numerical data collected from primary and secondary sources.',
							},
							{
								linkCode: 'ACMSP170',
								linkDescription: 'Construct and compare a range of data displays including stem-and-leaf plots and dot plots.',
							},
							{
								linkCode: 'ACMSP171',
								linkDescription: 'Calculate mean, median, mode and range for sets of data. Interpret these statistics in the context of data.',
							},
							{
								linkCode: 'ACMSP172',
								linkDescription: 'Describe and interpret data displays using median, mean and range.',
							}
						]
					}
				]
			}
		]
	},
	{
		levelName: 'Year 8',
		primaryTitles: [
			{
				primaryName: 'Number and Algebra',
				secondaryTitles: [
					{
						secondaryName: 'Number and place value',
						linksToSecondary: [
							{
								linkCode: 'ACMNA182',
								linkDescription: 'Use index notation with numbers to establish the index laws with positive integral indices and the zero index.',
							},
							{
								linkCode: 'ACMNA183',
								linkDescription: 'Carry out the four operations with rational numbers and integers, using efficient mental and written strategies and appropriate digital technologies.',
							}
						]
					},
					{
						secondaryName: 'Real numbers',
						linksToSecondary: [
							{
								linkCode: 'ACMNA184',
								linkDescription: 'Investigate terminating and recurring decimals.',
							},
							{
								linkCode: 'ACMNA186',
								linkDescription: 'Investigate the concept of irrational numbers, including π.',
							},
							{
								linkCode: 'ACMNA187',
								linkDescription: 'Solve problems involving the use of percentages, including percentage increases and decreases, with and without digital technologies.',
							},
							{
								linkCode: 'ACMNA188',
								linkDescription: 'Solve a range of problems involving rates and ratios, with and without digital technologies.',
							}
						]
					},
					{
						secondaryName: 'Money and financial mathematics',
						linksToSecondary: [
							{
								linkCode: 'ACMNA189',
								linkDescription: 'Solve problems involving profit and loss, with and without digital technologies.',
							}
						]
					},
					{
						secondaryName: 'Patterns and algebra',
						linksToSecondary: [
							{
								linkCode: 'ACMNA190',
								linkDescription: 'Extend and apply the distributive law to the expansion of algebraic expressions.',
							},
							{
								linkCode: 'ACMNA191',
								linkDescription: 'Factorise algebraic expressions by identifying numerical factors.',
							},
							{
								linkCode: 'ACMNA192',
								linkDescription: 'Simplify algebraic expressions involving the four operations.',
							}
						]
					},
					{
						secondaryName: 'Linear and non-linear relationships',
						linksToSecondary: [
							{
								linkCode: 'ACMNA193',
								linkDescription: 'Plot linear relationships on the Cartesian plane with and without the use of digital technologies.',
							},
							{
								linkCode: 'ACMNA194',
								linkDescription: 'Solve linear equations using algebraic and graphical techniques. Verify solutions by substitution.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Measurement and Geometry',
				secondaryTitles: [
					{
						secondaryName: 'Using units of measurement',
						linksToSecondary: [
							{
								linkCode: 'ACMMG195',
								linkDescription: 'Choose appropriate units of measurement for area and volume and convert from one unit to another.',
							},
							{
								linkCode: 'ACMMG196',
								linkDescription: 'Find perimeters and areas of parallelograms, trapeziums, rhombuses and kites.',
							},
							{
								linkCode: 'ACMMG197',
								linkDescription: 'Investigate the relationship between features of circles such as circumference, area, radius and diameter. Use formulas to solve problems involving circumference and area.',
							},
							{
								linkCode: 'ACMMG198',
								linkDescription: 'Develop formulas for volumes of rectangular and triangular prisms and prisms in general. Use formulas to solve problems involving volume.',
							},
							{
								linkCode: 'ACMMG199',
								linkDescription: 'Solve problems involving duration, including using 12- and 24-hour time within a single time zone.',
							}
						]
					},
					{
						secondaryName: 'Geometric reasoning',
						linksToSecondary: [
							{
								linkCode: 'ACMMG200',
								linkDescription: 'Define congruence of plane shapes using transformations.',
							},
							{
								linkCode: 'ACMMG201',
								linkDescription: 'Develop the conditions for congruence of triangles.',
							},
							{
								linkCode: 'ACMMG202',
								linkDescription: 'Establish properties of quadrilaterals using congruent triangles and angle properties, and solve related numerical problems using reasoning.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Statistics and Probability',
				secondaryTitles: [
					{
						secondaryName: 'Chance',
						linksToSecondary: [
							{
								linkCode: 'ACMSP204',
								linkDescription: 'Identify complementary events and use the sum of probabilities to solve problems.',
							},
							{
								linkCode: 'ACMSP205',
								linkDescription: 'Describe events using language of ‘at least’, exclusive ‘or’ (A or B but not both), inclusive ‘or’ (A or B or both) and ‘and’..',
							},
							{
								linkCode: 'ACMSP292',
								linkDescription: 'Represent events in two-way tables and Venn diagrams and solve related problems.',
							}
						]
					},
					{
						secondaryName: 'Data representation and interpretation',
						linksToSecondary: [
							{
								linkCode: 'ACMSP284',
								linkDescription: 'Investigate techniques for collecting data, including census, sampling and observation.',
							},
							{
								linkCode: 'ACMSP206',
								linkDescription: 'Explore the practicalities and implications of obtaining data through sampling using a variety of investigative processes.',
							},
							{
								linkCode: 'ACMSP293',
								linkDescription: 'Explore the variation of means and proportions of random samples drawn from the same population.',
							},
							{
								linkCode: 'ACMSP207',
								linkDescription: 'Investigate the effect of individual data values, including outliers, on the mean and median.',
							}
						]
					}
				]
			}
		]
	},
	{
		levelName: 'Year 9',
		primaryTitles: [
			{
				primaryName: 'Number and Algebra',
				secondaryTitles: [
					{
						secondaryName: 'Number and place value',
						linksToSecondary: [
							{
								linkCode: 'ACMNA208',
								linkDescription: 'Solve problems involving direct proportion. Explore the relationship between graphs and equations corresponding to simple rate problems.',
							},
							{
								linkCode: 'ACMNA209',
								linkDescription: 'Apply index laws to numerical expressions with integer indices.',
							},
							{
								linkCode: 'ACMNA210',
								linkDescription: 'Express numbers in scientific notation.',
							}
						]
					},
					{
						secondaryName: 'Money and financial mathematics',
						linksToSecondary: [
							{
								linkCode: 'ACMNA211',
								linkDescription: 'Solve problems involving simple interest.',
							}
						]
					},
					{
						secondaryName: 'Patterns and algebra',
						linksToSecondary: [
							{
								linkCode: 'ACMNA212',
								linkDescription: 'Extend and apply the index laws to variables, using positive integer indices and the zero index.',
							},
							{
								linkCode: 'ACMNA213',
								linkDescription: 'Apply the distributive law to the expansion of algebraic expressions, including binomials, and collect like terms where appropriate.',
							}
						]
					},
					{
						secondaryName: 'Linear and non-linear relationships',
						linksToSecondary: [
							{
								linkCode: 'ACMNA214',
								linkDescription: 'Find the distance between two points located on the Cartesian plane using a range of strategies, including graphing software.',
							},
							{
								linkCode: 'ACMNA294',
								linkDescription: 'Find the midpoint and gradient of a line segment (interval) on the Cartesian plane using a range of strategies, including graphing software.',
							},
							{
								linkCode: 'ACMNA215',
								linkDescription: 'Sketch linear graphs using the coordinates of two points and solve linear equations.',
							},
							{
								linkCode: 'ACMNA296',
								linkDescription: 'Graph simple non-linear relations with and without the use of digital technologies and solve simple related equations.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Measurement and Geometry',
				secondaryTitles: [
					{
						secondaryName: 'Using units of measurement',
						linksToSecondary: [
							{
								linkCode: 'ACMMG216',
								linkDescription: 'Calculate areas of composite shapes.',
							},
							{
								linkCode: 'ACMMG217',
								linkDescription: 'Calculate the surface area and volume of cylinders and solve related problems .',
							},
							{
								linkCode: 'ACMMG218',
								linkDescription: 'Solve problems involving the surface area and volume of right prisms.',
							},
							{
								linkCode: 'ACMMG219',
								linkDescription: 'Investigate very small and very large time scales and intervals.',
							}
						]
					},
					{
						secondaryName: 'Geometric reasoning',
						linksToSecondary: [
							{
								linkCode: 'ACMMG220',
								linkDescription: 'Use the enlargement transformation to explain similarity and develop the conditions for triangles to be similar.',
							},
							{
								linkCode: 'ACMMG221',
								linkDescription: 'Solve problems using ratio and scale factors in similar figures.',
							}
						]
					},
					{
						secondaryName: 'Pythagoras and trigonometry',
						linksToSecondary: [
							{
								linkCode: 'ACMMG222',
								linkDescription: 'Investigate Pythagoras’ Theorem and its application to solving simple problems involving right angled triangles.',
							},
							{
								linkCode: 'ACMMG223',
								linkDescription: 'Use similarity to investigate the constancy of the sine, cosine and tangent ratios for a given angle in right-angled triangles.',
							},
							{
								linkCode: 'ACMMG224',
								linkDescription: 'Apply trigonometry to solve right-angled triangle problems.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Statistics and Probability',
				secondaryTitles: [
					{
						secondaryName: 'Chance',
						linksToSecondary: [
							{
								linkCode: 'ACMSP225',
								linkDescription: 'List all outcomes for two-step chance experiments, both with and without replacement using tree diagrams or arrays. Assign probabilities to outcomes and determine probabilities for events.',
							},
							{
								linkCode: 'ACMSP226',
								linkDescription: 'Calculate relative frequencies from given or collected data to estimate probabilities of events involving ‘and’ or ‘or’.',
							},
							{
								linkCode: 'ACMSP227',
								linkDescription: 'Investigate reports of surveys in digital media and elsewhere for information on how data were obtained to estimate population means and medians.',
							}
						]
					},
					{
						secondaryName: 'Data representation and interpretation',
						linksToSecondary: [
							{
								linkCode: 'ACMSP228',
								linkDescription: 'Identify everyday questions and issues involving at least one numerical and at least one categorical variable, and collect data directly and from secondary sources .',
							},
							{
								linkCode: 'ACMSP282',
								linkDescription: 'Construct back-to-back stem-and-leaf plots and histograms and describe data, using terms including ‘skewed’, ‘symmetric’ and ‘bi modal’.',
							},
							{
								linkCode: 'ACMSP283',
								linkDescription: 'Compare data displays using mean, median and range to describe and interpret numerical data sets in terms of location (centre) and spread.',
							}
						]
					}
				]
			}
		]
	},
	{
		levelName: 'Year 10',
		primaryTitles: [
			{
				primaryName: 'Number and Algebra',
				secondaryTitles: [
					{
						secondaryName: 'Money and financial mathematics',
						linksToSecondary: [
							{
								linkCode: 'ACMNA229',
								linkDescription: 'Connect the compound interest formula to repeated applications of simple interest using appropriate digital technologies.',
							}
						]
					},
					{
						secondaryName: 'Patterns and algebra',
						linksToSecondary: [
							{
								linkCode: 'ACMNA230',
								linkDescription: 'Factorise algebraic expressions by taking out a common algebraic factor.',
							},
							{
								linkCode: 'ACMNA231',
								linkDescription: 'Simplify algebraic products and quotients using index laws.',
							},
							{
								linkCode: 'ACMNA232',
								linkDescription: 'Apply the four operations to simple algebraic fractions with numerical denominators.',
							},
							{
								linkCode: 'ACMNA233',
								linkDescription: 'Expand binomial products and factorise monic quadratic expressions using a variety of strategies.',
							},
							{
								linkCode: 'ACMNA234',
								linkDescription: 'Substitute values into formulas to determine an unknown.',
							}
						]
					},
					{
						secondaryName: 'Linear and non-linear relationships',
						linksToSecondary: [
							{
								linkCode: 'ACMNA235',
								linkDescription: 'Solve problems involving linear equations, including those derived from formulas.',
							},
							{
								linkCode: 'ACMNA236',
								linkDescription: 'Solve linear inequalities and graph their solutions on a number line.',
							},
							{
								linkCode: 'ACMNA237',
								linkDescription: 'Solve linear simultaneous equations, using algebraic and graphical techniques, including using digital technology.',
							},
							{
								linkCode: 'ACMNA238',
								linkDescription: 'Solve problems involving parallel and perpendicular lines.',
							},
							{
								linkCode: 'ACMNA239',
								linkDescription: 'Explore the connection between algebraic and graphical representations of relations such as simple quadratics, circles and exponentials using digital technology as appropriate.',
							},
							{
								linkCode: 'ACMNA240',
								linkDescription: 'Solve linear equations involving simple algebraic fractions.',
							},
							{
								linkCode: 'ACMNA241',
								linkDescription: 'Solve simple quadratic equations using a range of strategies.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Measurement and Geometry',
				secondaryTitles: [
					{
						secondaryName: 'Using units of measurement',
						linksToSecondary: [
							{
								linkCode: 'ACMMG242',
								linkDescription: 'Solve problems involving surface area and volume for a range of prisms, cylinders and composite solids.',
							}
						]
					},
					{
						secondaryName: 'Geometric reasoning',
						linksToSecondary: [
							{
								linkCode: 'ACMMG243',
								linkDescription: 'Formulate proofs involving congruent triangles and angle properties.',
							},
							{
								linkCode: 'ACMMG244',
								linkDescription: 'Apply logical reasoning, including the use of congruence and similarity, to proofs and numerical exercises involving plane shapes.',
							}
						]
					},
					{
						secondaryName: 'Pythagoras and trigonometry',
						linksToSecondary: [
							{
								linkCode: 'ACMMG245',
								linkDescription: 'Solve right-angled triangle problems including those involving direction and angles of elevation and depression.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Statistics and Probability',
				secondaryTitles: [
					{
						secondaryName: 'Chance',
						linksToSecondary: [
							{
								linkCode: 'ACMSP246',
								linkDescription: 'Describe the results of two- and three-step chance experiments, both with and without replacements, assign probabilities to outcomes and determine probabilities of events. Investigate the concept of independence.',
							},
							{
								linkCode: 'ACMSP247',
								linkDescription: 'Use the language of ‘if ....then, ‘given’, ‘of’, ‘knowing that’ to investigate conditional statements and identify common mistakes in interpreting such language.',
							}
						]
					},
					{
						secondaryName: 'Data representation and interpretation',
						linksToSecondary: [
							{
								linkCode: 'ACMSP248',
								linkDescription: 'Determine quartiles and interquartile range.',
							},
							{
								linkCode: 'ACMSP249',
								linkDescription: 'Construct and interpret box plots and use them to compare data sets.',
							},
							{
								linkCode: 'ACMSP250',
								linkDescription: 'Compare shapes of box plots to corresponding histograms and dot plots.',
							},
							{
								linkCode: 'ACMSP251',
								linkDescription: 'Use scatter plots to investigate and comment on relationships between two numerical variables.',
							},
							{
								linkCode: 'ACMSP252',
								linkDescription: 'Investigate and describe bivariate numerical data where the independent variable is time.',
							},
							{
								linkCode: 'ACMSP253',
								linkDescription: 'Evaluate statistical reports in the media and other places by linking claims to displays, statistics and representative data.',
							}
						]
					}
				]
			}
		]
	},
	{
		levelName: 'Year 10',
		primaryTitles: [
			{
				primaryName: 'Number and Algebra',
				secondaryTitles: [
					{
						secondaryName: 'Real numbers',
						linksToSecondary: [
							{
								linkCode: 'ACMNA264',
								linkDescription: 'Define rational and irrational numbers and perform operations with surds and fractional indices.',
							},
							{
								linkCode: 'ACMNA265',
								linkDescription: 'Use the definition of a logarithm to establish and apply the laws of logarithms.',
							}
						]
					},
					{
						secondaryName: 'Patterns and algebra',
						linksToSecondary: [
							{
								linkCode: 'ACMNA266',
								linkDescription: 'Investigate the concept of a polynomial and apply the factor and remainder theorems to solve problems.',
							}
						]
					},
					{
						secondaryName: 'Linear and non-linear relationships',
						linksToSecondary: [
							{
								linkCode: 'ACMNA270',
								linkDescription: 'Solve simple exponential equations.',
							},
							{
								linkCode: 'ACMNA267',
								linkDescription: 'Describe, interpret and sketch parabolas, hyperbolas, circles and exponential functions and their transformations.',
							},
							{
								linkCode: 'ACMNA268',
								linkDescription: 'Apply understanding of polynomials to sketch a range of curves and describe the features of these curves from their equation.',
							},
							{
								linkCode: 'ACMNA269',
								linkDescription: 'Factorise monic and non-monic quadratic expressions and solve a wide range of quadratic equations derived from a variety of contexts.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Measurement and Geometry',
				secondaryTitles: [
					{
						secondaryName: 'Using units of measurement',
						linksToSecondary: [
							{
								linkCode: 'ACMMG271',
								linkDescription: 'Solve problems involving surface area and volume of right pyramids, right cones, spheres and related composite solids.',
							}
						]
					},
					{
						secondaryName: 'Geometric reasoning',
						linksToSecondary: [
							{
								linkCode: 'ACMMG272',
								linkDescription: 'Prove and apply angle and chord properties of circles.',
							}
						]
					},
					{
						secondaryName: 'Pythagoras and trigonometry',
						linksToSecondary: [
							{
								linkCode: 'ACMMG273',
								linkDescription: 'Establish the sine, cosine and area rules for any triangle and solve related problems.',
							},
							{
								linkCode: 'ACMMG274',
								linkDescription: 'Use the unit circle to define trigonometric functions, and graph them with and without the use of digital technologies.',
							},
							{
								linkCode: 'ACMMG275',
								linkDescription: 'Solve simple trigonometric equations.',
							},
							{
								linkCode: 'ACMMG276',
								linkDescription: 'Apply Pythagoras’ Theorem and trigonometry to solving three-dimensional problems in right-angled triangles.',
							}
						]
					}
				]
			},
			{
				primaryName: 'Statistics and Probability',
				secondaryTitles: [
					{
						secondaryName: 'Chance',
						linksToSecondary: [
							{
								linkCode: 'ACMSP277',
								linkDescription: 'Investigate reports of studies in digital media and elsewhere for information on their planning and implementation.',
							}
						]
					},
					{
						secondaryName: 'Data representation and interpretation',
						linksToSecondary: [
							{
								linkCode: 'ACMSP278',
								linkDescription: 'Calculate and interpret the mean and standard deviation of data and use these to compare data sets.',
							},
							{
								linkCode: 'ACMSP279',
								linkDescription: 'Use information technologies to investigate bivariate numerical data sets. Where appropriate use a straight line to describe the relationship allowing for variation.',
							}
						]
					}
				]
			}
		]
	}
]