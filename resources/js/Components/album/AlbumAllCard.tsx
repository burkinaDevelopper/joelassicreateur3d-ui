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
import Select from 'react-select';
import PropsAlbum from '@/types/albumtype';

interface AlbumProps{
    albums:PropsAlbum[]
}
const AlbumAllCard:React.FC<AlbumProps> = ({albums}) => {
   
    
    const [selectedOption, setSelectedOption] = useState<any>(null);
     const { data, setData, post,reset, processing,progress, errors } = useForm({
                id: "",
                title: "",
                image:null,
                })
    const { flash } = usePage<any>().props;
    const {showAlert}=useAlert();
    const handleFileUpload = (file:any) => {
            setData('image', file);
        };
        
    const submit:FormEventHandler=(e)=>{
        e.preventDefault();
        post(route('photo.store'), {
            preserveScroll: true,
            onSuccess: () => {
                setSelectedOption(null);
                return reset() ;
            },
        }) 
    }
    const formattedOptions = albums.map((option:PropsAlbum) => ({
        value: option.id,
        label: option.title, 
      }));
    useEffect(()=>{
        if (selectedOption?.value) {
            setData('id',selectedOption?.value);
        }
    },[selectedOption?.value])
    useEffect(()=>{
        if (flash.success) {
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
                <CardTitle>Ajouter une image</CardTitle>
                <CardDescription>ajouter une image a un album</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={submit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="title">Nom</Label>
                        <Input id="title" placeholder="nom de l'image"
                        value={data.title}
                        onChange={e => setData('title', e.target.value)}
                        />
                        {errors.title && <div className='text-red-700'>{errors.title}</div>}
                        </div>
                    </div>
                    <div className="grid w-full items-center gap-4 my-2">
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="title">choisir un album</Label>
                        <Select
                            options={formattedOptions}
                            value={selectedOption}
                            onChange={setSelectedOption}
                            placeholder="Choisir album..."
                        />
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

export default AlbumAllCard;