import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

function MidSection() {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    })

    const scrollVal = useTransform(scrollYProgress, [0, 1], [1, 1.5])

    return (
        <div ref={ref} className="w-full md:h-300vh md:-mt-100vh md:-mb-100vh h-100vh m-0">
            <div
                className="h-100vh flex justify-center items-center w-full top-0 md:sticky block bg-accent -z-1"
            >
                <div className="w-60vw hidden md:block" id="scrollmid" >
                    <motion.h1
                        style={{ scale: scrollVal }}
                        className="text-4xl lg:text-6xl z--1 w-full text-justify indent-2xl fw200 leading-relaxed hover:text-[#0F2C59] midsec"
                    >
                        Let me translate your idea into a <span className="fw600">reality</span>&nbsp;
                        with a little sprinkle of my sugar on top in an unusual yet &nbsp;
                        <span className="italic">aesthetic</span> way without compromising user experience
                    </motion.h1>
                </div>
                <div className="w-60vw block md:hidden" >
                    <h1
                        className="text-4xl lg:text-6xl z--1 w-full text-justify indent-2xl fw200 leading-relaxed hover:text-[#0F2C59] midsec"
                    >
                        Let me translate your idea into a <span className="fw600">reality</span>&nbsp;
                        with a little sprinkle of my sugar on top in an unusual yet &nbsp;
                        <span className="italic">aesthetic</span> way without compromising user experience
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default MidSection