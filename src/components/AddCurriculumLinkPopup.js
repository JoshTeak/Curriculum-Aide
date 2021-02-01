import React from 'react';
import CheckboxList from './CheckboxList';

export default class AddStructureSegmentPopup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			curriculumLinks: props.curriculumLinks
		};
	};
	onLinkChange = (e) => {
		this.state.curriculumLinks[e.target.value].isSet = e.target.checked;
		this.props.changeResources(this.state.curriculumLinks);
	}
	onSubmit = (e) => {
		e.preventDefault();
		this.props.backgroundClick(e);
	}

	render() {
		return (
			<div className="popup">
				<div className="popup-background" onClick={this.props.backgroundClick}>
				</div>
				<div className="popup-group edit-curriculum-link-popup">
					<div className="popup-container">
						<div className="input-popup">
							<div className="list-body">
								<div className="filter">
									<div className="input-group">
										<div className="input-group__item">
											<CheckboxList
												onChangeFunction={this.onLinkChange}
												curriculumLinks={this.state.curriculumLinks}
											/>
										</div>
									</div>	
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