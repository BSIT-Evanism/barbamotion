import { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.scss";
import { motion, useMotionValue, useSpring, useScroll, useTransform, AnimatePresence } from "framer-motion";

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
    const formRef = useRef(null);
    const [hover, setHover] = useState(false);
    const [tilt, setTilt] = useState(false);
    const { mouseTilt } = useMousePosition();
    const [contact, setContact] = useState(false);
    const [formstart, setFormstart] = useState(false);

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

    function handleFirstPart() {
        event.preventDefault();
        console.log(formRef.current[0].value);
        setFormstart(false);
    }


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
                                {/* <img src="/public/Portrait.jpg" className="object-cover h-full w-full" alt="portrait" /> */}
                                <h1 className={styles.heroText}>
                                    Evan <br />
                                    Solanoy
                                </h1>
                            </div>
                        </div>
                        <motion.div
                            className={styles.callFloat}
                            animate={{ width: formstart ? '50%' : '30%' }}
                            drag="x"
                            onClick={() => setFormstart(true)}
                            onMouseEnter={() => setContact(true)}
                            onMouseLeave={() => setContact(false)}
                            dragConstraints={{ left: 0, right: 0 }}
                        >
                            <div className={styles.ping}>
                                <div className={styles.innerPing} />
                            </div>
                            <div className="text-sm uppercase text-center h-100% w-full flex justify-center items-center">
                                <AnimatePresence mode="wait">
                                    {formstart && (
                                        <motion.form ref={formRef} className="relative w-80% block border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600" onSubmit={() => handleFirstPart()}>
                                            <motion.label
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 1, type: 'tween', ease: 'circOut' }}
                                            htmlFor="UserEmail"
                                                                                  >
                                            <input
                                              type="text"
                                              id="UserEmail"
                                              placeholder="Email"
                                              className="peer h-full w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                            />
                                            <span
                                              className="absolute start-0 left-10 top-4 -translate-y-1/2 text-xs text-gray-700 transition-all duration-500ms peer-placeholder-shown:text-lg peer-focus:-translate-x-10 peer-focus:-translate-y-6 peer-focus:text-lg"
                                            >
                                              Can I ask for your name?
                                            </span>
                                                                                  </motion.label>
                                        </motion.form>
                                    )}
                                    {!formstart && (<div>
                                        <motion.h1 animate={{ y: contact ? -2 : 10, rotateX: contact ? 90 : 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, type: 'tween', ease: 'circOut' }}>Have an idea already?</motion.h1>
                                        <motion.h1 animate={{ y: contact ? -10 : 0, rotateX: contact ? 0 : -90 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, type: 'tween', ease: 'circOut' }}>Send me a Message</motion.h1>
                                    </div>)}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

export default HeroSection;