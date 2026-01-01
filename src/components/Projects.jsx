const Projects = () => {
  const projectList = [
    {
      title: "Chat-UI",
      description: "Simple interfaz de un chat funcional entre dos personas.",
      tech: "HTML, CSS y JavaScript"
    }
  ];

  return (
    <section id="section-projects" className="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid"> 
        {projectList.map((project, index) => (
          <div key={index} className="card"> 
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p style={{marginTop: '15px', color: '#27e6ec'}}>
              <strong>Tecnologías: </strong>{project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;