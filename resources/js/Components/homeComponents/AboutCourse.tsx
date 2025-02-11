import React from 'react';
import { Card, CardContent } from "@/Components/ui/card"

import AvatarLogo from '../AvatarLogo';
 

const AboutCourse = () => {
    return (
        <div className='w-full bg-slate-400 bg-opacity-25'>
            <div className='w-full md:max-w-7xl m-auto  py-16 '>
                <div className='text-center'>
                    <h2 className='text-3xl font-black'>QU'EN EST-IL DU COURS ?</h2>
                    <p className='text-yellow-600 text-xl'>voici le véritable avis de nos étudiants</p>
                </div>
                <div className='flex justify-center my-8'>
                <div className="p-1 flex flex-wrap justify-center">
                    <Card className='w-full sm:w-72 md:w-80 m-2  h-96'>
                        <CardContent className="aspect-square flex flex-col items-center p-2">
                            <AvatarLogo url="/assets/image/photo_1.jpg" />
                            <div className='mt-8 text-center'>
                                <p>Une formation ultra complète et bien structurée ! J'ai appris à maîtriser SketchUp,  V-Ray et Lumion avec des techniques professionnelles. Les explications sont claires,</p>
                                <p className='py-3'> les exercices pratiques m'ont vraiment aidé à progresser. Je recommande vivement !</p>
                                <p>CATHERINE</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='w-full sm:w-72 md:w-80 m-2  h-96'>
                        <CardContent className="aspect-square flex flex-col items-center p-2">
                            <AvatarLogo url="/assets/image/photo_2.jpg" />
                            <div className='mt-8 text-center'>
                                <p>Le formateur est très compétent et explique parfaitement comment optimiser les paramètres de V-Ray pour obtenir des résultats de qualité sans perdre trop de temps.</p>
                                <p className='py-3'> Une formation que je recommande à tous les designers 3D !</p>
                                <p>@Johon</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='w-full sm:w-72 md:w-80 m-2  h-96'>
                        <CardContent className="aspect-square flex flex-col items-center p-2">
                            <AvatarLogo url="/assets/image/photo_3.jpg" />
                            <div className='mt-8 text-center'>
                                <p>Grâce à cette formation, j’ai pu créer des modélisations 3D précises et professionnelles en un temps record. L’instructeur explique chaque étape avec pédagogie. </p>
                                <p className='py-3'>Idéal pour les débutants comme pour les utilisateurs intermédiaires !</p>
                                <p>Martin</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCourse;


// <Carousel className="max-w-sm lg:max-w-full">
//                         <CarouselContent className="h-96">
//                             <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/2">
//                                 <div className="p-1">
//                                     <Card>
//                                         <CardContent className="aspect-square flex flex-col items-center p-2">
//                                           <AvatarLogo url="/assets/image/photo_1.jpg" />
//                                             <div className='mt-8 text-center'>
//                                                 <p>Une formation ultra complète et bien structurée ! J'ai appris à maîtriser SketchUp,  V-Ray et Lumion avec des techniques professionnelles. Les explications sont claires,</p>
//                                                 <p className='py-3'> les exercices pratiques m'ont vraiment aidé à progresser. Je recommande vivement !</p>
//                                                 <p>CATHERINE</p>
//                                             </div>
//                                         </CardContent>
//                                     </Card>
//                                 </div>
//                             </CarouselItem>
                     
                            
//                         </CarouselContent>
//                         <CarouselPrevious />
//                         <CarouselNext />
//                     </Carousel>