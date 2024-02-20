'use client'

import { MenuItem } from "@/lib"
import Image from "next/image"
import { IoArrowForward } from "react-icons/io5"
import { motion } from 'framer-motion';
import { fadeIn } from "../../../variants";


const menuItems: MenuItem = [
    {
        img: '/menu/item-1.png',
        name: 'lorem Ipsum',
        price: 30.50,
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        souldOut: false
    },
    {
        img: '/menu/item-2.png',
        name: 'lorem Ipsum',
        price: 50.50,
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        souldOut: false
    },
    {
        img: '/menu/item-3.png',
        name: 'lorem Ipsum',
        price: 20.50,
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        souldOut: false
    },
    {
        img: '/menu/item-4.png',
        name: 'lorem Ipsum',
        price: 10.50,
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        souldOut: false,
        promoDisc: 10
    }
]

export const Menu = () => {
    return (
        <section id="Menu" className="w-full bg-no-repeat h-[95vh] flex relative -top-[0.3rem] ">
      
            <div className=" xl:w-[82.7%] relative xl:top-[15rem] top-16 px-5 xl:pl-10">
                <div className="xl:w-[90%] xl:m-auto">
                    <motion.article className=" flex flex-col gap-2"
                         variants={fadeIn('right', 0.6 )}
                         initial='hidden'
                         whileInView={'show'}
                         viewport={{ once: false, amount: 0.4 }}>
                        <h3 className="capitalize xl:text-4xl">
                            Los mas elegidos
                        </h3>
                        <span className="uppercase text-xl text-green-800/80">
                            Ver Todos
                        </span>
                        <IoArrowForward size={22} className="text-green-800/80" />
                    </motion.article>
                    <article className='py-10'>
                        <motion.ul className="grid grid-cols-2 xl:grid-cols-4 gap-6 bg-none w-full items-center justify-center"
                        variants={fadeIn('right', 0.6 )}
                         initial='hidden'
                         whileInView={'show'}
                         viewport={{ once: false, amount: 0.4 }}>
                            {menuItems.map((item, key) => (
                                <li className="flex flex-col gap-5" key={key}>
                                    <div className="overflow-hidden rounded-xl">
                                        <Image className="xl:w-[25rem] shadow-xl rounded-xl hover:scale-110 transition-all duration-300 " src={item.img} width={300} height={300} alt={item.name} />
                                    </div>
                                    <span className="text-2xl text-orange-700/80" >{item.name}</span>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">${item.price.toFixed(2)}</span>
                                        {item.promoDisc && <span className="bg-orange-300 font-bold px-3 py-0.5 rounded-[0.25rem]">% {item.promoDisc}</span>}
                                    </div>
                                    <p className="hidden xl:block">{item.desc.substring(0, 100)}...</p>
                                    <p className="xl:hidden block">{item.desc.substring(0, 70)}...</p>
                                </li>
                            ))}
                        </motion.ul>
                    </article>
                </div>
            </div>
            <div className="xl:block hidden bg-menu bg-no-repeat bg-cover w-[21rem] self-stretch "></div>
        </section>

    )
}
