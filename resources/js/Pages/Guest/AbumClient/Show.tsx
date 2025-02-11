import React from 'react';
import PropsAlbum from '@/types/albumtype';
import 'lazysizes';
import PublicLayout from '@/Layouts/PublicLayout';
import { TextAnimate } from "@/Components/ui/text-animate";
import { cn } from "@/lib/utils";
import { Head } from '@inertiajs/react'


interface PropsAbumType{
    album:PropsAlbum;  
}

const Show:React.FC<PropsAbumType> = ({album}) => {
    return (
        <PublicLayout>
            <Head title="">
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
            </Head>
            <main className='mt-12 md:mt-32'>
                <div className='w-full md:w-2/3 m-auto'>
                    <ul className='border w-44 rounded p-2'>
                        <li><span>Nombre de vue(s)</span>:<span>{album.views.length}</span></li>
                        <li><span>Nombre de like(s)</span>:<span>{album.votes.length}</span></li>
                    </ul>
                    <h1 className='text-center text-2xl font-bold mt-20'>
                        <TextAnimate animation="blurInUp" by="character">
                             {album.title}
                        </TextAnimate>
                    </h1>
                    <p className='leading-8 mt-10'>{album.description}</p>
                     <div>
                        {album.photos && album.photos.map((photo,index)=>(
                            <div key={index} className="w-full  group/card">
                            <div
                              className={cn(
                                " cursor-pointer overflow-hidden relative card h-full rounded-md shadow-xl   mx-auto backgroundImage flex flex-col justify-between p-4 w-full",
                              )}
                            >
                                <div className='w-full'>
                                <img data-src={photo.url} 
                                decoding="async"
                                data-sizes="auto"
                                alt={photo.title} 
                                className="h-full w-full cursor-pointer lazyload" />
                                </div>
                              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                            </div>
                          </div>
                        ))}
                     </div>

                </div>
            </main>
        </PublicLayout>
    );
};

export default Show;