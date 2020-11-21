import React from 'react';
import CheckboxList from './CheckboxList';
import { defaultLinks } from '../components/CurriculumAddresses';

export default class LessonForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: props.lesson ? props.lesson.title : '',
			learningOutcomes: props.lesson ? props.lesson.learningOutcomes : '',
			resource: props.lesson ? props.lesson.resource : '',
			curriculumLinks: props.lesson ? props.lesson.curriculumLinks : defaultLinks(),
			error: ''
		};
	};

	onTitleChange = (e) => {
		const title = e.target.value;
		this.setState(() => ({title}));
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

	onSubmit = (e) => {
		e.preventDefault();

		if(!this.state.title || !this.state.learningOutcomes || !this.state.resource) {
			this.setState(() => ({
				error: 'Please provde a title, learningOutcomes and resouce.'
			}));
		} else {
			this.setState(() => ({
				error: ''
			}));
			this.props.onSubmit({
				title: this.state.title,
				learningOutcomes: this.state.learningOutcomes,
				resource: this.state.resource,
				curriculumLinks: this.state.curriculumLinks
			});
		}
	};

	render() {
		return (
			<form className="form" onSubmit={this.onSubmit}>
				{this.state.error && <p className="form__error">{this.state.error}</p>}
				<input 
					type="text"
					placeholder="Title"
					autoFocus
					className="text-input"
					value={this.state.title}
					onChange={this.onTitleChange}
				/>
				<input 
					type="text"
					placeholder="Learning Outcomes"
					className="text-input"
					value={this.state.learningOutcomes}
					onChange={this.onLearningOutcomesChange}
				/>
				<input 
					type="text"
					placeholder="resource"
					className="text-input"
					value={this.state.resource}
					onChange={this.onResourceChange}
				/>				
				<CheckboxList
					onChangeFunction={this.onCurriculumLinkChange}
					curriculumLinks={this.state.curriculumLinks}
				/>
				<div>
					<button className="button">Save Lesson Plan</button>
				</div>
			</form>
		);
	};
};