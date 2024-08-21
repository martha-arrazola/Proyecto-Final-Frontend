"use client"

import ProjectForm from '../components/ProjectForm';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../components/Navbar';


export default function createProject() {


    const searchParams = useSearchParams()

    const idClient = searchParams.get('idclient')
    console.log(idClient)
    return (
        <>
            <Navbar />
            <ProjectForm idClient={idClient} />

        </>

    )
}