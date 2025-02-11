import { Link } from '@inertiajs/react';
import React from 'react';
interface Items{
    url:string;
    name:string;
}
interface PropsMentor{
    mentor:Items;
}
const Mentor:React.FC<PropsMentor> = ({mentor}) => {
    return (
        <div className='bg-black bg-opacity-15'>
            <div className='text-center pt-12'>
                <h2 className='text-4xl font-black'>V-Ray mentor</h2>
                <p className='text-yellow-600 text-xl font-extrabold'>Reconnu officiellement comme un professionnel certifié de premier plan</p>
                <p className='mb-6'><Link href='/galery-joel' classID='text-xl'>Click pour voir</Link></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full md:max-w-[1200px] m-auto p-2'>
                <div className=''>
                    <img className='w-full' 
                    src={mentor? mentor.url: "/assets/image/2122af7d-147c-4e4f-87ee-3b4f011b021a.jpg"} 
                    alt={mentor? mentor.name :""} />
                </div>
                <div className='ml-3'>
                     <h4 className='font-semibold text-xl'>Joel Assi est un mentor de V-Ray et expert en rendu 3D.</h4>
                     <p className='my-4'>Il s'occupe de rendu depuis 2019. Au fil des années, il a mis à profit sa passion pour la photographie et le rendu pour créer une méthode d'enseignement progressive qui respecte les normes de la production professionnelle de rendu, enrichie par la culture et les techniques classiques de la photographie, avec un accent particulier sur l'éclairage.</p>
                     <p>Il est l'auteur de plusieurs cours "Photography & Rendering with V-Ray" et, plus récemment, " V-Ray", publiés sur ce site, et il a également creer sa page youtube "Joel Assi-Créateur 3D". Joel supervise personnellement la création de leçons sur la plateforme et participe chaque année à sa mise a jours</p>
                </div>
            </div>
        </div>
    );
};

export default Mentor;