import React from 'react'


const About = () => {
    return (
        <section className="w-full h-auto py-20 px-10 text-white font-inter">
            <div className="max-w-[60rem] mx-auto w-full h-auto bg-gradient-to-br from-mypink to-myblue relative grid place-items-center mt-20">
                <div className="w-[97%] lg:h-[94%] h-[97%] bg-hero flex lg:items-start p-10 relative flex-col items-center">
                    <div className="z-10 relative text-center md:text-left">
                        <h2 className='font-poppins text-myorange font-medium'>How does it work?</h2>
                        <h1 className='md:text-6xl font-bold text-4xl'>InsurERC</h1>

                        <p className="font-poppins max-w-[30rem] text-mygrey mt-4 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <img src="/about.webp" alt="" className="md:bottom-0 lg:absolute w-[23rem] right-0 z-0 -mb-3" />
                </div>
            </div>
        </section>
    )
}

export default About