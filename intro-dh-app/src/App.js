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
import MichaelJackson from './components/michael-jackson';
import TravisScott from './components/travis-scott';
import BTS from './components/bts';
import TaylorSwift from './components/taylor-swift';

class App extends Component {
	render() {
		return (
			<div>
				<Menu />
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/articles" element={<Articles />} />
					<Route path="/michael-jackson" element={<MichaelJackson />} />
					<Route path="/travis-scott" element={<TravisScott />} />
					<Route path="/bts" element={<BTS />} />
					<Route path="/taylor-swift" element={<TaylorSwift />} />
				</Routes>
			</div>
		);
	}
}

export default App;
