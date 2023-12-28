import React, { useEffect, useState } from 'react'
import { toggle, handleToggle } from '../globalStore'
import { useStore } from '@nanostores/react'
import { animate, spring } from 'motion'

function ToggleBottomBar() {
    const $toggle = useStore(toggle)
    const [change, setChange] = useState('')




    useEffect(() => {
        animate('#togglebutton', { width: $toggle ? "60vw" : "20vw", height: $toggle ? "20vh" : "90px", left: $toggle ? '20vw' : '40vw' }, { duration: 2, easing: [0.81, 0.15, 0.06, 0.95] })
    }, [$toggle])

    return (
        <>
            <div id="togglebutton" className={`fixed bottom-20 border-2  px-10 py-7 rounded-2xl  z-30 bg-white font-italic text-xl transition-all duration-1000`} onClick={handleToggle}>
                click me
            </div>
        </>
    )
}

export default ToggleBottomBar