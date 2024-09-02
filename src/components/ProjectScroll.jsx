import { useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react";


export const ProjectScroll = () => {

    const scrollRef = useRef(null);
    const [project, setProject] = useState(0);
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
            <h1 className="text-6xl font-bold text-white mt-60 mb-40 mx-auto">Featured Projects</h1>
            <div className="flex w-full h-fit">
                <div className="w-1/2 h-50vh bg-secondary sticky top-0">
                    <div className="h-full w-full flex flex-col justify-center items-center">
                        <h1 className="text-6xl font-bold text-black">Project {project}</h1>
                    </div>
                </div>
                <div className="w-1/2 h-full block top-0">
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