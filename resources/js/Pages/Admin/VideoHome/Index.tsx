import AdminLayout from '@/Layouts/AdminLayout';
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
import React,{useState,FormEventHandler,useEffect} from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { useAlert } from '@/hooks/useAlert';
import { Progress } from "@/Components/ui/progress";

import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/Components/ui/table"
import CardVideo from '@/Components/videoComponents/CardVideo';
import ProposVideo from '@/types/videotype';

interface ProposImageType{
    videos:ProposVideo[];
}
const Index:React.FC<ProposImageType> = ({videos}) => {
         const { flash } = usePage<any>().props;
        const {showAlert}=useAlert();
        const [file,setFile]=useState<any>(null);
        
        const { data, setData, post,reset, processing,progress, errors } = useForm({
            name: '',
            video:null,
            })
     
        const submit:FormEventHandler=(e)=>{
            e.preventDefault();
            post(route('homevideo.store'), {
                preserveScroll: true,
                onSuccess: () => {
                    return reset() ;
                },
            }) 
        }
        useEffect(()=>{
           if (file?.target?.files[0]) {
            setData('video',file.target?.files[0]);
           }
        },[file?.target?.files[0]])
        useEffect(()=>{
            if (flash.success) {
                showAlert(1000,"top-end",flash.success,"success");    
            } 
            setTimeout(() => {
                flash.success=null;
            }, 1000)
        },[flash.success]);
return (
        <AdminLayout>
            <main className='w-full'>
                <div className='flex justify-center'>
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Ajouter une video</CardTitle>
                        <CardDescription>tout les champs sont obligatoire</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit}>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Titre</Label>
                                <Input id="name" placeholder="titre de la video"
                                 value={data.name}
                                 onChange={(e)=>setData('name',e.target.value)}
                                 />
                                  {errors.name && <div className='text-red-700'>{errors.name}</div>}
                                </div>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5 my-2">
                                <Label htmlFor="picture">Video</Label>
                                <Input id="picture" type="file" 
                                onChange={(e)=>setFile(e)}
                                />
                                {errors.video && <div className='text-red-700'>{errors.video}</div>}
                            </div>
                            {progress && (
                                <Progress value={progress.percentage} className="w-[100%]" />
                            )}
                            <Button type='submit' disabled={processing}>Envoyer</Button>
                        </form>
                    </CardContent>
                </Card>
                </div>
                <div>
                <Table>
                    <TableCaption>List des videos.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">videos</TableHead>
                            <TableHead>image</TableHead>
                            <TableHead>nom</TableHead>
                            <TableHead className="text-left">supprimer</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {videos && videos.map((item,index)=>(  
                             <CardVideo video={item} key={index} link={"homevideo.destroy"} />
                          ))}
                    </TableBody>
                </Table>
                </div>
            </main>
        </AdminLayout>
    );
};

export default Index;