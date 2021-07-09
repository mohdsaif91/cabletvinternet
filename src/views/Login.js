import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AdminContext } from '../Context/state/AdminState';
import loadingImage from '../assets/images/loading.gif';

const initialData = {
	userName: '',
	password: '',
};

export default function Login() {
	const [loginData, setLoginData] = useState({ ...initialData });
	const [width, setWidth] = useState(window.innerWidth);
	const history = useHistory();

	const { adminLogin, loading, loginError, loginSucess, adminSucess } = useContext(AdminContext);

	useEffect(() => {
		window.addEventListener('resize', handleWindowSize);
		if (loginSucess === true && adminSucess === true) {
			sessionStorage.setItem('admin', true);
			history.push('/admin');
		}
		return () => window.removeEventListener('resize', handleWindowSize);
	}, [loginSucess, adminSucess]);

	const handleWindowSize = () => {
		setWidth(window.innerWidth);
	};

	const mobile = width <= 768 ? true : false;

	const userLogin = () => {
		adminLogin(loginData);
		setLoginData({ ...initialData });
	};
	const goBack = () => {
		history.goBack();
	};

	return (
		<div className="login-container">
			<div className={`login-form ${mobile ? 'width-mobile' : 'width-desktop'}`}>
				<h1>Login</h1>
				<div className="form-input-material">
					<input
						type="text"
						name="username"
						id="username"
						value={loginData.userName}
						placeholder=" "
						autocomplete="off"
						required
						className="form-control-material"
						onChange={(e) => setLoginData({ ...loginData, userName: e.target.value })}
					/>
					<label for="username">Username</label>
				</div>
				<div className="form-input-material">
					<input
						type="password"
						name="password"
						value={loginData.password}
						id="password"
						placeholder=" "
						autocomplete="off"
						required
						className="form-control-material"
						onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
					/>
					<label for="password">Password</label>
				</div>
				<button onClick={() => userLogin()} className="btn btn-ghost">
					{loading ? <img className="loading-img-login" src={loadingImage} /> : 'Login'}
				</button>
				<button onClick={() => goBack()} className="btn">
					back
				</button>
				{loginError && <q className="form-control-material">No user found</q>}
			</div>
		</div>
	);
}
