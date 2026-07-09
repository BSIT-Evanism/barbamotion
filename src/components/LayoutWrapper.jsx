import { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { routeName } from '../globalStore'

function LayoutWrapper({ children }) {
    const $routeName = useStore(routeName)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [$routeName])

    return (
        <>
            <div className="h-fit w-screen p-0">
                {children}
            </div>
            <div className='-z-20 bg-primary fixed w-screen h-screen top-0 pointer-events-none'></div>
        </>
    )
}

export default LayoutWrapper
