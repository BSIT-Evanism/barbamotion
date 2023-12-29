import React, { useEffect, useRef } from 'react'
import { handleViewToggle } from '../globalStore'
import { useInView } from 'framer-motion'

function ViewControl({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        console.log(isInView)
        if (isInView) {
            handleViewToggle(true)
        } else {
            handleViewToggle(false)
        }
    }, [isInView])

    return (
        <div id="viewwrapper" ref={ref}>
            {children}
        </div>
    )
}

export default ViewControl