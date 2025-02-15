import { useState } from "react";
import { Card, CardContent } from "./CardContent";
import Button from "../gambling/Button";

const scenarios = [
  // Easy questions
  { id: 1, prompt: "You meet a new friend at the park. What do you say?", options: ["Hi! What's your name?", "Go away!", "I don't want to talk."], correct: 0, difficulty: "easy" },
  { id: 2, prompt: "Your teacher asks how your day was. How do you respond?", options: ["It was great! I learned a lot!", "Why do you care?", "I don't want to answer."], correct: 0, difficulty: "easy" },
  { id: 3, prompt: "A friend shares their lunch with you. What do you say?", options: ["Thanks a lot!", "I didn't want it!", "Why did you do that?"], correct: 0, difficulty: "easy" },
  { id: 4, prompt: "You accidentally bump into someone. What should you say?", options: ["Sorry, I didn't see you!", "Move!", "Whatever."], correct: 0, difficulty: "easy" },
  { id: 9, prompt: "Your friend is feeling sad. What should you say?", options: ["Do you want to talk about it?", "Cheer up, it's nothing!", "Just ignore it."], correct: 0, difficulty: "easy" },
  { id: 10, prompt: "Which is the correct response to 'Nice to meet you'?", options: ["Nice to meet you too!", "Okay.", "What do you want?"], correct: 0, difficulty: "easy" },
  { id: 11, prompt: "How do you greet your teacher in the morning?", options: ["Good morning!", "Hey you!", "What's up?"], correct: 0, difficulty: "easy" },
  { id: 12, prompt: "What do you say when someone gives you a gift?", options: ["Thank you!", "I don’t like this.", "Why this?"], correct: 0, difficulty: "easy" },
  { id: 13, prompt: "You need help with homework. What should you say?", options: ["Can you help me, please?", "Do my homework now!", "I don’t care."], correct: 0, difficulty: "easy" },
  { id: 14, prompt: "Someone helps you carry your books. What do you say?", options: ["Thanks a lot!", "You should have done it faster.", "I didn't ask for help."], correct: 0, difficulty: "easy" },

  // Hard questions
  { id: 5, prompt: "Choose the correct sentence:", options: ["She go to school every day.", "She goes to school every day.", "She going to school every day."], correct: 1, difficulty: "hard" },
  { id: 6, prompt: "Which word is an antonym of 'brilliant'?", options: ["Dull", "Bright", "Smart"], correct: 0, difficulty: "hard" },
  { id: 7, prompt: "What is the correct response to: 'How do you do?'", options: ["How do you do?", "I am fine.", "Nothing much."], correct: 0, difficulty: "hard" },
  { id: 8, prompt: "Identify the grammatically correct sentence:", options: ["Him and me went to the store.", "He and I went to the store.", "Me and him went to the store."], correct: 1, difficulty: "hard" },
  { id: 15, prompt: "Which sentence is correct?", options: ["I have went to the store.", "I have gone to the store.", "I have go to the store."], correct: 1, difficulty: "hard" },
  { id: 16, prompt: "Choose the right phrase:", options: ["She is more taller than me.", "She is taller than me.", "She is the most taller than me."], correct: 1, difficulty: "hard" },
  { id: 17, prompt: "What does 'break the ice' mean?", options: ["Start a conversation.", "Destroy something.", "Eat something cold."], correct: 0, difficulty: "hard" },
  { id: 18, prompt: "What is the meaning of 'hit the sack'?", options: ["Go to bed.", "Punch something.", "Start a fight."], correct: 0, difficulty: "hard" },
  { id: 19, prompt: "Choose the correct indirect question:", options: ["Can you tell me where is the station?", "Can you tell me where the station is?", "Can you tell me where station is?"], correct: 1, difficulty: "hard" },
  { id: 20, prompt: "Identify the correctly punctuated sentence:", options: ["Let's eat, Grandma!", "Lets eat Grandma!", "Let's eat Grandma!"], correct: 0, difficulty: "hard" }
];

export default function CommunicationGame() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [usedQuestions, setUsedQuestions] = useState(new Set());
  const [mode, setMode] = useState("easy");

  const availableQuestions = scenarios.filter(q => q.difficulty === mode && !usedQuestions.has(q.id));
  const currentScenario = availableQuestions.length > 0 ? availableQuestions[0] : null;

  const handleResponse = (index) => {
    if (!currentScenario) return;
    
    if (index === currentScenario.correct) {
      setScore(prevScore => prevScore + 1);
    }
    
    setUsedQuestions(prevSet => new Set([...prevSet, currentScenario.id]));
    
    if (availableQuestions.length === 1) {
      alert(`Game Over! Your score: ${score + 1}`);
      setUsedQuestions(new Set());
      setStep(0);
      setScore(0);
    } else {
      setStep(prevStep => prevStep + 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Chat Masters: The Talking Quest</h1>
      <div className="mb-4">
        <Button onClick={() => setMode("easy")} className={mode === "easy" ? "bg-green-500" : "bg-gray-500"}>Easy</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;   
        <Button onClick={() => setMode("hard")} className={mode === "hard" ? "bg-red-500" : "bg-gray-500"}>Hard</Button>
      </div>
      {currentScenario ? (
        <Card className="w-96 p-4 shadow-md">
          <CardContent>
            <p className="text-lg mb-4">{currentScenario.prompt}</p>
            {currentScenario.options.map((option, index) => (
              <Button key={index} className="w-full mb-2" onClick={() => handleResponse(index)}>
                {option}
              </Button>
            ))}
          </CardContent>
        </Card>
      ) : (
        <p className="text-lg">No more questions available in this mode.</p>
      )}
      <p className="mt-4 text-lg font-semibold">Score: {score}</p>
    </div>
  );
}