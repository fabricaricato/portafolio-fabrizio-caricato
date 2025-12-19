const Projects = () => {
  const projectList = [
    {
      title: "Chat-UI",
      description: "Simple interfaz de un chat funcional entre dos personas.",
      tech: "HTML, CSS y JavaScript"
    }
    // Puedes agregar más objetos aquí
  ];

  return (
    <section>
      <h2 id="proyects">Proyectos</h2>
      {projectList.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Tecnologías: </strong>{project.tech}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;