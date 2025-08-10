import { Link } from '@inertiajs/react';
import React from 'react';

interface Items{
    url:string;
}
interface PropsBanner{
   banner:Items
}

const Banner:React.FC<PropsBanner> = ({banner}) => {
    const backgroundUrl = `url(${banner? banner.url: "/assets/wp/bg-wood-2.jpg"})`;
    const myStyle = {
        backgroundImage: backgroundUrl,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "260px",
        width:"100%",
        //filter: "contrast(45%)",
        // backgroundColor: "rgba(15, 15, 15, 0.98)" ,
      };
    return (
        <div style={myStyle}>
              <div className='text-center py-4'>
                   <h4 className='text-lg md:text-xl mt-4 md:mt-10'>Obtenez un paquet de</h4>
                   <h1 className='text-2xl md:text-3xl font-extrabold dark:text-black text-white uppercase'>50 TEXTURES réaliste POUR VOS DESIGNS</h1>
                   <h2 className='text-2xl md:text-3xl font-extrabold'>SI VOUS VOUS INSCRIVEZ CE MOIS-CI !</h2>
                   <p className='mt-6 md:mt-10'><Link className='underline underline-offset-1' href='contact'>Vérifier l'offre</Link></p>
              </div>
        </div>
    );
};

export default Banner;