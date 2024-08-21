'use client'

import { ListClients } from '@/app/utils/clients';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

export default function ClientsList() {

    const [clientLength, setClientsLength] = useState(null)

    const router = useRouter()
    useEffect(() => {


        const token = localStorage.getItem('jwt')

        ListClients(token).then((clients) => {
            setClientsLength(clients)
            console.log(clients);
        })


    }, [])


    if (clientLength == null) {

        return (
            <>
                <Navbar />
                <p>Cargando ..</p>
            </>
        )

    } else if (clientLength.length == 0) {
        router.push('/createClient')
    } else {
        return (

            <>
                <Navbar />
                <h1 className='font-bold text-2xl flex flex-col items-center justify-center w-screen p-3'>Listado de  clientes</h1>
                <ul>
                    {clientLength.map((client) => {
                        return <li key={client._id}>
                            <div className='flex flex-col items-center p-3'>
                                <p>Nombre: {client.name}</p>
                                <p>CIF: {client.cif}</p>
                                <p>Dirección: {client.address.street} ,{client.address.number}</p>
                                <p>Código Postal: {client.address.postal}</p>
                                <Link className='text-orange-600 font-bold text-lg flex flex-col items-center justify-center w-screen p-1' href={"/clients/" + client._id} >Ir a cliente</Link>

                                <Link className='text-orange-600 font-bold text-lg flex flex-col items-center justify-center w-screen p-1' href={"/projectList?idclient=" + client._id} >Ir a los proyectos del cliente</Link>

                                <Link className='text-orange-600 font-bold text-lg flex flex-col items-center justify-center w-screen p-1' href={"/createProject?idclient=" + client._id} >Crear un proyecto del cliente</Link>
                            </div>
                        </li>
                    })}
                </ul>
            </>
        )
    }
}