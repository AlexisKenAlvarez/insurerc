import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export const UtilLeft = ({ title, desc, img, icon }) => {

    const [ref, inView] = useInView({ triggerOnce: true, thershold: 1 })

    return (
        <div className='h-auto max-w-[65rem] w-full flex items-center lg:flex-row flex-col'>
            <div className="relative w-full flex items-center justify-center">
                <Parallax translateY={[35, -35]} className="w-full h-full flex items-center justify-center">
                    <img src={`/utility/${img}.webp`} alt={img} className="object-cover h-full rounded-2xl w-[50vh]" style={title === "ENS" ? {width: "40vh"} : {}} />
                </Parallax>
            </div>
            <motion.div className="w-full mt-14 lg:mt-0" ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 100 } : {}} transition={{ duration: 0.7 }}>
                <div className="flex items-center gap-x-3 w-fit text-mybrown">
                    {icon}
                    <h3 className="text-header font-inter text-2xl font-bold">{title}</h3>
                </div>
                <div className="font-poppins text-sm md:text-md flex flex-col gap-y-5 mt-4">{desc}</div>
            </motion.div>
        </div>
    )
}

export const UtilRight = ({ title, desc, img, icon }) => {

    const [ref, inView] = useInView({ triggerOnce: true, thershold: 0.8 })

    return (
        <div className='h-auto max-w-[65rem] w-full flex items-center lg:flex-row flex-col-reverse'>

            <motion.div className="w-full mt-14 lg:mt-0" ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 100 } : {}} transition={{ duration: 0.7 }}>
                <div className="flex items-center gap-x-3 w-fit ml-auto text-mybrown">

                    <h3 className="text-header font-inter text-right text-2xl font-bold">{title}</h3>
                    {icon}
                </div>
                <div className="font-poppins text-right text-sm md:text-md flex flex-col gap-y-5 mt-4">{desc}</div>
            </motion.div>
            <div className="relative w-full h-[18rem] flex items-center justify-center">
                <Parallax translateY={[35, -35]} className="w-full h-full flex items-center justify-center">
                    <img src={`/utility/${img}.webp`} alt={img} className="object-cover h-full rounded-2xl" />
                </Parallax>
            </div>
        </div>
    )
}