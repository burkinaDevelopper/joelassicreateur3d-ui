import * as React from "react"

import { Card, CardContent } from "@/Components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import ProposImage from '@/types/imagetype';
import 'lazysizes';


interface PropsImage{
  name:string;
  url:string
}
interface PropsImageType{
  images:ProposImage[];
}
const CarouselImage:React.FC<PropsImageType> = ({images}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
    return (
      <Carousel 
      plugins={[plugin.current]}
      className="w-full max-w-[1100px]">
        <CarouselContent>
          {images && images.map((img,index)=>(
            <CarouselItem key={index} >
               <img data-src={img.url} alt={img.name}
                decoding="async"
                data-sizes="auto"
                className="w-full border-2 rounded-xl lazyload"/>
            </CarouselItem>
          ))}
          {images.length==0 && (
            <CarouselItem >
            <img data-src='/assets/image/banner.png' alt='banner'
             decoding="async"
             data-sizes="auto"
             className="w-full border-2 rounded-xl lazyload"/>
           </CarouselItem>
          )}
        </CarouselContent>
      </Carousel>
    );
};

export default CarouselImage;
