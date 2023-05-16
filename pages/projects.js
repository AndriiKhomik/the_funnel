import Container from "../components/Container";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect, useState } from "react";
import styles from "../styles/projects.module.css";

const Projects = () => {
  const [value] = useLocalStorage("projects", "");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(value);
  }, []);
  console.log(projects);
  return (
    <Container>
      <h4 className={styles.title}>Projects</h4>
      <ul>
        {projects.map((project, i) => (
          <li key={`${project.projectName}-${i}`} className={styles.listItem}>
            <div>Project name: {project.projectName}</div>
            <div>Project Url: {project.projectUrl}</div>
            <div>email: {project.email}</div>
            <div>Project goal: {project.goal}</div>
            <div>Workers amount: {project.workers}</div>
            <div>Launch method: {project.launchMethod}</div>
            <div>
              <span className={styles.categoryTitle}>Categories:</span>

              {project.categories.map((category) => (
                <span key={category} className={styles.categoryItem}>
                  {category}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Projects;
