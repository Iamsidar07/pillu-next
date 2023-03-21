import { surpriseMePrompts } from "../constants"
import FileSaver from "file-saver"
import { toast  } from "react-toastify"
const option = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
};
export const getRandomPrompt=()=>{
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    return surpriseMePrompts[randomIndex];
}

export const downloadImage=async(_id,photo)=>{
    const option = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    };
 toast.success("🎉 Download starting...",option)
 FileSaver.saveAs(photo,`download-${_id}.jpg`)
}

export const showToast = (message,type="error")=>{
    
    if (type==="success") {
        toast.success(message, option);
    }else if(type=="warning"){
        toast.warning(message, option);
    }else{
        toast.error(message, option);
    }
    
}

export const copy=(text)=>{
    navigator.clipboard.writeText(text);
    toast.success('Copied Prompt',option);
}