import React, { Component } from 'react';
import './App.css';
import Game from './Game.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      player1: '',
      player2: '', 
      history: [{
        games: Array(5).fill(''),
      }],
    }
  }

  setPlayers() {
    console.log(this.state.player1)
    this.setState({playing: !this.state.playing})
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1>Welcome to the Game.</h1>
          <div className="players__container">
            <input className="players__text" type="text" placeholder="Player 1" onChange={(event) => this.setState({player1: event.target.value})}/>
            <p>VS</p>
            <input className="players__text" type="text" placeholder="Player 2" onChange={(event) => this.setState({player2: event.target.value})}/>
          </div>
          <button className="players__button" type="button" onClick={() => this.setPlayers()}>Start Game !</button>
        </header>
        <section className="app__winner">
          <h1>The winner was Player :   </h1>
          <button className="players__button" type="button">Play Again !</button>
        </section>
        {this.state.playing && <Game />}
      </div>
    );
  }
}

export default App;
//lowdb
