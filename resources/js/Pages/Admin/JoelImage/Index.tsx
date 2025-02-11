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
import FileUpload from '@/Components/FileUpload';
import { useForm, usePage } from '@inertiajs/react';
import { useAlert } from '@/hooks/useAlert';
import { Progress } from "@/Components/ui/progress";
import CardImage from '@/Components/homeComponents/CardImage';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/Components/ui/table"
import ProposImage from '@/types/imagetype';
interface ProposImageType{
    images:ProposImage[];
}
const Index:React.FC<ProposImageType> = ({images}) => {
    const { flash } = usePage<any>().props;
        const {showAlert}=useAlert();
        
        const { data, setData, post,reset, processing,progress, errors } = useForm({
            name: '',
            image:null,
          })
          const handleFileUpload = (file:any) => {
            setData('image', file);
        };
          
         const submit:FormEventHandler=(e)=>{
                e.preventDefault();
                post(route('galeryjoel.store'), {
                    preserveScroll: true,
                    onSuccess: () => {
                       return reset() ;
                    },
                  }) 
            }
            useEffect(()=>{
                if (flash.success) {
                    showAlert(2000,"top-end",flash.success,"success");    
                }
            },[flash.success]);
    return (
        <AdminLayout >
                <main className='w-full'>
            <div className='flex items-start justify-center'>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Image galery Joel</CardTitle>
                    <CardDescription>possible de faire glisser depose.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="nom de l'image"
                         value={data.name}
                         onChange={e => setData('name', e.target.value)} />
                        {errors.name && <div className='text-red-700'>{errors.name}</div>}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                           <FileUpload onSendFile={handleFileUpload} />
                           {errors.image && <div className='text-red-700'>{errors.image}</div>}
                        </div>       
                    </div>
                    {progress && (
                                 <Progress value={progress.percentage} className="w-[100%]" />
                    )}
                    <Button type='submit' className='my-2' disabled={!data.image || processing}>Envoyer</Button>
                    </form>
                   
                </CardContent>
            </Card> 
            </div>
            <div>
                <Table>
                    <TableCaption>List des image.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">image</TableHead>
                            <TableHead>nom</TableHead>
                            <TableHead className="text-left">supprimer</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {images && images.map((image,index)=>(  
                             <CardImage image={image} key={index} link={"galeryjoel.destroy"} />
                          ))}
                    </TableBody>
                </Table>
            </div>
          </main>
        </AdminLayout>
    );
};

export default Index;