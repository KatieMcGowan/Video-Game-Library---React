import { Redirect } from 'react-router-dom';

const url = `http://localhost:4000/api/v1`

class GameModel {

  static all = () => {
    return fetch(`${url}/games/`)
    .then(response => response.json())
    .then(jsonData => jsonData.games)
    .catch(err => console.log(err));
  }

  static show = (id) => {
    return fetch(`${url}/games/${id}`)
    .then(response => response.json())
    .then(jsonData => jsonData.game)
    .catch(err => console.log(err));
  }

  static create = (gameData) => {
    console.log(gameData)
    return fetch(`${url}/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(gameData)
    })
    .then(response => response.json())
  }

  static update = () => {
    console.log("update")
  }

  static delete = () => {
    console.log("delete")
  }
};

export default GameModel