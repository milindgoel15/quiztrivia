import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/userContext";
import QuestionLayout from "../layouts/QuestionLayout";
import {Triangle} from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

let Quiz = ({ questions, score, setScore }) => {
   let { name, setQuiz } = useContext(UserContext);
   let [options, setOptions] = useState();
   let [currentQuestion, setCurrentQuestion] = useState(0);

   useEffect(() => {
      setOptions(
         questions &&
         handleShuffle([
            questions[currentQuestion]?.correct_answer,
            ...questions[currentQuestion]?.incorrect_answers,
         ])
      );
   }, [questions, currentQuestion]);

   let handleShuffle = (option) => {
      return option.sort(() => Math.random() - 0.5);
   };
   
   return (
      <>
         {questions ? (
            <QuestionLayout
               name={name}
               score={score}
               setScore={setScore}
               setQuiz={setQuiz}
               questions={questions}
               currentQuestion={currentQuestion}
               setCurrentQuestion={setCurrentQuestion}
               options={options}
               correct={questions[currentQuestion].correct_answer}
               category={questions[currentQuestion].category}
            />
         ) : (
            <section className="flex flex-col justify-center items-center h-screen" >
               <Triangle ariaLabel="loading-indicator" height="70" width="70" color="blue" />
            </section>
         )}
      </>
   );
};

export default Quiz;
