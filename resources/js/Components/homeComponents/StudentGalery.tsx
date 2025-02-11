import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lazysizes';


interface Items{
    url:string;
    name:string;
    thumbnail_url?:string
}
  
interface PropsDatas{
    studentImg:Items[];
}
const StudentGalery:React.FC<PropsDatas> = ({studentImg}) => {
    
    return (
        <div>
           <div className='text-center my-10'>
                <h2 className='font-black text-3xl'>GALERIE DES ÉTUDIANTS</h2>
                <p className='text-yellow-600 text-xl'>Une sélection des meilleurs travaux réalisés avec V-Ray</p>
                <p>en suivant la méthode photographiqueavec 3ds Max, SketchUp </p>
           </div>
          
            <section>
                <div className="flex justify-center ">
                <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="custom-wrapper-class flex flex-wrap flex-row justify-center"
                >
                    {studentImg && studentImg.length==8? (
                        studentImg.map((img,index)=>(
                            <a key={index} href={img.url} >
                               <span className='w-full'> 
                                <img   
                                src={img.thumbnail_url}
                                alt=""
                                style={{ width: `${326}px`, height: `${324}px` }}
                                className='size-full' /></span>
                            </a> 
                        ))
                    ): (
                        <>
                        <a href="/assets/image/student.png" >
                            <span className='w-full'> 
                                <img   
                                data-src={"/assets/image/studentmin.png"}
                                alt={""}
                                style={{ width: `${326}px`, height: `${324}px` }}
                                className='lazyload size-full ' /></span>
                            </a>
                        <a href="/assets/image/student.png" >
                            <span className='w-full'> 
                                <img   
                                data-src={"/assets/image/studentmin.png"}
                                alt={""}
                                style={{ width: `${326}px`, height: `${324}px` }}
                                className='lazyload size-full ' /></span>
                            </a>
                        <a href="/assets/image/student.png" >
                            <span className='w-full'> 
                                <img   
                                data-src={"/assets/image/studentmin.png"}
                                alt={""}
                                style={{ width: `${326}px`, height: `${324}px` }}
                                className='lazyload size-full ' /></span>
                            </a>
                        <a href="/assets/image/student.png" >
                            <span className='w-full'> 
                                <img   
                                data-src={"/assets/image/studentmin.png"}
                                alt={""}
                                style={{ width: `${326}px`, height: `${324}px` }}
                                className='lazyload size-full ' /></span>
                            </a>
                        <a href="/assets/image/student.png" >
                            <span className='w-full'> 
                                <img   
                                data-src={"/assets/image/studentmin.png"}
                                alt={""}
                                style={{ width: `${326}px`, height: `${324}px` }}
                                className='lazyload size-full ' /></span>
                            </a>
                        <a href="/assets/image/student.png" >
                            <span className='w-full'> 
                                <img   
                                data-src={"/assets/image/studentmin.png"}
                                alt={""}
                                style={{ width: `${326}px`, height: `${324}px` }}
                                className='lazyload size-full ' /></span>
                            </a>
                        <a href="/assets/image/student.png" >
                            <span className='w-full'> 
                                <img   
                                data-src={"/assets/image/studentmin.png"}
                                alt={""}
                                style={{ width: `${326}px`, height: `${324}px` }}
                                className='lazyload size-full ' /></span>
                            </a>
                        <a href="/assets/image/student.png" >
                            <span className='w-full'> 
                                <img   
                                data-src={"/assets/image/studentmin.png"}
                                alt={""}
                                style={{ width: `${326}px`, height: `${324}px` }}
                                className='lazyload size-full ' /></span>
                        </a>
                        </>
                    )}
                   
                </LightGallery>
               </div>
             </section>
        </div>
    );
};

export default StudentGalery;