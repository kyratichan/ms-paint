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
										<span>Sign in to our platform</span>
									</div>
									<div className="card-body">
										<form action="#" className="mt-4">
											<div className="form-group">
												<label for="email" className="mb-2">Email</label>
												<input id="email" type="email" className="form-control" placeholder="Your email" required />
											</div>

											<div className="form-group">
												<div className="form-group">
													<label for="password" className="mb-2">Password</label>
													<input id="password" type="password" className="form-control" placeholder="Your password" required />
												</div>

												<div className="d-flex justify-content-between align-items-center mb-4">
													<div className="form-check">
														<label className="form-check-label">
															<input className="form-check-input" type="checkbox" />
															<span className="form-check-x"></span>
															<span className="form-check-sign"></span>
															Remember me
														</label>
													</div>
													<p className="m-0">
														<Link to="#" className="text-right">
															Lost password?
														</Link>
													</p>
												</div>
											</div>
											<button type="submit" className="btn btn-block btn-primary">Login</button>
										</form>
										<div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
											<p className="font-weight-normal">
												Not registered?
											</p>
											<p>
												<Link to="/signup" className="font-weight-bold">
													Create account
												</Link>
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