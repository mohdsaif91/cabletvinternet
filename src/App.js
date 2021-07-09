import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';

import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import { AdminContext } from './Context/state/AdminState';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
import PrivacyPolicy from './views/PrivacyPolicy.js';
import Login from './views/Login';
import Admin from './views/Admin/AdminPage';
import AdminLayout from './layouts/AdminLayout';

const App = () => {
	const { admin } = AdminContext;

	const childRef = useRef();
	let location = useLocation();

	useEffect(() => {
		const page = location.pathname;
		document.body.classList.add('is-loaded');
		childRef.current.init();
	}, [location]);

	return (
		<ScrollReveal
			ref={childRef}
			children={() => (
				<Switch>
					<AppRoute exact path="/" component={Home} layout={LayoutDefault} />
					<AppRoute path="/login" component={Login} layout={LayoutDefault} />
					<AppRoute
						path="/privacy-policy"
						component={PrivacyPolicy}
						layout={LayoutDefault}
					/>
					<AppRoute path="/admin" component={Admin} layout={AdminLayout} />
				</Switch>
			)}
		/>
	);
};

export default App;
