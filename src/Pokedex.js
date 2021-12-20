import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className='Pokedex-winner'>WINNER!</h1>;
    }
    if (!this.props.isWinner) {
      title = <h1 className='Pokedex-loser'>LOSER</h1>;
    }
    return (
      <div className='Pokedex'>
        {title}
        <p>Total Experience Points: ${this.props.exp}</p>
        <div className='Pokedex-cards'>
          {this.props.pokemon.map(p => (
            <Pokecard
              key={p.id}
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
