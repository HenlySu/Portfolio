import { Row } from "react-bootstrap"
import GitHubCalendar from "react-github-calendar"

export default function Github(){
   return (
      <>
         <Row>
            <h5>The days I&#39;ve coded</h5>
            <GitHubCalendar username="HenlySu" />
         </Row>
      </>
   )
}