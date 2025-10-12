import { useRef } from 'react'
import LogoM from '../../../assets/images/logo-m.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" src={LogoM} alt="JavaScript,  Developer" />
    </div>
  )
}

export default Logo


