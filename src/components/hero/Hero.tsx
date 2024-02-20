'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'
import { Button } from '@/components'
export const Hero = () => {
    return (

        <section   id="Home" className="bg-hero bg-no-repeat bg-cover m-auto w-full xl:h-[74rem] h-[50rem] xl:py-0 relative -top-1 ">
            <div className=" flex flex-col xl:flex-row items-center justify-center py-44  pb-32 gap-x-6">
                <div className="p-5 xl:px-16 flex flex-col gap-y-6 items-center text-center xl:text-left xl:items-start">
                    <motion.article
                        className="flex flex-col gap-2 justify-center"
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.4 }}>

                        <h1 className="font-poppins text-white">Diferentes sabores</h1>
                        <span className="text-orange-300 font-poppins text-xl uppercase">Grandes experiencias!</span>
                    </motion.article>

                    <motion.article
                        className="flex flex-col items-center xl:items-start"
                        variants={fadeIn('down', 0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.4 }}>
                        <p className="text-white text-[1.1rem] w-[95%] leading-7 xl:text-xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry standard dummy text ever since the 1500s
                        </p>
                        <Button className="mt-7" variant={"orange"} > Dusfrutalo! </Button>
                    </motion.article>
                </div>
                <motion.article
                    className=" xl:block hidden mx-auto justify-end pr-8"
                    variants={fadeIn('up', 0.6)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.4 }}>
                    <Image className="w-[15rem] xl:w-[60rem]" src='/empanadas.png' width={400} height={400} alt=" pizza options" />
                </motion.article>
            </div>
            <motion.article
                className=" relative xl:top-[1rem] xl:-left-[5.5rem] xl:block hidden"
                variants={fadeIn('up', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}>
                <Image src='/pizza.png' width={400} height={400} alt="coffee" />
            </motion.article>
        </section>
    )
}
