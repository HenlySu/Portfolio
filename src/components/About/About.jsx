import { Container, Col, Row } from "react-bootstrap"
import Image from "next/image";
import style from "./about.module.css"

export default function About(){
   return (
      <>
         <Container>
            <Row>
            <Col lg={6} className="d-flex justify-content-center">
                  <Image
                     src='/img/about.png'
                     alt='about image'
                     className={`img-fluid ${style.image}`}
                     height={500}
                     width={500}
                  />
               </Col>

               <Col lg={6}>
                  <h3 className={style.about}>About me</h3>
                  <br />
                  <p className={style.paragraph}>
                     Hi, my name is Henly Su and I&#39;m an international student 
                     from Belize currently studying Computer Programming and 
                     Analysis at Seneca College. I have a great passion for web 
                     development, and I&#39;m determined to build a successful career 
                     in this exciting and ever-evolving field.
                     <br />
                     <br />
                     As a highly motivated and driven individual, I&#39;m eager to 
                     expand my knowledge and skills in programming languages, web design, 
                     and software development. With a solid foundation in computer science 
                     and a deep interest in the latest trends and technologies, I&#39;m 
                     confident that I can make a significant contribution to the world of 
                     web development.
                     <br />
                     <br />
                     I believe that my background and experiences have prepared me well 
                     for this career path, and I&#39;m excited to see where my skills and 
                     determination will take me in the future.
                  </p>
               </Col>
            </Row>
         </Container>
      </>
   )
}