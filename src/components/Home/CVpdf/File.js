import {Document, Page} from "@react-pdf/renderer";
import document from '../../../assets/pdf/CV.pdf'

const File = () => {
  return (
    <Document file={document}>
      <Page>
        wdoadwadmowa
      </Page>
    </Document>
  )
}

export default  File