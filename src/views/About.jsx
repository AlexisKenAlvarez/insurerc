import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const opacitySpring = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scale = useTransform(opacitySpring, [0.4, 1], [0.5, 1])

    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [howRef, howView] = useInView(options)
    const [titleRef, titleView] = useInView(options)
    const [descRef, descView] = useInView(options)

    return (
        <section className="w-full h-auto py-20 px-10 text-white font-inter" ref={ref} id='about'>
            <div className="max-w-[60rem] 2xl:max-w-[80rem] mx-auto w-full h-auto bg-gradient-to-br from-mypink to-myblue relative grid place-items-center mt-20">
                <div className="w-[97%] lg:h-[94%] h-[97%] bg-hero flex lg:items-start p-10 relative flex-col items-center">
                    <div className="z-10 relative text-center md:text-left pb-8">
                        <motion.h2 initial={{ opacity: 0 }} animate={howView ? { opacity: 100, y: [50, 0] } : {}} transition={{ duration: 0.8 }} className='font-poppins text-myorange font-medium' ref={howRef}>How does it work?</motion.h2>
                        <motion.h1 initial={{ opacity: 0 }} animate={titleView ? { opacity: 100, y: [50, 0] } : {}} transition={{ duration: 0.8 }} className='md:text-6xl font-bold text-4xl' ref={titleRef}>InsurERC</motion.h1>

                        <div className="overflow-hidden">
                            <motion.p initial={{ opacity: 0 }} animate={descView ? { opacity: 100, y: [50, 0] } : {}} transition={{ duration: 0.8 }} className="font-poppins max-w-[30rem] 2xl:max-w-[45rem] text-mygrey mt-4 " ref={descRef}>
                                Building trust with our investors is our #1 priority, that is why all transactions will be done through the dapp on the blockchain and everything will be transparent. There will be no chance of human error because everything will be done automatically. At first our platform will generate/provide you with a fresh wallet address and 12 key words that you keep in a safe place.  Following the creation of the wallet, you will be required to choose an email that will automatically be sent a message with all the  pertinent information   &#40;wallet, password, keys if needed&#41;. This will only happens if you do not interact with the platform for a pre determined number of days, weeks or months. Your predetermined tokens will be automatically sent to that new wallet with an email that explains the process to retrieve them.   The amount of information you provide to us is up to you, If you would like to hand the 12 word keys to your family yourself, that will also be possible. The form that you will fill will determine what information will be sent in the email. You will be required to hold a certain amount of our native token to have access to the service.
                            </motion.p>
                        </div>

                    </div>

                    <motion.img src="/about.webp" alt="" className="md:bottom-0 lg:absolute w-[23rem] right-0 z-0 -mb-3 origin-bottom" style={{ scale }} />
                </div>
            </div>
        </section>
    )
}

export default About