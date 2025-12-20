import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';
import './styles/index.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Education/>
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;