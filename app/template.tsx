'use client'
import PageTransition from "@/components/animations/pageTransition";
import { useEffect } from "react";

export default function Template({children}:{children:React.ReactNode}){
   useEffect(()=>{
    PageTransition();
   },[])
   return(
    <div className="relative min-h-screen">
        {children}
    </div>
   )
}
