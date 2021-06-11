import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
	...SectionProps.types,
};

const defaultProps = {
	...SectionProps.defaults,
};

const videoArray = [1, 2, 3, 4];

const Hero = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	...props
}) => {
	const [videoIndex, setVideoIndex] = useState(1);

	useEffect(() => {
		showSlides(videoIndex);
	}, [videoIndex]);

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

	const showSlides = (n) => {
		let i;
		const slides = document.getElementsByClassName('mySlides');

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

	return (
		<section {...props} className={outerClasses}>
			<div className="container-sm">
				<div className={innerClasses}>
					<div className="hero-content">
						<h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
							Switch today to lock in your{' '}
							<span className="text-color-primary">rate</span>
						</h1>
						<div id="myModal" className="modal">
							<span onclick="closePopup()" className="close">
								&times;
							</span>
							<img className="modal-content" id="img01" />
							<div id="caption"></div>
						</div>

						<section className="nw">
							<div
								className="slideshow-container hero-figure reveal-from-bottom illustration-element-01"
								data-reveal-value="20px"
								data-reveal-delay="800"
							>
								<div className="mySlides fade one">
									<video width="100%" controls>
										<source
											src={require('../../assets/video/video1.mp4')}
											type="video/mp4"
										/>
									</video>
								</div>

								<div className="mySlides fade">
									<video width="100%" controls>
										<source
											src={require('../../assets/video/video2.mp4')}
											type="video/mp4"
										/>
									</video>
								</div>

								<div className="mySlides fade">
									<video width="100%" controls>
										<source
											src={require('../../assets/video/video3.mp4')}
											type="video/mp4"
										/>
									</video>
								</div>

								<div className="mySlides fade">
									<video width="100%" controls>
										<source
											src={require('../../assets/video/video4.mp4')}
											type="video/mp4"
										/>
									</video>
								</div>
							</div>
							{videoArray.map((m) => (
								<div
									key={m}
									className={`slideshowDot${videoIndex === m ? ' active' : ''}`}
									onClick={() => {
										plusSlides(m);
									}}
								></div>
							))}
							<br />
						</section>
					</div>
				</div>
			</div>
		</section>
	);
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
