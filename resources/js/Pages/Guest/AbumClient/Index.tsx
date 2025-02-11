import CardDemo  from '@/Components/album/CardDemo';
import PublicLayout from '@/Layouts/PublicLayout';
import PropsAlbum from '@/types/albumtype';
import React from 'react';
import { LineShadowText } from "@/Components/ui/line-shadow-text";
import { useTheme } from "next-themes";
import 'lazysizes';

import { Head } from '@inertiajs/react'

interface PropsAbumType{
    albums:PropsAlbum[];
}

const Index:React.FC<PropsAbumType> = ({albums}) => {
    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
    return (
       <PublicLayout>
         <Head title="Different projet que nous avons realiser en Rendu 3D">
          <meta name="description" content="" />
        </Head>
         <main className='mt-12 md:mt-32'>
            <div className='flex flex-wrap justify-center'>
            {albums && albums.map((album,index)=>(
                <CardDemo key={index} album={album}/>
            ))}
            </div>
            {albums.length==0 &&(
                <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-center">
                Aucun
                <LineShadowText className="italic mx-2" shadowColor={shadowColor}>
                    Images
                </LineShadowText>
                </h1>
            )}
         </main>
       </PublicLayout>
    );
};

export default Index;