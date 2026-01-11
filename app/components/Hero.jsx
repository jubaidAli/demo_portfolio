'use client'

import Image from "next/image"
import {heroIcons} from '@assets'
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion"
import { useState } from "react"

const Hero = () => {
    const [windowOffset, setWindowOffset] = useState({ innerHeight: 0, innerWidth: 0 });
    const [mouseMove, setMouseMove] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (event) => {
        const [clientX, clientY] = [event.clientX, event.clientY];
        x.set(clientX);
        y.set(clientY);

        // console.log(`Mouse X: ${clientX}, Mouse Y: ${clientY}`);
    }

    const handleMouseEnter = () => {
        setWindowOffset({ innerHeight: window.innerHeight, innerWidth: window.innerWidth });
        setMouseMove(true);

        console.log(innerWidth, innerHeight);
    }

    const {innerHeight, innerWidth} = windowOffset;

    const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
    const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

    const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
    const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

    const handleMouseLeave = () => {
        setMouseMove(false);
    }

  return (
    <div className="h-screen grid place-items-center" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div>
            <div className="flex flex-col items-center justify-center gap-y-4 font-light capitalize">
                <motion.div style={{ rotateX: mouseMove ? rotateX : 0, rotateY: mouseMove ? rotateY : 0, transition: 0.1 }} className="flex items-center justify-center">
                    <Image src= {'/nada.png'} 
                    alt="Person Image" 
                    width={300} 
                    height={500} 
                    priority={true}
                    className = 'h-auto w-[150px]' 
                    />
                    <motion.span className="absolute text-3xl font-semibold text-white" initial={{scale: 0}} 
                    animate={{ scale: buttonHover ? 2 : 0, opacity: buttonHover ? 0 : 1, y: buttonHover ? -40 : 0 }} 
                    transition={{ opacity: { duration: 0.9 } }}
                    > Hi</motion.span>
                </motion.div>
                <h1 className="text-center text-3xl font-bold tracking-wider text-pink-500 sm:text-2xl">My name is Nada Chougrati</h1>
                <p className="text-lg tracking-wider text-gray-700">I'm a social media influencer 🎨 </p>
            </div>   
            <div className="mt-8 flex justify-center gap-x-10 text-3xl text-black-500 sm:text-2xl">
                {heroIcons.map((icon, index) => (
                    <a key={index} href="#" target="_blank" className="hover:bg-pink-300 transition-colors rounded-2xl">
                        {icon}
                    </a>
                ))}
            </div>
                <a href="#" className="mx-auto mt-7 block w-max rounded-lg bg-pink-500 px-3 py-1 font-light capitalize tracking-wider
                text-white hover:bg-pink-300 transition-colors" onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)}>Talk to me!</a>
            </div>
    </div>
  )
}

export default Hero