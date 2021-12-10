import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
	render() {
		return (
			<main>
				<section className="min-vh-100 d-flex align-items-center bg-secondary">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <div className="card card-tertiary w-100 fmxw-400">
                                    <div className="card-header text-center">
                                        <span>Register on our platform</span>
                                    </div>
                                    <div className="card-body">
                                        <form action="#" className="mt-4">
                                            <div className="form-group">
                                                <label for="email" className="mb-2">Email</label>
                                                <input id="email" type="email" className="form-control" placeholder="Your email" required/>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-group">
                                                    <label for="password" className="mb-2">Password</label>
                                                    <input id="password" type="password" className="form-control" placeholder="Your password" required/>
                                                </div>
                                                <div className="form-group">
                                                    <label for="confirmPassword" className="mb-2">Confirm password</label>
                                                    <input id="confirmPassword" type="password" className="form-control" placeholder="Confirm password" required/>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input className="form-check-input" type="checkbox" />
                                                            <span className="form-check-x"></span>
                                                            <span className="form-check-sign"></span>
                                                            I agree to the <Link to="#">terms and conditions</Link >
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-block btn-primary">Register account</button>
                                        </form>
                                        <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                                            <p className="font-weight-normal">
                                                Already have an account?
                                                <Link to="/login" className="font-weight-bold">Login here</Link >
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
			</main>
		);
	}
}

export default Login;