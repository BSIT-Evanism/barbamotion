import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { hoverValue } from '../../globalStore';

function CustomMouse({ stickyRef }) {
    const $hoverValue = useStore(hoverValue);

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const smooth = {
        x: useSpring(mouse.x, { damping: 20, stiffness: 300, mass: 0.5 }),
        y: useSpring(mouse.y, { damping: 20, stiffness: 300, mass: 0.5 }),
    }

    useEffect(() => {

        window.addEventListener('mousemove', mousePos)

        return () => {
            window.removeEventListener('mousemove', mousePos);
        };
    }, []);

    const mousePos = (e) => {
        const { clientX, clientY } = e;
        const xPos = clientX - 20 / 2;
        const yPos = clientY - 20 / 2;

        mouse.x.set(xPos)
        mouse.y.set(yPos)
    }

    return (
        <motion.div
            className={`h-20px w-20px bg-bgColor rounded-full z-20 pointer-events-none fixed mix-blend-difference`}
            transition={{ type: 'tween', ease: 'backOut' }}
            animate={{ scale: $hoverValue === 'navbar' ? 2.5 : $hoverValue === 'footer' ? 3 : 1 }}
            style={{ x: smooth.x, y: smooth.y }}
        ></motion.div>
    )
}

export default CustomMouse