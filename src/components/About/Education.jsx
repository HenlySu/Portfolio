import { Card } from "react-bootstrap"
import style from "./about.module.css"

export default function Education(){

   const cardData = [
      {
         id: 1,
         src: './img/education/ijc.png',
         school: 'Independence Junior College',
         major: 'Information Technology',
         year: '2019 - 2020'
      },
      {
         id: 2,
         src: './img/education/seneca.png',
         school: 'Seneca Polytechnic',
         major: 'Computer Programming and Analysis',
         year: '2022 - Present'
      }
   ];

   return(
      <>
         <h4 className={`mt-4 ${style.heading}`}>Education</h4>
         {cardData.map((card) => {
            <Card>
               <Card.Img variant='top' src={card.src} />
               <Card.Body>
                  <Card.Text>
                     {card.school}
                     {card.major}
                     {card.year}
                  </Card.Text>
               </Card.Body>
            </Card>
         })}            
      </>
   )
}