import React from 'react';

import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Testimonial from '../components/sections/Testimonial';
import Forms from '../components/sections/Forms';

const Home = () => {
	return (
		<>
			<Hero className="illustration-section-01" />
			<FeaturesTiles />
			<Forms />
			<Testimonial topDivider />
		</>
	);
};

export default Home;
