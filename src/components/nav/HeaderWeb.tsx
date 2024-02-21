'use client'
import { LinksMenu } from '@/lib';
import { Link as ScrollLink } from 'react-scroll';



const linksMenu: LinksMenu = [
    { path: 'Home', name: 'Home', offset: -50 },
    { path: 'Menu', name: 'Menu', offset: -50 },
    { path: 'About', name: 'About', offset: -150 },
    { path: 'Contact', name: 'Contact', offset: -50 },
];


export const HeaderWeb = () => {

    return (
        <nav className="flex justify-between w-[50rem] gap-x-4 ">
        <ul className="flex justify-between w-full">
             {linksMenu.map((links, index) => (
        <ScrollLink to={links.path} smooth={true} spy={true} offset={links.offset} duration={500} href={links.path} key={index} className="hover:bg-orange-300 hover:rounded-xl rounded-xl hover:text-black transition-all duration-200 p-3">
            {links.name}
        </ScrollLink>
    ))}
    
        </ul>
    </nav>
    )
}