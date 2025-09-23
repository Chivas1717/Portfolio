import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faDocker,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    async function animate() {
      return await setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 2000)
    }
    animate()
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I’m a full-stack software engineer who loves turning ideas into products people actually enjoy using. Most of my work lives in React, Next.js, Flutter, and Node.js, but what excites me most is building clean, simple experiences that solve real problems without overcomplicating things.
          </p>
          <p>
            I’m big on communication — I’d rather talk through a problem with the team than over-engineer a solution in silence. I’ve worked in fast-moving startups where I helped take products from zero to real customers, and I’ve learned how much growth comes from testing, iterating, and shipping quickly.
          </p>
          <p>
            Outside of coding, I’m a lifelong cat lover, sports fanatic, and someone who just genuinely enjoys working with people. Tech is my craft, but collaboration is what makes it meaningful.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
