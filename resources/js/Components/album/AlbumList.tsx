import PropsAlbum from '@/types/albumtype';
import React from 'react';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/Components/ui/table"

import AlbumManager from './AlbumManager';



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
    albums:Album[];
}
const AlbumList:React.FC<AlbumItem> = ({albums}) => {
    
    return (
        <div className='mt-4 w-full'>
           <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Album</TableHead>
                        <TableHead>votes</TableHead>
                        <TableHead>vue(s)</TableHead>
                        <TableHead>supprimer</TableHead>
                        <TableHead className="text-right">photo</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {albums && albums.map((album,index)=>(
                        <AlbumManager key={index}  album={album}/>
                    ))}
                </TableBody>
            </Table>

        </div>
    );
};

export default AlbumList;