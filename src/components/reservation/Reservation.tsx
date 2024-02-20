'use client'
import { fadeIn } from "../../../variants";
import { FormReserve } from "./FormReserve"
import { motion } from 'framer-motion';

export const Reservation = () => {
    return (
        <section id="Reservation" className="w-full overflow-hidden relative top-[20rem] xl:top-[2rem] flex flex-col items-center xl:items-end xl:justify-end">
            <motion.article 
            className=" bg-black text-white w-[30rem] h-[45rem] xl:h-[35rem] z-30 xl:w-[40rem] absolute left-0 xl:left-[25rem] ml-6 xl:top-[10rem] top-[15rem] p-10 flex flex-col"
            variants={fadeIn('right', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6}}>
                <h2>Visitanos! </h2>
                <span className="uppercase px-2 text-orange-300">Reservaciones</span>
                <FormReserve />

            </motion.article>
            <motion.article
                className="bg-reservation xl:w-[900px] xl:h-[45rem] w-[600px] h-[55rem] mt-[10rem] xl:mt-24 top-0 rigth-0"
                variants={fadeIn('left', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }} />
        </section>
    )
}
