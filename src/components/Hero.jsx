const links = [
    { 
      id: 1,
      href: "mailto:fabriziocaricato1@gmail.com", 
      icon: "fa-solid fa-envelope", 
      label: "Enviar Email" 
    },
    { 
      id: 2,
      href: "https://www.linkedin.com/in/fabrizio-caricato-784aa3262",
      icon: "fa-brands fa-linkedin", 
      label: "LinkedIn" 
    },
    { 
      id: 3,
      href: "https://github.com/tu-usuario", 
      icon: "fa-brands fa-github", 
      label: "GitHub" 
    },
  ];

const Hero = () => {
  return (
    <section id="section-home" className="short-personal-presentation">
      <h1 className="name-title">Fabrizio Caricato</h1>
      <div className="short-description-container">
        <div className="description-typewriter">
          <h2 className="short-description">Programación de sistemas y desarrollo web fullstack</h2>
        </div>
        <div className="social-icons">
        {links.map((link) => (
          <a 
            key={link.id}
            href={link.href}
            target={link.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={link.label}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;