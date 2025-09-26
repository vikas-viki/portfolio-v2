import './App.css';
import CustomCursor from './components/cursor/Cursor';
import Hero from './components/Hero';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from 'react';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Lenis from 'lenis';
import { Analytics } from "@vercel/analytics/next"

function App() {
  const [init, setInit] = useState(false);

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

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      {init && <Particles id="tsparticles" className='w-[100vw]' particlesLoaded={particlesLoaded}
        options={options} />}
      <CustomCursor
        targets={['.link', ".digital", ".skill", '.fsd']}
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
        {/* <Navbar /> */}
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Analytics />
      </div>
    </>
  )
}

export default App
