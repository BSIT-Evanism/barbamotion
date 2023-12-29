import React, { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { toggle } from '../globalStore'


function LayoutWrapper({ children }) {
    const $toggle = useStore(toggle)

    return (
        <div className={`${$toggle ? "scale-90 backdrop-brightness-70 overscroll-y-none overflow-hidden" : "scale-100 overflow-auto overscroll-y-auto"} pointer-events-none transition-all duration-2000 border-2 ease-[cubic-bezier(0.81, 0.15, 0.06, 0.95)] h-fit w-full`}>
            {children}
        </div>
    )
}

export default LayoutWrapper