import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: ['Rock', 'Paper','Scissor'],
      round: 1,
      player1: props.player1,
      player2: props.player2,
      xIsNext: true
    }
  }

  handleMove(event) {
    console.log(event.target.value);
    this.setState({xIsNext: !this.state.xIsNext})
    event.target.value="1";
  }

  render() {
    const player1 = this.props.player1;
    const player2 = this.props.player2;
    const moves = this.state.moves;

    return (
      <div>
        <article className="app__round"> 
          <h1>Round {this.state.round}</h1>
          <h3>{ this.state.xIsNext? player1 : player2} is your Turn!</h3>
          <select className="app__move-select" 
            name="move" id="move"
            onChange={(event) => this.handleMove(event)}
            defaultValue="1"
          >
            
            <option value="1" disabled>Your Move</option>
            {moves.map((move) => (
              <option key={move} value={move}>{move}</option>
            ))}
          
          </select>
        </article>
        <aside className="app__score">
          <h3>Score</h3>
          <div className="score__log">
            <h5>Round</h5>
            <h5>Winner</h5>
          </div>
          <ul>
              <li> # Winner</li>
          </ul>
        </aside>
      </div>
    );
  }
}