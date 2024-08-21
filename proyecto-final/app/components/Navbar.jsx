import Link from 'next/link'
import './Navbar.css'

export default function Navbar() {
    //<nav className="navbar py-5">
    //</nav><nav className='bg-slate-400 mb-4 flex justify-between items-center px-20 p-3 font-bold text-black'>
    return (
        <nav className='navbar '>


            <ul>


                <li>
                    <Link href="/login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link href="/register">
                        Regístrate
                    </Link>
                </li>
                <li>
                    <Link href="/clientsList">
                        Lista de Clientes
                    </Link>
                </li>
                <li>
                    <Link href="/createClient">
                        Crear Clientes
                    </Link>
                </li>


               


            </ul>
        </nav>
    )
}