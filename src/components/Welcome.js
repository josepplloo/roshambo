import React from 'react';


export default class Welcome extends React.Component {

  text1HandleChange(event) {
    this.props.onPlayer1change(event.target.value);
  }

  text2HandleChange(event) {
    this.props.onPlayer2change(event.target.value);
  }

  render() {
    return (
      <header className="app__header">
          <h1>Welcome to the Game.</h1>
          <div className="players__container">
            <input className="players__text" 
              type="text" 
              placeholder="Player 1" 
              onChange={(event) => this.text1HandleChange(event)}
            />
            <p>VS</p>
            <input className="players__text" 
              type="text" 
              placeholder="Player 2" 
              onChange={(event) => this.text2HandleChange(event)}/>
          </div>
          <button className="players__button" type="button" onClick={() => this.setPlayers()}>Start Game !</button>
        </header>
    )
  }
}