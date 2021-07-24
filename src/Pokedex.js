import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            currentPokemon: 0,
            firePokemon: 'fire',
            
        }
        this.handleNextButtonClick = this.handleNextButtonClick.bind(this)
        this.handleFireButtonClick = this.handleFireButtonClick.bind(this)
    }

    handleNextButtonClick() {
        this.setState(({ currentPokemon }) => (
            {currentPokemon: (currentPokemon + 1) % pokemons.length,}
        ));
    }

    handleFireButtonClick() {
        this.setState(({ firePokemon }) => {
            const filterFirePokemons = pokemons.filter(pokemon => pokemon.type === firePokemon);
            return <Pokemon pokemon={filterFirePokemons[this.state.currentPokemon]} />
        });
    }

    render() {
        const { pokemons } = this.props;
        return (
            <div className="pokedex">
                <Pokemon pokemon={pokemons[this.state.currentPokemon]} />
                <button onClick={this.handleNextButtonClick} className="btns next-pokemon">Next pokemon</button>
                <button onClick={this.handleFireButtonClick} className="btns fire">Fire type</button>
            </div>
        );
    }
}


export default Pokedex;