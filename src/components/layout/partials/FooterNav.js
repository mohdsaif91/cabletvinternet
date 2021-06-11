import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({ className, ...props }) => {
	const classes = classNames('footer-nav', className);

	return (
		<nav {...props} className={classes}>
			<ul className="list-reset">
				<li className="text-color-primary">
					<Link to="/">Home</Link>
				</li>
				<li className="text-color-primary">
					<Link to="/privacy-policy">Privacy Policy</Link>
				</li>
			</ul>
		</nav>
	);
};

export default FooterNav;
