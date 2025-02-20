import './App.css';
import { MouseParallax } from "react-just-parallax";
import CustomCursor from './components/cursor/Cursor';

// for technology exploration, use websocket and break apart and show internal workings.

function App() {
  return (
    <div className='flex flex-col items-center justify-center gap-2 bg-gray-900 h-screen w-full h-full overflow-hidden'>
      <CustomCursor
        targets={['.link', '.your-css-selector']}
        customClass='custom-cursor'
        dimensions={30}
        fill='#FFF'
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.5}
      />
      <section className='w-full h-[100vh] rounded-lg text-white text-center flex justify-center items-center overflow-hidden'>
        <div className='absolute  top-0 left-0 z-0 '>
          <MouseParallax shouldPause shouldResetPosition strength={0.05}>
            <div className='bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg w-[95vw] h-[90vh] m-[2.5vh] absolute top-0 left-0'>
            </div>
          </MouseParallax>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 z-[2] p-6'>
          <span className='justify-self-start'>I'm</span>
          <h2 className='text-6xl font-bold'>Vikas Kotary</h2>
          <span className='text-2xl'>I love to explore technologies that wonder me and solve complex problems that challenge me.</span>
        </div>
      </section>


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
  )
}

export default App
