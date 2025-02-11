import React,{useState,FormEventHandler,useEffect} from 'react';
import { Button } from "@/Components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { useForm, usePage } from '@inertiajs/react';
import { useAlert } from '@/hooks/useAlert';

const CourseCard = () => {
     const { data, setData, post,reset,errors } = useForm({
                title: '',
                })
        const { flash } = usePage<any>().props;
        const {showAlert}=useAlert();
            
        const submit:FormEventHandler=(e)=>{
            e.preventDefault();
            post(route('course.store'), {
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
    <Card className="w-[350px]">
        <CardHeader>
            <CardTitle>Creer un Cours</CardTitle>
            <CardDescription>Entre le titre du cours</CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={submit}>
                <div className="grid w-full items-center gap-4 mb-2">
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="titrecours">Titre</Label>
                    <Input id="titrecours" placeholder="titre du cours"
                     value={data.title}
                     onChange={e => setData('title', e.target.value)}
                     />
                    {errors.title && <div className='text-red-700'>{errors.title}</div>}
                    </div>
                </div>
                <Button>Envoyer</Button>
            </form>
        </CardContent>
    </Card>
    );
};

export default CourseCard;