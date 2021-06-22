import React from 'react';

import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Forms from '../components/sections/Forms';

const Home = () => {
	return (
		<>
			<Hero className="illustration-section-01" />
			<FeaturesTiles />
			<Forms />
			{/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
			<Testimonial topDivider />
			{/* <Cta split /> */}
		</>
	);
};

export default Home;
