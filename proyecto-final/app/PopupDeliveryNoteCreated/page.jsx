'use client'

import Navbar from '../components/Navbar';
import Popup from '../components/Popup';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
export default function PopupDeliveryNoteCreated() {
    const searchParams = useSearchParams()

    const idClient = searchParams.get('idclient')
    const idproyect = searchParams.get('idproyect')
    return (
        <>
            <Navbar />
            <Popup text={"¡El albarán se ha creado y guardado con éxito!"} />
            <Link className='text-orange-600 font-bold text-lg flex flex-col items-center justify-center w-screen p-1' href={"/deliveryNoteList?idproyect=" + idproyect + '&idclient=' + idClient} >Ir a la Lista de Albaranes</Link>
        </>

    )
}