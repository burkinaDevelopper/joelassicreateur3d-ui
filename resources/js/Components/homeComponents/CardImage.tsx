import {
    TableCell,
    TableRow,
  } from "@/Components/ui/table"
import { Trash2 } from 'lucide-react';
import { FormEventHandler } from 'react';
import React, { useEffect, useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { useAlert } from '@/hooks/useAlert';

import AvatarLogo from '../AvatarLogo';
import ProposImage from "@/types/imagetype";

interface PropsImageType{
    image:ProposImage;
    link:string,
    student?:boolean,
}
const CardImage:React.FC< PropsImageType> = ({image,link,student}) => {
     const {delete: destroy} = useForm();
        const { flash } = usePage<any>().props;
        const {showAlert}=useAlert();
    const handleDelete:FormEventHandler=async(e)=>{
            e.preventDefault();
            if (image) {
                destroy(route(link,[image.id]))
            }   
        }
    useEffect(()=>{
        if (flash.success) {
            showAlert(2000,"top-end",flash.success,"success");    
        }
    },[flash.success])
    return (
        <TableRow>
            <TableCell className="font-medium"><AvatarLogo url={image.thumbnail_url} /></TableCell>
            <TableCell>{image.name}</TableCell>
            {student && (<TableCell>{image.student}</TableCell>)}
            <TableCell className="text-right"><span onClick={handleDelete} className='cursor-pointer'><Trash2 color='#e21212' /></span></TableCell>
        </TableRow>
    );
};

export default CardImage;