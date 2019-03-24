import React, {Fragment} from 'react'
import './Winner.scss'

export default class Winner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameover: props.gameover,
    }
  }
    
  render() {
    const winner = this.state.gameover;
    console.log(winner)
    return (
      
      <Fragment>
        <div className="animation__background">
          <ul className="bg__bubbles--rigth">
            <li className="bg__bubble bg__bubble1"></li>
            <li className="bg__bubble bg__bubble2"></li>
            <li className="bg__bubble bg__bubble3"></li>
            <li className="bg__bubble bg__bubble4"></li>
            <li className="bg__bubble bg__bubble5"></li>
            <li className="bg__bubble bg__bubble6"></li>
            <li className="bg__bubble bg__bubble7"></li>
            <li className="bg__bubble bg__bubble8"></li>
            <li className="bg__bubble bg__bubble9"></li>
          </ul>
          <ul className="bg__bubbles--left">
            <li className="bg__bubble bg__bubble1"></li>
            <li className="bg__bubble bg__bubble2"></li>
            <li className="bg__bubble bg__bubble3"></li>
            <li className="bg__bubble bg__bubble4"></li>
            <li className="bg__bubble bg__bubble5"></li>
            <li className="bg__bubble bg__bubble6"></li>
            <li className="bg__bubble bg__bubble7"></li>
            <li className="bg__bubble bg__bubble8"></li>
            <li className="bg__bubble bg__bubble9"></li>
          </ul>
        </div>
        <h1>The winner is {winner}</h1>
      </Fragment>
    );
  }
}