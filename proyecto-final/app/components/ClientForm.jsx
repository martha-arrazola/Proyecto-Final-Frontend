'use client'
import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form';  // npm install react-hook-form
import { CreateClient } from '@/app/utils/clients'


export default function LoginForm() {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const router = useRouter()


    const onSubmit = async (data) => {
        const token = localStorage.getItem('jwt')
        const res = await CreateClient(token, { name: data.name, cif: data.cif, address: { street: data.street, number: data.number, postal: data.zip } })
        console.log(res);
        if (res._id) {
            router.push('/PopupClientCreated')




        } else {
            throw new Error('Failed to match code.')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <h1 className={"mb-3 text-2xl text-black"}>
                    Crear un nuevo cliente
                </h1>

                <div className="w-full">
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="name"
                        >
                            Nombre
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 text-gray-500"
                                type="text"
                                id="name"
                                {...register('name', { required: true, maxLength: 60 })}
                            />
                            {errors.name?.type === 'required' && "Nombre es requerido"}
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="cif"
                        >
                            CIF
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2text-gray-500"
                                type="text"
                                id="cif"
                                {...register('cif', { required: true, minLength: 9 })}
                            />
                            {errors.cif?.type === 'required' && "CIF es requerido"}
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="street"
                        >
                            Calle/Avenda
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2text-gray-500"
                                type="text"
                                id="street"
                                {...register('street', { required: true, minLength: 2 })}
                            />
                            {errors.street?.type === 'required' && "La calle es requerida"}
                        </div>
                    </div>


                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="number"
                        >
                            Número
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2text-gray-500"
                                type="text"
                                id="number"
                                {...register('number', { required: true, minLength: 1 })}
                            />
                            {errors.number?.type === 'required' && "El número es requerido"}
                        </div>
                    </div>



                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="zip"
                        >
                            Código Postal
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2text-gray-500"
                                type="text"
                                id="zip"
                                {...register('zip', { required: true, minLength: 5 })}
                            />
                            {errors.zip?.type === 'required' && "El código postal es requerido"}
                        </div>
                    </div>


                </div>
                <input className="mt-4 w-full" type="submit" />
            </div>
        </form>
    )
}