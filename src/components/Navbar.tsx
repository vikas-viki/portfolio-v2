import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

const Navbar = () => {

    useEffect(() => {
        AOS.init({ duration: 1900 });
    }, []);

    return (
        <section
            className='w-full flex justify-center absolute top-[20px] p-4 text-white z-[2]  '
        >
            <MouseParallaxContainer
                globalFactorX={0.3}
                globalFactorY={0.3}
                resetOnLeave={true}
                inverted={true}
                containerStyle={{ overflow: "visible" }}
            >
                <MouseParallaxChild
                    factorX={0.3}
                    factorY={0.5}
                    inverted={false}
                >
                    <div data-aos="fade-down" className='select-none bg-white/10 backdrop-blur-md border border-white/30 inline-block px-6 py-3 rounded-[25px] shadow-2xl'>
                        <ul className='flex gap-6 font-outfit' >
                            <li className='link'><a href="#hero" >Home</a></li>
                            <li className='link'><a href="#skills" >Skills</a></li>
                            <li className='link'><a href="#projects" >Projects</a></li>
                            <li className='link'><a href="#education" >Education</a></li>
                            <li className='link'><a href="#contact" >Contact</a></li>
                        </ul>
                    </div>

                </MouseParallaxChild>
            </MouseParallaxContainer>
        </section>
    )
}

export default Navbar;