import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image";
import { CgCPlusPlus } from "react-icons/cg"
import { IoLogoJavascript } from "react-icons/Io"
import { DiPython, DiHtml5, DiCss3, DiWindows, DiLinux } from "react-icons/Di"
import { TbSql } from "react-icons/Tb"
import { SiMongodb, SiVisualstudio, SiVisualstudiocode, SiSublimetext, SiMacos } from "react-icons/Si"

export default function About(){
   return(
      <>
         <Container className='mt-4'>
            <Row>
               <Col md={8}>
               <h1>About me</h1>

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

               <h1>My arsenal</h1>
               <p>The skills, tools and technologies I use to bring applications to life</p>

               <p>Languages</p>
               <IoLogoJavascript />
               <CgCPlusPlus />
               <DiPython />
               <DiHtml5 />
               <DiCss3 />

               <p>databases</p>
               <TbSql />
               <SiMongodb />

               <p>Tools</p>
               <SiVisualstudio />
               <SiVisualstudiocode />
               <SiSublimetext />

               <p>Operating systems</p>
               <DiWindows />
               <SiMacos />
               <DiLinux />
               

               <h1>Education</h1>
               <p>Two card elements with school information</p>

               <h1>Github stats</h1>
            </Row>


         </Container>
      </>
   )
}