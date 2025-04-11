import { useLocation } from "react-router-dom"
import useFetchCourses from "../../hooks/useFetchCourses";

const EstudianteCard = () => {

    const location = useLocation(); 
    const param = new URLSearchParams(location.search);
    const cursoId = param.get("curso");
    
    const {cursos, isLoading} = useFetchCourses(); 
    const curso = cursos.find((curso) => curso.id.toString() === cursoId); 
  
  return (
    <div>
        { isLoading 
        ? ( 
          <p>Cargando...</p>
        )
        : (
          <div>
            {curso 
              ? (
                <div>
                  <h3>Estudiantes del curso {curso.nombre}</h3>
                  {curso.estudiantes.map((estudiante) => (
                    <div key={estudiante.id}>
                      <h4>{estudiante.nombre}</h4>
                      <p>Edad: {estudiante.edad}</p>
                    </div>
                  ))}
                </div>
              )
              : (
                <p>No se encontró el curso</p>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default EstudianteCard
