import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from '@/styles/toast.module.css'
export function Toast(message,type){
    if(type===true){
        toast.success(message, {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            rtl:true,
            toastClassName:styled.Toast
        });
    }
    else {
        toast.error(message, {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            rtl:true,
            className:styled.Toast
        });
    }


}