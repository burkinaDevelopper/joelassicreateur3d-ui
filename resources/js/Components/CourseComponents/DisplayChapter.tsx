import { Trash2,Trash } from 'lucide-react';
import React, { useEffect, useState, FormEventHandler } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { useAlert } from '@/hooks/useAlert';


interface ChapterProps {
    id: string;
    title: string;
}
interface PropsChapterType{
    chapter:ChapterProps
}
const DisplayChapter:React.FC<PropsChapterType> = ({chapter}) => {
    const {delete: destroy} = useForm();
    const { flash } = usePage<any>().props;
    const {showAlert}=useAlert();

    const handleDelete=(id:string)=>{
            if (id) {
                destroy(route('chapter.destroy',[id]),{
                    preserveScroll:true,
                });
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
        <li className='flex my-2'>
            <em className='mr-2'>{chapter.title}</em>
            <span onClick={()=>handleDelete(chapter.id)} className='mr-2 cursor-pointer'><Trash color='#e21212'/></span>
        </li>
    );
};

export default DisplayChapter;