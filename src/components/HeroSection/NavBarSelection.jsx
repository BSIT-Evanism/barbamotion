import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import About from '../../pages/about.astro'
import { handleChangeRoute, handleHover, routeName } from '../../globalStore'
import { useStore } from '@nanostores/react'




function NavBarSelection({ logoState }) {
    const $routeName = useStore(routeName)
    const [currentRoute, setCurrentRoute] = React.useState('/')
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

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
        },
        {
            name: 'Projects',
            link: '/projects'
        }
    ]

    useEffect(() => {
        handleChangeRoute(window.location.pathname)
    }, [])

    return (
        <>
            <div onMouseEnter={() => handleHover('navbar')} onMouseLeave={() => handleHover('none')} className="md:flex gap-10 hidden list-none [&:has(.linktag:hover)>.linktag:not(:hover)>.dot]:opacity-0 [&:has(.linktag:hover)>.linktag>.dot]:opacity-100">
                {navBarItems.map((item, i) => (
                    <motion.a key={i} href={item.link} onClick={() => handleChangeRoute(item.link)} className="text-xl linktag uppercase hover:opacity-50">
                        {item.name}
                        <div transition={{ duration: 0.5 }} className={`bg-primary w-10px h-10px rounded-full dot ${$routeName === item.link ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200ms ease`}></div>
                    </motion.a>
                ))}
            </div>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden fixed top-5 right-10 bg-bgColor z-20 p-4 rounded-full`}>
                <svg className={`${isMenuOpen ? 'rotate-90' : 'rotate-0 '} transition-transform duration-300`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
            </div>
            <AnimatePresence>
                {isMenuOpen ? <motion.div initial={{
                    opacity: 0
                }} animate={{
                    opacity: 1
                }} exit={{
                    opacity: 0
                }} className='fixed top-0 left-0 w-full h-full z-10 bg-bgColor'>
                    <div className='flex flex-col gap-8 justify-center items-center w-full h-full'>
                        {navBarItems.map((item, i) => (
                            <motion.a key={i} initial={{
                                x: '100vw'
                            }} animate={{
                                x: 0
                            }} transition={{
                                duration: 1
                                , type: 'spring'
                                , delay: i * 0.1
                            }} href={item.link} onClick={() => {
                                handleChangeRoute(item.link)
                                setIsMenuOpen(false)
                            }} className="text-2xl linktag uppercase hover:opacity-50">
                                {item.name}
                            </motion.a>
                        ))}
                    </div>
                </motion.div> : null}
            </AnimatePresence>
        </>

    )
}

export default NavBarSelection