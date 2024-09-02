import { useMotionValueEvent, useScroll, useTransform, motion, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react";
import { handleHover } from "../globalStore";


export const ProjectScroll = () => {


    const scrollRef = useRef(null);
    const [project, setProject] = useState(1);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
    });

    const scale = useTransform(scrollYProgress, [0.4, 0.9, 1], [1, 2, 3]);

    useMotionValueEvent(scale, "change", (latestValue) => {
        const roundedValue = Math.ceil(latestValue);
        if (project !== roundedValue) {
            setProject(roundedValue);
        }
    })


    return (
        <div ref={scrollRef} className="h-full w-full relative">
            <h1 className="text-6xl text-center font-bold text-white pt-60 pb-40 mx-auto pl-20 mt-10 bg-secondary">Featured Projects</h1>
            <div className="flex w-full h-fit">
                <div onMouseEnter={() => handleHover('invisible')} onMouseLeave={() => handleHover('none')} className="w-1/2 h-100vh bg-secondary sticky top-0">
                    <div className="h-300px ml-10 overflow-hidden w-full relative">
                        <AnimatePresence>
                            {project === 1 && <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 1, ease: "circInOut" }} className="text-200px font-bold text-bgColor absolute top-0"># 01</motion.h1>}
                        </AnimatePresence>
                        <AnimatePresence>
                            {project === 2 && <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 1, ease: "circInOut" }} className="text-200px font-bold text-bgColor absolute top-0"># 02</motion.h1>}
                        </AnimatePresence>
                        <AnimatePresence>
                            {project === 3 && <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 1, ease: "circInOut" }} className="text-200px font-bold text-bgColor absolute top-0"># 03</motion.h1>}
                        </AnimatePresence>
                    </div>

                </div>
                <div onMouseEnter={() => handleHover('link')} onMouseLeave={() => handleHover('none')} className="w-1/2 h-full block top-0 cursor-pointer">
                    <div className="h-80vh w-full flex flex-col justify-center bg-bgColor items-center">
                        <h1 className="text-6xl font-bold text-black">Project 1</h1>
                    </div>
                    <div className="h-80vh w-full flex flex-col justify-center bg-bgColor items-center">
                        <h1 className="text-6xl font-bold text-black">Project 2</h1>
                    </div>
                    <div className="h-80vh w-full flex flex-col justify-center bg-bgColor items-center">
                        <h1 className="text-6xl font-bold text-black">Project 3</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}