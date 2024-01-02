import React, { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { toggle } from '../globalStore'



function LayoutWrapper({ children }) {
    const $toggle = useStore(toggle)

    return (
        <>
            <div className={`${$toggle ? "scale-90" : "scale-100"} transition-all duration-2000 ease-[cubic-bezier(0.81, 0.15, 0.06, 0.95)] h-fit w-full`}>
                {children}
            </div>
            <div className='-z-10 bg-black fixed w-screen h-screen top-0'></div>
        </>
    )
}

export default LayoutWrapper