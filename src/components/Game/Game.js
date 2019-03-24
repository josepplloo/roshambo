import React, { Fragment } from 'react';

import './Game.scss';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: ['Rock', 'Paper','Scissor'],
      player1: props.player1,
      player2: props.player2,
      movements: [],
      xIsNext: true,
      matchResults: [],
      history: [],
      gameover: props.gameover,
      winner:''

    }
  }

  handleWinner(winner) {
    this.props.onGameOver({gameover: winner});
    console.log(this.state.gameover);
    this.setState({winner: winner });
  }

  /**
   * Set the state when the user play
   * @param {Event} event 
   */
  handleMovement(event) {

    const { movements, matchResults, history } = this.state;
    let { xIsNext } = this.state;
    movements.push(event.target.value);
    const isMatchCompleted = movements.length === 2

    if(this.calculateTotalWinner(history)||matchResults.length > 4) {
      this.handleWinner(this.calculateTotalWinner(history) || '💻' )
      return;
    }

    if( isMatchCompleted ) {
      const currentWinner = this.getWinner(movements);
      
      this.setState({
        matchResults: matchResults.concat(currentWinner)
      });

     this.setState({movements: []});
    }
 
    this.setState({xIsNext: !xIsNext})
    event.target.value="Your move";
  }

  /**
   * With the 2 plays look for 
   * a win in the Object called gameRules
   * @param {Array} movements 
   * @returns The label to show in the page
   */
  getWinner(movements) {
    const { history, player1, player2 } = this.state;

    const gameRules = {
      Rock: {  Paper: false, Scissor: true },
      Paper: { Scissor: false, Rock: true },
      Scissor: { Rock: false, Paper: true },
    };

    if (movements[0] === movements[1] ) {
      return "There is a draw!";
    }

    //look for a winner e.g 
    //given that gameRules["Rock"]["Scissor"]
    //return True, Player 1 wins!
    if( gameRules[movements[0]][movements[1]] ) {
      this.setState({
        history: history.concat([
          {
            winner: player1,
          }
        ])
      });
      return `${player1} Won the match`;
    } else {
      this.setState({
        history: history.concat([
          {
            winner: player2,
          }
        ])
      });
      return `${player2} Won the match`;
    }
  }

  /**
   * Counts if a player wins three times
   * @param {Array} hystoryOfGames 
   * @returns If winner exist
   */
  calculateTotalWinner(hystoryOfGames) {
    
    let countedNames = hystoryOfGames.reduce((allNames, {winner}) => { 
      if (winner in allNames) {
        allNames[winner]++;
      }
      else {
        allNames[winner] = 1;
      }
      return allNames;
    }, {});
    
    if (countedNames[this.state.player1] >= 3){
      return this.state.player1;
    }
    if (countedNames[this.state.player2] >= 3){
      return this.state.player2;
    }
    return null;
  }
  
  render() {
    const player1 = this.props.player1;
    const player2 = this.props.player2;
    const moves = this.state.moves;
    const history = this.state.history;
    const winnerExist = this.calculateTotalWinner(history);
    const matchResults = this.state.matchResults;
    const currentRound = matchResults.length;

    let allMatches = '';

    if (currentRound > 0) {
       allMatches =  matchResults.map((result, index) => (
        <li key={result+index}> {result} </li>
      ))
    } else {
       allMatches = <li>No matches yet.</li>
    }

    let status;

    if (winnerExist) {
      status = `${winnerExist} is Champion, choose a move to continue..`;
    } else {
      if (matchResults.length > 4) {
        status = 'There is a Draw!, choose a move to continue..'
      } else {
        status = `${ this.state.xIsNext ? player1 : player2} is your turn!`
      }
    }

    return (
      <Fragment>
        <article className="game__match"> 
          <h1>Round {currentRound+1}</h1>
          <h3 className="game__status">{status}</h3>
          <select className="game__select" 
            name="move" id="move"
            onChange={(event) => this.handleMovement(event)}
            defaultValue="Your move"
          >
            <option value="Your move" disabled>Pick one</option>
            {moves.map((move) => (
              <option key={move} value={move}>{move}</option>
            ))}
          </select>
        </article>
        <aside className="game__log">
          <h3>Score Log</h3>
          <ol>
              {allMatches}
          </ol>
        </aside>
      </Fragment>
    );
  }
}