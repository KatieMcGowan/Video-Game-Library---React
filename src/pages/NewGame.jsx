import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import GameModel from "../models/game"

const NewGame = () => {
  const [state, setState] = useState({
    title: "",
    publisher: "",
    coverArtUrl: "",
    completed: false,
  });

  let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    GameModel.create(state)
    .then(data => {
      navigate("/games")
    });
  };

  const handleChange = (event) => {
    if (event.target.type !== "text") {
      setState({ completed: !state.completed})
    };
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };
  
  return(
    <div>
      <h2>New Game</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={state.title}
          />  
        </div>
        <div className="form-input">
          <label htmlFor="publisher">Publisher</label>
          <input 
            type="text"
            name="publisher"
            onChange={handleChange}
            value={state.publisher}
          />
        </div>
        <div className="form-input">
          <label htmlFor="coverArtUrl">Image URl</label>
          <input 
            type="text"
            name="coverArtUrl"
            onChange={handleChange}
            value={state.coverArtUrl}
          />  
        </div>
        <div className="form-input">
          <label htmlFor="completed">Completed</label>
          <input
            type="checkbox"
            name="completed"
            checked={state.completed}
            onChange={handleChange}
          />  
        </div>
        <input type="submit" value="Save"/>
      </form>
    </div>
  );
};

export default NewGame

//It's passing just the last value I type into state.