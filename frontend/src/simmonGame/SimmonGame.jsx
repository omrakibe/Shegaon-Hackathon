import React, { useState, useEffect } from "react";
import "./Simmon.css";

const colors = ["red", "yellow", "green", "purple"];

export default function SimonSays() {
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [turn, setTurn] = useState("computer");
  const [highlight, setHighlight] = useState(null);
  const [clicked, setClicked] = useState(null);

  useEffect(() => {
    if (turn === "computer" && isPlaying) {
      playSequence();
    }
  }, [turn, isPlaying]);

  const playSequence = async () => {
    for (let i = 0; i < sequence.length; i++) {
      setHighlight(sequence[i]);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setHighlight(null);
      await new Promise((resolve) => setTimeout(resolve, 400));
    }
    setTurn("player");
  };

  const startGame = () => {
    setSequence([colors[Math.floor(Math.random() * colors.length)]]);
    setPlayerSequence([]);
    setIsPlaying(true);
    setTurn("computer");
  };

  const handlePlayerClick = (color) => {
    if (!isPlaying || turn !== "player") return;

    setClicked(color);
    setTimeout(() => setClicked(null), 300);

    const newPlayerSequence = [...playerSequence, color];
    setPlayerSequence(newPlayerSequence);

    if (sequence[newPlayerSequence.length - 1] !== color) {
      alert("Wrong move! Try again.");
      setIsPlaying(false);
      return;
    }

    if (newPlayerSequence.length === sequence.length) {
      setTimeout(() => {
        setSequence([...sequence, colors[Math.floor(Math.random() * colors.length)]]);
        setPlayerSequence([]);
        setTurn("computer");
      }, 1000);
    }
  };

  return (
    <div>
      <h1>Simon Says Game</h1>
      <h2>Press any key to start the game!</h2>
      <div className="box-container">
        <div className="line-one">
          <div className={`btn red ${highlight === "red" ? "Flash" : ""} ${clicked === "red" ? "userflash" : ""}`} onClick={() => handlePlayerClick("red")}>1</div>
          <div className={`btn yellow ${highlight === "yellow" ? "Flash" : ""} ${clicked === "yellow" ? "userflash" : ""}`} onClick={() => handlePlayerClick("yellow")}>2</div>
        </div>
        <div className="line-two">
          <div className={`btn green ${highlight === "green" ? "Flash" : ""} ${clicked === "green" ? "userflash" : ""}`} onClick={() => handlePlayerClick("green")}>3</div>
          <div className={`btn purple ${highlight === "purple" ? "Flash" : ""} ${clicked === "purple" ? "userflash" : ""}`} onClick={() => handlePlayerClick("purple")}>4</div>
        </div>
      </div>
      <button onClick={startGame} className="btn">Start Game</button>
    </div>
  );
}