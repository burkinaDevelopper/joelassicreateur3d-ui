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

       
    return (
        <PublicLayout>
            <Head title="Galerie Étudiant : Talents en Rendu 3D avec SketchUp | Joel Assi">
                    <meta name="description" content="Découvrez les talents émergents en rendu 3D dans la Galerie Étudiant de Joel Assi. Projets exceptionnels avec V-ray, Lumion, et Enscape sur SketchUp." />
            </Head>
            <main className='mt-12 md:mt-32'>
            <section id="photos">
                <div className="flex justify-center ">
                <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                 elementClassNames="custom-wrapper-class flex flex-wrap flex-row justify-center"
               >
               {images && images.map((image,index)=>(
                   <a key={index} href={image.url} className='relative group m-1'>
                        <img
                         src={image.thumbnail_url}
                         alt=""
                         style={{ width: `${image.width}px`, height: `${image.height}px` }}
                          className='size-full ' />
                           <span className='absolute z-50  py-7 bg-black text-white w-full rounded text-center hidden group-hover:block transition-all duration-300 ease-in-out bottom-[-25px] group-hover:bottom-0 '>{image.student}</span>
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