import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Menu from "./components/navbar";
import Index from "./components/index";
import Articles from "./components/articles";

class App extends Component {
	render() {
		return (
			<div>
				<Menu />
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/articles" element={<Articles />} />
				</Routes>
			</div>
		);
	}
}

export default App;
