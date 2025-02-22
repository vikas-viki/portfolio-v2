import './App.css';
import CustomCursor from './components/cursor/Cursor';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

// for technology exploration, use websocket and break apart and show internal workings.

function App() {

  return (
    <>
      <CustomCursor
        targets={['.link', ".innovative"]}
        customClass='custom-cursor'
        dimensions={30}
        fill='#FFF'
        smoothness={{
          movement: 0.1,
          scale: 0.09,
          opacity: 0.2,
        }}
        targetOpacity={0.5}
        targetScale={2}
      />
      <div className='flex flex-col items-center justify-center gap-2 bg-black h-screen w-full h-full overflow-hidden'>
        <Navbar />
        <Hero />

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
