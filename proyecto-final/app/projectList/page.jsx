'use client'
import { ListProjects } from '@/app/utils/Projects';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function ProjectList() {

    const searchParams = useSearchParams()
    const router = useRouter()


    const idClient = searchParams.get('idclient')
    const [projectLenght, setprojectLenght] = useState(null)
    useEffect(() => {


        const token = localStorage.getItem('jwt')

        ListProjects(token).then((projects) => {
            setprojectLenght(projects)
            console.log(projects);
        })


    }, [])
    if (projectLenght == null) {
        return (
            <>
                <Navbar />
                <p>Cargando ..</p>
            </>
        )
    } else if (projectLenght.length == 0) {
        router.push('/createProject?idclient=' + idClient)
    } else {
        return (
            <>
                <Navbar />

                <h1 className='font-bold text-2xl flex flex-col items-center justify-center  w-screen p-3'>Lista de  proyectos</h1>
                <ul>
                    {projectLenght.map((project) => {
                        return <li key={project._id}>
                            <div className='flex flex-col items-center p-3'>
                                <p>Nombre: {project.name}</p>
                                <p>Código del Proyecto: {project.projectCode}</p>
                                <p>Dirección: {project.address.street} ,{project.address.number}</p>
                                <p>Código Postal: {project.address.postal}</p>
                                <Link className='text-orange-600 font-bold text-base flex flex-col items-center justify-center w-screen p-1' href={"/projects/" + project._id + "?idclient=" + idClient} >Ir al Proyecto</Link>
                                <Link className='text-orange-600 font-bold text-base flex flex-col items-center justify-center w-screen p-1' href={"/deliveryNoteList?idproyect=" + project._id + "&idclient=" + idClient} >Ir a la Lista de Albaranes</Link>
                                <Link className='text-orange-600 font-bold text-base flex flex-col items-center justify-center w-screen p-1' href={"/createDeliveryNote?idproyect=" + project._id + "&idclient=" + idClient} >Crear un Albarán</Link>
                            </div>
                        </li>
                    })}
                </ul>
            </>
        )
    }

}