import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Game from './Game'
import Winner from './Winner';
import  {BrowserRouter as Router,
Route} from "react-router-dom";


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

  welcome(b) {
    return (
      <Welcome 
        onPlayer1change={(player1) => this.handlePlayer1(player1)}
        onPlayer2change={(player2) => this.handlePlayer2(player2)}
      /> 
    );
  }

  render() {
    return (
      <Router>
        <Route 
          path="/"
          component={() => this.welcome()}
        />
        
      </Router>
      
    );
  }
 
}