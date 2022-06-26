import React, { useState } from "react";
import Results from "../sections/Results";
import he from "he";

let QuestionLayout = ({
  setQuiz,
  questions,
  currentQuestion,
  setCurrentQuestion,
  options,
  correct,
  category,
  score,
  setScore,
  name,
}) => {
  let [selected, setSelected] = useState();
  let [error, setError] = useState();
  let [completed, setCompleted] = useState(false);

  let handleSelect = (answer) => {
    if (selected === answer && selected === correct) {
      return "!bg-green-500";
    } else if (selected === answer && selected !== correct) {
      return "!bg-red-500";
    } else if (answer === correct) {
      return "!bg-green-500";
    }
  };

  let handleCheck = (answer) => {
    setSelected(answer);
    if (answer === correct) {
      setScore(score + 1);
    }
  };

  let handleNextQuestion = () => {
    if (currentQuestion > 8) {
      setCompleted(true);
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else {
      setError("Please select an option first");
    }
  };

  return (
    <>
      {completed ? (
        <Results score={score} name={name} setQuiz={setQuiz} />
      ) : (
        <>
          <section className="flex justify-between text-lg dark:text-white mx-10 md:mx-24 my-10">
            {name && <p>Hello {name}</p>}
            <p>Your Score: {score}</p>
          </section>
          <section className="flex flex-col items-center gap-4 bg-white dark:bg-secondary dark:text-white rounded-lg shadow-lg mx-6 md:mx-20 justify-center text-center py-24 ">
            <h1 className="md:text-2xl px-10">
              <span className="font-semibold">Question {currentQuestion + 1}:{" "}</span>
              {he.decode(questions[currentQuestion].question)}
            </h1>
            <p><span className="font-semibold">Category:</span> {category} </p>
            <div className="grid md:grid-cols-2 md:grid-rows-2 my-10 w-full px-10 md:px-32 gap-10">
              {options &&
                options.map((answer) => (
                  <button
                    onClick={() => handleCheck(answer)}
                    key={answer}
                    disabled={selected}
                    className={`text-lg bg-slate-200 dark:bg-slate-700 transition-all hover:bg-slate-400 dark:hover:bg-slate-500 rounded-md py-3 md:py-5 ${
                      selected && handleSelect(answer)
                    } `}
                  >
                    {he.decode(answer)}
                  </button>
                ))}
            </div>
            {error && <p>{error}</p>}

            <div className="flex gap-4">
              <button
                onClick={() => handleNextQuestion()}
                className="rounded-md text-white font-medium text-base bg-blue-500 transition-all hover:bg-blue-700 py-3 w-24 md:w-28"
                type="submit"
              >
                Submit
              </button>
              <button
                onClick={() => setQuiz(false)}
                className="rounded-md text-white font-medium text-base bg-red-500 transition-all hover:bg-red-700 py-3 w-24 md:w-28"
              >
                Quit
              </button>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default QuestionLayout;
