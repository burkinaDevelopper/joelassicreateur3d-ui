
import {
    TableCell,
    TableRow,
  } from "@/Components/ui/table"
import { Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { useAlert } from '@/hooks/useAlert';

import ProposVideo from "@/types/videotype";
import { Avatar, AvatarFallback} from "@/Components/ui/avatar"
import AvatarLogo from "../AvatarLogo";


interface PropsVideoType{
    video:ProposVideo;
    link:string,
}
const CardVideo:React.FC<PropsVideoType> = ({video,link}) => {

        const {delete: destroy} = useForm();
        const { flash } = usePage<any>().props;
        const {showAlert}=useAlert();
        const handleDelete=()=>{
                if (video) {
                    destroy(route(link,[video.id]))
                }   
            }
        useEffect(()=>{
            if (flash.success) {
                showAlert(2000,"top-end",flash.success,"success");    
            }
            setTimeout(() => {
                flash.success=null;
            }, 1000)
        },[flash.success])
    return (
        <TableRow>
            <TableCell className="font-medium">
                <Avatar>
                <video src={video.url} muted  className="rounded-full w-full h-full" autoPlay>
                </video>
                </Avatar>
            </TableCell>
             <TableCell className="font-medium">
               <AvatarLogo url={video.imgurl} />
            </TableCell>
            <TableCell>{video.name}</TableCell>
            <TableCell className="text-right"><span onClick={handleDelete} className='cursor-pointer'><Trash2 color='#e21212' /></span></TableCell>
        </TableRow>
    );
};

export default CardVideo;