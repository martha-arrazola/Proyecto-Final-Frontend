/* 'use client'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()
  const token = localStorage.getItem('jwt')
  if (token == null) {
    router.push('/login')
  } else {
    router.push('/clientsList')
  }

}*/
'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('jwt');

    if (token == null) {
      router.push('/login');
    } else {
      // Verifica la validez del token aquí
      router.push('/clientsList');
    }
  }, []);

  return <div>Loading...</div>; // Muestra un indicador de carga mientras se verifica el token
}