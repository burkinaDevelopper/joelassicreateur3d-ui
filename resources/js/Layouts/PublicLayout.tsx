import TheHeader from '@/Components/TheHeader';
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProvider } from './ThemeProvider';
import Banner from '@/Components/Banner';
import Footer from '@/Components/Footer';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import useBaseUrl from '@/hooks/useBaseUrl';

interface Social {
    youtube: string;
    tiktok: string;
    email: string;
    instagram: string;
    facebook: string;
    number: string;
}
// const socials:Social={
//     youtube:'https://www.youtube.com/c/JoelAssiCréateur3D',
//     tiktok:'https://www.tiktok.com/@joelassicreateur.3d',
//     email:'ericassi159@gmail.com',
//     instagram:'https://www.instagram.com/joel_assi_createur_3d',
//     facebook:'https://web.facebook.com/joelassicreateur3d',
//     number:'+212 609 624765',
// }
interface Pros{
    id:string;
    title:string;
    slug: string;
  }

const PublicLayout = ({ children}: { children: React.ReactNode }) => {
    const [datas, setDatas] = useState<Social>();
    const baseUrl=useBaseUrl();
    
   
    useEffect(()=>{
        axios.get(baseUrl)
        .then(function (response) {
          setDatas(response.data.socials);
        })
        .catch(function (error) {
          console.log(error);
        })
    },[]);
    
    return (
        <div>
            <ThemeProvider
             attribute="class"
             defaultTheme="dark"
             enableSystem
             disableTransitionOnChange
            >   
             {/* <Banner /> */}
             {datas && <TheHeader socials={datas}/>}
                {children}
                <div className='border-t-2 py-5 mt-5'>
                {datas && <Footer socials={datas}/>}
                </div>
            </ThemeProvider>
        </div>
    );
};

export default PublicLayout;