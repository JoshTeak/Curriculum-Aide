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
		ACMNA060: {isSet: false, curriculum: 'Mathematics', level: '3', linkDescription: 'Describe, continue, and create number patterns resulting from performing addition or subtraction.'},
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
		ACMSP279: {isSet: false, curriculum: 'Mathematics', level: '10A', linkDescription: 'Use information technologies to investigate bivariate numerical data sets. Where appropriate use a straight line to describe the relationship allowing for variation.'},
	
		ACSSU002: {isSet: false, curriculum: 'Science', level: 'F', linkDescription: 'Living things have basic needs, including food and water'}, 
		ACSSU003: {isSet: false, curriculum: 'Science', level: 'F', linkDescription: 'Objects are made of materials that have observable properties'}, 
		ACSSU004: {isSet: false, curriculum: 'Science', level: 'F', linkDescription: 'Daily and seasonal changes in our environment affect everyday life'}, 
		ACSSU005: {isSet: false, curriculum: 'Science', level: 'F', linkDescription: 'The way objects move depends on a variety of factors, including their size and shape'}, 
		ACSHE013: {isSet: false, curriculum: 'Science', level: 'F', linkDescription: ''}, 
		ACSIS014: {isSet: false, curriculum: 'Science', level: 'F', linkDescription: 'Pose and respond to questions about familiar objects and events'}, 
		ACSIS011: {isSet: false, curriculum: 'Science', level: 'F', linkDescription: 'Participate in guided investigations and make observations using the senses'}, 
		ACSIS233: {isSet: false, curriculum: 'Science', level: 'F', linkDescription: 'Engage in discussions about observations and represent ideas'}, 
		ACSIS012: {isSet: false, curriculum: 'Science', level: 'F', linkDescription: 'Share observations and ideas'}, 
		ACSSU017: {isSet: false, curriculum: 'Science', level: '1', linkDescription: 'Living things have a variety of external features'}, 
		ACSSU211: {isSet: false, curriculum: 'Science', level: '1', linkDescription: 'Living things live in different places where their needs are met'}, 
		ACSSU018: {isSet: false, curriculum: 'Science', level: '1', linkDescription: 'Everyday materials can be physically changed in a variety of ways'}, 
		ACSSU019: {isSet: false, curriculum: 'Science', level: '1', linkDescription: 'Observable changes occur in the sky and landscape'}, 
		ACSSU020: {isSet: false, curriculum: 'Science', level: '1', linkDescription: 'Light and sound are produced by a range of sources and can be sensed'}, 
		ACSHE021: {isSet: false, curriculum: 'Science', level: '1', linkDescription: 'Science involves observing, asking questions about, and describing changes in, objects and events'}, 
		ACSHE022: {isSet: false, curriculum: 'Science', level: '1', linkDescription: 'People use science in their daily lives, including when caring for their environment and living things'}, 
		ACSIS024: {isSet: false, curriculum: 'Science', level: '1', linkDescription: 'Pose and respond to questions, and make predictions about familiar objects and events'}, 
		ACSIS025: {isSet: false, curriculum: 'Science', level: '1', linkDescription: 'Participate in guided investigations to explore and answer questions'}, 
		ACSIS026: {isSet: false, curriculum: 'Science', level: '1', linkDescription: 'Use informal measurements to collect and record observations, using digital technologies as appropriate'}, 
		ACSIS027: {isSet: false, curriculum: 'Science', level: '1', linkDescription: 'Use a range of methods to sort information, including drawings and provided tables and through discussion, compare observations with predictions'}, 
		ACSIS213: {isSet: false, curriculum: 'Science', level: '1', linkDescription: 'Compare observations with those of others'}, 
		ACSIS029: {isSet: false, curriculum: 'Science', level: '1', linkDescription: 'Represent and communicate observations and ideas in a variety of ways'}, 
		ACSSU030: {isSet: false, curriculum: 'Science', level: '2', linkDescription: 'Living things grow, change and have offspring similar to themselves'}, 
		ACSSU031: {isSet: false, curriculum: 'Science', level: '2', linkDescription: 'Different materials can be combined for a particular purpose'}, 
		ACSSU032: {isSet: false, curriculum: 'Science', level: '2', linkDescription: 'Earth’s resources are used in a variety of ways'}, 
		ACSSU033: {isSet: false, curriculum: 'Science', level: '2', linkDescription: 'A push or a pull affects how an object moves or changes shape'}, 
		ACSHE034: {isSet: false, curriculum: 'Science', level: '2', linkDescription: 'Science involves observing, asking questions about, and describing changes in, objects and events'}, 
		ACSHE035: {isSet: false, curriculum: 'Science', level: '2', linkDescription: 'People use science in their daily lives, including when caring for their environment and living things'}, 
		ACSIS037: {isSet: false, curriculum: 'Science', level: '2', linkDescription: 'Pose and respond to questions, and make predictions about familiar objects and events'}, 
		ACSIS038: {isSet: false, curriculum: 'Science', level: '2', linkDescription: 'Participate in guided investigations to explore and answer questions'}, 
		ACSIS039: {isSet: false, curriculum: 'Science', level: '2', linkDescription: 'Use informal measurements to collect and record observations, using digital technologies as appropriate'}, 
		ACSIS040: {isSet: false, curriculum: 'Science', level: '2', linkDescription: 'Use a range of methods to sort information, including drawings and provided tables and through discussion, compare observations with predictions'}, 
		ACSIS041: {isSet: false, curriculum: 'Science', level: '2', linkDescription: 'Compare observations with those of others'}, 
		ACSIS042: {isSet: false, curriculum: 'Science', level: '2', linkDescription: 'Represent and communicate observations and ideas in a variety of ways'}, 
		ACSSU044: {isSet: false, curriculum: 'Science', level: '3', linkDescription: 'Living things can be grouped on the basis of observable features and can be distinguished from non-living things'}, 
		ACSSU046: {isSet: false, curriculum: 'Science', level: '3', linkDescription: 'A change of state between solid and liquid can be caused by adding or removing heat'}, 
		ACSSU048: {isSet: false, curriculum: 'Science', level: '3', linkDescription: 'Earth’s rotation on its axis causes regular changes, including night and day'}, 
		ACSSU049: {isSet: false, curriculum: 'Science', level: '3', linkDescription: 'Heat can be produced in many ways and can move from one object to another'}, 
		ACSHE050: {isSet: false, curriculum: 'Science', level: '3', linkDescription: 'Science involves making predictions and describing patterns and relationships'}, 
		ACSHE051: {isSet: false, curriculum: 'Science', level: '3', linkDescription: 'Science knowledge helps people to understand the effect of their actions'}, 
		ACSIS053: {isSet: false, curriculum: 'Science', level: '3', linkDescription: 'With guidance, identify questions in familiar contexts that can be investigated scientifically and make predictions based on prior knowledge'}, 
		ACSIS054: {isSet: false, curriculum: 'Science', level: '3', linkDescription: 'With guidance, plan and conduct scientific investigations to find answers to questions, considering the safe use of appropriate materials and equipment'}, 
		ACSIS055: {isSet: false, curriculum: 'Science', level: '3', linkDescription: 'Consider the elements of fair tests and use formal measurements and digital technologies as appropriate, to make and record observations accurately'}, 
		ACSIS057: {isSet: false, curriculum: 'Science', level: '3', linkDescription: 'Use a range of methods including tables and simple column graphs to represent data and to identify patterns and trends'}, 
		ACSIS215: {isSet: false, curriculum: 'Science', level: '3', linkDescription: 'Compare results with predictions, suggesting possible reasons for findings'}, 
		ACSIS058: {isSet: false, curriculum: 'Science', level: '3', linkDescription: 'Reflect on investigations, including whether a test was fair or not'}, 
		ACSIS060: {isSet: false, curriculum: 'Science', level: '3', linkDescription: 'Represent and communicate observations, ideas and findings using formal and informal representations'}, 
		ACSSU072: {isSet: false, curriculum: 'Science', level: '4', linkDescription: 'Living things have life cycles'}, 
		ACSSU073: {isSet: false, curriculum: 'Science', level: '4', linkDescription: 'Living things depend on each other and the environment to survive'}, 
		ACSSU074: {isSet: false, curriculum: 'Science', level: '4', linkDescription: 'Natural and processed materials have a range of physical properties that can influence their use'}, 
		ACSSU075: {isSet: false, curriculum: 'Science', level: '4', linkDescription: 'Earth’s surface changes over time as a result of natural processes and human activity'}, 
		ACSSU076: {isSet: false, curriculum: 'Science', level: '4', linkDescription: 'Forces can be exerted by one object on another through direct contact or from a distance'}, 
		ACSHE061: {isSet: false, curriculum: 'Science', level: '4', linkDescription: 'Science involves making predictions and describing patterns and relationships'}, 
		ACSHE062: {isSet: false, curriculum: 'Science', level: '4', linkDescription: 'Science knowledge helps people to understand the effect of their actions'}, 
		ACSIS064: {isSet: false, curriculum: 'Science', level: '4', linkDescription: 'With guidance, identify questions in familiar contexts that can be investigated scientifically and make predictions based on prior knowledge'}, 
		ACSIS065: {isSet: false, curriculum: 'Science', level: '4', linkDescription: 'With guidance, plan and conduct scientific investigations to find answers to questions, considering the safe use of appropriate materials and equipment'}, 
		ACSIS066: {isSet: false, curriculum: 'Science', level: '4', linkDescription: 'Consider the elements of fair tests and use formal measurements and digital technologies as appropriate, to make and record observations accurately'}, 
		ACSIS068: {isSet: false, curriculum: 'Science', level: '4', linkDescription: 'Use a range of methods including tables and simple column graphs to represent data and to identify patterns and trends'}, 
		ACSIS216: {isSet: false, curriculum: 'Science', level: '4', linkDescription: 'Compare results with predictions, suggesting possible reasons for findings'}, 
		ACSIS069: {isSet: false, curriculum: 'Science', level: '4', linkDescription: 'Reflect on investigations, including whether a test was fair or not'}, 
		ACSIS071: {isSet: false, curriculum: 'Science', level: '4', linkDescription: 'Represent and communicate observations, ideas and findings using formal and informal representations'}, 
		ACSSU043: {isSet: false, curriculum: 'Science', level: '5', linkDescription: 'Living things have structural features and adaptations that help them to survive in their environment'}, 
		ACSSU077: {isSet: false, curriculum: 'Science', level: '5', linkDescription: 'Solids, liquids and gases have different observable properties and behave in different ways'}, 
		ACSSU078: {isSet: false, curriculum: 'Science', level: '5', linkDescription: 'The Earth is part of a system of planets orbiting around a star (the sun)'}, 
		ACSSU080: {isSet: false, curriculum: 'Science', level: '5', linkDescription: 'Light from a source forms shadows and can be absorbed, reflected and refracted'}, 
		ACSHE081: {isSet: false, curriculum: 'Science', level: '5', linkDescription: 'Science involves testing predictions by gathering data and using evidence to develop explanations of events and phenomena and reflects historical and cultural contributions'}, 
		ACSHE083: {isSet: false, curriculum: 'Science', level: '5', linkDescription: 'Scientific knowledge is used to solve problems and inform personal and community decisions'}, 
		ACSIS231: {isSet: false, curriculum: 'Science', level: '5', linkDescription: 'With guidance, pose clarifying questions and make predictions about scientific investigations'}, 
		ACSIS086: {isSet: false, curriculum: 'Science', level: '5', linkDescription: 'Identify, plan and apply the elements of scientific investigations to answer questions and solve problems using equipment and materials safely and identifying potential risks'}, 
		ACSIS087: {isSet: false, curriculum: 'Science', level: '5', linkDescription: 'Decide variables to be changed and measured in fair tests, and observe measure and record data with accuracy using digital technologies as appropriate'}, 
		ACSIS090: {isSet: false, curriculum: 'Science', level: '5', linkDescription: 'Construct and use a range of representations, including tables and graphs, to represent and describe observations, patterns or relationships in data using digital technologies as appropriate'}, 
		ACSIS218: {isSet: false, curriculum: 'Science', level: '5', linkDescription: 'Compare data with predictions and use as evidence in developing explanations'}, 
		ACSIS091: {isSet: false, curriculum: 'Science', level: '5', linkDescription: 'Reflect on and suggest improvements to scientific investigations'}, 
		ACSIS093: {isSet: false, curriculum: 'Science', level: '5', linkDescription: 'Communicate ideas, explanations and processes using scientific representations in a variety of ways, including multi-modal texts'}, 
		ACSSU094: {isSet: false, curriculum: 'Science', level: '6', linkDescription: 'The growth and survival of living things are affected by physical conditions of their environment'}, 
		ACSSU095: {isSet: false, curriculum: 'Science', level: '6', linkDescription: 'Changes to materials can be reversible or irreversible'}, 
		ACSSU096: {isSet: false, curriculum: 'Science', level: '6', linkDescription: 'Sudden geological changes and extreme weather events can affect Earth’s surface'}, 
		ACSSU097: {isSet: false, curriculum: 'Science', level: '6', linkDescription: 'Electrical energy can be transferred and transformed in electrical circuits and can be generated from a range of sources'}, 
		ACSHE098: {isSet: false, curriculum: 'Science', level: '6', linkDescription: 'Science involves testing predictions by gathering data and using evidence to develop explanations of events and phenomena and reflects historical and cultural contributions'}, 
		ACSHE100: {isSet: false, curriculum: 'Science', level: '6', linkDescription: 'Scientific knowledge is used to solve problems and inform personal and community decisions'}, 
		ACSIS232: {isSet: false, curriculum: 'Science', level: '6', linkDescription: 'With guidance, pose clarifying questions and make predictions about scientific investigations'}, 
		ACSIS103: {isSet: false, curriculum: 'Science', level: '6', linkDescription: 'Identify, plan and apply the elements of scientific investigations to answer questions and solve problems using equipment and materials safely and identifying potential risks'}, 
		ACSIS104: {isSet: false, curriculum: 'Science', level: '6', linkDescription: 'Decide variables to be changed and measured in fair tests, and observe measure and record data with accuracy using digital technologies as appropriate'}, 
		ACSIS107: {isSet: false, curriculum: 'Science', level: '6', linkDescription: 'Construct and use a range of representations, including tables and graphs, to represent and describe observations, patterns or relationships in data using digital technologies as appropriate'}, 
		ACSIS221: {isSet: false, curriculum: 'Science', level: '6', linkDescription: 'Compare data with predictions and use as evidence in developing explanations'}, 
		ACSIS108: {isSet: false, curriculum: 'Science', level: '6', linkDescription: 'Reflect on and suggest improvements to scientific investigations'}, 
		ACSIS110: {isSet: false, curriculum: 'Science', level: '6', linkDescription: 'Communicate ideas, explanations and processes using scientific representations in a variety of ways, including multi-modal texts'}, 
		ACSSU111: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Classification helps organise the diverse group of organisms'}, 
		ACSSU112: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Interactions between organisms, including the effects of human activities can be represented by food chains and food webs'}, 
		ACSSU113: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Mixtures, including solutions, contain a combination of pure substances that can be separated using a range of techniques'}, 
		ACSSU115: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Predictable phenomena on Earth, including seasons and eclipses, are caused by the relative positions of the sun, Earth and the moon'}, 
		ACSSU116: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Some of Earth’s resources are renewable, including water that cycles through the environment, but others are non-renewable'}, 
		ACSSU117: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Change to an object’s motion is caused by unbalanced forces, including Earth’s gravitational attraction, acting on the object'}, 
		ACSHE119: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Scientific knowledge has changed peoples’ understanding of the world and is refined as new evidence becomes available'}, 
		ACSHE223: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Science knowledge can develop through collaboration across the disciplines of science and the contributions of people from a range of cultures'}, 
		ACSHE120: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Solutions to contemporary issues that are found using science and technology, may impact on other areas of society and may involve ethical considerations'}, 
		ACSHE121: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'People use science understanding and skills in their occupations and these have influenced the development of practices in areas of human activity'}, 
		ACSIS124: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Identify questions and problems that can be investigated scientifically and make predictions based on scientific knowledge'}, 
		ACSIS125: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Collaboratively and individually plan and conduct a range of investigation types, including fieldwork and experiments, ensuring safety and ethical guidelines are followed'}, 
		ACSIS126: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Measure and control variables, select equipment appropriate to the task and collect data with accuracy'}, 
		ACSIS129: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Construct and use a range of representations, including graphs, keys and models to represent and analyse patterns or relationships in data using digital technologies as appropriate'}, 
		ACSIS130: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Summarise data, from students’ own investigations and secondary sources, and use scientific understanding to identify relationships and draw conclusions based on evidence'}, 
		ACSIS131: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Reflect on scientific investigations including evaluating the quality of the data collected, and identifying improvements'}, 
		ACSIS132: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Use scientific knowledge and findings from investigations to evaluate claims based on evidence'}, 
		ACSIS133: {isSet: false, curriculum: 'Science', level: '7', linkDescription: 'Communicate ideas, findings and evidence based solutions to problems using scientific language, and representations, using digital technologies as appropriate'}, 
		ACSSU149: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Cells are the basic units of living things; they have specialised structures and functions'}, 
		ACSSU150: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Multi-cellular organisms contain systems of organs carrying out specialised functions that enable them to survive and reproduce'}, 
		ACSSU151: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Properties of the different states of matter can be explained in terms of the motion and arrangement of particles'}, 
		ACSSU152: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Differences between elements, compounds and mixtures can be described at a particle level'}, 
		ACSSU225: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Chemical change involves substances reacting to form new substances'}, 
		ACSSU153: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Sedimentary, igneous and metamorphic rocks contain minerals and are formed by processes that occur within Earth over a variety of timescales'}, 
		ACSSU155: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Energy appears in different forms, including movement (kinetic energy), heat and potential energy, and energy transformations and transfers cause change within systems'}, 
		ACSHE134: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Scientific knowledge has changed peoples’ understanding of the world and is refined as new evidence becomes available'}, 
		ACSHE226: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Science knowledge can develop through collaboration across the disciplines of science and the contributions of people from a range of cultures'}, 
		ACSHE135: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Solutions to contemporary issues that are found using science and technology, may impact on other areas of society and may involve ethical considerations'}, 
		ACSHE136: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'People use science understanding and skills in their occupations and these have influenced the development of practices in areas of human activity'}, 
		ACSIS139: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Identify questions and problems that can be investigated scientifically and make predictions based on scientific knowledge'}, 
		ACSIS140: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Collaboratively and individually plan and conduct a range of investigation types, including fieldwork and experiments, ensuring safety and ethical guidelines are followed'}, 
		ACSIS141: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Measure and control variables, select equipment appropriate to the task and collect data with accuracy'}, 
		ACSIS144: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Construct and use a range of representations, including graphs, keys and models to represent and analyse patterns or relationships in data using digital technologies as appropriate'}, 
		ACSIS145: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Summarise data, from students’ own investigations and secondary sources, and use scientific understanding to identify relationships and draw conclusions based on evidence'}, 
		ACSIS146: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Reflect on scientific investigations including evaluating the quality of the data collected, and identifying improvements'}, 
		ACSIS234: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Use scientific knowledge and findings from investigations to evaluate claims based on evidence'}, 
		ACSIS148: {isSet: false, curriculum: 'Science', level: '8', linkDescription: 'Communicate ideas, findings and evidence based solutions to problems using scientific language, and representations, using digital technologies as appropriate'}, 
		ACSSU175: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Multi-cellular organisms rely on coordinated and interdependent internal systems to respond to changes to their environment'}, 
		ACSSU176: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Ecosystems consist of communities of interdependent organisms and abiotic components of the environment; matter and energy flow through these systems'}, 
		ACSSU177: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'All matter is made of atoms that are composed of protons, neutrons and electrons; natural radioactivity arises from the decay of nuclei in atoms'}, 
		ACSSU178: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Chemical reactions involve rearranging atoms to form new substances; during a chemical reaction mass is not created or destroyed'}, 
		ACSSU179: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Chemical reactions, including combustion and the reactions of acids, are important in both non-living and living systems and involve energy transfer'}, 
		ACSSU180: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'The theory of plate tectonics explains global patterns of geological activity and continental movement'}, 
		ACSSU182: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Energy transfer through different mediums can be explained using wave and particle models'}, 
		ACSHE157: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Scientific understanding, including models and theories, is contestable and is refined over time through a process of review by the scientific community'}, 
		ACSHE158: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Advances in scientific understanding often rely on technological advances and are often linked to scientific discoveries'}, 
		ACSHE160: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'People use scientific knowledge to evaluate whether they accept claims, explanations or predictions, and advances in science can affect people’s lives, including generating new career opportunities'}, 
		ACSHE228: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Values and needs of contemporary society can influence the focus of scientific research'}, 
		ACSIS164: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Formulate questions or hypotheses that can be investigated scientifically'}, 
		ACSIS165: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Plan, select and use appropriate investigation types, including field work and laboratory experimentation, to collect reliable data; assess risk and address ethical issues associated with these methods'}, 
		ACSIS166: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Select and use appropriate equipment, including digital technologies, to collect and record data systematically and accurately'}, 
		ACSIS169: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Analyse patterns and trends in data, including describing relationships between variables and identifying inconsistencies'}, 
		ACSIS170: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Use knowledge of scientific concepts to draw conclusions that are consistent with evidence'}, 
		ACSIS171: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Evaluate conclusions, including identifying sources of uncertainty and possible alternative explanations, and describe specific ways to improve the quality of the data'}, 
		ACSIS172: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Critically analyse the validity of information in primary and secondary sources and evaluate the approaches used to solve problems'}, 
		ACSIS174: {isSet: false, curriculum: 'Science', level: '9', linkDescription: 'Communicate scientific ideas and information for a particular purpose, including constructing evidence-based arguments and using appropriate scientific language, conventions and representations'}, 
		ACSSU184: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'Transmission of heritable characteristics from one generation to the next involves DNA and genes'}, 
		ACSSU185: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'The theory of evolution by natural selection explains the diversity of living things and is supported by a range of scientific evidence'}, 
		ACSSU186: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'The atomic structure and properties of elements are used to organise them in the Periodic Table'}, 
		ACSSU187: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'Different types of chemical reactions are used to produce a range of products and can occur at different rates'}, 
		ACSSU188: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'The universe contains features including galaxies, stars and solar systems, and the Big Bang theory can be used to explain the origin of the universe'}, 
		ACSSU189: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'Global systems, including the carbon cycle, rely on interactions involving the biosphere, lithosphere, hydrosphere and atmosphere'}, 
		ACSSU190: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'Energy conservation in a system can be explained by describing energy transfers and transformations'}, 
		ACSSU229: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'The motion of objects can be described and predicted using the laws of physics'}, 
		ACSHE191: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'Scientific understanding, including models and theories, is contestable and is refined over time through a process of review by the scientific community'}, 
		ACSHE192: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'Advances in scientific understanding often rely on technological advances and are often linked to scientific discoveries'}, 
		ACSHE194: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'People use scientific knowledge to evaluate whether they accept claims, explanations or predictions, and advances in science can affect people’s lives, including generating new career opportunities'}, 
		ACSHE230: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'Values and needs of contemporary society can influence the focus of scientific research'}, 
		ACSIS198: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'Formulate questions or hypotheses that can be investigated scientifically'}, 
		ACSIS199: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'Plan, select and use appropriate investigation types, including field work and laboratory experimentation, to collect reliable data; assess risk and address ethical issues associated with these methods'}, 
		ACSIS200: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'Select and use appropriate equipment, including digital technologies, to collect and record data systematically and accurately'}, 
		ACSIS203: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'Analyse patterns and trends in data, including describing relationships between variables and identifying inconsistencies'}, 
		ACSIS204: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'Use knowledge of scientific concepts to draw conclusions that are consistent with evidence'}, 
		ACSIS205: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'Evaluate conclusions, including identifying sources of uncertainty and possible alternative explanations, and describe specific ways to improve the quality of the data'}, 
		ACSIS206: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'Critically analyse the validity of information in primary and secondary sources and evaluate the approaches used to solve problems'}, 
		ACSIS208: {isSet: false, curriculum: 'Science', level: '10', linkDescription: 'Communicate scientific ideas and information for a particular purpose, including constructing evidence-based arguments and using appropriate scientific language, conventions and representations'}, 


		ACELA1426: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Understand that English is one of many languages spoken in Australia and that different languages may be spoken by family, classmates and community'}, 
		ACELA1428: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Explore how language is used differently at home and school depending on the relationships between people'}, 
		ACELA1429: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Understand that language can be used to explore ways of expressing needs, likes and dislikes'}, 
		ACELA1430: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Understand that texts can take many forms, can be very short (for example an exit sign) or quite long (for example an information book or a film) and that stories and informative texts have different purposes'}, 
		ACELA1431: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Understand that some language in written texts is unlike everyday spoken language'}, 
		ACELA1432: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Understand that punctuation is a feature of written text different from letters; recognise how capital letters are used for names, and that capital letters and full stops signal the beginning and end of sentences'}, 
		ACELA1433: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Understand concepts about print and screen, including how books, film and simple digital texts work, and know some features of print, for example directionality'}, 
		ACELA1435: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Recognise that sentences are key units for expressing ideas'}, 
		ACELA1434: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Recognise that texts are made up of words and groups of words that make meaning'}, 
		ACELA1786: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Explore the different contribution of words and images to meaning in stories and informative texts'}, 
		ACELA1437: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Understand the use of vocabulary in familiar contexts related to everyday experiences, personal interests and topics taught at school'}, 
		ACELA1439: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Recognise and generate rhyming words, alliteration patterns, syllables and sounds (phonemes) in spoken words'}, 
		ACELA1440: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Recognise and name all upper and lower case letters (graphemes) and know the most common sound that each letter represents'}, 
		ACELA1438: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Understand how to use knowledge of letters and sounds including onset and rime to spell words'}, 
		ACELA1817: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Know how to read and write some high-frequency words and other familiar words'}, 
		ACELA1818: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Understand that words are units of meaning and can be made of more than one meaningful part'}, 
		ACELA1819: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Segment sentences into individual words and orally blend and segment onset and rime in single syllable spoken words, and isolate, blend and manipulate phonemes in single syllable words'}, 
		ACELA1820: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Write consonant-vowel-consonant (CVC) words by representing some sounds with the appropriate letters, and blend sounds associated with letters when reading CVC words'}, 
		ACELT1575: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Recognise that texts are created by authors who tell stories and share experiences that may be similar or different to students’ own experiences'}, 
		ACELT1577: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Respond to texts, identifying favourite stories, authors and illustrators'}, 
		ACELT1783: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Share feelings and thoughts about the events and characters in texts'}, 
		ACELT1578: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Identify some features of texts including events and characters and retell events from a text'}, 
		ACELT1785: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Recognise some different types of literary texts and identify some characteristic features of literary texts, for example beginnings and endings of traditional texts and rhyme in poetry'}, 
		ACELT1579: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Replicate the rhythms and sound patterns in stories, rhymes, songs and poems from a range of cultures'}, 
		ACELT1580: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Retell familiar literary texts through performance, use of illustrations and images'}, 
		ACELT1831: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Innovate on familiar texts through play'}, 
		ACELY1645: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Identify some familiar texts and the contexts in which they are used'}, 
		ACELY1646: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Listen to and respond orally to texts and to the communication of others in informal and structured classroom situations'}, 
		ACELY1784: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Use interaction skills including listening while others speak, using appropriate voice levels, articulation and body language, gestures and eye contact'}, 
		ACELY1647: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Deliver short oral presentations to peers'}, 
		ACELY1648: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Identify some differences between imaginative and informative texts'}, 
		ACELY1649: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'fluency, and monitor meaning using concepts about print and emerging contextual, semantic, grammatical and phonic knowledge'}, 
		ACELY1650: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Use comprehension strategies to understand and discuss texts listened to, viewed or read independently'}, 
		ACELY1651: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Create short texts to explore, record and report ideas and events using familiar words and beginning writing knowledge'}, 
		ACELY1652: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Participate in shared editing of students’ own texts for meaning, spelling, capital letters and full stops'}, 
		ACELY1654: {isSet: false, curriculum: 'English', level: 'Foundation Year', linkDescription: 'Construct texts using software including word processing programs'}, 
		ACELA1443: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Understand that people use different systems of communication to cater to different needs and purposes and that many people may use sign systems to communicate with others'}, 
		ACELA1444: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Understand that language is used in combination with other means of communication, for example facial expressions and gestures to interact with others'}, 
		ACELA1446: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Understand that there are different ways of asking for information, making offers and giving commands'}, 
		ACELA1787: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Explore different ways of expressing emotions, including verbal, visual, body language and facial expressions'}, 
		ACELA1447: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Understand that the purposes texts serve shape their structure in predictable ways'}, 
		ACELA1448: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Understand patterns of repetition and contrast in simple texts'}, 
		ACELA1449: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Recognise that different types of punctuation, including full stops, question marks and exclamation marks, signal sentences that make statements, ask questions, express emotion or give commands'}, 
		ACELA1450: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Understand concepts about print and screen, including how different types of texts are organised using page numbering, tables of content, headings and titles, navigation buttons, bars and links'}, 
		ACELA1451: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Identify the parts of a simple sentence that represent ‘What’s happening?’, ‘What state is being described?’, ‘Who or what is involved?’ and the surrounding circumstances'}, 
		ACELA1452: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Explore differences in words that represent people, places and things (nouns, including pronouns), happenings and states (verbs), qualities (adjectives) and details such as when, where and how (adverbs)'}, 
		ACELA1453: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Compare different kinds of images in narrative and informative texts and discuss how they contribute to meaning'}, 
		ACELA1454: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Understand the use of vocabulary in everyday contexts as well as a growing number of school contexts, including appropriate use of formal and informal terms of address in different contexts'}, 
		ACELA1457: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Manipulate phonemes in spoken words by addition, deletion and substitution of initial, medial and final phonemes to generate new words'}, 
		ACELA1458: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Use short vowels, common long vowels, consonant digraphs and consonant blends when writing, and blend these to read single syllable words'}, 
		ACELA1459: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Understand that a letter can represent more than one sound and that a syllable must contain a vowel sound'}, 
		ACELA1778: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Understand how to spell one and two syllable words with common letter patterns'}, 
		ACELA1455: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Recognise and know how to use simple grammatical morphemes to create word families'}, 
		ACELA1821: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Use visual memory to read and write high-frequency words'}, 
		ACELA1822: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Segment consonant blends or clusters into separate phonemes at the beginnings and ends of one syllable words'}, 
		ACELT1581: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Discuss how authors create characters using language and images'}, 
		ACELT1582: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Discuss characters and events in a range of literary texts and share personal responses to these texts, making connections with students\' own experiences'}, 
		ACELT1583: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Express preferences for specific texts and authors and listen to the opinions of others'}, 
		ACELT1584: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Discuss features of plot, character and setting in different types of literature and explore some features of characters in different texts'}, 
		ACELT1585: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Listen to, recite and perform poems, chants, rhymes and songs, imitating and inventing sound patterns including alliteration and rhyme'}, 
		ACELT1586: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Recreate texts imaginatively using drawing, writing, performance and digital forms of communication'}, 
		ACELT1832: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Innovate on familiar texts by using similar characters, repetitive patterns or vocabulary'}, 
		ACELY1655: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Respond to texts drawn from a range of cultures and experiences'}, 
		ACELY1656: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Engage in conversations and discussions, using active listening behaviours, showing interest, and contributing ideas, information and questions'}, 
		ACELY1788: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Use interaction skills including turn-taking, recognising the contributions of others, speaking clearly and using appropriate volume and pace'}, 
		ACELY1657: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Make short presentations using some introduced text structures and language, for example opening statements'}, 
		ACELY1658: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Describe some differences between imaginative informative and persuasive texts'}, 
		ACELY1659: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Read decodable and predictable texts using developing phrasing, fluency, contextual, semantic, grammatical and phonic knowledge and emerging text processing strategies, for example prediction, monitoring meaning and re-reading'}, 
		ACELY1660: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Use comprehension strategies to build literal and inferred meaning about key events, ideas and information in texts that they listen to, view and read by drawing on growing knowledge of context, text structures and language features'}, 
		ACELY1661: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Create short imaginative and informative texts that show emerging use of appropriate text structure, sentence-level grammar, word choice, spelling, punctuation and appropriate multimodal elements, for example illustrations and diagrams'}, 
		ACELY1662: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Re-read student’s own texts and discuss possible changes to improve meaning, spelling and punctuation'}, 
		ACELY1663: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Write using unjoined lower case and upper case letters'}, 
		ACELY1664: {isSet: false, curriculum: 'English', level: 'Year 1', linkDescription: 'Construct texts that incorporate supporting images using software including word processing programs'}, 
		ACELA1460: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Understand that spoken, visual and written forms of language are different modes of communication with different features and their use varies according to the audience, purpose, context and cultural background'}, 
		ACELA1461: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Understand that language varies when people take on different roles in social and classroom interactions and how the use of key interpersonal language resources varies depending on context'}, 
		ACELA1462: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Identify language that can be used for appreciating texts and the qualities of people and things'}, 
		ACELA1463: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Understand that different types of texts have identifiable text structures and language features that help the text serve its purpose'}, 
		ACELA1464: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Understand how texts are made cohesive through language features, including word associations, synonyms, and antonyms'}, 
		ACELA1465: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Recognise that capital letters signal proper nouns and commas are used to separate items in lists'}, 
		ACELA1466: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Know some features of text organisation including page and screen layouts, alphabetical order, and different types of diagrams, for example timelines'}, 
		ACELA1467: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Understand that simple connections can be made between ideas by using a compound sentence with two or more clauses usually linked by a coordinating conjunction'}, 
		ACELA1468: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Understand that verbs represent different processes, for example doing, thinking, saying, and relating and that these processes are anchored in time through tense'}, 
		ACELA1469: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Identify visual representations of characters’ actions, reactions, speech and thought processes in narratives, and consider how these images add to or contradict or multiply the meaning of accompanying words'}, 
		ACELA1470: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Understand the use of vocabulary about familiar and new topics and experiment with and begin to make conscious choices of vocabulary to suit audience and purpose'}, 
		ACELA1474: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Orally manipulate more complex sounds in spoken words through knowledge of blending and segmenting sounds, phoneme deletion and substitution in combination with use of letters in reading and writing'}, 
		ACELA1471: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Understand how to use knowledge of digraphs, long vowels, blends and silent letters to spell one and two syllable words including some compound words'}, 
		ACELA1472: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Build morphemic word families using knowledge of prefixes and suffixes'}, 
		ACELA1823: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Use knowledge of letter patterns and morphemes to read and write high-frequency words and words whose spelling is not predictable from their sounds'}, 
		ACELA1824: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Use most letter-sound matches including vowel digraphs, less common long vowel patterns, letter clusters and silent letters when reading and writing words of one or more syllable'}, 
		ACELA1825: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Understand that a sound can be represented by various letter combinations'}, 
		ACELT1587: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Discuss how depictions of characters in print, sound and images reflect the contexts in which they were created'}, 
		ACELT1589: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Compare opinions about characters, events and settings in and between texts'}, 
		ACELT1590: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Identify aspects of different types of literary texts that entertain, and give reasons for personal preferences'}, 
		ACELT1591: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Discuss the characters and settings of different texts and explore how language is used to present these features in different ways'}, 
		ACELT1592: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Identify, reproduce and experiment with rhythmic, sound and word patterns in poems, chants, rhymes and songs'}, 
		ACELT1593: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Create events and characters using different media that develop key events and characters from literary texts'}, 
		ACELT1833: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Innovate on familiar texts by experimenting with character, setting or plot'}, 
		ACELY1665: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Discuss different texts on a similar topic, identifying similarities and differences between the texts'}, 
		ACELY1666: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Listen for specific purposes and information, including instructions, and extend students’ own and others’ ideas in discussions'}, 
		ACELY1789: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Use interaction skills including initiating topics, making positive statements and voicing disagreement in an appropriate manner, speaking clearly and varying tone, volume and pace appropriately'}, 
		ACELY1667: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Rehearse and deliver short presentations on familiar and new topics'}, 
		ACELY1668: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Identify the audience of imaginative, informative and persuasive texts'}, 
		ACELY1669: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Read less predictable texts with phrasing and fluency by combining contextual, semantic, grammatical and phonic knowledge using text processing strategies, for example monitoring meaning, predicting, rereading and self-correcting'}, 
		ACELY1670: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Use comprehension strategies to build literal and inferred meaning and begin to analyse texts by drawing on growing knowledge of context, language and visual features and print and multimodal text structures'}, 
		ACELY1671: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Create short imaginative, informative and persuasive texts using growing knowledge of text structures and language features for familiar and some less familiar audiences, selecting print and multimodal elements appropriate to the audience and purpose'}, 
		ACELY1672: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Re-read and edit text for spelling, sentence-boundary punctuation and text structure'}, 
		ACELY1673: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Write legibly and with growing fluency using unjoined upper case and lower case letters'}, 
		ACELY1674: {isSet: false, curriculum: 'English', level: 'Year 2', linkDescription: 'Construct texts featuring print, visual and audio elements using software, including word processing programs'}, 
		ACELA1475: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Understand that languages have different written and visual communication systems, different oral traditions and different ways of constructing meaning'}, 
		ACELA1476: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Understand that successful cooperation with others depends on shared use of social conventions, including turn-taking patterns, and forms of address that vary according to the degree of formality in social situations'}, 
		ACELA1477: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Examine how evaluative language can be varied to be more or less forceful'}, 
		ACELA1478: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Understand how different types of texts vary in use of language choices, depending on their purpose and context (for example, tense and types of sentences)'}, 
		ACELA1479: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Understand that paragraphs are a key organisational feature of written texts'}, 
		ACELA1480: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Know that word contractions are a feature of informal language and that apostrophes of contraction are used to signal missing letters'}, 
		ACELA1790: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Identify the features of online texts that enhance navigation'}, 
		ACELA1481: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Understand that a clause is a unit of grammar usually containing a subject and a verb and that these need to be in agreement'}, 
		ACELA1482: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Understand that verbs represent different processes, for example doing, thinking, saying, and relating and that these processes are anchored in time through tense'}, 
		ACELA1483: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Identify the effect on audiences of techniques, for example shot size, vertical camera angle and layout in picture books, advertisements and film segments'}, 
		ACELA1484: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Learn extended and technical vocabulary and ways of expressing opinion including modal verbs and adverbs'}, 
		ACELA1485: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Understand how to use letter-sound relationships and less common letter patterns to spell words'}, 
		ACELA1486: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Recognise and know how to write most high frequency words including some homophones'}, 
		ACELA1826: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Understand how to apply knowledge of letter-sound relationships, syllables, and blending and segmenting to fluently read and write multisyllabic words with more complex letter patterns'}, 
		ACELA1827: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Know how to use common prefixes and suffixes, and generalisations for adding a suffix to a base word'}, 
		ACELT1594: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Discuss texts in which characters, events and settings are portrayed in different ways, and speculate on the authors’ reasons'}, 
		ACELT1596: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Draw connections between personal experiences and the worlds of texts, and share responses with others'}, 
		ACELT1598: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Develop criteria for establishing personal preferences for literature'}, 
		ACELT1599: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Discuss how language is used to describe the settings in texts, and explore how the settings shape the events and influence the mood of the narrative'}, 
		ACELT1600: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Discuss the nature and effects of some language devices used to enhance meaning and shape the reader’s reaction, including rhythm and onomatopoeia in poetry and prose'}, 
		ACELT1601: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Create imaginative texts based on characters, settings and events from students’ own and other cultures using visual features, for example perspective, distance and angle'}, 
		ACELT1791: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Create texts that adapt language features and patterns encountered in literary texts, for example characterisation, rhyme, rhythm, mood, music, sound effects and dialogue'}, 
		ACELY1675: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Identify the point of view in a text and suggest alternative points of view'}, 
		ACELY1676: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Listen to and contribute to conversations and discussions to share information and ideas and negotiate in collaborative situations'}, 
		ACELY1792: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Use interaction skills, including active listening behaviours and communicate in a clear, coherent manner using a variety of everyday and learned vocabulary and appropriate tone, pace, pitch and volume'}, 
		ACELY1677: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Plan and deliver short presentations, providing some key details in logical sequence'}, 
		ACELY1678: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Identify the audience and purpose of imaginative, informative and persuasive texts'}, 
		ACELY1679: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Read an increasing range of different types of texts by combining contextual, semantic, grammatical and phonic knowledge, using text processing strategies, for example monitoring, predicting, confirming, rereading, reading on and self-correcting'}, 
		ACELY1680: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Use comprehension strategies to build literal and inferred meaning and begin to evaluate texts by drawing on a growing knowledge of context, text structures and language features'}, 
		ACELY1682: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Plan, draft and publish imaginative, informative and persuasive texts demonstrating increasing control over text structures and language features and selecting print,and multimodal elements appropriate to the audience and purpose'}, 
		ACELY1683: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Re-read and edit texts for meaning, appropriate structure, grammatical choices and punctuation'}, 
		ACELY1684: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Write using joined letters that are clearly formed and consistent in size'}, 
		ACELY1685: {isSet: false, curriculum: 'English', level: 'Year 3', linkDescription: 'Use software including word processing programs with growing speed and efficiency to construct and edit texts featuring visual, print and audio elements'}, 
		ACELA1487: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Understand that Standard Australian English is one of many social dialects used in Australia, and that while it originated in England it has been influenced by many other languages'}, 
		ACELA1488: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Understand that social interactions influence the way people engage with ideas and respond to others for example when exploring and clarifying the ideas of others, summarising their own views and reporting them to a larger group'}, 
		ACELA1489: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Understand differences between the language of opinion and feeling and the language of factual reporting or recording'}, 
		ACELA1490: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Understand how texts vary in complexity and technicality depending on the approach to the topic, the purpose and the intended audience'}, 
		ACELA1491: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Understand how texts are made cohesive through the use of linking devices including pronoun reference and text connectives'}, 
		ACELA1492: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Recognise how quotation marks are used in texts to signal dialogue, titles and quoted (direct) speech'}, 
		ACELA1793: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Identify features of online texts that enhance readability including text, navigation, links, graphics and layout'}, 
		ACELA1493: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Understand that the meaning of sentences can be enriched through the use of noun groups/phrases and verb groups/phrases and prepositional phrases'}, 
		ACELA1494: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Investigate how quoted (direct) and reported (indirect) speech work in different types of text'}, 
		ACELA1495: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Understand how adverb groups/phrases and prepositional phrases work in different ways to provide circumstantial details about an activity'}, 
		ACELA1496: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Explore the effect of choices when framing an image, placement of elements in the image, and salience on composition of still and moving images in a range of types of texts'}, 
		ACELA1498: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Incorporate new vocabulary from a range of sources into students’ own texts including vocabulary encountered in research'}, 
		ACELA1779: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Understand how to use knowledge of letter patterns including double letters, spelling generalisations, morphemic word families, common prefixes and suffixes and word origins to spell more complex words'}, 
		ACELA1780: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Read and write a large core of high frequency words including homophones and know how to use context to identify correct spelling'}, 
		ACELA1828: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Understand how to use phonic knowledge to read and write multisyllabic words with more complex letter combinations, including a variety of vowel sounds and known prefixes and suffixes'}, 
		ACELT1602: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Make connections between the ways different authors may represent similar storylines, ideas and relationships'}, 
		ACELT1603: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Discuss literary experiences with others, sharing responses and expressing a point of view'}, 
		ACELT1604: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Use metalanguage to describe the effects of ideas, text structures and language features of literary texts'}, 
		ACELT1605: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Discuss how authors and illustrators make stories exciting, moving and absorbing and hold readers’ interest by using various techniques, for example character development and plot tension'}, 
		ACELT1606: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Understand, interpret and experiment with a range of devices and deliberate word play in poetry and other literary texts, for example nonsense words, spoonerisms, neologisms and puns'}, 
		ACELT1607: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Create literary texts that explore students’ own experiences and imagining'}, 
		ACELT1794: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Create literary texts by developing storylines, characters and settings'}, 
		ACELY1686: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Identify and explain language features of texts from earlier times and compare with the vocabulary, images, layout and content of contemporary texts'}, 
		ACELY1687: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Interpret ideas and information in spoken texts and listen for key points in order to carry out tasks and use information to share and extend ideas and information'}, 
		ACELY1688: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Use interaction skills such as acknowledging another’s point of view and linking students’ response to the topic, using familiar and new vocabulary and a range of vocal effects such as tone, pace, pitch and volume to speak clearly and coherently'}, 
		ACELY1689: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Plan, rehearse and deliver presentations incorporating learned content and taking into account the particular purposes and audiences'}, 
		ACELY1690: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Identify characteristic features used in imaginative, informative and persuasive texts to meet the purpose of the text'}, 
		ACELY1691: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Read different types of texts by combining contextual , semantic, grammatical and phonic knowledge using text processing strategies for example monitoring meaning, cross checking and reviewing'}, 
		ACELY1692: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Use comprehension strategies to build literal and inferred meaning to expand content knowledge, integrating and linking ideas and analysing and evaluating texts'}, 
		ACELY1694: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Plan, draft and publish imaginative, informative and persuasive texts containing key information and supporting details for a widening range of audiences, demonstrating increasing control over text structures and language features'}, 
		ACELY1695: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Re-read and edit for meaning by adding, deleting or moving words or word groups to improve content and structure'}, 
		ACELY1696: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Write using clearly-formed joined letters, and develop increased fluency and automaticity'}, 
		ACELY1697: {isSet: false, curriculum: 'English', level: 'Year 4', linkDescription: 'Use a range of software including word processing programs to construct, edit and publish written text, and select, edit and place visual, print and audio elements'}, 
		ACELA1500: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Understand that the pronunciation, spelling and meanings of words have histories and change over time'}, 
		ACELA1501: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Understand that patterns of language interaction vary across social contexts and types of texts and that they help to signal social roles and relationships'}, 
		ACELA1502: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Understand how to move beyond making bare assertions and take account of differing perspectives and points of view'}, 
		ACELA1504: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Understand how texts vary in purpose, structure and topic as well as the degree of formality'}, 
		ACELA1505: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Understand that the starting point of a sentence gives prominence to the message in the text and allows for prediction of how the text will unfold'}, 
		ACELA1506: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Understand how the grammatical category of possessives is signalled through apostrophes and how to use apostrophes with common and proper nouns'}, 
		ACELA1797: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Investigate how the organisation of texts into chapters, headings, subheadings, home pages and sub pages for online texts and according to chronology or topic can be used to predict content and assist navigation'}, 
		ACELA1507: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Understand the difference between main and subordinate clauses and that a complex sentence involves at least one subordinate clause'}, 
		ACELA1508: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Understand how noun groups/phrases and adjective groups/phrases can be expanded in a variety of ways to provide a fuller description of the person, place, thing or idea'}, 
		ACELA1511: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Explain sequences of images in print texts and compare these to the ways hyperlinked digital texts are organised, explaining their effect on viewers’ interpretations'}, 
		ACELA1512: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Understand the use of vocabulary to express greater precision of meaning, and know that words can have different meanings in different contexts'}, 
		ACELA1513: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Understand how to use knowledge of known words, base words, prefixes and suffixes, word origins, letter patterns and spelling generalisations to spell new words'}, 
		ACELA1514: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Explore less common plurals, and understand how a suffix changes the meaning or grammatical form of a word'}, 
		ACELA1829: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Understand how to use phonic knowledge to read and write less familiar words that share common letter patterns but have different pronunciations'}, 
		ACELT1608: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Identify aspects of literary texts that convey details or information about particular social, cultural and historical contexts'}, 
		ACELT1609: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Present a point of view about particular literary texts using appropriate metalanguage, and reflecting on the viewpoints of others'}, 
		ACELT1795: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Use metalanguage to describe the effects of ideas, text structures and language features on particular audiences'}, 
		ACELT1610: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Recognise that ideas in literary texts can be conveyed from different viewpoints, which can lead to different kinds of interpretations and responses'}, 
		ACELT1611: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Understand, interpret and experiment with sound devices and imagery, including simile, metaphor and personification, in narratives, shape poetry, songs, anthems and odes'}, 
		ACELT1612: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Create literary texts using realistic and fantasy settings and characters that draw on the worlds represented in texts students have experienced'}, 
		ACELT1798: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Create literary texts that experiment with structures, ideas and stylistic features of selected authors'}, 
		ACELY1698: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Show how ideas and points of view in texts are conveyed through the use of vocabulary, including idiomatic expressions, objective and subjective language, and that these can change according to context'}, 
		ACELY1699: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Clarify understanding of content as it unfolds in formal and informal situations, connecting ideas to students’ own experiences and present and justify a point of view'}, 
		ACELY1796: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Use interaction skills, for example paraphrasing, questioning and interpreting non-verbal cues and choose vocabulary and vocal effects appropriate for different audiences and purposes'}, 
		ACELY1700: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Plan, rehearse and deliver presentations for defined audiences and purposes incorporating accurate and sequenced content and multimodal elements'}, 
		ACELY1701: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Identify and explain characteristic text structures and language features used in imaginative, informative and persuasive texts to meet the purpose of the text'}, 
		ACELY1702: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Navigate and read texts for specific purposes applying appropriate text processing strategies, for example predicting and confirming, monitoring meaning, skimming and scanning'}, 
		ACELY1703: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Use comprehension strategies to analyse information, integrating and linking ideas from a variety of print and digital sources'}, 
		ACELY1704: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Plan, draft and publish imaginative, informative and persuasive print and multimodal texts, choosing text structures, language features, images and sound appropriate to purpose and audience'}, 
		ACELY1705: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Re-read and edit student’s own and others’ work using agreed criteria for text structures and language features'}, 
		ACELY1706: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Develop a handwriting style that is becoming legible, fluent and automatic'}, 
		ACELY1707: {isSet: false, curriculum: 'English', level: 'Year 5', linkDescription: 'Use a range of software including word processing programs with fluency to construct, edit and publish written text, and select, edit and place visual, print and audio elements'}, 
		ACELA1515: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Understand that different social and geographical dialects or accents are used in Australia in addition to Standard Australian English'}, 
		ACELA1516: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Understand that strategies for interaction become more complex and demanding as levels of formality and social distance increase'}, 
		ACELA1517: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Understand the uses of objective and subjective language and bias'}, 
		ACELA1518: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Understand how authors often innovate on text structures and play with language features to achieve particular aesthetic, humorous and persuasive purposes and effects'}, 
		ACELA1520: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Understand that cohesive links can be made in texts by omitting or replacing words'}, 
		ACELA1521: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Understand the uses of commas to separate clauses'}, 
		ACELA1522: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Investigate how complex sentences can be used in a variety of ways to elaborate, extend and explain ideas'}, 
		ACELA1523: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Understand how ideas can be expanded and sharpened through careful choice of verbs, elaborated tenses and a range of adverb groups/phrases'}, 
		ACELA1524: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Identify and explain how analytical images like figures, tables, diagrams, maps and graphs contribute to our understanding of verbal information in factual and persuasive texts'}, 
		ACELA1525: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Investigate how vocabulary choices, including evaluative language can express shades of meaning, feeling and opinion'}, 
		ACELA1526: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Understand how to use knowledge of known words, word origins including some Latin and Greek roots, base words, prefixes, suffixes, letter patterns and spelling generalisations to spell new words including technical words'}, 
		ACELA1830: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Understand how to use phonic knowledge and accumulated understandings about blending, letter-sound relationships, common and uncommon letter patterns and phonic generalisations to read and write increasingly complex words'}, 
		ACELT1613: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Make connections between students’ own experiences and those of characters and events represented in texts drawn from different historical, social and cultural contexts'}, 
		ACELT1614: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Analyse and evaluate similarities and differences in texts on similar topics, themes or plots'}, 
		ACELT1615: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Identify and explain how choices in language, for example modality, emphasis, repetition and metaphor, influence personal response to different texts'}, 
		ACELT1616: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Identify, describe, and discuss similarities and differences between texts, including those by the same author or illustrator, and evaluate characteristics that define an author’s individual style'}, 
		ACELT1617: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Identify the relationship between words, sounds, imagery and language patterns in narratives and poetry such as ballads, limericks and free verse'}, 
		ACELT1618: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Create literary texts that adapt or combine aspects of texts students have experienced in innovative ways'}, 
		ACELT1800: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Experiment with text structures and language features and their effects in creating literary texts, for example, using imagery, sentence variation, metaphor and word choice'}, 
		ACELY1708: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Compare texts including media texts that represent ideas and events in different ways, explaining the effects of the different approaches'}, 
		ACELY1709: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Participate in and contribute to discussions, clarifying and interrogating ideas, developing and supporting arguments, sharing and evaluating information, experiences and opinions'}, 
		ACELY1816: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Use interaction skills, varying conventions of spoken interactions such as voice volume, tone, pitch and pace, according to group size, formality of interaction and needs and expertise of the audience'}, 
		ACELY1710: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Plan, rehearse and deliver presentations, selecting and sequencing appropriate content and multimodal elements for defined audiences and purposes, making appropriate choices for modality and emphasis'}, 
		ACELY1711: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Analyse how text structures and language features work together to meet the purpose of a text'}, 
		ACELY1712: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Select, navigate and read texts for a range of purposes, applying appropriate text processing strategies and interpreting structural features, for example table of contents, glossary, chapters, headings and subheadings'}, 
		ACELY1713: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Use comprehension strategies to interpret and analyse information and ideas, comparing content from a variety of textual sources including media and digital texts'}, 
		ACELY1801: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Analyse strategies authors use to influence readers'}, 
		ACELY1714: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Plan, draft and publish imaginative, informative and persuasive texts, choosing and experimenting with text structures, language features, images and digital resources appropriate to purpose and audience'}, 
		ACELY1715: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Re-read and edit students’ own and others’ work using agreed criteria and explaining editing choices'}, 
		ACELY1716: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Develop a handwriting style that is legible, fluent and automatic and varies according to audience and purpose'}, 
		ACELY1717: {isSet: false, curriculum: 'English', level: 'Year 6', linkDescription: 'Use a range of software, including word processing programs, learning new functions as required to create texts'}, 
		ACELA1528: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Understand the way language evolves to reflect a changing world, particularly in response to the use of new technology for presenting texts and communicating'}, 
		ACELA1529: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Understand how accents, styles of speech and idioms express and create personal and social identities'}, 
		ACELA1782: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Understand how language is used to evaluate texts and how evaluations about a text can be substantiated by reference to the text and other sources'}, 
		ACELA1531: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Understand and explain how the text structures and language features of texts become more complex in informative and persuasive texts and identify underlying structures such as taxonomies, cause and effect, and extended metaphors'}, 
		ACELA1763: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Understand that the coherence of more complex texts relies on devices that signal text structure and guide readers, for example overviews, initial and concluding paragraphs and topic sentences, indexes or site maps or breadcrumb trails for online texts'}, 
		ACELA1532: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Understand the use of punctuation to support meaning in complex sentences with prepositional phrases and embedded clauses'}, 
		ACELA1534: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Recognise and understand that subordinate clauses embedded within noun groups/phrases are a common feature of written sentence structures and increase the density of information'}, 
		ACELA1536: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Understand how modality is achieved through discriminating choices in modal verbs, adverbs, adjectives and nouns'}, 
		ACELA1764: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Analyse how point of view is generated in visual texts by means of choices, for example gaze, angle and social distance'}, 
		ACELA1537: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Investigate vocabulary typical of extended and more academic texts and the role of abstract nouns, classification, description and generalisation in building specialised knowledge through language'}, 
		ACELA1539: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Understand how to use spelling rules and word origins, for example Greek and Latin roots, base words, suffixes, prefixes, spelling patterns and generalisations to learn new words and how to spell them'}, 
		ACELT1619: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Identify and explore ideas and viewpoints about events, issues and characters represented in texts drawn from different historical, social and cultural contexts'}, 
		ACELT1620: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Reflect on ideas and opinions about characters, settings and events in literary texts, identifying areas of agreement and difference with others and justifying a point of view'}, 
		ACELT1621: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Compare the ways that language and images are used to create character, and to influence emotions and opinions in different types of texts'}, 
		ACELT1803: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Discuss aspects of texts, for example their aesthetic and social value, using relevant and appropriate metalanguage'}, 
		ACELT1622: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Recognise and analyse the ways that characterisation, events and settings are combined in narratives, and discuss the purposes and appeal of different approaches'}, 
		ACELT1623: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Understand, interpret and discuss how language is compressed to produce a dramatic effect in film or drama, and to create layers of meaning in poetry, for example haiku, tankas, couplets, free verse and verse novels'}, 
		ACELT1625: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Create literary texts that adapt stylistic features encountered in other texts, for example, narrative viewpoint, structure of stanzas, contrast and juxtaposition'}, 
		ACELT1805: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Experiment with text structures and language features and their effects in creating literary texts, for example, using rhythm, sound effects, monologue, layout, navigation and colour'}, 
		ACELY1765: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Analyse and explain the effect of technological innovations on texts, particularly media texts'}, 
		ACELY1719: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Identify and discuss main ideas, concepts and points of view in spoken texts to evaluate qualities, for example the strength of an argument or the lyrical power of a poetic rendition'}, 
		ACELY1804: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Use interaction skills when discussing and presenting ideas and information, selecting body language, voice qualities and other elements, (for example music and sound) to add interest and meaning'}, 
		ACELY1720: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Plan, rehearse and deliver presentations, selecting and sequencing appropriate content and multimodal elements to promote a point of view or enable a new way of seeing'}, 
		ACELY1721: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Analyse and explain the ways text structures and language features shape meaning and vary according to audience and purpose'}, 
		ACELY1722: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Use prior knowledge and text processing strategies to interpret a range of types of texts'}, 
		ACELY1723: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Use comprehension strategies to interpret, analyse and synthesise ideas and information, critiquing ideas and issues from a variety of textual sources'}, 
		ACELY1724: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Compare the text structures and language features of multimodal texts, explaining how they combine to influence audiences'}, 
		ACELY1725: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Plan, draft and publish imaginative, informative and persuasive texts, selecting aspects of subject matter and particular language, visual, and audio features to convey information and ideas'}, 
		ACELY1726: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Edit for meaning by removing repetition, refining ideas, reordering sentences and adding or substituting words for impact'}, 
		ACELY1727: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Consolidate a personal handwriting style that is legible, fluent and automatic and supports writing for extended periods'}, 
		ACELY1728: {isSet: false, curriculum: 'English', level: 'Year 7', linkDescription: 'Use a range of software, including word processing programs, to confidently create, edit and publish written and multimodal texts'}, 
		ACELA1540: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Understand the influence and impact that the English language has had on other languages or dialects and how English has been influenced in return'}, 
		ACELA1541: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Understand how conventions of speech adopted by communities influence the identities of people in those communities'}, 
		ACELA1542: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Understand how rhetorical devices are used to persuade and how different layers of meaning are developed through the use of metaphor, irony and parody'}, 
		ACELA1543: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Analyse how the text structures and language features of persuasive texts, including media texts, vary according to the medium and mode of communication'}, 
		ACELA1766: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Understand how cohesion in texts is improved by strengthening the internal structure of paragraphs through the use of examples, quotations and substantiation of claims'}, 
		ACELA1809: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Understand how coherence is created in complex texts through devices like lexical cohesion, ellipsis, grammatical theme and text connectives'}, 
		ACELA1544: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Understand the use of punctuation conventions, including colons, semicolons, dashes and brackets in formal and informal texts'}, 
		ACELA1545: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Analyse and examine how effective authors control and use a variety of clause structures, including clauses embedded within the structure of a noun group/phrase or clause'}, 
		ACELA1546: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Understand the effect of nominalisation in the writing of informative and persuasive texts'}, 
		ACELA1548: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Investigate how visual and multimodal texts allude to or draw on other texts or images to enhance and layer meaning'}, 
		ACELA1547: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Recognise that vocabulary choices contribute to the specificity, abstraction and style of texts'}, 
		ACELA1549: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Understand how to apply learned knowledge consistently in order to spell accurately and to learn new words including nominalisations'}, 
		ACELT1626: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Explore the ways that ideas and viewpoints in literary texts drawn from different historical, social and cultural contexts may reflect or challenge the values of individuals and groups'}, 
		ACELT1806: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Explore the interconnectedness of Country/Place, People, Identity and Culture in texts including those by Aboriginal and Torres Strait Islander authors'}, 
		ACELT1627: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Share, reflect on, clarify and evaluate opinions and arguments about aspects of literary texts'}, 
		ACELT1628: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Understand and explain how combinations of words and images in texts are used to represent particular groups in society, and how texts position readers in relation to those groups'}, 
		ACELT1807: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Recognise and explain differing viewpoints about the world, cultures, individual people and concerns represented in texts'}, 
		ACELT1629: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Recognise, explain and analyse the ways literary texts draw on readers’ knowledge of other texts and enable new understanding and appreciation of aesthetic qualities'}, 
		ACELT1630: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Identify and evaluate devices that create tone, for example humour, wordplay, innuendo and parody in poetry, humorous prose, drama or visual texts'}, 
		ACELT1767: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Interpret and analyse language choices, including sentence patterns, dialogue, imagery and other language features, in short stories, literary essays and plays'}, 
		ACELT1632: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Create literary texts that draw upon text structures and language features of other texts for particular purposes and effects'}, 
		ACELT1768: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Experiment with particular language features drawn from different types of texts, including combinations of language and visual choices to create new texts'}, 
		ACELY1729: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Analyse and explain how language has evolved over time and how technology and the media have influenced language use and forms of communication'}, 
		ACELY1730: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Interpret the stated and implied meanings in spoken texts, and use evidence to support or challenge different perspectives'}, 
		ACELY1808: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Use interaction skills for identified purposes, using voice and language conventions to suit different situations, selecting vocabulary, modulating voice and using elements such as music, images and sound for specific effects'}, 
		ACELY1731: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Plan, rehearse and deliver presentations, selecting and sequencing appropriate content, including multimodal elements, to reflect a diversity of viewpoints'}, 
		ACELY1732: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Analyse and evaluate the ways that text structures and language features vary according to the purpose of the text and the ways that referenced sources add authority to a text'}, 
		ACELY1733: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Apply increasing knowledge of vocabulary, text structures and language features to understand the content of texts'}, 
		ACELY1734: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Use comprehension strategies to interpret and evaluate texts by reflecting on the validity of content and the credibility of sources, including finding evidence in the text for the author’s point of view'}, 
		ACELY1735: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Explore and explain the ways authors combine different modes and media in creating texts, and the impact of these choices on the viewer/listener'}, 
		ACELY1736: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Create imaginative, informative and persuasive texts that raise issues, report events and advance opinions, using deliberate language and textual choices, and including digital elements as appropriate'}, 
		ACELY1810: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Experiment with text structures and language features to refine and clarify ideas to improve the effectiveness of students’ own texts'}, 
		ACELY1738: {isSet: false, curriculum: 'English', level: 'Year 8', linkDescription: 'Use a range of software, including word processing programs, to create, edit and publish texts imaginatively'}, 
		ACELA1550: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Understand that Standard Australian English is a living language within which the creation and loss of words and the evolution of usage is ongoing'}, 
		ACELA1551: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Understand that roles and relationships are developed and challenged through language and interpersonal skills'}, 
		ACELA1552: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Investigate how evaluation can be expressed directly and indirectly using devices, for example allusion, evocative vocabulary and metaphor'}, 
		ACELA1553: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Understand that authors innovate with text structures and language for specific purposes and effects'}, 
		ACELA1770: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Compare and contrast the use of cohesive devices in texts, focusing on how they serve to signpost ideas, to make connections and to build semantic associations between ideas'}, 
		ACELA1556: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Understand how punctuation is used along with layout and font variations in constructing texts for different audiences and purposes'}, 
		ACELA1557: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Explain how authors creatively use the structures of sentences and clauses for particular effects'}, 
		ACELA1559: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Understand how certain abstract nouns can be used to summarise preceding or subsequent stretches of text'}, 
		ACELA1560: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Analyse and explain the use of symbols, icons and myth in still and moving images and how these augment meaning'}, 
		ACELA1561: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Identify how vocabulary choices contribute to specificity, abstraction and stylistic effectiveness'}, 
		ACELA1562: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Understand how spelling is used creatively in texts for particular effects, for example characterisation and humour and to represent accents and styles of speech'}, 
		ACELT1633: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Interpret and compare how representations of people and culture in literary texts are drawn from different historical, social and cultural contexts'}, 
		ACELT1771: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Present an argument about a literary text based on initial impressions and subsequent analysis of the whole text'}, 
		ACELT1634: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Reflect on, discuss and explore notions of literary value and how and why such notions vary according to context'}, 
		ACELT1635: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Explore and reflect on personal understanding of the world and significant human experience gained from interpreting various representations of life matters in texts'}, 
		ACELT1636: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Analyse texts from familiar and unfamiliar contexts, and discuss and evaluate their content and the appeal of an individual author’s literary style'}, 
		ACELT1637: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Investigate and experiment with the use and effect of extended metaphor, metonymy, allegory, icons, myths and symbolism in texts, for example poetry, short films, graphic novels, and plays on similar themes'}, 
		ACELT1772: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Analyse text structures and language features of literary texts, and make relevant comparisons with other texts'}, 
		ACELT1773: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Create literary texts, including hybrid texts, that innovate on aspects of other texts, for example by using parody, allusion and appropriation'}, 
		ACELT1638: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Experiment with the ways that language features, image and sound can be adapted in literary texts, for example the effects of stereotypical characters and settings, the playfulness of humour and pun and the use of hyperlink'}, 
		ACELY1739: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Analyse how the construction and interpretation of texts, including media texts, can be influenced by cultural perspectives and other texts'}, 
		ACELY1740: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Listen to spoken texts constructed for different purposes, for example to entertain and to persuade, and analyse how language features of these texts position listeners to respond in particular ways'}, 
		ACELY1811: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Use interaction skills to present and discuss an idea and to influence and engage an audience by selecting persuasive language, varying voice tone, pitch, and pace, and using elements such as music and sound effects'}, 
		ACELY1741: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Plan, rehearse and deliver presentations, selecting and sequencing appropriate content and multimodal elements for aesthetic and playful purposes'}, 
		ACELY1742: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Interpret, analyse and evaluate how different perspectives of issue, event, situation, individuals or groups are constructed to serve specific purposes in texts'}, 
		ACELY1743: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Apply an expanding vocabulary to read increasingly complex texts with fluency and comprehension'}, 
		ACELY1744: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Use comprehension strategies to interpret and analyse texts, comparing and evaluating representations of an event, issue, situation or character in different texts'}, 
		ACELY1745: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Explore and explain the combinations of language and visual choices that authors make to present information, opinions and perspectives in different texts'}, 
		ACELY1746: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Create imaginative, informative and persuasive texts that present a point of view and advance or illustrate arguments, including texts that integrate visual, print and/or audio features'}, 
		ACELY1747: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Review and edit students’ own and others’ texts to improve clarity and control over content, organisation, paragraphing, sentence structure, vocabulary and audio/visual features'}, 
		ACELY1748: {isSet: false, curriculum: 'English', level: 'Year 9', linkDescription: 'Use a range of software, including word processing programs, flexibly and imaginatively to publish texts'}, 
		ACELA1563: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Understand that Standard Australian English in its spoken and written forms has a history of evolution and change and continues to evolve'}, 
		ACELA1564: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Understand how language use can have inclusive and exclusive social effects, and can empower or disempower people'}, 
		ACELA1565: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Understand that people’s evaluations of texts are influenced by their value systems, the context and the purpose and mode of communication'}, 
		ACELA1566: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Compare the purposes, text structures and language features of traditional and contemporary texts in different media'}, 
		ACELA1567: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Understand how paragraphs and images can be arranged for different purposes, audiences, perspectives and stylistic effects'}, 
		ACELA1568: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Understand conventions for citing others, and how to reference these in different ways'}, 
		ACELA1569: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Analyse and evaluate the effectiveness of a wide range of sentence and clause structures as authors design and craft texts'}, 
		ACELA1570: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Analyse how higher order concepts are developed in complex texts through language features including nominalisation, clause combinations, technicality and abstraction'}, 
		ACELA1572: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Evaluate the impact on audiences of different choices in the representation of still and moving images'}, 
		ACELA1571: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Refine vocabulary choices to discriminate between shades of meaning, with deliberate attention to the effect on audiences'}, 
		ACELA1573: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Understand how to use knowledge of the spelling system to spell unusual and technical words accurately, for example those based on uncommon Greek and Latin roots'}, 
		ACELT1639: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Compare and evaluate a range of representations of individuals and groups in different historical, social and cultural contexts'}, 
		ACELT1640: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Reflect on, extend, endorse or refute others’ interpretations of and responses to literature'}, 
		ACELT1641: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Analyse and explain how text structures, language features and visual features of texts and the context in which texts are experienced may influence audience response'}, 
		ACELT1812: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Evaluate the social, moral and ethical positions represented in texts'}, 
		ACELT1642: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Identify, explain and discuss how narrative viewpoint, structure, characterisation and devices including analogy and satire shape different interpretations and responses to a text'}, 
		ACELT1643: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Compare and evaluate how ‘voice’ as a literary device can be used in a range of different types of texts such as poetry to evoke particular emotional responses'}, 
		ACELT1774: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Analyse and evaluate text structures and language features of literary texts and make relevant thematic and intertextual connections with other texts'}, 
		ACELT1814: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Create literary texts that reflect an emerging sense of personal style and evaluate the effectiveness of these texts'}, 
		ACELT1815: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Create literary texts with a sustained ‘voice’, selecting and adapting appropriate text structures, literary devices, language, auditory and visual structures and features for a specific purpose and intended audience'}, 
		ACELT1644: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Create imaginative texts that make relevant thematic and intertextual connections with other texts'}, 
		ACELY1749: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Analyse and evaluate how people, cultures, places, events, objects and concepts are represented in texts, including media texts, through language, structural and/or visual choices'}, 
		ACELY1750: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Identify and explore the purposes and effects of different text structures and language features of spoken texts, and use this knowledge to create purposeful texts that inform, persuade and engage'}, 
		ACELY1813: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Use organisation patterns, voice and language conventions to present a point of view on a subject, speaking clearly, coherently and with effect, using logic, imagery and rhetorical devices to engage audiences'}, 
		ACELY1751: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Plan, rehearse and deliver presentations, selecting and sequencing appropriate content and multimodal elements to influence a course of action'}, 
		ACELY1752: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Identify and analyse implicit or explicit values, beliefs and assumptions in texts and how these are influenced by purposes and likely audiences'}, 
		ACELY1753: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Choose a reading technique and reading path appropriate for the type of text, to retrieve and connect ideas within and between texts'}, 
		ACELY1754: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Use comprehension strategies to compare and contrast information within and between texts, identifying and analysing embedded perspectives, and evaluating supporting evidence'}, 
		ACELY1756: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Create sustained texts, including texts that combine specific digital or media content, for imaginative, informative, or persuasive purposes that reflect upon challenging and complex issues'}, 
		ACELY1757: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Review, edit and refine students’ own and others’ texts for control of content, organisation, sentence structure, vocabulary, and/or visual features to achieve particular purposes and effects'}, 
		ACELY1776: {isSet: false, curriculum: 'English', level: 'Year 10', linkDescription: 'Use a range of software, including word processing programs, confidently, flexibly and imaginatively to create, edit and publish texts, considering the identified purpose and the characteristics of the user'} 


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
		levelName: 'Year 10A',
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


