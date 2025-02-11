import { useForm, usePage } from '@inertiajs/react';
import { useAlert } from '@/hooks/useAlert';
import React,{useState,FormEventHandler,useEffect} from 'react';
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"

const Newspaper = () => {
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
        <>
           <form onSubmit={submit} className="flex w-full max-w-sm items-center space-x-2">
              <Input
              value={data.email}
              onChange={(e)=>setData('email',e.target.value)}
               type="email" placeholder="Email" />
              <Button type="submit" 
            //   className="g-recaptcha"
            //   data-sitekey="6Lf2DbwqAAAAAFPodLNVFqzD-YE5ETl2r2PwgDVn" 
            //   data-callback='onSubmit' 
            //   data-action='submit'
               >Souscription</Button>
            </form>
            {errors.email && <div className='text-red-700 text-sm'>{errors.email}</div>} 
        </>
    );
};

export default Newspaper;