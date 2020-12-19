import React from 'react';
import CheckboxList from './CheckboxList';
import { defaultLinks } from './CurriculumAddresses';
import AddResourcePopup from './AddResourcePopup';

export default class LessonForm extends React.Component {
	constructor(props) {
		super(props);

		this.maxDescriptionChar = 50;
		this.isDisplayed = "none";

		this.state = {
			title: props.lesson ? props.lesson.title : '',
			description: props.lesson ? props.lesson.description : '',
			level: props.lesson ? props.lesson.level : '',
			duration: props.lesson ? props.lesson.duration: '',
			learningOutcomes: props.lesson ? props.lesson.learningOutcomes : '',
			resource: props.lesson ? props.lesson.resource : '',
			lessonStructure: props.lesson ? props.lesson.lessonStructure : '',
			curriculumLinks: props.lesson ? props.lesson.curriculumLinks : defaultLinks(),
			priorKnowledge: props.lesson ? props.lesson.priorKnowledge : '',
			descriptionRemainingChar: props.lesson ? this.maxDescriptionChar - props.lesson.description.length : this.maxDescriptionChar,
			error: ''
		};
	};

	onTitleChange = (e) => {
		const title = e.target.value;
		this.setState(() => ({title}));
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

	onResourceChange = (e) => {
		const resource = e.target.value;
		this.setState(() => ({resource}));
	};

	onCurriculumLinkChange = (e) => {
		Object.keys(this.state.curriculumLinks).forEach(key => {
			if(key === e.target.value)
			{
				this.state.curriculumLinks[key].isSet = e.target.checked;
				this.setState(() => (this.state.curriculumLinks));
			}
		});
	}

	onLevelChange = (e) => {
		const level = e.target.value;
		this.setState(() => ({level}))
	}

	onDurationChange = (e) => {
		const duration = e.target.value;
		this.setState(() => ({duration}))
	}

	onLessonStructureChange = (e) => {
		const lessonStructure = e.target.value;
		this.setState(() => ({lessonStructure}))
	}

	onPriorKnowledgeChange = (e) => {
		const priorKnowledge = e.target.value;
		this.setState(() => ({priorKnowledge}))
	}

	onSubmit = (e) => {
		e.preventDefault();

		if(!this.state.title || !this.state.description || !this.state.learningOutcomes || !this.state.resource || !this.state.level || !this.state.duration || !this.state.lessonStructure || !this.state.priorKnowledge) {
			this.setState(() => ({
				error: 'Please provde a title, learningOutcomes and resouce.'
			}));
		} else {
			this.setState(() => ({
				error: ''
			}));
			this.props.onSubmit({
				title: this.state.title,
				description: this.state.description,
				level: this.state.level,
				duration: this.state.duration,
				learningOutcomes: this.state.learningOutcomes,
				resource: this.state.resource,
				lessonStructure: this.state.lessonStructure,
				priorKnowledge: this.state.priorKnowledge,
				curriculumLinks: this.state.curriculumLinks
			});
		}
	};

	collapsibleSidebar = (e) => {
		e.preventDefault();

		const sidebar = document.getElementById("sidebar");

		if(sidebar.style.transform === "translateX(0px)")
		{
			sidebar.style.transform = "translateX(calc(1.6rem - 100%))";
			sidebar.style.position = "absolute";
		} else {
			sidebar.style.transform = "translateX(0px)";
			sidebar.style.position = "unset";
		}
	}

	addResourceClicked = (e) => {
		e.preventDefault();
		
	  	if(this.isDisplayed === "none")
	  	{
	  		this.isDisplayed = "block";
	  	} else if(this.isDisplayed === "block")
	  	{
	  		this.isDisplayed = "none";
	  	}
	  	this.forceUpdate();
	}

	render() {
		return (
			<form className="form">
				{this.state.error && <p className="form__error">{this.state.error}</p>}
				<div className="page-body">
					<div className="content-container content-container--minor">
						<div className="collapsibleSidebar" id="sidebar">
							<div className="filter">
								<div className="input-group">
									<div className="input-group__item">
										<CheckboxList
											onChangeFunction={this.onCurriculumLinkChange}
											curriculumLinks={this.state.curriculumLinks}
										/>
									</div>
								</div>	
							</div>
							<button className="collapsibleSidebar__button" onClick={this.collapsibleSidebar}>
							</button>
						</div>
					</div>
					<div className="content-container content-container--major">
						<div className="pageLayout">
							<div className="input-group">
								<div className="input-group__item">
									<h3 className="list-item__title">Title:</h3>
									<input 
										type="text"
										placeholder="Title"
										autoFocus
										className="text-input"
										value={this.state.title}
										onChange={this.onTitleChange}
									/>
								</div>
							</div>
							<div className="input-group">
								<div className="input-group__item">
									<h3 className="list-item__title">Description:</h3>
									<textarea 
										placeholder="Description"
										className="textarea"
										value={this.state.description}
										onChange={this.onDescriptionChange}
									/>
									<p>Characters remaining: {this.state.descriptionRemainingChar}</p>
								</div>
							</div>
							<div className="input-group">
								<div className="input-group__item">
									<h3 className="list-item__title">Year Level:</h3>
									<select className="dropdown" value={this.state.level} onChange={this.onLevelChange}>
										<option value="" disabled hidden>Select Year Level</option>
									  	<option value="Foundation Year">Foundation Year</option>
									  	<option value="Year 1">Year 1</option>
									  	<option value="Year 2">Year 2</option>
									  	<option value="Year 3">Year 3</option>
									  	<option value="Year 4">Year 4</option>
									  	<option value="Year 5">Year 5</option>
									  	<option value="Year 6">Year 6</option>
									  	<option value="Year 7">Year 7</option>
									  	<option value="Year 8">Year 8</option>
									  	<option value="Year 9">Year 9</option>
									  	<option value="Year 10">Year 10</option>
									</select>
								</div>
								<div className="input-group__item">
									<h3 className="list-item__title">Lesson Duration:</h3>
									<select className="dropdown" value={this.state.duration} onChange={this.onDurationChange}>
										<option value="" disabled hidden>Select Lesson Duration</option>
									  	<option value="15 minutes">15 minutes</option>
									  	<option value="20 minutes">20 minutes</option>
									  	<option value="25 minutes">25 minutes</option>
									  	<option value="30 minutes">30 minutes</option>
									  	<option value="40 minutes">40 minutes</option>
									  	<option value="50 minutes">50 minutes</option>
									  	<option value="1 hour">1 hour</option>
									  	<option value="1 hour, 15 minutes">1 hour, 15 minutes</option>
									  	<option value="1 hour, 30 minutes">1 hour, 30 minutes</option>
									  	<option value="1 hour, 45 minutes">1 hour, 45 minutes</option>
									  	<option value="2 hours">2 hours</option>
									</select>
								</div>
							</div>
							<div className="input-group">
								<div className="input-group__item">
									<h3 className="list-item__title">Learning Outcomes:</h3>
									<textarea 
										placeholder="Learning Outcomes"
										className="textarea"
										value={this.state.learningOutcomes}
										onChange={this.onLearningOutcomesChange}
									/>
								</div>
							</div>
							<div className="input-group">
								<div className="input-group__item">
									<h3 className="list-item__title">Resources:</h3>
									<div>
										<button className="button" onClick={this.addResourceClicked}>Add Resource</button>
									</div>
									<input 
										type="text"
										placeholder="resource"
										className="text-input"
										value={this.state.resource}
										onChange={this.onResourceChange}
									/>	
									<AddResourcePopup display={this.isDisplayed} backgroundClick={this.addResourceClicked}/>
								</div>
							</div>
							<div className="input-group">
								<div className="input-group__item">
									<h3 className="list-item__title">Lesson Structure:</h3>
									<textarea 
										placeholder="Lesson Structure"
										className="textarea"
										value={this.state.lessonStructure}
										onChange={this.onLessonStructureChange}
									/>	
								</div>
							</div>
							<div className="input-group">
								<div className="input-group__item">
									<h3 className="list-item__title">Prior Knowledge:</h3>
									<textarea 
										placeholder="Prior Knowledge"
										className="textarea"
										value={this.state.priorKnowledge}
										onChange={this.onPriorKnowledgeChange}
									/>	
								</div>
							</div>
							<div className="input-group">
								<div className="input-group__item">
									<div>
										<button className="button" onClick={this.onSubmit}>Save Lesson Plan</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		);
	};
};