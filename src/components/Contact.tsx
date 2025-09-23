import { Linkedin, Mail, Twitter } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="w-full  flex flex-col items-center justify-center gap-4 p-8 mb-[100px] backdrop-blur-xs ">
            <span data-aos="fade-up" className="font-outfit text-[27px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold text-center block text-white mb-[50px] ">Get in Touch</span>
            <div className="main p-4 rounded-[5px] flex gap-[20px] flex-wrap md:flex-nowrap z-[3]">
                <div className="photo  w-full md:w-[66%] rounded-[5px] flex items-center justify-center">
                    <img src="me.png" alt="me" className="hover:scale-[1.01] transition-all rounded-[5px] duration-150" />
                </div>
                <div className="contact  w-full h-full flex flex-col gap-4">
                    <div className="handles-me flex gap-4 w-full h-full customShadow">
                        <div className="text font-outfit border border-slate-400 p-4 rounded-[5px]  bg-slate-900">
                            <span className="block text-outfit font-semibold text-slate-100 text-[21px] sm:text-[23px] md:text-[25px] mb-2">About me</span>
                            <span className="text-slate-300 text-[18px] sm:text-[20px]">Hello, I'm Vikas Kotary. I enjoy learning new things and solving problems at their root to build immersive digital applications, whether in frontend, backend or smart contract development. I also love listening to music. <br /><span className="block mt-2 text-slate-200">Every day we learn something, notice it and make it count - Me.</span></span>
                            <div className="px-4 pt-2 rounded-[5px] flex gap-4 w-full flex-wrap  justify-end items-center">
                                <a target="blank" rel="noopener noreferrer" href="https://x.com/devdoodvikas"><Twitter className="link cursor-pointer" /></a>
                                <a target="blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vikaskotary/"><Linkedin className="link cursor-pointer" /></a>
                                <a target="blank" href="mailto:vikaskotary001@gmail.com"><Mail className="link cursor-pointer" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="time-zone border rounded-[5px] border-slate-400 p-2 md:p-4 relative customShadow ">
                        <span className="absolute bottom-[20px] leading-[39px] left-[30px] z-[2] text-[25px] sm:text-[27px] md:text-[28px] lg:text-[30px] font-semibold font-outfit text-slate-300 hover:bottom-[30px] hover:scale-[1.01] transition-all duration-150">I'm flexible with <br />timezone communications</span>
                        <img src="earth.jpg" alt="" className="w-full h-[318px] brightness-[0.7]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;