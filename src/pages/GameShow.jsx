import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GameModel from "../models/game";
import EditGame from "./EditGame";

const GameShow = () => {
  const [game, setGame] = useState({});

  let id = useParams().id;
  let navigate = useNavigate()

  useEffect(() => {
    GameModel.show(id).then(data => setGame(data))
  }, []);

  return(
    <div>
      <h2>{game.title}</h2>
      <h3>published by {game.publisher}</h3>
      <img src={game.coverArtUrl} width="250" height="200" alt="Game Cover Art"></img>
      <EditGame
        game={game} 
      />
      <button onClick={() => GameModel.delete(id).then(data => {navigate("/games")})}>
        Delete Game
      </button>
    </div>
  );
};

export default GameShow