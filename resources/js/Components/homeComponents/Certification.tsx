import React from 'react';

interface Items{
    url:string;
    name:string
  }
  
interface PropsDatas{
    certification:Items;
}
const Certification:React.FC<PropsDatas> = ({certification}) => {
    return (
        <div className='bg-slate-100'>
           <div className='w-full md:max-w-4xl m-auto grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-around py-16'>
             <div className=' '>
                <img src={certification? certification.url : "/assets/image/certification.jpg"} 
                alt={certification? certification.name :""} />
             </div>
             <div className='dark:text-black'>
                 <h2 className='font-black text-2xl text-center mt-2 md:mt-0'>CERTIFICATIONS</h2>
                 <div className='flex my-4'>
                    <img src="/assets/wp/icocert.jpg" alt="" />
                    <p>GRÂCE AUX CERTIFICATIONS DELIVRER AUX APPRENANT, VOUS POUVEZ ENRICHIR VOTRE CV AVEC DES DOCUMENTS RECONNUS AU NIVEAU INTERNATIONAL</p>
                 </div>
                 <p className='my-5'>Tout les cours comprend les certifications, Obtenez-les à la fin de chaque formations.</p>
                 <p>Certification | Verification : Elle s'obtient en faisant une formation théorique et pratique , vérifiable sur ce site </p>
             </div>
           </div>
        </div>
    );
};

export default Certification;