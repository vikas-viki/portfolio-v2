import { ReactElement } from "react";
import Select from "../components/Select";
import "../styles/hero.css";

export default function Hero(): ReactElement {
    var style_hero_main: string = "text-[#49B2FD] text-[32px] select-none font-['Regio Mono'] font-[600] hero_text";

    const flags: string[] = [
        "me",
        "skills",
        "projects",
        "education",
        "experience",
    ];

    return (
        <div className="w-full h-[100vh] overflow-hidden bg-[#011638] p-0 m-0 flex justify-center items-center" id='hero_main'>
            <div id="hero_text">
                <span className={style_hero_main}>abi.decode(data, (</span>
                <Select id='hero_pages' options={flags} />
                <span className={style_hero_main}>));</span>
            </div>
        </div>
    )
}