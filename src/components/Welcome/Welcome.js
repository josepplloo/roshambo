import React, { Fragment } from 'react';

import './Welcome.scss'

export default class Welcome extends React.Component {

  /**
   * Set the value in the input text
   * for player 1
   * @param {Event} event 
   */
  text1HandleChange(event) {
    this.props.onPlayer1change(event.target.value);
  }

  /**
   * Set the value in the input text
   * for player 2
   * @param {Event} event 
   */
  text2HandleChange(event) {
    this.props.onPlayer2change(event.target.value);
  }

  render() {
    return (
      <Fragment>
        <h1 className="welcome__title">Welcome to the Game.</h1>
        
          <input className="welcome__text" 
            type="text" 
            placeholder="Player 1" 
            onChange={(event) => this.text1HandleChange(event)}
          />
          <p className="welcome__vs">VS</p>
          <input className="welcome__text" 
            type="text" 
            placeholder="Player 2" 
            onChange={(event) => this.text2HandleChange(event)}/>
        
      </Fragment>  
    )
  }
}