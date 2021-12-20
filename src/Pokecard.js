import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API =
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    const addz = id => {
      let newId = id.toString();
      if (newId.length === 1) {
        newId = `00${newId}`;
      } else if (newId.length === 2) {
        newId = `0${newId}`;
      }
      return newId;
    };
    let imgSrc = `${POKE_API}${addz(id)}.png`;
    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{name}</h1>
        <div className='Pokecard-image'>
          <img src={imgSrc} alt={name} />
        </div>
        <div className='Pokecard-data'>Type: {type}</div>
        <div className='Pokecard-data'>Experience: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;
