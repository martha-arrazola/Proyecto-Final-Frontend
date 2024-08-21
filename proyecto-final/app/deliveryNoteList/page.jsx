'use client'
import { ListDeliveryNote } from '@/app/utils/deliveryNote';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';


export default function DeliveryNoteList() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const idClient = searchParams.get('idclient')


    const idproject = searchParams.get('idproyect')

    const [deliveryNoteLenght, setdeliveryNoteLenght] = useState(null)
    useEffect(() => {


        const token = localStorage.getItem('jwt')

        ListDeliveryNote(token).then((deliveryNotes) => {
            setdeliveryNoteLenght(deliveryNotes)

        })


    }, [])


    //console.log(deliveryNoteLenght.length);
    if (deliveryNoteLenght == null) {
        return (
            <>
                <Navbar />
                <p>Cargando ..</p>
            </>
        )
    } else if (deliveryNoteLenght.length == 0) {
        router.push('/createDeliveryNote?idclient=' + idClient + '&idproyect=' + idproject)
    } else {
        return (
            <>
                <Navbar />

                <h1 className='font-bold text-2xl flex flex-col items-center justify-center w-screen p-3'>Lista de  Albaranes</h1>
                <ul>
                    {deliveryNoteLenght.map((deliveryNote) => {
                        console.log(deliveryNote._id);
                        return <li key={deliveryNote._id}>
                            <div className='flex flex-col items-center p-3'>
                                <p>Formato: {deliveryNote.format}</p>
                                <p>Horas: {deliveryNote.hours}</p>
                                <p>Descripción: {deliveryNote.description}</p>
                                <p>Firma: {deliveryNote.sign}</p>
                                <p>Pendiente: {deliveryNote.pending}</p>
                                <Link className='text-orange-600 font-bold text-lg flex flex-col items-center justify-center w-screen p-1' href={"/deliverynote/" + deliveryNote.projectId._id} >Ir al Albarán</Link>
                                <Link className='text-orange-600 font-bold text-lg flex flex-col items-center justify-center w-screen p-1' href={"/createDeliveryNote?iddelivery=" + idproject + "&idClient=" + idClient} >Crear Albarán</Link>
                            </div>
                        </li>
                    })}
                </ul>
            </>
        )

    }
}


