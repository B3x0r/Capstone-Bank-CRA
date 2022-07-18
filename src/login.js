import React from 'react';
import { validate } from './utility';
import { UserContext, Card } from './context';

function Login() {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const {isLoggedin, setIsLoggedin, validateLogin} = React.useContext(UserContext);


	const handleLogin = () => {
		if (!validate(email, "email")) return;
		if (!validate(password, "password")) return;

		validateLogin ({email, password}).
			then(() => {
				setIsLoggedin(true)
				setEmail('');
				setPassword('');
			}).
			catch(() => setIsLoggedin(false));
	};

	const handleLogout = () => {
		setIsLoggedin(false);
	};

	return (
		<Card
			bgcolor="info"
			header="Create Account"
			body={
				!isLoggedin ? (
					<>
						Login
						<br />
						Email address
						<br />
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder="Enter email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<br />
						Password
						<br />
						<input
							type="password"
							className="form-control"
							id="password"
							placeholder="Enter password"
							value={password}
							onChange={(e) => setPassword(e.currentTarget.value)}
						/>
						<br />
						<button
							type="submit"
							className="btn btn-light"
							disabled={!email.length && !password.length}
							onClick={handleLogin}
						>
							Login
						</button>
					</>
				) : (
					<>
						<h5>User is logged in</h5>
						<button type="submit"
							className="btn btn-light"
							onClick={handleLogout}>
							Logout User
						</button>
					</>
				)
			}
		/>
	);
}

export default Login;
