import React from 'react';
import CheckboxList from './CheckboxList';
import { defaultLinks } from './CurriculumAddresses';
import AddResourcePopup from './AddResourcePopup';
import AddStructureSegmentPopup from './AddStructureSegmentPopup';
import AddCurriculumLinkPopup from './AddCurriculumLinkPopup';
import { Link } from 'react-router-dom';

export default class LessonForm extends React.Component {
	constructor(props) {
		super(props);

		this.maxDescriptionChar = 120;
		this.maxTitleChar = 60;
		this.displayedResourcePopup = "none";
		this.displayedStructurePopup = "none";
		this.displayedLinkPopup = "none";

		this.state = {
			title: props.lesson ? props.lesson.title : '',
			description: props.lesson ? props.lesson.description : '',
			level: props.lesson ? props.lesson.level : 'No levels provided',
			subjects: props.lesson ? props.lesson.subjects : 'No subjects provided',
			duration: props.lesson ? props.lesson.duration: 0,
			learningOutcomes: props.lesson ? props.lesson.learningOutcomes : '',
			resources: props.lesson ? props.lesson.resources : [],
			lessonStructure: props.lesson ? props.lesson.lessonStructure : [],
			curriculumLinks: props.lesson ? props.lesson.curriculumLinks : defaultLinks(),
			priorKnowledge: props.lesson ? props.lesson.priorKnowledge : '',
			descriptionRemainingChar: props.lesson ? this.maxDescriptionChar - props.lesson.description.length : this.maxDescriptionChar,
			titleRemainingChar: props.lesson ? this.maxTitleChar - props.lesson.title.length : this.maxTitleChar,
			error: false
		};

		this.lessonDuration = this.calculateLessonDuration(this.state.lessonStructure);
	};

	onTitleChange = (e) => {
		const title = e.target.value;
		const titleRemainingChar = this.maxTitleChar - title.length;
		if(titleRemainingChar >= 0)
		{
			this.setState(() => ({title, titleRemainingChar}));
		}
	};

	onDescriptionChange = (e) => {
		const description = e.target.value;
		const descriptionRemainingChar = this.maxDescriptionChar - description.length;
		if(descriptionRemainingChar >= 0)
		{
			this.setState(() => ({description, descriptionRemainingChar}));
		}
	};

	onLearningOutcomesChange = (e) => {
		const learningOutcomes = e.target.value;
		this.setState(() => ({learningOutcomes}));
	};

	onResourcesChange = (resourceObject, order) => {
		const resources = this.state.resources;
		switch (order) {
			case 'ADD_RESOURCE':
			{
				resources.push(resourceObject)
				this.setState(() => ({resources}));
				break;
			};
			case 'REMOVE_RESOURCE':
			{
				const index = resources.indexOf(resourceObject);
				resources.splice(index, 1);
				this.setState(() => ({resources}));
				break;
			};
		}
	};

	onStructureChange = (structureObject, order) => {
		const lessonStructure = this.state.lessonStructure;
		switch (order) {
			case 'ADD_STRUCTURE_SEGMENT':
			{
				lessonStructure.push(structureObject)
				this.setState(() => ({lessonStructure}));
				break;
			};
			case 'REMOVE_STRUCTURE_SEGMENT':
			{
				const index = lessonStructure.indexOf(structureObject);
				lessonStructure.splice(index, 1);
				this.setState(() => ({lessonStructure}));
				break;
			};
		}
		this.lessonDuration = this.calculateLessonDuration(this.state.lessonStructure);
	};

	onCurriculumLinkChange = (curriculumLinks) => {
		this.setState(() => ({curriculumLinks}))
		this.selectedLevels();
		this.selectedSubjects();
	}

	onDurationChange = (duration) => {
		this.setState(() => ({duration}))
	}

	onLevelChange = (level) => {
		this.setState(() => ({level}))
	}

	onSubjectChange = (subjects) => {
		this.setState(() => ({subjects}))
	}

	onPriorKnowledgeChange = (e) => {
		const priorKnowledge = e.target.value;
		this.setState(() => ({priorKnowledge}))
	}

