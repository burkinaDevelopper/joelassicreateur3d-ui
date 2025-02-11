
import { cn } from "@/lib/utils";
import PropsAlbum from "@/types/albumtype";
import { Link } from "@inertiajs/react";
import { Eye,ThumbsUp } from 'lucide-react';
import 'lazysizes';
import { useForm, usePage } from '@inertiajs/react';
import { useAlert } from '@/hooks/useAlert';
import React,{useState,FormEventHandler,useEffect} from 'react';

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

const CardDemo:React.FC<AlbumItem> = ({album}) => {
      const {  put } = useForm()

                
      const { flash } = usePage<any>().props;
      const {showAlert}=useAlert();
          
      const submit=(slug:string)=>{
        put(route('albums.update',[slug]), {
              preserveScroll: true,
          }) 
      }
      useEffect(()=>{
          if (flash.success && flash.success!=" ajouter avec success") {
              showAlert(1000,"top-end",flash.success,"success");
              setTimeout(() => {
                flash.success=null;
            }, 1000)    
          }
      },[flash.success]);
    
    const textFormateur=(txt:string | undefined)=>{
        if (txt) {
            return txt.slice(0,40)+'..';   
        }
    }
    return (
        <div className="m-1  group/card w-[639px]">
        <div
          className={cn(
            `relative card h-[638px] shadow-xl  backgroundImage`
          )}
        >
           <Link href={`/albums/${album.slug}`} className="h-full w-full cursor-pointer">
             <img data-src={album.url} 
              decoding="async"
             data-sizes="auto"
             alt={album.title} className="h-full cursor-pointer lazyload" />
           </Link>
         
        </div>
        <div className="flex justify-between mt-2">
           <h6>{textFormateur(album.title)}</h6>
           <div className="flex"> 
             <strong className="flex mx-3 mt-1">
              <span>{album.views.length}</span>
              <span><Eye /></span>
             </strong>
             <strong className="flex items-center">
              <span>{album.votes.length}</span>
              <span onClick={()=>submit(album.slug)} className="mb-2 ml-1 cursor-pointer"><ThumbsUp /></span>
             </strong>
           </div>
        </div>
      </div>
    );
};

export default CardDemo;
