import axios from "axios";
import { Button } from "react-bootstrap";
import style from "./home.module.css"
import { useEffect, useState } from "react"

export default function Quote(){
   const [quote, setQuote] = useState();
   const [author, setAuthor] = useState();

   const quoteAPI = async () => {
      let arrayOfQuotes = [];

      try {
         const data = await axios.get('https://api.quotable.io/random');
         arrayOfQuotes = data.data;
      } catch (error){
         console.log(error);
      }

      try {
         setQuote(arrayOfQuotes.content);
         setAuthor(arrayOfQuotes.author);
      } catch (error){
         console.log(error);
      }
   }

   useEffect(() => {
      quoteAPI();
   }, []);
   
   return (
      <>
         <h3 className={style.quoteOfDay}>Quote of the day</h3>
         <p className={style.quoteContent}>{quote}</p>
         <p className={style.quoteAuthor}>- {author}</p>
         <Button onClick={quoteAPI} className={style.home_button}>Another quote</Button>
      </>
   )
}