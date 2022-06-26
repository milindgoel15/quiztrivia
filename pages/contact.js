import Mail from "../components/elements/Mail";
import Web from "../components/elements/Web";
import Head from "next/head";

let Contact = () => {
   return (
      <>
         <Head>
            <title>Let&apos;s Connect!</title>
            <meta name="description" content="Quiz app using Trivia API" />
         </Head>
         <main className="flex flex-col items-center gap-10 bg-white dark:bg-secondary dark:text-white rounded-lg shadow-lg justify-center text-center px-5 py-16 md:py-20 my-24 mx-10 md:mx-20">
            <section className=" font-medium text-xl md:text-3xl">
               <h1>Want to connect? Let&apos;s get in touch!</h1>
            </section>

            <section className="flex flex-col sm:flex-row gap-4 md:gap-10">
               <a href="mailto:milindgoel15@gmail.com" target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-4 rounded-md text-white md:text-lg bg-blue-500 transition-all hover:bg-blue-700 w-full my-4 py-4 md:py-5 px-5 md:px-10">
                     <Mail />
                     Email
                  </button>
               </a>

               <a href="https://milindgoel.vercel.app" target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-4 rounded-md text-white md:text-lg bg-blue-500 transition-all hover:bg-blue-700 w-full my-4 py-4 md:py-5 px-5 md:px-10">
                     <Web />
                     Website
                  </button>
               </a>
            </section>
         </main>
      </>
   );
};

export default Contact;
