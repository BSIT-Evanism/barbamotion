import React from 'react'
import { LayoutGroup, motion, AnimatePresence } from 'framer-motion'
import { useStore } from '@nanostores/react'
import { marqueeState } from '../../globalStore'

const marquee = {
    animate: {
        x: [0, -198],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 5,
                ease: "linear",
            },
        },
    },
}

const marqueeReverse = {
    animate: {
        x: [-198, 0],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 5,
                ease: "linear",
            },
        },
    },
}

function MarqueeComp() {

    const $marqueeState = useStore(marqueeState);

    return (
        <motion.div layout className='sticky top-20 overflow-hidden h-15vh'>
            <motion.div variants={marquee} animate="animate" className='w-full opacity-30 h-fit text-xl whitespace-nowrap flex gap-50 text-center text-bgColor mix-blend-difference'>
                {[...Array(20)].map((_, i) => (
                    <span key={i} className='inline-block w-fit h-full uppercase  font-semibold'>evan solanoy</span>
                ))}
            </motion.div>
            <AnimatePresence mode="wait">
                {$marqueeState.includes('intro') && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "4.2rem" }} exit={{ height: 0 }} transition={{ duration: 0.5 }} className='h-15 w-full text-2xl text-bgColor opacity-50 mix-blend-difference font-bold uppercase overflow-hidden flex justify-end px-20 items-center'>
                        HOWDY, I'M EVAN SOLANOY
                    </motion.div>
                )}
                {$marqueeState.includes('second') && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "4.2rem" }} exit={{ height: 0 }} transition={{ duration: 0.5 }} className='h-15 w-full text-2xl text-bgColor opacity-50 mix-blend-difference font-bold uppercase overflow-hidden flex justify-star px-20 items-center'>
                        I LOVE TO BLEED RESPONSIBLY EVEN ON PRODUCTION
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div variants={marqueeReverse} animate="animate" className='w-full opacity-30  h-fit text-xl whitespace-nowrap flex gap-50 text-center text-bgColor mix-blend-difference'>
                {[...Array(20)].map((_, i) => (
                    <span key={i} className='inline-block w-fit h-full uppercase  font-semibold'>evan solanoy</span>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default MarqueeComp