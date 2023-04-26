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
                  height={500}
                  width={500}
               />
            </Col>
            <Col>
               <Image
                  src='/img/education/seneca.png'
                  alt='IJC'
                  className="img-fluid"
                  height={500}
                  width={500}
               />
            </Col>
         </Row>
      </>
   )
}