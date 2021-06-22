import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
	...SectionProps.types,
	split: PropTypes.bool,
};

const defaultProps = {
	...SectionProps.defaults,
	split: false,
};

const initialFormData = {
	fullName: '',
	phoneNumber: 0,
	email: '',
	planeTypeCommercial: '',
	planeTypeResidential: '',
	serviceType: '',
};

const errorData = {
	fullName: {
		msg: 'Full Name is Required',
		show: false,
	},
	phoneNumber: {
		msg: '',
		show: false,
	},
	email: {
		msg: '',
		show: false,
	},
	planeType: {
		msg: '',
		show: false,
	},
	serviceType: {
		msg: '',
		show: false,
	},
	error: false,
};

const Cta = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	split,
	...props
}) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [formdata, setFormData] = useState({ ...initialFormData });
	const [error, setError] = useState({ ...errorData });

	useEffect(() => {
		window.addEventListener('resize', handleWindowSize);
		return () => window.removeEventListener('resize', handleWindowSize);
	}, []);

	const handleWindowSize = () => {
		setWidth(window.innerWidth);
	};

	const outerClasses = classNames(
		'cta section center-content-mobile reveal-from-bottom',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'cta-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider',
		split && 'cta-split'
	);

	const validatePhonenumber = (number) => {
		if (/d{10}/.test(parseInt(number))) {
			setFormData({ ...formdata, phoneNumber: number });
		} else {
		}
	};

	const updateForm = (type, value) => {
		switch (type) {
			case type === 'fullName':
				// const fullName=error.fullName
				value.trim() === ''
					? setError({ ...error })
					: setFormData({ ...formdata, fullName: value });

				break;
			case type === 'phoneNumber':
				setFormData({ ...formdata, phoneNumber: parseInt(value) });
				break;
			case type === 'email':
				setFormData({ ...formdata, email: value });
				break;
			case type === 'fullName':
				setFormData({ ...formdata, fullName: value });
				break;
			case type === 'fullName':
				setFormData({ ...formdata, fullName: value });
				break;
			case type === 'fullName':
				setFormData({ ...formdata, fullName: value });
				break;
		}
	};

	const sendData = (e) => {
		e.preventDefault();
		if (error.error) {
		}
		console.log('will get data', formdata);
	};

	const mobile = width <= 768 ? true : false;
	console.log(mobile, '<>?', width);
	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<form className="customer-form">
						<div className={`main ${mobile ? 'col' : 'row'}`}>
							<section className={`left ${mobile ? 'w-100' : 'w-50'} mr-32`}>
								<div className="input-container">
									<div className="form__group">
										<input
											type="text"
											className="form__input"
											id="name"
											onChange={
												(e) => updateForm('fullName', e.target.value)
												// setFormData({
												// 	...formdata,
												// 	fullName: e.target.value,
												// })
											}
											placeholder="Full name"
										/>
										<div className="ht-gap-1">
											{error.fullName.show && (
												<p className="error-text">{error.fullName.msg}</p>
											)}
										</div>
									</div>
									<div className="form__group">
										<input
											type="text"
											className="form__input"
											id="name"
											placeholder="Phone Number"
											onChange={(e) =>
												updateForm('phoneNumber', e.target.value)
											}
										/>
										<div className="ht-gap-1">
											{error.phoneNumber.show && (
												<p className="error-text">
													{error.phoneNumber.msg}
												</p>
											)}
										</div>
									</div>
									<div className="form__group">
										<input
											type="text"
											className="form__input"
											id="name"
											placeholder="Email"
											onChange={(e) => updateForm('email', e.target.value)}
										/>
										<div className="ht-gap-1">
											{error.email.show && (
												<p className="error-text">{error.email.msg}</p>
											)}
										</div>
									</div>
								</div>
							</section>
							<section className="right">
								<div className={`input-container ${mobile ? 'mt-10' : ''}`}>
									<div className="text-left">
										<h3 style={{ color: '#1cb68b' }}>Select Type</h3>
									</div>
									<div className="check-box-container row">
										<input
											type="checkbox"
											className="checkbox mr-4"
											id="Residential"
											onChange={(e) =>
												updateForm('planType', e.target.checked)
											}
										/>
										<label for="Residential" className="checkbox-label mr-16">
											Residential
										</label>
										<input
											type="checkbox"
											className="checkbox mr-4"
											id="Commercial"
											onChange={(e) =>
												updateForm('planType', e.target.checked)
											}
										/>
										<label for="Commercial" className="checkbox-label mr-16">
											Commercial
										</label>
									</div>
									<div className="text-left">
										<h3 style={{ color: '#1cb68b' }}>Service Type</h3>
									</div>
									<div className="check-box-container row">
										<input
											type="checkbox"
											className="checkbox mr-4"
											id="Residential"
										/>
										<label for="Residential" className="checkbox-label mr-16">
											Phone
										</label>
										<input
											type="checkbox"
											className="checkbox mr-4"
											id="Commercial"
										/>
										<label for="Commercial" className="checkbox-label">
											Cabel TV
										</label>
										<input
											type="checkbox"
											className="checkbox mr-4"
											id="Commercial"
										/>
										<label for="Commercial" className="checkbox-label">
											Internet
										</label>
									</div>
								</div>
								<div className="send-btn-cont mt-32">
									<button
										className={`btn-tablink send-btn ${
											error.error && 'opacity'
										}`}
										onClick={(e) => sendData(e)}
										disabled={true}
									>
										Send
									</button>
								</div>
								{error.error && <p className="error-text">Form is invalid</p>}
							</section>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
