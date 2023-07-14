import CVimg from '../../../assets/images/img.png'
import './index.scss'
import File from '../../../assets/pdf/CV.pdf'

const CV = () => {
  return (
    <div className='wrapper'>
      <div className='card-cv'>
        <img src={CVimg} alt='CV' className='img-cv'/>
        <button className='download-btn'><a href={File} target="_blank" download="CV-PDF-document">Download CV</a></button>
      </div>
    </div>

  )
}

export default CV