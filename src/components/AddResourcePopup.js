import React from 'react';

export default class AddResourcePopup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {resource: {value: "", type: ""}};
	};
	onResourceValueChange = (e) => {
		const resourceValue = e.target.value;
		this.setState((prevState) => ({resource: {...prevState.resource, value: resourceValue}}));
	};
	onResourceTypeChange = (e) => {
		const resourceType = e.target.value;
		this.setState((prevState) => ({resource: {...prevState.resource, type: resourceType}}));

		console.log(this.state.resource);
	};
	onSubmit = (e) => {
		e.preventDefault();
		this.props.changeResources(this.state.resource, "ADD_RESOURCE");
		this.props.backgroundClick(e);
	};
	render() {
		return (
			<div> 
				{
					this.props.display === "none" ? "" : (
						<div className="popup">
							<div className="popup-background" onClick={this.props.backgroundClick}>
							</div>
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
										</div>
										<div className="list-item">
											<input 
												type="text"
												placeholder="resource"
												className="text-input"
												value={this.state.resource.value}
												onChange={this.onResourceValueChange}
											/>	
										</div>
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
					)
				}
			</div>
		);
	};
}