// frontend/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(generateQuestion());
  const [answer, setAnswer] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, result: num1 + num2 };
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (parseInt(answer) === question.result) {
      setScore(score + 10);
      setQuestion(generateQuestion());
      setAnswer("");
    } else {
      alert("Incorrect! Try again.");
    }
  }

  async function saveScore() {
    await axios.post("http://localhost:5000/api/submit-score", { name, score });
    fetchLeaderboard();
  }

  async function fetchLeaderboard() {
    const res = await axios.get("http://localhost:5000/api/users");
    setLeaderboard(res.data);
  }

  return (
    <div className="App">
      <h1 className="text-6xl flexwrap">Math Kingdom 🎮</h1>

      <input
        className="text-red-500"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>
        {question.num1} + {question.num2} = ?
      </h2>
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Answer</button>
      <h3>Score: {score}</h3>
      <button onClick={saveScore}>Save Score</button>
      <h2>Leaderboard 🏆</h2>
      <ul>
        {leaderboard.map((user, index) => (
          <li key={index}>
            {user.name}: {user.score} points
          </li>
        ))}
      </ul>
    </div>
  );
}
