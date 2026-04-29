import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I&apos;m a passionate Frontend Developer with a strong foundation in web development technologies.
              With an MCA degree and hands-on experience in building dynamic user interfaces, I&apos;m dedicated to
              creating responsive, user-friendly web applications.
            </p>
            <p>
              During my internship at Citimedia Global Solutions, I collaborated with UI/UX designers to implement
              design solutions, developed dynamic interfaces using React.js, and integrated third-party APIs to
              enhance user experiences. I believe in continuous learning and staying updated with modern web technologies.
            </p>
            <p>
              When I&apos;m not coding, I enjoy exploring new technologies, participating in coding challenges, and
              contributing to collaborative projects. My goal is to develop innovative solutions that make a positive
              impact on users&apos; experiences.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">1+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Commitment</div>
            </div>
          </div>
        </div>

        <div className="education">
          <h3>Education</h3>
          <div className="education-item">
            <div className="education-header">
              <h4>Master of Computer Applications (MCA)</h4>
              <span className="education-cgpa">CGPA: 8.20</span>
            </div>
            <p>KGRL PG College</p>
          </div>
          <div className="education-item">
            <div className="education-header">
              <h4>Bachelor of Science - Computers</h4>
              <span className="education-cgpa">CGPA: 7.49</span>
            </div>
            <p>Aditya Degree College</p>
          </div>
            <div className="education-item">
            <div className="education-header">
              <h4>Intermediate (MPC)</h4>
              <span className="education-cgpa">Percentage: 70%</span>
            </div>
            <p>Vikas Junior College</p>
          </div>
           <div className="education-item">
            <div className="education-header">
              <h4>SSC</h4>
              <span className="education-cgpa">CGPA: 7.3</span>
            </div>
            <p> Z.P.H.School</p>
          </div>
        </div>
      </div>
    </section>
  )
}
