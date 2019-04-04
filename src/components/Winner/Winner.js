import React, {Fragment} from 'react'
import axios from 'axios';
import './Winner.scss'


export default class Winner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameover: props.gameover,
    }
  }
    
  componentDidMount() {
    axios.post(process.env.URL || 'http://127.0.0.1:3001/api/game',{
      name: this.state.gameover,
      due: new Date()
    }).then(res => {
      console.log(res);
    })
  }

  render() {
    const winner = this.state.gameover;
    const bubblesArray = Array(9).fill(0)
    return (  
      <Fragment>
        <div className="animation__background">
          <ul className="bg__bubbles--rigth">
          { bubblesArray.map((_, index) => {
              return <li key={index} className={`bg__bubble bg__bubble${index+1}`}></li>
            }) }
          </ul>
          <ul className="bg__bubbles--left">
             { bubblesArray.map((_, index) => {
              return <li key={index} className={`bg__bubble bg__bubble${index+1}`}></li>
            }) }
          </ul>
        </div>
        <h1>The winner is {winner}</h1>
      </Fragment>
    );
  }
}
