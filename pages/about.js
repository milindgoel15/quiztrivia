import Head from "next/head";

let About = () => {
   return (
      <>
         <Head>
            <title>About the API</title>
            <meta name="description" content="Quiz app using Trivia API" />
         </Head>
         <section className="flex flex-col items-center gap-10 bg-white dark:bg-secondary dark:text-white rounded-lg shadow-lg mx-6 md:mx-20 justify-center text-center md:px-12 my-24 py-16 ">
            <h1 className="text-4xl font-semibold">Trivia API</h1>

            <p className="px-8">
               The Open Trivia Database provides a completely free JSON API for use
               in programming projects. Use of this API does not require a API Key,
               just generate the URL below use it in your own application to retrieve
               trivia questions.
            </p>

            <a
               href="https://opentdb.com/"
               target="_blank"
               rel="noopener noreferrer"
            >
               <button className="rounded-md text-white text-base bg-blue-500 transition-all hover:bg-blue-700 my-4 w-fit py-3 px-5">
                  Check out the API here
               </button>
            </a>

            <p className="px-8 text-sm ">
               DISCLAIMER: This API is not owned by me anyway. Open Trivia DB is
               created and maintained by PIXELTAIL GAMES LLC.
            </p>
         </section>
      </>
   );
};

export default About;
