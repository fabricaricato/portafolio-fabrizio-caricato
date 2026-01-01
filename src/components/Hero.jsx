import fotoCarnet from '../assets/foto-carnet.jpeg';

const Hero = () => {
  return (
    <section id="section-home" className="short-personal-presentation">
      <img className="image-presentation" src={fotoCarnet} alt="foto-carnet" />
      <h1 className="name-title">Fabrizio Caricato</h1>
      <div className="short-description-container">
        <h2 className="short-description">Programación de sistemas y desarrollo web fullstack</h2>
        <p>
          Contactate conmigo :) {`=>`} <a className="contact-me" href="mailto:fabriziocaricato1@gmail.com">fabriziocaricato1@gmail.com</a>
        </p>
        <div className="social-icons">
          <a href="mailto:fabriziocaricato1@gmail.com"><i className="fa-solid fa-envelope"></i></a>
          <a href="https://linkedin.com/in/fabrizio" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;