import React from 'react';
import { Button } from '../ui/button';

const Learn = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center p-1 md:p-16 '>
                <div className='border-0 md:border-r-2 border-black pr-6'>
                    <h2 className='font-inter font-black text-4xl sm:text-5xl text-center md:text-right uppercase'>apprendre</h2>
                    <h2 className='font-inter font-black text-4xl sm:text-5xl md:text-right text-center'>V-RAY</h2>
                    <p className='font-inter text-yellow-600 font-black text-[12rem] text-center md:text-right mt-[-60px]'>16</p>
                </div>
                <div className='md:pl-10'>
                    <h3 className='text-center md:text-left font-black text-2xl'>APPRENDRE LA MÉTHODE STRUCTURÉE POUR</h3>
                    <h4 className='text-center md:text-left text-xl text-yellow-600'>créer des rendus étonnants</h4>
                    <ul className='mt-16'>
                        <li className='flex flex-col md:flex-row items-center my-4 md:my-0'>
                            <img src="/assets/wp/ico1.jpg" alt="" />
                            <strong className='mr-1'>16 PROGRESSIVE LESSONS </strong>
                            <p>du début à la fin</p>
                        </li>
                        <li className='flex  flex-col md:flex-row items-center my-4 md:my-0'>
                            <img src="/assets/wp/ico3.jpg" alt="" />
                            <strong className='mr-1'>SOUTIEN DIDACTIQUE</strong>
                            <p>avec des instructeurs certifiés</p>
                        </li>
                        <li className='flex  flex-col md:flex-row items-center my-4 md:my-0'>
                            <img src="/assets/wp/ico4.jpg" alt="" />
                            <strong className='mr-1'>CERTIFICATION OFFICIELLE DES Rendus 3D</strong>
                            <p>de présence</p>
                        </li>
                        <li className='flex  flex-col md:flex-row items-center my-4 md:my-0'>
                            <img src="/assets/wp/ico5.jpg" alt="" />
                            <strong className='mr-1'>COLLECTION DE DESSINS EN 3D</strong>
                            <p>Modèles connectés</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-center'>
               <div className=''>
                    <div className='font-bold'>
                        <p>*En plus, recevez un pack de 100 parquets en bois !</p>
                        <p>Méthode disponible pour 3ds Max | SketchUp | Compatible avec V-Ray 5/6/7</p>
                    </div>
                    <div className='flex justify-center dark:bg-white flex-col md:flex-row border-t border-b border-black w-48 md:w-[600px] m-auto my-7'>
                        <img className='h-14 md:h-full  border-b border-t border-black md:border-0' src="/assets/wp/autodesk.png" alt="" />
                        <img className='h-14 md:h-full  border-b border-t border-black md:border-0' src="/assets/wp/sketchup.png" alt="" />
                    </div>
                    <div>
                        <Button className='bg-yellow-600 font-bold text-xl'>Voir l'offre</Button>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Learn;