import { FormEventHandler,useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/Components/ui/table"
  import AvatarLogo from '../AvatarLogo';
import { Trash2 } from 'lucide-react';

import { useForm, usePage } from '@inertiajs/react';
import { useAlert } from '@/hooks/useAlert';


interface Photo{
    title:string;
    url:string;
    path:string;
    id:string
}

interface Album{
    id:string;
    title:string;
    slug:string;
    path:string;
    url:string;
    description?:string;
    created_at:Date;
    photos:Photo[];
    votes:[],
    views:[]
}
interface AlbumItem{
    album:Album;
}
const AlbumManager:React.FC<AlbumItem> = ({album}) => {
     const { flash } = usePage<any>().props;
    const {showAlert}=useAlert();
     const { delete: destroy } = useForm();
     const handleDeletePhoto=(id:string)=>{
                if (id) {
                    destroy(route('photo.destroy',[id]),{
                        preserveScroll: true,
                    })
                }   
            }
     const handleDeleteAlbum=(id:string)=>{
                if (id) {
                    destroy(route('album.destroy',[id]),{
                        preserveScroll: true,
                    })
                }   
            }
    useEffect(()=>{
        if (flash.success) {
            showAlert(1000,"top-end",flash.success,"success");    
        }
        setTimeout(() => {
            flash.success=null;
        }, 1000)  
    },[flash.success])
    return (
        <TableRow>
                <TableCell className="font-medium">
                    <div className='flex items-center justify-center'>
                        <span className='flex items-center mx-1'><AvatarLogo url={album.url} /></span> 
                        <span className='cursor-pointer ml-1'>{album.title}</span>
                    </div>
                </TableCell>
                <TableCell>{album.votes.length}</TableCell>
                <TableCell>{album.views.length}</TableCell>
                <TableCell><span onClick={()=>handleDeleteAlbum(album.id)} className='cursor-pointer'><Trash2 color='#d41c1c' /></span></TableCell>
                <TableCell className="text-right">
                    <TableRow className='flex flex-col'>
                        {album.photos && album.photos.map((photo,index)=>(
                            
                            <TableCell key={index}>
                              <span className='flex justify-evenly items-center'>
                                  <AvatarLogo url={photo.url} /> {photo.title} 
                                  <span onClick={()=>handleDeletePhoto(photo.id)} className='cursor-pointer'>
                                    <Trash2 color='#d41c1c' />
                                  </span>
                              </span>
                            </TableCell>
                           
                        ))}
                    </TableRow>
                </TableCell>
        </TableRow>
    );
};

export default AlbumManager;