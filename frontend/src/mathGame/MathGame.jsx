import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function MathGame() {
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
    await axios.post("http://localhost:5000/api/mathRoute/createScore", {
      name,
      score,
    });
    setScore(0);
    fetchLeaderboard();
  }

  async function fetchLeaderboard() {
    const res = await axios.get("http://localhost:5000/api/mathRoute/getScore");
    setLeaderboard(res.data);
  }

  return (
    <>
      <div className="bg-linear-to-r/hsl from-indigo-500 to-teal-400 h-[100vh] w-[100vw] flex justify-center items-center">
        <div className="h-[80vh] w-[80vw] bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600">
          <div className="px-20 py-16 text-center">
            <h1 className="text-6xl"> MATH KINGDOM 🎮</h1>

            <div className="flex justify-center items-center p-8 gap-72">
              <div className=" leftContainer p-4 mt-16 w-96">
                <div className="mt- ">
                  <TextField
                    id="standard-basic"
                    label="Enter your Name*"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="standard"
                  />
                </div>

                {/* <input
        className="my-4 text-2xl border-2 border-indigo-500 mt rounded-lg text-center"
        type="text"
        placeholder="Enter your name"
        
        
      /> */}

                <div className="pt-8 gap-2">
                  <div className="flex">
                    <h2 className="text-2xl pt-3">
                      {question.num1} + {question.num2} =
                    </h2>
                    <TextField
                      label="Answer"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      type="number"
                      className="w-24 text-center"
                    />
                    &nbsp;&nbsp;
                    <div className="pt-2">
                      <Button
                        className=""
                        variant="contained"
                        color="success"
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>

                {/* <Button variant="contained" color="success" onClick={handleSubmit}>
          Submit Answer
          </Button> */}

                <h3 className="text-2xl pt-8">Score: {score}</h3>

                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  onClick={saveScore}
                  startIcon={<CloudUploadIcon />}
                >
                  Save Score
                </Button>
              </div>

              {/* Leaderboard */}

              {/* <div className="pt-10">
              <h2 className="text-xl inline border-b-4 ">Leaderboard 🏆</h2>
              <ul className="p-4">
                {leaderboard.map((user, index) => (
                  <li key={index}>
                    {user.name}: {user.score} points
                  </li>
                ))}
              </ul>
            </div> */}

              {/* LEADERBOARD TABLE */}

              <div>
                <div className="mt-8 w-full text-center">
                  <h2 className="text-xl font-semibold border-b-4 inline-block mb-4">
                    Leaderboard 🏆
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="border border-gray-300 px-16 py-">
                            Rank
                          </th>
                          <th className="border border-gray-300 px-16 py-">
                            Name
                          </th>
                          <th className="border border-gray-300 px-16 ">
                            Score
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaderboard.length > 0 ? (
                          leaderboard.map((user, index) => (
                            <tr
                              key={index}
                              className="border-b hover:bg-gray-100"
                            >
                              <td className="border border-gray-300 px-4 py-2">
                                {index + 1}
                              </td>
                              <td className="border border-gray-300 px-4 py-2 ">
                                {user.name}
                              </td>
                              <td className="border border-gray-300 px-4 py-2 ">
                                {user.score}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td
                              colSpan="3"
                              className="border border-gray-300 px-4 py-2 text-gray-500"
                            >
                              No scores yet. Be the first to play!
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
