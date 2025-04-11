import { useEffect, useState } from "react"
import { ICursoProps } from "../types/types"
import { getCourses } from "../http/api"

const useFetchCourses = () => {

    const [cursos, setCursos] = useState<ICursoProps[]>([]) 
    const [isLoading, setIsLoading] = useState(true); 
    
    useEffect(()=>{
        (async()=>{
            setIsLoading(true); 
            const res = await getCourses();
            if(res){
                setCursos(res)
                setIsLoading(false);
            }
        })() 
    },[])

    return {
        cursos,
        setCursos,
        isLoading,
        setIsLoading
    }
}

export default useFetchCourses
