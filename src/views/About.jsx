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
            <div className="max-w-[60rem] 2xl:max-w-[80rem] mx-auto w-full h-auto bg-gradient-to-br from-mybrown to-mylight relative grid place-items-center mt-20">
                <div className="w-[97%] lg:h-[94%] h-[97%] bg-hero flex lg:items-start p-10 relative flex-col items-center">
                    <div className="z-10 relative text-center md:text-left pb-8">
                        <motion.h2 initial={{ opacity: 0 }} animate={howView ? { opacity: 100, y: [50, 0] } : {}} transition={{ duration: 0.8 }} className='font-poppins text-myorange font-medium' ref={howRef}>How does it work?</motion.h2>
                        <motion.h1 initial={{ opacity: 0 }} animate={titleView ? { opacity: 100, y: [50, 0] } : {}} transition={{ duration: 0.8 }} className='md:text-6xl font-bold text-4xl' ref={titleRef}>ShibaENS</motion.h1>

                        <div className="overflow-hidden h-[20rem] py-2" ref={descRef}>
                            <motion.div initial={{ opacity: 0 }} animate={descView ? { opacity: 100, y: [50, 0] } : {}} transition={{ duration: 0.8 }} className="overflow-y-scroll h-full font-poppins max-w-[30rem] 2xl:max-w-[45rem] text-mygrey mt-3 flex flex-col gap-y-7 pr-2">
                                <p className="">
                                    ENS, or the Ethereum Name Service, is a decentralized domain name system that is built on top of the Ethereum blockchain. ENS allows users to register human-readable domain names, such as "myname.eth", and associate them with Ethereum addresses, smart contracts, and other network resources.
                                </p>

                                <p className="">
                                    In the context of the Shibarium network, ENS can be used to simplify the process of sending and receiving tokens, interacting with smart contracts, and accessing other network resources. Instead of having to remember and enter long, complex Ethereum addresses, users can simply use their ENS domain name to perform these actions.
                                </p>

                                <p>
                                    Additionally, ENS on the Shibarium network can provide an added layer of security and privacy for users. By using a domain name instead of a public address, users can keep their actual address hidden from others, reducing the risk of targeted attacks and phishing scams.
                                </p>

                                <p className="">
                                    Overall, ENS is a powerful tool for simplifying and securing interactions on the Shibarium network, making it easier and safer for users to access the full range of network resources.
                                </p>
                            </motion.div>

                        </div>

                    </div>

                    <motion.img src="/about.webp" alt="" className="bottom-0 lg:absolute w-[23rem] right-0 z-0 origin-bottom -mb-2 lg:mb-0" style={{ scale }} />
                </div>
            </div>
        </section>
    )
}
export default About