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

	// useEffect(() => {
	//   set
	// }, [tab]);

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

	const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

	const sectionHeader = {
		title: 'Customer testimonials',
		paragraph:
			'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.',
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className="tab-container">
					<button
						id={0}
						className={`btn-tablink ${tab === 0 ? '' : 'opacity'}`}
						onClick={(e) => setTab(parseInt(e.target.id))}
					>
						Cable
					</button>
					<button
						id={1}
						// id="internet"
						className={`btn-tablink ${tab === 1 ? '' : 'opacity'}`}
						onClick={(e) => setTab(parseInt(e.target.id))}
					>
						Internet
					</button>
					<button
						id={2}
						//  id="phone"
						className={`btn-tablink ${tab === 2 ? '' : 'opacity'}`}
						onClick={(e) => setTab(parseInt(e.target.id))}
					>
						Phone
					</button>
				</div>
				<div>
					<section className="offer-card container grid flex-col">
						<OfferCards tab={tab} />
					</section>
				</div>
				<div className={innerClasses}>
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
				</div>
			</div>
		</section>
	);
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
