import React from 'react'
import { HiCpuChip } from 'react-icons/hi2'
import { BsCheck } from 'react-icons/bs'
import { motion } from 'framer-motion'


const RoadmapCard = ({ list, phase }) => {
    return (
        <motion.div initial={{scale: 0.5, opacity: 0}} whileInView={{scale: 1, opacity: 100}} transition={{duration: 0.9, type: 'spring'}} className="h-[33rem] sm:w-[24rem] w-[18rem] bg-gradient-to-r from-hero to-[#231b35] rounded-2xl shadow-xl p-8 mt-20 border-l-8 border-l-mybrown border-r-8 border-r-mylight">
            <div className="relative w-fit">
                <h1 className="font-saira text-xl font-semibold">{phase}</h1>
                <div className="w-full h-[3px] bg-fade mt-2"></div>
            </div>

            <div className="mt-6 flex flex-col gap-y-5">
                {list.map((items, i) => {
                    return (
                        <div className="flex items-center gap-x-3 justify-items-start" key={i}>
                            <div className="h-9 w-11 bg-[#231b35] rounded-full flex items-center justify-center">
                                <BsCheck className="text-2xl text-fade" />
                            </div>

                            <div className="w-full">
                                <h3 className='font-poppins sm:text-[15px] text-xs'>{items}</h3>
                            </div>
                        </div>
                    )
                })}

            </div>
        </motion.div>
    )
}

export default RoadmapCard