import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react'
import MainPage from './pages/MainPage';
import Utility from './pages/Utility';



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
                points: 5.00,
                maxDistance: 0.00,
                spacing: 20.00

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
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/utility/:id" element={<Utility />}></Route>


            </Routes>

        </div>
    )
}

export default App