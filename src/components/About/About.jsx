import { Container, Col, Row } from "react-bootstrap"
import Image from "next/image";

export default function About(){
   return (
      <>
         <Container>
            <Row>
               <Col md={8}>
                  <h3>About me</h3>

                  <p>
                     Hi, my name is Henly Su and I&#39;m an international student 
                     from Belize currently studying Computer Programming and 
                     Analysis at Seneca College. I have a great passion for web 
                     development, and I&#39;m determined to build a successful career 
                     in this exciting and ever-evolving field.
                  </p>
                  <p>
                     As a highly motivated and driven individual, I&#39;m eager to 
                     expand my knowledge and skills in programming languages, web design, 
                     and software development. With a solid foundation in computer science 
                     and a deep interest in the latest trends and technologies, I&#39;m 
                     confident that I can make a significant contribution to the world of 
                     web development.
                  </p>
                  <p>
                     I believe that my background and experiences have prepared me well 
                     for this career path, and I&#39;m excited to see where my skills and 
                     determination will take me in the future.
                  </p>
               </Col>
               <Col md={4}>
                  <Image
                     src='/img/about.png'
                     alt='about image'
                     className="img-fluid"
                     height={500}
                     width={500}
                  />
               </Col>
            </Row>
         </Container>
      </>
   )
}