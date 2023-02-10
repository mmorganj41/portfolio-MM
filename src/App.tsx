import React, {useEffect, useState, useRef} from 'react';
import './App.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';


type Ref = HTMLDivElement | null;

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [containerScroll, setContainerScroll] = useState(0);
  const [navLocation, setNavLocation] = useState(1);

  useEffect(() => {
    const updatePosition = () => {
      if (containerRef.current) {
        setContainerScroll(containerRef.current.scrollTop);
        visibleInContainer([mainRef.current, aboutRef.current, projectsRef.current, contactRef.current]);
      }
    }
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", updatePosition);
      updatePosition();
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", updatePosition);
      }
    }          
  }, []);

  function visibleInContainer(elements: Ref[]) {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.scrollTop;
    const containerBottom = containerTop + containerRef.current.clientHeight;
    console.log(containerTop);
    let result = 1;
    elements.forEach((ele, i) => {
      if (!ele) return;
      const eleTop = ele.offsetTop;
      const eleBottom = eleTop + ele.clientHeight;
      
      
      if ((eleTop >= containerTop && eleBottom <= containerBottom) ||
        // Some part of the element is visible in the container
      (eleTop < containerTop && containerTop < eleBottom) ||
      (eleTop < containerBottom && containerBottom < eleBottom)) result = i+1;
    })

    setNavLocation(result)
  }


  return (
    <main ref={containerRef}>
      <Nav containerScroll={containerScroll} navLocation={navLocation}/>
      <Main ref={mainRef}/>
      <About ref={aboutRef}/>
      <Projects ref={projectsRef}/>
      <Contact ref={contactRef}/>
    </main>
  )
}

export default App
