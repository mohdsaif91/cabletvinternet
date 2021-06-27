import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { SectionProps } from '../../utils/SectionProps';
import { CustomerContext } from '../../Context/state/CustomerState';
import loadingImage from '../../assets/images/loading.gif';

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
	planeTypeCommercial: false,
	planeTypeResidential: false,
	serviceTypePhone: false,
	serviceTypeCableTv: false,
	serviceTypeInternet: false,
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
const checkboxData = {
	checkPlan: false,
	checkService: false,
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
	const [validCheckBox, setValidCheckBox] = useState({ ...checkboxData });

	const { addCustomer, addError, loading } = useContext(CustomerContext);

	useEffect(() => {
		if (loading) {
			setFormData({
				...formdata,
				email: '',
				phoneNumber: null,
				fullName: '',
				planeTypeCommercial: false,
				planeTypeResidential: false,
				serviceTypePhone: false,
				serviceTypeCableTv: false,
				serviceTypeInternet: false,
			});
		}
		window.addEventListener('resize', handleWindowSize);
		return () => window.removeEventListener('resize', handleWindowSize);
	}, [loading]);

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

	const updateForm = (type, value) => {
		switch (true) {
			case type === 'fullName':
				const fullNameError = {
					msg: error.fullName.msg,
					show: value.trim() === '',
				};
				value.trim() === ''
					? setError({ ...error, fullName: fullNameError, error: true })
					: setFormData({ ...formdata, fullName: value, error: false });

				break;
			case type === 'phoneNumber':
				const phoneRegex = /^\d{10}$/;
				let phoneNumberError = {};
				if (value.trim() === '') {
					phoneNumberError = {
						msg: 'Phone Number Cannot be null',
						show: true,
					};
					setError({ ...error, phoneNumber: phoneNumberError, error: true });
				} else if (phoneRegex.test(value)) {
					phoneNumberError = {
						msg: '',
						show: false,
					};
					setFormData({ ...formdata, phoneNumber: parseInt(value), error: false });
					setError({ ...error, phoneNumber: phoneNumberError });
				} else {
					phoneNumberError = {
						msg: 'Not A Phone Number',
						show: true,
					};
					setError({ ...error, phoneNumber: phoneNumberError, error: true });
				}
				break;
			case type === 'email':
				let emailError = {};
				const emailRegex =
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if (value.trim() === '') {
					emailError = {
						msg: 'Email Cannot be null',
						show: true,
					};
					setError({ ...error, email: emailError, error: true });
				} else if (emailRegex.test(value)) {
					emailError = {
						msg: '',
						show: false,
					};
					setError({ ...error, email: emailError, error: false });
					setFormData({ ...formdata, email: value });
				} else {
					emailError = {
						msg: 'Not an email',
						show: true,
					};
					setError({ ...error, email: emailError, error: true });
				}
				break;
			case type === 'residential':
				setFormData({ ...formdata, planeTypeResidential: value });
				break;
			case type === 'commercial':
				setFormData({ ...formdata, planeTypeCommercial: value });
				break;
			case type === 'phone':
				setFormData({ ...formdata, serviceTypePhone: value });
				break;
			case type === 'CabelTV':
				setFormData({ ...formdata, serviceTypeCableTv: value });
				break;
			case type === 'internet':
				setFormData({ ...formdata, serviceTypeInternet: value });
				break;
		}
	};

	const sendData = (e) => {
		e.preventDefault();
		const {
			planeTypeCommercial,
			planeTypeResidential,
			serviceTypePhone,
			serviceTypeCableTv,
			serviceTypeInternet,
		} = formdata;
		if (planeTypeCommercial === false && planeTypeResidential === false) {
			setValidCheckBox({ ...checkboxData, checkPlan: true });
			return;
		} else if (
			serviceTypePhone === false &&
			serviceTypeCableTv === false &&
			serviceTypeInternet === false
		) {
			setValidCheckBox({ ...checkboxData, checkService: true });
			return;
		} else {
			addCustomer(formdata);
			// setFormData({ ...initialFormData });
		}
	};

	const mobile = width <= 768 ? true : false;

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<form className="customer-form">
						<div className="form-heading">
							<h2 style={{ color: '#1cb68b' }}>Supports 360</h2>
							<h4>Talk to a Pro Today!</h4>
						</div>
						<div className={`main-sub-heading ${mobile ? '' : 'm3rem text-center'} `}>
							Get all your burning questions answered by a professional. Fill out the
							form below and our team will be in-touch shortly!
						</div>
						<div className={`main mt-16 ${mobile ? 'col' : 'row'}`}>
							<section className={`left ${mobile ? 'w-100' : 'w-50'} mr-40`}>
								<div className="input-container">
									<div className="form__group">
										<div className="test-label">
											<div className="main-text">Full Name</div>
											<div className="required">Required</div>
										</div>
										<input
											type="text"
											className="form__input"
											id="name"
											onChange={(e) => updateForm('fullName', e.target.value)}
										/>
										<div className="ht-gap-1">
											{error.fullName.show && (
												<p className="error-text">{error.fullName.msg}</p>
											)}
										</div>
									</div>
									<div className="form__group">
										<div className="test-label">
											<div className="main-text">Phone Number</div>
											<div className="required">Required</div>
										</div>
										<input
											type="text"
											className="form__input"
											id="name"
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
										<div className="test-label">
											<div className="main-text">Email</div>
											<div className="required">Required</div>
										</div>
										<input
											type="text"
											className="form__input"
											id="name"
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
											checked={formdata.planeTypeResidential}
											onChange={(e) =>
												updateForm('residential', e.target.checked)
											}
										/>
										<label for="Residential" className="checkbox-label mr-16">
											Residential
										</label>
										<input
											type="checkbox"
											className="checkbox mr-4"
											id="Commercial"
											checked={formdata.planeTypeCommercial}
											onChange={(e) =>
												updateForm('commercial', e.target.checked)
											}
										/>
										<label for="Commercial" className="checkbox-label mr-16">
											Commercial
										</label>
									</div>
									{validCheckBox.checkPlan && (
										<p className="error-text">Please choose one</p>
									)}
									<div className="text-left">
										<h3 style={{ color: '#1cb68b' }}>Service Type</h3>
									</div>
									<div className="check-box-container row">
										<input
											type="checkbox"
											className="checkbox mr-4"
											id="Phone"
											checked={formdata.serviceTypePhone}
											onChange={(e) => updateForm('phone', e.target.checked)}
										/>
										<label for="Phone" className="checkbox-label mr-16">
											Phone
										</label>
										<input
											type="checkbox"
											className="checkbox mr-4"
											id="CabelTV"
											checked={formdata.serviceTypeCableTv}
											onChange={(e) =>
												updateForm('CabelTV', e.target.checked)
											}
										/>
										<label for="CabelTV" className="checkbox-label mr-16">
											Cabel TV
										</label>
										<input
											type="checkbox"
											className="checkbox mr-4"
											id="Internet"
											checked={formdata.serviceTypeInternet}
											onChange={(e) =>
												updateForm('internet', e.target.checked)
											}
										/>
										<label for="Internet" className="checkbox-label">
											Internet
										</label>
									</div>
									{validCheckBox.checkService && (
										<p className="error-text">Please choose one</p>
									)}
								</div>
								<div className="send-btn-cont mt-32">
									<button
										data-tip
										data-for="notification-info-confirmation-precheck"
										className={`btn btn-tablink send-btn ${
											error.error && 'opacity'
										}`}
										onClick={(e) => sendData(e)}
										disabled={error.error}
									>
										{loading ? (
											<img className="loading-img" src={loadingImage} />
										) : (
											'Send'
										)}
									</button>
								</div>
								{addError ? (
									<p className="error-text">Server Encountered some error</p>
								) : (
									''
								)}
								{error.error && <p className="error-text">Form is invalid</p>}
							</section>
						</div>
						<div className={`form-policy ${mobile ? '' : 'm3rem'}`}>
							<br /> By clicking the submit button above and submitting this form, I
							acknowledge that I permit Support 360 to use my information provided to
							search for their best current offers for telecom services. I also allow
							Support 360 express consent to contact me at the number and/or email
							address I have provided above with automated technology in relation to
							this inquiry via phone or e-mail.
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
