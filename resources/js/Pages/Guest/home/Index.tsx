
import AccordionExample from '@/Components/homeComponents/AccordionExample';
import { GridPatternDemo } from '@/Components/homeComponents/GridPatternDemo';
import { MarqueeDemo } from '@/Components/homeComponents/MarqueeDemo';
import { TextRevealDemo } from '@/Components/homeComponents/TextRevealDemo';
import PublicLayout from '@/Layouts/PublicLayout';
import React from 'react';
import { Head } from '@inertiajs/react'
import Header from '@/Components/homeComponents/Header';
import Banner from '@/Components/homeComponents/Banner';
import Learn from '@/Components/homeComponents/Learn';
import Mentor from '@/Components/homeComponents/Mentor';
import DemonLesson from '@/Components/homeComponents/DemonLesson';
import Certification from '@/Components/homeComponents/Certification';
import StudentGalery from '@/Components/homeComponents/StudentGalery';
import AboutCourse from '@/Components/homeComponents/AboutCourse';
import PricingPage from '@/Components/homeComponents/PricingPage';

 
interface Items{
  url:string;
  name:string
}

interface PropsDatas{
    bg:Items;
    video:Items;
    mentor:Items;
    demoLesson:Items[];
    certification:Items;
    studentImg:Items[];
}

const Index:React.FC<PropsDatas> = ({bg,video,mentor,demoLesson,certification,studentImg}) => {
  
  
    return (
        <PublicLayout>
          <Head title="Maîtrisez le Rendu 3D avec V-ray, Lumion &amp; Enscape sur SketchUp | Joel Assi">
                  <meta name="description" content="Découvrez des formations avancées en rendu 3D avec Joel Assi. Maîtrisez V-ray, Lumion, et Enscape sur SketchUp pour donner vie à vos projets en 2025." />
                  <meta name="keywords" content="rendu 3D, formation SketchUp, V-ray, Lumion, Enscape, Joel Assi, cours 3D, SketchUp avancé" />
          </Head>
           <main className=''>
              <div className='flex justify-center'>
                <Header bg={bg} video={video} />
              </div>
              <div className='w-full  m-auto'>
                <Banner />
              </div>
              <div className='py-2 w-full m-auto'>
                <Learn />
              </div>
              <div className='py-2 w-full m-auto'>
                <Mentor mentor={mentor} />
              </div>
              <div className='py-2 w-full  m-auto'>
                <DemonLesson demoLesson={demoLesson} />
              </div>
              <div className='py-2 w-full  m-auto'>
                <Certification certification={certification} />
              </div>
              <div className='py-2 w-full  m-auto'>
                <StudentGalery studentImg={studentImg} />
              </div>
              <div className='py-2 w-full  m-auto'>
                <AboutCourse />
              </div>
              {/* <div className='py-2 w-full  m-auto'>
                <PricingPage />
              </div> */}
           </main>
        </PublicLayout>
    );
};

export default Index;