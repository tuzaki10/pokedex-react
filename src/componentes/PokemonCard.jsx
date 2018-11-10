import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { ClickAwayListener } from '@material-ui/core';

class PokemonCard extends React.Component {
    state = {
        foto:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
        nome: 'Bastoise'
    };

    componentDidMount() {
        this.carregarPokemon();
    };

    carregarPokemon = async () => {
        console.log(this.props.pokemonId);
        const response = await fetch(`/api/v2/pokemon/${this.props.pokemonId}/`);
        const data = await response.json();
        const nome = data.name;
        const foto =data.sprites.front_default;
        this.setState({ nome, foto });
    };

    render () {
        const { foto, nome } = this.state;
        return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar src={foto} aria-label="Recipe" style={{ width: 64, height: 64 }}/>
                }
                title={nome}
            />
        </Card>
        );
    }
}

export default PokemonCard;