import { useScroll, useTransform, motion } from 'framer-motion'
import React from 'react'

function MidSection() {

    const { scrollYProgress } = useScroll({
        target: document.querySelector('#scrollmid'),
        offset: ['start end', 'end end']
    })
    const scrollVal = useTransform(scrollYProgress, [0, 1], [0.01, 1.5])

    return (
        <div class="w-60vw" id="scrollmid">
            <motion.h1
                style={{ scale: scrollVal }}
                class="text-4xl lg:text-6xl z--1 w-full text-justify indent-2xl fw200 leading-relaxed hover:text-[#0F2C59] midsec"
            >
                Let me translate your idea into a <span class="fw600">reality</span>
                with a little sprinkle of my sugar on top in an unusual yet
                <span class="italic">aesthetic</span> way without compromising user experience
            </motion.h1>
        </div>
    )
}

export default MidSection