import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

function CustomMouse() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [mouseout, setMouseOut] = useState(false)

    const mousePos = (e) => {
        const { clientX, clientY } = e;
        const xPos = clientX - 20 / 2;
        const yPos = clientY - 20 / 2;
        setPosition({ x: xPos, y: yPos })
    }

    useEffect(() => {
        window.addEventListener('mousemove', mousePos)


    }, [])

    useEffect(() => {
        window.addEventListener('mouseleave', () => {
            setMouseOut(true)
            console.log(mouseout)
        })
        window.addEventListener('mouseenter', () => {
            setMouseOut(false)
            console.log(mouseout)
        })
    }, [])



    return (
        <motion.div
            className='h-20px w-20px bg-primary rounded-full fixed z-10 pointer-events-none'
            transition={{ type: 'tween', ease: 'backOut' }}

            animate={{ x: position.x, y: position.y }}

        ></motion.div>
    )
}

export default CustomMouse