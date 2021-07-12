import React from "react";
import { Link } from "react-router-dom";
import "./Resume.css";

const Resume = () => (
  <div className="Resume" data-testid="Resume">
    <h1>I am a Software Engineer</h1>
    <p>
      I am currently a student at Burlington Code Academy's Software Dev
      Bootcamp
    </p>

    <Link to="/resume">
      <button>Download Resume</button>
    </Link>

    {/* First section  */}
    <section>
      <h3>Technical Skills</h3>
      <p>
        <b>category: </b> details details details
      </p>
      <p>
        <b>category: </b> details details details
      </p>
      <p>
        <b>category: </b> details details details
      </p>
      <p>
        <b>category: </b> details details details
      </p>
    </section>

    {/* second resume section  */}
    <section>
      <h3>Relevant Experience</h3>
      <p>
        <b>category: </b>
        details details
      </p>
      <p>
        <b>category: </b>
        details details
      </p>
      <p>
        <b>category: </b>
        details details
      </p>
    </section>

    {/* third resume section  */}
    <section>
      <h3>Education & Certifications</h3>
      <p>Degree/Certification....Institution.....Month, Year</p>
      <p>Degree/Certification....Institution.....Month, Year</p>
      <p>Degree/Certification....Institution.....Month, Year</p>
    </section>
  </div>
);

export default Resume;
