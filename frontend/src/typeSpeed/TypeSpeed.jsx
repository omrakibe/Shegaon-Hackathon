import React, { useState, useEffect } from "react";
import api from "../utils/api"


const words = ["react", "javascript", "node", "express", "mongo", "frontend", "backend", "developer", "coding"];

export default function TypeSpeed() {
  const [currentWord, setCurrentWord] = useState("react");
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [bestWpm, setBestWpm] = useState(0);

  useEffect(() => {
    fetchBestWpm();
    generateNewSentence();
  }, []);

  const generateNewSentence = () => {
    const sentenceLength = Math.floor(Math.random() * 5) + 3; // Sentence with 3-7 words
    const sentence = Array.from({ length: sentenceLength }, () => {
      return words[Math.floor(Math.random() * words.length)];
    }).join(" "); // Join words with spaces
    
    setCurrentWord(sentence);
    setInput("");
  };

  const handleChange = (e) => {
    if (!startTime) setStartTime(Date.now());
    setInput(e.target.value);

    if (e.target.value === currentWord) {
      setWordCount((prev) => prev + 1);
      generateNewSentence();
    }
  };

  useEffect(() => {
    if (wordCount > 0 && startTime) {
      const elapsedTime = (Date.now() - startTime) / 60000;
      setWpm(Math.round(wordCount / elapsedTime));
    }
  }, [wordCount]);

  const saveBestWpm = async () => {
    if (wpm > bestWpm) {
      setBestWpm(wpm);
      await api.post("/typeSpeed/createWpm", { wpm });
    }
  };

  const fetchBestWpm = async () => {
    const response = await api.get("/typeSpeed/getBestWpm");
    setBestWpm(response.data.bestWpm);
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-4xl font-bold">Typing Speed Test</h1>
      <p className="mt-4 font-bold">Type the word below:</p>
      <h2 className="mt-2 text-2xl font-bold text-blue-600">{currentWord}</h2>
      <input
        className="mt-4 p-6 w-90 border rounded"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <p className="mt-3">WPM: {wpm}</p>
      <p className="mt-2">Best WPM: {bestWpm}</p>
      <button onClick={saveBestWpm} className="mt-3 bg-green-500 text-white px-4 py-2 rounded">Save Score</button>
    </div>
  );
}