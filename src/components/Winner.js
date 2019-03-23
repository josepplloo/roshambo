import React from 'react'

export default class Winner extends React.Component {
  render() {
    return (
      <section className="app__winner">
          <h1>The winner was Player :   </h1>
          <button className="players__button" type="button">Play Again !</button>
        </section>
    );
  }
}