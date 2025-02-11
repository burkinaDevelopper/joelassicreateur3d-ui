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
import FileUpload from '../FileUpload';
import { useForm, usePage } from '@inertiajs/react';
import { useAlert } from '@/hooks/useAlert';
import { Progress } from "@/Components/ui/progress";
import { Textarea } from "@/Components/ui/textarea"


const AlbumCard = () => {
     const { data, setData, post,reset, processing,progress, errors } = useForm({
            title: '',
            description: '',
            image:null,
            })
    const { flash } = usePage<any>().props;
    const {showAlert}=useAlert();
    const handleFileUpload = (file:any) => {
          setData('image', file);
        };
        
    const submit:FormEventHandler=(e)=>{
        e.preventDefault();
        post(route('album.store'), {
            preserveScroll: true,
            onSuccess: () => {
                return reset() ;
            },
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
    return (
        <>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Creer un Album</CardTitle>
                    <CardDescription>tout les champs sont obligatoire</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="title">Nom</Label>
                            <Input id="title" placeholder="nom de l'album"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            />
                            {errors.title && <div className='text-red-700'>{errors.title}</div>}
                            </div>
                        </div>
                        <div className="grid w-full items-center gap-4 my-2">
                            <div className="flex flex-col space-y-1.5">
                            <Textarea placeholder="Ecrire une description"
                             value={data.description}
                             onChange={e => setData('description', e.target.value)}
                             />
                             {errors.description && <div className='text-red-700'>{errors.description}</div>}
                            </div>
                        </div>
                        <div className="grid w-full items-center gap-4 my-2">
                            <div className="flex flex-col space-y-1.5">
                            <FileUpload onSendFile={handleFileUpload}/>
                            </div>
                        </div>
                         {progress && (
                            <Progress value={progress.percentage} className="w-[100%]" />
                        )}
                        <Button  type='submit' className='my-2' disabled={!data.image || processing}>Envoyer</Button>
                    </form>
                </CardContent>
            </Card>  
        </>
    );
};

export default AlbumCard;