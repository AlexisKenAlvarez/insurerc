import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'

import React, { useEffect, useRef, useState } from 'react'
import About from './views/About'
import Features from './views/Features'
import Hero from './views/Hero'
import Tokenomics from './views/Tokenomics'
import Roadmap from './views/Roadmap'
import Nav from './components/Nav'
import Footer from './views/Footer'



const App = () => {

    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xffffff,
                backgroundColor: 0x111111,
                points: 17.00,
                maxDistance: 0.00,
                spacing: 17.00

            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div className='bg-hero relative'>

            <div className="fixed w-full h-screen left-0 top-0 z-0" ref={myRef}>

            </div>

            <Nav />
            <Hero />
            <About />
            <Features />
            <Tokenomics />
            <Roadmap />
            <Footer />
        </div>
    )
}

export default App