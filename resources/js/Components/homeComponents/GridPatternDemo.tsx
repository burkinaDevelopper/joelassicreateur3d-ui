import { Button } from "@/Components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import 'lazysizes';
import { cn } from "@/lib/utils";
import GridPattern from "@/Components/ui/grid-pattern";
import SparklesText from "@/Components/ui/sparkles-text";
import { CoolMode } from "@/Components/ui/cool-mode";
import React, { useEffect, useState,FormEventHandler } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { useAlert } from '@/hooks/useAlert';

export function GridPatternDemo() {
     const { data, setData, post,reset, processing,progress, errors } = useForm({
                    name: "",
                    subjet: "",
                    date:"",
                    heure:"",
                    numero:"",
                    })
      const { flash } = usePage<any>().props;
      const {showAlert}=useAlert();
      const submit:FormEventHandler=(e)=>{
              e.preventDefault();
              post(route('store'), {
                  preserveScroll: true,
                  onSuccess: () => {
                      return reset() ;
                  },
              }) 
          }
      useEffect(()=>{
          if (flash.success) {
              showAlert(1000,"bottom-end",flash.success,"success"); 
              setTimeout(() => {
                flash.success=null;
            }, 1000)     
          }
      },[flash.success])
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-5xl text-black dark:text-white">
         <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] ">
            <div><img data-src="/assets/Calling-bro.png" decoding="async" className="lazyload" alt="" /></div>
            <Card className="w-full">
            <CardHeader>
              <CardTitle>Consultation</CardTitle>
              <CardDescription><SparklesText text="Planifiez votre consultation gratuite dès maintenant" /> </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={submit}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Nom</Label>
                    <Input id="name" placeholder="Entrez votre nom"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                     />
                     {errors.name && <div className='text-red-700 text-sm'>{errors.name}</div>}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="subjet">Sujet</Label>
                    <Input id="subjet" placeholder="Entrez le motif de l'appel"
                    value={data.subjet}
                    onChange={e => setData('subjet', e.target.value)}
                     />
                     {errors.subjet && <div className='text-red-700 text-sm'>{errors.subjet}</div>}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="date">Date</Label>
                    <Input type="date" id="date" placeholder="Entrez le motif de l'appel"
                    value={data.date}
                    onChange={e => setData('date', e.target.value)}
                     />
                     {errors.date && <div className='text-red-700 text-sm'>{errors.date}</div>}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="time">Heure</Label>
                    <Input type="time" id="time" placeholder="choisir l'heure de l'appel"
                    value={data.heure}
                    onChange={e => setData('heure', e.target.value)}
                     />
                     {errors.heure && <div className='text-red-700 text-sm'>{errors.heure}</div>}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="number">Whatsapp</Label>
                    <Input type="number" id="number" placeholder="numero whatsapp avec indicatif du pays"
                    value={data.numero}
                    onChange={e => setData('numero', e.target.value)}
                     />
                      {errors.numero && <div className='text-red-700 text-sm'>{errors.numero}</div>}
                  </div>
                  
                </div>
                <CoolMode>
                   <Button>Reservez</Button>
                </CoolMode>
              </form>
            </CardContent>
          </Card>
         </div>
      </p>
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 15],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
