import React from 'react';
// import pokemons from './data';
// import Pokedex from './Pokedex';

class Buttons extends React.Component {
	constructor() {
		super()
		this.handleButtonCLick = this.handleButtonCLick.bind(this)
	}

	handleButtonCLick() {

	}

	render() {
		return(
			<div className="btns-container">
				<button className="btns all-pokemons">All Pokemons</button>
				<button className="btns fire">Fire type</button>
				<button className="btns poison">Poison type</button>
				<button className="btns psychic">Psychic type</button>
				<button className="btns eletric">Eletric type</button>
				<button className="btns dragon">Dragon type</button>
				<button className="btns normal">Normal type</button>				
			</div>
		)
	}
}

export default Buttons;