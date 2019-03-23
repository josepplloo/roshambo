import React from 'react'

export default class Podium extends React.Component {
  render() {
    return (
      <section className="app__podium">
        <h1>The hall of fame</h1>
        <ol className="players__button">
         <li>Player #</li> 
         <li>Player #</li> 
        </ol>
      </section>
    );
  }
}