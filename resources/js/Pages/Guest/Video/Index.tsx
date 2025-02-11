import HeroVideoDialogDemo  from '@/Components/videoComponents/HeroVideoDialogDemo';
import PublicLayout from '@/Layouts/PublicLayout';
import ProposVideo from '@/types/videotype';
import React from 'react';
import { LineShadowText } from "@/Components/ui/line-shadow-text";
import { useTheme } from "next-themes";
import { Head } from '@inertiajs/react'


interface PropsVideoType{
    videos:ProposVideo[];
}


const Index:React.FC<PropsVideoType> = ({videos}) => {
     const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
    return (
        <PublicLayout>
            <Head title="Maîtrisez le Rendu 3D : Cours Vidéo avec SketchUp | Joel Assi">
                    <meta name="description" content="Découvrez nos cours vidéo pour exceller en rendu 3D avec V-ray, Lumion, et Enscape sur SketchUp. Formations guidées par Joel Assi, expert en 3D." />     
            </Head>
            <main className='mt-12 md:mt-32'>
                <h1 className='text-center font-bold text-2xl my-10'>Vidéo de travaux pratiques</h1>
                <div className='w-full md:w-2/3 m-auto'
                >
                    {videos && videos.map((video,index)=>(
                        <HeroVideoDialogDemo key={index} video={video}/>
                    ))}
                </div>
                {videos.length==0 &&(
                    <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-center">
                    Aucun
                    <LineShadowText className="italic mx-2" shadowColor={shadowColor}>
                        Video
                    </LineShadowText>
                    </h1>
                )}
            </main>
        </PublicLayout>
    );
};

export default Index;