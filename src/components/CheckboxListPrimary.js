import React from 'react';
import { connect } from 'react-redux';
import { linkArray, MathimaticsCurriculumArray } from './CurriculumAddresses';

class CheckboxListPrimary extends React.Component {
	constructor(props) {
		super(props);

		this.displayPrimary = false;

		let previousWindowWidth = window.innerWidth;
	}
	onPrimaryClicked = (e) => {
		e.preventDefault();
		
	  	this.displayPrimary = !this.displayPrimary;

	  	this.forceUpdate();
	}
	render() {
		return (
			<div className="curriculum-item__half">
				<h3 className="curriculum-item__title selectable" onClick={this.onPrimaryClicked}>{this.props.primary.primaryName}</h3>
				{this.displayPrimary ?
					this.props.primary.secondaryTitles.map((secondary) => {
						return (
							<div className="curriculum-item__section">
								<h3 className="curriculum-item__sub-title">{secondary.secondaryName}</h3>
								{
									secondary.linksToSecondary.map((link) => {
										return (
											<div className="curriculum-item__link">
												<h3 className="curriculum-item__descriptor">{link.linkDescription}</h3>
												<div className="curriculum-item__pair">
													<h3 className="curriculum-item__code">{'(' + link.linkCode + ')'}</h3>
													<input
														key={link.linkCode}
														type="checkbox" 
														value={link.linkCode}
														onChange={this.props.onChangeFunction}
														checked={this.props.filters.curriculumLinks[link.linkCode] ? this.props.filters.curriculumLinks[link.linkCode].isSet : false}
													/>
												</div>
											</div>
										)
									})
								}
							</div>
						)
					}) : ''
				}
			</div>
		)
	};
};

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	};
};

export default connect(mapStateToProps)(CheckboxListPrimary);