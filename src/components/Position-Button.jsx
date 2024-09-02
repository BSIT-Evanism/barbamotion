import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export const PositionButton = ({ text }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [buttonSize, setButtonSize] = useState({ width: 0, height: 0 });
    const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });
    const buttonRef = useRef(null);

    useEffect(() => {
        if (buttonRef.current) {
            const { width, height } = buttonRef.current.getBoundingClientRect();
            setButtonSize({ width, height });
        }
    }, []);

    const handleMouseMove = (e) => {
        if (!buttonRef.current) return;
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - left,
            y: e.clientY - top
        });
        setButtonPos({ x: e.clientX - (left + width / 2), y: e.clientY - (top + height / 2) });
    };

    // const handleButtonMove = (e) => {
    //     if (!buttonRef.current) return;
    //     const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
    //     setButtonPos({ x: left + width / 2, y: top + height / 2 });
    // };

    const maxDimension = Math.max(buttonSize.width, buttonSize.height);
    const circleSize = maxDimension * 2.5; // Increased to ensure full coverage

    return (
        <motion.button
            ref={buttonRef}
            className="w-[20%] min-h-20 rounded-full text-center bg-bgColor text-[20px] font-semibold mt-20 px-8 py-6 border-t-2 opacity-50 border-t-white relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{ x: isHovered ? buttonPos.x : 0, y: isHovered ? buttonPos.y : 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, mass: 0.1 }}
        >
            <p className={isHovered ? 'text-white z-20' : 'text-slate-500'}>{text}</p>
            <motion.span
                className="absolute bg-slate-500 rounded-full pointer-events-none -z-10"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    transform: 'translate(-50%, -50%)'
                }}
                initial={{ width: 0, height: 0, opacity: 1 }}
                animate={isHovered
                    ? { width: circleSize, height: circleSize, opacity: 1 }
                    : { width: 0, height: 0 }
                }
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
        </motion.button>
    );
};