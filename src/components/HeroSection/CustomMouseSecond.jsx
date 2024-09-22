import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { hoverValue } from '../../globalStore';

function CustomMouseSecond({ stickyRef }) {
    const $hoverValue = useStore(hoverValue);

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const smooth = {
        x: useSpring(mouse.x, { damping: 20, stiffness: 300, mass: 0.5 }),
        y: useSpring(mouse.y, { damping: 20, stiffness: 300, mass: 0.5 }),
    }

    const innerSmooth = {
        x: useSpring(smooth.x, { damping: 50, stiffness: 200, mass: 1 }),
        y: useSpring(smooth.y, { damping: 50, stiffness: 200, mass: 1 }),
    }

    useEffect(() => {

        window.addEventListener('mousemove', mousePos)

        return () => {
            window.removeEventListener('mousemove', mousePos);
        };
    }, []);

    const mousePos = (e) => {
        const { clientX, clientY } = e;
        const xPos = clientX - 10 / 2;
        const yPos = clientY - 10 / 2;

        mouse.x.set(xPos)
        mouse.y.set(yPos)
    }

    return (
        <motion.div
            className={` w-30 h-10 rounded-lg items-center justify-center bg-secondary z-20 pointer-events-none p-1 md:flex hidden fixed`}
            transition={{ type: 'tween', ease: 'backOut' }}
            animate={{ scale: $hoverValue === 'link' ? 1 : 0, opacity: $hoverValue === 'invisible' ? 0 : 1 }}
            style={{ x: smooth.x, y: smooth.y }}
        >
            <p className='text-white text-sm font-bold ml-4'>Visit</p>
        </motion.div>

    )
}

export default CustomMouseSecond