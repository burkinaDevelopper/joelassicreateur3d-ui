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
import Select from 'react-select';
import PropsCourse from '@/types/coursetype';
import { useForm, usePage } from '@inertiajs/react';
import { useAlert } from '@/hooks/useAlert';


interface ModulePropsType{
  modules:PropsCourse[];
}

const CourseCard:React.FC<ModulePropsType> = ({modules}) => {
   const [selectedOptionModule, setSelectedOptionModule] = useState<any>(null);

   const { data, setData, post,reset, errors } = useForm({
            module: "",
            title: "",
            })
  const { flash } = usePage<any>().props;
  const {showAlert}=useAlert();
      
  const submit:FormEventHandler=(e)=>{
      e.preventDefault();
      post(route('chapter.store'), {
          preserveScroll: true,
          onSuccess: () => {
              setSelectedOptionModule(null);
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

  useEffect(()=>{
          if (selectedOptionModule?.value) {
              setData('module',selectedOptionModule?.value);
          }
      },[selectedOptionModule?.value])

    const formattedOptionsModule = modules.map((option:PropsCourse) => ({
      value: option.id,
      label: option.title, 
    }));
    return (
    <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Creer un chapitre</CardTitle>
          <CardDescription>Ajouter un chapitre a un cours.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit}>
            <div className="grid w-full items-center gap-4 my-2">       
                <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Choisir un module</Label>
                <Select
                    options={formattedOptionsModule}
                    value={selectedOptionModule}
                    onChange={setSelectedOptionModule}
                    placeholder="Choisir un module..."
                />
                {errors.module && <div className='text-red-700'>{errors.module}</div>}
                </div>

                <div className="flex flex-col space-y-1.5 my-2">
                <Label htmlFor="modultitle">Titre</Label>
                <Input id="modultitle" placeholder="titre du Chapitre"
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