
const Skills = () => {
    const skills = [
        { name: "React", img: "react.svg" },
        { name: "Typescript", img: "typescript.svg" },
        { name: "Tailwind CSS", img: "tailwind-css.svg" },
        { name: "Redux", img: "redux.svg" },
        { name: "Node.js", img: "node-js.svg" },
        { name: "Express.js", img: "express.svg" },
        { name: "WebSockets", img: "websocket.png" },
        { name: "MongoDB", img: "mongodb.svg" },
        { name: "PostgreSQL", img: "postgresql.svg" },
        { name: "AWS", img: "aws.png" }
    ];

    return (
        <section id="skills" className="w-full flex flex-col items-center justify-center gap-4 p-8">
            <span className="font-outfit text-[40px] font-bold text-center block">Tech I use</span>
            <div className="flex items-center justify-center gap-8 w-[80%] mt-[40px] flex-wrap">
                {skills.map((skill, index) => (
                    <div key={index} className="skill flex flex-wrap gap-[10px] items-center border border-white p-[10px] px-[15px] w-max rounded-[26px] shadow-2xl bg-white/10">
                        <img src={`${skill.img}`} alt={skill.name} className="w-[25px]" />
                        <span className="font-outfit text-[14px]">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
