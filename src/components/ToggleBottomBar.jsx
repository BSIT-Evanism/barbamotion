import React, { useEffect, useState } from 'react'
import { toggle, handleToggle, viewToggle } from '../globalStore'
import { useStore } from '@nanostores/react'
import { animate, spring } from 'motion'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'

function ToggleBottomBar() {
    const $toggle = useStore(toggle)
    const $viewToggle = useStore(viewToggle)
    const [change, setChange] = useState('')
    const [hover, setHover] = useState(false)

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })



    useEffect(() => {
        animate('#togglebutton', { width: $toggle ? "60vw" : "20vw", height: $toggle ? "40vh" : "100px" }, { duration: 2, easing: [0.81, 0.15, 0.06, 0.95] })
        animate('#togglebutton', { left: $toggle ? '20vw' : '40vw' }, { duration: 2, easing: [0.81, 0.15, 0.06, 0.95] })
    }, [$toggle, hover])

    return (
        <>
            <motion.div id="togglebutton" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="fixed bottom-20 border-2 rounded-10 p-[0.2rem] overflow-hidden" animate={{ x: $viewToggle ? "100vw" : 0 }} transition={{ duration: 1, ease: [0.41, 0.15, 0.06, 0.95] }}>
                <motion.div style={{ scaleX }} className="absolute w-full h-full top-0 left-0 bg-[#22272C] -z-1"></motion.div>
                <motion.div className={` ${$toggle ? "border-slate" : "border-black"} flex justify-around items-start h-full w-full gap-4 px-10 py-7 rounded-[2.3rem] z-5 bg-white font-italic text-xl transition-all duration-1000`} >
                    <AnimatePresence>

                        <motion.div key="button" onClick={handleToggle} layoutId="buttonnavbar" className="w-6 h-6 p-4 cursor-pointer hover:opacity-70 bg-black rounded-full">
                        </motion.div>
                        {hover || $toggle ?
                            (<>
                                <motion.h1 key="nav1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>About</motion.h1>
                                <motion.h1 key="nav2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Contact</motion.h1>
                            </>)
                            : null
                        }
                    </AnimatePresence>
                </motion.div>
            </motion.div>
            {/* <AnimatePresence>
                {$toggle && (<motion.div initial={{ y: "100vh" }} animate={{ y: 0 }} exit={{ y: "100vh" }} className='-z-1 opacity-80 bg-black fixed top-0 left-0 w-screen h-screen' />)}
            </AnimatePresence> */}
        </>
    )
}

export default ToggleBottomBar