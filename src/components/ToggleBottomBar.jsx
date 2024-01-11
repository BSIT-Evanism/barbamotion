import React, { useEffect, useState } from 'react'
import { toggle, handleToggle, viewToggle, handleChangeRoute, handleHover } from '../globalStore'
import { useStore } from '@nanostores/react'
import { animate, spring } from 'motion'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import CustomMouse from './HeroSection/CustomMouse'

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
        if (hover) {
            handleHover('footer')
        } else {
            handleHover('none')
        }
    }, [hover])


    useEffect(() => {
        animate('#togglebutton', { width: $toggle ? "60vw" : "20vw", height: $toggle ? "40vh" : "100px" }, { duration: 2, easing: [0.81, 0.15, 0.06, 0.95] })
        animate('#togglebutton', { left: $toggle ? '20vw' : '40vw' }, { duration: 2, easing: [0.81, 0.15, 0.06, 0.95] })
    }, [$toggle, hover])

    return (
        <>
            <CustomMouse />
            <motion.div id="togglebutton" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="fixed z-2 bottom-10 rounded-10 p-[0.2rem] overflow-hidden" animate={{ y: $viewToggle ? "100vw" : 0 }} transition={{ duration: 2, ease: [0.41, 0.15, 0.06, 0.95] }}>
                <motion.div style={{ scaleX }} className="absolute w-full h-full top-0 left-0 bg-accent rounded-3xl -z-1"></motion.div>
                <motion.div className={` ${$toggle ? "border-slate" : "border-black"} flex justify-around items-start h-full w-full gap-4 px-10 py-7 rounded-[2.3rem] z-5 bg-white font-italic text-xl text-center transition-all duration-1000`} >
                    <AnimatePresence>

                        <motion.img key="button" src='/favicon.svg' onClick={handleToggle} whileHover={{ scale: 1.2 }} animate={{ rotate: hover ? -180 : 0, transition: { duration: 0.3, type: 'tween' } }} layoutId="buttonnavbar" className="w-40px h-40px rounded-full border-primary border-2 cursor-pointer">
                        </motion.img>
                        {hover || $toggle ?
                            (<>
                                <motion.a onClick={() => handleChangeRoute('/about')} href='/about?name=evan' key="nav1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={window.location.pathname === '/about' ? 'underline pointer-events-none' : ''}>About</motion.a>
                                <motion.a onClick={() => handleChangeRoute('/contact')} href='/contact' key="nav2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={window.location.pathname === '/contact' ? 'underline pointer-events-none' : ''}>Contact</motion.a>
                            </>)
                            : null
                        }
                    </AnimatePresence>
                </motion.div>
            </motion.div>
            <AnimatePresence>
                {$toggle && (<motion.div initial={{ y: "100vh" }} animate={{ y: 0 }} exit={{ y: "100vh" }} transition={{ duration: 2, type: "tween", ease: 'backOut' }} className='z-1 opacity-50 bg-black fixed top-0 left-0 w-full h-full overflow-hidden overscroll-none' />)}
            </AnimatePresence>
        </>
    )
}

export default ToggleBottomBar