import CourseCard from '@/Components/CourseComponents/CourseCard';
import ModuleCard from '@/Components/CourseComponents/ModuleCard';
import ChapterCard from '@/Components/CourseComponents/ChapterCard';
import AdminLayout from '@/Layouts/AdminLayout';
import PropsCourse from '@/types/coursetype';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import DisplayCard from '@/Components/CourseComponents/DisplayModule';
import { Trash2 } from 'lucide-react';
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
    courses:CourseProps[];
    modules: ModuleProps[];  
}
  

const Index:React.FC<PropsCourseType> = ({courses,modules}) => {
    const textFormateur=(txt:string | undefined)=>{
        if (txt) {
            return txt.slice(9,40)+'..';   
        }
    }
    const {delete: destroy} = useForm();
    const { flash } = usePage<any>().props;
    const {showAlert}=useAlert();

    const handleDelete=(slug:string | undefined)=>{
            if (slug) {
                destroy(route('course.destroy',[slug]));
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
        <AdminLayout>
            <main className='w-full'>
                  <div className='flex justify-between'>
                     <CourseCard />
                     <ModuleCard courses={courses}/>
                     <ChapterCard modules={modules} />
                  </div>
                  <div className='mt-10 w-full'>
                    {courses && (
                    <Tabs defaultValue="0" className="w-full">
                        <TabsList>
                            {courses.map((course,index)=>(
                                <TabsTrigger value={index.toString()} key={index}>
                                    <span onClick={()=>handleDelete(course.slug)} className='cursor-pointer mr-1'>
                                        <Trash2 color='#e21212' />
                                    </span>
                                    {textFormateur(course.title)}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {courses.map((item,i)=>(
                            <TabsContent value={i.toString()} key={i}><DisplayCard item={item} /></TabsContent>
                        ))}
                    </Tabs>
                    )}
                  </div>
            </main>
        </AdminLayout>
    );
};

export default Index;