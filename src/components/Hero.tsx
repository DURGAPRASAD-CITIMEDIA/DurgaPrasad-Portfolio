import { ArrowRight, Mail } from 'lucide-react'
import './Hero.css'
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa'
interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/Dp-Resume.pdf'
    link.setAttribute('download', 'Dp-Resume.pdf')
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  const handleContactScroll = () => {
    setActiveSection('contact')
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-greeting">
            <FaReact size={30} className="react-logo" />
            <p>Hey there, I&apos;m</p>
          </div>
          <h1 className="hero-title">Uppu Durga Prasad</h1>
          <p className="hero-subtitle">Passionate Frontend Developer</p>
          <p className="hero-description">
            I craft beautiful, responsive web applications using React.js, JavaScript, and modern web technologies.
            Passionate about creating user-friendly interfaces and learning new technologies in a collaborative environment.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleResumeDownload}>
              Download Resume <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary" onClick={handleContactScroll}>
              Contact Me
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/uppu-durga-prasad/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin size={20} />
            </a>
            <a href="https://Github.com/DURGAPRASAD-CITIMEDIA" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub size={20} />
            </a>
            <a href="mailto:durgaprasaduppu1@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="gradient-circle"></div>
            <div className="code-box">
              <img src="dp.png" alt="Code Sample" className="code-image" />
            </div>
          </div>
        </div>
      </div>

      
    </section>
  )
}
