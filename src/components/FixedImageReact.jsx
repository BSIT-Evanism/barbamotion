import React from 'react'
import gsap from "gsap";
import { inView } from "motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { handleMarquee, marqueeState } from "../globalStore";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useStore } from '@nanostores/react';

gsap.registerPlugin(ScrollTrigger);


function FixedImageReact() {
    const ref = React.useRef(null);
    const $marqueeState = useStore(marqueeState)

    const { scrollYProgress } = useScroll({
        ref: ref,
        offset: ["start end", 'end start']
    })
    const imgParallax = useTransform(scrollYProgress, [0, 1], ['10%', '-50%'])

    return (
        <motion.div
            onViewportEnter={() => handleMarquee("intro")}
            onViewportLeave={() => handleMarquee("none")}
            className="rounded-4vh overflow-hidden h-[max(300px,40vh)] w-70vw md:w-20vw mx-10 my-10 md:mx-10 md:my-10"
            style={{ position: 'relative' }}
            ref={ref}
        >
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: 'hidden'
                }}
            >
                <motion.img
                    style={{
                        y: imgParallax,
                        width: '100%',
                        height: '120%',
                        objectFit: 'cover',
                        objectPosition: 'center top'
                    }}
                    className='rounded-4vh'
                    src="/new-port-2.jpeg"
                    alt="parallax"
                    id="img1"
                />
            </motion.div>
        </motion.div>
    )
}

export default FixedImageReact