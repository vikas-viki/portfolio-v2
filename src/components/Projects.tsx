import { ExternalLink, LucideGithub } from "lucide-react";

const Projects = () => {

    const projects = [
        {
            name: "Zeet",
            description: "Built a gather.town like platform for real-time interaction with audio, video and player movement. Used MediaSoup for low-latency communication and WebSockets for seamless chat. Developed a scalable Node.js backend with PostgreSQL, hosted on AWS.",
            image: "zeet.png",
            link: "https://zeet.0xbuilder.in/",
            github: "https://github.com/vikas-viki/zeet",
            techStack: [
                "React",
                "Typescript",
                "Node.js",
                "Express.js",
                "WebSockets",
                "MediaSoup",
                "PostgreSQL",
                "AWS"
            ]
        }
    ]


    const openLink = (link: string) => {
        window.open(link, "_blank");
    };

    return (
        <section id="projects" className="w-full  flex flex-col items-center justify-center gap-4 p-8">
            <span className="font-outfit text-[40px] font-bold text-center block" data-aos="fade-up">Work I've done</span>
            <div className="flex items-center justify-center gap-8 w-full flex-wrap mt-[40px]">
                {
                    projects.map((project, index) => (
                        <div data-aos="zoom-in" key={index} className="backdrop-blur-sm flex flex-wrap md:flex-nowrap items-center md:w-[80%] justify-center gap-8 w-full border-[1px] border-white/20 p-[30px] rounded-[2px] shadow-2xl bg-white/10">
                            <img src={project.image} alt={project.name} className="lg:w-[610px] w-full h-[380px]" />
                            <div className="flex flex-col gap-4 w-full h-full justify-center items-start">
                                <span className="block font-outfit text-[24px] font-semibold">{project.name}</span>
                                <span className="block font-outfit text-[18px]">{project.description}</span>
                                <div className="flex gap-4 mt-4">
                                    <span onClick={() => openLink(project.link)} className="link flex gap-2 cursor-pointer items-center justify-center font-outfit text-[16px] border border-white p-[7px] px-[15px] w-max rounded-[26px] shadow-2xl bg-white/10 h-max">
                                        <ExternalLink size={19} style={{ display: "inline" }} />
                                        visit
                                    </span>
                                    <span onClick={() => openLink(project.github)} className="link flex gap-2 cursor-pointer items-center justify-center font-outfit text-[16px] border border-white p-[7px] px-[15px] w-max rounded-[26px] shadow-2xl bg-white/10 h-max">
                                        <LucideGithub size={19} style={{ display: "inline" }} />
                                        github
                                    </span>
                                </div>
                                <div>
                                    <span className="block py-3 font-outfit text-[20px]">Tech Stack</span>
                                    <div className="flex gap-4 flex-wrap">
                                        {
                                            project.techStack.map((tech, index) => (
                                                <span className="border bg-transparent p-[4px] px-[8px] rounded-[3px] font-outfit" key={index}>{tech}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects;