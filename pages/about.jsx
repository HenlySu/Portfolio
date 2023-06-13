import { Container, Row } from "react-bootstrap"
import About from "@/src/components/About/About";
import Skill from "@/src/components/About/Skills";
import Github from "@/src/components/About/Github";

export default function AboutPage(){
   return(
      <>
         <Container className='mt-5'>
            <Row>
               <About />
               <Skill />
               <Github />
            </Row>
         </Container>
      </>
   )
}