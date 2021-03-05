import React from 'react';

export default class AddStructureSegmentPopup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {segment: {title: "", duration: 0, content: "", pedagogy: "", materials: ""}, error: false};
	};
	onResourceTitleChange = (e) => {
		const segmentTitle = e.target.value;
		this.setState((prevState) => ({segment: {...prevState.segment, title: segmentTitle}}));
	};
	onResourceDurationChange = (e) => {
		const segmentDuration = parseInt(e.target.value);
		this.setState((prevState) => ({segment: {...prevState.segment, duration: segmentDuration}}));
	};
	onResourceContentChange = (e) => {
		const segmentContent = e.target.value;
		this.setState((prevState) => ({segment: {...prevState.segment, content: segmentContent}}));
	};
	onResourcePedagogyChange = (e) => {
		const segmentPedagogy= e.target.value;
		this.setState((prevState) => ({segment: {...prevState.segment, pedagogy: segmentPedagogy}}));
	};
	onResourceMaterialChange = (e) => {
		const segmentMaterials = e.target.value;
		this.setState((prevState) => ({segment: {...prevState.segment, materials: segmentMaterials}}));
	};
	onInputFocus = (e) => {
		this.resetInfoBubbles();

		switch(e.target.placeholder) {
			case "Segment Title":
				document.getElementById("segment-title-bubble").style.opacity = 1;
				break;
			case "Content":
				document.getElementById("content-bubble").style.opacity = 1;
				break;
			case "Pedagogy":
				document.getElementById("pedagogy-bubble").style.opacity = 1;
				break;		
			case "Required Materials":
				document.getElementById("required-materials-bubble").style.opacity = 1;
				break;		
		}
	}
	resetInfoBubbles = () => {
		const displayInfoBubble = document.getElementsByClassName("info-bubble");
		for (let i = 0; i < displayInfoBubble.length; i++) {
			displayInfoBubble[i].style.opacity = 0;
		}
	}
	onSubmit = (e) => {
		e.preventDefault();

		if(!this.state.segment.title || this.state.segment.duration === 0 || !this.state.segment.content || !this.state.segment.pedagogy || !this.state.segment.materials) {
			this.setState(() => ({
				error: true
			}));
		} else {
			this.setState(() => ({
				error: false
			}));
			this.props.changeResources(this.state.segment, "ADD_STRUCTURE_SEGMENT");
			this.props.backgroundClick(e);
		}
	};
	render() {
		return (
			<div className="popup">
				<div className="popup-background" onClick={this.props.backgroundClick}>
				</div>
				<div className="popup-group add-structure-popup">
					<div className="popup-container">
						<div className="input-popup">
							<div className="list-body">
								<div className="list-item">
									<h3 className="list-item__title">Add Structure Segment</h3>
								</div>
								<div className="list-item">
									<h3 className="list-item__sub-title">Segment Title:</h3>
									<div className="info-bubble" id="segment-title-bubble">
										<div className="info-bubble-information">
											<p>The name of this segment of the lesson E.g. Introduction, body, conclusion.</p>	
										</div>
									</div>
									<input 
										type="text"
										placeholder="Segment Title"
										autoFocus
										className="text-input"
										value={this.state.segment.title}
										onChange={this.onResourceTitleChange}
										onFocus={this.onInputFocus}
										onBlur={this.resetInfoBubbles}
									/>
									{this.state.error && !this.state.segment.title ? <p className="form__error">*Please provde a segment title.</p> : ""}
								</div>
								<div className="list-item">
									<div className="list-item__pair">
										<h3 className="list-item__sub-title list-item__sub-title--left">Segment Duration:</h3>
										<select className="dropdown dropdown--right" value={this.state.segment.duration} onChange={this.onResourceDurationChange}>
											<option value="">Select Lesson Duration</option>
										  	<option value={15}>15 minutes</option>
										  	<option value={20}>20 minutes</option>
										  	<option value={25}>25 minutes</option>
										  	<option value={30}>30 minutes</option>
										  	<option value={40}>40 minutes</option>
										  	<option value={50}>50 minutes</option>
										  	<option value={60}>1 hour</option>
										  	<option value={75}>1 hour, 15 minutes</option>
										  	<option value={90}>1 hour, 30 minutes</option>
										  	<option value={105}>1 hour, 45 minutes</option>
										  	<option value={120}>2 hours</option>
										</select>
									</div>
									{this.state.error && this.state.segment.duration === 0 ? <p className="form__error">*Please provde a segment duration.</p> : ""}
								</div>
								<div className="list-item">
									<h3 className="list-item__sub-title">Content:</h3>
									<div className="info-bubble" id="content-bubble">
										<div className="info-bubble-information">
											<p>Content section is where instructions are provided about how to use resources, materials, and teach the lesson. This is the bulk of the lesson plan.</p>	
										</div>
									</div>
									<textarea 
										placeholder="Content"
										className="textarea"
										value={this.state.segment.content}
										onChange={this.onResourceContentChange}
										onFocus={this.onInputFocus}
										onBlur={this.resetInfoBubbles}
									/>
									{this.state.error && !this.state.segment.content ? <p className="form__error">*Please provde a segment content.</p> : ""}
								</div>
								<div className="list-item">
									<h3 className="list-item__sub-title">Pedagogy:</h3>
									<div className="info-bubble" id="pedagogy-bubble">
										<div className="info-bubble-information">
											<p>This is an information bubble about how to fill in the title</p>	
										</div>
									</div>
									<textarea 
										placeholder="Pedagogy"
										className="textarea"
										value={this.state.segment.pedagogy}
										onChange={this.onResourcePedagogyChange}	
										onFocus={this.onInputFocus}
										onBlur={this.resetInfoBubbles}	
									/>
									{this.state.error && !this.state.segment.pedagogy ? <p className="form__error">*Please provde a segment pedagogy.</p> : ""}
								</div>
								<div className="list-item">
									<h3 className="list-item__sub-title">Required Materials:</h3>
									<div className="info-bubble" id="required-materials-bubble">
										<div className="info-bubble-information">
											<p>Please include any materials required for this section.</p>	
										</div>
									</div>
									<textarea 
										placeholder="Required Materials"
										className="textarea"
										value={this.state.segment.materials}
										onChange={this.onResourceMaterialChange}
										onFocus={this.onInputFocus}
										onBlur={this.resetInfoBubbles}
									/>
									{this.state.error && !this.state.segment.materials ? <p className="form__error">*Please provde segment materials.</p> : ""}
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
			</div>
		);
	};
}