"use client"

const { useEffect, useState } = require("react");
import { GetClient } from "@/app/utils/clients"
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function Client({ params }) {

    const [data, setData] = useState("");
    useEffect(() => {

        const token = localStorage.getItem('jwt')
        GetClient(token, params.id).then((data) =>
            setData(data)
        )
    }

        , [])

    if (data == "") {
        return <p>"Cargando"</p>
    } else {
        return (
            <>
                <Navbar />
                <div className='flex flex-col items-center p-3'>

                    <p>Nombre: {data.name}</p>
                    <p>CIF: {data.cif}</p>
                    <p>Dirección: {data.address.street} ,{data.address.number}</p>
                    <p>Código Postal: {data.address.postal}</p>
                    <Link className='text-orange-600 font-bold text-base flex flex-col items-center justify-center w-screen p-1' href={"/projectList?idclient=" + data._id} >Ir a los proyectos del cliente</Link>
                    <Link className='text-orange-600 font-bold text-base flex flex-col items-center justify-center w-screen p-1' href="/clientsList"  >Ir a la lista de clientes</Link>
                </div>

            </>
        )
    }


}

