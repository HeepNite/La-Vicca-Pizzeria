'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

export const About = () => {
    return (
        <section id='About' className=" xl:mt-[0rem] xl:top-[11rem] top-[13rem] my-[10rem] overflow-hidden relative flex">

            <div className=" hidden xl:block bg-reservation-bard bg-no-repeat bg-cover w-[25.45rem] self-stretch "/>

            <div className="w-full flex gap-10 pb-[5rem]  xl:justify-end">
                <motion.div
                    variants={fadeIn('right', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.6 }}
                    className='hidden xl:block'
                    >   
                    <Image src='/about/img.png' width={600} height={300} alt='about' />
                </motion.div>
                <motion.article
                    className="xl:w-[49.50%]  flex flex-col items-start xl:items-end  p-7 xl:pr-5"
                    variants={fadeIn('left', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h2>Hablemos de Lavicca</h2>
                    <p className='xl:text-right'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <br />
                    <p className='xl:text-right'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        The standard chunk of Lorem Ipsum used since the 1500s </p>
                </motion.article>
            </div>
        </section>
    )
}
