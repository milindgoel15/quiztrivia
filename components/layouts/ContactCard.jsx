import React from "react";

let ContactCard = (props) => {
   return (
      <>
         <a key={props.id} href={props.link} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-4 rounded-md text-white md:text-lg bg-blue-500 transition-all hover:bg-blue-700 w-full my-4 py-4 md:py-5 px-5 md:px-10">
               {props.icon}
               <p className="pt-1">{props.title}</p>
            </button>
         </a>
      </>
   )
}

export default ContactCard;