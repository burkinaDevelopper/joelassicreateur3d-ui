import TheHeader from '@/Components/TheHeader';

import { ThemeProvider } from './ThemeProvider';
import Banner from '@/Components/Banner';
import Footer from '@/Components/Footer';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from "react";


interface Social {
    youtube: string;
    tiktok: string;
    email: string;
    instagram: string;
    facebook: string;
    number: string;
}
const socials:Social={
  youtube: import.meta.env.VITE_SOCIAL_YOUTUBE,
  tiktok: import.meta.env.VITE_SOCIAL_TIKTOK,
  email: import.meta.env.VITE_SOCIAL_EMAIL,
  instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM,
  facebook: import.meta.env.VITE_SOCIAL_FACEBOOK,
  number: import.meta.env.VITE_SOCIAL_NUMBER,
}
interface Cours{
  id:string;
  title:string;
  slug:string;
}

const PublicLayout = ({ children}: { children: React.ReactNode }) => {
  const [data, setData] = useState<Cours[]>([]);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = import.meta.env.VITE_API_URL; 

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get(`${baseUrl}/api/global-data`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          });
          console.log('Fetching from:', response.data.coures); // Debug log
            if (response.data.coures) {
                setData(response.data.coures);
            } else {
                console.error('Invalid response format:', response.data);
            }
        } catch (err) {
            console.error('Fetch error:', err);
            setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        }
    };

    fetchData();
}, [baseUrl]);
const memoizedCourse = useMemo(() => data, [data]);
    
    return (
        <div>
            <ThemeProvider
             attribute="class"
             defaultTheme="dark"
             enableSystem
             disableTransitionOnChange
            >   
              { socials && <TheHeader memoizedCourse={memoizedCourse} socials={socials}/>}
                {children}
              <div className='border-t-2 py-5 mt-5'>
                <Footer socials={socials}/>
              </div>
            </ThemeProvider>
        </div>
    );
};

export default PublicLayout;