export const ScienceCurriculumArray = () => [
	{
		levelName: 'Foundation Year',
		primaryTitles: [
			{
				primaryName: 'Science Understanding',
				secondaryTitles: [
					{
						secondaryName: 'Biological sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU002',
								linkDescription: 'Living things have basic needs, including food and water',
							}
						]
					},
					{
						secondaryName: 'Chemical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU003',
								linkDescription: 'Objects are made of materials that have observable properties',
							}
						]
					},
					{
						secondaryName: 'Earth and space sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU004',
								linkDescription: 'Daily and seasonal changes in our environment affect everyday life',
							}
						]
					},
					{
						secondaryName: 'Physical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU005',
								linkDescription: 'The way objects move depends on a variety of factors, including their size and shape',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science as a Human Endeavour',
				secondaryTitles: [
					{
						secondaryName: 'Nature and development of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE013',
								linkDescription: '',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science Inquiry Skills',
				secondaryTitles: [
					{
						secondaryName: 'Questioning and predicting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS014',
								linkDescription: 'Pose and respond to questions about familiar objects and events',
							}
						]
					},
					{
						secondaryName: 'Planning and conducting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS011',
								linkDescription: 'Participate in guided investigations and make observations using the senses',
							}
						]
					},
					{
						secondaryName: 'Processing and analysing data and information',
						linksToSecondary: [
							{
								linkCode: 'ACSIS233',
								linkDescription: 'Engage in discussions about observations and represent ideas',
							}
						]
					},
					{
						secondaryName: 'Communicating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS012',
								linkDescription: 'Share observations and ideas',
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
				primaryName: 'Science Understanding',
				secondaryTitles: [
					{
						secondaryName: 'Biological sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU017',
								linkDescription: 'Living things have a variety of external features',
							},
							{
								linkCode: 'ACSSU211',
								linkDescription: 'Living things live in different places where their needs are met',
							}
						]
					},
					{
						secondaryName: 'Chemical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU018',
								linkDescription: 'Everyday materials can be physically changed in a variety of ways',
							}
						]
					},
					{
						secondaryName: 'Earth and space sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU019',
								linkDescription: 'Observable changes occur in the sky and landscape',
							}
						]
					},
					{
						secondaryName: 'Physical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU020',
								linkDescription: 'Light and sound are produced by a range of sources and can be sensed',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science as a Human Endeavour',
				secondaryTitles: [
					{
						secondaryName: 'Nature and development of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE021',
								linkDescription: 'Science involves observing, asking questions about, and describing changes in, objects and events',
							}
						]
					},
					{
						secondaryName: 'Use and influence of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE022',
								linkDescription: 'People use science in their daily lives, including when caring for their environment and living things',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science Inquiry Skills',
				secondaryTitles: [
					{
						secondaryName: 'Questioning and predicting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS024',
								linkDescription: 'Pose and respond to questions, and make predictions about familiar objects and events',
							}
						]
					},
					{
						secondaryName: 'Planning and conducting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS025',
								linkDescription: 'Participate in guided investigations to explore and answer questions',
							},
							{
								linkCode: 'ACSIS026',
								linkDescription: 'Use informal measurements to collect and record observations, using digital technologies as appropriate',
							}
						]
					},
					{
						secondaryName: 'Processing and analysing data and information',
						linksToSecondary: [
							{
								linkCode: 'ACSIS027',
								linkDescription: 'Use a range of methods to sort information, including drawings and provided tables and through discussion, compare observations with predictions',
							}
						]
					},
					{
						secondaryName: 'Evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS213',
								linkDescription: 'Compare observations with those of others',
							}
						]
					},
					{
						secondaryName: 'Communicating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS029',
								linkDescription: 'Represent and communicate observations and ideas in a variety of ways',
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
				primaryName: 'Science Understanding',
				secondaryTitles: [
					{
						secondaryName: 'Biological sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU030',
								linkDescription: 'Living things grow, change and have offspring similar to themselves',
							}
						]
					},
					{
						secondaryName: 'Chemical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU031',
								linkDescription: 'Different materials can be combined for a particular purpose',
							}
						]
					},
					{
						secondaryName: 'Earth and space sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU032',
								linkDescription: 'Earth’s resources are used in a variety of ways',
							}
						]
					},
					{
						secondaryName: 'Physical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU033',
								linkDescription: 'A push or a pull affects how an object moves or changes shape',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science as a Human Endeavour',
				secondaryTitles: [
					{
						secondaryName: 'Nature and development of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE034',
								linkDescription: 'Science involves observing, asking questions about, and describing changes in, objects and events',
							}
						]
					},
					{
						secondaryName: 'Use and influence of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE035',
								linkDescription: 'People use science in their daily lives, including when caring for their environment and living things',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science Inquiry Skills',
				secondaryTitles: [
					{
						secondaryName: 'Questioning and predicting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS037',
								linkDescription: 'Pose and respond to questions, and make predictions about familiar objects and events',
							}
						]
					},
					{
						secondaryName: 'Planning and conducting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS038',
								linkDescription: 'Participate in guided investigations to explore and answer questions',
							},
							{
								linkCode: 'ACSIS039',
								linkDescription: 'Use informal measurements to collect and record observations, using digital technologies as appropriate',
							}
						]
					},
					{
						secondaryName: 'Processing and analysing data and information',
						linksToSecondary: [
							{
								linkCode: 'ACSIS040',
								linkDescription: 'Use a range of methods to sort information, including drawings and provided tables and through discussion, compare observations with predictions',
							}
						]
					},
					{
						secondaryName: 'Evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS041',
								linkDescription: 'Compare observations with those of others',
							}
						]
					},
					{
						secondaryName: 'Communicating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS042',
								linkDescription: 'Represent and communicate observations and ideas in a variety of ways',
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
				primaryName: 'Science Understanding',
				secondaryTitles: [
					{
						secondaryName: 'Biological sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU044',
								linkDescription: 'Living things can be grouped on the basis of observable features and can be distinguished from non-living things',
							}
						]
					},
					{
						secondaryName: 'Chemical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU046',
								linkDescription: 'A change of state between solid and liquid can be caused by adding or removing heat',
							}
						]
					},
					{
						secondaryName: 'Earth and space sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU048',
								linkDescription: 'Earth’s rotation on its axis causes regular changes, including night and day',
							}
						]
					},
					{
						secondaryName: 'Physical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU049',
								linkDescription: 'Heat can be produced in many ways and can move from one object to another',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science as a Human Endeavour',
				secondaryTitles: [
					{
						secondaryName: 'Nature and development of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE050',
								linkDescription: 'Science involves making predictions and describing patterns and relationships',
							}
						]
					},
					{
						secondaryName: 'Use and influence of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE051',
								linkDescription: 'Science knowledge helps people to understand the effect of their actions',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science Inquiry Skills',
				secondaryTitles: [
					{
						secondaryName: 'Questioning and predicting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS053',
								linkDescription: 'With guidance, identify questions in familiar contexts that can be investigated scientifically and make predictions based on prior knowledge',
							}
						]
					},
					{
						secondaryName: 'Planning and conducting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS054',
								linkDescription: 'With guidance, plan and conduct scientific investigations to find answers to questions, considering the safe use of appropriate materials and equipment',
							},
							{
								linkCode: 'ACSIS055',
								linkDescription: 'Consider the elements of fair tests and use formal measurements and digital technologies as appropriate, to make and record observations accurately',
							}
						]
					},
					{
						secondaryName: 'Processing and analysing data and information',
						linksToSecondary: [
							{
								linkCode: 'ACSIS057',
								linkDescription: 'Use a range of methods including tables and simple column graphs to represent data and to identify patterns and trends',
							},
							{
								linkCode: 'ACSIS215',
								linkDescription: 'Compare results with predictions, suggesting possible reasons for findings',
							}

						]
					},
					{
						secondaryName: 'Evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS058',
								linkDescription: 'Reflect on investigations, including whether a test was fair or not',
							}
						]
					},
					{
						secondaryName: 'Communicating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS060',
								linkDescription: 'Represent and communicate observations, ideas and findings using formal and informal representations',
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
				primaryName: 'Science Understanding',
				secondaryTitles: [
					{
						secondaryName: 'Biological sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU072',
								linkDescription: 'Living things have life cycles',
							},
							{
								linkCode: 'ACSSU073',
								linkDescription: 'Living things depend on each other and the environment to survive',
							}
						]
					},
					{
						secondaryName: 'Chemical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU074',
								linkDescription: 'Natural and processed materials have a range of physical properties that can influence their use',
							}
						]
					},
					{
						secondaryName: 'Earth and space sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU075',
								linkDescription: 'Earth’s surface changes over time as a result of natural processes and human activity',
							}
						]
					},
					{
						secondaryName: 'Physical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU076',
								linkDescription: 'Forces can be exerted by one object on another through direct contact or from a distance',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science as a Human Endeavour',
				secondaryTitles: [
					{
						secondaryName: 'Nature and development of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE061',
								linkDescription: 'Science involves making predictions and describing patterns and relationships',
							}
						]
					},
					{
						secondaryName: 'Use and influence of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE062',
								linkDescription: 'Science knowledge helps people to understand the effect of their actions',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science Inquiry Skills',
				secondaryTitles: [
					{
						secondaryName: 'Questioning and predicting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS064',
								linkDescription: 'With guidance, identify questions in familiar contexts that can be investigated scientifically and make predictions based on prior knowledge',
							}
						]
					},
					{
						secondaryName: 'Planning and conducting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS065',
								linkDescription: 'With guidance, plan and conduct scientific investigations to find answers to questions, considering the safe use of appropriate materials and equipment',
							},
							{
								linkCode: 'ACSIS066',
								linkDescription: 'Consider the elements of fair tests and use formal measurements and digital technologies as appropriate, to make and record observations accurately',
							}
						]
					},
					{
						secondaryName: 'Processing and analysing data and information',
						linksToSecondary: [
							{
								linkCode: 'ACSIS068',
								linkDescription: 'Use a range of methods including tables and simple column graphs to represent data and to identify patterns and trends',
							},
							{
								linkCode: 'ACSIS216',
								linkDescription: 'Compare results with predictions, suggesting possible reasons for findings',
							}
						]
					},
					{
						secondaryName: 'Evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS069',
								linkDescription: 'Reflect on investigations, including whether a test was fair or not',
							}
						]
					},
					{
						secondaryName: 'Communicating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS071',
								linkDescription: 'Represent and communicate observations, ideas and findings using formal and informal representations',
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
				primaryName: 'Science Understanding',
				secondaryTitles: [
					{
						secondaryName: 'Biological sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU043',
								linkDescription: 'Living things have structural features and adaptations that help them to survive in their environment',
							}
						]
					},
					{
						secondaryName: 'Chemical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU077',
								linkDescription: 'Solids, liquids and gases have different observable properties and behave in different ways',
							}
						]
					},
					{
						secondaryName: 'Earth and space sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU078',
								linkDescription: 'The Earth is part of a system of planets orbiting around a star (the sun)',
							}
						]
					},
					{
						secondaryName: 'Physical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU080',
								linkDescription: 'Light from a source forms shadows and can be absorbed, reflected and refracted',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science as a Human Endeavour',
				secondaryTitles: [
					{
						secondaryName: 'Nature and development of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE081',
								linkDescription: 'Science involves testing predictions by gathering data and using evidence to develop explanations of events and phenomena and reflects historical and cultural contributions',
							}
						]
					},
					{
						secondaryName: 'Use and influence of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE083',
								linkDescription: 'Scientific knowledge is used to solve problems and inform personal and community decisions',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science Inquiry Skills',
				secondaryTitles: [
					{
						secondaryName: 'Questioning and predicting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS231',
								linkDescription: 'With guidance, pose clarifying questions and make predictions about scientific investigations',
							}
						]
					},
					{
						secondaryName: 'Planning and conducting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS086',
								linkDescription: 'Identify, plan and apply the elements of scientific investigations to answer questions and solve problems using equipment and materials safely and identifying potential risks',
							},
							{
								linkCode: 'ACSIS087',
								linkDescription: 'Decide variables to be changed and measured in fair tests, and observe measure and record data with accuracy using digital technologies as appropriate',
							}
						]
					},
					{
						secondaryName: 'Processing and analysing data and information',
						linksToSecondary: [
							{
								linkCode: 'ACSIS090',
								linkDescription: 'Construct and use a range of representations, including tables and graphs, to represent and describe observations, patterns or relationships in data using digital technologies as appropriate',
							},
							{
								linkCode: 'ACSIS218',
								linkDescription: 'Compare data with predictions and use as evidence in developing explanations',
							}
						]
					},
					{
						secondaryName: 'Evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS091',
								linkDescription: 'Reflect on and suggest improvements to scientific investigations',
							}
						]
					},
					{
						secondaryName: 'Communicating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS093',
								linkDescription: 'Communicate ideas, explanations and processes using scientific representations in a variety of ways, including multi-modal texts',
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
				primaryName: 'Science Understanding',
				secondaryTitles: [
					{
						secondaryName: 'Biological sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU094',
								linkDescription: 'The growth and survival of living things are affected by physical conditions of their environment',
							}
						]
					},
					{
						secondaryName: 'Chemical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU095',
								linkDescription: 'Changes to materials can be reversible or irreversible',
							}
						]
					},
					{
						secondaryName: 'Earth and space sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU096',
								linkDescription: 'Sudden geological changes and extreme weather events can affect Earth’s surface',
							}
						]
					},
					{
						secondaryName: 'Physical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU097',
								linkDescription: 'Electrical energy can be transferred and transformed in electrical circuits and can be generated from a range of sources',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science as a Human Endeavour',
				secondaryTitles: [
					{
						secondaryName: 'Nature and development of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE098',
								linkDescription: 'Science involves testing predictions by gathering data and using evidence to develop explanations of events and phenomena and reflects historical and cultural contributions',
							}
						]
					},
					{
						secondaryName: 'Use and influence of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE100',
								linkDescription: 'Scientific knowledge is used to solve problems and inform personal and community decisions',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science Inquiry Skills',
				secondaryTitles: [
					{
						secondaryName: 'Questioning and predicting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS232',
								linkDescription: 'With guidance, pose clarifying questions and make predictions about scientific investigations',
							}
						]
					},
					{
						secondaryName: 'Planning and conducting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS103',
								linkDescription: 'Identify, plan and apply the elements of scientific investigations to answer questions and solve problems using equipment and materials safely and identifying potential risks',
							},
							{
								linkCode: 'ACSIS104',
								linkDescription: 'Decide variables to be changed and measured in fair tests, and observe measure and record data with accuracy using digital technologies as appropriate',
							}
						]
					},
					{
						secondaryName: 'Processing and analysing data and information',
						linksToSecondary: [
							{
								linkCode: 'ACSIS107',
								linkDescription: 'Construct and use a range of representations, including tables and graphs, to represent and describe observations, patterns or relationships in data using digital technologies as appropriate',
							},
							{
								linkCode: 'ACSIS221',
								linkDescription: 'Compare data with predictions and use as evidence in developing explanations',
							}
						]
					},
					{
						secondaryName: 'Evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS108',
								linkDescription: 'Reflect on and suggest improvements to scientific investigations',
							}
						]
					},
					{
						secondaryName: 'Communicating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS110',
								linkDescription: 'Communicate ideas, explanations and processes using scientific representations in a variety of ways, including multi-modal texts',
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
				primaryName: 'Science Understanding',
				secondaryTitles: [
					{
						secondaryName: 'Biological sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU111',
								linkDescription: 'Classification helps organise the diverse group of organisms',
							},
							{
								linkCode: 'ACSSU112',
								linkDescription: 'Interactions between organisms, including the effects of human activities can be represented by food chains and food webs',
							}
						]
					},
					{
						secondaryName: 'Chemical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU113',
								linkDescription: 'Mixtures, including solutions, contain a combination of pure substances that can be separated using a range of techniques',
							}
						]
					},
					{
						secondaryName: 'Earth and space sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU115',
								linkDescription: 'Predictable phenomena on Earth, including seasons and eclipses, are caused by the relative positions of the sun, Earth and the moon',
							},
							{
								linkCode: 'ACSSU116',
								linkDescription: 'Some of Earth’s resources are renewable, including water that cycles through the environment, but others are non-renewable',
							}
						]
					},
					{
						secondaryName: 'Physical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU117',
								linkDescription: 'Change to an object’s motion is caused by unbalanced forces, including Earth’s gravitational attraction, acting on the object',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science as a Human Endeavour',
				secondaryTitles: [
					{
						secondaryName: 'Nature and development of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE119',
								linkDescription: 'Scientific knowledge has changed peoples’ understanding of the world and is refined as new evidence becomes available',
							},
							{
								linkCode: 'ACSHE223',
								linkDescription: 'Science knowledge can develop through collaboration across the disciplines of science and the contributions of people from a range of cultures',
							}
						]
					},
					{
						secondaryName: 'Use and influence of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE120',
								linkDescription: 'Solutions to contemporary issues that are found using science and technology, may impact on other areas of society and may involve ethical considerations',
							},
							{
								linkCode: 'ACSHE121',
								linkDescription: 'People use science understanding and skills in their occupations and these have influenced the development of practices in areas of human activity',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science Inquiry Skills',
				secondaryTitles: [
					{
						secondaryName: 'Questioning and predicting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS124',
								linkDescription: 'Identify questions and problems that can be investigated scientifically and make predictions based on scientific knowledge',
							}
						]
					},
					{
						secondaryName: 'Planning and conducting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS125',
								linkDescription: 'Collaboratively and individually plan and conduct a range of investigation types, including fieldwork and experiments, ensuring safety and ethical guidelines are followed',
							},
							{
								linkCode: 'ACSIS126',
								linkDescription: 'Measure and control variables, select equipment appropriate to the task and collect data with accuracy',
							}
						]
					},
					{
						secondaryName: 'Processing and analysing data and information',
						linksToSecondary: [
							{
								linkCode: 'ACSIS129',
								linkDescription: 'Construct and use a range of representations, including graphs, keys and models to represent and analyse patterns or relationships in data using digital technologies as appropriate',
							},
							{
								linkCode: 'ACSIS130',
								linkDescription: 'Summarise data, from students’ own investigations and secondary sources, and use scientific understanding to identify relationships and draw conclusions based on evidence',
							}
						]
					},
					{
						secondaryName: 'Evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS131',
								linkDescription: 'Reflect on scientific investigations including evaluating the quality of the data collected, and identifying improvements',
							},
							{
								linkCode: 'ACSIS132',
								linkDescription: 'Use scientific knowledge and findings from investigations to evaluate claims based on evidence',
							}
						]
					},
					{
						secondaryName: 'Communicating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS133',
								linkDescription: 'Communicate ideas, findings and evidence based solutions to problems using scientific language, and representations, using digital technologies as appropriate',
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
				primaryName: 'Science Understanding',
				secondaryTitles: [
					{
						secondaryName: 'Biological sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU149',
								linkDescription: 'Cells are the basic units of living things; they have specialised structures and functions',
							},
							{
								linkCode: 'ACSSU150',
								linkDescription: 'Multi-cellular organisms contain systems of organs carrying out specialised functions that enable them to survive and reproduce',
							}
						]
					},
					{
						secondaryName: 'Chemical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU151',
								linkDescription: 'Properties of the different states of matter can be explained in terms of the motion and arrangement of particles',
							},
							{
								linkCode: 'ACSSU152',
								linkDescription: 'Differences between elements, compounds and mixtures can be described at a particle level',
							},
							{
								linkCode: 'ACSSU225',
								linkDescription: 'Chemical change involves substances reacting to form new substances',
							}
						]
					},
					{
						secondaryName: 'Earth and space sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU153',
								linkDescription: 'Sedimentary, igneous and metamorphic rocks contain minerals and are formed by processes that occur within Earth over a variety of timescales',
							}
						]
					},
					{
						secondaryName: 'Physical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU155',
								linkDescription: 'Energy appears in different forms, including movement (kinetic energy), heat and potential energy, and energy transformations and transfers cause change within systems',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science as a Human Endeavour',
				secondaryTitles: [
					{
						secondaryName: 'Nature and development of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE134',
								linkDescription: 'Scientific knowledge has changed peoples’ understanding of the world and is refined as new evidence becomes available',
							},
							{
								linkCode: 'ACSHE226',
								linkDescription: 'Science knowledge can develop through collaboration across the disciplines of science and the contributions of people from a range of cultures',
							}

						]
					},
					{
						secondaryName: 'Use and influence of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE135',
								linkDescription: 'Solutions to contemporary issues that are found using science and technology, may impact on other areas of society and may involve ethical considerations',
							},
							{
								linkCode: 'ACSHE136',
								linkDescription: 'People use science understanding and skills in their occupations and these have influenced the development of practices in areas of human activity',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science Inquiry Skills',
				secondaryTitles: [
					{
						secondaryName: 'Questioning and predicting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS139',
								linkDescription: 'Identify questions and problems that can be investigated scientifically and make predictions based on scientific knowledge',
							}
						]
					},
					{
						secondaryName: 'Planning and conducting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS140',
								linkDescription: 'Collaboratively and individually plan and conduct a range of investigation types, including fieldwork and experiments, ensuring safety and ethical guidelines are followed',
							},
							{
								linkCode: 'ACSIS141',
								linkDescription: 'Measure and control variables, select equipment appropriate to the task and collect data with accuracy',
							}
						]
					},
					{
						secondaryName: 'Processing and analysing data and information',
						linksToSecondary: [
							{
								linkCode: 'ACSIS144',
								linkDescription: 'Construct and use a range of representations, including graphs, keys and models to represent and analyse patterns or relationships in data using digital technologies as appropriate',
							},
							{
								linkCode: 'ACSIS145',
								linkDescription: 'Summarise data, from students’ own investigations and secondary sources, and use scientific understanding to identify relationships and draw conclusions based on evidence',
							}
						]
					},
					{
						secondaryName: 'Evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS146',
								linkDescription: 'Reflect on scientific investigations including evaluating the quality of the data collected, and identifying improvements',
							},
							{
								linkCode: 'ACSIS234',
								linkDescription: 'Use scientific knowledge and findings from investigations to evaluate claims based on evidence',
							}
						]
					},
					{
						secondaryName: 'Communicating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS148',
								linkDescription: 'Communicate ideas, findings and evidence based solutions to problems using scientific language, and representations, using digital technologies as appropriate',
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
				primaryName: 'Science Understanding',
				secondaryTitles: [
					{
						secondaryName: 'Biological sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU175',
								linkDescription: 'Multi-cellular organisms rely on coordinated and interdependent internal systems to respond to changes to their environment',
							},
							{
								linkCode: 'ACSSU176',
								linkDescription: 'Ecosystems consist of communities of interdependent organisms and abiotic components of the environment; matter and energy flow through these systems',
							}
						]
					},
					{
						secondaryName: 'Chemical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU177',
								linkDescription: 'All matter is made of atoms that are composed of protons, neutrons and electrons; natural radioactivity arises from the decay of nuclei in atoms',
							},
							{
								linkCode: 'ACSSU178',
								linkDescription: 'Chemical reactions involve rearranging atoms to form new substances; during a chemical reaction mass is not created or destroyed',
							},
							{
								linkCode: 'ACSSU179',
								linkDescription: 'Chemical reactions, including combustion and the reactions of acids, are important in both non-living and living systems and involve energy transfer',
							}
						]
					},
					{
						secondaryName: 'Earth and space sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU180',
								linkDescription: 'The theory of plate tectonics explains global patterns of geological activity and continental movement',
							}
						]
					},
					{
						secondaryName: 'Physical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU182',
								linkDescription: 'Energy transfer through different mediums can be explained using wave and particle models',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science as a Human Endeavour',
				secondaryTitles: [
					{
						secondaryName: 'Nature and development of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE157',
								linkDescription: 'Scientific understanding, including models and theories, is contestable and is refined over time through a process of review by the scientific community',
							},
							{
								linkCode: 'ACSHE158',
								linkDescription: 'Advances in scientific understanding often rely on technological advances and are often linked to scientific discoveries',
							}
						]
					},
					{
						secondaryName: 'Use and influence of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE160',
								linkDescription: 'People use scientific knowledge to evaluate whether they accept claims, explanations or predictions, and advances in science can affect people’s lives, including generating new career opportunities',
							},
							{
								linkCode: 'ACSHE228',
								linkDescription: 'Values and needs of contemporary society can influence the focus of scientific research',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science Inquiry Skills',
				secondaryTitles: [
					{
						secondaryName: 'Questioning and predicting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS164',
								linkDescription: 'Formulate questions or hypotheses that can be investigated scientifically',
							}
						]
					},
					{
						secondaryName: 'Planning and conducting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS165',
								linkDescription: 'Plan, select and use appropriate investigation types, including field work and laboratory experimentation, to collect reliable data; assess risk and address ethical issues associated with these methods',
							},
							{
								linkCode: 'ACSIS166',
								linkDescription: 'Select and use appropriate equipment, including digital technologies, to collect and record data systematically and accurately',
							}
						]
					},
					{
						secondaryName: 'Processing and analysing data and information',
						linksToSecondary: [
							{
								linkCode: 'ACSIS169',
								linkDescription: 'Analyse patterns and trends in data, including describing relationships between variables and identifying inconsistencies',
							},
							{
								linkCode: 'ACSIS170',
								linkDescription: 'Use knowledge of scientific concepts to draw conclusions that are consistent with evidence',
							}
						]
					},
					{
						secondaryName: 'Evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS171',
								linkDescription: 'Evaluate conclusions, including identifying sources of uncertainty and possible alternative explanations, and describe specific ways to improve the quality of the data',
							},
							{
								linkCode: 'ACSIS172',
								linkDescription: 'Critically analyse the validity of information in primary and secondary sources and evaluate the approaches used to solve problems',
							}
						]
					},
					{
						secondaryName: 'Communicating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS174',
								linkDescription: 'Communicate scientific ideas and information for a particular purpose, including constructing evidence-based arguments and using appropriate scientific language, conventions and representations',
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
				primaryName: 'Science Understanding',
				secondaryTitles: [
					{
						secondaryName: 'Biological sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU184',
								linkDescription: 'Transmission of heritable characteristics from one generation to the next involves DNA and genes',
							},
							{
								linkCode: 'ACSSU185',
								linkDescription: 'The theory of evolution by natural selection explains the diversity of living things and is supported by a range of scientific evidence',
							}
						]
					},
					{
						secondaryName: 'Chemical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU186',
								linkDescription: 'The atomic structure and properties of elements are used to organise them in the Periodic Table',
							},
							{
								linkCode: 'ACSSU187',
								linkDescription: 'Different types of chemical reactions are used to produce a range of products and can occur at different rates',
							}
						]
					},
					{
						secondaryName: 'Earth and space sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU188',
								linkDescription: 'The universe contains features including galaxies, stars and solar systems, and the Big Bang theory can be used to explain the origin of the universe',
							},
							{
								linkCode: 'ACSSU189',
								linkDescription: 'Global systems, including the carbon cycle, rely on interactions involving the biosphere, lithosphere, hydrosphere and atmosphere',
							}
						]
					},
					{
						secondaryName: 'Physical sciences',
						linksToSecondary: [
							{
								linkCode: 'ACSSU190',
								linkDescription: 'Energy conservation in a system can be explained by describing energy transfers and transformations',
							},
							{
								linkCode: 'ACSSU229',
								linkDescription: 'The motion of objects can be described and predicted using the laws of physics',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science as a Human Endeavour',
				secondaryTitles: [
					{
						secondaryName: 'Nature and development of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE191',
								linkDescription: 'Scientific understanding, including models and theories, is contestable and is refined over time through a process of review by the scientific community',
							},
							{
								linkCode: 'ACSHE192',
								linkDescription: 'Advances in scientific understanding often rely on technological advances and are often linked to scientific discoveries',
							}
						]
					},
					{
						secondaryName: 'Use and influence of science',
						linksToSecondary: [
							{
								linkCode: 'ACSHE194',
								linkDescription: 'People use scientific knowledge to evaluate whether they accept claims, explanations or predictions, and advances in science can affect people’s lives, including generating new career opportunities',
							},
							{
								linkCode: 'ACSHE230',
								linkDescription: 'Values and needs of contemporary society can influence the focus of scientific research',
							}
						]
					}
				]
			},
			{
				primaryName: 'Science Inquiry Skills',
				secondaryTitles: [
					{
						secondaryName: 'Questioning and predicting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS198',
								linkDescription: 'Formulate questions or hypotheses that can be investigated scientifically',
							}
						]
					},
					{
						secondaryName: 'Planning and conducting',
						linksToSecondary: [
							{
								linkCode: 'ACSIS199',
								linkDescription: 'Plan, select and use appropriate investigation types, including field work and laboratory experimentation, to collect reliable data; assess risk and address ethical issues associated with these methods',
							},
							{
								linkCode: 'ACSIS200',
								linkDescription: 'Select and use appropriate equipment, including digital technologies, to collect and record data systematically and accurately',
							}
						]
					},
					{
						secondaryName: 'Processing and analysing data and information',
						linksToSecondary: [
							{
								linkCode: 'ACSIS203',
								linkDescription: 'Analyse patterns and trends in data, including describing relationships between variables and identifying inconsistencies',
							},
							{
								linkCode: 'ACSIS204',
								linkDescription: 'Use knowledge of scientific concepts to draw conclusions that are consistent with evidence',
							}
						]
					},
					{
						secondaryName: 'Evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS205',
								linkDescription: 'Evaluate conclusions, including identifying sources of uncertainty and possible alternative explanations, and describe specific ways to improve the quality of the data',
							},
							{
								linkCode: 'ACSIS206',
								linkDescription: 'Critically analyse the validity of information in primary and secondary sources and evaluate the approaches used to solve problems',
							}
						]
					},
					{
						secondaryName: 'Communicating',
						linksToSecondary: [
							{
								linkCode: 'ACSIS208',
								linkDescription: 'Communicate scientific ideas and information for a particular purpose, including constructing evidence-based arguments and using appropriate scientific language, conventions and representations',
							}
						]
					}
				]
			}
		]
	}
]

