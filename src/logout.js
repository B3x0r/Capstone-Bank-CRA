import React from 'react';
import { UserContext, Card } from './context';

function Logout() {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const {isLoggedin, setIsLoggedin, validateLogin} = React.useContext(UserContext);

	const handleLogout = () => {
		setIsLoggedin(false);
	};

	return (
		<Card
			bgcolor="info"
			header="Log Out"
			body={
				<button type="submit"
					className="btn btn-light"
					onClick={handleLogout}>
					Logout User
				</button>
      }
    />
	)
}

export default Logout;
