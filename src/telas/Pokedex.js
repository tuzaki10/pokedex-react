import React, { Component } from 'react';
import Topbar from '../componentes/Topbar.jsx';
import PokemonCard from '../componentes/PokemonCard.jsx';

const listaPokemons = props => [3, 10, 200, 350, 760, 42, 230, 79].map( id => {
  return (
      <div style={{ margin: 16, cursor: 'poiter' }} key={id} onClick={() => props.history.push(`/pokemon/${id}`)}>
        <PokemonCard key={id} pokemonId={id} />
      </div>
  )
})

class Pokedex extends Component {
  render() {
    return (
      <div>
        <Topbar titulo="Pokedex" cor="secondary" />
        <div style={{ marginTop: 72 }}>{listaPokemons(this.props)}
        </div>
      </div>
    );
  }
}

export default Pokedex;
