import { ReactElement } from "react";

export default function Hero(): ReactElement {
    var style_hero_main: string = "text-[#49B2FD] text-2xl select-none font-['Regio Mono'] font-[600] hero_text";

    return (
        <div className="w-full h-[100vh] overflow-hidden bg-[#011638] p-0 m-0 flex justify-center items-center" id='hero_main'>
            <div id="hero_text">
                <span className={style_hero_main}>abi.decode(data, (</span>
                <span className={`text-white`} id='hero_pages'>skills</span>
                <span className={style_hero_main}>));</span>
            </div>
        </div>
    )
}