import React from 'react';

export default class AddStructureSegmentPopup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			segment: {
				title: props.segment ? props.segment.title : '', 
				duration: props.segment ? props.segment.duration : '',  
				content: props.segment ? props.segment.content : '',
				materials: props.segment ? props.segment.materials : ''
			}, error: false
		};
	};
	onSegmentTitleChange = (e) => {
		const segmentTitle = e.target.value;
		this.setState((prevState) => ({segment: {...prevState.segment, title: segmentTitle}}));
	};
	onSegmentDurationChange = (e) => {
		const segmentDuration = parseInt(e.target.value);
		this.setState((prevState) => ({segment: {...prevState.segment, duration: segmentDuration}}));
	};
	onSegmentContentChange = (e) => {
		const segmentContent = e.target.value;
		this.setState((prevState) => ({segment: {...prevState.segment, content: segmentContent}}));
	};
	onSegmentMaterialChange = (e) => {
		const segmentMaterials = e.target.value;
		this.setState((prevState) => ({segment: {...prevState.segment, materials: segmentMaterials}}));
	};
	onInputFocus = (e) => {
		this.resetInfoBubbles();

		switch(e.target.placeholder) {
			case "Segment Title":
				document.getElementById("segment-title-bubble").style.opacity = 1;
				break;
			case "min":
				document.getElementById("duration-bubble").style.opacity = 1;
				break;	
			case "Content":
				document.getElementById("content-bubble").style.opacity = 1;
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

		if(!this.state.segment.title || !this.state.segment.duration || !this.state.segment.content || !this.state.segment.materials) {
			this.setState(() => ({
				error: true
			}));
		} else {
			this.setState(() => ({
				error: false
			}));
			this.props.changeSegments(this.state.segment, "ADD_STRUCTURE_SEGMENT");
			this.props.backgroundClick(e);
		}
	};
	render() {
		return (
			<div className="popup">
				<div className="popup-background" onClick={this.props.cancel}>
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
										onChange={this.onSegmentTitleChange}
										onFocus={this.onInputFocus}
										onBlur={this.resetInfoBubbles}
									/>
									{this.state.error && !this.state.segment.title ? <p className="form__error">*Please provde a segment title.</p> : ""}
								</div>
								<div className="list-item">
									<div className="list-item__pair">
										<h3 className="list-item__sub-title list-item__sub-title--left">Segment Duration:</h3>
										<div className="info-bubble" id="duration-bubble">
											<div className="info-bubble-information">
												<p>Segment Duration is the recomended amount of time allocated to this segment of the lesson</p>	
											</div>
										</div>
										<input
											type="number"
											min="0"
											placeholder="min"
											className="text-input input-right"
											value={this.state.segment.duration}
											onChange={this.onSegmentDurationChange}
											onFocus={this.onInputFocus}
											onBlur={this.resetInfoBubbles}
										/>
										<p>Minutes</p>
									</div>
									{this.state.error && !this.state.segment.duration ? <p className="form__error">*Please provde a segment duration.</p> : ""}
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
										onChange={this.onSegmentContentChange}
										onFocus={this.onInputFocus}
										onBlur={this.resetInfoBubbles}
									/>
									{this.state.error && !this.state.segment.content ? <p className="form__error">*Please provde a segment content.</p> : ""}
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
										onChange={this.onSegmentMaterialChange}
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
										<button className="button" onClick={this.props.cancel}>Cancel</button>
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