import React from 'react';

import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import Image from '../components/elements/Image';
import SectionHeader from '../components/sections/partials/SectionHeader';

const propTypes = {
	...SectionProps.types,
};

const defaultProps = {
	...SectionProps.defaults,
};

export default function PrivacyPolicy(
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
) {
	const outerClasses = classNames(
		'hero section center-content',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'hero-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const tilesClasses = classNames('tiles-wrap center-content pt-32 ', pushLeft && 'push-left');

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
						<span className="text-color-primary">Our Privacy Policy</span>
					</h1>
					<div
						className="hero-figure reveal-from-bottom illustration-element-01 pb-32"
						data-reveal-value="20px"
						data-reveal-delay="800"
					>
						<Image
							className="has-shadow"
							src={require('../assets/images/privacyPolicy.jpg')}
							// src={require('../../assets/images/privacyPolicy.jps')}
							alt="Hero"
							width="100%"
							height={504}
						/>
					</div>
					<p>
						You count on us to deliver the best entertainment and communication
						experiences in the world. You also count on us to protect your personal
						information. Privacy is fundamental to our business and we’re committed to:
					</p>

					<div
						style={{
							display: 'grid',
							placeItems: 'center',
							marginTop: '50px',
							marginBottom: '50px',
						}}
					>
						<p style={{ textAlign: 'left' }}>
							<span className="text-color-primary">Transparency</span> - We’re open
							and honest about how we use your data. Choice and
							<br />
							<span className="text-color-primary"> Security</span> - We use strong
							safeguards to keep your data confidential and secure.
							<br />
							<span className="text-color-primary">Control</span> - We give you
							choices about how we use your data.
							<br />
							<span className="text-color-primary">Integrity</span> - We do what we
							say.
						</p>
					</div>

					<p>
						We work hard to protect your information, to earn and maintain your trust,
						and to provide you with products and services that have privacy at the
						forefront. Your Privacy Center is designed to be a one-stop-shop for your
						privacy needs. Here, we explain our approach to privacy and data use – in
						simple language. You will also find helpful links to privacy choices,
						security tips, and much more.
					</p>

					<div className={tilesClasses}>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<h5 className="mt-0 mb-8 text-left text-color-primary">
									Data helps us create better, more reliable products, services
									and experiences.
								</h5>

								<div className="features-tiles-item-content">
									<p className="m-0 text-sm text-left">
										Data helps us mobilize your world by creating dependable
										services and experiences. For example, data helps us with
										the planning and optimization of our smart network. It also
										helps us prevent bad customer experiences like dropped
										calls.
									</p>
								</div>
							</div>
						</div>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-content">
									<h5 className="mt-0 mb-8 text-left text-color-primary">
										Data helps improve security and prevent fraud.
									</h5>
									<p className="m-0 text-sm text-left">
										Data helps us and our third-party service partners
										strengthen network and device security and detect fraud,
										identity theft, and other ways that the bad guys try to hurt
										you and us.
									</p>
								</div>
							</div>
						</div>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-content">
									<h5 className="mt-0 mb-8 text-left text-color-primary">
										Data helps improve programs for social good.
									</h5>
									<p className="m-0 text-sm text-left">
										By using our resources, we make the world a better place.
										For example, data has helped us raise awareness of the risks
										of texting while driving. And data can help us make cities
										smarter by reducing traffic, pollution, and much more.
									</p>
								</div>
							</div>
						</div>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-content">
									<h5 className="mt-0 mb-8 text-left text-color-primary">
										Data helps us customize offers for our products and services
										that may interest you.
									</h5>
									<p className="m-0 text-sm text-left">
										Your information helps us not only power your products and
										services, it helps us communicate service updates and
										offers. Data allows us to offer you our best products and
										services.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
