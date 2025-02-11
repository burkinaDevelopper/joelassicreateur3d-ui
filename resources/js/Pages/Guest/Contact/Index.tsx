import { CardWithForm } from '@/Components/Contact/CardWithForm';
import HeroHighlightDemoContact from '@/Components/Contact/HeroHighlightDemoContact';
import PublicLayout from '@/Layouts/PublicLayout';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Facebook,Instagram,Youtube,AtSign,MailPlus,AlignJustify,X,ChevronDown,Phone } from 'lucide-react';
import { Head } from '@inertiajs/react'

interface PropsSocial{
    number:string,
    youtube:string,
    tiktok:string,
    email:string,
    instagram:string,
    facebook:string
  }
  interface PropsSocialType{
    socials:PropsSocial,
  }
const Index = () => {
    const [socials, setSocials] = useState<PropsSocial | undefined>();
  const baseUrl='http://127.0.0.1:8000/api/global-data';
 
  useEffect(()=>{
    axios.get(baseUrl)
    .then(function (response) {
        setSocials(response.data.socials);
    })
    .catch(function (error) {
      console.log(error);
    })
  },[]);
    return (
        <PublicLayout>
            <Head title="Contactez-nous pour vos formations en Rendu 3D | Joel Assi">
                    <meta name="description" content="Besoin d'aide ou de renseignements sur nos formations en rendu 3D avec Enscape, V-ray ou Lumion sur SketchUp ? Contactez Joel Assi, expert en 3D. Publié le 20/01/2025." />
            </Head>
            <main className='mt-12 md:mt-32'>
                <div className='text-center py-10'>
                 <HeroHighlightDemoContact />
                </div> 
                 <p className='text-center my-7 text-xl'>Nous sommes toujours là pour vous écoutez pour vous accompagner et répondre à tous vos besoins.</p>
                 <div className='flex md:flex-row flex-col justify-center'>
                    <div><CardWithForm /></div>
                    <div className='ml-2'>
                        <div>
                             <div className='mb-2'>
                                <h3 className='font-semibold mx-2 mb-3'>SOCIALS</h3>
                                <ul className='flex md:flex-row'>
                                    <li className='mx-0 flex '><a href={socials?.facebook}><Facebook /></a></li>
                                    <li className='mx-2 flex'><a href={socials?.instagram}><Instagram /></a></li>
                                    <li className='mx-2 flex'><a href={socials?.youtube}><Youtube /></a></li>
                                    <li className='mx-2 flex'><a  href={`mailto:${socials?.email}`}><AtSign /></a></li>
                                        <li className='mx-2 flex'><a  href={socials?.tiktok}><i className="fa-brands fa-tiktok text-xl"></i></a></li>
                                    </ul>
                             </div>
                             <hr />
                             <div className='mb-2'>
                                <h3 className='font-semibold mx-2 my-3'>PHONE</h3>
                                <p className='flex'><span><Phone /></span> <span className='mx-1'>{socials?.number}</span></p>
                             </div>
                             <hr />
                             <div className='mb-2'>
                                <h3 className='font-semibold mx-2 my-3'>E-mail</h3>
                                <p className='flex'><span><AtSign /></span> <span className='mx-1'>{socials?.number}</span></p>
                             </div>
                             
                        </div>
                    </div>
                 </div>
            </main>
        </PublicLayout>
    );
};

export default Index;