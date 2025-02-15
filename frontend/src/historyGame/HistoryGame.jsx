import React, { useState } from "react";

const questions = {
  easy: [
    { question: "Who was the first Prime Minister of India?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Rajendra Prasad"], answer: "Jawaharlal Nehru" },
    { question: "In which year did India gain independence?", options: ["1945", "1947", "1950", "1935"], answer: "1947" },
    { question: "Who wrote the Indian National Anthem?", options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Allama Iqbal"], answer: "Rabindranath Tagore" },
    { question: "Which movement was launched by Gandhiji in 1942?", options: ["Quit India Movement", "Non-Cooperation Movement", "Swadeshi Movement", "Civil Disobedience Movement"], answer: "Quit India Movement" },
    { question: "Who built the Taj Mahal?", options: ["Shah Jahan", "Akbar", "Aurangzeb", "Jahangir"], answer: "Shah Jahan" },
    { question: "Which is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], answer: "New Delhi" },
    { question: "Who was the first President of India?", options: ["Rajendra Prasad", "Sarvepalli Radhakrishnan", "Dr. B.R. Ambedkar", "Jawaharlal Nehru"], answer: "Rajendra Prasad" },
    { question: "What is the national animal of India?", options: ["Elephant", "Lion", "Tiger", "Deer"], answer: "Tiger" },
    { question: "Who is known as the Father of the Nation?", options: ["Mahatma Gandhi", "Subhash Chandra Bose", "Bhagat Singh", "Jawaharlal Nehru"], answer: "Mahatma Gandhi" },
    { question: "Which river is considered sacred in India?", options: ["Yamuna", "Ganges", "Brahmaputra", "Godavari"], answer: "Ganges" }
  ],
  medium: [
    { question: "Which Mughal emperor built the Red Fort?", options: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"], answer: "Shah Jahan" },
    { question: "Which battle marked the foundation of the Mughal Empire in India?", options: ["Battle of Plassey", "Battle of Panipat (1526)", "Battle of Haldighati", "Battle of Buxar"], answer: "Battle of Panipat (1526)" },
    { question: "Who wrote 'India Wins Freedom'?", options: ["Maulana Abul Kalam Azad", "B.R. Ambedkar", "Subhash Chandra Bose", "Jawaharlal Nehru"], answer: "Maulana Abul Kalam Azad" },
    { question: "Which Indian ruler fought against Alexander the Great?", options: ["Ashoka", "Porus", "Chandragupta Maurya", "Bimbisara"], answer: "Porus" },
    { question: "Who was known as the Napoleon of India?", options: ["Samudragupta", "Chandragupta Maurya", "Harsha", "Raja Raja Chola"], answer: "Samudragupta" },
    { question: "Which is the oldest language of India?", options: ["Hindi", "Sanskrit", "Tamil", "Pali"], answer: "Tamil" },
    { question: "Who was the founder of the Gupta Empire?", options: ["Chandragupta I", "Samudragupta", "Vikramaditya", "Harsha"], answer: "Chandragupta I" },
    { question: "Who was the first Indian woman to become the President of India?", options: ["Pratibha Patil", "Indira Gandhi", "Sarojini Naidu", "Sonia Gandhi"], answer: "Pratibha Patil" },
    { question: "Which ruler is associated with the third Buddhist council?", options: ["Ashoka", "Kanishka", "Bimbisara", "Ajatashatru"], answer: "Ashoka" },
    { question: "Which year did the Jallianwala Bagh Massacre take place?", options: ["1917", "1918", "1919", "1920"], answer: "1919" }
  ],
  hard: [
    { question: "Who was the founder of the Maurya Empire?", options: ["Ashoka", "Chandragupta Maurya", "Harsha", "Bindusara"], answer: "Chandragupta Maurya" },
    { question: "Which battle marked the beginning of British rule in India?", options: ["Battle of Panipat", "Battle of Haldighati", "Battle of Plassey", "Battle of Buxar"], answer: "Battle of Plassey" },
    { question: "Who was the last Mughal Emperor of India?", options: ["Shah Jahan", "Aurangzeb", "Bahadur Shah II", "Akbar"], answer: "Bahadur Shah II" },
    { question: "Who wrote the book 'Arthashastra'?", options: ["Chanakya", "Kalidasa", "Aryabhata", "Tulsidas"], answer: "Chanakya" },
    { question: "During whose reign was the Grand Trunk Road built?", options: ["Akbar", "Sher Shah Suri", "Aurangzeb", "Chandragupta Maurya"], answer: "Sher Shah Suri" },
    { question: "Who built the Sun Temple at Konark?", options: ["Ashoka", "Krishnadevaraya", "Narasinghadeva I", "Raja Raja Chola"], answer: "Narasinghadeva I" },
    { question: "Who composed the national song 'Vande Mataram'?", options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Subhash Chandra Bose"], answer: "Bankim Chandra Chattopadhyay" },
    { question: "Which Indian king defeated Alexander's general Seleucus?", options: ["Ashoka", "Chandragupta Maurya", "Harsha", "Samudragupta"], answer: "Chandragupta Maurya" },
    { question: "Who was the first Indian to win a Nobel Prize?", options: ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Hargobind Khorana"], answer: "Rabindranath Tagore" },
    { question: "Who was the viceroy of India at the time of the Quit India Movement?", options: ["Lord Mountbatten", "Lord Linlithgow", "Lord Irwin", "Lord Wavell"], answer: "Lord Linlithgow" }
  ]
};

export default function HistoryGame() {
  // No changes needed in the component logic since it already handles multiple difficulty levels.


  const [mode, setMode] = useState("easy");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[mode][currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions[mode].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">🇮🇳 Indian History Quiz</h1>

      {!gameOver ? (
        <>
          <p className="mb-4 text-lg font-semibold">Score: {score}</p>
          <h2 className="text-xl mb-4">{questions[mode][currentQuestion].question}</h2>

          <div className="grid grid-cols-2 gap-4">
            {questions[mode][currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Game Over!</h2>
          <p className="text-lg">Your final score: {score}</p>
          <button onClick={resetGame} className="mt-4 p-3 bg-green-500 text-white rounded-lg hover:bg-green-700">
            Restart Quiz
          </button>
        </div>
      )}

      <div className="mt-4">
        <button onClick={() => setMode("easy")} className="mr-2 p-2 bg-yellow-500 text-white rounded">
          Easy Mode
        </button>
        
        <button onClick={() => setMode("hard")} className="p-2 bg-red-500 text-white rounded">
          Hard Mode
        </button>
        

      </div>
    </div>
  );
}