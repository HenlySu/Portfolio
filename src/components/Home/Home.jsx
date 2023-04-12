import { Container, Col, Row } from "react-bootstrap";

export default function Home(){
   return (
      <>
         <Container>
            <Row>
               <Col md={7}>
                  <h1>Hello World! {' '} 👋🏻</h1>
                  <h1>My name is Henly Su</h1>
               </Col>
            </Row>
         </Container>
      </>
   )
}