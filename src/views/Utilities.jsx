import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import UtilityBox from '../components/UtilityBox'
import { featureList } from '../utils/List'

const Utilities = () => {

    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [platRef, platView] = useInView(options)
    const [featRef, featView] = useInView(options)

    return (
        <section className="w-full h-auto relative font-inter text-white py-20" id="utilities">
            {/* <img src="/stars.webp" alt="stars" className="object-cover w-full h-full z-0 top-0 left-0 fixed" /> */}

            <div className="max-w-[1500px] mx-auto w-full relative z-10 px-8">
                <div className="text-center w-full">
                    <motion.h2 initial={{ opacity: 0 }} animate={platView ? { opacity: 100, y: [50, 0] } : {}} transition={{ duration: 0.8 }} className='font-poppins font-semibold text-myorange' ref={platRef}>OUR SERVICES</motion.h2>
                    <div className="overflow-hidden">
                        <motion.h1 initial={{ opacity: 0 }} animate={featView ? { opacity: 100, y: [50, 0] } : {}} transition={{ duration: 0.8 }} className='text-6xl font-bold' ref={featRef}>UTILITIES</motion.h1>
                    </div>


                    <p className='font-poppins text-mygrey mt-4 max-w-[40rem] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <div className="mx-auto w-fit flex gap-14 mt-20 lg:flex-row flex-col flex-wrap justify-center">
                        {featureList.map((items, i) => {
                            return (
                                <UtilityBox icon={items.icon} title={items.title} desc={items.desc} key={i} />
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Utilities