import './App.css'

function App() {

  const graderUrl = "https://grader.kanonkc.com/"
  const githubUrl = 'https://github.com/kanonkc'
  const resumeUrl = 'https://github.com/KanonKC/KanonKC/blob/main/Kanon_Cheewathasana_Resume.pdf'

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">KanonKC</div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">KanonKC</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Software Engineer (?)
          </p>
          <p className="hero-description">
            {/* I build exceptional digital experiences with modern technologies */}
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => window.open(graderUrl, '_blank')}>View My Work</button>
            <button className="btn btn-secondary" onClick={() => window.open(githubUrl, '_blank')}>Get In Touch</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-shape"></div>
        </div>
      </section>

      {/* About Section */}
      {/* <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate developer who loves creating innovative solutions
                and bringing ideas to life through code. With a strong foundation
                in both frontend and backend technologies, I enjoy tackling
                complex challenges and delivering high-quality results.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Skills Section */}
      {/* <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <ul>
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Backend</h3>
              <ul>
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>PostgreSQL & MongoDB</li>
                <li>REST & GraphQL APIs</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Tools & Others</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker & AWS</li>
                <li>Jest & Testing</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Have a project in mind? I'd love to hear about it.
          </p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3>Email</h3>
                <p>hello@kanonkc.dev</p>
              </div>
              <div className="contact-item">
                <h3>Location</h3>
                <p>Available Worldwide</p>
              </div>
              <div className="contact-item">
                <h3>Response Time</h3>
                <p>Within 24 hours</p>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <p>&copy; 2024 KanonKC. All rights reserved.</p>
            </div>
            <div className="footer-right">
              <div className="social-links">
                <a href="#" aria-label="GitHub">GitHub</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" aria-label="Twitter">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

export default App
