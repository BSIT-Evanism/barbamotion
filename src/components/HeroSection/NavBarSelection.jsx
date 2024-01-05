import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import About from '../../pages/about.astro'
import { handleChangeRoute, handleHover, routeName } from '../../globalStore'
import { useStore } from '@nanostores/react'

const variants = {
    initial: {
        y: '-30vh'
    },
    animate: (i) => ({
        y: 0
        , transition: {
            duration: 4.5
            , type: 'spring'
            , delay: i
        }
    }),
    exit: (i) => ({
        y: '-30vh'
        , transition: {
            duration: 4.5
            , type: 'spring'
            , delay: i
        }
    }),
}

const navBarItems = [
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Contact',
        link: '/contact'
    }
]


function NavBarSelection() {
    const $routeName = useStore(routeName)
    const [currentRoute, setCurrentRoute] = React.useState('/')

    useEffect(() => {
        handleChangeRoute(window.location.pathname)
    }, [])

    return (
        <AnimatePresence>
            <div onMouseEnter={() => handleHover('navbar')} onMouseLeave={() => handleHover('none')} className="flex gap-10 list-none [&:has(.linktag:hover)>.linktag:not(:hover)>.dot]:opacity-0 [&:has(.linktag:hover)>.linktag>.dot]:opacity-100">
                {navBarItems.map((item, i) => (
                    <motion.a key={i} variants={variants} custom={i * 0.5} initial="initial" animate="animate" exit="exit" href={item.link} onClick={() => handleChangeRoute(item.link)} className="text-xl linktag">
                        {item.name}
                        <div transition={{ duration: 0.5 }} className={`bg-primary w-10px h-10px rounded-full dot ${$routeName === item.link ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200ms ease`}></div>
                    </motion.a>
                ))}
            </div>
        </AnimatePresence>
    )
}

export default NavBarSelection