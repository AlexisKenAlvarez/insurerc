import React from 'react'
import { motion } from 'framer-motion'

const FeatureBox = ({ icon, title, desc }) => {

    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 100, scale: 1 }} transition={{ duration: 1, type: 'spring', stiffness: 100 }}  className="max-w-[20rem] h-auto relative rounded-xl shadow-featureGlow">
            <div className="w-full h-full bg-gradient-to-br from-myblue to-mypink rounded-xl absolute top-0 left-0 opacity-60 z-0"></div>
            <div className="w-full h-full px-12 pb-12 pt-8  z-10 relative font-poppins text-sm">
                {icon}
                <h2 className='font-inter text-2xl font-bold mt-6'>{title}</h2>
                <p className="mt-2 opacity-80 text-center">{desc}</p>
            </div>
        </motion.div>
    )
}

export default FeatureBox