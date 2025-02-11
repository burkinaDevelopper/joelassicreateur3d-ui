import AdminLayout from '@/Layouts/AdminLayout';
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
import { useForm, usePage } from '@inertiajs/react';
import { useAlert } from '@/hooks/useAlert';
import { Textarea } from "@/Components/ui/textarea"
import { Progress } from "@/Components/ui/progress";
import FileUpload from '@/Components/FileUpload';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/Components/ui/table"
import Paginations from '@/Components/Paginations';

interface EmailP{
    id:string;
    email:string;
    token:string;
    links:[];
}
interface PropsEmail{
    emails:any;
}
const Index:React.FC<PropsEmail> = ({emails}) => {
    const { data, setData, post,reset, processing, errors,progress } = useForm({
                sujet: '',
                message1: '',
                li:'',
                title:'',
                message2:'',
                image:null,
                })
        const { flash } = usePage<any>().props;
        const {showAlert}=useAlert();
        const handleFileUpload = (file:any) => {
            setData('image', file);
        };
        const submit:FormEventHandler=(e)=>{
            e.preventDefault();
            post(route('marketing.store'), {
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
        <AdminLayout>
            <main className='w-full'>
                <div className='flex justify-center'>
                <div className='w-[450px]'><img className='w-full' src="/assets/exemple.jpg" alt="" /></div>
                <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Email Marketing</CardTitle>
                    <CardDescription>Envoyer les plusieur personne les champs (*) obligatoire</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="sujet">Titre(*)</Label>
                            <Input id="sujet" placeholder="Which render..."
                            value={data.sujet}
                            onChange={e => setData('sujet', e.target.value)}
                            />
                            {errors.sujet && <div className='text-red-700'>{errors.sujet}</div>}
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Textarea placeholder="In my YouTube..."
                                value={data.message1}
                                onChange={e => setData('message1', e.target.value)}
                                />
                                {errors.message1 && <div className='text-red-700'>{errors.message1}</div>}
                            </div>
                            
                            <div className="flex flex-col space-y-1.5">
                                <Textarea placeholder="🔥Interactive...  separer par des virgule (,)"
                                value={data.li}
                                onChange={e => setData('li', e.target.value)}
                                />
                                {errors.li && <div className='text-red-700'>{errors.li}</div>}
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="title">Sous titre</Label>
                                <Input id="title" placeholder="So,what's... "
                                value={data.title}
                                onChange={e => setData('title', e.target.value)}
                                />
                                {errors.sujet && <div className='text-red-700'>{errors.sujet}</div>}
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Textarea placeholder="Let us know..."
                                value={data.message2}
                                onChange={e => setData('message2', e.target.value)}
                                />
                                {errors.message2 && <div className='text-red-700'>{errors.message2}</div>}
                            </div>

                            <div className="flex flex-col space-y-1.5">
                           <FileUpload onSendFile={handleFileUpload} />
                           {errors.image && <div className='text-red-700'>{errors.image}</div>}
                           {progress && (
                                 <Progress value={progress.percentage} className="w-[100%]" />
                            )}
                           </div> 
                        </div>
                        
                        <Button  type='submit' className='my-2' disabled={processing}>Envoyer</Button>
                    </form>
                </CardContent>
                </Card>  
                </div>
                <div>
                <Table>
                    <TableCaption>Listes des mail</TableCaption>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-[100px]">Email</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {emails.data && emails.data.map((email:EmailP,index:string)=>(
                         <TableRow key={index}>
                            <TableCell  className="font-medium">{email.email}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </div>
                <div className='w-full'>
                    <Paginations links={emails.links} itemsPerPage={4} />
                </div>
            </main>
        </AdminLayout>
    );
};

export default Index;