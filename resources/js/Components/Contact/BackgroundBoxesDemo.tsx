import { useAlert } from '@/hooks/useAlert';
import React,{useState,FormEventHandler,useEffect} from 'react';
import { Boxes } from "../ui/background-boxes";
import { useForm, usePage } from '@inertiajs/react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/Components/ui/card"
  import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Button } from "@/Components/ui/button"



const BackgroundBoxesDemo = () => {
    const { data, setData, post,reset,errors } = useForm({
        email: '',
        })
    const { flash } = usePage<any>().props;
    const {showAlert}=useAlert();
        
    const submit:FormEventHandler=(e)=>{
        e.preventDefault();
        post(route('newspaper.store'), {
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
        <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
  
        <Boxes />
        {/* <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Tailwind is Awesome
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Framer motion is the best animation library ngl
        </p> */}
        <div className="z-20">
        <Card className="w-full md:w-[350px]">
        <CardHeader>
          <CardTitle>JOELASSI-CREATEUR3D</CardTitle>
          <CardDescription>Suivez nos publication.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} >
            <div className="grid w-full items-center gap-4 mb-2">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="email"  type="email" placeholder="Entrez votre email" 
                 value={data.email}
                 onChange={(e)=>setData('email',e.target.value)}
                />
              </div>
            </div>
            <Button
            //   className="g-recaptcha"
            //   data-sitekey="6Lf2DbwqAAAAAFPodLNVFqzD-YE5ETl2r2PwgDVn" 
            //   data-callback='onSubmit' 
            //   data-action='submit'
            >Envoyer</Button>
          </form>
        </CardContent>
      </Card>
        </div>
      </div>
    );
};

export default BackgroundBoxesDemo;

