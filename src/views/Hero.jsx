import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useAnimation } from 'framer-motion'


const Hero = () => {

    const ref = useRef(null)

    const animation = useAnimation()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"]
    })

    async function sequence() {
        await animation.start({ scale: 1, transition: { duration: 1.5, type: 'spring' } })
        animation.start({
            scale: [1, 1.05],
            transition: {
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'reverse',
                duration: 2,
                type: 'spring'
            }
        })
    }

    useEffect(() => {
        sequence()
    }, [])

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
                    <div className="w-[13rem] h-[13rem] blur-[4.5rem] bg-white rounded-full shadow-lightGlowTop absolute left-[30%] top-0 -translate-y-1/2"></div>
                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-16 h-16 bg-mybrown rounded-full shadow-brownGlow absolute right-[35%] top-[7%]"></motion.div>
                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 2.3, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-16 h-16 bg-mybrown rounded-full shadow-brownGlow absolute -left-7 bottom-[25%]"></motion.div>
                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 1.9, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-16 h-16 bg-mybrown rounded-full shadow-brownGlow absolute left-0 right-28 mx-auto bottom-[9%]"></motion.div>

                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 1.9, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-16 h-16 bg-mybrown rounded-full shadow-brownGlow absolute right-20 mx-auto top-[35%]"></motion.div>

                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 2.4, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-16 h-16 bg-mybrown rounded-full shadow-brownGlow absolute left-7 top-[25%]"></motion.div>
                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-4 h-4 bg-mylight rounded-full shadow-lightGlow absolute bottom-10 left-[5%]"></motion.div>
                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-4 h-4 bg-mylight rounded-full shadow-lightGlow absolute bottom-14 right-[5%]"></motion.div>
                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-4 h-4 bg-mylight rounded-full shadow-lightGlow absolute top-24 left-[5%]"></motion.div>
                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-4 h-4 bg-mylight rounded-full shadow-lightGlow absolute top-32 right-[10%]"></motion.div>

                    <motion.div initial={{ scale: 0.8, opacity: 0.8 }} animate={{ scale: 1, opacity: 100 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="z-0 w-4 h-4 bg-mylight rounded-full shadow-lightGlow absolute top-[30rem] left-[40%]"></motion.div>
                </div>

                <div className="mx-auto lg:px-20 px-10 flex mt-20 w-fit gap-x-16">
                    <div className="w-full text-center lg:text-left relative z-10 lg:mt-10 2xl:mt-20">
                        <motion.h2 initial={{ opacity: 0, y: 100 }} animate={{ opacity: [0, 100], y: 0 }} transition={{ duration: 1.5, type: 'spring' }} className='uppercase text-myorange font-poppins font-medium 2xl:text-xl'>Your service is here</motion.h2>
                        <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 100, y: 0 }} transition={{ duration: 1.5, type: 'spring', delay: 0.1 }} className='2xl:max-w-[50rem]  2xl:text-7xl md:text-6xl font-inter font-bold max-w-[33rem] mt-3 mx-auto lg:mx-0 text-5xl'>Decentralized domain system on ethereum</motion.h1>

                        <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 100, y: 0 }} transition={{ duration: 1.5, type: 'spring', delay: 0.15 }} className="text-mygrey max-w-[27rem] font-poppins mt-5 text-lg mx-auto lg:mx-0 2xl:text-xl 2xl:max-w-[28rem]">The only token that helps give you peace of mind in a solid investment and an insurance for you and yours.</motion.p>

                        <a href="" target="_blank" rel="noopener noreferrer">
                            <motion.button initial={{ opacity: 0, y: 100 }} animate={{ opacity: 100, y: 0 }} transition={{ duration: 1.5, type: 'spring', delay: 0.2 }} className="bg-mybrown px-10 py-4 group rounded-md text-sm mt-10 font-semibold font-poppins hover:shadow-buttonShadow relative transition-shadow ease-in-out duration-300">
                                <div className="absolute w-full h-full bg-white left-0 top-0 rounded-md bg-gradient-to-br from-mybrown to-mylight transition-all ease-in-out duration-300 opacity-0 pointer-events-none group-hover:opacity-100"></div>
                                <p className="relative z-10">BUY TOKEN</p>
                            </motion.button>
                        </a>


                    </div>

                    <div className="w-full lg:block hidden">
                        <motion.img initial={{ scale: 0 }} animate={animation} src="/hero.webp" alt="Hero" className="w-[60vh] origin-bottom" />
                    </div>

                </div>
            </motion.div>
        </section>
    )
}

export default Hero