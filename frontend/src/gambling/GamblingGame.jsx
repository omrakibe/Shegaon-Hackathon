import React, { useState } from "react";
import Button from './Button';

const words = [
  { scrambled: "lohel", correct: "hello" },
  { scrambled: "drow", correct: "word" },
  { scrambled: "tpiasn", correct: "pistan" },
  { scrambled: "lmie", correct: "mile" },
  { scrambled: "vicod", correct: "covid" }
];

export default function GamblingGame() {
  const [index, setIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  
  const handleSubmit = () => {
    if (userInput.toLowerCase() === words[index].correct.toLowerCase()) {
      setScore(score + 1);
      alert("Correct!");
    } else {
      alert(" WRONG !! Try again!");
      console.log("error");
    }
    
    setUserInput("");
    setIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Word Scramble Game</h1>
      <p className="text-lg mb-2">Unscramble the word:</p>
      <h2 className="text-xl font-semibold mb-4">{words[index].scrambled}</h2>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="border p-2 rounded mb-4"
      />
      <Button onClick={handleSubmit} className={"bg-gray-500"}>Submit</Button>
      <p className="mt-4 text-lg font-semibold">Score: {score}</p>
    </div>
  );
}