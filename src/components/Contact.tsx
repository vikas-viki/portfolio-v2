const Contact = () => {
    return (
        <section id="contact" className="w-full select-none flex flex-col items-center justify-center gap-4 p-8 mb-[400px] backdrop-blur-xs">
            <span data-aos="fade-up" className="font-outfit text-[40px] font-bold text-center block text-white mb-[50px]">Get in Touch</span>
            <div className="main p-4 rounded-[5px] flex gap-[20px] flex-wrap md:flex-nowrap">
                <div className="photo  w-full md:w-[66%] rounded-[5px] flex items-center justify-center">
                    <img src="me.png" alt="me" className="hover:scale-[1.01] transition-all rounded-[5px] duration-150" />
                </div>
                <div className="contact  w-full h-full flex flex-col gap-4">
                    <div className="handles-me flex gap-4 w-full h-full">
                        <div className="border border-slate-400 p-4 rounded-[5px] flex gap-4 flex-wrap w-max justify-center items-center customShadow bg-slate-900">
                            <img src="twitter.png" className="cursor-pointer w-[60px] h-[60px] " alt="" />
                            <img src="linkedin.png" className="cursor-pointer w-[60px] h-[60px] " alt="" />
                            <img src="mail.png" className="cursor-pointer w-[60px] h-[60px]" alt="" />
                        </div>
                        <div className="text font-outfit border border-slate-400 p-4 rounded-[5px] customShadow bg-slate-900">
                            <span className="block text-outfit font-semibold text-slate-100 text-[25px] mb-2">About me</span>
                            <span className="text-slate-300 text-[20px]">Hello, I'm Vikas Kotary. I enjoy learning new things and solving problems at their root to build immersive digital applications, whether in frontend, backend or smart contract development. I also love listening to music. 'When you're no one, every step you take is progress.' — Me.</span>
                        </div>
                    </div>
                    <div className="time-zone border rounded-[5px] border-slate-400 p-4 relative customShadow ">
                        <span className="absolute bottom-[26px] leading-[39px] left-[40px] z-[2] text-[30px] font-semibold font-outfit text-slate-300 hover:bottom-[30px] hover:scale-[1.01] transition-all duration-150">I'm flexible with <br />timezone communications</span>
                        <img src="earth.jpg" alt="" className="w-full h-[318px] brightness-[0.7]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;