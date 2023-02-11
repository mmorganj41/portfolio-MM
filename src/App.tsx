import React, {useEffect, useState, useRef} from 'react';
import './App.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';


type Ref = HTMLDivElement | null;

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [containerScroll, setContainerScroll] = useState(0);
  const [navLocation, setNavLocation] = useState(1);

  useEffect(() => {
    const updatePosition = () => {
      setContainerScroll(window.scrollY);
      visibleInContainer([mainRef.current, aboutRef.current, projectsRef.current, contactRef.current]);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => {
      window.removeEventListener("scroll", updatePosition);
    }          
  }, []);

  function visibleInContainer(elements: Ref[]) {
    const containerTop = window.scrollY;
    let result = 1;
    let eleTop = 0;
    let eleBottom = 0;
   
    elements.every((ele, i) => {
      if (!ele) return;
      const previousMidpoint = (eleTop + eleBottom) / 2;
      if (containerTop < previousMidpoint) return false;
      eleTop = eleBottom;
      eleBottom = eleTop + ele.clientHeight;
      
      if (containerTop >= previousMidpoint) result = i+1;
      return true;
    })

    setNavLocation(result)
  }


  return (
    <main>
      <Nav containerScroll={containerScroll} navLocation={navLocation}/>
      <Main ref={mainRef}/>
      <About ref={aboutRef}/>
      <Projects ref={projectsRef}/>
      <Contact ref={contactRef}/>
      <Footer />
    </main>
  )
}

export default App
