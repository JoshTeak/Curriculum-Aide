import React from 'react';

import SinglePagePDFViewer from "../pdf/single-page";

export default class AddResourcePopup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {resource: {value: "", type: "webLink"}, error: false};
	};
	onResourceValueChange = (e) => {
		const resourceValue = e.target.value;
		this.setState((prevState) => ({resource: {...prevState.resource, value: resourceValue}}));
	};
	onResourceTypeChange = (e) => {
		const resourceType = e.target.value;
		this.setState((prevState) => ({resource: {...prevState.resource, type: resourceType}}));
	};
	onFileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = (event) => {
			this.setState((prevState) => ({resource: {...prevState.resource, value: event.target.result}}));
		}
		reader.readAsDataURL(file);
	};
	determineResourceInput = () => {
		switch (this.state.resource.type) {
			case 'weblink':
				return (
						<div className="list-item">
							<input 
								type="text"
								placeholder="resource"
								className="text-input"
								value={this.state.resource.value}
								onChange={this.onResourceValueChange}
							/>	
							{this.state.error && !this.state.resource.value ? <p className="form__error">*Please provde a weblink to the resource.</p> : ""}
						</div>
						);
			case 'embeddedVideo':
				return (
						<div className="list-item">
							<input 
								type="text"
								placeholder="resource"
								className="text-input"
								value={this.state.resource.value}
								onChange={this.onResourceValueChange}
							/>	
							{this.state.error && !this.state.resource.value ? <p className="form__error">*Please provde a link to the video.</p> : ""}
						</div>
						);
			case 'PDF':
				return (
						<div className="list-item">
							<input type="file"
								id="file-selector"
							    name="myFile"
							    accept=".pdf"
							    onChange={this.onFileChange}
							/>
						    {this.state.resource.value !== '' ?
								<div className="list-item">
							      <SinglePagePDFViewer pdf={this.state.resource.value} />
							    </div> : ''
							}
							{this.state.error && !this.state.resource.value ? <p className="form__error">*Please select a file to upload.</p> : ""}
						</div>
						);
		}
	};
	onSubmit = (e) => {
		e.preventDefault();
		
		if(!this.state.resource.value || !this.state.resource.type) {
			this.setState(() => ({
				error: true
			}));
		} else {
			this.setState(() => ({
				error: false
			}));
			this.props.changeResources(this.state.resource, "ADD_RESOURCE");
			this.props.backgroundClick(e);
		}
	};
	render() {
		return (
			<div className="popup">
				<div className="popup-background" onClick={this.props.backgroundClick}>
				</div>
				<div className="popup-group add-resource-popup">
					<div className="popup-container">
						<div className="input-popup">
							<div className="list-body">
								<div className="list-item">
									<h3 className="list-item__title">Add Resource</h3>
								</div>
								<div className="list-item">
									<select className="dropdown" onChange={this.onResourceTypeChange}>
										<option value="webLink">Web Link</option>
									  	<option value="embeddedVideo">YouTube Video</option>
									  	<option value="PDF">PDF</option>
									</select>
									{this.state.error && !this.state.resource.type ? <p className="form__error">*Please select the type of resource you want to provide.</p> : ""}
								</div>

							    {this.determineResourceInput()}
								
								<div className="list-item list-item--multiple">
									<div className="list-item__pairr">
										<button className="button" onClick={this.onSubmit}>Add</button>
									</div>
									<div className="list-item__pair">
										<button className="button" onClick={this.props.backgroundClick}>Cancel</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
}