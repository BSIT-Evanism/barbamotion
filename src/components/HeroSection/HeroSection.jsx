import { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.scss";
import { motion, useMotionValue, useSpring, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { getCalApi } from "@calcom/embed-react";


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

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "week_view" });
        })();
    }, [])


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
                    className={`${styles.hero} hidden md:block`}
                    style={{ rotateX: xSpring, rotateY: ySpring }}
                    onMouseEnter={() => setHover(false)}
                    onMouseLeave={() => setHover(true)}
                >
                    <div className={`${styles.inner} hidden md:block`}>
                        <img src="/showreel.gif" className="object-cover h-full w-full rounded-inherit opacity-30 hover:opacity-100 transition-all duration-300 hidden md:block" alt="showreel" />
                        <div className={styles.contain}>
                            <div className={`${styles.float} text-primary`}>
                                <h1 className={`${styles.heroText} text-4xl md:text-6xl lg:text-8xl`}>
                                    Evan <br />
                                    Solanoy
                                </h1>
                            </div>
                        </div>
                        <motion.div
                            className={`${styles.callFloat} hidden md:block`}
                            animate={{ width: formstart === 'first' ? '50%' : formstart === 'second' ? '40%' : '30%', height: formstart === 'second' ? '100%' : '15%' }}
                            drag="x"
                            data-cal-namespace="15min"
                            data-cal-link="evan-forkbun/15min"
                            data-cal-config='{"layout":"week_view"}'
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
                                    <motion.div>
                                        <motion.h1 className='text-[min(11px,10vw)]' animate={{ y: contact ? -2 : 10, rotateX: contact ? 90 : 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, type: 'tween', ease: 'circOut' }}>Have an idea already?</motion.h1>
                                        <motion.h1 className='text-[min(11px,10vw)]' animate={{ y: contact ? -10 : 0, rotateX: contact ? 0 : -90 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, type: 'tween', ease: 'circOut' }}>Send me a Message</motion.h1>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </motion.div >
                <div className="md:hidden flex flex-col w-full h-70% justify-end items-end">
                    <h1 className="text-7xl md:text-6xl lg:text-8xl text-primary font-bold uppercase z-10 p-6">Evan Solanoy</h1>
                    <div className="flex flex-col gap-2">
                        <h1>Full Stack Developer</h1>
                        <h1>Creative UI/UX Designer</h1>
                    </div>
                    <img src="/showreel.gif" className="object-cover h-80% w-full rounded-inherit opacity-30 hover:opacity-100 absolute top-0 left-0 transition-all duration-300 md:hidden block" alt="showreel" />
                </div>
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