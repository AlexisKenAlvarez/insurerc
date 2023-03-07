import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Tokenomics = () => {

    const tokenList = [
        {
            label: "Token Symbol",
            desc: "$Lorem Ipsum"
        },
        {
            label: "Total supply",
            desc: "100,000,000"
        },
        {
            label: "Platform",
            desc: "Lorem Ipsum"
        },
        {
            label: "Listing price (20% extra)",
            desc: "Lorem Ipsum"
        },
        {
            label: "Fair launch price",
            desc: "Lorem Ipsum"
        },
    ]

    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [howRef, howView] = useInView(options)
    const [titleRef, titleView] = useInView(options)

    return (
        <section className="w-full h-auto py-20 text-white font-inter z-10 relative" id="tokenomics">
            <div className="w-fit mx-auto flex gap-x-24 lg:flex-row flex-col">
                <div className="relative sm:w-[20rem] w-[15rem] h-[24rem] mx-auto lg:mx-0">
                    <motion.img initial={{ y: 0 }} animate={{ y: 50 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5, type: 'spring' }} src="/coin.webp" alt="coin" className="absolute w-full left-0 right-0" />
                    <motion.img initial={{ y: 0 }} animate={{ y: -50 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5, type: 'spring' }} src="/coin.webp" alt="coin" className="absolute w-full left-0 right-0" />
                </div>
                <div className="">
                    <motion.h2 initial={{ opacity: 0 }} animate={howView ? { opacity: 100, y: [50, 0] } : {}} transition={{ duration: 0.8 }} className='text-myorange font-poppins font-medium' ref={howRef}>TOKEN</motion.h2>
                    <div className="overflow-hidden">
                        <motion.h1 initial={{ opacity: 0 }} animate={titleView ? { opacity: 100, y: [50, 0] } : {}} transition={{ duration: 0.8 }} className='font-inter md:text-6xl font-bold text-4xl' ref={titleRef}>TOKENOMICS</motion.h1>
                    </div>

                    <div className="flex flex-col gap-y-5 mt-10">
                        {tokenList.map((items, i) => {
                            return (
                                <div className="flex" key={i}>
                                    <div className="w-full">
                                        <h2 className='font-medium'>{items.label}:</h2>
                                    </div>

                                    <div className="w-[80%] flex justify-start text-left opacity-60">
                                        <h3>{items.desc}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Tokenomics