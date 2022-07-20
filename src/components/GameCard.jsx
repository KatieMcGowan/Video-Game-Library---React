import { Link } from "react-router-dom";
// import GameModel from "../models/game";

const GameCard = (props) => {
  return (
    <div>
      <div className="cover">
        <Link to={`/games/${props.game._id}`} key={props.game._id}>  
          <h2>{props.game.title}</h2>
        </Link>    
        <h3>published by {props.game.publisher}</h3>
        <img src={props.game.coverArtUrl} width="250" height="200" alt="Game Cover Art"></img>
      </div>
    </div>
  )
}

export default GameCard