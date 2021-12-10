// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './w95.css';
import React, { Component } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Desktop from "./components/Desktop";
import Paint from "./components/Paint";
import Profile from "./components/Profile";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Desktop />} />
					<Route path="/paint" element={<Paint />} />
					<Route path="/login" element={<Login />} />
          			<Route path="/signup" element={<Signup />} />
					<Route path="/profile/:id" element={<Profile />} />
				</Routes>
			</div>
		);
	}
}

export default App;
