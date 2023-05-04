import { Col, Row } from "react-bootstrap"
import style from "./about.module.css"

import { CgCPlusPlus } from "react-icons/cg"
import { IoLogoJavascript } from "react-icons/io"
import { DiPython, DiBootstrap, DiJqueryLogo, DiReact, DiHtml5, DiCss3, DiWindows, DiLinux } from "react-icons/di"
import { TbSql, TbBrandNextjs } from "react-icons/tb"
import { SiMongodb, SiVisualstudio, SiVisualstudiocode, SiMacos, SiVercel } from "react-icons/si"
import { BsGit, BsGithub } from "react-icons/bs"

export default function Skill(){
   return (
      <>
         <h3 className={`mt-4 ${style.arsenal}`}>My arsenal</h3>
         <p className={style.arsenalDes}>The skills, tools and technologies I use to bring applications to life</p>
         
         <Row>
            <Col xs={6} sm={3} lg={2} className={style.icons}>
               <IoLogoJavascript className={style.icon}/>
               <p className={style.iconDes}>Javascript</p>
            </Col>

            <Col xs={6} sm={3} lg={2} className={style.icons}>
               <CgCPlusPlus className={style.icon}/>
               <p className={style.iconDes}>C Plus Plus</p>
            </Col>

            <Col xs={6} sm={3} lg={2} className={style.icons}>
               <DiPython className={style.icon}/>
               <p className={style.iconDes}>Python</p>
            </Col>

            <Col xs={6} sm={3} lg={2} className={style.icons}>
               <DiHtml5 className={style.icon}/>
               <p className={style.iconDes}>HTML5</p>
            </Col>

            <Col xs={6} sm={3} lg={2} className={style.icons}>
               <DiCss3 className={style.icon}/>
               <p className={style.iconDes}>CSS3</p>
            </Col>

            <Col xs={6} sm={3} lg={2} className={style.icons}>
               <DiBootstrap className={style.icon}/>
               <p className={style.iconDes}>Bootstrap</p>
            </Col>

            <Col sm={3} lg={2} className={style.icons}>
               <DiReact className={style.icon}/>
               <p className={style.iconDes}>React JS</p>
            </Col>

            <Col sm={3} lg={2} className={style.icons}>
               <TbBrandNextjs className={style.icon}/>
               <p className={style.iconDes}>Next JS</p>
            </Col>

            <Col sm={3} lg={2} className={style.icons}>
               <DiJqueryLogo className={style.icon}/>
               <p className={style.iconDes}>JQuery</p>
            </Col>

            <Col sm={3} lg={2} className={style.icons}>
               <TbSql className={style.icon}/>
               <p className={style.iconDes}>Oracle SQL</p>
            </Col>

            <Col sm={3} lg={2} className={style.icons}>
               <SiMongodb className={style.icon}/>
               <p className={style.iconDes}>MongoDB</p>
            </Col>

            <Col sm={3} lg={2} className={style.icons}>
               <BsGit className={style.icon}/>
               <p className={style.iconDes}>Git</p>
            </Col>

            <h5 className="mt-4">Tools</h5>
            <Col sm={3} lg={2} className={style.icons}>
               <SiVisualstudio className={style.icon}/>
               <p className={style.iconDes}>Visual Studio</p>
            </Col>

            <Col sm={3} lg={2} className={style.icons}>
               <SiVisualstudiocode className={style.icon}/>
               <p className={style.iconDes}>Visual Studio Code</p>
            </Col>

            <Col sm={3} lg={2} className={style.icons}>
               <BsGithub className={style.icon}/>
               <p className={style.iconDes}>GitHub</p>
            </Col>

            <Col sm={3} lg={2} className={style.icons}>
               <SiVercel className={style.icon}/>
               <p className={style.iconDes}>Vercel</p>
            </Col>

            <h5 className="mt-4">Operating systems</h5>

            <Col sm={3} lg={2} className={style.icons}>
               <DiWindows className={style.icon}/>
               <p className={style.iconDes}>Windows</p>
            </Col>

            <Col sm={3} lg={2} className={style.icons}>
               <SiMacos className={style.icon}/>
               <p className={style.iconDes}>MacOS</p>
            </Col>

            <Col sm={3} lg={2} className={style.icons}>
               <DiLinux className={style.icon}/>
               <p className={style.iconDes}>Linux</p>
            </Col>
         </Row>
      </>
   )
}