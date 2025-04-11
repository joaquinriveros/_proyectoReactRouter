import { Link } from "react-router-dom"
import useFetchCourses from "../../hooks/useFetchCourses"

const CursoCard = () => {

    const {cursos} = useFetchCourses(); 
    
    return (
        <div>
            {cursos.map((curso)=>{
                return(
                    <div key={curso.id}>
                        <h3>{curso.nombre}</h3>
                        <p>Estudiantes: {curso.estudiantes.length}</p>
                        <button>
                            <Link to={{
                                pathname:`/estudiantes`, 
                                search:`?curso=${(curso.id.toString())}`, 
                                }}>Ver curso
                            </Link>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default CursoCard
