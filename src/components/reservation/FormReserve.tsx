
import { Button, DatePickerDemo, Input, SelectScrollable } from '@/components'

export const FormReserve = () => {
    return (
        <form className=' flex flex-col xl:grid xl:grid-cols-2 gap-y-6 gap-x-6 mt-6'>
            <Input className='mt-2 ' type='text' placeholder='Nombre' />
            <Input className='mt-2 ' type='text' placeholder='Apellido' />
            <Input className='mt-2 ' type='number' placeholder='Telefono' />
            <Input className='mt-2 ' type='number' placeholder='Asistentes' />
            <SelectScrollable  />
            <DatePickerDemo />
            <Button className='col-span-2' variant='orange' size='full'>Reservar una mesas</Button>
        </form >
    )
}
