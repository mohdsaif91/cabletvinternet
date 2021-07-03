import React, { useEffect, useRef } from 'react';

import GreenTick from '../../../assets/images/greentick.png';
import RedX from '../../../assets/images/red-x.png';

const PlanAndService = ({ flag, type }) => {
	const box = useRef(0);

	const img = flag ? GreenTick : RedX;
	const showTooltip = () => {
		box.current.style.display = 'block';
	};
	const hideTooltip = () => {
		box.current.style.display = 'none';
	};

	return (
		<div className="img-col">
			<img
				onMouseOver={() => showTooltip()}
				onMouseLeave={() => hideTooltip()}
				className="status-img"
				src={img}
			/>
			<span ref={box} style={{ display: 'none' }}>
				{type}
			</span>
		</div>
	);
};

export default PlanAndService;
