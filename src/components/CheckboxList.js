import React from 'react';

const CheckboxList = ({onChangeFunction, curriculumLinks}) => (

	<div>
		<h1>Curriculum Links List</h1>
		{
			Object.keys(curriculumLinks).map((link) => {
				return <div>
							<h3>{link}</h3>
							<input
								key={link}
								type="checkbox" 
								value={link}
								onChange={onChangeFunction}
								checked={curriculumLinks[link]}
							/>
						</div>
			})
		}
	</div>
);

export default CheckboxList;