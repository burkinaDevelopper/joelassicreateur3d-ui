import { useTheme } from "next-themes";

import { MagicCard } from "@/Components/ui/magic-card";
import React from "react";

interface Chapters{
    title:string;
}
interface Module{
    title:string;
    chapters:Chapters[];
}
interface PropsModule{
    module:Module;
}

const MagicCardDemo:React.FC<PropsModule> = ({module}) => {
    const { theme } = useTheme();
    return (
        <div
      className={
        "flex h-auto w-full md:w-2/3 m-auto flex-col gap-4 lg:h-auto lg:flex-row my-6"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col  whitespace-wrap text-xl shadow-2xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
       <div className="my-10 w-full">
            <h3 className="my-4 font-semibold">{module.title}</h3>
            <ul>
                {module.chapters && module.chapters.map((chapter,index)=>(
                    <li key={index} className="my-2 text-lg ">{chapter.title}</li>
                ))}
            </ul>
       </div>
      </MagicCard>
    </div>
    );
};

export default MagicCardDemo;
