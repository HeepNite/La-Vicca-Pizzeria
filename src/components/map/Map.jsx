'use client'

import { useMediaQuery } from 'react-responsive'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'

import 'leaflet/dist/leaflet.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'
import Image from 'next/image'


/* const markers = [
    {
        position: [34.052235, -118.243683],
        title: 'Location 1',
        subtitle: 'lorem Ipsum dolor sit amert',
        imagen: '/map/1.png'
    },
    {
        position: [33.052235, -128.243683],
        title: 'Location 1',
        subtitle: 'lorem Ipsum dolor sit amert',
        imagen: '/map/2.png'
    }
] */



export const Map = () => {
    const position = [34.052235, -118.243683]

    const customIcon = new Icon({
        iconUrl: '/pin-solid.svg',
        iocnSize: [40, 40],
       
    
    })
    const isMobile = useMediaQuery({
        query:'(max-width:768px)'
    })

    return (
        <MapContainer center={position} zoom={10} zoomControl={false} className='xl:h-[14rem] xl:w-[15rem] h-[14rem] w-[20rem]' >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position} icon={customIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}
