import React from 'react'
import { motion } from 'framer-motion'
import About from '../../pages/about.astro'

const variants = {
    initial: {
        y: '-30vh'
    },
    animate: (i) => ({
        y: 0
        , transition: {
            duration: 2.5
            , type: 'spring'
            , delay: i
        }
    }),
    exit: (i) => ({
        y: '-30vh'
        , transition: {
            duration: 2.5
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
    return (
        <div className="flex gap-10 list-none">
            {navBarItems.map((item, i) => (
                <motion.a key={i} variants={variants} custom={i * 0.2} initial="initial" animate="animate" exit="exit" href={item.link} className="text-xl">{item.name}</motion.a>
            ))}
        </div>
    )
}

export default NavBarSelection