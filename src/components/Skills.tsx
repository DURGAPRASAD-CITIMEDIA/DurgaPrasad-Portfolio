import { GrCertificate } from 'react-icons/gr'
import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: ['React.js','HTML5', 'CSS3', 'JavaScript',  'Material-UI', 'E-charts' , 'Responsive Design']
    },
   
   
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Github', 'Visual Studio Code', 'Adobe Photoshop','postman', 'Netlify','canva' ]
    },
     {
      title: 'Programming Languages',
      skills: ['JavaScript', 'Core Java',]
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <div className="cert-list">
            <div className="cert-item">
              <div className="cert-icon"><GrCertificate size={30}/></div>
              <div>
                <h4>Java for Beginners</h4>
                <p>Besant Technologies</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-icon"><GrCertificate size={30}/></div>
              <div>
                <h4>Front End Development</h4>
                <p>Great Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
