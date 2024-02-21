"use client"

import Image from "next/image"
import Link from "next/link"

import { useEffect, useState } from "react"

import { Button, HeaderMobile, HeaderWeb } from '@/components'
import { LinksMenu } from "@/lib"
import { Link as ScrollLink } from 'react-scroll';


export const Header = () => {
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                setActive(window.scrollY > 100);
            };
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);



    return (

        <header className={`${active ? 'bg-black text-orange-300  transition-all duration-600' : 'bg-none'} flex justify-between items-center text-lg text-orange-300 fixed top-0 w-full z-50 transition-all duration-200 xl:p-6 p-8`}>
            <section className="w-full flex items-center">
                <Link href='/'>
                    <Image src='/logo.png' width={150} height={150} alt="logo" />
                </Link>
            </section>
            <section className="xl:block hidden">
                <HeaderWeb />
            </section>
            <ScrollLink to="Reservation" smooth={true} spy={true} offset={-50} duration={500} className="hidden w-full xl:flex justify-end">

                <Button size='sm'>Reservar una mesa</Button>

            </ScrollLink>
            <section>
                <HeaderMobile />
            </section>
        </header>
    )
}
