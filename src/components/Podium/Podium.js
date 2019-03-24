import React, { Fragment } from 'react'
import './Podium.scss'

export default class Podium extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>The hall of fame.</h1>
        <ol className="podium__table">
         <li>Player #</li> 
         <li>Player #</li> 
        </ol>
      </Fragment>
    );
  }
}