import React, { Component, Fragment } from 'react';
import  {BrowserRouter as Router,
  Route, Switch, Link, Redirect} from "react-router-dom";
  
import Welcome from './Welcome/Welcome';
import Game from './Game/Game'
import Winner from './Winner/Winner';
import Podium from './Podium/Podium';
  
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: '',
      player2: '', 
      gameover: '',
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
   * Set true if the game over
   * @param {Bolean} gameover
   */
  handleGameOver(gameover) {
    console.log(gameover.gameover);
    
    this.setState({gameover: gameover.gameover});
  }

  /**
   * Validates the  players names to redirect
   * to the others views 
   * @returns true if playes names are valid
   */
  validatePlayers() {
    const state = this.state;
    const arePlayersReady = ((state.player1.trim().length > 0) &&
    (state.player2.trim().length > 0) );

    return arePlayersReady ? true : false;
  }

//Routing functions ***

  welcome() {
    return (
      <div className="welcome__container">
        <Welcome 
          onPlayer1change={(player1) => this.handlePlayer1(player1)}
          onPlayer2change={(player2) => this.handlePlayer2(player2)} 
        />
        <div className="winner__links-container">
          <span className="welcome__links">
            <Link to="/game">Start Game!</Link>
          </span> 
          <span className="welcome__links">
            <Link to="/podium">Game Scores!</Link>
          </span> 
        </div>
      </div>  
    );
  }

  game(props) {    
    return (
    <div className="game__container">
      <Game player1={props.player1} 
        player2={props.player2} 
        onGameOver={gameover => this.handleGameOver(gameover)}/>
      {this.state.gameover? 
        <span className="game__links">
          <Link replace to="/winner">Results</Link>
        </span> : 
        <span></span>
      }
    </div>
    )
  }

  winner(props) {
    return (
      <div className="winner__container">
        <Winner  gameover={props.gameover} />
        <div className="winner__links-container">
          <span className="winner__links">
            <Link replace to="/">Play again!</Link>
          </span>
          <span className="winner__links">
            <Link replace to="/podium">See the scores</Link>
          </span>
        </div>
        </div>
    )
  }

  podium() {
    return (
      <div className="podium__container">
        <Podium />
        <span className="podium__links">
          <Link replace to="/">Play again!</Link>
        </span>
      </div>
    )
  }

//*** End of touting functions

  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" render={() => this.welcome()}/>
            <Route path="/game" render={() =>( 
              this.validatePlayers() ?
                this.game(this.state)
              : <Redirect to="/" /> )
              }/>
            <Route path="/winner" render={() => this.winner(this.state)}/>
            <Route path="/podium" render={() => this.podium()}/>
            <Route render={() => <h1>404 Page not found</h1>}/>
          </Switch>
        </Fragment>
      </Router>
    );
  }
 
}