
import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import './Projects.css'

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
   {
  title: 'BrainFx 360 Assessment',
  description:
    'A cognitive assessment web application with interactive UI, API integration, and dynamic performance reports.',
  technologies: [
    'React',
    'TypeScript',
    'Material UI',
    'REST APIs',
    'HTML',
    'CSS',
    'JavaScript'
  ],
  features: [
    'Responsive UI Screens',
    'API Integration',
    'Drag-and-Drop Activities',
    'Score Calculation',
    'Dynamic Reports'
  ],
  role: 'Frontend Developer'
},
   {
  title: 'BrainFx Screen Assessment',
  description:
    'A cognitive assessment web application with interactive UI, API integration, and dynamic performance reports.',
  technologies: [
    'React',
    'TypeScript',
    'Material UI',
    'REST APIs',
    'HTML',
    'CSS',
    'JavaScript'
  ],
  features: [
    'Responsive UI Screens',
    'API Integration',
    'Interactive Activities',
    'Score Calculation',
    'Dynamic Reports'
  ],
  role: 'Frontend Developer'
},
     {
  title: 'BrainFx Vcax Assessment',
  description:
    'A cognitive assessment web application with interactive UI, API integration, and dynamic performance reports.',
  technologies: [
    'React',
    'TypeScript',
    'Material UI',
    'REST APIs',
    'HTML',
    'CSS',
    'JavaScript'
  ],
  features: [
    'Responsive UI Screens',
    'API Integration',
    'Interactive Activities',
    'Score Calculation',
    'Dynamic Reports'
  ],
  role: 'Frontend Developer'
},
     {
  title: 'BrainFx Admin Dashboard',
  description:
    'A web application with interactive UI, API integration, and dynamic performance reports.',
  technologies: [
    'React',
    'TypeScript',
    'Material UI',
    'REST APIs',
    'HTML',
    'CSS',
    'JavaScript'
  ], 
  features: [
    'Responsive UI Screens',
    'API Integration',
    'Interactive Activities',
    'Score Calculation',
    'Dynamic Reports'
  ],
  role: 'Frontend Developer'
},
   
  ]

 

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }
const getVisibleCards = () => {
  if (window.innerWidth <= 768) return 1
  if (window.innerWidth <= 1024) return 2
  return 3
}



const visibleCards = getVisibleCards()
const maxIndex = projects.length - visibleCards
  return (
    <section id="projects" className="projects">
      <div className="container">

        <div className="projects-header">
          <h2>Featured Projects</h2>

          <div className="arrows">
            <button onClick={handlePrev} disabled={currentIndex === 0}>
              <ChevronLeft />
            </button>
            <button onClick={handleNext} disabled={currentIndex === maxIndex}>
              <ChevronRight />
            </button>
          </div>
        </div>

       <div className="slider-wrapper">
  <div className="projects-slider-container">
    <div
      className="projects-slider"
//      style={{
//   transform: `translateX(calc(-${currentIndex} * ((100% - 4rem) / 3 + 2rem)))`
// }}

 style={{
    transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
  }}
    >
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <div className="project-header">
                    <h4 style={{fontSize:"20px"}}>{project.title}</h4>
                    <span className="project-role">{project.role}</span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-section">
                    <h4>Technologies</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-section">
                    <h4>Key Features</h4>
                    <ul className="features-list">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="project-footer">
                  <a href="#" className="project-link">
                    <FaGithub size={18} /> Code
                  </a>
                  <a href="#" className="project-link">
                    <ExternalLink size={18} /> Demo
                  </a>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
