import React from 'react';
import axios from 'axios'

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { login: '', pass: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	async handleSubmit(e) {
    e.preventDefault()
			try {
				const config = {
					headers: {
						'Content-Type': 'application/json',
					},
				};

				const res = await axios.post(
					// Please create .env file with REACT_APP_BASE_URL key-value pair if you are developer in order for this web-site to work
					`${proccess.env.REACT_APP_BASE_URL}/api/login`,
					this.state,
					config
				);
        
        if(res.status === 200) {
          this.props.setState(res.data.user.status, res.data.token)
        }
			} catch (err) {
        if(err.response.status === 401){
          console.clear()
          alert('Invalid credentials');
        } else console.log(err);
			}
		};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
        <h1>Hello, Welcome Back</h1>
				<div>
					<label htmlFor='login'>Name:</label>
					<input
            type='text'
            id='login'
            name='login'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password:</label>
					<input
            type='password'
            id='password'
            name='pass'
						value={this.state.pass}
						onChange={this.handleChange}
					/>
				</div>
				<button type='submit' >
          Log In
        </button>
			</form>
		);
	}
}

export default LoginForm;
