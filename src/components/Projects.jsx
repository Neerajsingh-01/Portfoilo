import "../css/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Smart Library Management System",
      description:
        "A web-based library management system where students can browse books, request books, receive notifications, and administrators can manage the complete library database.",
      tech: "HTML • CSS • JavaScript • PHP • MySQL",
    },
    {
      title: "Smart Timetable & Attendance Manager",
      description:
        "A timetable management application that tracks attendance, calculates percentages, manages holidays, and helps students monitor their academic progress.",
      tech: "React • JavaScript • Node.js • MySQL",
    },
    {
      title: "Phone Book Management System",
      description:
        "A CRUD application for managing contacts with features to add, update, search, and delete records using a database.",
      tech: "C++ • File Handling",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 data-aos="fade-up">Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={project.title}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="tech-stack">{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;