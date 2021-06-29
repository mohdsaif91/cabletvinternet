import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AdminContext } from '../Context/state/AdminState';

const initialData = {
	userName: '',
	password: '',
};

export default function Login() {
	const [loginData, setLoginData] = useState({ ...initialData });
	const [width, setWidth] = useState(window.innerWidth);
	const history = useHistory();

	const { adminLogin } = useContext(AdminContext);

	useEffect(() => {
		window.addEventListener('resize', handleWindowSize);
		return () => window.removeEventListener('resize', handleWindowSize);
	}, []);

	const handleWindowSize = () => {
		setWidth(window.innerWidth);
	};

	const mobile = width <= 768 ? true : false;

	const userLogin = () => {
		console.log(loginData);
		adminLogin(loginData);
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
					Login
				</button>
				<button onClick={() => goBack()} className="btn">
					back
				</button>
			</div>
		</div>
	);
}
