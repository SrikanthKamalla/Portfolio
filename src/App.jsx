import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
        style={{ backgroundColor: "#1b6280" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#about" className="libtn btn">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="libtn btn">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="libtn btn">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#internship" className="libtn btn">
                  Internship
                </a>
              </li>
              <li className="nav-item">
                <a href="#certificates" className="libtn btn">
                  Certification
                </a>
              </li>
              <li className="nav-item">
                <a href="#education" className="libtn btn">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="libtn btn">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="masterDiv mt-5 pt-5">
        <div className="container" id="about">
          <img
            src="..\src\picture.jpg"
            alt="Srikanth Kamalla"
            className="img-fluid"
          />
          <h1>SRIKANTH KAMALLA</h1>
          <p>
            Recent B.Tech Computer Science graduate with a strong foundation in
            Java, JavaScript, and SQL. Skilled in web technologies including
            HTML, CSS, Bootstrap, and ReactJS, with experience using Git,
            GitHub, VS Code, and Figma. Eager to apply my skills, learn
            continuously, and contribute to impactful projects.
          </p>
          <div className="btns">
            <a
              className="anc btn btn-outline-dark"
              href="https://leetcode.com/u/SrikanthKamalla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-code-square"></i> Leetcode
            </a>
            <a
              className="anc btn btn-outline-dark"
              href="https://github.com/SrikanthKamalla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i> GitHub
            </a>
            <a
              className="anc btn btn-outline-dark"
              href="https://www.linkedin.com/in/srikanth-kamalla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <a
              className="anc btn btn-outline-dark"
              href="https://drive.google.com/file/d/1b3njPqSU4ZNh8rrbR7N2do7IsuaihDq9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-file-earmark-person"></i> Resume
            </a>
          </div>
        </div>

        <div className="container" id="skills">
          <h3>Skills</h3>
          <hr />
          <h4>Programming Languages</h4>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
          <h4>Frontend Technologies</h4>
          <ul>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
          <h4>Developer Tools</h4>
          <ul>
            <li>Visual Studio Code</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>MySQL Workbench</li>
          </ul>
        </div>

        <div className="container" id="projects">
          <h3>Projects</h3>
          <hr />
          <h5>
            <a
              href="https://github.com/springboardmentor-104/HealthCheckPro_Infosys_Internship_Mar2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              Health Check Pro
            </a>{" "}
            | MERN |<span className="text-muted">Feb 2025</span>
          </h5>
          <ul>
            <li>
              Built a health assessment web application that guides users
              through categorized questions to evaluate their wellness.
            </li>
            <li>
              Integrated interactive components and hooks to manage user input
              and dynamically generate summary insights.
            </li>
            <li>
              <a
                href="https://myhealthcheckpro.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  borderBottom: "2px solid black",
                }}
              >
                Live site here
              </a>
            </li>
          </ul>
        </div>

        <div className="container" id="internship">
          <h3>Internship</h3>
          <hr />
          <h5>
            Infosys Springboard{" "}
            <span className="text-muted">Feb 2025 - Apr 2025</span>
          </h5>
          <p>
            <strong>Intern</strong> | Remote
          </p>
          <ul>
            <li>
              Developed a health-checking web application to assess users’
              lifestyle, diet, and physical activity, generating health reports
              based on inputs.
            </li>
            <li>
              Utilized HTML, CSS, JavaScript, and ReactJS for front-end
              development, implementing multi-step form functionality, dynamic
              UI updates, responsive design, and state management using React
              Hooks.
            </li>
            <li>
              Gained hands-on experience in frontend development,
              component-based design, and Agile development practices.
            </li>
          </ul>
        </div>

        <div className="container" id="extracurricular">
          <h3>Extracurricular</h3>
          <hr />
          <ul>
            <li>
              <strong>National Service Scheme (NSS) | Member 2021–2024:</strong>{" "}
              Actively participated in community service initiatives, awareness
              drives, and campus volunteering activities to promote social
              responsibility and leadership.
            </li>
            <li>
              <strong>LeetCode Problem Solving | Ongoing:</strong> Solved 180+
              problems on LeetCode to strengthen problem-solving and algorithmic
              thinking skills.
            </li>
          </ul>
        </div>

        <div className="container" id="certificates">
          <h3>Certificates</h3>
          <hr />
          <ul>
            <li>
              <a
                href="https://coursera.org/share/b6956ae5e3f30dbd153a7eab8509eb8c"
                target="_blank"
                rel="noopener noreferrer"
              >
                Object Oriented Programming in Java - Coursera
              </a>
            </li>
            <li>
              <a
                href="https://www.credly.com/badges/ba36339e-d7a1-457a-8e64-b30d37dd3141/public_url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Azure Fundamentals (AZ-900) - Microsoft
              </a>
            </li>
            <li>
              <a
                href="https://www.credly.com/badges/2b516714-9a84-443a-935e-27f701abdaa6/public_url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Introduction to Python - Microsoft
              </a>
            </li>
            <li>
              <a
                href="https://www.credly.com/badges/2eda16a2-813c-4d77-bc2c-585f31993596/public_url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cybersecurity Essentials - Cisco
              </a>
            </li>
          </ul>
        </div>

        <div className="container" id="education">
          <h3>Education</h3>
          <hr />
          <ul>
            <li>
              <strong>Degree:</strong> B.Tech-Computer Science and Engineering
              (Cyber Security)
              <br />
              <strong>College:</strong> Malla Reddy Engineering College (Main
              Campus)
              <br />
              <strong>Location:</strong> Dulapally, Hyderabad, Telangana.
              <br />
              <strong>Year:</strong> 2021-2024
              <br />
              <strong>CGPA:</strong> 7.32
            </li>
            <br />
            <li>
              <strong>Degree:</strong> Diploma - Mining Engineering
              <br />
              <strong>College:</strong> Government Polytechnic College
              <br />
              <strong>Location:</strong> Bellampally, Mancherial, Telangana.
              <br />
              <strong>Year:</strong> 2018-2021
              <br />
              <strong>CGPA:</strong> 8.69
            </li>
            <br />
            <li>
              <strong>Degree:</strong> Secondary School Certificate (SSC)
              <br />
              <strong>School:</strong> Loyola High School
              <br />
              <strong>Location:</strong> Ghanpur, Jangaoan, Telangana.
              <br />
              <strong>Year:</strong> 2018
              <br />
              <strong>CGPA:</strong> 8.5
            </li>
          </ul>
        </div>

        <div className="container" id="contact">
          <h3>Contact</h3>
          <hr />
          <p>
            <i className="bi bi-envelope"></i>
            <a href="mailto:srikanthkamalla.dev@gmail.com">
              srikanthkamalla2919@gmail.com
            </a>
          </p>
          <p>
            <i className="bi bi-telephone"></i> +91 7674944883
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
