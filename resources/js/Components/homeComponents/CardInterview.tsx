import React, { useState } from 'react';
import { Dot } from 'lucide-react';
import moment from 'moment';
import { useForm } from '@inertiajs/react';

interface Item {
    id:string,
    name:string,
    subject:string,
    date:Date,
    hour:string,
    number:string,
    status:boolean,
    created_at:Date,
}

interface PropsInterview{
    interview:Item;
    isSelect:string;
}

const CardInterview:React.FC<PropsInterview> = ({interview,isSelect}) => {
    const [selectItem,setSelectItem]=useState<boolean>(false);
    const textFormateur=(txt:string | undefined)=>{
        if (txt) {
            return txt.slice(0,15)+'...';   
        }
        
    }
    const { put} = useForm({status:true});

    const form=(interview:Item)=>{
        setSelectItem(true)
       if (interview.status) {
            put(route('interview.update',[interview.id]),{
                preserveScroll: true,
            });
       }
    }

    return (
        <div onClick={()=>form(interview)} className={isSelect==interview.name ? 'w-full hover:bg-blue-500 cursor-pointer border bg-blue-500': 'w-full hover:bg-blue-500 cursor-pointer border'}>
           <div className='p-2'>
             <div className='flex justify-between items-center'>
                <strong className='flex items-center'>{interview.name} {interview.status && (<Dot size={40} color='#206ed5' />)} </strong> 
                <strong>{moment(interview.created_at).format("MMM YY")}</strong>
             </div>
             <div className='text-left text-xs overflow-hidden'><em>{textFormateur(interview.subject)}</em></div>
             <p className='text-left mt-1'>Nouveau consultation</p>
           </div>
        </div>
    );
};

export default CardInterview;