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
    const [formstart, setFormstart] = useState('initial');
    const [name, setName] = useState('');

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

    function handleFirstPart(e) {
        e.preventDefault();
        console.log(formRef.current[0].value);
        setFormstart('second');
        setName(formRef.current[0].value);
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
                            animate={{ width: formstart === 'first' ? '50%' : formstart === 'second' ? '40%' : '30%', height: formstart === 'second' ? '100%' : '15%' }}
                            drag="x"
                            onClick={() => formstart === 'initial' && setFormstart('first')}
                            onMouseEnter={() => setContact(true)}
                            onMouseLeave={() => setContact(false)}
                            dragConstraints={{ left: 0, right: 0 }}
                        >
                            <div className={styles.ping}>
                                <div className={styles.innerPing} />
                            </div>
                            <div className="text-sm uppercase text-center h-100% w-full flex justify-center items-center">
                                <AnimatePresence mode="wait">
                                    {formstart === 'second' && (
                                        <motion.div className="w-full h-full p-4">
                                            <motion.h1 className="font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                                                Hi, {name}! <br />
                                            </motion.h1>
                                            <motion.h1 className='italic' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                                                Pick your Poison
                                            </motion.h1>
                                            <label
                                                for="AcceptConditions"
                                                class="relative z-10 bg-gray-300 h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                                            >
                                                <input
                                                    type="checkbox"
                                                    id="AcceptConditions"
                                                    class="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
                                                />

                                                <span
                                                    class="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600"
                                                >
                                                    <svg
                                                        data-unchecked-icon
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="h-4 w-4"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>

                                                    <svg
                                                        data-checked-icon
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="hidden h-4 w-4"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </span>

                                                <span
                                                    class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"
                                                ></span>
                                            </label>
                                        </motion.div>
                                    )}
                                    {formstart === 'first' && (
                                        <motion.form ref={formRef} className="relative w-80% block border-b border-gray-200 bg-transparent p-2" onSubmit={(e) => handleFirstPart(e)}>
                                            <label className={`absolute pointer-events-none ${name ? "text-2 translate-x-15" : "text-3 translate-x-0"} transition-transform duration-300ms ease top-1`} htmlFor="nameInput">Can I ask for your name?</label>
                                            <input type="text" onChange={(e) => setName(e.target.value)} className='border-b-primary border-b-2 focus:outline-none' />
                                        </motion.form>
                                    )}
                                    {formstart === 'initial' && (<div>
                                        <motion.h1 className='text-[min(11px,10vw)]' animate={{ y: contact ? -2 : 10, rotateX: contact ? 90 : 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, type: 'tween', ease: 'circOut' }}>Have an idea already?</motion.h1>
                                        <motion.h1 className='text-[min(11px,10vw)]' animate={{ y: contact ? -10 : 0, rotateX: contact ? 0 : -90 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, type: 'tween', ease: 'circOut' }}>Send me a Message</motion.h1>
                                    </div>)}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </motion.div >
            </motion.div >
        </>
    );
}

export default HeroSection;