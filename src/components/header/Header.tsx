"use client"

import Image from "next/image"
import Link from "next/link"

import { useEffect, useState } from "react"

import { Button, HeaderMobile } from '@/components'
import { LinksMenu } from "@/lib"
import { Link as ScrollLink } from 'react-scroll';


export const Header = () => {
    const [active, setActive] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            setActive(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scrol', handleScroll)
        }
    }, [])

    const linksMenu: LinksMenu = [
        { path: 'Home', name: 'Home', offset: -50 },
        { path: 'Menu', name: 'Menu', offset: -50 },
        { path: 'About', name: 'About', offset: -150 },
        { path: 'Contact', name: 'Contact', offset: -50 },
    ];


    return (

        <header className={`${active ? 'bg-black text-orange-300  transition-all duration-600' : 'bg-none'} flex justify-between items-center text-lg text-orange-300 fixed top-0 w-full z-50 transition-all duration-200 xl:p-6 p-8`}>
            <section className="w-full flex items-center">
                <Link href='/'>
                    <Image src='/logo.png' width={150} height={150} alt="logo" />
                </Link>
            </section>
            <section className="xl:block hidden">
                <nav className="flex justify-between w-[50rem] gap-x-4 ">
                    <ul className="flex justify-between w-full">
                         {linksMenu.map((links, index) => (
                    <ScrollLink  to={links.path} smooth={true} spy={true} offset={links.offset} duration={500} href={links.path} key={index} className="hover:bg-orange-300 hover:rounded-xl rounded-xl hover:text-black transition-all duration-200 p-3">
                        {links.name}
                    </ScrollLink>
                ))}
                  
                    </ul>
                </nav>
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
