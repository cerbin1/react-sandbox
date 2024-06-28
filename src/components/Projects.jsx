import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>Projekty:</h1>
      <div className="project-link">
        <Link to="/project1-todo">Project 1</Link>
      </div>

      <div className="project-link">
        <Link to="/project2-todo">Project 2</Link>
      </div>
    </div>
  );
}
