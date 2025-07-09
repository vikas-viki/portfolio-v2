import { useEffect } from "react";
import AOS from "aos";
import "../index.css"
import { Zap } from "lucide-react";

const Hero = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <section id="hero" className='w-full rounded-lg h-[80vh] flex-col md:h-[100vh] text-white text-center flex justify-center items-center overflow-hidden'>
            <div className='flex flex-col items-center justify-center gap-2 z-[2] p-6 ' data-aos="fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-[7px] fsd rounded-full bg-indigo-200 font-outfit border border-white/30 mb-8 animate-fade-in">
                    <Zap className="w-4 h-4 fill-black" stroke="black" />
                    <span className="text-sm font-medium text-black">Full Stack Developer</span>
                </div>
                <span className="font-[900] text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[96px] font-outfit text-transparent stroke-white  leading-[60px] sm:leading-[75px] md:leading-[90px] lg:leading-[100px] xl:leading-[110px] "
                    style={{
                        color: "rgba(255,255,255,0.95)"
                    }}
                >Vikas Kotary</span>
                <span className='text-[20px] px-2 block md:text-[22px] lg:text-[28px] font-[200] text-gray-300 font-outfit py-4 leading-6 md:leading-8 lg:leading-10 text-center '>I enjoy learning new things and solving problems at their root to <br />create immersive&nbsp;
                    <span className="italic  bg-gradient-to-r from-pink-500 via-yellow-400 via-orange-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent rounded-lg digital -py-2"
                        style={{
                            fontFamily: "DM Serif Display",
                            fontWeight: 100,
                        }}
                    >digital</span> experiences.</span>
            </div>
        </section>
    )
}

export default Hero;