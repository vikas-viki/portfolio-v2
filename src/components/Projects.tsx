import { ExternalLink, LucideGithub } from "lucide-react";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

const Projects = () => {

    const projects = [
        {
            name: "Applify",
            description: "A seamless platform for managing student and faculty applications. Enabled users to submit various academic and administrative applications seamlessly. Developed with Next.js and TypeScript, using Prisma for efficient PostgreSQL management.",
            image: "applify.png",
            link: "https://applify.0xbuilder.in/",
            github: "https://github.com/vikas-viki/formforge/tree/revamp/applify",
            techStack: [
                "Next.js",
                "Prisma",
                "Typescript",
                "PostgreSQL",
                "AWS"
            ]
        },
        {
            name: "Zeet",
            description: "Built a gather.town like platform for real-time interaction with audio, video and player movement. Used MediaSoup for low-latency communication and WebSockets for seamless chat. Developed a scalable Node.js backend with PostgreSQL, hosted on AWS. (under development)",
            image: "zeet.png",
            link: "https://zeet.0xbuilder.in/",
            github: "https://github.com/vikas-viki/zeet",
            techStack: [
                "React",
                "Typescript",
                "Node.js",
                "Prisma",
                "Express.js",
                "WebSockets",
                "MediaSoup",
                "PostgreSQL",
                "AWS"
            ]
        },
        {
            name: "Web3 Safebridge",
            description: "Built a Web3-powered escrow platform ensuring secure and transparent transactions with 0% fees. Integrated Hardhat, Chainlink and OpenZeppelin for smart contract security. Developed a seamless user experience with React and Ethers.js.",
            image: "web3safebridge.png",
            link: "https://web3safebridge.0xbuilder.in/",
            github: "https://github.com/vikas-viki/Escrow2.0",
            techStack: [
                "React",
                "Tailwind CSS",
                "Hardhat",
                "Solidity",
                "Ethers.js",
                "Chainlink",
            ]
        },
        {
            name: "traceCrypto",
            description: "Built a real-time crypto tracking dashboard using CoinGecko API, React, and ECharts for dynamic visualizations. Implemented GSAP animations and Numeral for seamless UX. Optimized performance with TypeScript and Vite.",
            image: "traceCrypto.png",
            link: "https://cryptotracer.0xbuilder.in/",
            github: "https://github.com/vikas-viki/crypto-tracer-frontend",
            techStack: [
                "React",
                "TypeScript",
                "CoinGecko API",
                "Axios",
                "ECharts",
                "GSAP",
                "Numeral"
            ]
        },
        {
            name: "Welcomint",
            description: "Built a feature-rich NFT marketplace enabling seamless creation, listing, buying, and zero-cost cancellations. Integrated Pinata for IPFS storage and aligned with OpenSea metadata standards. Developed a secure backend with Express, Mongoose, and JWT authentication.",
            image: "welcomint.png",
            link: "https://welcomint.0xbuilder.in/",
            github: "https://github.com/vikas-viki/welcomint",
            techStack: [
                "React",
                "Node.js",
                "Wagmi",
                "MongoDB",
                "Pinata",
                "Solidity",
                "Ethers.js",
                "Tailwind CSS"
            ]
        }
    ];

    const openLink = (link: string) => {
        window.open(link, "_blank");
    };

    return (
        <section id="projects" className="w-full  flex flex-col items-center justify-center gap-4 p-8 mb-[200px]">
            <span data-aos="fade-up" className="font-outfit text-[40px] font-bold text-center block" >Work I've done</span>
            <div className="flex items-center justify-center gap-[100px] w-full flex-wrap mt-[40px]">
                {
                    projects.map((project, index) => (
                        <div data-aos="zoom-in" key={index} className={`project project-${index} backdrop-blur-sm flex flex-wrap md:flex-nowrap items-center md:w-[80%] justify-center gap-8 w-full border-[1px] border-white/20 p-[30px] rounded-[2px] shadow-2xl bg-white/10`}>
                            <MouseParallaxContainer resetOnLeave containerStyle={{ width: "100%", height: "100%" }}>
                                <MouseParallaxChild
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        transition: "transform 0.1s ease-out",
                                    }}
                                    factorX={0.1}
                                    factorY={0.1}
                                >
                                    <img src={project.image} alt={project.name} className="lg:w-[610px] w-full h-full md:h-[380px] object-cover hover:object-contain" />
                                </MouseParallaxChild>
                            </MouseParallaxContainer>
                            <div className="flex flex-col gap-4 w-full h-full justify-center items-start">
                                <span className="block font-outfit text-[24px] font-semibold">{project.name}</span>
                                <span className="block font-outfit text-[18px] text-slate-300">{project.description}</span>
                                <div className="flex gap-4 mt-4 ">
                                    <span onClick={() => openLink(project.link)} className="text-slate-200 link flex gap-2 cursor-pointer items-center justify-center font-outfit text-[16px] border border-white p-[7px] px-[15px] w-max rounded-[26px] shadow-2xl bg-white/10 h-max">
                                        <ExternalLink size={19} style={{ display: "inline" }} />
                                        visit
                                    </span>
                                    <span onClick={() => openLink(project.github)} className="text-slate-200 link flex gap-2 cursor-pointer items-center justify-center font-outfit text-[16px] border border-white p-[7px] px-[15px] w-max rounded-[26px] shadow-2xl bg-white/10 h-max">
                                        <LucideGithub size={19} style={{ display: "inline" }} />
                                        github
                                    </span>
                                </div>
                                <div>
                                    <span className="block py-3 font-outfit text-[20px] text-slate-100">Tech Stack</span>
                                    <div className="flex gap-4 flex-wrap">
                                        {
                                            project.techStack.map((tech, index) => (
                                                <span className="text-slate-300 border bg-transparent p-[4px] px-[8px] rounded-[3px] font-outfit" key={index}>{tech}</span>
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