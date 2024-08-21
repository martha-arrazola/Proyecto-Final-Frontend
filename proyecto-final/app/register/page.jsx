'use client'

import RegisterForm from '@/app/components/RegisterForm';
import Navbar from '../components/Navbar';

export default function RegisterPage() {
    const token = localStorage.getItem('jwt')



    return (
        <>

            {(token == null)? null :  <Navbar />}
            <main className="flex items-center justify-center md:h-screen">
                <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 text-gray-900">
                    <RegisterForm />
                </div>
            </main>

        </>

    );
}