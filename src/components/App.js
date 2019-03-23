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
      history: [{
        games: Array(5).fill(''),
      }],
    }
  }

  handlePlayer1(player1) {
    this.setState({player1});
  }

  handlePlayer2(player2) {
    this.setState({player2});
  }

  arePlayersReady() {
    const state = this.state;
    
    if ((state.player1.trim().length < 1) ||
      (state.player2.trim().length < 1) ) {
        return false;
      } else {
        return true;
      }
  }

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
    console.log(props);
    
    return (
    <div className="app__play">
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

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => this.welcome()}/>
            <Route path="/game" render={() =>( 
              this.arePlayersReady() ?
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