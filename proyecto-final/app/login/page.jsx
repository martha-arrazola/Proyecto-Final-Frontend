'use client'
import LoginForm from '@/app/components/LoginForm';

import { useRouter } from 'next/navigation';
export default function RegisterPage() {
    const router = useRouter()
    const token = localStorage.getItem('jwt')
    if (token == null) {
        return (
            <main className="flex items-center justify-center md:h-screen">
                <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 text-gray-900">
                    <LoginForm />
                </div>
            </main>
        );
    } else {
        router.push('/clientsList')
    }

}