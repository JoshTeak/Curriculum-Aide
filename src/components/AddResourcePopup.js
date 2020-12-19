import React from 'react';

const AddResourcePopup = (props) => (
	<div> 
		{
			props.display === "none" ? "" : (
				<div className="popup">
					<div className="popup-background" onClick={props.backgroundClick}>
					</div>
					<div className="popup-container">
					</div>
				</div>
			)
		}
	</div>
);

export default AddResourcePopup;