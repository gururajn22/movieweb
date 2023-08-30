import { useEffect, useState } from "react"

const useOnline=()=>{

    const[showOnline,setShowOnline]=useState(true);

    useEffect(()=>{
         window.addEventListener("online",()=>{
            setShowOnline(true);
         });
         window.addEventListener("offline",()=>{
            setShowOnline(false);
         })
    },[])
    return showOnline;
}
export default useOnline;