import Container from "../components/Container";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect, useState } from "react";
import styles from "../styles/projects.module.css";

const Projects = () => {
  const [value] = useLocalStorage("projects", "");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(value);
  }, [value]);

  return (
    <Container>
      <h4 className={styles.title}>Projects</h4>
      {projects.length === 0 && (
        <h4 className={styles.subtitle}>Please add your first project</h4>
      )}
      <ul className={styles.list}>
        {projects.length &&
          projects?.map((project, i) => (
            <li key={`${project.projectName}-${i}`} className={styles.listItem}>
              <div className={styles.projectName}>{project.projectName}</div>
              <a
                className={styles.linkWrapper}
                href={`https://${project.projectUrl}`}
                target="_blank"
              >
                Go to project page
              </a>
              <div>E-mail: {project.email}</div>
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
