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
				<li className="text-color-primary">
					<div className="d-flex-col">
						<a href="tel: +18059176770" className="phone-btn">
							+1 805-917-6770
						</a>
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default FooterNav;
