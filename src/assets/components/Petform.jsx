import React from "react";
import axios from "axios";
export class Petform extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
			formErrors: { email: "", password: "" },
			emailValid: false,
			passwordValid: false
		};
	}

	handleUserInput(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value }, () => {
			this.validateField(name, value);
		});
	}

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid = this.state.emailValid;
		let passwordValid = this.state.passwordValid;

		switch (fieldName) {
			case "email":
				emailValid = value.match(
					/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
				);
				fieldValidationErrors.email = emailValid ? "" : " is invalid";
				break;
			case "password":
				passwordValid = value.length >= 6;
				fieldValidationErrors.password = passwordValid
					? ""
					: " is too short";
				break;
			default:
				break;
		}

		this.setState(
			{
				formErrors: fieldValidationErrors,
				emailValid: emailValid,
				passwordValid: passwordValid
			},
			this.validateForm
		);
	}

	validateForm() {
		return this.state.emailValid && this.state.passwordValid;
	}

	submit(e) {
		e.preventDefault();

		if (this.validateForm()) {
			const formFields = {
				email: this.state.email,
				password: this.state.password
			};

			axios
				.post("/api/register", formFields)
				.then(function(response) {
					console.log(response);
					//Perform action based on response
				})
				.catch(function(error) {
					console.log("error: " + error);
					//Perform action based on error
				});
		}
	}
	render() {
		return (
			<div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <div className="formErrors">
                        {Object.keys(this.state.formErrors).map((fieldName, i) => {
                            if (this.state.formErrors[fieldName].length > 0) {
                                return (
                                    <p key={i}>
                                        {fieldName}{" "}
                                        {this.state.formErrors[fieldName]}
                                    </p>
                                );
                            } else {
                                return "";
                            }
                        })}
                    </div>
                        <form onSubmit={event => this.submit(event)}>
					<h2>Sign up</h2>
					<div>
						<label>Email address</label>
						<input
							type="email"
							className="form-control"
							name="email"
							value={this.state.email}
							onChange={event => this.handleUserInput(event)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control"
							name="password"
							value={this.state.password}
							onChange={event => this.handleUserInput(event)}
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary"
						disabled={!this.validateForm()}
					>
						Sign up
					</button>
				</form>
                    </div>
                </div>
			</div>
		);
	}
}
