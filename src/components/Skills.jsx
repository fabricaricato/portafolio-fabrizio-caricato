const Skills = () => {
  const skills = [
    "devicon-python-plain colored",
    "devicon-javascript-plain colored",
    "devicon-html5-plain colored",
    "devicon-css3-plain colored",
    "devicon-java-plain colored"
  ];

  return (
    <section>
      <h2 id="skills">Habilidades</h2>
      <div className="skills-icons">
        {skills.map((skillClass, index) => (
          <i key={index} className={skillClass}></i>
        ))}
      </div>
    </section>
  );
};

export default Skills;