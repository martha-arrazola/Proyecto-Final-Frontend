"use client"

import DeliveryNoteForm from '../components/DeliveryNoteForm';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../components/Navbar';


export default function createDeliveryNote() {


    const searchParams = useSearchParams()

    const idclient = searchParams.get('idclient')
    const idproyect = searchParams.get('idproyect')
    
    return (
        <>
            <Navbar />
            <DeliveryNoteForm  idclient={idclient} idproyect={idproyect} />

        </>

    )
}