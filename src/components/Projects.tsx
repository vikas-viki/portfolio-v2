import { ExternalLink, LucideGithub } from "lucide-react";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

const Projects = () => {

    const projects = [
        {
            name: "CreatorSync",
            description: "A trustless collaboration platform for creators and editors. Enables editors to upload final edits without direct YouTube Studio access, eliminating repeated uploads/downloads and access-sharing risks. Simplifies the editing workflow while keeping creators in full control.",
            image: "creatorsync.png",
            link: "",
            github: "https://github.com/vikas-viki/creatorsync-server",
            techStack: [
                "React.js",
                "Nest.js",
                "AWS(EC2, ECR, S3)",
                "PostgreSQL",
                "Prisma",
                "Docker",
                "Youtube Data API"
            ]
        },
        {
            name: "EdgeNest",
            description: "A Vercel-like static web-hosting platform on AWS, enabling instant deployment from GitHub repos with support for custom subdomains & real-time build logs. Fully serverless and scalable by design.",
            image: "edgenest.png",
            link: "https://edgenest.0xbuilder.in",
            github: "https://github.com/vikas-viki/edgenest",
            techStack: [
                "Next.js",
                "Node.js",
                "AWS(EC2, ECS, ECR, S3, CloudFront & Lambda)",
                "Kafka",
                "Websockets",
                "ClickHouse",
                "PostgreSQL",
                "Prisma",
                "Docker",
            ]
        },
        {
            name: "Giftingji",
            description: "A print-on-demand platform built for a brand with ~$100K in annual offline sales. Featuring custom design editor, online payments, CRM sync and cloud-native deployment.",
            image: "giftingji.png",
            link: "https://giftingji.com",
            github: "https://github.com/vikas-viki",
            techStack: [
                "Next.js",
                "Node.js",
                "TypeScript",
                "PostgreSQL",
                "Prisma",
                "Razorpay",
                "Shiprocket",
                "Cloudinary",
                "Zoho CRM",
                "Docker",
                "DigitalOcean"
            ]
        },
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
        // {
        //     name: "ThinkNote",
        //     description: "Built a simple note making app.",
        //     image: "thinknote.png",
        //     link: "thinknote.0xbuilder.in",
        //     github: "https://github.com/vikas-viki/thinknote",
        //     techStack: [
        //         "React",
        //         "Typescript",
        //         "Nestjs",
        //         "Axios"
        //     ]
        // },
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
        },
        {
            name: "TheOneOFF clone",
            description: "Cloned theOneOff.com to showcase advanced styling and animation capabilities. Focused on replicating layout precision, smooth transitions, and responsive design using Tailwind CSS and Framer Motion. Built as a frontend-only project to demonstrate visual polish and attention to detail.",
            image: "theoneoff.png",
            link: "https://theoneof.vercel.app/",
            github: "https://github.com/vikas-viki/theoneof",
            techStack: [
                "Next.js",
                "Tailwind CSS",
                "Framer Motion"
            ]
        },
    ];

    const openLink = (link: string) => {
        window.open(link, "_blank");
    };

    return (
        <section id="projects" className="w-full  flex flex-col items-center justify-center gap-4 p-8 mb-[200px]">
            <span data-aos="fade-up" className="font-outfit text-[24px] sm:text-[25px] md:text-[35px] lg:text-[40px] font-bold text-center block" >Work I've done</span>
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
                                <span className="block font-outfit text-[22px] sm:text-[24px] font-semibold">{project.name}</span>
                                <span className="block font-outfit text-[16px] sm:text-[18px] text-slate-300">{project.description}</span>
                                <div className="flex gap-4 mt-4 ">
                                    <span onClick={() => openLink(project.link)} className="text-slate-200 link flex gap-2 cursor-pointer items-center justify-center font-outfit text-[14px] sm:text-[16px] border border-white p-[7px] px-[15px] w-max rounded-[26px] shadow-2xl bg-white/10 h-max">
                                        {project.link.length > 0 && <ExternalLink size={19} style={{ display: "inline" }} />}
                                        {project.link.length == 0 ? "Under Developement" : "visit"}
                                    </span>
                                    <span onClick={() => openLink(project.github)} className="text-slate-200 link flex gap-2 cursor-pointer items-center justify-center font-outfit text-[14px] sm:text-[16px] border border-white p-[7px] px-[15px] w-max rounded-[26px] shadow-2xl bg-white/10 h-max">
                                        <LucideGithub size={19} style={{ display: "inline" }} />
                                        github
                                    </span>
                                </div>
                                <div>
                                    <span className="block py-3 font-outfit text-[18px] sm:text-[20px] text-slate-100">Tech Stack</span>
                                    <div className="flex gap-4 flex-wrap">
                                        {
                                            project.techStack.map((tech, index) => (
                                                <span className="text-slate-300 border bg-transparent p-[4px] px-[8px] text-[14px] sm:text-[16px] rounded-[3px] font-outfit" key={index}>{tech}</span>
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