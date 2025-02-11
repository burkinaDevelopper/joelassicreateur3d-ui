import { Trash2,Trash } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/Components/ui/card"
import DisplayChapter from './DisplayChapter';
import React, { useEffect, useState, FormEventHandler } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { useAlert } from '@/hooks/useAlert';



interface ChapterProps {
    id: string;
    title: string;
}
interface ModuleProps {
id: string;
title: string;
chapters: ChapterProps[];
}
interface CourseProps {
id: string;
title: string;
slug?:string;
modules: ModuleProps[]; 
}
  
interface PropsCourseType {
    item:CourseProps; 
}

const DisplayCard:React.FC<PropsCourseType> = ({item}) => {
     const {delete: destroy} = useForm();
    const { flash } = usePage<any>().props;
    const {showAlert}=useAlert();

    const handleDelete=(id:string)=>{
            if (id) {
                destroy(route('module.destroy',[id]),{
                    preserveScroll:true,
                })
            }   
        }
    useEffect(()=>{
        if (flash.success) {
            showAlert(1000,"top-end",flash.success,"success"); 
            setTimeout(() => {
                flash.success=null;
            }, 1000)   
        }
    },[flash.success])
    
    return (
        <div className='w-full pl-4 mt-10'>
            {item.modules && item.modules.map((module:ModuleProps,index:any)=>(
            <Card key={index} className="max-w-full my-2">
               <CardHeader>
                   <CardTitle className='flex mb-6'>
                       <span onClick={()=>handleDelete(module.id)} className='mr-2 cursor-pointer'><Trash2 color='#e21212'/></span>
                       <span>{module.title}</span>
                   </CardTitle>
                   <ul className='ml-20 pb-10'>
                       {module.chapters  && module.chapters.map((chapter,index)=>(
                        <DisplayChapter key={index} chapter={chapter}/>
                       ))}
                   </ul>
               </CardHeader>
           </Card>
            ))}
            
        </div>
    );
};

export default DisplayCard;