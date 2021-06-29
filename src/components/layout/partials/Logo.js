import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import { useHistory } from 'react-router-dom';

const Logo = ({ className, ...props }) => {
	const classes = classNames('brand', className);
	const history = useHistory();

	const adminLogin = (e) => {
		history.push('/login');
	};

	return (
		<div {...props} className={classes}>
			<h1 className="m-0">
				{/* <Link to="/"> */}
				<h4 style={{ cursor: 'pointer' }} onDoubleClick={(e) => adminLogin(e)}>
					Support 360
				</h4>
				{/* <Image
						src={require('./../../../assets/images/logo.svg')}
						alt="Open"
						width={32}
						height={32}
					/> */}
				{/* </Link> */}
			</h1>
		</div>
	);
};

export default Logo;
