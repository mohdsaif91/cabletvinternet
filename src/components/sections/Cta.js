import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

const propTypes = {
	...SectionProps.types,
	split: PropTypes.bool,
};

const defaultProps = {
	...SectionProps.defaults,
	split: false,
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

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<form action="">
						<section class="left">
							<div class="input-container">
								<label for="name">Name</label>
								<input type="text" />
							</div>
							<div class="input-container">
								<label for="age" required>
									Age
								</label>
								<input type="text" />
							</div>
							<div class="input-container">
								<label for="phone">Phone</label>
								<input type="text" />
							</div>
							<div class="input-container">
								<label for="email">Email</label>
								<input type="text" />
							</div>
						</section>
						<section class="right">
							<div class="input-container">
								<label for="address">Address 1</label>
								<input type="text" />
							</div>
							<div class="input-container">
								<label for="address">
									Address 2 <span>(opcional)</span>
								</label>
								<input type="text" />
							</div>
							<div class="input-container">
								<label for="comments">Comments</label>
								<textarea name="comments" id=""></textarea>
							</div>
						</section>
						<div class="send-container">
							<input type="submit" value="Send" onclick="return true" />
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
