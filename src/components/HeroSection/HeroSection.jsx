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

    function handleSubmitFinal() {
        setFormstart('initial');
        setName('');
    }


    return (
        <>
            <motion.div
                ref={ref}
                className={styles.wrapper}
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                style={{ scale: scrollTransform }}
                onMouseEnter={() => setTilt(false)}
                onMouseLeave={() => setTilt(true)}
                transition={{ duration: 7.5, type: "spring", delay: 0.8 }}
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
                            transition={{ duration: 2.5, type: 'spring' }}
                        >
                            <div className={styles.ping}>
                                <div className={styles.innerPing} />
                            </div>
                            <div className="text-sm uppercase text-center h-100% w-full flex justify-center items-center">
                                <AnimatePresence mode="sync">
                                    {formstart === 'second' && (
                                        <motion.div className="w-full h-full p-4 overflow-hidden" >
                                            <motion.h1 className="font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                                                Hi, {name}! <br />
                                            </motion.h1>
                                            <motion.h1 className='italic' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: -200 }} transition={{ duration: 1, delay: 0.5 }}>
                                                Pick your Poison
                                            </motion.h1>
                                            <Switcher11 />
                                            <motion.div initial={{ y: 100 }} animate={{ y: 0, transition: { duration: 1 } }} exit={{ y: 100, transition: { duration: 1 } }} onClick={() => handleSubmitFinal()} className="bg-primary text-bgColor w-50% rounded-full p-2 absolute bottom-5 left-1/4 cursor-pointer">Send</motion.div>
                                        </motion.div>
                                    )}
                                    {formstart === 'first' && (
                                        <motion.form ref={formRef} className="relative w-80% block border-b border-gray-200 bg-transparent p-2" onSubmit={(e) => handleFirstPart(e)}>
                                            <label className={`absolute pointer-events-none ${name ? "text-2 translate-x-15" : "text-3 translate-x-0"} transition-transform duration-300ms ease top-1`} htmlFor="nameInput">Can I ask for your name?</label>
                                            <input type="text" onChange={(e) => setName(e.target.value)} className='border-b-primary border-b-2 focus:outline-none' />
                                        </motion.form>
                                    )}
                                    {formstart === 'initial' && (<motion.div>
                                        <motion.h1 className='text-[min(11px,10vw)]' animate={{ y: contact ? -2 : 10, rotateX: contact ? 90 : 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, type: 'tween', ease: 'circOut' }}>Have an idea already?</motion.h1>
                                        <motion.h1 className='text-[min(11px,10vw)]' animate={{ y: contact ? -10 : 0, rotateX: contact ? 0 : -90 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, type: 'tween', ease: 'circOut' }}>Send me a Message</motion.h1>
                                    </motion.div>)}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </motion.div >
            </motion.div >
        </>
    );
}

const Switcher11 = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <>
            <label className='flex cursor-pointer select-none items-center'>
                <div className='relative'>
                    <input
                        type='checkbox'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className='sr-only'
                    />
                    <div className='block h-8 w-14 rounded-full bg-[#EAEEFB]'></div>
                    <div className={`dot absolute ${isChecked && "translate-x-full"} left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition`}>
                        <span
                            className={`h-3 w-3 rounded-full transition ${isChecked ? 'bg-white' : 'bg-primary'
                                }`}
                        ></span>
                    </div>
                </div>
            </label>
        </>
    )
}

export default HeroSection;