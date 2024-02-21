import Link from 'next/link'
import { Input, Textarea } from '@/components'
import { ImFacebook, ImInstagram, ImTwitter, ImYoutube } from 'react-icons/im'
import { IoLogoTiktok } from "react-icons/io5";


export const Footer = () => {
    return (
        <section id='Contact' className=' bg-hero xl:bg-footer w-full bg-cover bg-no-repeatm-auto h-fit '>

            <div className='grid xl:grid-cols-5 grid-cols-2 justify-items-center text-white xl:gap-y-24 gap-5 py-5 p-5 '>

                <article className='xl:col-start-2 xl:col-end-3 row-start-1 col-start-1 col-end-3 xl:justify-self-end justify-self-start xl:w-[17rem] w-full'>
                    <h3 className='py-5'>ENCUENTRANOS</h3>
                    <div>
                        <p> Majadahonda, Ma  0drid, Spain 28222</p><br />
                        <p>Lorem Ipsum is simply dummy text of the printing and</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and</p>
                        <br />
                        <p className='hidden xl:block'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type ClassValue.
                        </p>
                    </div>
                </article>

                <article className=' col-start-1 col-end-3 xl:col-start-3 xl:col-end-4  row-start-2 xl:row-start-1'>
                    <h3 className='py-5'>FAQ</h3>
                    <ul className='flex xl:flex-col flex-wrap gap-4 xl:uppercase'>
                        <li className='hover:text-orange-300'><Link href='#'>Politicas de Privaciodad</Link></li>
                        <li className='hover:text-orange-300'><Link href='#'>Preguntas Frecuentes</Link></li>
                        <li className='hover:text-orange-300'><Link href='#'>Libro de Quejas</Link></li>
                        <li className='hover:text-orange-300'><Link href='#'>Carreras</Link></li>
                        <li className='hover:text-orange-300'><Link href='#'>Cookies</Link></li>
                        <li className='hover:text-orange-300'><Link href='#'>Novedades</Link></li>
                        <li className='hover:text-orange-300'><Link href='#'>Membresias</Link></li>
                        <li className='hover:text-orange-300'><Link href='#'>Blog</Link></li>
                    </ul>
                </article>


                <article className=' justify-self-center xl:justify-self-start  xl:col-start-4 xl:col-end-5 col-start-1 col-end-3 xl:row-start-1 row-start-3'>
                    <h3 className='py-5'>CONTACTO</h3>
                    <div className='flex flex-col gap-5'>
                        <input className=' h-[3rem]  xl:w-[18rem] w-[22rem]  bg-white/10 border border-white/10 px-6 py-2 text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-300/80 disabled:cursor-not-allowed disabled:opacity-50' type="text" placeholder='Nombre' />

                        <input className=' h-[3rem] xl:w-[18rem] w-[22rem] bg-white/10 border border-white/10 px-6 py-2 text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-300/80 disabled:cursor-not-allowed disabled:opacity-50' type="text" placeholder='Telefono' />

                        <textarea className=' h-[10rem] xl:w-[18rem] bg-white/10 border border-white/10 px-6 py-2 text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-300/80 disabled:cursor-not-allowed disabled:opacity-50' name="" id="" cols={30} rows={10}></textarea>

                    </div>
                </article>

                <article className=' text-center xl:text-start xl:w-[17rem] row-start-4 xl:row-start-1 col-start-1 col-end-3 xl:col-start-5 xl:col-end-6'>
                    <h3 className='py-5'>REDES SOCIALES</h3>
                   
                    <ul className='flex gap-10 text-[1.6rem]'>
                        <ImInstagram />
                        <ImFacebook />
                        <ImTwitter />
                        <ImYoutube/>
                        <IoLogoTiktok />

                    </ul>
                    <br />
                    <p className='hidden xl:block'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        when an unknown printer took a galley of type and scrambled it to make a type hen an unknown printer took a galley of.
                    </p>
                </article>
                <article className='xl:text-lg text-[0.9rem] xl:col-start-3 xl:col-end-5 col-start-1 col-end-3 row-start-5 xl:row-start-2'>
                    <span>Desarrollado por K&B Studios</span>
                    <span className='text-white'> || </span>
                    <span>© {new Date().getFullYear()}</span>
                    <span className='text-white'> || </span>
                    <span>Lavicca</span>
                </article>

            </div>


        </section >
    )
}
