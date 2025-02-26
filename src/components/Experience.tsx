import { motion, useTransform, useScroll } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
// import {  } from 'lucide-react';
import { useRef } from 'react';
import { useMediaQuery } from "react-responsive";

const Experience = () => {
    const contentEle = useRef<HTMLDivElement>(null);

    const isMobile = useMediaQuery({ maxWidth: 768 }); // Disable effect on mobile

    const { scrollYProgress } = useScroll({
        target: contentEle,
    });

    const x = isMobile ? "0%" : useTransform(scrollYProgress, [0.1, 1], ["1%", "-70%"]);

    interface ExperienceCard {
        title: string;
        company: string;
        period: string;
        description: string;
        twitter: string;
        icon: string,
        color: string;
        techStack: Tech[];
    }

    interface Tech {
        name: string;
        logoColor: string;
    };

    const techs: { [key: string]: Tech } = {
        react: {
            name: "react",
            logoColor: "blue"
        },
        typescript: {
            name: "typescript",
            logoColor: "blue"
        },
        unity: {
            name: "unity",
            logoColor: "grey"
        },
        thirdweb: {
            name: "thirdweb",
            logoColor: "pink"
        },
        ethers: {
            name: "ethers",
            logoColor: "blue"
        },
        tailwindcss: {
            name: "tailwindcss",
            logoColor: "skyblue"
        },
        nodedotjs: {
            name: "nodedotjs",
            logoColor: "green"
        },
        express: {
            name: "express",
            logoColor: "white"
        },
        socketdotio: {
            name: "socketdotio",
            logoColor: "white"
        },
        mongodb: {
            name: "mongodb",
            logoColor: "white"
        },
        postgresql: {
            name: "postgresql",
            logoColor: "white"
        },
        amazonrds: {
            name: "amazonrds",
            logoColor: "white"
        },
        solidity: {
            name: "solidity",
            logoColor: "white"
        },
        graphql: {
            name: "graphql",
            logoColor: "pink"
        },
        svelte: {
            name: "svelte",
            logoColor: "orange"
        }
    }

    const experiences: ExperienceCard[] = [
        {
            title: "Full Stack Blockchain Developer",
            company: "Zeru",
            period: "Dec 23 - Oct 24",
            description: "Led the integration of major DeFi platforms like Uniswap, 1inch and Paraswap while migrating a Hardhat project to Foundry for improved performance. Developed an npm SDK to enhance protocol accessibility and built Node.js bots to automate key operations. Additionally, designed and executed comprehensive tests in Hardhat to ensure system reliability and efficiency.",
            icon: "zeru.png",
            color: "bg-blue-50 border-blue-200",
            twitter: "https://x.com/zerufinance",
            techStack: [
                techs.typescript,
                techs.nodedotjs,
                techs.express,
                techs.graphql,
                techs.solidity,
                techs.ethers
            ]
        },
        {
            title: "Game Developer",
            company: "BakeLand",
            period: "Jun 23 - Feb 24",
            description: "I developed a complete proof of concept (POC) for a live crosschain farming game that supports multiple blockchains, implementing the solution in Unity and leveraging Thirdweb's SDK for seamless contract interactions and account abstraction.",
            icon: "bakeland.png",
            twitter: "https://x.com/bakelandxyz",
            color: "bg-purple-50 border-purple-200",
            techStack: [
                techs.unity,
                techs.ethers,
                techs.thirdweb
            ]
        },
        {
            title: "Backend Developer",
            company: "Timechain Labs",
            period: "May 23 - Jul 23",
            twitter: "https://x.com/timechainlabs",
            description: "At Timechain Labs, I built and tested Bitcoin wallet APIs to ensure secure and efficient blockchain transactions. I also implemented backend solutions following best practices in API development, debugging and performance optimization while working in a remote environment.",
            icon: "timechainlabs.png",
            color: "bg-green-50 border-green-200",
            techStack: [
                techs.svelte,
                techs.nodedotjs,
                techs.express,
            ]
        }
    ];

    return (
        <section ref={contentEle} id="experience" className={`w-full ${isMobile ? "h-max" : "h-[300vh]"} flex flex-col items-start justify-start gap-4 p-8 mb-[100px]`}>
            <span data-aos="fade-up" className={`font-outfit text-[40px] self-center font-bold text-center block ${isMobile && "mb-[80px]"}`}>Where I've worked</span>
            <div className={` items-center gap-[40px] experience ${!isMobile && "sticky top-0 h-screen overflow-x-scroll"} `}>
                <motion.div
                    style={{ x }}
                    className={`flex  gap-[100px] h-full ${isMobile && "flex-col"}`}
                >
                    {
                        experiences.map((exp, index) => (
                            <div data-aos={`${isMobile ? "zoom-in" : "fade-up"}`} className='flex items-center justify-center font-outfit' key={index}>
                                <div className="w-[90vw] xl:h-[500px] h-max backdrop-blur-sm flex p-[40px] items-center justify-center gap-[10px] border border-white/40 rounded-[70px] shadow-2xl bg-white/10">
                                    <div className="flex items-start justify-center space-x-4 w-full h-full flex-wrap gap-[25px]">
                                        <div className={`rounded-[70px] w-full md:max-w-[419px] overflow-hidden border border-white/30`}>
                                            <img src={exp.icon} alt={exp.title} className="object-cover scale-[1.05] w-full h-full rounded-[70px] " />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[28px] font-outfit my-4 font-semibold text-white-900">
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center mb-3 text-[22px] ">
                                                <span className="font-medium flex justify-center items-center gap-[5px] text-slate-100"><a href={exp.twitter} target='blank' >{exp.company} </a><ExternalLink size={15}/></span>
                                                <span className="mx-2">•</span>
                                                <span className="text-[18px]">{exp.period}</span>
                                            </div>
                                            <p className="text-slate-300 leading-relaxed text-[18px]">
                                                {exp.description}
                                            </p>
                                            <div className="flex items-start gap-3 flex-col  my-4 ">
                                                <span className="font-[400] text-[20px] block text-slate-100">Tech Stack</span>
                                                <div className='flex gap-4 flex-wrap'>
                                                    {
                                                        exp.techStack.map((tech, index) => (
                                                            <img src={`https://img.shields.io/badge/${tech.name}-%23000000.svg?style=for-the-badge&logo=${tech.name}&logoColor=${tech.logoColor}`} key={index} />
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    );
}

export default Experience;
