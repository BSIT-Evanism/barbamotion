import React, { useEffect, useState } from 'react'
import { toggle, handleToggle, viewToggle } from '../globalStore'
import { useStore } from '@nanostores/react'
import { animate, spring } from 'motion'
import { motion } from 'framer-motion'

function ToggleBottomBar() {
    const $toggle = useStore(toggle)
    const $viewToggle = useStore(viewToggle)
    const [change, setChange] = useState('')




    useEffect(() => {
        animate('#togglebutton', { width: $toggle ? "60vw" : "20vw", height: $toggle ? "40vh" : "90px", left: $toggle ? '20vw' : '40vw' }, { duration: 2, easing: [0.81, 0.15, 0.06, 0.95] })
    }, [$toggle])

    return (
        <motion.div animate={{ x: $viewToggle ? "100vw" : 0 }} transition={{ duration: 1, ease: [0.41, 0.15, 0.06, 0.95] }}>
            <div id="togglebutton" className={`fixed bottom-20 border-2 ${$toggle ? "border-slate" : "border-black"} flex justify-around 'items-start' gap-4 px-10 py-7 rounded-8 z-5 bg-white font-italic text-xl transition-all duration-1000`} >
                <div onClick={handleToggle} className="w-6 h-6 p-4 bg-black rounded-full">

                </div>
                <h1>About</h1>
                <h1>Contact</h1>
            </div>
        </motion.div>
    )
}

export default ToggleBottomBar