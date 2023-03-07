import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const Hero = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"]
    })

    const opacitySpring = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const opacity = useTransform(opacitySpring, [0.1, 0.7], [1, 0])

    return (
        <section className=" h-screen w-full py-20 text-white flex items-center justify-center relative" ref={ref} id="home">
            <motion.div className="w-full h-screen fixed flex items-center justify-center" style={{ opacity }}>
                <div id="Circles">
                    <div className="w-[13rem] h-[13rem] bg-[#800e6b] rounded-full shadow-pinkGlowTop absolute left-[30%] top-0 -translate-y-1/2"></div>
                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-16 h-16 bg-myblue rounded-full shadow-blueGlow absolute right-[35%] top-[7%]"></motion.div>
                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 2.3, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-16 h-16 bg-myblue rounded-full shadow-blueGlow absolute -left-7 bottom-[25%]"></motion.div>
                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 1.9, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-16 h-16 bg-myblue rounded-full shadow-blueGlow absolute left-0 right-28 mx-auto bottom-[9%]"></motion.div>

                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 1.9, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-16 h-16 bg-myblue rounded-full shadow-blueGlow absolute right-20 mx-auto top-[35%]"></motion.div>

                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 2.4, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-16 h-16 bg-myblue rounded-full shadow-blueGlow absolute left-7 top-[25%]"></motion.div>
                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-4 h-4 bg-mypink rounded-full shadow-pinkGlow absolute bottom-10 left-[5%]"></motion.div>
                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-4 h-4 bg-mypink rounded-full shadow-pinkGlow absolute bottom-14 right-[5%]"></motion.div>
                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-4 h-4 bg-mypink rounded-full shadow-pinkGlow absolute top-24 left-[5%]"></motion.div>
                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-4 h-4 bg-mypink rounded-full shadow-pinkGlow absolute top-32 right-[10%]"></motion.div>

                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-4 h-4 bg-mypink rounded-full shadow-pinkGlow absolute top-[30rem] left-[40%]"></motion.div>
                </div>

                <div className="mx-auto lg:px-20 px-10 flex mt-20 w-fit">
                    <div className="w-full text-center lg:text-left relative z-10 mt-10 2xl:mt-20">
                        <h2 className='uppercase text-myorange font-poppins font-medium 2xl:text-xl'>Your insurance is here</h2>
                        <h1 className='2xl:max-w-[45rem]  2xl:text-8xl md:text-7xl font-inter font-bold max-w-[32rem] mt-3 mx-auto lg:mx-0 text-5xl'>A Moments of Caring Future.</h1>

                        <p className="text-mygrey max-w-[25rem] font-poppins mt-5 text-lg mx-auto lg:mx-0 2xl:text-xl 2xl:max-w-[28rem]">Insurance for everything right here. Caring You because your Life is important.</p>

                        <a href="" target="_blank" rel="noopener noreferrer">
                            <button className="bg-button px-10 py-4 rounded-md text-sm mt-10 font-semibold font-poppins shadow-buttonShadow">
                                BUY TOKEN
                            </button>
                        </a>


                    </div>

                    <div className="w-full lg:block hidden">
                        <img src="/hero.webp" alt="Hero" className="w-[70vh]" />
                    </div>

                </div>
            </motion.div>
        </section>
    )
}

export default Hero