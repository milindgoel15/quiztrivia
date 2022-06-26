import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";

function Main({ getQuestions }) {
   let { setName } = useContext(UserContext);

   return (
      <main className="flex flex-col items-center gap-10 bg-white dark:bg-secondary dark:text-white rounded-lg shadow-lg justify-center text-center px-5 md:px-12 py-16 md:py-20 my-24 mx-10 md:mx-20">
         <section className="md:text-xl">
            <p>This app is designed to assess knowledge on a variety of topics. The questions are generated at random by an API and are available in multiple-choice format.</p>
            <p>Each question in this app is worth one point. Finally, you will be given a score out of ten.</p>
         </section>

         <section>
            <div className="flex flex-col gap-5">
               <label className="px-3" htmlFor="name">Enter your name to start the quiz (or start anonymously):</label>
               <input className="text-black rounded-md py-3 px-3 bg-slate-200 dark:bg-slate-700 dark:text-white " type="text" name="name" id="name" placeholder="Enter name here" onChange={event => { setName(event.target.value) }} required />
            </div>
            <button onClick={getQuestions} className="rounded-md text-white text-base bg-blue-500 transition-all hover:bg-blue-700 my-4 w-fit py-3 px-4">Start Quiz</button>
         </section>
      </main>
   )
}

export default Main;


