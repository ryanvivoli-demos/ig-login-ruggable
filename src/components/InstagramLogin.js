import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";
const axios = require('axios');

export const InstagramLogin = props => {
	const navigate = useNavigate();

	const [canLogin, setCanLogin] = useState(false);
    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const setUsernameValue = (e) => {
		setUsername(e.target.value);
		validateValues();
	};

	const setPasswordValue = (e) => {
		setPassword(e.target.value);
		validateValues();
	};

	/* only enable form submit if form values are greater than 6 characters */
	const validateValues = () => {
		if((username.length > 6) && (password.length > 6)) {
			setCanLogin(true);
		} else {
			setCanLogin(false);
		}
	};

	const submitForm = (e) => {
		e.preventDefault();
		sessionStorage.clear();
		axios.post('http://localhost:3443/login', {
			igLogin: username,
			igPassword: password
		  })
		  .then(function (response) {
			console.log(response);
			sessionStorage.setItem('igLogin',response.data.igLogin);
			navigate("/dashboard");
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	};
	    
	return (
		<div className="loginBox">
			<form onSubmit={submitForm}>
				<label>
					<input type="text" placeholder="Phone number, username, or email" value={username}
					 onChange={setUsernameValue} />
				</label>
				<label>
					<input type="password" placeholder="Password" value={password}
					 onChange={setPasswordValue} />
				</label>
				<input className={canLogin ? 'canLogin' : ''} disabled={!canLogin} type="submit" value="Log In" />
			</form>
		</div>
	);
};