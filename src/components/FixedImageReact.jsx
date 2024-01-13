import React from 'react'
import gsap from "gsap";
import { inView } from "motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { handleMarquee, marqueeState } from "../globalStore";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useStore } from '@nanostores/react';

gsap.registerPlugin(ScrollTrigger);


function FixedImageReact() {
    const ref = React.useRef(null);
    const $marqueeState = useStore(marqueeState)

    const { scrollYProgress } = useScroll({
        ref: ref,
        offset: ["start end", 'end end']
    })
    const imgParallax = useTransform(scrollYProgress, [0, 1], [0, -600])


    // gsap.to(ref, {
    //     scrollTrigger: {
    //         trigger: "#img1",
    //         start: "top bottom",
    //         end: "bottom top",
    //         scrub: true,
    //         markers: true,
    //     },
    //     y: -400,
    //     ease: "none",
    // });

    // React.useEffect(() => {
    //     inView(ref, (el) => {
    //         handleMarquee("intro");
    //         console.log("intro");

    //         return () => {
    //             handleMarquee("none");
    //         };
    //     });
    // }, [$marqueeState]);

    return (
        <motion.div onViewportEnter={() => handleMarquee("intro")} onViewportLeave={() => handleMarquee("none")} className="rounded-6vh overflow-hidden h-[max(500px,40vh)] w-50vw m-10">
            <motion.img
                style={{ y: imgParallax }}
                src="https://images.unsplash.com/photo-1704589148269-dbd0e200e69f?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="parallax"
                id="img1"
                ref={ref}
            />
        </motion.div>
    )
}

export default FixedImageReact