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
      history:[{
        winner: '',
        round: 0,  
      }] 
    }
  }

  /**
   * Set the state when the user play
   * @param {Event} event 
   */
  handleMovement(event) {
    const { movements, matchResults } = this.state;
    let { xIsNext } = this.state;
    movements.push(event.target.value);
    const isMatchCompleted = movements.length === 2

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
   */getWinner(movements) {
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

  render() {
    const player1 = this.props.player1;
    const player2 = this.props.player2;
    const moves = this.state.moves;
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

    return (
      <Fragment>
        <article className="game__match"> 
          <h1>Round {currentRound+1}</h1>
          <h3>{ this.state.xIsNext ? player1 : player2} is your turn!</h3>
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