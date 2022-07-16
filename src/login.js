import React from 'react';
import { UserContext, Card } from './context';

function Login() {
const [name, setName] = React.useState('');
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const [isLoggedin, setIsLoggedin] = React.useContext(UserContext);

const Login = (e) => {
	e.preventDefault();
	console.log(name, email, password);
	const userData = {
	name,
	email,
	password,
	};
	localStorage.setItem('token-info', JSON.stringify(userData));
	setIsLoggedin(true);
	setName('');
	setEmail('');
	setPassword('');
};

const logout = () => {
	localStorage.removeItem('token-info');
	setIsLoggedin(false);
};

return (
	<>
	<div style={{ textAlign: 'center' }}>
		<h1>Login</h1>
		{!isLoggedin ? (
		<>
			<form action="">
			<input
				type="text"
				onChange={(e) => setName(e.target.value)}
				value={name}
				placeholder="Name"
			/>
			<input
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				placeholder="Email"
			/>
			<input
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				placeholder="Password"
			/>
			<button type="submit" onClick={Login}>
				GO
			</button>
			</form>
		</>
		) : (
		<>
			<h1>User is logged in</h1>
			<button onClickCapture={logout}>logout user</button>
		</>
		)}
	</div>
	</>
);
}

export default Login;
