import { Row } from "react-bootstrap"
import GitHubCalendar from "react-github-calendar"
import style from "./about.module.css"

export default function Github(){
   return (
      <>
         <Row>
            <h3 className={`mt-4 ${style.arsenal}`}>The days I&#39;ve coded</h3>
            <GitHubCalendar username="HenlySu" />
         </Row>
      </>
   )
}