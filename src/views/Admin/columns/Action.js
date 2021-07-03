import React from 'react';

import Called from '../../../assets/images/called.png';
import Delete from '../../../assets/images/delete.png';

export default function Action() {
	const hadCalled = () => {
		console.log('had called');
	};
	const deleteCustomer = () => {
		console.log('had delete');
	};

	return (
		<div>
			<button onClick={() => hadCalled()}>
				<img className="status-img" src={Called} />
			</button>
			<button onClick={() => deleteCustomer()}>
				<img className="status-img" src={Delete} />
			</button>
		</div>
	);
}
