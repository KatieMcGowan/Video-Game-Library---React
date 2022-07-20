import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import GameModel from "../models/game";

const EditGame = (props) => {
  const [state, setState] = useState({
    title: "",
    publisher: "",
    coverArtUrl: "",
    completed: false,
  });

  let id = useParams().id;

  let navigate = useNavigate()

  // const handleToggleBodyForm = () => {
  //   state.formStyle.display === "block"
  //   ? setState({ formStyle: {display: "none"}})
  //   : setState({ formStyle: {display: "block"}});
  // }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    GameModel.update(id, state)
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
  

  // console.log(props.game)
  //returns game object

  return (
    <div>
      {/* <button className="editbutton" onClick={handleToggleBodyForm}>Edit</button> */}
      <form className="editform" onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder={props.game.title}
            onChange={handleChange}
            value={state.title}
          />  
        </div>
        <div className="form-input">
          <label htmlFor="publisher">Publisher</label>
          <input 
            type="text"
            name="publisher"
            placeholder={props.game.publisher}
            onChange={handleChange}
            value={state.publisher}
          />
        </div>
        <div className="form-input">
          <label htmlFor="coverArtUrl">Image URl</label>
          <input 
            type="text"
            name="coverArtUrl"
            placeholder={props.game.coverArtUrl}
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
  )  
};

export default EditGame