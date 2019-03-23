import React from 'react';

export default class Game extends React.Component {
  render() {
    return (
      <section className="app__play">
          <article className="app__round"> 
            <h1>Round #</h1>
            <h3>Player Name</h3>
            <select className="app__move-select" name="move" id="move">
              <option value="Rock">Rock</option>
              <option value="Scissor">Scissor</option>
              <option value="Paper">Paper</option>
            </select>
            <button className="players__button" type="button">Play Game !</button>
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
        </section>
    );
  }
}