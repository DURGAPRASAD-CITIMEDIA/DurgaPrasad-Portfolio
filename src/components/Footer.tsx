import { Heart } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Uppu Durga Prasad</h3>
            <p>Frontend Developer & UI Enthusiast crafting beautiful web experiences.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://linkedin.com/in/uppu-durga-prasad" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://Github.com" target="_blank" rel="noopener noreferrer">Github</a></li>
              <li><a href="mailto:durgaprasaduppu1@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            Made with <Heart size={16} className="heart-icon" /> by Uppu Durga Prasad
          </p>
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
