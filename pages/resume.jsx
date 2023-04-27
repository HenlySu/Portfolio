import { Container } from "react-bootstrap"
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ResumePage(){
   return (
      <>
         <Container>
            <Document file="doc/Resume.pdf">
               <Page pageIndex={0} />
            </Document>
         </Container>
      </>
   )
}