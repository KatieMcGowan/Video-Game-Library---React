import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import GameModel from "../models/game"
import GameCard from "../components/GameCard"
import NewGame from "./NewGame"

const GameList = () => {
  const [state, setState] = useState({
    games: [],
  });

  useEffect(() => {
    GameModel.all().then(data => setState({
      games: data,
    }))
  }, []);

  return(
    <div>
      <h1>All Games</h1>
      <Link to={`/new`}>Click here to submit a new game</Link>
        {state.games.map((game) => {
          return <GameCard 
                  game={game}
                  // title={game.title}
                  // publisher={game.publisher}
                  // cover={game.coverArtUrl}
                  // _id={game._id}
                  key={game._id}
                  />
                  
        })}
    </div>
  )
}

export default GameList;

