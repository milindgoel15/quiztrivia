import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "../elements/Hamburger";
import Head from "next/head";

let Header = () => {
   let [isNavOpen, setNavOpen] = useState(false);

   return (
      <>
         <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content="Milind Goel, milindgoel15, Web Developer" />
            <link rel="apple-touch-icon" sizes="180x180" href="f/avicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
            <link rel="manifest" href="/favicons/site.webmanifest" />

            <title>Quiz App</title>
            <meta name="description" content="Quiz app using Trivia API" />

         </Head>
         <header className="mx-10 flex justify-between py-8 dark:text-white ">
            <Link href="/">
               <a onClick={() => setNavOpen(false)} className="text-3xl z-[2] font-semibold transition-all hover:text-blue-500"> Quiz trivia </a>
            </Link>

            <button onClick={() => setNavOpen(!isNavOpen)} className="md:hidden z-[2] " >
               <Hamburger />
            </button>
            <nav onClick={() => setNavOpen(false)} className={`flex z-[1] gap-5 flex-col absolute md:static w-full md:w-fit bg-slate-200 dark:bg-background backdrop-blur py-8 md:py-0 left-0 transition-all ease-in duration-500 md:flex-row items-center ${isNavOpen ? 'top-[95px]' : 'top-[-400px]'} `}>
               <Link href="/about">
                  <a className="transition-all hover:text-blue-500" >About API</a>
               </Link>
               <Link href="/contact">
                  <a className="transition-all hover:text-blue-500" >Contact</a>
               </Link>
            </nav>
         </header>
      </>
   )
}

export default Header;