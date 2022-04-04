import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Menu from "./components/navbar";
import Index from "./components/index";

class App extends Component {
	render() {
		return (
			<div>
				<Menu />
				<Routes>
					<Route path="/" element={<Index />} />
					{/* <Route path="/paint" element={<Paint />} />
					<Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
					<Route path="/profile/:id" element={<Profile />} /> */}
				</Routes>
			</div>
		);
	}
}

export default App;
