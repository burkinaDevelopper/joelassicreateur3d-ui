import HeroHighlightDemo from '@/Components/CourseComponents/HeroHighlightDemo';
import MagicCardDemo  from '@/Components/CourseComponents/MagicCardDemo';
import PublicLayout from '@/Layouts/PublicLayout';
import React from 'react';
import { Head } from '@inertiajs/react'

interface Chapters{
    title:string;
}
interface Module{
    title:string;
    chapters:Chapters[];
}
interface PropsCours{
    title:string;
    modules:Module[];
}
interface PropsType{
    cours:PropsCours;
}
const Show:React.FC<PropsType>  = ({cours}) => {
    return (
        <PublicLayout>
              <Head title="Formation V-ray pour SketchUp : Guide Ultime | Joel Assi">
                      <meta name="description" content="
                      Devenez expert en rendu 3D avec notre formation sur V-ray et SketchUp. Techniques avancées et astuces par Joel Assi, publié le 25/02/2024.
                      " />       
             </Head>
             <main className='mt-0 md:mt-0 '>
                <div className="min-h-screen h-auto w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <div className='pt-12 md:pt-36'>
                        <HeroHighlightDemo />
                    </div>
                    <div className='mt-60 text-center'>
                       <h1 className='font-bold text-4xl underline underline-offset-4'>{cours.title}</h1> 
                       <div>
                         {cours.modules && cours.modules.map((module,index)=>(
                            <MagicCardDemo key={index} module={module}/>
                         ))}
                       </div>
                    </div>
                   

                </div>
             </main>

        </PublicLayout>
    );
};

export default Show;