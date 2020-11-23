import Navbar from './Components/Navbar';
import LoginForm from './Components/LoginForm';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Stuff from './Components/Stuff';

const App = () => {
	const [status, setStatus] = useState(localStorage.status);
	const [token, setToken] = useState(localStorage.token);

	const setState = (status, token) => {
		setStatus(status);
		setToken(token);
		localStorage.status = status;
		localStorage.token = token;
	};

	const logOut = () => {
		setStatus(undefined);
		setToken(undefined);
		localStorage.removeItem('status');
		localStorage.removeItem('token');
	};

	return (
		<>
			<Navbar status={status} logOut={logOut} />
			<Switch>
				<Route exact path='/:status/:idOne/:idTwo' component={Stuff} />
				<Route
					exact
					path='/'
					component={() => !token && <LoginForm setState={setState} />}
				/>
			</Switch>
		</>
	);
};

export default App;
