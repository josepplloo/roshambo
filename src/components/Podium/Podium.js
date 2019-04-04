import React, { Fragment } from 'react'
import axios from 'axios'
import './Podium.scss'

export default class Podium extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatistics: [],
      loaded: false
    }
  }
  
  componentDidMount() {    
    axios.get(process.env.REACT_APP_URL || 'http://localhost:3001/api/game')
    .then((response) => {

      const namesArray = response.data.data.map( ({name}) => name)

      this.setState({
        gameStatistics: namesArray,
        loaded: true
      }) 

      return response.data
    })
    .catch(function (error) {
      console.log(error);
    }); 

  }

  renderWinners() {
    return this.state.gameStatistics.map((stats, index) => 
      <li key={stats+index}>{stats}</li>)
  }

  render() {
    const isLoaded = this.state.loaded;
    
    return (
      <Fragment>
        <h1>The hall of fame.</h1>
        <ol className="podium__table">
         {
          isLoaded ? this.renderWinners() : ''
         } 
        </ol>
      </Fragment>
    );
  }
}
