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
                <div onMouseEnter={() => handleHover('invisible')} onMouseLeave={() => handleHover('none')} className="w-1/2 h-100vh bg-secondary sticky top-35">
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
                    <a href="https://creativelegazpi.ph" target="_blank" className="h-90vh w-full flex flex-col border-2 border-secondary justify-center bg-secondary items-center relative group overflow-hidden">
                        <h1 className="text-3xl font-bold text-secondary z-10 absolute bottom-8 left-8 group-hover:text-bgColor group-hover:(bottom-15 left-15) transition-all duration-300">Creative Legazpi</h1>
                        <img src="/scr-1.webp" alt="" className="w-full h-full object-cover absolute top-0 left-0 group-hover:(opacity-70 scale-105 blur-2) transition-all duration-300" />
                    </a>
                    <a href="https://alphadev.forkbun.evansolanoy.studio" target="_blank" className="h-90vh w-full flex flex-col border-2 border-secondary justify-center bg-secondary items-center relative group overflow-hidden">
                        <h1 className="text-3xl font-bold text-secondary z-10 absolute bottom-8 left-8 group-hover:text-bgColor group-hover:(bottom-15 left-15) transition-all duration-300">Forkbun Booking App</h1>
                        <img src="/scr-2.webp" alt="" className="w-full h-full object-cover absolute top-0 left-0 group-hover:(opacity-70 scale-105 blur-2) transition-all duration-300" />
                    </a>
                    <a href="https://creative-menu-evansol.vercel.app/" target="_blank" className="h-90vh w-full flex flex-col border-2 border-secondary justify-center bg-secondary items-center relative group overflow-hidden">
                        <h1 className="text-3xl font-bold text-secondary z-10 absolute bottom-8 left-8 group-hover:text-bgColor group-hover:(bottom-15 left-15) transition-all duration-300">Awwwards Menu Design</h1>
                        <img src="/scr-3.webp" alt="" className="w-full h-full object-cover absolute top-0 left-0 group-hover:(opacity-70 scale-105 blur-2) transition-all duration-300" />
                    </a>
                </div>
            </div>
        </div>
    )
}