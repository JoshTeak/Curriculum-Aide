import React from 'react';
import { connect } from 'react-redux';
import CheckboxList from './CheckboxList';
import { defaultLinks } from './CurriculumAddresses';
import AddResourcePopup from './AddResourcePopup';
import AddStructureSegmentPopup from './AddStructureSegmentPopup';
import AddCurriculumLinkPopup from './AddCurriculumLinkPopup';
import { Link } from 'react-router-dom';
import {setCurriculumLinksFilter, resetFilter} from '../actions/filters';

class LessonForm extends React.Component {
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
			titleRemainingChar: props.lesson ? this.maxTitleChar - props.lesson.title.length : this.maxTitleChar,
			error: false,
			misclick: false,
			segmentToEdit: null
		};
		
		this.lessonDuration = this.calculateLessonDuration(this.state.lessonStructure);
		document.documentElement.style.overflow = "auto";
	};
	componentDidMount() {
		this.clearFilter();
	}

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
		this.setState(() => ({description}));
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
				let resourceIndex;
				resources.forEach((resource, index) => {
					if(resource.value === resourceObject)
					{
						resourceIndex = index;
					}
				})
				resources.splice(resourceIndex, 1);
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
				let segmentIndex;
				lessonStructure.forEach((segment, index) => {
					if(!!this.state.segmentToEdit && segment.content === this.state.segmentToEdit.content)
					{
						segmentIndex = index;
					}
				})
				if(this.state.segmentToEdit !== null)
				{
					lessonStructure.splice(segmentIndex, 1);
				}

				lessonStructure.push(structureObject)
				this.setState(() => ({lessonStructure, segmentToEdit: null}));
				break;
			};
			case 'REMOVE_STRUCTURE_SEGMENT':
			{
				let segmentIndex;
				lessonStructure.forEach((segment, index) => {
					if(segment.content === structureObject)
					{
						segmentIndex = index;
					}
				})
				lessonStructure.splice(segmentIndex, 1);

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
		this.props.setCurriculumLinksFilter(curriculumLinks);
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

	deleteSegment = (e) => {
		e.preventDefault();
		const segmentToDelete = e.target.getAttribute('segmentname');
		this.onStructureChange(segmentToDelete, "REMOVE_STRUCTURE_SEGMENT");	
	}

	addResourceClicked = (e) => {
		e.preventDefault();
		
	  	if(this.displayedResourcePopup === "none")
	  	{
	  		this.displayedResourcePopup = "block";
	  		document.documentElement.scrollTop = 317;
			document.documentElement.style.overflow = "hidden";
	  	} else if(this.displayedResourcePopup === "block")
	  	{
	  		this.displayedResourcePopup = "none";
	  		document.documentElement.style.overflow = "auto";
	  	}
	  	this.forceUpdate();
	}

	addSegmentClicked = (e) => {
		e.preventDefault();
	  	if(this.displayedStructurePopup === "none")
	  	{
	  		this.displayedStructurePopup = "block";
	  		document.documentElement.scrollTop = 317;
			document.documentElement.style.overflow = "hidden";
	  	} else if(this.displayedStructurePopup === "block")
	  	{
	  		this.displayedStructurePopup = "none";
	  		document.documentElement.style.overflow = "auto";
	  	}
	  	this.forceUpdate();
	}

	cancelSegment = (e) => {
		e.preventDefault();
	  	if(this.displayedStructurePopup === "none")
	  	{
	  		this.displayedStructurePopup = "block";
	  		document.documentElement.scrollTop = 317;
			document.documentElement.style.overflow = "hidden";
	  	} else if(this.displayedStructurePopup === "block")
	  	{
	  		this.setState({segmentToEdit: null})
	  		this.displayedStructurePopup = "none";
	  		document.documentElement.style.overflow = "auto";
	  	}
	  	this.forceUpdate();
	}

	editSegmentClicked = (e) => {
		e.preventDefault();
		const segmentEdit = e.target.getAttribute('segmentname');
		const lessonStructure = this.state.lessonStructure;
		let segmentIndex;
		lessonStructure.forEach((segment, index) => {
			if(segment.content === segmentEdit)
			{
				segmentIndex = index;
			}
		})

		if(this.displayedStructurePopup === "none")
	  	{
	  		this.displayedStructurePopup = "block";
	  		document.documentElement.scrollTop = 317;
			document.documentElement.style.overflow = "hidden";
	  	} else if(this.displayedStructurePopup === "block")
	  	{
	  		this.displayedStructurePopup = "none";
	  		document.documentElement.style.overflow = "auto";
	  	}
		this.setState(() => ({segmentToEdit: lessonStructure[segmentIndex]}));
	}

	addLinkClicked = (e) => {
		e.preventDefault();

	  	if(this.displayedLinkPopup === "none")
	  	{
	  		this.displayedLinkPopup = "block";
	  		document.documentElement.scrollTop = 317;
			document.documentElement.style.overflow = "hidden";
	  	} else if(this.displayedLinkPopup === "block")
	  	{
	  		this.displayedLinkPopup = "none";
	  		document.documentElement.style.overflow = "auto";
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
	misclick = () => {

		this.setState({misclick: true})
	}
	clearFilter = () => {
		this.props.resetFilter();
		this.props.setCurriculumLinksFilter(this.state.curriculumLinks);
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
	onDelete = (e) => {
		e.preventDefault();
		this.props.onDelete(this.props.lesson.id)
	}

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
											<p>Please provide a brief description about your lesson. This description will be the first thing people see when searching for lessons.</p>	
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
								</div>
								<div className="list-item list-item--multiple-breakable--space-between">
									<div className="list-item__pair-breakable" onClick={this.misclick}>
										<h3 className="list-item__sub-title list-item__sub-title--left">Subject:</h3>
										<div className="list-item__text-with-border text-border--right">
											<p>
											{this.state.subjects}
											</p>
										</div>
									</div>
									<div className="list-item__pair-breakable" onClick={this.misclick}>
										<h3 className="list-item__sub-title list-item__sub-title--left">Level:</h3>
										<div className="list-item__text-with-border text-border--right">
											<p>
											{this.state.level}
											</p>
										</div>
									</div>
									<div className="list-item__pair-breakable" onClick={this.misclick}>
										<h3 className="list-item__sub-title list-item__sub-title--left">Lesson Duration:</h3>
										<div className="list-item__text-with-border text-border--right">
											<p onChange={this.onDurationChange}>{this.lessonDuration + " minutes"}</p>
										</div>
									</div>
								</div>
								{this.state.misclick ? <p className="form__warning">*Subject, Level and Lesson Duration will be filled in automatically.</p> : ""}
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
												<div className="list-item__table-row-single">
													{ resource.type === 'file' ? 
													<p onClick={this.downloadFileClicked} filename={resource.value.file.name}>{resource.value.file.name}</p> :
													<a href={resource.value}>{resource.value}</a>
													}
													<div className="button-panel">
											            <button className="button button-tool" onClick={this.deleteResource}>
													        <div className="icon-container">
												                <img className="icon" src="/images/Cancel Close Circle.png" alt="Cancel Close Circle"/>
												            </div>
											            </button>
													</div>
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
													<div className="list-item__table-segment table-segment-one">
														<p>Duration:</p>
													</div>
													<div className="list-item__table-segment table-segment-two">
														<p>Content:</p>
													</div>
													<div className="list-item__table-segment table-segment-three">
														<p>Materials:</p>
													</div>
												</div> : ""
											}
											{
												this.state.lessonStructure.map(segment => 
													<div className="list-item__table-row">
														<div className="list-item__table-segment table-segment-one">
															<p>{segment.duration + " minutes"}</p>
														</div>
														<div className="list-item__table-segment table-segment-two">
															<p>{segment.title + ': '}</p>
															<p>{segment.content}</p>
														</div>
														<div className="list-item__table-segment table-segment-three">
															<p>{segment.materials}</p>
															<div className="button-panel">
													            <button className="button button-tool" onClick={this.deleteSegment} segmentname={segment.content}>
															        <div className="icon-container" segmentname={segment.content}>
														                <img className="icon" src="/images/Cancel Close Circle.png" alt="Cancel Close Circle" segmentname={segment.content}/>
														            </div>
													            </button>
													            <button className="button button-tool" onClick={this.editSegmentClicked} segmentname={segment.content}>
															        <div className="icon-container" segmentname={segment.content}>
														                <img className="icon" src="/images/Pencil 2.png" alt="Pencil 2" segmentname={segment.content}/>
														            </div>
													            </button>
													        </div>
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
								<div className="list-item list-item--multiple">
									<div className="list-item">
										<button className="button" onClick={this.onSubmit}>Save Lesson Plan</button>
									</div>
									{
										!!this.props.onDelete ? 
										<div className="list-item">
											<button className="button" onClick={this.onDelete}>Delete Lesson Plan</button>
										</div> : ''
									}
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
								cancel={this.cancelSegment}
								changeSegments={this.onStructureChange}
								segment={this.state.segmentToEdit}
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

const mapDispatchToProps = (dispatch) => ({
	setCurriculumLinksFilter: (curriculumLinks) => dispatch(setCurriculumLinksFilter(curriculumLinks)),
	resetFilter: () => dispatch(resetFilter())
});

export default connect(undefined, mapDispatchToProps)(LessonForm);