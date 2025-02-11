import { Link, usePage } from '@inertiajs/react';
import { ToggleTheme } from './ToggleTheme';
import { Facebook,Instagram,Youtube,AtSign,MailPlus,AlignJustify,X,ChevronDown } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import Navbar  from './Navbar';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import useBaseUrl from '@/hooks/useBaseUrl';

  
interface PropsSocial{
    number:string,
    youtube:string,
    tiktok:string,
    email:string,
    instagram:string,
    facebook:string
}
interface Cours{
    id:string;
    title:string;
    slug:string;
}
interface PropsSocialType{
    socials:PropsSocial,
}

interface Pros{
    id:string;
    title:string;
    slug: string;
}

const TheHeader:React.FC<PropsSocialType> = ({socials}) => {

    const [isOpen,setIsOpen]=useState<boolean>(false)
   
  const [datas, setDatas] = useState<Pros[] | null>([]);
  
  const baseUrl=useBaseUrl();
 
  useEffect(()=>{
    axios.get(baseUrl)
    .then(function (response) {  
      setDatas(response.data.coures);
    })
    .catch(function (error) {
      console.log(error);
    })
  },[]);
    const {url,props}=usePage<any>();
    
    return (
        <header className='w-full fixed top-0 z-50'>
           
            <div className='w-full  hidden md:block '>
               <div className='w-full flex justify-around items-center py-1 border-b'>
                    <div><Link href='#' className='flex' ><MailPlus /><span >Contact</span></Link> </div>
                    <ul className='flex items-center'>
                        <li className='mx-2 flex'><span><Facebook strokeWidth={0.75}/></span><a className="uppercase" href={socials.facebook}>facebook</a></li>
                        <li className='mx-2 flex'><span><Instagram strokeWidth={0.75}/></span><a className="uppercase" href={socials.instagram}>instagram</a></li>
                        <li className='mx-2 flex'><span><Youtube strokeWidth={0.75}/></span><a className="uppercase" href={socials.youtube}>youtube</a></li>
                        <li className='mx-2 flex'><span><AtSign strokeWidth={0.75}/></span><a className="uppercase" href={`mailto:${socials.email}`}>e-mail</a></li>
                        <li className='mx-2'><span><ToggleTheme /></span></li>
                    </ul>
               </div>
            </div>
            <nav className='hidden md:flex justify-around'>
              <div>
              <img
                src="/assets/logo-joel-black.png"
                alt="Logo Light Mode"
                className="w-25 h-12  dark:hidden"
               />
                <img
                    src="/assets/logo-joel.png"
                    alt="Logo Dark Mode"
                    className="w-25 h-12  hidden dark:block"
                />
              </div>
              <Navbar />
            </nav>
            <div className='flex w-full justify-between dark:bg-white md:hidden bg-gray-900'>
                    <Button onClick={()=>setIsOpen(!isOpen)} className='z-50 cursor-pointer duration-100  '>
                        {isOpen? <X />:<AlignJustify />}
                    </Button>
                    <li><span><ToggleTheme /></span></li>
            </div>
            {isOpen && (
                <div className='md:hidden flex flex-col absolute left-0 top-0 h-screen w-48 pt-24 pr-2 border-r bg-slate-400 dark:bg-slate-900 z-10 text-white delay-100'>
                    <Link href="/" className={url=="/"? 'uppercase ml-3 bg-slate-500 rounded pl-2 py-1 hover:text-yellow-500 duration-150 my-2':'ml-3 hover:text-yellow-500 duration-150 my-2 uppercase'}>Accueil</Link>

                    <Link href="/galery-joel" className={url=="/galery-joel"? 'uppercase ml-3 bg-slate-500 rounded pl-2 py-1 hover:text-yellow-500 duration-150 my-2':'uppercase ml-3 hover:text-yellow-500 duration-150 my-2'}>Galerie Joel</Link>

                    <Link href="/galery-etudiant" className={url=="/galery-etudiant" ? 'uppercase ml-3 bg-slate-500 rounded pl-2 py-1 hover:text-yellow-500 duration-150 my-2':'uppercase ml-3 hover:text-yellow-500 duration-150 my-2'}>Galerie Étudiant</Link>

                    <Link href="/albums" className={url=="/albums" ? 'uppercase ml-3 bg-slate-500 rounded pl-2 py-1 hover:text-yellow-500 duration-150 my-2':'uppercase ml-3 hover:text-yellow-500 duration-150 my-2'}>Projet Client</Link>

                    <Link href="/videos" className={url=="/videos" ? 'uppercase ml-3 bg-slate-500 rounded pl-2 py-1 hover:text-yellow-500 duration-150 my-2':'uppercase ml-3 hover:text-yellow-500 duration-150 my-2'}>Vidéo</Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className='flex justify-start'>
                            <Button variant="ghost" >COURS <ChevronDown /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuRadioGroup value={props?.cours?.slug}>
                                {datas && datas.map((cour,index)=>(
                                    <DropdownMenuRadioItem key={index} value={cour.slug== props?.cours?.slug ?cour.slug:''}>
                                        <Link className='uppercase'  href={`/cours/${cour.slug}`}>{cour.title}</Link>
                                    </DropdownMenuRadioItem>
                                ))}
                                {/* <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem> */}
                                </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href="/contact" className={url=="/contact" ? 'uppercase ml-3 bg-slate-500 rounded pl-2 py-1 hover:text-yellow-500 duration-150 my-2':'uppercase ml-3 hover:text-yellow-500 duration-150 my-2'}>Contact</Link>
                </div>
            )}
        </header>
    );
};

export default TheHeader;