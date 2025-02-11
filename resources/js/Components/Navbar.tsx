import {
    Menubar,
    MenubarContent,
   
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,

    MenubarTrigger,
  } from "@/Components/ui/menubar"
  import {ChevronDown } from 'lucide-react';
import { Link, usePage } from "@inertiajs/react"
import React, { useEffect, useState } from "react";
import axios from 'axios';
import useBaseUrl from "@/hooks/useBaseUrl";

interface Pros{
  id:string;
  title:string;
  slug: string;
}
interface Cours{
  cours:Pros[];
}
  
const Navbar = () => {

  const [datas, setDatas] = useState<Pros[] | null>([]);
  const baseUrl=useBaseUrl();
 
  useEffect(()=>{
    axios.get(baseUrl)
    .then(function (response) {
      // handle success
      setDatas(response.data.coures);
    })
    .catch(function (error) {
      console.log(error);
    })
  },[]);
    const {url,props}=usePage<any>();
    
    return (
      <Menubar>
        <MenubarMenu >
          <MenubarTrigger className={url=='/'? 'bg-slate-400':''}><Link className=" uppercase" href="/">Accueil</Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className={url=='/galery-joel'? 'bg-slate-400':''}><Link className=" uppercase" href="/galery-joel">Galerie Joel</Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className={url=='/galery-etudiant'? 'bg-slate-400':''}><Link className=" uppercase" href="/galery-etudiant">Galerie Étudiant</Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className={url=='/albums'? 'bg-slate-400':''}><Link className=" uppercase" href="/albums">Projet Client</Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className={url=='/videos'? 'bg-slate-400':''}><Link className=" uppercase" href="/videos">Vidéo</Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>COURS <ChevronDown /></MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={props?.cours?.slug}>
              {datas && datas.map((cour,index)=>(
              <MenubarRadioItem key={index} value={cour.slug== props?.cours?.slug ?cour.slug:''}>
                <Link className=" uppercase" href={`/cours/${cour.slug}`}>{cour.title}</Link>
              </MenubarRadioItem>
              ))}
              {/* <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem> */}
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className={url=='/contact'? 'bg-slate-400':''}><Link className="uppercase" href="/contact">Contact</Link></MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    );
  };
  
  export default Navbar;
  