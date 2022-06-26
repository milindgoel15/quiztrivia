import { useState } from 'react';
import Main from '../components/sections/Main'
import Quiz from '../components/sections/Quiz';
import UserContext from '../contexts/UserContext';
import axios from "axios";

export default function Home() {
  let [name, setName] = useState("");
  let [quiz, setQuiz] = useState(false);
  let [questions, setQuestions] = useState();
  let [score, setScore] = useState(0);
  
  let API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple'
  let getQuestions = async () => {
     setQuiz(true);
     let { data } = await axios.get(API_URL);
     setQuestions(data.results);
  }

  return (
    <>
      <UserContext.Provider value={{ name, setName, setQuiz, score }} >
        {quiz ? <Quiz questions={questions} score={score} setScore={setScore} /> : <Main getQuestions={getQuestions} />}
      </UserContext.Provider>
    </>
  )
}
