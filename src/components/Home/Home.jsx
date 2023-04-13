import { Button, Container, Col, Row } from "react-bootstrap";
import Image from "next/image";

export default function Home(){
   return (
      <>
         <Container>
            <Row>
               <Col md={8}>
                  <h1>Hello World! {' '} 👋🏻</h1>
                  <h1>My name is Henly Su</h1>
                  <p>Some text animations</p>
                  <Button>Resume</Button>
                  <Button>Contact Me</Button>
               </Col>
               <Col md={4}>
                  <Image 
                     src='/img/homeImg.svg'
                     alt='Home Image'
                     width={500}
                     height={500}
                  />

               </Col>
            </Row>
         </Container>
      </>
   )
}