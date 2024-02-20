import Link from 'next/link'
import { Input, Map, Textarea } from '@/components'


export const Footer = () => {
    return (
        <div id='Contact' className=' bg-hero xl:bg-footer w-full bg-cover bg-no-repeatm-auto h-[34rem] xl:h-fit '>
            <section className='grid xl:grid-cols-5 grid-cols-3 w-full gap-y-10 pt-10 px-4 relative  justify-items-end xl:justify-items-center text-white'>

                <article className='xl:col-start-2 col-start-1 col-end-2'>
                    <h3 className='py-3'>ENCUENTRANOS</h3>
                    <div className=' xl:hidden block' >
                        <p> Majadahonda, Ma  0drid, Spain 28222</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and</p>
                    </div>
                    <div className='hidden xl:block'>
                        <Map />
                    </div>
                </article>

                <article className='xl:col-start-3 xl:row-start-1 '>
                    <h3 className='py-3'>FAQ</h3>
                    <ul className='flex flex-col gap-4 xl:uppercase'>
                        <li className='hover:text-orange-300'><Link href='#'>Politicas de Privaciodad</Link></li>
                        <li className='hover:text-orange-300'><Link href='#'>Preguntas Frecuentes</Link></li>
                        <li className='hover:text-orange-300'><Link href='#'>Libro de Quejas</Link></li>
                        <li className='hover:text-orange-300'><Link href='#'>Carreras</Link></li>
                        <li className='hover:text-orange-300'><Link href='#'>Cookies</Link></li>
                    </ul>
                </article>

                <article className='xl:flex hidden flex-col gap-2'>
                    <h3 className='py-3'>CONTACTO</h3>
                    <div className='flex flex-col gap-5'>
                        <Input placeholder='Nombre'></Input>
                        <Input placeholder='Telefono'></Input>
                        <Textarea placeholder='nombre'></Textarea>
                    </div>
                </article>

                <article>
                    <h3 className='py-3'>REDES SOCIALES</h3>
                    <ul className='flex flex-col gap-4 xl:uppercase'>
                        <li className='hover:text-black'><Link href='#'>instagram</Link></li>
                        <li className='hover:text-black'><Link href='#'>tick tock</Link></li>
                        <li className='hover:text-black'><Link href='#'>facebook</Link></li>
                        <li className='hover:text-black'><Link href='#'>youtube</Link></li>
                        <li className='hover:text-black'><Link href='#'>twiteer</Link></li>
                    </ul>
                </article>
                <article className='flex  pb-6 ext-xl xl:text-lg gap-2 xl:col-span-7 col-span-5 xl:items-end items-start xl:justify-between justify-item-start m-auto w-[500px] mt-10 text-white xl:col-start-2'>

                    <span>Desarrollado por K&B Studios</span>
                    <span className='text-white'> || </span>
                    <span>© {new Date().getFullYear()}</span>
                    <span className='text-white'> || </span>

                    <span>Lavicca</span>
                </article>
            </section>

        </div>
    )
}
