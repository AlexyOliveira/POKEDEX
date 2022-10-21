import React from 'react';
import Pokemon from './Pokemon';
import pokemonList from '../data';

class Pokedex extends React.Component {
  render() {
    return (
      <>
        <h1>Pokédex</h1>
        <ul>
          {
            pokemonList.map((eachPokemon) => (
              <Pokemon key={ eachPokemon.id } pokemon={ eachPokemon } />
            ))
          }
        </ul>
      </>
    );
  }
}

export default Pokedex;
