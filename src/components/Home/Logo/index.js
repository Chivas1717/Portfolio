import { useEffect, useRef } from 'react'
import LogoM from '../../../assets/images/logo-m.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" src={LogoM} alt="JavaScript,  Developer" />

      {/* <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="m177,68l106,-1c0,0 39,114 39,114c0,0 42,-115 42,-115c0,0 106,0 106,0c0,0 74,324 74,324c0,0 -110,0 -110,0c0,0 -29,-137 -29,-137c0,0 -48,141 -48,141c0,0 -67,0 -67,0c0,0 -48,-137 -48,-137c0,0 -30,133 -30,133c0,0 -107,0 -107,0c0,0 72,-322 72,-322z"
          />
        </g>
      </svg> */}
    </div>
  )
}

export default Logo
