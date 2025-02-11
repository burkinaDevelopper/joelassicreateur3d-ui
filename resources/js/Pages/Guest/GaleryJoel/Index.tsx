import PublicLayout from '@/Layouts/PublicLayout';
import ProposImage from '@/types/imagetype';
import React from 'react';
import BlurFade from "@/Components/ui/blur-fade";
import { LineShadowText } from "@/Components/ui/line-shadow-text";
import { useTheme } from "next-themes";
import 'lazysizes';
import { Head } from '@inertiajs/react'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lazysizes';


interface PropsImageType{
  images:ProposImage[];
}

const Index:React.FC<PropsImageType> = ({images}) => {
    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

    const imagees = Array.from({ length: 9 }, (_, i) => {
        const isLandscape = i % 2 === 0;
        const width = isLandscape ? 800 : 600;
        const height = isLandscape ? 600 : 800;
        return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
      }); 
       
    return (
        <PublicLayout>
            <Head title="Galerie Joel : Chefs-d'Œuvre de Rendu 3D avec SketchUp | Joel Assi">
                    <meta name="description" content="Plongez dans la Galerie Joel pour explorer des créations époustouflantes en rendu 3D. V-ray, Lumion ; Enscape avec SketchUp par Joel Assi, publié en 2025" />
                    <meta name="keywords" content="galerie rendu 3D, Joel Assi, SketchUp, V-ray formation, Lumion projets, Enscape visualisation, portfolio 3D" />
            </Head>
            <main className='mt-12 md:mt-32'>
            <section id="photos">
                <div className="flex justify-center">
                <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                 elementClassNames="custom-wrapper-class flex flex-wrap flex-row justify-center"
               >
               {images && images.map((image,index)=>(
                   <a key={index} href={image.url} className='relative group m-1'>
                       <span className='w-full'> 
                        <img
                         src={image.thumbnail_url}
                         alt=""
                         style={{ width: `${image.width}px`, height: `${image.height}px` }}
                        className='size-full' /></span>
                    </a>
               ))}
                
            </LightGallery>
               </div>
             </section>
           
                {images.length==0 &&(
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