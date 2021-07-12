import React from "react";
import "./Projects.css";

const Projects = () => (
  <div className="Projects" data-testid="Projects">
    <h1>Some Recent Projects I have worked on: </h1>

    {/* first mock project */}
    <div className="project" data-testid="project">
      <h3>Project #1</h3>
      <ul>
        <li>itemized descriptional #1</li>
        <li>Assumenda architecto a eveniet</li>
        <li>Eaque eos deleniti doloremque similique molestias</li>
        <li>ad harum repellendus et odio, quidem rerum</li>
      </ul>
      <img src="/media/thousand-hills.jpeg" alt="snapshot of project" />
    </div>

    {/* second mock project */}
    <div className="project" data-testid="project">
      <h3>Project #2</h3>
      <ul>
        <li>itemized descriptional #1</li>
        <li>Assumenda architecto a eveniet</li>
        <li>Eaque eos deleniti doloremque similique molestias</li>
        <li>ad harum repellendus et odio, quidem rerum</li>
      </ul>
      <img src="/media/thousand-hills.jpeg" alt="snapshot of project" />
    </div>

    {/* third mock project  */}
    <div className="project" data-testid="project">
      <h3>Project #3</h3>
      <ul>
        <li>itemized descriptional #1</li>
        <li>Assumenda architecto a eveniet</li>
        <li>Eaque eos deleniti doloremque similique molestias</li>
        <li>ad harum repellendus et odio, quidem rerum</li>
      </ul>
      <img src="/media/thousand-hills.jpeg" alt="snapshot of project" />
    </div>
  </div>
);

export default Projects;
