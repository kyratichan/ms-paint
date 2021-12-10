import React, { Component } from "react";

//class component
class Profile extends Component {
	render() {
		return (
			<div className="about w3-panel w3-light-blue">
				<h1>User Name</h1>
				<p>This is some information about the user.</p>
			</div>
		);
	}
}

export default Profile;