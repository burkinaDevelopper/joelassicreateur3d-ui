import React from 'react';
import { Button } from '../ui/button';
import { Link } from '@inertiajs/react';

interface Items{
    url:string;
}
interface PropsBg{
   bg:Items;
   video:Items
}
const Header:React.FC<PropsBg> = ({bg,video}) => {
   
    const backgroundUrl = `url(${bg?.url? bg.url: "/assets/image/banner.png"})`;
    const myStyle = {
        backgroundImage: backgroundUrl,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        width:"100%",
        //filter: "contrast(45%)",
        // backgroundColor: "rgba(15, 15, 15, 0.98)" ,
      };
    return (
        <div style={myStyle}>
            <div className='mt-12 md:mt-32 max-w-[1220px] mx-auto flex flex-col md:flex-row md:justify-around h-[550px]'>
                 <div className='text-center'>
                    <strong className='font-black text-6xl md:text-8xl font-inter'>LE V-RAY</strong> <br />
                    <strong className='font-black text-6xl md:text-8xl font-inter'>CERTIFIÉ </strong>
                    <h1 className='text-yellow-600 font-black text-7xl md:text-9xl font-inter'>COURS</h1>
                    <p className='w-full md:w-[510px] m-auto font-bold text-lg md:text-xl'>Commencez à créer des rendus étonnants
                    avec l'approche photographique</p>
                    <Button className='uppercase my-2 bg-yellow-600'>obtenir des informations</Button> <br />
                    <Link className='underline underline-offset-1 mb-4'  href='/contact'>Contact</Link> 
                 </div>   
                 <div className=''>
                    <video
                     className="rounded-lg w-96 h-56  md:w-[610px]  md:h-[550px] object-cover m-auto" 
                     src={video? video.url :"/assets/video/La_philosophie_Luffy.mp4"}
                      autoPlay  muted controls ></video>
                 </div>   
            </div>
        </div>
    );
};

export default Header;