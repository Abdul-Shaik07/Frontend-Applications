function Projects({projects}) {
//     const projects = [
//     {
//       title: "AI Powered Health Care App",
//       technologies: "Java, Springboot, MicroServices, React, MySQL, MongoDB, PostgreSQL",
//       link: "https://mail.google.com/mail/u/0/#inbox/FMfcgzQcpwknVLmmlwfZwrwbVJcbtPDt"
//     },
//     {
//       title: "Microservices based E-commerce App",
//       technologies: "Java, Springboot, MicroServices, MySQL",
//       link: "https://github.com/"
//     }
//   ]
    return (
        <section id='projects' className='projects-section'>
          <h2>Projects</h2>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={index} className="projects-items">
                <h3>{project.title}</h3>
                <h3>{project.technologies}</h3>
                <a href={project.link} target='_blank' rel='noopener noreferrer'>view projects</a>
              </div>
            ))}
          </div>
        </section>
    );
}
export default Projects;