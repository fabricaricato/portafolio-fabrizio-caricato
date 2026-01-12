const Header = () => {
  return (
    <header>
      <aside>
        <nav>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxwl4fhem6m2urbLPsROL7UHP2tjF4CowszALXe5IwDIMG7C2VdCqSyLCsNi4mrqWuKJgVE215SQCpX3TOTQSUgwhOnN_kBr2FB6omLvWww&s=10" alt="profile-pic" width={30} />
            <p>prueba</p>
          </div>
          <ul>
            <li><a href="#section-home">Inicio</a></li>
            <li><a href="#section-about-me">Sobre mí</a></li>
            <li><a href="#section-education">Educación</a></li>
            <li><a href="#section-skills">Habilidades</a></li>
            <li><a href="#section-projects">Proyectos</a></li>
            <li><a href="#section-contacts">Contactos</a></li>
          </ul>
        </nav>
      </aside>
    </header>
  );
};

export default Header;