import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

import OfferCards from './OfferCards';

const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};

const Testimonial = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {
	const [tab, setTab] = useState(0);
	const [width, setWidth] = useState(window.innerWidth);
	const [resCom, setResCom] = useState(1);

	const outerClasses = classNames(
		'testimonial section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'testimonial-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const handleWindowSize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowSize);
		return () => window.removeEventListener('resize', handleWindowSize);
	}, []);

	const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

	const sectionHeader = {
		title: 'Customer testimonials',
		paragraph:
			'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.',
	};

	const resi = {
		title: 'Residential',
		paragraph:
			'Get the best in television, high-speed internet, and phone service to transform your business atmosphere. We offer a variety of business options, so you can choose the service package that fits your business needs. With standard professional installation, up to 4 free HD receivers, HD access at no extra cost, and music choice for the first 3 months, you’ll be glad you made the best choice for your business.',
	};

	const comm = {
		title: 'Commercial',
		paragraph:
			'Bundle and save on media and entertainment packages for your business or organization. Get fast, reliable internet, popular TV channels, and phone service. Check out our commercial plans and bundle to save.',
	};

	const mobile = width <= 768 ? true : false;

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<h3 style={{ textAlign: 'center' }}>Find the best prices for top rated service </h3>
				<h5 style={{ textAlign: 'center' }}>
					Searching for local internet, TV, and phone deals can be tough, but we make
					choosing the best plan easy.
				</h5>
				<div className={`three-box ${mobile ? '' : 'row'}`}>
					<div className={`box ${mobile ? '' : 'vertical'}`}>
						<h5>Free Local Plan Comparisons </h5>
						<p>
							Shop smarter and faster by comparing plans and setting up service all in
							one place
						</p>
					</div>
					<div className={`box ${mobile ? '' : 'vertical'}`}>
						<h5>Choose From Top Providers</h5>
						<p>
							We partner with the best service providers for TV, Internet, Phone, &
							more
						</p>
					</div>
					<div className={`box ${mobile ? '' : 'vertical'}`}>
						<h5>Experts You Can Trust</h5>
						<p>
							Thousands of customers per year trust us to help connect them with the
							right plan
						</p>
					</div>
				</div>
				<div className="tab-container mt-32">
					<button
						id={0}
						className={`btn ${mobile ? 'mobile-btn-tablink' : 'btn-tablink'}  ${
							tab === 0 ? '' : 'opacity'
						}`}
						onClick={(e) => setTab(parseInt(e.target.id))}
					>
						{mobile ? (
							<img
								id={0}
								onClick={(e) => setTab(parseInt(e.target.id))}
								key={0}
								style={{ borderRadius: '1rem' }}
								className="mobile-slide"
								src={require(`../../assets/images/tv.png`)}
							/>
						) : (
							'Cable'
						)}
					</button>
					<button
						id={1}
						className={`btn ${mobile ? 'mobile-btn-tablink' : 'btn-tablink'}  ${
							tab === 1 ? '' : 'opacity'
						}`}
						onClick={(e) => setTab(parseInt(e.target.id))}
					>
						{mobile ? (
							<img
								id={1}
								onClick={(e) => setTab(parseInt(e.target.id))}
								key={1}
								style={{ borderRadius: '1rem' }}
								className="mobile-slide"
								src={require(`../../assets/images/wifiImage.jpg`)}
							/>
						) : (
							'Internet'
						)}
					</button>
					<button
						id={2}
						className={`btn ${mobile ? 'mobile-btn-tablink' : 'btn-tablink'}  ${
							tab === 2 ? '' : 'opacity'
						}`}
						onClick={(e) => setTab(parseInt(e.target.id))}
					>
						{mobile ? (
							<img
								id={2}
								onClick={(e) => setTab(parseInt(e.target.id))}
								key={1}
								style={{ borderRadius: '1rem' }}
								className="mobile-slide"
								src={require(`../../assets/images/phone.png`)}
							/>
						) : (
							'Phone'
						)}
					</button>
				</div>
				<div>
					<section className="offer-card container grid flex-col">
						<OfferCards tab={tab} />
					</section>
				</div>
				<div>
					<section className="tab-container-com-res">
						<div className="tab-com-res">
							<button
								className={`btn tab-btn-com ${resCom !== 1 ? 'active' : ''}`}
								onClick={() => setResCom(1)}
							>
								Commercial
							</button>
							<button
								className={`btn tab-btn-com ${resCom !== 2 ? 'active' : ''}`}
								onClick={() => setResCom(2)}
							>
								Residential
							</button>
						</div>
						<SectionHeader
							data={resCom === 1 ? comm : resi}
							className="center-content left"
						/>
					</section>
				</div>

				{/* <div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={tilesClasses}>
						<div className="tiles-item reveal-from-right" data-reveal-delay="200">
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
										— Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum cillum dolore eu fugiat.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Roman Level
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">AppName</a>
									</span>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
										— Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum cillum dolore eu fugiat.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Diana Rynzhuk
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">AppName</a>
									</span>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-left" data-reveal-delay="200">
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
										— Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum cillum dolore eu fugiat.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Ben Stafford
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">AppName</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	);
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
