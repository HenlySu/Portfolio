import { Button, Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import style from "./home.module.css"
import Aspirations from "./Aspirations";

export default function Home(){
   return (
      <>
         <Container>
            <Row>
               <Col lg={6} className="my-auto">
                  <h1 className={style.hello_world}>Hello World! {' '} 👋🏻</h1>
                  <h1 className={style.name}>My name is <span className={style.henly}>Henly Su</span></h1>

                  <Aspirations />

                  <Button className={style.home_button}>Resume</Button> 
                  {' '}
                  <Button className={style.home_button}>Contact Me</Button>

               </Col>
               <Col lg={6}>
                  <Image 
                     src='/img/homeImg.svg'
                     alt='Home Image'
                     className="img-fluid"
                     width={500}
                     height={500}
                  />
               </Col>
            </Row>
            
         </Container>
      </>
   )
}