import { Button, ButtonGroup, Container, Col, Row } from "react-bootstrap";
import Image from "next/image";

export default function Home(){
   return (
      <>
         <Container>
            <Row>
               <Col md={6} className="my-auto">
                  <h1>Hello World! {' '} 👋🏻</h1>
                  <h1>My name is Henly Su</h1>
                  <p>Some text animations</p>

                  <Button variant="primary">Resume</Button> 
                  {' '}
                  <Button variant="primary">Contact Me</Button>

               </Col>
               <Col md={6}>
                  <Image 
                     src='/img/homeImg.svg'
                     alt='Home Image'
                     className="img-fluid"
                     width={500}
                     height={500}
                  />
               </Col>
            </Row>
            <h1>Motivational quote for the day</h1>
         </Container>
      </>
   )
}