import { motion } from "framer-motion"
import { useState } from "react"

export default function FadingText() {
    const [entered, setEntered] = useState(false)

    return (
        <motion.div
            onViewportEnter={() => setEntered(true)}
            animate={{ opacity: entered ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full flex justify-start items-center"
        >
            <p className="text-justify text-lg md:text-25px w-70% leading-relaxed text-white opacity-70 font-normal">
                {
                    "I like to bleed responsible on production, providing you success and value with new solutions and investment on the future."
                        .split(" ")
                        .map((word, index) => (
                            <motion.span
                                key={index}
                                animate={{ opacity: entered ? 1 : 0 }}
                                transition={{ duration: 1, delay: 0.1 * index }}
                            >
                                {word}{' '}
                            </motion.span>
                        ))
                }
            </p>
        </motion.div>
    )
}