export const EnglishCurriculumArray = () => [
	{
		levelName: 'Foundation Year',
		primaryTitles: [
			{
				primaryName: 'Language',
				secondaryTitles: [
					{
						secondaryName: 'Language variation and change',
						linksToSecondary: [
							{
								linkCode: 'ACELA1426',
								linkDescription: 'Understand that English is one of many languages spoken in Australia and that different languages may be spoken by family, classmates and community',
							}
						]
					},
					{
						secondaryName: 'Language for interaction',
						linksToSecondary: [
							{
								linkCode: 'ACELA1428',
								linkDescription: 'Explore how language is used differently at home and school depending on the relationships between people',
							},
							{
								linkCode: 'ACELA1429',
								linkDescription: 'Understand that language can be used to explore ways of expressing needs, likes and dislikes',
							}
						]
					},
					{
						secondaryName: 'Text structure and organisation',
						linksToSecondary: [
							{
								linkCode: 'ACELA1430',
								linkDescription: 'Understand that texts can take many forms, can be very short (for example an exit sign) or quite long (for example an information book or a film) and that stories and informative texts have different purposes',
							},
							{
								linkCode: 'ACELA1431',
								linkDescription: 'Understand that some language in written texts is unlike everyday spoken language',
							},
							{
								linkCode: 'ACELA1432',
								linkDescription: 'Understand that punctuation is a feature of written text different from letters; recognise how capital letters are used for names, and that capital letters and full stops signal the beginning and end of sentences',
							},
							{
								linkCode: 'ACELA1433',
								linkDescription: 'Understand concepts about print and screen, including how books, film and simple digital texts work, and know some features of print, for example directionality',
							}
						]
					},
					{
						secondaryName: 'Expressing and developing ideas',
						linksToSecondary: [
							{
								linkCode: 'ACELA1435',
								linkDescription: 'Recognise that sentences are key units for expressing ideas',
							},
							{
								linkCode: 'ACELA1434',
								linkDescription: 'Recognise that texts are made up of words and groups of words that make meaning',
							},
							{
								linkCode: 'ACELA1786',
								linkDescription: 'Explore the different contribution of words and images to meaning in stories and informative texts',
							},
							{
								linkCode: 'ACELA1437',
								linkDescription: 'Understand the use of vocabulary in familiar contexts related to everyday experiences, personal interests and topics taught at school',
							}
						]
					},
					{
						secondaryName: 'Phonics and word knowledge',
						linksToSecondary: [
							{
								linkCode: 'ACELA1439',
								linkDescription: 'Recognise and generate rhyming words, alliteration patterns, syllables and sounds (phonemes) in spoken words',
							},
							{
								linkCode: 'ACELA1440',
								linkDescription: 'Recognise and name all upper and lower case letters (graphemes) and know the most common sound that each letter represents',
							},
							{
								linkCode: 'ACELA1438',
								linkDescription: 'Understand how to use knowledge of letters and sounds including onset and rime to spell words',
							},
							{
								linkCode: 'ACELA1817',
								linkDescription: 'Know how to read and write some high-frequency words and other familiar words',
							},
							{
								linkCode: 'ACELA1818',
								linkDescription: 'Understand that words are units of meaning and can be made of more than one meaningful part',
							},
							{
								linkCode: 'ACELA1819',
								linkDescription: 'Segment sentences into individual words and orally blend and segment onset and rime in single syllable spoken words, and isolate, blend and manipulate phonemes in single syllable words',
							},
							{
								linkCode: 'ACELA1820',
								linkDescription: 'Write consonant-vowel-consonant (CVC) words by representing some sounds with the appropriate letters, and blend sounds associated with letters when reading CVC words',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literature',
				secondaryTitles: [
					{
						secondaryName: 'Literature and context',
						linksToSecondary: [
							{
								linkCode: 'ACELT1575',
								linkDescription: 'Recognise that texts are created by authors who tell stories and share experiences that may be similar or different to students’ own experiences',
							}
						]
					},
					{
						secondaryName: 'Responding to literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1577',
								linkDescription: 'Respond to texts, identifying favourite stories, authors and illustrators',
							},
							{
								linkCode: 'ACELT1783',
								linkDescription: 'Share feelings and thoughts about the events and characters in texts',
							}
						]
					},
					{
						secondaryName: 'Examining literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1578',
								linkDescription: 'Identify some features of texts including events and characters and retell events from a text',
							},
							{
								linkCode: 'ACELT1785',
								linkDescription: 'Recognise some different types of literary texts and identify some characteristic features of literary texts, for example beginnings and endings of traditional texts and rhyme in poetry',
							},
							{
								linkCode: 'ACELT1579',
								linkDescription: 'Replicate the rhythms and sound patterns in stories, rhymes, songs and poems from a range of cultures',
							}
						]
					},
					{
						secondaryName: 'Creating literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1580',
								linkDescription: 'Retell familiar literary texts through performance, use of illustrations and images',
							},
							{
								linkCode: 'ACELT1831',
								linkDescription: 'Innovate on familiar texts through play',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literacy',
				secondaryTitles: [
					{
						secondaryName: 'Texts in context',
						linksToSecondary: [
							{
								linkCode: 'ACELY1645',
								linkDescription: 'Identify some familiar texts and the contexts in which they are used',
							}
						]
					},
					{
						secondaryName: 'Interacting with others',
						linksToSecondary: [
							{
								linkCode: 'ACELY1646',
								linkDescription: 'Listen to and respond orally to texts and to the communication of others in informal and structured classroom situations',
							},
							{
								linkCode: 'ACELY1784',
								linkDescription: 'Use interaction skills including listening while others speak, using appropriate voice levels, articulation and body language, gestures and eye contact',
							},
							{
								linkCode: 'ACELY1647',
								linkDescription: 'Deliver short oral presentations to peers',
							}
						]
					},
					{
						secondaryName: 'Interpreting, analysing, evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACELY1648',
								linkDescription: 'Identify some differences between imaginative and informative texts',
							},
							{
								linkCode: 'ACELY1649',
								linkDescription: 'fluency, and monitor meaning using concepts about print and emerging contextual, semantic, grammatical and phonic knowledge',
							},
							{
								linkCode: 'ACELY1650',
								linkDescription: 'Use comprehension strategies to understand and discuss texts listened to, viewed or read independently',
							}
						]
					},
					{
						secondaryName: 'Creating texts',
						linksToSecondary: [
							{
								linkCode: 'ACELY1651',
								linkDescription: 'Create short texts to explore, record and report ideas and events using familiar words and beginning writing knowledge',
							},
							{
								linkCode: 'ACELY1652',
								linkDescription: 'Participate in shared editing of students’ own texts for meaning, spelling, capital letters and full stops',
							},
							{
								linkCode: 'ACELY1654',
								linkDescription: 'Construct texts using software including word processing programs',
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
				primaryName: 'Language',
				secondaryTitles: [
					{
						secondaryName: 'Language variation and change',
						linksToSecondary: [
							{
								linkCode: 'ACELA1443',
								linkDescription: 'Understand that people use different systems of communication to cater to different needs and purposes and that many people may use sign systems to communicate with others',
							}
						]
					},
					{
						secondaryName: 'Language for interaction',
						linksToSecondary: [
							{
								linkCode: 'ACELA1444',
								linkDescription: 'Understand that language is used in combination with other means of communication, for example facial expressions and gestures to interact with others',
							},
							{
								linkCode: 'ACELA1446',
								linkDescription: 'Understand that there are different ways of asking for information, making offers and giving commands',
							},
							{
								linkCode: 'ACELA1787',
								linkDescription: 'Explore different ways of expressing emotions, including verbal, visual, body language and facial expressions',
							}
						]
					},
					{
						secondaryName: 'Text structure and organisation',
						linksToSecondary: [
							{
								linkCode: 'ACELA1447',
								linkDescription: 'Understand that the purposes texts serve shape their structure in predictable ways',
							},
							{
								linkCode: 'ACELA1448',
								linkDescription: 'Understand patterns of repetition and contrast in simple texts',
							},
							{
								linkCode: 'ACELA1449',
								linkDescription: 'Recognise that different types of punctuation, including full stops, question marks and exclamation marks, signal sentences that make statements, ask questions, express emotion or give commands',
							},
							{
								linkCode: 'ACELA1450',
								linkDescription: 'Understand concepts about print and screen, including how different types of texts are organised using page numbering, tables of content, headings and titles, navigation buttons, bars and links',
							}
						]
					},
					{
						secondaryName: 'Expressing and developing ideas',
						linksToSecondary: [
							{
								linkCode: 'ACELA1451',
								linkDescription: 'Identify the parts of a simple sentence that represent ‘What’s happening?’, ‘What state is being described?’, ‘Who or what is involved?’ and the surrounding circumstances',
							},
							{
								linkCode: 'ACELA1452',
								linkDescription: 'Explore differences in words that represent people, places and things (nouns, including pronouns), happenings and states (verbs), qualities (adjectives) and details such as when, where and how (adverbs)',
							},
							{
								linkCode: 'ACELA1453',
								linkDescription: 'Compare different kinds of images in narrative and informative texts and discuss how they contribute to meaning',
							},
							{
								linkCode: 'ACELA1454',
								linkDescription: 'Understand the use of vocabulary in everyday contexts as well as a growing number of school contexts, including appropriate use of formal and informal terms of address in different contexts',
							}
						]
					},
					{
						secondaryName: 'Phonics and word knowledge',
						linksToSecondary: [
							{
								linkCode: 'ACELA1457',
								linkDescription: 'Manipulate phonemes in spoken words by addition, deletion and substitution of initial, medial and final phonemes to generate new words',
							},
							{
								linkCode: 'ACELA1458',
								linkDescription: 'Use short vowels, common long vowels, consonant digraphs and consonant blends when writing, and blend these to read single syllable words',
							},
							{
								linkCode: 'ACELA1459',
								linkDescription: 'Understand that a letter can represent more than one sound and that a syllable must contain a vowel sound',
							},
							{
								linkCode: 'ACELA1778',
								linkDescription: 'Understand how to spell one and two syllable words with common letter patterns',
							},
							{
								linkCode: 'ACELA1455',
								linkDescription: 'Recognise and know how to use simple grammatical morphemes to create word families',
							},
							{
								linkCode: 'ACELA1821',
								linkDescription: 'Use visual memory to read and write high-frequency words',
							},
							{
								linkCode: 'ACELA1822',
								linkDescription: 'Segment consonant blends or clusters into separate phonemes at the beginnings and ends of one syllable words',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literature',
				secondaryTitles: [
					{
						secondaryName: 'Literature and context',
						linksToSecondary: [
							{
								linkCode: 'ACELT1581',
								linkDescription: 'Discuss how authors create characters using language and images',
							}
						]
					},
					{
						secondaryName: 'Responding to literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1582',
								linkDescription: 'Discuss characters and events in a range of literary texts and share personal responses to these texts, making connections with students\' own experiences',
							},
							{
								linkCode: 'ACELT1583',
								linkDescription: 'Express preferences for specific texts and authors and listen to the opinions of others',
							}
						]
					},
					{
						secondaryName: 'Examining literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1584',
								linkDescription: 'Discuss features of plot, character and setting in different types of literature and explore some features of characters in different texts',
							},
							{
								linkCode: 'ACELT1585',
								linkDescription: 'Listen to, recite and perform poems, chants, rhymes and songs, imitating and inventing sound patterns including alliteration and rhyme',
							}
						]
					},
					{
						secondaryName: 'Creating literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1586',
								linkDescription: 'Recreate texts imaginatively using drawing, writing, performance and digital forms of communication',
							},
							{
								linkCode: 'ACELT1832',
								linkDescription: 'Innovate on familiar texts by using similar characters, repetitive patterns or vocabulary',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literacy',
				secondaryTitles: [
					{
						secondaryName: 'Texts in context',
						linksToSecondary: [
							{
								linkCode: 'ACELY1655',
								linkDescription: 'Respond to texts drawn from a range of cultures and experiences',
							}
						]
					},
					{
						secondaryName: 'Interacting with others',
						linksToSecondary: [
							{
								linkCode: 'ACELY1656',
								linkDescription: 'Engage in conversations and discussions, using active listening behaviours, showing interest, and contributing ideas, information and questions',
							},
							{
								linkCode: 'ACELY1788',
								linkDescription: 'Use interaction skills including turn-taking, recognising the contributions of others, speaking clearly and using appropriate volume and pace',
							},
							{
								linkCode: 'ACELY1657',
								linkDescription: 'Make short presentations using some introduced text structures and language, for example opening statements',
							}
						]
					},
					{
						secondaryName: 'Interpreting, analysing, evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACELY1658',
								linkDescription: 'Describe some differences between imaginative informative and persuasive texts',
							},
							{
								linkCode: 'ACELY1659',
								linkDescription: 'Read decodable and predictable texts using developing phrasing, fluency, contextual, semantic, grammatical and phonic knowledge and emerging text processing strategies, for example prediction, monitoring meaning and re-reading',
							},
							{
								linkCode: 'ACELY1660',
								linkDescription: 'Use comprehension strategies to build literal and inferred meaning about key events, ideas and information in texts that they listen to, view and read by drawing on growing knowledge of context, text structures and language features',
							}
						]
					},
					{
						secondaryName: 'Creating texts',
						linksToSecondary: [
							{
								linkCode: 'ACELY1661',
								linkDescription: 'Create short imaginative and informative texts that show emerging use of appropriate text structure, sentence-level grammar, word choice, spelling, punctuation and appropriate multimodal elements, for example illustrations and diagrams',
							},
							{
								linkCode: 'ACELY1662',
								linkDescription: 'Re-read student’s own texts and discuss possible changes to improve meaning, spelling and punctuation',
							},
							{
								linkCode: 'ACELY1663',
								linkDescription: 'Write using unjoined lower case and upper case letters',
							},
							{
								linkCode: 'ACELY1664',
								linkDescription: 'Construct texts that incorporate supporting images using software including word processing programs',
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
				primaryName: 'Language',
				secondaryTitles: [
					{
						secondaryName: 'Language variation and change',
						linksToSecondary: [
							{
								linkCode: 'ACELA1460',
								linkDescription: 'Understand that spoken, visual and written forms of language are different modes of communication with different features and their use varies according to the audience, purpose, context and cultural background',
							}
						]
					},
					{
						secondaryName: 'Language for interaction',
						linksToSecondary: [
							{
								linkCode: 'ACELA1461',
								linkDescription: 'Understand that language varies when people take on different roles in social and classroom interactions and how the use of key interpersonal language resources varies depending on context',
							},
							{
								linkCode: 'ACELA1462',
								linkDescription: 'Identify language that can be used for appreciating texts and the qualities of people and things',
							}
						]
					},
					{
						secondaryName: 'Text structure and organisation',
						linksToSecondary: [
							{
								linkCode: 'ACELA1463',
								linkDescription: 'Understand that different types of texts have identifiable text structures and language features that help the text serve its purpose',
							},
							{
								linkCode: 'ACELA1464',
								linkDescription: 'Understand how texts are made cohesive through language features, including word associations, synonyms, and antonyms',
							},
							{
								linkCode: 'ACELA1465',
								linkDescription: 'Recognise that capital letters signal proper nouns and commas are used to separate items in lists',
							},
							{
								linkCode: 'ACELA1466',
								linkDescription: 'Know some features of text organisation including page and screen layouts, alphabetical order, and different types of diagrams, for example timelines',
							}
						]
					},
					{
						secondaryName: 'Expressing and developing ideas',
						linksToSecondary: [
							{
								linkCode: 'ACELA1467',
								linkDescription: 'Understand that simple connections can be made between ideas by using a compound sentence with two or more clauses usually linked by a coordinating conjunction',
							},
							{
								linkCode: 'ACELA1468',
								linkDescription: 'Understand that verbs represent different processes, for example doing, thinking, saying, and relating and that these processes are anchored in time through tense',
							},
							{
								linkCode: 'ACELA1469',
								linkDescription: 'Identify visual representations of characters’ actions, reactions, speech and thought processes in narratives, and consider how these images add to or contradict or multiply the meaning of accompanying words',
							},
							{
								linkCode: 'ACELA1470',
								linkDescription: 'Understand the use of vocabulary about familiar and new topics and experiment with and begin to make conscious choices of vocabulary to suit audience and purpose',
							}
						]
					},
					{
						secondaryName: 'Phonics and word knowledge',
						linksToSecondary: [
							{
								linkCode: 'ACELA1474',
								linkDescription: 'Orally manipulate more complex sounds in spoken words through knowledge of blending and segmenting sounds, phoneme deletion and substitution in combination with use of letters in reading and writing',
							},
							{
								linkCode: 'ACELA1471',
								linkDescription: 'Understand how to use knowledge of digraphs, long vowels, blends and silent letters to spell one and two syllable words including some compound words',
							},
							{
								linkCode: 'ACELA1472',
								linkDescription: 'Build morphemic word families using knowledge of prefixes and suffixes',
							},
							{
								linkCode: 'ACELA1823',
								linkDescription: 'Use knowledge of letter patterns and morphemes to read and write high-frequency words and words whose spelling is not predictable from their sounds',
							},
							{
								linkCode: 'ACELA1824',
								linkDescription: 'Use most letter-sound matches including vowel digraphs, less common long vowel patterns, letter clusters and silent letters when reading and writing words of one or more syllable',
							},
							{
								linkCode: 'ACELA1825',
								linkDescription: 'Understand that a sound can be represented by various letter combinations',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literature',
				secondaryTitles: [
					{
						secondaryName: 'Literature and context',
						linksToSecondary: [
							{
								linkCode: 'ACELT1587',
								linkDescription: 'Discuss how depictions of characters in print, sound and images reflect the contexts in which they were created',
							}
						]
					},
					{
						secondaryName: 'Responding to literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1589',
								linkDescription: 'Compare opinions about characters, events and settings in and between texts',
							},
							{
								linkCode: 'ACELT1590',
								linkDescription: 'Identify aspects of different types of literary texts that entertain, and give reasons for personal preferences',
							}
						]
					},
					{
						secondaryName: 'Examining literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1591',
								linkDescription: 'Discuss the characters and settings of different texts and explore how language is used to present these features in different ways',
							},
							{
								linkCode: 'ACELT1592',
								linkDescription: 'Identify, reproduce and experiment with rhythmic, sound and word patterns in poems, chants, rhymes and songs',
							}
						]
					},
					{
						secondaryName: 'Creating literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1593',
								linkDescription: 'Create events and characters using different media that develop key events and characters from literary texts',
							},
							{
								linkCode: 'ACELT1833',
								linkDescription: 'Innovate on familiar texts by experimenting with character, setting or plot',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literacy',
				secondaryTitles: [
					{
						secondaryName: 'Texts in context',
						linksToSecondary: [
							{
								linkCode: 'ACELY1665',
								linkDescription: 'Discuss different texts on a similar topic, identifying similarities and differences between the texts',
							}
						]
					},
					{
						secondaryName: 'Interacting with others',
						linksToSecondary: [
							{
								linkCode: 'ACELY1666',
								linkDescription: 'Listen for specific purposes and information, including instructions, and extend students’ own and others’ ideas in discussions',
							},
							{
								linkCode: 'ACELY1789',
								linkDescription: 'Use interaction skills including initiating topics, making positive statements and voicing disagreement in an appropriate manner, speaking clearly and varying tone, volume and pace appropriately',
							},
							{
								linkCode: 'ACELY1667',
								linkDescription: 'Rehearse and deliver short presentations on familiar and new topics',
							}
						]
					},
					{
						secondaryName: 'Interpreting, analysing, evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACELY1668',
								linkDescription: 'Identify the audience of imaginative, informative and persuasive texts',
							},
							{
								linkCode: 'ACELY1669',
								linkDescription: 'Read less predictable texts with phrasing and fluency by combining contextual, semantic, grammatical and phonic knowledge using text processing strategies, for example monitoring meaning, predicting, rereading and self-correcting',
							},
							{
								linkCode: 'ACELY1670',
								linkDescription: 'Use comprehension strategies to build literal and inferred meaning and begin to analyse texts by drawing on growing knowledge of context, language and visual features and print and multimodal text structures',
							}
						]
					},
					{
						secondaryName: 'Creating texts',
						linksToSecondary: [
							{
								linkCode: 'ACELY1671',
								linkDescription: 'Create short imaginative, informative and persuasive texts using growing knowledge of text structures and language features for familiar and some less familiar audiences, selecting print and multimodal elements appropriate to the audience and purpose',
							},
							{
								linkCode: 'ACELY1672',
								linkDescription: 'Re-read and edit text for spelling, sentence-boundary punctuation and text structure',
							},
							{
								linkCode: 'ACELY1673',
								linkDescription: 'Write legibly and with growing fluency using unjoined upper case and lower case letters',
							},
							{
								linkCode: 'ACELY1674',
								linkDescription: 'Construct texts featuring print, visual and audio elements using software, including word processing programs',
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
				primaryName: 'Language',
				secondaryTitles: [
					{
						secondaryName: 'Language variation and change',
						linksToSecondary: [
							{
								linkCode: 'ACELA1475',
								linkDescription: 'Understand that languages have different written and visual communication systems, different oral traditions and different ways of constructing meaning',
							}
						]
					},
					{
						secondaryName: 'Language for interaction',
						linksToSecondary: [
							{
								linkCode: 'ACELA1476',
								linkDescription: 'Understand that successful cooperation with others depends on shared use of social conventions, including turn-taking patterns, and forms of address that vary according to the degree of formality in social situations',
							},
							{
								linkCode: 'ACELA1477',
								linkDescription: 'Examine how evaluative language can be varied to be more or less forceful',
							}
						]
					},
					{
						secondaryName: 'Text structure and organisation',
						linksToSecondary: [
							{
								linkCode: 'ACELA1478',
								linkDescription: 'Understand how different types of texts vary in use of language choices, depending on their purpose and context (for example, tense and types of sentences)',
							},
							{
								linkCode: 'ACELA1479',
								linkDescription: 'Understand that paragraphs are a key organisational feature of written texts',
							},
							{
								linkCode: 'ACELA1480',
								linkDescription: 'Know that word contractions are a feature of informal language and that apostrophes of contraction are used to signal missing letters',
							},
							{
								linkCode: 'ACELA1790',
								linkDescription: 'Identify the features of online texts that enhance navigation',
							}
						]
					},
					{
						secondaryName: 'Expressing and developing ideas',
						linksToSecondary: [
							{
								linkCode: 'ACELA1481',
								linkDescription: 'Understand that a clause is a unit of grammar usually containing a subject and a verb and that these need to be in agreement',
							},
							{
								linkCode: 'ACELA1482',
								linkDescription: 'Understand that verbs represent different processes, for example doing, thinking, saying, and relating and that these processes are anchored in time through tense',
							},
							{
								linkCode: 'ACELA1483',
								linkDescription: 'Identify the effect on audiences of techniques, for example shot size, vertical camera angle and layout in picture books, advertisements and film segments',
							},
							{
								linkCode: 'ACELA1484',
								linkDescription: 'Learn extended and technical vocabulary and ways of expressing opinion including modal verbs and adverbs',
							}
						]
					},
					{
						secondaryName: 'Phonics and word knowledge',
						linksToSecondary: [
							{
								linkCode: 'ACELA1485',
								linkDescription: 'Understand how to use letter-sound relationships and less common letter patterns to spell words',
							},
							{
								linkCode: 'ACELA1486',
								linkDescription: 'Recognise and know how to write most high frequency words including some homophones',
							},
							{
								linkCode: 'ACELA1826',
								linkDescription: 'Understand how to apply knowledge of letter-sound relationships, syllables, and blending and segmenting to fluently read and write multisyllabic words with more complex letter patterns',
							},
							{
								linkCode: 'ACELA1827',
								linkDescription: 'Know how to use common prefixes and suffixes, and generalisations for adding a suffix to a base word',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literature',
				secondaryTitles: [
					{
						secondaryName: 'Literature and context',
						linksToSecondary: [
							{
								linkCode: 'ACELT1594',
								linkDescription: 'Discuss texts in which characters, events and settings are portrayed in different ways, and speculate on the authors’ reasons',
							}
						]
					},
					{
						secondaryName: 'Responding to literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1596',
								linkDescription: 'Draw connections between personal experiences and the worlds of texts, and share responses with others',
							},
							{
								linkCode: 'ACELT1598',
								linkDescription: 'Develop criteria for establishing personal preferences for literature',
							}
						]
					},
					{
						secondaryName: 'Examining literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1599',
								linkDescription: 'Discuss how language is used to describe the settings in texts, and explore how the settings shape the events and influence the mood of the narrative',
							},
							{
								linkCode: 'ACELT1600',
								linkDescription: 'Discuss the nature and effects of some language devices used to enhance meaning and shape the reader’s reaction, including rhythm and onomatopoeia in poetry and prose',
							}
						]
					},
					{
						secondaryName: 'Creating literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1601',
								linkDescription: 'Create imaginative texts based on characters, settings and events from students’ own and other cultures using visual features, for example perspective, distance and angle',
							},
							{
								linkCode: 'ACELT1791',
								linkDescription: 'Create texts that adapt language features and patterns encountered in literary texts, for example characterisation, rhyme, rhythm, mood, music, sound effects and dialogue',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literacy',
				secondaryTitles: [
					{
						secondaryName: 'Texts in context',
						linksToSecondary: [
							{
								linkCode: 'ACELY1675',
								linkDescription: 'Identify the point of view in a text and suggest alternative points of view',
							}
						]
					},
					{
						secondaryName: 'Interacting with others',
						linksToSecondary: [
							{
								linkCode: 'ACELY1676',
								linkDescription: 'Listen to and contribute to conversations and discussions to share information and ideas and negotiate in collaborative situations',
							},
							{
								linkCode: 'ACELY1792',
								linkDescription: 'Use interaction skills, including active listening behaviours and communicate in a clear, coherent manner using a variety of everyday and learned vocabulary and appropriate tone, pace, pitch and volume',
							},
							{
								linkCode: 'ACELY1677',
								linkDescription: 'Plan and deliver short presentations, providing some key details in logical sequence',
							}
						]
					},
					{
						secondaryName: 'Interpreting, analysing, evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACELY1678',
								linkDescription: 'Identify the audience and purpose of imaginative, informative and persuasive texts',
							},
							{
								linkCode: 'ACELY1679',
								linkDescription: 'Read an increasing range of different types of texts by combining contextual, semantic, grammatical and phonic knowledge, using text processing strategies, for example monitoring, predicting, confirming, rereading, reading on and self-correcting',
							},
							{
								linkCode: 'ACELY1680',
								linkDescription: 'Use comprehension strategies to build literal and inferred meaning and begin to evaluate texts by drawing on a growing knowledge of context, text structures and language features',
							}
						]
					},
					{
						secondaryName: 'Creating texts',
						linksToSecondary: [
							{
								linkCode: 'ACELY1682',
								linkDescription: 'Plan, draft and publish imaginative, informative and persuasive texts demonstrating increasing control over text structures and language features and selecting print,and multimodal elements appropriate to the audience and purpose',
							},
							{
								linkCode: 'ACELY1683',
								linkDescription: 'Re-read and edit texts for meaning, appropriate structure, grammatical choices and punctuation',
							},
							{
								linkCode: 'ACELY1684',
								linkDescription: 'Write using joined letters that are clearly formed and consistent in size',
							},
							{
								linkCode: 'ACELY1685',
								linkDescription: 'Use software including word processing programs with growing speed and efficiency to construct and edit texts featuring visual, print and audio elements',
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
				primaryName: 'Language',
				secondaryTitles: [
					{
						secondaryName: 'Language variation and change',
						linksToSecondary: [
							{
								linkCode: 'ACELA1487',
								linkDescription: 'Understand that Standard Australian English is one of many social dialects used in Australia, and that while it originated in England it has been influenced by many other languages',
							}
						]
					},
					{
						secondaryName: 'Language for interaction',
						linksToSecondary: [
							{
								linkCode: 'ACELA1488',
								linkDescription: 'Understand that social interactions influence the way people engage with ideas and respond to others for example when exploring and clarifying the ideas of others, summarising their own views and reporting them to a larger group',
							},
							{
								linkCode: 'ACELA1489',
								linkDescription: 'Understand differences between the language of opinion and feeling and the language of factual reporting or recording',
							}
						]
					},
					{
						secondaryName: 'Text structure and organisation',
						linksToSecondary: [
							{
								linkCode: 'ACELA1490',
								linkDescription: 'Understand how texts vary in complexity and technicality depending on the approach to the topic, the purpose and the intended audience',
							},
							{
								linkCode: 'ACELA1491',
								linkDescription: 'Understand how texts are made cohesive through the use of linking devices including pronoun reference and text connectives',
							},
							{
								linkCode: 'ACELA1492',
								linkDescription: 'Recognise how quotation marks are used in texts to signal dialogue, titles and quoted (direct) speech',
							},
							{
								linkCode: 'ACELA1793',
								linkDescription: 'Identify features of online texts that enhance readability including text, navigation, links, graphics and layout',
							}
						]
					},
					{
						secondaryName: 'Expressing and developing ideas',
						linksToSecondary: [
							{
								linkCode: 'ACELA1493',
								linkDescription: 'Understand that the meaning of sentences can be enriched through the use of noun groups/phrases and verb groups/phrases and prepositional phrases',
							},
							{
								linkCode: 'ACELA1494',
								linkDescription: 'Investigate how quoted (direct) and reported (indirect) speech work in different types of text',
							},
							{
								linkCode: 'ACELA1495',
								linkDescription: 'Understand how adverb groups/phrases and prepositional phrases work in different ways to provide circumstantial details about an activity',
							},
							{
								linkCode: 'ACELA1496',
								linkDescription: 'Explore the effect of choices when framing an image, placement of elements in the image, and salience on composition of still and moving images in a range of types of texts',
							},
							{
								linkCode: 'ACELA1498',
								linkDescription: 'Incorporate new vocabulary from a range of sources into students’ own texts including vocabulary encountered in research',
							}
						]
					},
					{
						secondaryName: 'Phonics and word knowledge',
						linksToSecondary: [
							{
								linkCode: 'ACELA1779',
								linkDescription: 'Understand how to use knowledge of letter patterns including double letters, spelling generalisations, morphemic word families, common prefixes and suffixes and word origins to spell more complex words',
							},
							{
								linkCode: 'ACELA1780',
								linkDescription: 'Read and write a large core of high frequency words including homophones and know how to use context to identify correct spelling',
							},
							{
								linkCode: 'ACELA1828',
								linkDescription: 'Understand how to use phonic knowledge to read and write multisyllabic words with more complex letter combinations, including a variety of vowel sounds and known prefixes and suffixes',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literature',
				secondaryTitles: [
					{
						secondaryName: 'Literature and context',
						linksToSecondary: [
							{
								linkCode: 'ACELT1602',
								linkDescription: 'Make connections between the ways different authors may represent similar storylines, ideas and relationships',
							}
						]
					},
					{
						secondaryName: 'Responding to literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1603',
								linkDescription: 'Discuss literary experiences with others, sharing responses and expressing a point of view',
							},
							{
								linkCode: 'ACELT1604',
								linkDescription: 'Use metalanguage to describe the effects of ideas, text structures and language features of literary texts',
							}
						]
					},
					{
						secondaryName: 'Examining literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1605',
								linkDescription: 'Discuss how authors and illustrators make stories exciting, moving and absorbing and hold readers’ interest by using various techniques, for example character development and plot tension',
							},
							{
								linkCode: 'ACELT1606',
								linkDescription: 'Understand, interpret and experiment with a range of devices and deliberate word play in poetry and other literary texts, for example nonsense words, spoonerisms, neologisms and puns',
							}
						]
					},
					{
						secondaryName: 'Creating literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1607',
								linkDescription: 'Create literary texts that explore students’ own experiences and imagining',
							},
							{
								linkCode: 'ACELT1794',
								linkDescription: 'Create literary texts by developing storylines, characters and settings',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literacy',
				secondaryTitles: [
					{
						secondaryName: 'Texts in context',
						linksToSecondary: [
							{
								linkCode: 'ACELY1686',
								linkDescription: 'Identify and explain language features of texts from earlier times and compare with the vocabulary, images, layout and content of contemporary texts',
							}
						]
					},
					{
						secondaryName: 'Interacting with others',
						linksToSecondary: [
							{
								linkCode: 'ACELY1687',
								linkDescription: 'Interpret ideas and information in spoken texts and listen for key points in order to carry out tasks and use information to share and extend ideas and information',
							},
							{
								linkCode: 'ACELY1688',
								linkDescription: 'Use interaction skills such as acknowledging another’s point of view and linking students’ response to the topic, using familiar and new vocabulary and a range of vocal effects such as tone, pace, pitch and volume to speak clearly and coherently',
							},
							{
								linkCode: 'ACELY1689',
								linkDescription: 'Plan, rehearse and deliver presentations incorporating learned content and taking into account the particular purposes and audiences',
							}
						]
					},
					{
						secondaryName: 'Interpreting, analysing, evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACELY1690',
								linkDescription: 'Identify characteristic features used in imaginative, informative and persuasive texts to meet the purpose of the text',
							},
							{
								linkCode: 'ACELY1691',
								linkDescription: 'Read different types of texts by combining contextual , semantic, grammatical and phonic knowledge using text processing strategies for example monitoring meaning, cross checking and reviewing',
							},
							{
								linkCode: 'ACELY1692',
								linkDescription: 'Use comprehension strategies to build literal and inferred meaning to expand content knowledge, integrating and linking ideas and analysing and evaluating texts',
							}
						]
					},
					{
						secondaryName: 'Creating texts',
						linksToSecondary: [
							{
								linkCode: 'ACELY1694',
								linkDescription: 'Plan, draft and publish imaginative, informative and persuasive texts containing key information and supporting details for a widening range of audiences, demonstrating increasing control over text structures and language features',
							},
							{
								linkCode: 'ACELY1695',
								linkDescription: 'Re-read and edit for meaning by adding, deleting or moving words or word groups to improve content and structure',
							},
							{
								linkCode: 'ACELY1696',
								linkDescription: 'Write using clearly-formed joined letters, and develop increased fluency and automaticity',
							},
							{
								linkCode: 'ACELY1697',
								linkDescription: 'Use a range of software including word processing programs to construct, edit and publish written text, and select, edit and place visual, print and audio elements',
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
				primaryName: 'Language',
				secondaryTitles: [
					{
						secondaryName: 'Language variation and change',
						linksToSecondary: [
							{
								linkCode: 'ACELA1500',
								linkDescription: 'Understand that the pronunciation, spelling and meanings of words have histories and change over time',
							}
						]
					},
					{
						secondaryName: 'Language for interaction',
						linksToSecondary: [
							{
								linkCode: 'ACELA1501',
								linkDescription: 'Understand that patterns of language interaction vary across social contexts and types of texts and that they help to signal social roles and relationships',
							},
							{
								linkCode: 'ACELA1502',
								linkDescription: 'Understand how to move beyond making bare assertions and take account of differing perspectives and points of view',
							}
						]
					},
					{
						secondaryName: 'Text structure and organisation',
						linksToSecondary: [
							{
								linkCode: 'ACELA1504',
								linkDescription: 'Understand how texts vary in purpose, structure and topic as well as the degree of formality',
							},
							{
								linkCode: 'ACELA1505',
								linkDescription: 'Understand that the starting point of a sentence gives prominence to the message in the text and allows for prediction of how the text will unfold',
							},
							{
								linkCode: 'ACELA1506',
								linkDescription: 'Understand how the grammatical category of possessives is signalled through apostrophes and how to use apostrophes with common and proper nouns',
							},
							{
								linkCode: 'ACELA1797',
								linkDescription: 'Investigate how the organisation of texts into chapters, headings, subheadings, home pages and sub pages for online texts and according to chronology or topic can be used to predict content and assist navigation',
							}
						]
					},
					{
						secondaryName: 'Expressing and developing ideas',
						linksToSecondary: [
							{
								linkCode: 'ACELA1507',
								linkDescription: 'Understand the difference between main and subordinate clauses and that a complex sentence involves at least one subordinate clause',
							},
							{
								linkCode: 'ACELA1508',
								linkDescription: 'Understand how noun groups/phrases and adjective groups/phrases can be expanded in a variety of ways to provide a fuller description of the person, place, thing or idea',
							},
							{
								linkCode: 'ACELA1511',
								linkDescription: 'Explain sequences of images in print texts and compare these to the ways hyperlinked digital texts are organised, explaining their effect on viewers’ interpretations',
							},
							{
								linkCode: 'ACELA1512',
								linkDescription: 'Understand the use of vocabulary to express greater precision of meaning, and know that words can have different meanings in different contexts',
							}
						]
					},
					{
						secondaryName: 'Phonics and word knowledge',
						linksToSecondary: [
							{
								linkCode: 'ACELA1513',
								linkDescription: 'Understand how to use knowledge of known words, base words, prefixes and suffixes, word origins, letter patterns and spelling generalisations to spell new words',
							},
							{
								linkCode: 'ACELA1514',
								linkDescription: 'Explore less common plurals, and understand how a suffix changes the meaning or grammatical form of a word',
							},
							{
								linkCode: 'ACELA1829',
								linkDescription: 'Understand how to use phonic knowledge to read and write less familiar words that share common letter patterns but have different pronunciations',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literature',
				secondaryTitles: [
					{
						secondaryName: 'Literature and context',
						linksToSecondary: [
							{
								linkCode: 'ACELT1608',
								linkDescription: 'Identify aspects of literary texts that convey details or information about particular social, cultural and historical contexts',
							}
						]
					},
					{
						secondaryName: 'Responding to literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1609',
								linkDescription: 'Present a point of view about particular literary texts using appropriate metalanguage, and reflecting on the viewpoints of others',
							},
							{
								linkCode: 'ACELT1795',
								linkDescription: 'Use metalanguage to describe the effects of ideas, text structures and language features on particular audiences',
							}
						]
					},
					{
						secondaryName: 'Examining literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1610',
								linkDescription: 'Recognise that ideas in literary texts can be conveyed from different viewpoints, which can lead to different kinds of interpretations and responses',
							},
							{
								linkCode: 'ACELT1611',
								linkDescription: 'Understand, interpret and experiment with sound devices and imagery, including simile, metaphor and personification, in narratives, shape poetry, songs, anthems and odes',
							}
						]
					},
					{
						secondaryName: 'Creating literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1612',
								linkDescription: 'Create literary texts using realistic and fantasy settings and characters that draw on the worlds represented in texts students have experienced',
							},
							{
								linkCode: 'ACELT1798',
								linkDescription: 'Create literary texts that experiment with structures, ideas and stylistic features of selected authors',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literacy',
				secondaryTitles: [
					{
						secondaryName: 'Texts in context',
						linksToSecondary: [
							{
								linkCode: 'ACELY1698',
								linkDescription: 'Show how ideas and points of view in texts are conveyed through the use of vocabulary, including idiomatic expressions, objective and subjective language, and that these can change according to context',
							}
						]
					},
					{
						secondaryName: 'Interacting with others',
						linksToSecondary: [
							{
								linkCode: 'ACELY1699',
								linkDescription: 'Clarify understanding of content as it unfolds in formal and informal situations, connecting ideas to students’ own experiences and present and justify a point of view',
							},
							{
								linkCode: 'ACELY1796',
								linkDescription: 'Use interaction skills, for example paraphrasing, questioning and interpreting non-verbal cues and choose vocabulary and vocal effects appropriate for different audiences and purposes',
							},
							{
								linkCode: 'ACELY1700',
								linkDescription: 'Plan, rehearse and deliver presentations for defined audiences and purposes incorporating accurate and sequenced content and multimodal elements',
							}
						]
					},
					{
						secondaryName: 'Interpreting, analysing, evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACELY1701',
								linkDescription: 'Identify and explain characteristic text structures and language features used in imaginative, informative and persuasive texts to meet the purpose of the text',
							},
							{
								linkCode: 'ACELY1702',
								linkDescription: 'Navigate and read texts for specific purposes applying appropriate text processing strategies, for example predicting and confirming, monitoring meaning, skimming and scanning',
							},
							{
								linkCode: 'ACELY1703',
								linkDescription: 'Use comprehension strategies to analyse information, integrating and linking ideas from a variety of print and digital sources',
							}
						]
					},
					{
						secondaryName: 'Creating texts',
						linksToSecondary: [
							{
								linkCode: 'ACELY1704',
								linkDescription: 'Plan, draft and publish imaginative, informative and persuasive print and multimodal texts, choosing text structures, language features, images and sound appropriate to purpose and audience',
							},
							{
								linkCode: 'ACELY1705',
								linkDescription: 'Re-read and edit student’s own and others’ work using agreed criteria for text structures and language features',
							},
							{
								linkCode: 'ACELY1706',
								linkDescription: 'Develop a handwriting style that is becoming legible, fluent and automatic',
							},
							{
								linkCode: 'ACELY1707',
								linkDescription: 'Use a range of software including word processing programs with fluency to construct, edit and publish written text, and select, edit and place visual, print and audio elements',
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
				primaryName: 'Language',
				secondaryTitles: [
					{
						secondaryName: 'Language variation and change',
						linksToSecondary: [
							{
								linkCode: 'ACELA1515',
								linkDescription: 'Understand that different social and geographical dialects or accents are used in Australia in addition to Standard Australian English',
							}
						]
					},
					{
						secondaryName: 'Language for interaction',
						linksToSecondary: [
							{
								linkCode: 'ACELA1516',
								linkDescription: 'Understand that strategies for interaction become more complex and demanding as levels of formality and social distance increase',
							},
							{
								linkCode: 'ACELA1517',
								linkDescription: 'Understand the uses of objective and subjective language and bias',
							}
						]
					},
					{
						secondaryName: 'Text structure and organisation',
						linksToSecondary: [
							{
								linkCode: 'ACELA1518',
								linkDescription: 'Understand how authors often innovate on text structures and play with language features to achieve particular aesthetic, humorous and persuasive purposes and effects',
							},
							{
								linkCode: 'ACELA1520',
								linkDescription: 'Understand that cohesive links can be made in texts by omitting or replacing words',
							},
							{
								linkCode: 'ACELA1521',
								linkDescription: 'Understand the uses of commas to separate clauses',
							}
						]
					},
					{
						secondaryName: 'Expressing and developing ideas',
						linksToSecondary: [
							{
								linkCode: 'ACELA1522',
								linkDescription: 'Investigate how complex sentences can be used in a variety of ways to elaborate, extend and explain ideas',
							},
							{
								linkCode: 'ACELA1523',
								linkDescription: 'Understand how ideas can be expanded and sharpened through careful choice of verbs, elaborated tenses and a range of adverb groups/phrases',
							},
							{
								linkCode: 'ACELA1524',
								linkDescription: 'Identify and explain how analytical images like figures, tables, diagrams, maps and graphs contribute to our understanding of verbal information in factual and persuasive texts',
							},
							{
								linkCode: 'ACELA1525',
								linkDescription: 'Investigate how vocabulary choices, including evaluative language can express shades of meaning, feeling and opinion',
							}
						]
					},
					{
						secondaryName: 'Phonics and word knowledge',
						linksToSecondary: [
							{
								linkCode: 'ACELA1526',
								linkDescription: 'Understand how to use knowledge of known words, word origins including some Latin and Greek roots, base words, prefixes, suffixes, letter patterns and spelling generalisations to spell new words including technical words',
							},
							{
								linkCode: 'ACELA1830',
								linkDescription: 'Understand how to use phonic knowledge and accumulated understandings about blending, letter-sound relationships, common and uncommon letter patterns and phonic generalisations to read and write increasingly complex words',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literature',
				secondaryTitles: [
					{
						secondaryName: 'Literature and context',
						linksToSecondary: [
							{
								linkCode: 'ACELT1613',
								linkDescription: 'Make connections between students’ own experiences and those of characters and events represented in texts drawn from different historical, social and cultural contexts',
							}
						]
					},
					{
						secondaryName: 'Responding to literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1614',
								linkDescription: 'Analyse and evaluate similarities and differences in texts on similar topics, themes or plots',
							},
							{
								linkCode: 'ACELT1615',
								linkDescription: 'Identify and explain how choices in language, for example modality, emphasis, repetition and metaphor, influence personal response to different texts',
							}
						]
					},
					{
						secondaryName: 'Examining literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1616',
								linkDescription: 'Identify, describe, and discuss similarities and differences between texts, including those by the same author or illustrator, and evaluate characteristics that define an author’s individual style',
							},
							{
								linkCode: 'ACELT1617',
								linkDescription: 'Identify the relationship between words, sounds, imagery and language patterns in narratives and poetry such as ballads, limericks and free verse',
							}
						]
					},
					{
						secondaryName: 'Creating literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1618',
								linkDescription: 'Create literary texts that adapt or combine aspects of texts students have experienced in innovative ways',
							},
							{
								linkCode: 'ACELT1800',
								linkDescription: 'Experiment with text structures and language features and their effects in creating literary texts, for example, using imagery, sentence variation, metaphor and word choice',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literacy',
				secondaryTitles: [
					{
						secondaryName: 'Texts in context',
						linksToSecondary: [
							{
								linkCode: 'ACELY1708',
								linkDescription: 'Compare texts including media texts that represent ideas and events in different ways, explaining the effects of the different approaches',
							}
						]
					},
					{
						secondaryName: 'Interacting with others',
						linksToSecondary: [
							{
								linkCode: 'ACELY1709',
								linkDescription: 'Participate in and contribute to discussions, clarifying and interrogating ideas, developing and supporting arguments, sharing and evaluating information, experiences and opinions',
							},
							{
								linkCode: 'ACELY1816',
								linkDescription: 'Use interaction skills, varying conventions of spoken interactions such as voice volume, tone, pitch and pace, according to group size, formality of interaction and needs and expertise of the audience',
							},
							{
								linkCode: 'ACELY1710',
								linkDescription: 'Plan, rehearse and deliver presentations, selecting and sequencing appropriate content and multimodal elements for defined audiences and purposes, making appropriate choices for modality and emphasis',
							}
						]
					},
					{
						secondaryName: 'Interpreting, analysing, evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACELY1711',
								linkDescription: 'Analyse how text structures and language features work together to meet the purpose of a text',
							},
							{
								linkCode: 'ACELY1712',
								linkDescription: 'Select, navigate and read texts for a range of purposes, applying appropriate text processing strategies and interpreting structural features, for example table of contents, glossary, chapters, headings and subheadings',
							},
							{
								linkCode: 'ACELY1713',
								linkDescription: 'Use comprehension strategies to interpret and analyse information and ideas, comparing content from a variety of textual sources including media and digital texts',
							},
							{
								linkCode: 'ACELY1801',
								linkDescription: 'Analyse strategies authors use to influence readers',
							}
						]
					},
					{
						secondaryName: 'Creating texts',
						linksToSecondary: [
							{
								linkCode: 'ACELY1714',
								linkDescription: 'Plan, draft and publish imaginative, informative and persuasive texts, choosing and experimenting with text structures, language features, images and digital resources appropriate to purpose and audience',
							},
							{
								linkCode: 'ACELY1715',
								linkDescription: 'Re-read and edit students’ own and others’ work using agreed criteria and explaining editing choices',
							},
							{
								linkCode: 'ACELY1716',
								linkDescription: 'Develop a handwriting style that is legible, fluent and automatic and varies according to audience and purpose',
							},
							{
								linkCode: 'ACELY1717',
								linkDescription: 'Use a range of software, including word processing programs, learning new functions as required to create texts',
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
				primaryName: 'Language',
				secondaryTitles: [
					{
						secondaryName: 'Language variation and change',
						linksToSecondary: [
							{
								linkCode: 'ACELA1528',
								linkDescription: 'Understand the way language evolves to reflect a changing world, particularly in response to the use of new technology for presenting texts and communicating',
							}
						]
					},
					{
						secondaryName: 'Language for interaction',
						linksToSecondary: [
							{
								linkCode: 'ACELA1529',
								linkDescription: 'Understand how accents, styles of speech and idioms express and create personal and social identities',
							},
							{
								linkCode: 'ACELA1782',
								linkDescription: 'Understand how language is used to evaluate texts and how evaluations about a text can be substantiated by reference to the text and other sources',
							}
						]
					},
					{
						secondaryName: 'Text structure and organisation',
						linksToSecondary: [
							{
								linkCode: 'ACELA1531',
								linkDescription: 'Understand and explain how the text structures and language features of texts become more complex in informative and persuasive texts and identify underlying structures such as taxonomies, cause and effect, and extended metaphors',
							},
							{
								linkCode: 'ACELA1763',
								linkDescription: 'Understand that the coherence of more complex texts relies on devices that signal text structure and guide readers, for example overviews, initial and concluding paragraphs and topic sentences, indexes or site maps or breadcrumb trails for online texts',
							},
							{
								linkCode: 'ACELA1532',
								linkDescription: 'Understand the use of punctuation to support meaning in complex sentences with prepositional phrases and embedded clauses',
							}
						]
					},
					{
						secondaryName: 'Expressing and developing ideas',
						linksToSecondary: [
							{
								linkCode: 'ACELA1534',
								linkDescription: 'Recognise and understand that subordinate clauses embedded within noun groups/phrases are a common feature of written sentence structures and increase the density of information',
							},
							{
								linkCode: 'ACELA1536',
								linkDescription: 'Understand how modality is achieved through discriminating choices in modal verbs, adverbs, adjectives and nouns',
							},
							{
								linkCode: 'ACELA1764',
								linkDescription: 'Analyse how point of view is generated in visual texts by means of choices, for example gaze, angle and social distance',
							},
							{
								linkCode: 'ACELA1537',
								linkDescription: 'Investigate vocabulary typical of extended and more academic texts and the role of abstract nouns, classification, description and generalisation in building specialised knowledge through language',
							},
							{
								linkCode: 'ACELA1539',
								linkDescription: 'Understand how to use spelling rules and word origins, for example Greek and Latin roots, base words, suffixes, prefixes, spelling patterns and generalisations to learn new words and how to spell them',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literature',
				secondaryTitles: [
					{
						secondaryName: 'Literature and context',
						linksToSecondary: [
							{
								linkCode: 'ACELT1619',
								linkDescription: 'Identify and explore ideas and viewpoints about events, issues and characters represented in texts drawn from different historical, social and cultural contexts',
							}
						]
					},
					{
						secondaryName: 'Responding to literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1620',
								linkDescription: 'Reflect on ideas and opinions about characters, settings and events in literary texts, identifying areas of agreement and difference with others and justifying a point of view',
							},
							{
								linkCode: 'ACELT1621',
								linkDescription: 'Compare the ways that language and images are used to create character, and to influence emotions and opinions in different types of texts',
							},
							{
								linkCode: 'ACELT1803',
								linkDescription: 'Discuss aspects of texts, for example their aesthetic and social value, using relevant and appropriate metalanguage',
							}
						]
					},
					{
						secondaryName: 'Examining literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1622',
								linkDescription: 'Recognise and analyse the ways that characterisation, events and settings are combined in narratives, and discuss the purposes and appeal of different approaches',
							},
							{
								linkCode: 'ACELT1623',
								linkDescription: 'Understand, interpret and discuss how language is compressed to produce a dramatic effect in film or drama, and to create layers of meaning in poetry, for example haiku, tankas, couplets, free verse and verse novels',
							}
						]
					},
					{
						secondaryName: 'Creating literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1625',
								linkDescription: 'Create literary texts that adapt stylistic features encountered in other texts, for example, narrative viewpoint, structure of stanzas, contrast and juxtaposition',
							},
							{
								linkCode: 'ACELT1805',
								linkDescription: 'Experiment with text structures and language features and their effects in creating literary texts, for example, using rhythm, sound effects, monologue, layout, navigation and colour',
							}
						]
					}
				]
			},
			{
				primaryName: 'Literacy',
				secondaryTitles: [
					{
						secondaryName: 'Texts in context',
						linksToSecondary: [
							{
								linkCode: 'ACELY1765',
								linkDescription: 'Analyse and explain the effect of technological innovations on texts, particularly media texts',
							}
						]
					},
					{
						secondaryName: 'Interacting with others',
						linksToSecondary: [
							{
								linkCode: 'ACELY1719',
								linkDescription: 'Identify and discuss main ideas, concepts and points of view in spoken texts to evaluate qualities, for example the strength of an argument or the lyrical power of a poetic rendition',
							},
							{
								linkCode: 'ACELY1804',
								linkDescription: 'Use interaction skills when discussing and presenting ideas and information, selecting body language, voice qualities and other elements, (for example music and sound) to add interest and meaning',
							},
							{
								linkCode: 'ACELY1720',
								linkDescription: 'Plan, rehearse and deliver presentations, selecting and sequencing appropriate content and multimodal elements to promote a point of view or enable a new way of seeing',
							}
						]
					},
					{
						secondaryName: 'Interpreting, analysing, evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACELY1721',
								linkDescription: 'Analyse and explain the ways text structures and language features shape meaning and vary according to audience and purpose',
							},
							{
								linkCode: 'ACELY1722',
								linkDescription: 'Use prior knowledge and text processing strategies to interpret a range of types of texts',
							},
							{
								linkCode: 'ACELY1723',
								linkDescription: 'Use comprehension strategies to interpret, analyse and synthesise ideas and information, critiquing ideas and issues from a variety of textual sources',
							},
							{
								linkCode: 'ACELY1724',
								linkDescription: 'Compare the text structures and language features of multimodal texts, explaining how they combine to influence audiences',
							}
						]
					},
					{
						secondaryName: 'Creating texts',
						linksToSecondary: [
							{
								linkCode: 'ACELY1725',
								linkDescription: 'Plan, draft and publish imaginative, informative and persuasive texts, selecting aspects of subject matter and particular language, visual, and audio features to convey information and ideas',
							},
							{
								linkCode: 'ACELY1726',
								linkDescription: 'Edit for meaning by removing repetition, refining ideas, reordering sentences and adding or substituting words for impact',
							},
							{
								linkCode: 'ACELY1727',
								linkDescription: 'Consolidate a personal handwriting style that is legible, fluent and automatic and supports writing for extended periods',
							},
							{
								linkCode: 'ACELY1728',
								linkDescription: 'Use a range of software, including word processing programs, to confidently create, edit and publish written and multimodal texts',
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
				primaryName: 'Language',
				secondaryTitles: [
					{
						secondaryName: 'Language variation and change',
						linksToSecondary: [
							{
								linkCode: 'ACELA1540',
								linkDescription: 'Understand the influence and impact that the English language has had on other languages or dialects and how English has been influenced in return'
							}
						]
					},
					{
						secondaryName: 'Language for interaction',
						linksToSecondary: [
							{
								linkCode: 'ACELA1541',
								linkDescription: 'Understand how conventions of speech adopted by communities influence the identities of people in those communities'
							},
							{
								linkCode: 'ACELA1542',
								linkDescription: 'Understand how rhetorical devices are used to persuade and how different layers of meaning are developed through the use of metaphor, irony and parody'
							}
						]
					},
					{
						secondaryName: 'Text structure and organisation',
						linksToSecondary: [
							{
								linkCode: 'ACELA1543',
								linkDescription: 'Analyse how the text structures and language features of persuasive texts, including media texts, vary according to the medium and mode of communication'
							},
							{
								linkCode: 'ACELA1766',
								linkDescription: 'Understand how cohesion in texts is improved by strengthening the internal structure of paragraphs through the use of examples, quotations and substantiation of claims'
							},
							{
								linkCode: 'ACELA1809',
								linkDescription: 'Understand how coherence is created in complex texts through devices like lexical cohesion, ellipsis, grammatical theme and text connectives'
							},
							{
								linkCode: 'ACELA1544',
								linkDescription: 'Understand the use of punctuation conventions, including colons, semicolons, dashes and brackets in formal and informal texts'
							}
						]
					},
					{
						secondaryName: 'Expressing and developing ideas',
						linksToSecondary: [
							{
								linkCode: 'ACELA1545',
								linkDescription: 'Analyse and examine how effective authors control and use a variety of clause structures, including clauses embedded within the structure of a noun group/phrase or clause'
							},
							{
								linkCode: 'ACELA1546',
								linkDescription: 'Understand the effect of nominalisation in the writing of informative and persuasive texts'
							},
							{
								linkCode: 'ACELA1548',
								linkDescription: 'Investigate how visual and multimodal texts allude to or draw on other texts or images to enhance and layer meaning'
							},
							{
								linkCode: 'ACELA1547',
								linkDescription: 'Recognise that vocabulary choices contribute to the specificity, abstraction and style of texts'
							},
							{
								linkCode: 'ACELA1549',
								linkDescription: 'Understand how to apply learned knowledge consistently in order to spell accurately and to learn new words including nominalisations'
							}
						]
					}
				]
			},
			{
				primaryName: 'Literature',
				secondaryTitles: [
					{
						secondaryName: 'Literature and context',
						linksToSecondary: [
							{
								linkCode: 'ACELT1626',
								linkDescription: 'Explore the ways that ideas and viewpoints in literary texts drawn from different historical, social and cultural contexts may reflect or challenge the values of individuals and groups'
							},
							{
								linkCode: 'ACELT1806',
								linkDescription: 'Explore the interconnectedness of Country/Place, People, Identity and Culture in texts including those by Aboriginal and Torres Strait Islander authors'
							}
						]
					},
					{
						secondaryName: 'Responding to literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1627',
								linkDescription: 'Share, reflect on, clarify and evaluate opinions and arguments about aspects of literary texts'
							},
							{
								linkCode: 'ACELT1628',
								linkDescription: 'Understand and explain how combinations of words and images in texts are used to represent particular groups in society, and how texts position readers in relation to those groups'
							},
							{
								linkCode: 'ACELT1807',
								linkDescription: 'Recognise and explain differing viewpoints about the world, cultures, individual people and concerns represented in texts'
							}
						]
					},
					{
						secondaryName: 'Examining literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1629',
								linkDescription: 'Recognise, explain and analyse the ways literary texts draw on readers’ knowledge of other texts and enable new understanding and appreciation of aesthetic qualities'
							},
							{
								linkCode: 'ACELT1630',
								linkDescription: 'Identify and evaluate devices that create tone, for example humour, wordplay, innuendo and parody in poetry, humorous prose, drama or visual texts'
							},
							{
								linkCode: 'ACELT1767',
								linkDescription: 'Interpret and analyse language choices, including sentence patterns, dialogue, imagery and other language features, in short stories, literary essays and plays'
							}
						]
					},
					{
						secondaryName: 'Creating literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1632',
								linkDescription: 'Create literary texts that draw upon text structures and language features of other texts for particular purposes and effects'
							},
							{
								linkCode: 'ACELT1768',
								linkDescription: 'Experiment with particular language features drawn from different types of texts, including combinations of language and visual choices to create new texts'
							}
						]
					}
				]
			},
			{
				primaryName: 'Literacy',
				secondaryTitles: [
					{
						secondaryName: 'Texts in context',
						linksToSecondary: [
							{
								linkCode: 'ACELY1729',
								linkDescription: 'Analyse and explain how language has evolved over time and how technology and the media have influenced language use and forms of communication'
							}
						]
					},
					{
						secondaryName: 'Interacting with others',
						linksToSecondary: [
							{
								linkCode: 'ACELY1730',
								linkDescription: 'Interpret the stated and implied meanings in spoken texts, and use evidence to support or challenge different perspectives'
							},
							{
								linkCode: 'ACELY1808',
								linkDescription: 'Use interaction skills for identified purposes, using voice and language conventions to suit different situations, selecting vocabulary, modulating voice and using elements such as music, images and sound for specific effects'
							},
							{
								linkCode: 'ACELY1731',
								linkDescription: 'Plan, rehearse and deliver presentations, selecting and sequencing appropriate content, including multimodal elements, to reflect a diversity of viewpoints'
							}
						]
					},
					{
						secondaryName: 'Interpreting, analysing, evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACELY1732',
								linkDescription: 'Analyse and evaluate the ways that text structures and language features vary according to the purpose of the text and the ways that referenced sources add authority to a text'
							},
							{
								linkCode: 'ACELY1733',
								linkDescription: 'Apply increasing knowledge of vocabulary, text structures and language features to understand the content of texts'
							},
							{
								linkCode: 'ACELY1734',
								linkDescription: 'Use comprehension strategies to interpret and evaluate texts by reflecting on the validity of content and the credibility of sources, including finding evidence in the text for the author’s point of view'
							},
							{
								linkCode: 'ACELY1735',
								linkDescription: 'Explore and explain the ways authors combine different modes and media in creating texts, and the impact of these choices on the viewer/listener'
							}
						]
					},
					{
						secondaryName: 'Creating texts',
						linksToSecondary: [
							{
								linkCode: 'ACELY1736',
								linkDescription: 'Create imaginative, informative and persuasive texts that raise issues, report events and advance opinions, using deliberate language and textual choices, and including digital elements as appropriate'
							},
							{
								linkCode: 'ACELY1810',
								linkDescription: 'Experiment with text structures and language features to refine and clarify ideas to improve the effectiveness of students’ own texts'
							},
							{
								linkCode: 'ACELY1738',
								linkDescription: 'Use a range of software, including word processing programs, to create, edit and publish texts imaginatively'
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
				primaryName: 'Language',
				secondaryTitles: [
					{
						secondaryName: 'Language variation and change',
						linksToSecondary: [
							{
								linkCode: 'ACELA1550',
								linkDescription: 'Understand that Standard Australian English is a living language within which the creation and loss of words and the evolution of usage is ongoing'
							}
						]
					},
					{
						secondaryName: 'Language for interaction',
						linksToSecondary: [
							{
								linkCode: 'ACELA1551',
								linkDescription: 'Understand that roles and relationships are developed and challenged through language and interpersonal skills'
							},
							{
								linkCode: 'ACELA1552',
								linkDescription: 'Investigate how evaluation can be expressed directly and indirectly using devices, for example allusion, evocative vocabulary and metaphor'
							}
						]
					},
					{
						secondaryName: 'Text structure and organisation',
						linksToSecondary: [
							{
								linkCode: 'ACELA1553',
								linkDescription: 'Understand that authors innovate with text structures and language for specific purposes and effects'
							},
							{
								linkCode: 'ACELA1770',
								linkDescription: 'Compare and contrast the use of cohesive devices in texts, focusing on how they serve to signpost ideas, to make connections and to build semantic associations between ideas'
							},
							{
								linkCode: 'ACELA1556',
								linkDescription: 'Understand how punctuation is used along with layout and font variations in constructing texts for different audiences and purposes'
							}
						]
					},
					{
						secondaryName: 'Expressing and developing ideas',
						linksToSecondary: [
							{
								linkCode: 'ACELA1557',
								linkDescription: 'Explain how authors creatively use the structures of sentences and clauses for particular effects'
							},
							{
								linkCode: 'ACELA1559',
								linkDescription: 'Understand how certain abstract nouns can be used to summarise preceding or subsequent stretches of text'
							},
							{
								linkCode: 'ACELA1560',
								linkDescription: 'Analyse and explain the use of symbols, icons and myth in still and moving images and how these augment meaning'
							},
							{
								linkCode: 'ACELA1561',
								linkDescription: 'Identify how vocabulary choices contribute to specificity, abstraction and stylistic effectiveness'
							},
							{
								linkCode: 'ACELA1562',
								linkDescription: 'Understand how spelling is used creatively in texts for particular effects, for example characterisation and humour and to represent accents and styles of speech'
							}
						]
					}
				]
			},
			{
				primaryName: 'Literature',
				secondaryTitles: [
					{
						secondaryName: 'Literature and context',
						linksToSecondary: [
							{
								linkCode: 'ACELT1633',
								linkDescription: 'Interpret and compare how representations of people and culture in literary texts are drawn from different historical, social and cultural contexts'
							}
						]
					},
					{
						secondaryName: 'Responding to literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1771',
								linkDescription: 'Present an argument about a literary text based on initial impressions and subsequent analysis of the whole text'
							},
							{
								linkCode: 'ACELT1634',
								linkDescription: 'Reflect on, discuss and explore notions of literary value and how and why such notions vary according to context'
							},
							{
								linkCode: 'ACELT1635',
								linkDescription: 'Explore and reflect on personal understanding of the world and significant human experience gained from interpreting various representations of life matters in texts'
							}
						]
					},
					{
						secondaryName: 'Examining literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1636',
								linkDescription: 'Analyse texts from familiar and unfamiliar contexts, and discuss and evaluate their content and the appeal of an individual author’s literary style'
							},
							{
								linkCode: 'ACELT1637',
								linkDescription: 'Investigate and experiment with the use and effect of extended metaphor, metonymy, allegory, icons, myths and symbolism in texts, for example poetry, short films, graphic novels, and plays on similar themes'
							},
							{
								linkCode: 'ACELT1772',
								linkDescription: 'Analyse text structures and language features of literary texts, and make relevant comparisons with other texts'
							}
						]
					},
					{
						secondaryName: 'Creating literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1773',
								linkDescription: 'Create literary texts, including hybrid texts, that innovate on aspects of other texts, for example by using parody, allusion and appropriation'
							},
							{
								linkCode: 'ACELT1638',
								linkDescription: 'Experiment with the ways that language features, image and sound can be adapted in literary texts, for example the effects of stereotypical characters and settings, the playfulness of humour and pun and the use of hyperlink'
							}
						]
					}
				]
			},
			{
				primaryName: 'Literacy',
				secondaryTitles: [
					{
						secondaryName: 'Texts in context',
						linksToSecondary: [
							{
								linkCode: 'ACELY1739',
								linkDescription: 'Analyse how the construction and interpretation of texts, including media texts, can be influenced by cultural perspectives and other texts'
							}
						]
					},
					{
						secondaryName: 'Interacting with others',
						linksToSecondary: [
							{
								linkCode: 'ACELY1740',
								linkDescription: 'Listen to spoken texts constructed for different purposes, for example to entertain and to persuade, and analyse how language features of these texts position listeners to respond in particular ways'
							},
							{
								linkCode: 'ACELY1811',
								linkDescription: 'Use interaction skills to present and discuss an idea and to influence and engage an audience by selecting persuasive language, varying voice tone, pitch, and pace, and using elements such as music and sound effects'
							},
							{
								linkCode: 'ACELY1741',
								linkDescription: 'Plan, rehearse and deliver presentations, selecting and sequencing appropriate content and multimodal elements for aesthetic and playful purposes'
							}
						]
					},
					{
						secondaryName: 'Interpreting, analysing, evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACELY1742',
								linkDescription: 'Interpret, analyse and evaluate how different perspectives of issue, event, situation, individuals or groups are constructed to serve specific purposes in texts'
							},
							{
								linkCode: 'ACELY1743',
								linkDescription: 'Apply an expanding vocabulary to read increasingly complex texts with fluency and comprehension'
							},
							{
								linkCode: 'ACELY1744',
								linkDescription: 'Use comprehension strategies to interpret and analyse texts, comparing and evaluating representations of an event, issue, situation or character in different texts'
							},
							{
								linkCode: 'ACELY1745',
								linkDescription: 'Explore and explain the combinations of language and visual choices that authors make to present information, opinions and perspectives in different texts'
							}
						]
					},
					{
						secondaryName: 'Creating texts',
						linksToSecondary: [
							{
								linkCode: 'ACELY1746',
								linkDescription: 'Create imaginative, informative and persuasive texts that present a point of view and advance or illustrate arguments, including texts that integrate visual, print and/or audio features'
							},
							{
								linkCode: 'ACELY1747',
								linkDescription: 'Review and edit students’ own and others’ texts to improve clarity and control over content, organisation, paragraphing, sentence structure, vocabulary and audio/visual features'
							},
							{
								linkCode: 'ACELY1748',
								linkDescription: 'Use a range of software, including word processing programs, flexibly and imaginatively to publish texts'
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
				primaryName: 'Language',
				secondaryTitles: [
					{
						secondaryName: 'Language variation and change',
						linksToSecondary: [
							{
								linkCode: 'ACELA1563',
								linkDescription: 'Understand that Standard Australian English in its spoken and written forms has a history of evolution and change and continues to evolve'
							}
						]
					},
					{
						secondaryName: 'Language for interaction',
						linksToSecondary: [
							{
								linkCode: 'ACELA1564',
								linkDescription: 'Understand how language use can have inclusive and exclusive social effects, and can empower or disempower people'
							},
							{
								linkCode: 'ACELA1565',
								linkDescription: 'Understand that people’s evaluations of texts are influenced by their value systems, the context and the purpose and mode of communication'
							}
						]
					},
					{
						secondaryName: 'Text structure and organisation',
						linksToSecondary: [
							{
								linkCode: 'ACELA1566',
								linkDescription: 'Compare the purposes, text structures and language features of traditional and contemporary texts in different media'
							},
							{
								linkCode: 'ACELA1567',
								linkDescription: 'Understand how paragraphs and images can be arranged for different purposes, audiences, perspectives and stylistic effects'
							},
							{
								linkCode: 'ACELA1568',
								linkDescription: 'Understand conventions for citing others, and how to reference these in different ways'
							}
						]
					},
					{
						secondaryName: 'Expressing and developing ideas',
						linksToSecondary: [
							{
								linkCode: 'ACELA1569',
								linkDescription: 'Analyse and evaluate the effectiveness of a wide range of sentence and clause structures as authors design and craft texts'
							},
							{
								linkCode: 'ACELA1570',
								linkDescription: 'Analyse how higher order concepts are developed in complex texts through language features including nominalisation, clause combinations, technicality and abstraction'
							},
							{
								linkCode: 'ACELA1572',
								linkDescription: 'Evaluate the impact on audiences of different choices in the representation of still and moving images'
							},
							{
								linkCode: 'ACELA1571',
								linkDescription: 'Refine vocabulary choices to discriminate between shades of meaning, with deliberate attention to the effect on audiences'
							},
							{
								linkCode: 'ACELA1573',
								linkDescription: 'Understand how to use knowledge of the spelling system to spell unusual and technical words accurately, for example those based on uncommon Greek and Latin roots'
							}
						]
					}
				]
			},
			{
				primaryName: 'Literature',
				secondaryTitles: [
					{
						secondaryName: 'Literature and context',
						linksToSecondary: [
							{
								linkCode: 'ACELT1639',
								linkDescription: 'Compare and evaluate a range of representations of individuals and groups in different historical, social and cultural contexts'
							}
						]
					},
					{
						secondaryName: 'Responding to literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1640',
								linkDescription: 'Reflect on, extend, endorse or refute others’ interpretations of and responses to literature'
							},
							{
								linkCode: 'ACELT1641',
								linkDescription: 'Analyse and explain how text structures, language features and visual features of texts and the context in which texts are experienced may influence audience response'
							},
							{
								linkCode: 'ACELT1812',
								linkDescription: 'Evaluate the social, moral and ethical positions represented in texts'
							}
						]
					},
					{
						secondaryName: 'Examining literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1642',
								linkDescription: 'Identify, explain and discuss how narrative viewpoint, structure, characterisation and devices including analogy and satire shape different interpretations and responses to a text'
							},
							{
								linkCode: 'ACELT1643',
								linkDescription: 'Compare and evaluate how ‘voice’ as a literary device can be used in a range of different types of texts such as poetry to evoke particular emotional responses'
							},
							{
								linkCode: 'ACELT1774',
								linkDescription: 'Analyse and evaluate text structures and language features of literary texts and make relevant thematic and intertextual connections with other texts'
							}
						]
					},
					{
						secondaryName: 'Creating literature',
						linksToSecondary: [
							{
								linkCode: 'ACELT1814',
								linkDescription: 'Create literary texts that reflect an emerging sense of personal style and evaluate the effectiveness of these texts'
							},
							{
								linkCode: 'ACELT1815',
								linkDescription: 'Create literary texts with a sustained ‘voice’, selecting and adapting appropriate text structures, literary devices, language, auditory and visual structures and features for a specific purpose and intended audience'
							},
							{
								linkCode: 'ACELT1644',
								linkDescription: 'Create imaginative texts that make relevant thematic and intertextual connections with other texts'
							}
						]
					}
				]
			},
			{
				primaryName: 'Literacy',
				secondaryTitles: [
					{
						secondaryName: 'Texts in context',
						linksToSecondary: [
							{
								linkCode: 'ACELY1749',
								linkDescription: 'Analyse and evaluate how people, cultures, places, events, objects and concepts are represented in texts, including media texts, through language, structural and/or visual choices'
							}
						]
					},
					{
						secondaryName: 'Interacting with others',
						linksToSecondary: [
							{
								linkCode: 'ACELY1750',
								linkDescription: 'Identify and explore the purposes and effects of different text structures and language features of spoken texts, and use this knowledge to create purposeful texts that inform, persuade and engage'
							},
							{
								linkCode: 'ACELY1813',
								linkDescription: 'Use organisation patterns, voice and language conventions to present a point of view on a subject, speaking clearly, coherently and with effect, using logic, imagery and rhetorical devices to engage audiences'
							},
							{
								linkCode: 'ACELY1751',
								linkDescription: 'Plan, rehearse and deliver presentations, selecting and sequencing appropriate content and multimodal elements to influence a course of action'
							}
						]
					},
					{
						secondaryName: 'Interpreting, analysing, evaluating',
						linksToSecondary: [
							{
								linkCode: 'ACELY1752',
								linkDescription: 'Identify and analyse implicit or explicit values, beliefs and assumptions in texts and how these are influenced by purposes and likely audiences'
							},
							{
								linkCode: 'ACELY1753',
								linkDescription: 'Choose a reading technique and reading path appropriate for the type of text, to retrieve and connect ideas within and between texts'
							},
							{
								linkCode: 'ACELY1754',
								linkDescription: 'Use comprehension strategies to compare and contrast information within and between texts, identifying and analysing embedded perspectives, and evaluating supporting evidence'
							}
						]
					},
					{
						secondaryName: 'Creating texts',
						linksToSecondary: [
							{
								linkCode: 'ACELY1756',
								linkDescription: 'Create sustained texts, including texts that combine specific digital or media content, for imaginative, informative, or persuasive purposes that reflect upon challenging and complex issues'
							},
							{
								linkCode: 'ACELY1757',
								linkDescription: 'Review, edit and refine students’ own and others’ texts for control of content, organisation, sentence structure, vocabulary, and/or visual features to achieve particular purposes and effects'
							},
							{
								linkCode: 'ACELY1776',
								linkDescription: 'Use a range of software, including word processing programs, confidently, flexibly and imaginatively to create, edit and publish texts, considering the identified purpose and the characteristics of the user'
							}
						]
					}
				]
			}
		]
	}
]