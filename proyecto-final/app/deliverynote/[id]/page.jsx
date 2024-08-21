"use client"

const { useEffect, useState } = require("react");
import { GetDeliveryNote } from "@/app/utils/deliveryNote"
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function DeliveryNote({ params }) {

    const [data, setData] = useState(null);


    useEffect(() => {

        const token = localStorage.getItem('jwt')
        GetDeliveryNote(token, params.id).then((data) => {

            setData(data)
        })
    }

        , [])
    console.log(data);
    if (data == null) {
        return <p>"Cargando"</p>
    } else {

        return (
            <>
                <Navbar />
                <div className="p-10 rounded-md text-black">


                    <p>Formato: {data[1].format}</p>
                    <p>Descripción: {data[1].description} </p>
                    <p>Material: {data[1].material}</p>
                    <p>Horas: {data[1].hours}</p>
                    <p>Fecha: {data[1].workdate}</p>


                </div>
                <div>
                </div>  <Link className='text-orange-600 font-bold text-lg flex flex-col  justify-center w-screen p-1' href={"/deliveryNoteList?idclient=" + data[0].clientId + "&idproyect=" + data[1].projectId} >Volver</Link >

            </>
        )
    }


}

