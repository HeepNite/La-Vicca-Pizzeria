'use client'
import { Link } from "react-scroll";

export default function Prueba() {
    return (
        <div className="mt-[20rem]">

            <Link
                className="uppercase cursor-pointer bg-blue-500 p-5 hover:bg-blue-400"
                activeClass="active"
                to="Prueba1"
                spy={true}
                smooth={true}
                duration={250}>
                Go to first element inside container 
            </Link>

            <Link
                className="uppercase cursor-pointer bg-blue-500 p-5 hover:bg-blue-400"
                activeClass="active"
                to="Prueba2"
                spy={true}
                smooth={true}
                duration={250}
             
            >
                Go to second element inside container
            </Link>


      
        </div>
    )
}