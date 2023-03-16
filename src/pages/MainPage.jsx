import React from 'react'
import Nav from '../components/Nav'
import About from '../views/About'
import Footer from '../views/Footer'
import Hero from '../views/Hero'
import Roadmap from '../views/Roadmap'
import Tokenomics from '../views/Tokenomics'
import Utilities from '../views/Utilities'

const MainPage = () => {
    return (
        <>
            <Nav />
            <Hero />
            <About />
            <Utilities />
            <Tokenomics />
            <Roadmap />
            <Footer />
        </>
    )
}

export default MainPage