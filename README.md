# ROSHAMBO

React version of  Scissors, Paper, Rock game.

Also in [Docker 🐳](https://hub.docker.com/r/josepplloo/roshambo-web) `docker push josepplloo/roshambo-web`

Deployed: https://josepplloo-roshambo-web.herokuapp.com/  

## Technologies Used

This project was built using **React** ⚛️. **Axios** for *HTTP* requests
to fetch statistics data for the game. For styles Sass were used with **scss** syntax with *BEM* methodology for class naming conventions.

## Project Set Up
The application runs with `npm 6.9.0` and `node v10.15.3`.

  First of all go to the [backend ROSHAMBO repo](https://github.com/josepplloo/roshambo-api) and follow the instructions.

  Once the backend has been configured:

  Install node dependencies executing `npm install`.

  Run the app locally with `npm start`. It will be served at `http://localhost:3000`.

## Folder Structure

The code is inside of each component following the structure below:

```
frontend
├── package.json
├── README.md
└── src /
    ├── index.js
    ├── index.scss
    └── components/
        ├── App.js
        ├── App.scss
        ├── Game/
        |    ├── Game.js
        |    └── Game.scss
        ├── Podium/
        |    ├── Podium.js
        |    └── Podium.scss
        ├── Welcome/
        |    ├── Welcome.js
        |    └── Welcome.scss
        └──  Winner/
             ├── Winner.js
             └── Winner.scss
        
```
