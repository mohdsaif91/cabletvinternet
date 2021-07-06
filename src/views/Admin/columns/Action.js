import React from 'react';

import Delete from '../../../assets/images/delete.png';

export default function Action() {
	const deleteCustomer = () => {
		console.log('had delete');
	};

	return (
		<div>
			<button className="delete-btn" onClick={() => deleteCustomer()}>
				<img className="status-img" src={Delete} />
			</button>
		</div>
	);
}
