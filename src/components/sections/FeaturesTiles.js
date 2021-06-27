import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
	...SectionTilesProps.types,
};

const initialData = [
	'century.jpg',
	'optimum.png',
	'dish1.png',
	'spectrum.png',
	'cox.png',
	'rnc.png',
	'xfinity.png',
	'mediacom.jpeg',
	'cableone.png',
];

const serviceData = [
	{
		imgName: 'wifiImage.jpg',
		serviceName: 'Internet',
		paragrap:
			'Experience high-speed internet service on our fiber-backed network for ultimate reliability.',
	},
	{
		imgName: 'tv.png',
		serviceName: 'TV & Entertainment',
		paragrap:
			'Stream more content faster than ever and get access to all your favorite TV shows with cable-free live TV.',
	},
	{
		imgName: 'phone.png',
		serviceName: 'Voice Service',
		paragrap: 'Stay in touch with family and friends with unlimited nationwide calling. ',
	},
];

const defaultProps = {
	...SectionTilesProps.defaults,
};
const delay = 2500;
const videoArray = [1, 2, 3];

const FeaturesTiles = ({
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
	const [data] = useState(initialData);
	const [width, setWidth] = useState(window.innerWidth);
	const [mobileIndex, setMobileIndex] = useState(0);
	const [service, setService] = useState(serviceData);
	const [serviceIndex, setServiceIndex] = useState(0);
	const [videoIndex, setVideoIndex] = useState(1);

	useEffect(() => {
		if (width <= 768) {
			showSlides(videoIndex);
		}
	}, [videoIndex, width]);

	const handleWindowSize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowSize);
		setTimeout(() => {
			setMobileIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
		}, delay);
		return () => window.removeEventListener('resize', handleWindowSize);
	}, [mobileIndex, window.innerWidth]);

	useEffect(() => {
		setTimeout(() => {
			setServiceIndex((prevIndex) => (prevIndex === service.length - 1 ? 0 : prevIndex + 1));
		}, delay);
	}, [serviceIndex]);

	const showSlides = (n) => {
		let i;
		const slides = document.getElementsByClassName('mySlides-service');

		if (n > slides.length) {
			setVideoIndex(1);
		}
		if (n < 1) {
			setVideoIndex(slides.length);
		}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		slides[videoIndex - 1].style.display = 'block';
	};

	const plusSlides = (n) => {
		setVideoIndex(n);
	};

	const outerClasses = classNames(
		'features-tiles section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'features-tiles-inner section-inner pt-0',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const tilesClasses = classNames('tiles-wrap center-content pt-32 ', pushLeft && 'push-left');

	const sectionHeader = {
		title: 'Get the best deal around',
		paragraph: 'Find the best Internet, Phone and Cable service for your home and office',
	};

	const partnerHeading = {
		title: 'We offer the best deals around for TV, Internet, and Phones.',
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container-fluid">
				<span className="text-color-primary">
					<SectionHeader data={partnerHeading} className="center-content h4" />
				</span>
				{width <= 768 ? (
					<div className="slideshow">
						<div
							className="slideshowSlider"
							style={{ transform: `translate3d(${-mobileIndex * 100}%,0,0)` }}
						>
							{data.map((m, index) => (
								<img
									key={index}
									style={{ background: 'white', borderRadius: '1rem' }}
									className="slide"
									src={require(`../../assets/images/${m}`)}
								/>
							))}
						</div>
						<div className="text-center">
							<p>Authorized Retailer</p>
						</div>
					</div>
				) : (
					<div className="cards pb-32 pt-18 ">
						{data.map((m) => (
							<div className="card">
								<img
									className="partner-img"
									src={require(`../../assets/images/${m}`)}
								/>
								<p>Authorized Retailer</p>
							</div>
						))}
					</div>
				)}
			</div>
			<div className="container">
				<div className={innerClasses}>
					<span>
						<SectionHeader data={sectionHeader} className="center-content mt-32" />
					</span>
					{width <= 768 ? (
						<div
							className="slideshow-container hero-figure reveal-from-bottom illustration-element-01"
							data-reveal-value="20px"
							data-reveal-delay="800"
						>
							<div className="mySlides-service fade one-service">
								<div className={`service-cards`}>
									<div
										className={`service-card ${
											width <= 768 ? 'mobile-card' : ''
										}`}
									>
										<img
											className="service-img"
											src={require(`../../assets/images/wifiImage.jpg`)}
										/>
										<h6>{serviceData[0].serviceName}</h6>
										<p className="text-color-primary p-8">
											{serviceData[0].paragrap}
										</p>
									</div>
								</div>
							</div>
							<div className="mySlides-service fade ">
								<div className={`service-cards`}>
									<div
										className={`service-card ${
											width <= 768 ? 'mobile-card' : ''
										}`}
									>
										<img
											className="service-img"
											src={require(`../../assets/images/tv.png`)}
										/>
										<h6>{serviceData[1].serviceName}</h6>
										<p className="text-color-primary p-8">
											{serviceData[1].paragrap}
										</p>
									</div>
								</div>
							</div>
							<div className="mySlides-service fade ">
								<div className={`service-cards`}>
									<div
										className={`service-card ${
											width <= 768 ? 'mobile-card' : ''
										}`}
									>
										<img
											className="service-img"
											src={require(`../../assets/images/phone.png`)}
										/>
										<h6>{serviceData[2].serviceName}</h6>
										<p className="text-color-primary p-8">
											{serviceData[2].paragrap}
										</p>
									</div>
								</div>
							</div>
							<div className="slideshowDots">
								{videoArray.map((m) => (
									<div
										key={m}
										className={`slideshowDot${
											videoIndex === m ? ' active' : ''
										}`}
										onClick={() => {
											plusSlides(m);
										}}
									></div>
								))}
							</div>
						</div>
					) : (
						<div className={`service-cards ${width <= 768 ? 'flex-wrap' : 'flex-row'}`}>
							{service.map((m) => (
								<div
									className={`service-card ${width <= 768 ? 'mobile-card' : ''}`}
								>
									<img
										className="service-img"
										src={require(`../../assets/images/${m.imgName}`)}
									/>
									<h6>{m.serviceName}</h6>
									<p className="text-color-primary p-8">{m.paragrap}</p>
								</div>
							))}
						</div>
					)}
					{/* <div className={tilesClasses}>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-01.svg')}
											alt="Features tile icon 01"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Robust Workflow</h4>
									<p className="m-0 text-sm">
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat.
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-02.svg')}
											alt="Features tile icon 02"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Robust Workflow</h4>
									<p className="m-0 text-sm">
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat.
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-03.svg')}
											alt="Features tile icon 03"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Robust Workflow</h4>
									<p className="m-0 text-sm">
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat.
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-04.svg')}
											alt="Features tile icon 04"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Robust Workflow</h4>
									<p className="m-0 text-sm">
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat.
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-05.svg')}
											alt="Features tile icon 05"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Robust Workflow</h4>
									<p className="m-0 text-sm">
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat.
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-06.svg')}
											alt="Features tile icon 06"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Robust Workflow</h4>
									<p className="m-0 text-sm">
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat.
									</p>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
