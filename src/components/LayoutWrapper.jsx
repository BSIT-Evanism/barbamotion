import React, { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { routeName, toggle, transitionState } from '../globalStore'
import { AnimatePresence, motion } from 'framer-motion'



function LayoutWrapper({ children }) {
    const $toggle = useStore(toggle)
    const $transitionState = useStore(transitionState)
    const $routeName = useStore(routeName)

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 2000)
    }, [$routeName])

    return (
        <>
            <AnimatePresence>
                {$toggle && (<div className='z-10 relative'>
                    <motion.div whileHover={{ height: '30vh', transition: { duration: 1, type: 'spring' } }} initial={{ y: '-30vh' }} animate={{ y: 0 }} exit={{ y: '-30vh' }} transition={{ duration: 2, type: 'tween' }} className={`bg-bgColor drop-shadow-2xl drop-shadow-color-primary h-10vh w-full fixed top-0 ${$transitionState === 'exit' ? 'overflow-hidden' : 'overflow-clip'}`}>

                    </motion.div>
                    <motion.div initial={{ x: '-30vh' }} animate={{ x: 0 }} exit={{ x: '-30vh' }} transition={{ duration: 2, type: 'tween' }} className='bg-bgColor drop-shadow-2xl drop-shadow-color-primary h-full w-10vh fixed top-0 left-0'>

                    </motion.div>
                    <motion.div initial={{ x: '30vh' }} animate={{ x: 0 }} exit={{ x: '30vh' }} transition={{ duration: 2, type: 'tween' }} className='bg-bgColor drop-shadow-2xl drop-shadow-color-primary h-full w-10vh fixed top-0 right-0'>

                    </motion.div>
                </div>)}
            </AnimatePresence>
            <div className={`${$toggle ? "scale-90" : "scale-100"} transition-all duration-2000 ease-[cubic-bezier(0.81, 0.15, 0.06, 0.95)] h-fit w-screen p-0`}>
                {children}
            </div>
            <div className='-z-20 bg-primary fixed w-screen h-screen top-0'></div>
        </>
    )
}

export default LayoutWrapper