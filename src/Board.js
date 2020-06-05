import React, { Component } from "react";

import Cell from "./Cell";

class Board extends Component {
	state = {
		player: "X",
		cells: new Array(9).fill(""),
	};

	isWinner(c) {
		const winner = [
			`${c[0]}${c[1]}${c[2]}`,
			`${c[3]}${c[4]}${c[5]}`,
			`${c[6]}${c[7]}${c[8]}`,
			`${c[0]}${c[3]}${c[6]}`,
			`${c[1]}${c[4]}${c[7]}`,
			`${c[2]}${c[5]}${c[8]}`,
			`${c[0]}${c[4]}${c[8]}`,
			`${c[2]}${c[4]}${c[6]}`,
		];

		return winner
			.map((n, i) => (n === "XXX" || n === "OOO" ? true : false))
			.filter((n) => n !== false)[0];
	}

	clickHandler = (id) => {
		const { cells, player } = this.state;
		const nextPlayer = player === "X" ? "O" : "X";
		if (cells[id] === "" && !this.isWinner(cells)) {
			cells[id] = this.state.player;
			this.setState({ player: nextPlayer, cells });
		}
	};

	gameState = (board, player) => {
		const currentPlayer = { X: "O", O: "X" };
		if (this.isWinner(board)) {
			return `Palyer ${currentPlayer[this.state.player]} won!!!`;
		} else if (board.filter((cell) => cell === "").length > 0) {
			return `Next Player ${player}`;
		}
		return `No Winner, Play again`;
	};

	startOver = () => {
		this.setState({ player: "X", cells: new Array(9).fill("") });
	};

	render() {
		const { cells, player } = this.state;
		const board = cells.map((cell, i) => {
			return <Cell onClickProps={this.clickHandler} value={cell} id={i} />;
		});

		return (
			<>
				<div className="board">{board}</div>
				<h4 className="flex">{this.gameState(cells, player)}</h4>
				<button className="btn flex" onClick={this.startOver}>
					Start Over
				</button>
			</>
		);
	}
}

export default Board;
