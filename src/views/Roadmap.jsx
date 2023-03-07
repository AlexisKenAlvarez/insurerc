import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import RoadmapCard from '../components/RoadmapCard'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Roadmap = () => {

    const [titleRef, titleView] = useInView({ triggerOnce: true, threshold: 0.5 })

    const arr1 = [
        "Trader AI community building and social media deployement",
        "AI Investor development",
        "Telegram and Twitter marketing",
        "Fair launch on Pinksale 07.03 5 PM UTC - 10.03 5 PM UTC",
        "Trader AI launch on Pancakeswap 12.03 5 PM UTC",
    ];

    const arr2 = [
        "DAPP creation and development",
        "Youtubers collaboration",
        "Partnership with KOLs",
        "Reveal of main DAPP",
        "Listings and CEX onboarding",
    ];

    const arr3 = [
        "AMA campaign",
        "Anti Honey and Protector development",
        "Rapid marketing campaign with worldwide trendings",
        "Public V1 for AI Trader",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section className='w-full h-auto py-28 text-white font-inter z-10 relative' id="roadmap">
            <div className="max-w-[1600px] w-full mx-auto px-10">

                <h2 className='text-myorange font-poppins font-medium text-center'>OUR PATH</h2>
                <h1 className='md:text-6xl text-4xl font-extrabold text-center' ref={titleRef}>ROADMAP</h1>

                <div className="mx-auto flex gap-x-10">
                    <Slider {...settings} className="xl:w-[80rem] 2xl:w-[85rem] mx-auto lg:w-[60rem] sm:w-[25rem] w-[19rem]">
                        <RoadmapCard list={arr1} phase="Phase 1" />
                        <RoadmapCard list={arr2} phase="Phase 2" />
                        <RoadmapCard list={arr3} phase="Phase 3" />
                    </Slider>

                </div>
            </div>
        </section>
    )
}

export default Roadmap