import React from 'react';
import Pokemon from '../Pokemon';


class ButtonFire extends React.Component {
	constructor() {
		super()
		this.state = {
			fireClickButton: 'fire',
		};
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick() {
		this.setState({
			// fireClickButton:{ pokemons
			// .filter((pokemon) => pokemon.type === this.state.fireClickButton)
			// .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
			
		})
	}
	
	render() {
		return(
			<button onClick={this.handleClick}>Fire type</button>
		)
	}
}

export default ButtonFire;