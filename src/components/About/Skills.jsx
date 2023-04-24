import { CgCPlusPlus } from "react-icons/cg"
import { IoLogoJavascript } from "react-icons/Io"
import { DiPython, DiJqueryLogo, DiReact, DiHtml5, DiCss3, DiWindows, DiLinux } from "react-icons/Di"
import { TbSql, TbBrandNextjs } from "react-icons/Tb"
import { SiMongodb, SiVisualstudio, SiVisualstudiocode, SiSublimetext, SiMacos } from "react-icons/Si"
import { BsGit, BsGithub } from "react-icons/Bs"

export default function Skill(){
   return (
      <>

         <h3 className='mt-4'>My arsenal</h3>
         <p>The skills, tools and technologies I use to bring applications to life</p>

         <p>Skills</p>
         {/* Missing express, C */}
         <IoLogoJavascript />
         <CgCPlusPlus />
         <DiPython />
         <DiHtml5 />
         <DiCss3 />
         <DiReact />
         <TbBrandNextjs />
         <DiJqueryLogo />
         <TbSql />
         <SiMongodb />
         <BsGit />

         <p>Tools</p>
         <SiVisualstudio />
         <SiVisualstudiocode />
         <SiSublimetext />
         <BsGithub />

         <p>Operating systems</p>
         <DiWindows />
         <SiMacos />
         <DiLinux />
      </>
   )
}