	onInputFocus = (e) => {
		this.resetInfoBubbles();

		switch(e.target.placeholder) {
			case "Description":
				document.getElementById("description-bubble").style.opacity = 1;
				break;
			case "Learning Outcomes":
				document.getElementById("learning-outcomes-bubble").style.opacity = 1;
				break;
			case "Prior Knowledge":
				document.getElementById("prior-knowledge-bubble").style.opacity = 1;
				break;		
		}
	}

	resetInfoBubbles = () => {
		const displayInfoBubble = document.getElementsByClassName("info-bubble");
		for (let i = 0; i < displayInfoBubble.length; i++) {
			displayInfoBubble[i].style.opacity = 0;
		}
	}

	deleteResource = (e) => {
		e.preventDefault();
		const resourceToDelete = e.target.getAttribute('resourcename');
		this.onResourcesChange(resourceToDelete, "REMOVE_RESOURCE");	
	}

	addResourceClicked = (e) => {
		e.preventDefault();
		
	  	if(this.displayedResourcePopup === "none")
	  	{
	  		this.displayedResourcePopup = "block";
	  	} else if(this.displayedResourcePopup === "block")
	  	{
	  		this.displayedResourcePopup = "none";
	  	}
	  	this.forceUpdate();
	}

	addSegmentClicked = (e) => {
		e.preventDefault();

	  	if(this.displayedStructurePopup === "none")
	  	{
	  		this.displayedStructurePopup = "block";
	  	} else if(this.displayedStructurePopup === "block")
	  	{
	  		this.displayedStructurePopup = "none";
	  	}
	  	this.forceUpdate();
	}

	addLinkClicked = (e) => {
		e.preventDefault();

	  	if(this.displayedLinkPopup === "none")
	  	{
	  		this.displayedLinkPopup = "block";
	  	} else if(this.displayedLinkPopup === "block")
	  	{
	  		this.displayedLinkPopup = "none";
	  	}
	  	this.forceUpdate();
	}
	downloadFileClicked = (e) => {
		e.preventDefault();
		const selectedFileName = e.target.getAttribute('filename');					// cant pass whole file through attributes so reference the name from resources

		this.state.resources.map(resource => {
			if(resource.value.fileName === selectedFileName)
			{
				const selectedFile = resource.value.file;
				var blob = new Blob([selectedFile]);
				var objectURL = window.URL.createObjectURL(blob);
		        
		        var link = document.createElement('a');
		        link.href = objectURL;
		        link.download = selectedFile.name;
		        document.body.appendChild(link);
		        link.click();
		        link.remove();
			}
		})
	}
	calculateLessonDuration = (structure) => {
		let totalLessonDuration = 0;
		structure.forEach(segment => {
				totalLessonDuration += segment.duration
			}
		)
		this.onDurationChange(totalLessonDuration);
		return totalLessonDuration;
	}

	onlyTrueLinks = (links) => {
		if(links)
		{
			let linksArray = [];
			Object.keys(links).forEach(link => {
				if(links[link].isSet === true)
				{
					links[link].code = link;
					linksArray.push(links[link]);
				}
			});
			return linksArray;
		}
		return '';
	}
	selectedLevels = () => {
		let levelsString = '';
		const levelsArray = this.onlyTrueLinks(this.state.curriculumLinks).map(link => `${link.level}`);
		
		const unique = (value, index, self) => {
		  return self.indexOf(value) === index
		}

		const uniqueLevels = levelsArray.filter(unique);

		if(uniqueLevels.length === 0)
		{
			levelsString = 'No levels provided';
		} else {
			for(let i = 0; i < uniqueLevels.length; i++)
			{
				if(i === 0)
				{
					levelsString = `${uniqueLevels[i]} `
				} else {
					levelsString = levelsString.concat(`,${uniqueLevels[i]} `)
				}
			}
		}
		this.onLevelChange(levelsString);
	}
	selectedSubjects = () => {
		let subjectsString = '';
		const subjectsArray = this.onlyTrueLinks(this.state.curriculumLinks).map(link => `${link.curriculum}`);
		
		const unique = (value, index, self) => {
		  return self.indexOf(value) === index
		}

		const uniqueSubjects = subjectsArray.filter(unique);

		if(uniqueSubjects.length === 0)
		{
			subjectsString = 'No lsubjects provided';
		} else {
			for(let i = 0; i < uniqueSubjects.length; i++)
			{
				if(i === 0)
				{
					subjectsString = `${uniqueSubjects[i]} `
				} else {
					subjectsString = subjectsString.concat(`, ${uniqueSubjects[i]}`)
				}
			}
		}
		this.onSubjectChange(subjectsString);
	}
	onSubmit = (e) => {
		e.preventDefault();
		
		if(!this.state.title || !this.state.description || !this.state.learningOutcomes || !this.state.level || !this.state.subjects || !this.state.duration || !this.state.lessonStructure || !this.state.priorKnowledge) {
			this.setState(() => ({
				error: true
			}));
		} else {
			this.setState(() => ({
				error: false
			}));
			this.props.onSubmit({
				title: this.state.title,
				description: this.state.description,
				level: this.state.level,
				subjects: this.state.subjects,
				duration: this.state.duration,
				learningOutcomes: this.state.learningOutcomes,
				resources: this.state.resources,
				lessonStructure: this.state.lessonStructure,
				priorKnowledge: this.state.priorKnowledge,
				curriculumLinks: this.state.curriculumLinks
			});
		}
	};

