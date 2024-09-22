import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { hoverValue } from '../../globalStore';

function CustomMouseThird({ stickyRef }) {
    const $hoverValue = useStore(hoverValue);

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const smooth = {
        x: useSpring(mouse.x, { damping: 20, stiffness: 400, mass: 0.5 }),
        y: useSpring(mouse.y, { damping: 20, stiffness: 400, mass: 0.5 }),
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
            className={` w-8 h-8 m-1 rounded-md  bg-bgColor z-30 pointer-events-none p-1 md:flex hidden fixed`}
            transition={{ type: 'tween', ease: 'backOut' }}
            animate={{ scale: $hoverValue === 'link' ? 1 : 0, opacity: $hoverValue === 'invisible' ? 0 : 1 }}
            style={{ x: smooth.x, y: smooth.y }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="lucide lucide-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" x2="3" y1="12" y2="12" /></svg>
        </motion.div>

    )
}

export default CustomMouseThird