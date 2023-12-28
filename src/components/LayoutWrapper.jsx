import React from 'react'
import { useStore } from '@nanostores/react'
import { toggle } from '../globalStore'

function LayoutWrapper({ children }) {
    const $toggle = useStore(toggle)

    return (
        <div className={`${$toggle ? "scale-90 backdrop-brightness-70" : "scale-100"} transition-all duration-1000 border-2 h-screen w-full`}>
            {children}
        </div>
    )
}

export default LayoutWrapper