import React from 'react'
import { MdConnectWithoutContact, MdRocketLaunch } from 'react-icons/md'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import UtilityBox from '../components/UtilityBox'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { GiStoneBridge } from 'react-icons/gi'

const Utilities = () => {

    const featureList = [
        {
            icon:
                <>
                    <img src="ens.png" alt="ENS" className="mx-auto block w-10" />
                </>,
            title: "ENS",
            desc: "We are the first ENS on the Shibarium network. It is a decentralized domain name system that simplifies and secures interactions by allowing users to associate human-readable domain names with Ethereum addresses and network resources."
        },
        {
            icon:
                <>
                    <MdConnectWithoutContact className='text-center mx-auto text-4xl' />
                </>,
            title: "Contract Deployer",
            desc: "Deployer can be used to deploy the smart contract code of your token on on the most popular blockchain network without much knowledge, enabling users to interact with and transfer your token on the network."
        },
        {
            icon:
                <>
                    <GiStoneBridge className='text-center mx-auto text-4xl' />
                </>,
            title: "Bridge",
            desc: "A bridge from Ethereum to the Shibarium Chain would allow users to transfer assets between the two networks by utilizing a smart contract to hold and manage the assets being transferred."
        },
        {
            icon:
                <>
                    <MdRocketLaunch className='text-center mx-auto text-4xl' />
                </>,
            title: "Launchpad",
            desc: "Built by us developers to help other Developers raise funds and launch their tokens through a streamlined and secure process."
        },
        {
            icon:
                <>
                    <BsFillCreditCardFill className='text-center mx-auto text-4xl' />
                </>,
            title: "Locker",
            desc: "Projects will be able to lock their liquidity tokens or even to just create vestings."
        },


    ]

    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [platRef, platView] = useInView(options)
    const [featRef, featView] = useInView(options)


    return (
        <section className="w-full h-auto relative font-inter text-white py-20" id="features">
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