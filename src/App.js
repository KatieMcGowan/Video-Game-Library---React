import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from "./pages/Home"
import GameList from "./pages/GameList"
import GameShow from "./pages/GameShow"
import NewGame from './pages/NewGame';

const App = () => {

  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route exact path="/games" element={ <GameList />} />
        <Route path="/games/:id" element ={ <GameShow />} />
        <Route path="/new" element={ <NewGame /> } />
      </Routes>
    </div>  
  );
}

export default App;