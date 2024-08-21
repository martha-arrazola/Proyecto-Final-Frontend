"use client"

const { useEffect, useState } = require("react");
import { GetProject } from "@/app/utils/Projects"
import Navbar from '../../components/Navbar';
import Link from "next/link";
import { useSearchParams } from 'next/navigation';


export default function Project({ params }) {

    const searchParams = useSearchParams()

    const idClient = searchParams.get('idclient')


    const [data, setData] = useState("");
    useEffect(() => {

        const token = localStorage.getItem('jwt')
        GetProject(token, params.id).then((data) =>
            setData(data)
        )
    }

        , [])

    if (data == "") {

        return (
            <>
                <Navbar />
                <p>"Cargando"</p>
            </>
        )
    } else {
        return (<>
            <Navbar />
            <div>
                <p>Nombre: {data.name}</p>
                <p>Código del Proyecto: {data.projectCode}</p>
                <p>Dirección: {data.address.street} ,{data.address.number}</p>
                <p>Código Postal: {data.address.postal}</p>


            </div>
            <Link href={"/projectList?idclient=" + idClient} >Volver a la lista de proyectos</Link >
        </>
        )
    }


}

