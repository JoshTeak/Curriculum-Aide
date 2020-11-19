import React from 'react';
import CheckboxList from './CheckboxList';
import defaultLinks from '../components/CurriculumAddresses';

export default class LessonForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: props.lesson ? props.lesson.title : '',
			description: props.lesson ? props.lesson.description : '',
			resource: props.lesson ? props.lesson.resource : '',
			curriculumLinks: props.lesson ? props.lesson.curriculumLinks : defaultLinks(),
			error: ''
		};
	};

	onTitleChange = (e) => {
		const title = e.target.value;
		this.setState(() => ({title}));
	};

	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({description}));
	};

	onResourceChange = (e) => {
		const resource = e.target.value;
		this.setState(() => ({resource}));
	};

	onCurriculumLinkChange = (e) => {

		Object.keys(this.state.curriculumLinks).forEach(key => {
			if(key === e.target.value)
			{
				this.state.curriculumLinks[key] = e.target.checked;
				this.setState(() => (this.state.curriculumLinks));
			}
		});
	}

	onSubmit = (e) => {
		e.preventDefault();

		if(!this.state.title || !this.state.description || !this.state.resource) {
			this.setState(() => ({
				error: 'Please provde a title, description and resouce.'
			}));
		} else {
			this.setState(() => ({
				error: ''
			}));
			this.props.onSubmit({
				title: this.state.title,
				description: this.state.description,
				resource: this.state.resource,
				curriculumLinks: this.state.curriculumLinks
			});
		}
	};

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onSubmit}>
					<input 
						type="text"
						placeholder="Title"
						autoFocus
						value={this.state.title}
						onChange={this.onTitleChange}
					/>
					<input 
						type="text"
						placeholder="Description"
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input 
						type="text"
						placeholder="resource"
						value={this.state.resource}
						onChange={this.onResourceChange}
					/>
					<button>Add Lesson Plan</button>
				</form>
					<CheckboxList
						 onChangeFunction={this.onCurriculumLinkChange}
						 curriculumLinks={this.state.curriculumLinks}
					/>
			 </div>
		);
	};
};