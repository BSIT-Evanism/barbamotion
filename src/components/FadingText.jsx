import { motion } from "framer-motion"
import { useState } from "react"

export default function FadingText() {
    const [entered, setEntered] = useState(false)

    return (
        <motion.div onViewportEnter={() => setEntered(true)} animate={{ opacity: entered ? 1 : 0 }} transition={{ duration: 1, delay: 0.5 }} className="w-50% flex justify-center items-center">
            <p
                className="text-center text-25px w-70% text-white opacity-70 font-semibold text-justify"
            >
                {
                    "I like to bleed responsible on production, providing you success and value with new solutions and investment on the future."
                        .split(" ")
                        .map((word, index) => (
                            <motion.span key={index} animate={{ opacity: entered ? 1 : 0 }} transition={{ duration: 1, delay: 0.1 * index }}>
                                {word}{' '}
                            </motion.span>
                        ))
                }
            </p>
        </motion.div>
    )
}