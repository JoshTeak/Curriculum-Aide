import React from 'react';

export default class AddResourcePopup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {resource: {value: "", type: "webLink"}, error: false};
		this.fileSizeError = false;
	};
	onResourceValueChange = (e) => {
		const resourceValue = e.target.value;
		this.setState((prevState) => ({resource: {...prevState.resource, value: resourceValue}}));
	};
	onResourceTypeChange = (e) => {
		const resourceType = e.target.value;
		this.setState((prevState) => ({resource: {...prevState.resource, type: resourceType}}));
		this.fileSizeError = false;
	};
	onResourceFileChange = (e) => {
		const selectedFile = document.getElementById('file-selector').files[0];;
		if(selectedFile.size <= 2097152)
		{
			this.setState((prevState) => ({resource: {...prevState.resource, value: {file: selectedFile, fileName: selectedFile.name}}}));
			this.fileSizeError = false;
		} else 
		{
			this.fileSizeError = true;
			this.forceUpdate();
		}
	};
	onInputFocus = (e) => {
		this.resetInfoBubbles();

		switch(e.target.placeholder) {
			case "Website link":
				document.getElementById("website-bubble").style.opacity = 1;
				break;
			case "YouTube Video link":
				document.getElementById("youtube-bubble").style.opacity = 1;
				break;		
		}
	}
	resetInfoBubbles = () => {
		const displayInfoBubble = document.getElementsByClassName("info-bubble");
		for (let i = 0; i < displayInfoBubble.length; i++) {
			displayInfoBubble[i].style.opacity = 0;
		}
	}
	determineResourceInput = () => {
		switch (this.state.resource.type) {
			case 'webLink':
				return (
					<div className="list-item">
						<div className="info-bubble" id="website-bubble">
							<div className="info-bubble-information">
								<p>Copy and paste a weblink in the provided text field</p>	
							</div>
						</div>
						<input 
							type="text"
							placeholder="Website link"
							className="text-input"
							value={this.state.resource.value}
							onChange={this.onResourceValueChange}
							onFocus={this.onInputFocus}
							onBlur={this.resetInfoBubbles}
						/>	
						{this.state.error && !this.state.resource.value ? <p className="form__error">*Please provde a weblink to the resource.</p> : ""}
					</div>
				);
			case 'embeddedVideo':
				return (
					<div className="list-item">
						<div className="info-bubble" id="youtube-bubble">
							<div className="info-bubble-information">
								<p>Copy and paste a link to a YouTube video in the provided text field</p>	
							</div>
						</div>
						<input 
							type="text"
							placeholder="YouTube Video link"
							className="text-input"
							value={this.state.resource.value}
							onChange={this.onResourceValueChange}
							onFocus={this.onInputFocus}
							onBlur={this.resetInfoBubbles}
						/>	
						{this.state.error && !this.state.resource.value ? <p className="form__error">*Please provde a link to the video.</p> : ""}
					</div>
				);
			case 'file':
				return (
					<div className="list-item">
						<input 
							type="file"
							id="file-selector"
						    name="myFile"
						    onChange={this.onResourceFileChange}
						    multiple
						/>
						{this.state.error && !this.state.resource.value ? <p className="form__error">*Please select a file to upload.</p> : ""}
						{this.fileSizeError ? <p className="form__error">*File must be under 2MB.</p> : ""}
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
									  	<option value="file">File</option>
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