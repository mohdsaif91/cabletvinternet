import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';

import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
import PrivacyPolicy from './views/PrivacyPolicy.js';

const App = () => {
	const childRef = useRef();
	let location = useLocation();

	useEffect(() => {
		const page = location.pathname;
		document.body.classList.add('is-loaded');
		childRef.current.init();
	}, []);

	return (
		<ScrollReveal
			ref={childRef}
			children={() => (
				<Switch>
					<AppRoute exact path="/" component={Home} layout={LayoutDefault} />
					<AppRoute
						exact
						path="/privacy-policy"
						component={PrivacyPolicy}
						layout={LayoutDefault}
					/>
				</Switch>
			)}
		/>
	);
};

export default App;
