import React,{useState,FormEventHandler,useEffect} from 'react';

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
import { Textarea } from "@/Components/ui/textarea"
import { useForm, usePage } from '@inertiajs/react';
import { useAlert } from '@/hooks/useAlert';
import { Progress } from "@/Components/ui/progress";


export function CardWithForm() {
     const { data, setData, post,reset, processing,progress, errors } = useForm({
                nom: '',
                email: '',
                message:'',
                })
        const { flash } = usePage<any>().props;
        const {showAlert}=useAlert();
       
            
        const submit:FormEventHandler=(e)=>{
            e.preventDefault();
            post(route('contact.store'), {
                preserveScroll: true,
                onSuccess: () => {
                    return reset() ;
                },
            }) 
        }
        useEffect(()=>{
            if (flash.success) {
                showAlert(1000,"top-end",flash.success,"success");  
                setTimeout(() => {
                    flash.success=null;
                }, 1000)    
            }
        },[flash.success]);

  return (
    <Card className="w-full md:w-[410px]">
      <CardHeader>
        <CardTitle>Contactez-Nous</CardTitle>
        <CardDescription>tout les champs sont obligatoire</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={submit}>
          <div className="grid w-full items-center gap-4 mb-2">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nom</Label>
              <Input id="name" placeholder="votre nom"
              onChange={e => setData('nom', e.target.value)}
               />
              {errors.nom && <div className='text-red-700'>{errors.nom}</div>}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type='email' id="email" placeholder="votre email"
              onChange={e => setData('email', e.target.value)}
               />
              {errors.email && <div className='text-red-700'>{errors.email}</div>}
            </div>
            <div className="flex flex-col space-y-1.5 ">
                <Label htmlFor="message">Votre message</Label>
                <Textarea placeholder="Entre votre message" id="message"
                onChange={e => setData('message', e.target.value)}
                 />
                {errors.message && <div className='text-red-700'>{errors.message}</div>}
            </div>
          </div>
          <Button>Envoyer</Button>
        </form>
      </CardContent>
    </Card>
  )
}
