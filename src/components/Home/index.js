import './index.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'

import LogoTitle from '../../assets/images/logo-m.png'
import AnimatedLetters from '../AnimatedLetters'
import InfoCard from './InfoCard'
import CV from "./CVpdf/CV";

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'r', 'k', ',']
  const jobArray = [
    // 'w',
    // 'e',
    // 'b',
    // ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    async function animate() {
      return await setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
    animate()
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _16`}>m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
            <br />
            <span className={`${letterClass} _21`}>w</span>
            <span className={`${letterClass} _22`}>e</span>
            <span className={`${letterClass} _23`}>b</span>
            <span className={`${letterClass} _24`}> </span>
            <br className="breakpoint" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={25}
            />
          </h1>
          <h2>Fullstack Developer / Flutter / NodeJs / React </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <CV />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
