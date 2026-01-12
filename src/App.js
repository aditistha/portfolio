import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaArrowRight, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaFire } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

import './App.css';
import profile from "./assets/Sub.png";

const App = () => {
  const [showMore, setShowMore] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const profileRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsNavOpen(false);
  };
  // Add this useEffect to close menu on ESC key
useEffect(() => {
  const handleEsc = (event) => {
    if (event.key === 'Escape') {
      setIsNavOpen(false);
    }
  };
  window.addEventListener('keydown', handleEsc);
  return () => window.removeEventListener('keydown', handleEsc);
}, []);
useEffect(() => {
  if (isNavOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [isNavOpen]);
  return (
    <div className="portfolio-container">
      {/* Mobile Navigation Toggle */}
      <button 
        className="mobile-nav-toggle"
        onClick={() => setIsNavOpen(!isNavOpen)}
        aria-label="Toggle navigation"
      >
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>
      {/* Floating Navigation */}
      <motion.nav 
        className={`floating-nav ${isNavOpen ? 'active' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul>
          <li onClick={() => scrollToSection(profileRef)}>Profile</li>
          <li onClick={() => scrollToSection(educationRef)}>Education</li>
          <li onClick={() => scrollToSection(experienceRef)}>Experience</li>
          <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
          <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </motion.nav>

      {/* Header */}
      {/* Header */}
<motion.header
  style={{ scale: headerScale, opacity: headerOpacity }}
  className="header"
  ref={profileRef}
>
  <div className="header-grid reversed">
    {/* Left Column - Header Text */}
    <div className="header-text">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        Hi, I'm Aditi Shrestha
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="header-subtitle"
      >
         Web Developer | Software Developer
      </motion.p>
      
     
    </div>

    {/* Center Column - Profile Image */}
 {/* Center Column - Profile Image */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  className="profile-image-container"
>
  <div className="profile-image-frame">
    {/* Colorful floating shapes */}
    <div className="floating-shape shape-1"></div>
    <div className="floating-shape shape-2"></div>
    <div className="floating-shape shape-3"></div>
    <div className="floating-shape shape-4"></div>
    
    {/* Pattern overlay */}
    <div className="pattern-overlay"></div>
    
    {/* Glow effect */}
    <div className="profile-image-glow"></div>
    
    <img 
      src={profile} 
      alt="Aditi Shrestha"
      className="profile-image"
    />
  </div>
</motion.div>

    {/* Right Column - About Section */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      className="about-section"
    >
      <p>
       I am a dedicated and passionate software developer with a strong balance of theoretical knowledge and practical experience 
  in building modern digital solutions. My skills span across Java, JavaScript, ReactJS, and MySQL, and I enjoy creating 
  everything from responsive web applications and Android apps to intelligent, AI-enhanced systems.

Both my academic research and professional experiences influence my approach to development. Great software starts with 
the user by creating clean, intuitive interfaces, but it also needs to be supported by strong, scalable architecture. 
I take pride in building solutions that not only solve the problems of today but are designed to adapt and grow into tomorrow.
      </p>

      <motion.div
        layout
        animate={{ opacity: showMore ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        {showMore && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Collaboration and communication are at the heart of how I work. Having served as a Class Representative during my studies 
        taught me the essence of listening, guiding, and working together to achieve shared goals. I work well in teams where there 
        is an open exchange of ideas and ideas become projects through collaboration.

        I am excited by real-world challenges and am always seeking out opportunities for learning, contribution, and creation of meaningful 
        technology with others. Whether through code, collaboration, or continuous learning, my aim is to build software that makes a difference.
          </motion.p>
        )}
      </motion.div>

      <motion.button 
        className="show-more-btn" 
        onClick={() => setShowMore(!showMore)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        layout
      >
        {showMore ? "Show Less" : "Show More"} 
        <motion.span
          animate={{ rotate: showMore ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: "inline-block", marginLeft: "0.5rem" }}
        >
          <FaArrowRight />
        </motion.span>
      </motion.button>
    </motion.div>
  </div>
</motion.header>
      {/* <motion.header
        style={{ scale: headerScale, opacity: headerOpacity }}
        className="header"
        ref={profileRef}
      >
        <div className="header-grid reversed">
          <div className="header-text">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm Aditi Shrestha
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="header-subtitle"
            >
              Web Developer | Software Developer
            </motion.p>
            
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
  className="about-section"
>
  <p>
  I am a dedicated and passionate software developer with a strong balance of theoretical knowledge and practical experience 
  in building modern digital solutions. My skills span across Java, JavaScript, ReactJS, and MySQL, and I enjoy creating 
  everything from responsive web applications and Android apps to intelligent, AI-enhanced systems.

Both my academic research and professional experiences influence my approach to development. Great software starts with 
the user by creating clean, intuitive interfaces, but it also needs to be supported by strong, scalable architecture. 
I take pride in building solutions that not only solve the problems of today but are designed to adapt and grow into tomorrow.
  </p>


  <motion.div
    layout
    animate={{ opacity: showMore ? 1 : 0 }}
    transition={{ duration: 0.3 }}
    style={{ overflow: "hidden" }}
  >
    {showMore && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Collaboration and communication are at the heart of how I work. Having served as a Class Representative during my studies 
        taught me the essence of listening, guiding, and working together to achieve shared goals. I work well in teams where there 
        is an open exchange of ideas and ideas become projects through collaboration.

        I am excited by real-world challenges and am always seeking out opportunities for learning, contribution, and creation of meaningful 
        technology with others. Whether through code, collaboration, or continuous learning, my aim is to build software that makes a difference.
      </motion.p>
    )}
  </motion.div>

  <motion.button 
    className="show-more-btn" 
    onClick={() => setShowMore(!showMore)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    layout
  >
    {showMore ? "Show Less" : "Show More"} 
    <motion.span
      animate={{ rotate: showMore ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ display: "inline-block", marginLeft: "0.5rem" }}
    >
      <FaArrowRight />
    </motion.span>
  </motion.button>
</motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="profile-image-container"
          >
              <div className="floating-element"></div>
  <div className="floating-element"></div>
  <div className="floating-element"></div>
            <img 
              src={profile} 
              alt="Aditi Shrestha"
              className="profile-image"
               
            />
            <div className="profile-image-border"></div>
          </motion.div>
        </div>
      </motion.header> */}

      {/* Main Content */}
      <main className="main-content">

        {/* Education Section */}
        <motion.section
          ref={educationRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="section"
          id="education"
        >
          <h2>EDUCATION</h2>
          <div className="timeline">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="timeline-item"
            >
              <h3>MSc Advanced Computer Science</h3>
              <h4>Cardiff Metropolitan University, Cardiff, UK</h4>
              <p className="period">2024 – 2025</p>
              <ul>
                My postgraduate journey in MSc Advanced Computer Science at 
                Cardiff Metropolitan University equipped me with advanced knowledge
                 in web technologies, cloud systems, and secure software design. A key highlight
                  was my dissertation, where I developed an intelligent e-commerce chatbot using
                   NLP concepts and live API integrations. The program's emphasis on real-world application 
                   and industry case studies honed my ability to translate technical research into 
                   scalable, user-focused solutions.
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="timeline-item"
            >
              <h3>Bachelor of Computer Information Systems (BCIS)</h3>
              <h4>Apex College, Kathmandu – Affiliated to Pokhara University</h4>
              <p className="period">2018 – 2023</p>
              <ul>
                My undergraduate studies gave me an excellent grounding in programming, software engineering, 
                and IT systems. I got to develop my first full-stack applications, managing databases with 
                MySQL, and right from the analysis of a problem to deployment of the solution. Systems analysis 
                classes developed in me the capability to balance technical precision with the user's perspective.
                 Outside the classroom, I performed very well in all team projects and represented my class, 
                 managing all group works. I gained experience leading empathetically, being on top of deadlines, 
                 and finding ways to align team member efforts toward the achievement of a common goal.
              </ul>
            </motion.div>

          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          ref={experienceRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="section"
          id="experience"
        >
          <h2>WORK EXPERIENCE</h2>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="card"
          >
            <h3>Frontend Developer</h3>
            <h4>IT Expert Nepal, Kathmandu</h4>
            <p className="period">Nov 2022 - Jan 2023</p>
            <ul>
              <li>Learned and worked in different frontend technologies like JavaScript, HTML, CSS, ReactJs etc. and implemented them on different frontend projects.</li>
              <li>Also worked in different software products of our company such as Data Tuning and optimization, Training and Deployment Support of the system.</li>
              <li>Acquired organizational skills like communication, Team Work, Time Management.</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          ref={projectsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="section"
          id="projects"
        >
          <h2>PROJECTS</h2>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="card"
          >
            <h3>Online shopping platform Chatbot</h3>
            <p className="subtitle">Dissertation Project, Cardiff Metropolitan University</p>
            
            <ul>
              As part of the fulfillment of the master’s program dissertation, I created an intelligent 
              chat bot that helps consumers on an e-commerce site. My creation not only allows for intent
               analysis but also escalates the process to a customer support representative when necessary. 
               Additionally, I implemented the frontend design using React and backend functions to dynamically retrieve 
               information about the product being ordered. My creation includes an intuitive conversational 
               interface and handles inquiries from the consumer effectively.
            </ul>
            <a 
              href="https://github.com/aditistha/online-shopping-platform-chatbot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
               <FaGithub />View on GitHub
            </a>
          </motion.div>

         

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="card"
          >
            <h3>Personal Expense Tracker</h3>
            <p className="subtitle">Final Year Project, Cardiff Metropolitan University</p>
            
            <ul>
              This Android application helps people handle every day finances in a simple and easy-to-understand manner. 
              I built this application from scratch and made sure to it was user-friendly. This includes features such as: 
              expense categories, expense summary, and a simple way to add the expense. I used Gradle to implement dependencies
               and made sure the application is easy to handle and scalable. This application should not only give a personal experience 
               but also not confuse the user.
            </ul>
            <a 
              href="https://github.com/aditistha/Personal-expense-tracker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub /> View on GitHub
            </a>
          </motion.div> 
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="card"
          >
            <h3>Restaurant Order Management System</h3>
            <p className="subtitle">Final Year Project, Apex College</p>
           
            <ul>
              Designed the frontend of an all-rounded restaurant management software with the goal of enhancing 
              the efficiency of customer service when processing orders. My software includes an orders dashboard 
              with real-time updates using WebSocket technology for instant receipt and update of orders. I applied 
              React components with the use of Redux to manage states for an interactive and responsive user interface.
               My software also includes a mobile-friendly responsive design with forms for eliminating user mistakes 
               during data entry.
            </ul> 
            <a 
              href="https://github.com/aditistha/Restaurant-Order-Management-System" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub /> View on GitHub
            </a>
          </motion.div>
        </motion.section>
 {/* Skills Section */}
       <motion.section
  ref={skillsRef}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="section"
  id="skills"
>
  <h2>TECHNICAL SKILLS</h2>
  <div className="skills-grid">
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="skill-category"
    >
      <h3>Programming & Web Technologies</h3>
      <div className="skills-list">
        {[
          { name: "Java", icon: <FaJava />, color: "#007396" },
          { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
          { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
          { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
          { name: "ReactJS", icon: <FaReact />, color: "#61DAFB" },
          { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
          { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
          { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
          { name: "Firebase", icon: <FaFire />, color: "#FFCA28" }
        ].map((skill, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.1, y: -5 }}
            className="skill-item"
            style={{ '--skill-color': skill.color }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="skill-category"
            >
              <h3>AI, Cloud & Tools</h3>
              <div className="skills-list">
                {["NLP basics", "Chatbot development", "AWS fundamentals", "APIs", "Gradle", "GitHub"].map((skill, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="skill-item"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="skill-category"
            >
              <h3>Concepts & Soft Skills</h3>
              <div className="skills-list">
                {["OOP", "Data Structures", "Teamwork", "Communication", "Problem-Solving", "Adaptability", "Time Management"].map((skill, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="skill-item"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
        {/* Additional Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="section"
          id="additional"
        >
          <h2>ADDITIONAL INFORMATION</h2>
          <div className="additional-info">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="info-category"
            >
              <h3>Languages</h3>
              <ul>
                <li>English</li>
                <li>Nepali</li>
              </ul>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="info-category"
            >
              <h3>Activities</h3>
              <ul>
                <li>Class-Representative (3rd & 4th Semester), Apex College</li>
              </ul>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="info-category"
            >
              <h3>Hobbies & Interests</h3>
              <ul>
                <li>Tech and coding for open-source projects</li>
                <li>Traveling and learning new languages and cultures</li>
                <li>Coding challenges and self-education</li>
                <li>Sports and meditation</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          ref={contactRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="section"
          id="contact"
        >
          <h2>CONTACT ME</h2>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="card contact-card"
          >
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Cardiff, UK</p>
                  <p className="contact-note">Willing to relocate within the UK</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+44 7743300945</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>hey.aditishrestha@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <h3>Connect with me</h3>
              <div className="social-links">
                <a href="https://linkedin.com/in/aditistha" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/aditistha" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="footer"
      >
        <p>© {new Date().getFullYear()} Aditi Shrestha. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default App;