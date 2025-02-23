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
import { useEffect, useMemo, useState } from 'react';
import Skills from './components/Skills';

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

        {/* <section className=''>
        <h3>Tech Stack</h3>
        <div>
          <div className="frontent">
            <span>Frontend</span>
            <div>
              <div>
                <img src="" alt="" />
                <span>React</span>
              </div>
              <div>
                <img src="" alt="" />
                <span>Typescript</span>
              </div>
              <div>
                <img src="" alt="" />
                <span>Tailwind CSS</span>
              </div>
              <div>
                <img src="" alt="" />
                <span>Redux</span>
              </div>
            </div>
          </div>
          <div className="backend">
            <span>Backend</span>
            <div>
              <img src="" alt="" />
              <span>Node.js</span>
            </div>
            <div>
              <img src="" alt="" />
              <span>Express.js</span>
            </div>
            <div>
              <img src="" alt="" />
              <span>REST API</span>
            </div>
            <div>
              <img src="" alt="" />
              <span>WebSockets & WebRTC</span>
            </div>
          </div>
          <div className="db">
            <span>Database</span>
            <div>
              <img src="" alt="" />
              <span>MongoDB</span>
            </div>
            <div>
              <img src="" alt="" />
              <span>PostgreSQL</span>
            </div>
          </div>
          <div className='DevOps'>
            <span>DevOps</span>
            <div>
              <img src="" alt="" />
              <span>AWS (EC2, S3, Lambda)</span>
            </div>
            <div>
              <img src="" alt="" />
              <span>Vercel / Netlify</span>
            </div>
          </div>
        </div>
      </section> */}
      </div>
    </>
  )
}

export default App
