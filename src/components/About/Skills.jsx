import { Col, Row } from "react-bootstrap"

import { CgCPlusPlus } from "react-icons/cg"
import { IoLogoJavascript, IoLogoVercel } from "react-icons/Io"
import { DiPython, DiBootstrap, DiJqueryLogo, DiReact, DiHtml5, DiCss3, DiWindows, DiLinux } from "react-icons/Di"
import { TbSql, TbBrandNextjs } from "react-icons/Tb"
import { SiMongodb, SiVisualstudio, SiVisualstudiocode, SiSublimetext, SiMacos } from "react-icons/Si"
import { BsGit, BsGithub } from "react-icons/Bs"

export default function Skill(){
   return (
      <>
         <h3 className='mt-4'>My arsenal</h3>
         <p>The skills, tools and technologies I use to bring applications to life</p>

         {/* Missing express, C */}
         <h5>Skills</h5>
         <Row>
            <Col xs={4} md={2} className="icons">
               <IoLogoJavascript />
               <p>Javascript</p>
            </Col>

            <Col xs={4} md={2} className="icons">
               <CgCPlusPlus />
               <p>C Plus Plus</p>
            </Col>

            <Col xs={4} md={2} className="icons">
               <DiPython />
               <p>Python</p>
            </Col>

            <Col xs={4} md={2} className="icons">
               <DiHtml5 />
               <p>HTML5</p>
            </Col>

            <Col xs={4} md={2} className="icons">
               <DiCss3 />
               <p>CSS3</p>
            </Col>

            <Col xs={4} md={2} className="icons">
               <DiBootstrap/>
               <p>Bootstrap</p>
            </Col>

            <Col xs={4} md={2} className="icons">
               <DiReact />
               <p>React JS</p>
            </Col>

            <Col xs={4} md={2} className="icons">
               <TbBrandNextjs />
               <p>Next JS</p>
            </Col>

            <Col xs={4} md={2} className="icons">
               <DiJqueryLogo />
               <p>JQuery</p>
            </Col>

            <Col xs={4} md={2} className="icons">
               <TbSql />
               <p>Oracle SQL</p>
            </Col>

            <Col xs={4} md={2} className="icons">
               <SiMongodb />
               <p>MongoDB</p>
            </Col>

            <Col xs={4} md={2} className="icons">
               <BsGit />
               <p>Git</p>
            </Col>

            <h5 className="mt-4">Tools</h5>
            <Col xs={4} md={2} className="icons">
               <SiVisualstudio />
               <p>Visual Studio</p>
            </Col>
            <Col xs={4} md={2} className="icons">
               <SiVisualstudiocode />
               <p>Visual Studio Code</p>
            </Col>
            <Col xs={4} md={2} className="icons">
               <BsGithub />
               <p>GitHub</p>
            </Col>

            <Col xs={4} md={2} className="icons">
               <IoLogoVercel />
               <p>Vercel</p>
            </Col>

            <h5 className="mt-4">Operating systems</h5>
            <Col xs={4} md={2} className="icons">
               <DiWindows />
               <p>Windows</p>
            </Col>
            <Col xs={4} md={2} className="icons">
               <SiMacos />
               <p>MacOS</p>
            </Col>
            <Col xs={4} md={2} className="icons">
               <DiLinux />
               <p>Linux</p>
            </Col>
         </Row>
      </>
   )
}