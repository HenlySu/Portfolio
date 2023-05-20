import { Card, Col, Row } from "react-bootstrap"
import style from "./about.module.css"

export default function Education(){

   return (
      <>
         <Row>
            <Card>
               <Card.Img variant='top' src='./img/education/ijc.png'/>
               <Card.Body>
                  <Card.Title>
                     Independence Junior College
                  </Card.Title>
                  <Card.Text>
                     <p>Information Technology</p>
                     <p>2019 - 2020</p>
                  </Card.Text>
               </Card.Body>
            </Card>
            <Card>
               <Card.Img variant='top' src='./img/education/seneca.png'/>
               <Card.Body>
                  <Card.Title>
                     Seneca Polytechnic
                  </Card.Title>
                  <Card.Body>
                     <p>Computer Programming and Analysis</p>
                     <p>2022 - Present</p>
                  </Card.Body>
               </Card.Body>
            </Card>
         </Row>
      </>
   )
}