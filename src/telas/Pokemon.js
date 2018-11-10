import React, { Component } from 'react';
import Topbar from '../componentes/Topbar.jsx';
import PokemonCard from '../componentes/PokemonCard.jsx';

class Pokemon extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <Topbar titulo="Pokemon" cor="secondary" />
        <div style={{ marginTop: 72 }}>
          <PokemonCard pokemonId={id} />
        </div>
      </div>
    );
  }
}

export default Pokemon;
