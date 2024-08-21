'use client'


import { useForm } from 'react-hook-form';  // npm install react-hook-form
import { CreateDeliveryNote } from '@/app/utils/deliveryNote'
import { useRouter } from 'next/navigation';


export default function DeliveryNoteForm({ idclient, idproyect }) {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const router = useRouter()


    const onSubmit = async (data) => {
        const token = localStorage.getItem('jwt')
        const date = new Date(data.workdate)
        const dateformat = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

        const res = await CreateDeliveryNote(token, { clientId: idclient, projectId: idproyect, format: data.format, material: data.material, hours: data.hours, description: data.description, workdate: dateformat })
        console.log(res);
        if (res._id) {
            router.push('/PopupDeliveryNoteCreated?idclient=' + idclient + '&idproyect=' + idproyect)

        } else {
            throw new Error('Failed to match code.')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <h1 className={"mb-3 text-2xl text-black"}>
                    Crear un nuevo Albarán
                </h1>

                <div className="w-full">

                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="format"
                        >
                            Formato
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 text-gray-500"
                                type="text"
                                id="format"
                                {...register('format', { required: true, maxLength: 60 })}
                            />
                            {errors.format?.type === 'required' && "El formato es requerido"}
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="material"
                        >
                            Material
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2text-gray-500"
                                type="text"
                                id="material"
                                {...register('material', { required: true, minLength: 2 })}
                            />
                            {errors.cif?.type === 'required' && "Material es requerido"}
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="hours"
                        >
                            Horas
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2text-gray-500"
                                type="number"
                                id="hours"
                                {...register('hours', { required: true })}
                            />
                            {errors.hours?.type === 'required' && "La hora es requerida"}
                        </div>
                    </div>


                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="description"
                        >
                            Descripción
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2text-gray-500"
                                type="text"
                                id="description"
                                {...register('description', { required: true })}
                            />
                            {errors.description?.type === 'required' && "La descripción es requerida"}
                        </div>
                    </div>



                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="workdate"
                        >
                            Fecha
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2text-gray-500"
                                type="date"
                                id="workdate"
                                {...register('workdate', { required: true, minLength: 6 })}
                            />
                            {errors.workdate?.type === 'required' && "La fecha es requerida"}
                        </div>
                    </div>


                </div>
                <input className="mt-4 w-full" type="submit" />
            </div>
        </form>
    )
}