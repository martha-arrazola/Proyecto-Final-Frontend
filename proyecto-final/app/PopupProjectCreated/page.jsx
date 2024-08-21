
'use client'

import Navbar from '../components/Navbar';
import Popup from '../components/Popup';
import Link from 'next/link';

import { useSearchParams } from 'next/navigation';
export default function PopupProjectCreated() {
    const searchParams = useSearchParams()

    const idClient = searchParams.get('idclient')
    console.log(idClient)
    return (
        <>
            <Navbar />
            <Popup text={"¡Proyecto creado y guardado con éxito!"} />
            <Link className='text-orange-600 font-bold text-lg flex flex-col items-center justify-center w-screen p-1' href={"/projectList?idclient=" + idClient} >Ir a la Lista de Proyectos</Link>

        </>

    )
}