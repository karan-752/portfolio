function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "SQL",
    "REST APIs",
    "Git",
    "Docker",
  ];

  return (
    <section>
      <h2>Skills</h2>

      <div>
        {skills.map((skill) => (
          <button key={skill}>{skill}</button>
        ))}
      </div>
    </section>
  );
}

export default Skills;