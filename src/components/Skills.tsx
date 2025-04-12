import { useEffect } from "react";
import AOS from "aos";

const Skills = () => {
    const skills = [
        { name: "Next.js", img: "nextjs.svg" },
        { name: "React", img: "react.svg" },
        { name: "Typescript", img: "typescript.svg" },
        { name: "Tailwind CSS", img: "tailwind-css.svg" },
        { name: "Recoil", img: "recoil.svg" },
        { name: "Node.js", img: "node-js.svg" },
        { name: "Express.js", img: "express.svg" },
        { name: "MongoDB", img: "mongodb.svg" },
        { name: "PostgreSQL", img: "postgresql.svg" },
        { name: "Prisma", img: "prisma.svg" },
        { name: "WebSockets", img: "websocket.png" },
        { name: "Docker", img: "docker.svg" },
        { name: "AWS", img: "aws.png" }
    ];

    useEffect(() => {
        AOS.init({ duration: 1400 });
    }, []);

    return (
        <section id="skills" className="w-full md:h-[50vh] flex flex-col items-center mb-[200px] justify-center gap-4 p-8">
            <span className="font-outfit text-[40px] font-bold text-center block" data-aos="fade-up" >Tech I use</span>
            <div className="flex items-center justify-center gap-8 w-full mt-[40px] flex-wrap md:w-[70%]">
                {skills.map((skill, index) => (
                    <div key={index} data-aos="zoom-in" className="backdrop-blur-sm skill flex flex-wrap gap-[10px] items-center border border-white p-[10px] px-[15px] w-max rounded-[26px] shadow-2xl bg-white/10">
                        <img src={`${skill.img}`} alt={skill.name} className="w-[25px] " />
                        <span className="font-outfit text-[14px]">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
