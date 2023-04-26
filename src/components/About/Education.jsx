import { Col, Row } from "react-bootstrap"
import Image from "next/image";

export default function Education(){
   return(
      <>
         <h1 className="mt-4">Education</h1>
         <Row>
            <Col>
               <Image
                  src='/img/education/ijc.png'
                  alt='IJC'
                  className="img-fluid"
                  height={300}
                  width={300}
               />
               <p>Independence Junior College</p>
               <p>Information Technology</p>
               <p>2019 - 2020</p>
            </Col>
            
            <Col>
               <Image
                  src='/img/education/seneca.png'
                  alt='IJC'
                  className="img-fluid"
                  height={300}
                  width={300}
               />
               <p>Seneca College</p>
               <p>Computer Programming and Analysis</p>
               <p>2022 - Present</p>
            </Col>
         </Row>
      </>
   )
}