import Head from "next/head";
import ContactCard from "../components/layouts/ContactCard"
import ContactData from "../utils/ContactData";

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
               {
                  ContactData.map(props => (
                     <ContactCard 
                        key={props.id}
                        title={props.title}
                        link={props.link}
                        icon={props.icon}
                     />
                  ))
               }
            </section>
         </main>
      </>
   );
};

export default Contact;