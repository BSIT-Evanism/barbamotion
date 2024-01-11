import { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.scss";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";

function useMousePosition() {
    const [mouseTilt, setMouseTilt] = useState({ xDeg: 0, yDeg: 0 });
    const mousePosition = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const updateMousePosition = (e) => {
        const { clientX, clientY } = e;
        mousePosition.x.set(clientX);
        mousePosition.y.set(clientY);
    };

    const updateMouseTilt = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;
        const offsetX = ((x - middleX) / middleX) * 15;
        const offsetY = ((y - middleY) / middleY) * 15;
        setMouseTilt({ xDeg: offsetY, yDeg: offsetX });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mousemove", updateMouseTilt);
    }, []);

    return { mousePosition, mouseTilt };
}


function HeroSection() {
    const ref = useRef(null);
    const [hover, setHover] = useState(false);
    const [tilt, setTilt] = useState(false);
    const { mouseTilt } = useMousePosition();

    const heroTilt = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const { scrollYProgress } = useScroll()
    const scrollTransform = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);

    const xSpring = useSpring(heroTilt.x);
    const ySpring = useSpring(heroTilt.y);

    useEffect(() => {
        if (hover) {
            heroTilt.x.set(mouseTilt.xDeg * -1);
            heroTilt.y.set(mouseTilt.yDeg);
        } else {
            heroTilt.x.set(0);
            heroTilt.y.set(0);
        }
    }, [mouseTilt.xDeg, mouseTilt.yDeg]);


    return (
        <>
            <motion.div
                ref={ref}
                className={styles.wrapper}
                initial={{ y: -300 }}
                animate={{ y: 0 }}
                style={{ scale: scrollTransform }}
                onMouseEnter={() => setTilt(false)}
                onMouseLeave={() => setTilt(true)}
                transition={{ duration: 2.5, type: "spring", delay: 0.8 }}
            >
                <motion.div
                    className={styles.hero}
                    style={{ rotateX: xSpring, rotateY: ySpring }}
                    onMouseEnter={() => setHover(false)}
                    onMouseLeave={() => setHover(true)}

                // animate={{rotateX: mouseTilt.yDeg, rotateY: mouseTilt.xDeg}}
                >
                    <div className={styles.inner}>
                        <div
                            className={styles.contain}
                        >
                            <div className={`${styles.float} text-primary`}>
                                <h1 className={styles.heroText}>
                                    Evan <br />
                                    Solanoy
                                </h1>
                            </div>
                        </div>
                        <motion.div
                            className={styles.callFloat}
                            drag="x"
                            dragConstraints={{ left: 0, right: 300, top: 0, bottom: 0 }}
                        >
                            <div className={styles.ping}>
                                <div className={styles.innerPing} />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

export default HeroSection;