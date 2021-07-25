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
        this.handlePsychicButtonClick = this.handlePsychicButtonClick.bind(this);
        this.handlePoisonButtonClick = this.handlePoisonButtonClick.bind(this)
        this.handleElectricButtonClick = this.handleElectricButtonClick.bind(this)
        this.handleDragonButtonClick = this.handleDragonButtonClick.bind(this)
        this.handleNormalButtonClick = this.handleNormalButtonClick.bind(this)
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
        this.setState(() => ({
                currentPokemon: 0,
                pokemonType: 'Fire'
        }));
    }
    
    handlePsychicButtonClick() {
        this.setState(() => ({
                currentPokemon: 0,
                pokemonType: 'Psychic'
        }))
    }

    handlePoisonButtonClick() {
        this.setState(() => ({
                currentPokemon: 0,
                pokemonType: 'Poison'
        }))
    }

    handleElectricButtonClick() {
        this.setState(() => ({
                currentPokemon: 0,
                pokemonType: 'Electric'
        }))
    }

    handleDragonButtonClick() {
        this.setState(() => ({
                currentPokemon: 0,
                pokemonType: 'Dragon'
        }))
    }

    handleNormalButtonClick() {
        this.setState(() => ({
                currentPokemon: 0,
                pokemonType: 'Normal'
        }))
    }

    render() {
        const { pokemons } = this.props;
        return (
            <div className="pokedex">
                {this.filteredPokemon(pokemons)}
                <button onClick={this.handleNextButtonClick} className="btns next-pokemon">Next pokemon</button>
                <button onClick={this.handleFireButtonClick} className="btns fire">Fire type</button>
                <button onClick={this.handlePsychicButtonClick} className="btns psychic">Psychic type</button>
            	<button onClick={this.handlePoisonButtonClick} className="btns poison">Poison type</button>
                <button onClick={this.handleElectricButtonClick} className="btns eletric">Eletric type</button>
				<button onClick={this.handleDragonButtonClick} className="btns dragon">Dragon type</button>
				<button onClick={this.handleNormalButtonClick} className="btns normal">Normal type</button>	

            </div>
        );
    }
}


export default Pokedex;