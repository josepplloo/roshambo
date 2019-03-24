import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Game from './Game'
import Winner from './Winner';
import  {BrowserRouter as Router,
Route, Switch, Link, NavLink, Redirect} from "react-router-dom";
import Podium from './Podium';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: '',
      player2: '', 
    }
  }
  /**
   * Set the player 1 in the state
   * @param {String} player1 
   */
  handlePlayer1(player1) {
    this.setState({player1});
  }

  /**
   * Set the player 2 in the state
   * @param {String} player2
   */
  handlePlayer2(player2) {
    this.setState({player2});
  }

  /**
   * Validates the  players names to redirect
   * to the others views 
   * @returns true if playes names are valid
   */
  validatePlayers() {
    const state = this.state;
    const arePlayersReady = ((state.player1.trim().length > 1) ||
    (state.player2.trim().length > 1) );

    return arePlayersReady ? true : false;
   
  }

//Routing functions ***

  welcome() {
    return (
      <div className="app__header">
        <Welcome 
          onPlayer1change={(player1) => this.handlePlayer1(player1)}
          onPlayer2change={(player2) => this.handlePlayer2(player2)}
        />
        <NavLink to="/game">Start Game!</NavLink> 
      </div>  
    );
  }

  game(props) {    
    return (
    <div>
      <Game player1={props.player1} player2={props.player2}/>
      <Link replace to="/winner">Winner</Link>
    </div>
      
    )
  }

  winner() {
    return (
      <div>
        <Winner />
        <Link replace to="/">Play again!</Link>
        <Link replace to="/podium">See the scores</Link>
      </div>
    )
  }

  podium() {
    return (
      <div>
        <Podium />
        <Link replace to="/">Play again!</Link>
      </div>
    )
  }

//*** End of touting functions

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => this.welcome()}/>
            <Route path="/game" render={() =>( 
              this.validatePlayers() ?
                this.game(this.state)
              : <Redirect to="/" /> )
              }/>
            <Route path="/winner" render={() => this.winner()}/>
            <Route path="/podium" render={() => this.podium()}/>
            <Route render={() => <h1>404 Page not found</h1>}/>
          </Switch>
        </div>
      </Router>
    );
  }
 
}