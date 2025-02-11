import Swal from 'sweetalert2';
import "sweetalert2/dist/sweetalert2.min.css";
import { useCallback } from "react";


export const useAlert = () => {
  const showAlert = useCallback((time:number=3000,position:any="top-end",message:string,icon:any="success") => {
    const Toast = Swal.mixin({
      toast: true,
      position:position,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    Toast.fire({
      icon:icon , // 'success', 'error', 'warning', etc.
      title: message,
    })
  }, []);

  return { showAlert };
}

