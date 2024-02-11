import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./homeStyle.css";
export default function Home() {
  const navigate = useNavigate();
  const navigate2 = useNavigate();
  const navigate3 = useNavigate();
  const navigate4 = useNavigate();
  const navigate5 = useNavigate();

  function handleClick() {
    navigate("/tictactoe");
  }
  function handleClick2(){
    navigate2("/Hang");
  }
  function handleClick3(){
    navigate3("/Puzzle15");
  }
  function handleClick4(){
    navigate4("/Quiz");
  }
  function handleClick5(){
    navigate5("/Touching");
  }
  return (
    <div className="home-wrapper">

      <div className="home-container">
        <div className="box">
          <div className="game1 game" onClick={handleClick}>
            <h1 className="home-game-heading">TikTacToe</h1>
          </div>
        </div>
        <div className="box">
          <div className="game2 game" onClick={handleClick2}>
            <h1 className="home-game-heading">Hangman</h1>
          </div>
        </div>
        <div className="box">
          <div className="game3 game" onClick={handleClick3}>
            <h1 className="home-game-heading">15Puzzle</h1>
          </div>
        </div>
        <div className="box">
          <div className="game4 game" onClick={handleClick4}>
            <h1 className="home-game-heading">Quiz</h1>
          </div>
        </div>
        <div className="box">
          <div className="game5 game" onClick={handleClick5}>
            <h1 className="home-game-heading">Touching</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
