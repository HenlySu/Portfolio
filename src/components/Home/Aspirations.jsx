import Typewriter from "typewriter-effect"
import style from "./home.module.css"

export default function Aspirations(){
   return (
      <>
         <div className={style.contain}>
            <p className={style.aspiration}>Aspiring to be a</p>
            <Typewriter
               options={{
                  strings: [
                     "Full Stack Developer",
                     "Software Developer",
                     "Cloud Engineer"
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
               }}
            />
         </div>
      </>
   )
}