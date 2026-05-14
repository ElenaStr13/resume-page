import './App.css';
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Education from "./components/Education";
import SoftSkills from "./components/SoftSkills";

function App() {
  return (
      <div className="resume">

        <div className="left">

          <img
              className="photo"
              src={process.env.PUBLIC_URL + "/photo.jpg"}
              alt="photo"
          />

          <Contact />
          <Skills />
          <SoftSkills />

          <section>
            <h2>LANGUAGES</h2>

            <p>English - B1</p>
            <p>Ukrainian - Native</p>
          </section>

        </div>

        <div className="right">

          <h1>OLENA STRATELYUK</h1>

          <h3>FULLSTACK DEVELOPER</h3>

          <section>
            <h2>ABOUT ME</h2>

            <p>
              Junior Fullstack Developer passionate about
              building modern web applications.
            </p>
          </section>

          <Education />

          <section>
            <h2>PROJECTS</h2>

            <div className="project">
              <h4>
                <a
                    href="https://github.com/ElenaStr13/Nestjs-clinic-api2025"
                    target="_blank"
                    rel="noreferrer"
                >
                  Clinic Project
                </a>
              </h4>

              <p>07.2025 — 08.2025</p>

              <ul>
                <li>REST API for clinic management system</li>
                <li>Implemented CRUD operations for patients and doctors</li>
                <li>Backend built with NestJS</li>
                <li>Database integration with MongoDB</li>
                <li>API testing with Postman</li>
              </ul>
            </div>

            <div className="project">
              <h4><a
                  href="https://github.com/ElenaStr13/DevSchoolCRM"
                  target="_blank"
                  rel="noreferrer"
              >
                DevSchool CRM
              </a></h4>
              <p>08.2025 — 03.2026</p>

              <ul>
                <li>CRM system for managing orders and users</li>
                <li>Implemented authentication (JWT, refresh tokens)</li>
                <li>Built login form with validation (React Hook Form, MUI)</li>
                <li>Backend: NestJS</li>
                <li>Frontend: React + TypeScript</li>
                <li>API integration with Axios</li>
              </ul>
            </div>

            <div className="project">
            <h4><a
                href="https://github.com/ElenaStr13/geometry-calculator"
                target="_blank"
                rel="noreferrer"
            >
              Geometry Calculator
            </a></h4>
            <p>05.2026</p>

            <ul>
              <li>Mobile application for calculating geometric shapes</li>
              <li>Built with React Native + Expo + TypeScript</li>
              <li>Implemented reusable shape components and formulas</li>
              <li>Added navigation between calculator screens</li>
            </ul>
            </div>
          </section>

        </div>

      </div>
  );
}

export default App;
