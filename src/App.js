import React, { Component } from "react";
import "./App.css";
import Game from "./Game";

class App extends Component {
	state = {};
	render() {
		return (
			<div className="App">
				<h1>Tic Tac Toe</h1>
				<Game />
			</div>
		);
	}
}

export default App;