	render() {
		return (
			<form className="form">
				<div className="page-body">
					<div className="content-container content-container--major">
						<div className="formLayout">
							<div className="list-body">
								<div className="list-item">
									<h3 className="list-item__title">Title:</h3>
									<input 
										type="text"
										placeholder="Title"
										autoFocus
										className="text-input"
										value={this.state.title}
										onChange={this.onTitleChange}
										onFocus={this.resetInfoBubbles}
									/>
									{this.state.error && !this.state.title ? <p className="form__error">*Please provde a title.</p> : ""}
									<p>Characters remaining: {this.state.titleRemainingChar}</p>
								</div>
								<div className="list-item">
									<h3 className="list-item__sub-title">Description:</h3>
									<div className="info-bubble" id="description-bubble">
										<div className="info-bubble-information">
											<p>Please provide a brief description about your lesson using 120 characters or less. This description will be the first thing people see when searching for lessons.</p>	
										</div>
									</div>
									<textarea 
										placeholder="Description"
										className="textarea"
										value={this.state.description}
										onChange={this.onDescriptionChange}
										onFocus={this.onInputFocus}
										onBlur={this.resetInfoBubbles}
									/>
									{this.state.error && !this.state.description ? <p className="form__error">*Please provde a brief description.</p> : ""}
									<p>Characters remaining: {this.state.descriptionRemainingChar}</p>
								</div>
								<div className="list-item list-item--multiple">
									<div className="list-item__pair">
										<h3 className="list-item__sub-title list-item__sub-title--left">Subject:</h3>
										<div className="list-item__text-with-border text-border--right">
											<p>
											{this.state.subjects}
											</p>
										</div>
									</div>
									<div className="list-item__pair">
										<h3 className="list-item__sub-title list-item__sub-title--left">Level:</h3>
										<div className="list-item__text-with-border text-border--right">
											<p>
											{this.state.level}
											</p>
										</div>
									</div>
									<div className="list-item__pair">
										<h3 className="list-item__sub-title list-item__sub-title--left">Lesson Duration:</h3>
										<div className="list-item__text-with-border text-border--right">
											<p onChange={this.onDurationChange}>{this.lessonDuration + " minutes"}</p>
										</div>
									</div>
								</div>
								<div className="list-item">
									<h3 className="list-item__sub-title">Learning Outcomes:</h3>
									<div className="info-bubble" id="learning-outcomes-bubble">
										<div className="info-bubble-information">
											<p>Learning outcomes are statements that describe the knowledge or skills students should acquire by the end of the lesson.</p>	
										</div>
									</div>
									<textarea 
										placeholder="Learning Outcomes"
										className="textarea"
										value={this.state.learningOutcomes}
										onChange={this.onLearningOutcomesChange}
										onFocus={this.onInputFocus}
										onBlur={this.resetInfoBubbles}
									/>
									{this.state.error && !this.state.learningOutcomes ? <p className="form__error">*Please provde a learning outcome.</p> : ""}
								</div>
								<div className="list-item">
									<h3 className="list-item__sub-title">Resources:</h3>
									<div className="list-item__table">
										{
											this.state.resources.map(resource => 
												<div className="list-item__table-segment-coloured">
													{ resource.type === 'file' ? 
													<p onClick={this.downloadFileClicked} filename={resource.value.file.name}>{resource.value.file.name}</p> :
													<a href={resource.value}>{resource.value}</a>
													}
													<button className="button" onClick={this.deleteResource} resourcename={resource.value}>Delete</button>
												</div>
											)
										}
									</div>
									<button className="button button-bottom" onClick={this.addResourceClicked}>Add Resource</button>
								</div>
								<div className="list-item">
									<h3 className="list-item__sub-title">Lesson Structure:</h3>
										<div className="list-item__table  no-background">
											{
												Object.keys(this.state.lessonStructure).length !== 0 ?
												<div className="list-item__table-row">
													<div className="list-item__table-segment flex-ratio-one">
														<p>Duration:</p>
													</div>
													<div className="list-item__table-segment flex-ratio-four">
														<p>Content:</p>
													</div>
													<div className="list-item__table-segment flex-ratio-two">
														<p>Materials:</p>
													</div>
												</div> : ""
											}
											{
												this.state.lessonStructure.map(segment => 
													<div className="list-item__table-row">
														<div className="list-item__table-segment flex-ratio-one">
															<p>{segment.duration + " minutes"}</p>
														</div>
														<div className="list-item__table-segment flex-ratio-four">
															<p>{segment.title + ': '}</p>
															<p>{segment.content}</p>
														</div>
														<div className="list-item__table-segment flex-ratio-two">
															<p>{segment.materials}</p>
														</div>
													</div>
												)
											}
									</div>
									<button className="button button-bottom" onClick={this.addSegmentClicked}>Add Structure Segment</button>
									{this.state.error && this.state.lessonStructure.length === 0 ? <p className="form__error">*Please provde a lesson structure.</p> : ""}
								</div>
								<div className="list-item">
									<h3 className="list-item__sub-title">Curriculum Links:</h3>
									{
										Object.keys(this.onlyTrueLinks(this.state.curriculumLinks)).length !== 0 ?
										<div className="list-item__text-with-border">
											{this.onlyTrueLinks(this.state.curriculumLinks).map(link => <p>- {link.linkDescription} <b>{' (' + link.code + ')'}</b></p>)}
										</div> : ""
									}
									<button className="button button-bottom" onClick={this.addLinkClicked}>Edit Curriculum Link</button>
									{this.state.error && Object.keys(this.onlyTrueLinks(this.state.curriculumLinks)).length === 0 ? <p className="form__error">*Please provde a curriculum link.</p> : ""}
								</div>
								<div className="list-item">
									<h3 className="list-item__sub-title">Prior Knowledge:</h3>
									<div className="info-bubble" id="prior-knowledge-bubble">
										<div className="info-bubble-information">
											<p>Prior knowledge are the prerequisite skills or understanding required before beginning this lesson.</p>	
										</div>
									</div>
									<textarea 
										placeholder="Prior Knowledge"
										className="textarea"
										value={this.state.priorKnowledge}
										onChange={this.onPriorKnowledgeChange}
										onFocus={this.onInputFocus}
										onBlur={this.resetInfoBubbles}
									/>
									{this.state.error && !this.state.priorKnowledge ? <p className="form__error">*Please provde prior knowledge.</p> : ""}
								</div>
								<div className="list-item">
									<button className="button" onClick={this.onSubmit}>Save Lesson Plan</button>
								</div>
							</div>
						</div>
					</div>
					{
						this.displayedResourcePopup === "none" ? "" : (
							<AddResourcePopup 
								backgroundClick={this.addResourceClicked} 
								changeResources={this.onResourcesChange}
							/>
						)
					}
					{
						this.displayedStructurePopup === "none" ? "" : (
							<AddStructureSegmentPopup 
								backgroundClick={this.addSegmentClicked} 
								changeResources={this.onStructureChange}
							/>
						)
					}
					{
						this.displayedLinkPopup === "none" ? "" : (
							<AddCurriculumLinkPopup 
								backgroundClick={this.addLinkClicked} 
								changeResources={this.onCurriculumLinkChange}
								curriculumLinks={this.state.curriculumLinks}
							/>
						)
					}
				</div>
			</form>
		);
	};
};