import ProjectCard from "../../components/ProjectCard/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "URL Shortener",
      description:
        "A scalable URL shortening service built using Java and Spring Boot.",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React and deployed online.",
    },
  ];

  return (
    <section>
      <h1>Projects</h1>

      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
        />
      ))}
    </section>
  );
}

export default Projects;