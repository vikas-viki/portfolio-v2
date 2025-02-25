import './App.css';
import CustomCursor from './components/cursor/Cursor';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useRef, useState } from 'react';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [init, setInit] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <>
      {init && <Particles id="tsparticles" particlesLoaded={particlesLoaded}
        options={options} />}
      <CustomCursor
        targets={['.link', ".innovative", ".skill"]}
        customClass='custom-cursor'
        dimensions={30}
        fill='#FFF'
        smoothness={{
          movement: 0.1,
          scale: 0.09,
          opacity: 0.2,
        }}
        strokeColor='#000'
        strokeWidth={0}
        opacity={0.5}
        targetOpacity={0.5}
        targetScale={2}
      />
      <div className='flex flex-col items-center justify-center gap-2 bg-black  w-full '>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  )
}

export default App
