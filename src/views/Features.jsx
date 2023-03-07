import React from 'react'
import FeatureBox from '../components/FeatureBox'
import { GiBellShield } from 'react-icons/gi'

const Features = () => {

    const featureList = [
        {
            icon:
                <>
                    <GiBellShield className='text-center mx-auto text-4xl' />
                </>,
            title: "LOREM IPSUM",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            icon:
                <>
                    <GiBellShield className='text-center mx-auto text-4xl' />
                </>,
            title: "LOREM IPSUM",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            icon:
                <>
                    <GiBellShield className='text-center mx-auto text-4xl' />
                </>,
            title: "LOREM IPSUM",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat"
        },

    ]

    return (
        <section className="w-full h-auto relative font-inter text-white py-20">
            {/* <img src="/stars.webp" alt="stars" className="object-cover w-full h-full z-0 top-0 left-0 fixed" /> */}

            <div className="max-w-[1500px] mx-auto w-full relative z-10 px-8">
                <div className="text-center w-full">
                    <h2 className='font-poppins font-semibold text-myorange'>PLATFORM</h2>
                    <h1 className='text-6xl font-bold'>FEATURES</h1>

                    <p className='font-poppins text-mygrey mt-4 max-w-[40rem] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <div className="mx-auto w-fit flex gap-14 mt-20 lg:flex-row flex-col">
                        {featureList.map((items, i) => {
                            return (
                                <FeatureBox icon={items.icon} title={items.title} desc={items.desc} key={i} />
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features