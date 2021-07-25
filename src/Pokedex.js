import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            currentPokemon: 0,
            pokemonType: 'all',           
        };
        this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
        this.handleFireButtonClick = this.handleFireButtonClick.bind(this);
        this.filteredPokemon = this.filteredPokemon.bind(this);
    }
    
    filteredPokemon(pokemons) {
        const { currentPokemon, pokemonType } = this.state;
        if(pokemonType !== 'all') {
            const filteredPokemon = pokemons.filter((pokemon) => pokemon.type === pokemonType)
            return <Pokemon pokemon={filteredPokemon[currentPokemon]}/>            
        }
        return <Pokemon pokemon ={pokemons[currentPokemon]}/>;   
    }
    
    handleNextButtonClick() {
        this.setState(({ currentPokemon }) => (
            {currentPokemon: (currentPokemon + 1) % pokemons.length,}
            ));
        }
        
    handleFireButtonClick() {
        this.setState(({ pokemonType }) => ({
                currentPokemon: 0,
                pokemonType: pokemonType.replace(pokemonType, 'fire')
            }))
    }
        
    render() {
        const { pokemons } = this.props;
        return (
            <div className="pokedex">
                {this.filteredPokemon(pokemons)}
                <button onClick={this.handleNextButtonClick} className="btns next-pokemon">Next pokemon</button>
                <button onClick={this.handleFireButtonClick} className="btns fire">Fire type</button>
            </div>
        );
    }
}


export default Pokedex;