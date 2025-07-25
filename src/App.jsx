import { useState } from "react";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from "./components/ResultScreen";

const questions = [
  {
    question: "where we met first?",
    options: [
      { label: "A. 5/4/1970 (😬)", value: "A" },
      { label: "B. 25/10(😄)", value: "B" },
      { label: "C. 21/11 (❤️)", value: "C" },
    ],
    correctOption: "B",
  },
  {
    question: "First offical name of ours?",
    options: [
      { label: "A. KAwai 🎃", value: "A" },
      { label: "B. MOONLIGHT 🌌", value: "B" },
      { label: "C. cutusss🎮", value: "C" },
    ],
    correctOption: "B",
  },

  {
    question: "What i love most about u?",
    options: [
      { label: "A. Beauty🎃", value: "A" },
      { label: "B. Behaviour 🌌", value: "B" },
      { label: "C. YOU, just you 😭", value: "C" },
    ],
    correctOption: "C",
  },

  {
    question: "What you dream about us in future?",
    options: [
      { label: "A. Married and happy", value: "A" },
      { label: "B. ek dusre ke naam mei daam krna", value: "B" },
      { label: "C.  😭", value: "C" },
    ],
    correctOption: "B",
  },
  {
    question: "Divyansh se kitna pyaar krti ho?",
    options: [
      { label: "A. mai kyu btau🎃", value: "A" },
      { label: "B. Bhutt yaarrr🌌", value: "B" },
      { label: "C. jao samundar ke paani mei kitne boond h ginlo, utna 😭", value: "C" },
    ],
    correctOption: "C",
  },
  
];

   

export default function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    const current = questions[index];
    if (selected === current.correctOption) {
      setScore((prev) => prev + 1);
    }

    const next = index + 1;
    if (next < questions.length) {
      setIndex(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div
  className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
  style={{ backgroundImage: "url('/love-bg.jpg')" }}
>

      {!showResult ? (
        <QuestionScreen
          data={questions[index]}
          onSelect={handleAnswer}
          current={index + 1}
          total={questions.length}
        />
      ) : (
        <ResultScreen score={score} total={questions.length} />
      )}
    </div>
  );
}

