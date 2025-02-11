import React from 'react';
import { Dot } from 'lucide-react';
import moment from 'moment';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

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
    unread:Item;
}
const CardInterview:React.FC<PropsInterview> = ({unread}) => {

    const textFormateur=(txt:string | undefined)=>{
        if (txt) {
            return txt.slice(0,15)+'...';   
        }
        
    }
     const { put} = useForm({status:true});
 
     const form=(unread:Item)=>{
        if (unread.status) {
             put(route('interview.update',[unread.id]),{
                preserveScroll: true,
             });
        }
 
     }
    return (
        <div onClick={()=>form(unread)} className='w-full hover:bg-blue-500 cursor-pointer border '>
           <div className='p-2'>
             <div className='flex justify-between items-center'>
                <strong className='flex items-center'>{unread.name} {unread.status && (<Dot size={40} color='#206ed5' />)} </strong> 
                <strong>{moment(unread.created_at).format("MMM YY")}</strong>
             </div>
             <div className='text-left text-xs overflow-hidden'><em>{textFormateur(unread.subject)}</em></div>
             <p className='text-left mt-1'>Nouveau consultation</p>
           </div>
        </div>
    );
};

export default CardInterview;