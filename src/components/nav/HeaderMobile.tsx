'use client'

import { useState } from "react"

import Image from "next/image"
import Link from "next/link"
import { Link as ScrollLink } from 'react-scroll';

import { Button } from '@/components'
import { LinksMenu } from "@/lib"

import { RiMenu2Line, RiHome2Fill } from "react-icons/ri"
import { IoCloseOutline } from "react-icons/io5"
import { BiSolidFoodMenu } from "react-icons/bi"
import { FaUsers, FaEnvelope } from "react-icons/fa"

const LinkIconMenu: LinksMenu = [
  { path: 'Home', name: 'Home', offset: 0, icon: <RiHome2Fill /> },
  { path: 'Menu', name: 'Menu', offset: 0, icon: <BiSolidFoodMenu /> },
  { path: 'About', name: 'About', offset: -50, icon: <FaUsers /> },
  { path: 'Contact', name: 'Contact', offset: 0, icon: <FaEnvelope /> },
]

export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="xl:hidden">
      <div className="cursor-pointer outline-none" onClick={() => setIsOpen(!isOpen)}>
        <RiMenu2Line size={30} className="transition-all duration-300" />
      </div>
      <aside className={`${isOpen ? 'right-0' : '-right-full'} bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500 xl:hidden r`}>
        <div className="flex justify-between items-cente">
          <div className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <IoCloseOutline size={30} />
          </div>
          <Link className="flex items-center" href='/'>
            <Image src='/logo.svg' width={70} height={70} alt="logo" />
          </Link>
        </div>
        <ul className="flex flex-col items-start mt-[5rem] ml-[4rem]">
          {LinkIconMenu.map((links, key) => (
            <li key={key} >
              <div className="flex items-center jus gap-5 w-full ">
                <span className="text-3xl">{links.icon}</span>
                <ScrollLink to={links.path} smooth={true} spy={true} offset={links.offset} duration={500} href={links.path} >
                  <h2 onClick={() => setIsOpen(false)}>
                    {links.name}
                  </h2>
                </ScrollLink>
              </div>
            </li>
          ))}

          <ScrollLink to="Reservation" smooth={true} spy={true} offset={-50} duration={500} className=" w-full xl:flex justify-end mt-16">

            <Button  onClick={() => setIsOpen(false)} size='sm'>Reservar una mesa</Button>

          </ScrollLink>
        </ul>

      </aside>
    </section>
  )
}
