import React from 'react';
// import Header from '../components/layout/Header';
// import Footer from '../components/layout/Footer';

const AdminLayout = ({ children }) => (
	<>
		{/* <Header navPosition="right" className="reveal-from-bottom" /> */}
		<main className="site-content">{children}</main>
		{/* <Footer /> */}
	</>
);

export default AdminLayout;
