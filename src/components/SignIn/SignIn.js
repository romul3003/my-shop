import React, { Component } from 'react'
import './SignIn.scss'

class SignIn extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()

		this.setState({ email: '', password: '' })
	}

	onHandleChange = (event) => {
		const { value, name } = event.target

		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className="sing-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<input
						name="email"
						type="email"
						value={this.state.email}
						required
						onChange={this.onHandleChange}
					/>
					<label htmlFor="">Email</label>
					<input
						name="password"
						type="password"
						value={this.state.password}
						required
						onChange={this.onHandleChange}
					/>
					<label htmlFor="">Password</label>

					<input type="submit" value="Submit form" />
				</form>
			</div>
		)
	}
}

export default SignIn
