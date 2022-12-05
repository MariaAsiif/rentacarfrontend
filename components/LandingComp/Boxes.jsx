import React from 'react'
import { FaHorseHead, FaRegCalendarAlt } from 'react-icons/fa'
import { AiFillCar } from 'react-icons/ai'
import { VscDebugStart } from 'react-icons/vsc'
import CountUp from 'react-countup';
const Boxes = () => {
    let BoxDetail = [
        { icon: <FaHorseHead />, heading: 600, dec: "Horsepower" },
        { icon: <FaRegCalendarAlt />, heading: 2022, dec: "consultation year" },
        { icon: <AiFillCar />, heading: 313, dec: "vmax" },
        { icon: <VscDebugStart />, heading: 3.1, dec: "0 - 100km/h" },
    ]
    return (
        <>
            <div className="container mx-auto h-full p-9 ">
                <div className="grid lg:grid-cols-2 gap-20 lg:pl-8 lg:pr-8">
                    {
                        BoxDetail.map((b, i) => (
                            <div className=' bg-[#AE8B41] flex justify-center flex-col items-center p-8' key={i}>
                                <span className='text-[2.5rem] text-white'>
                                    {b.icon}
                                </span>
                                <h1 className='text-3xl font-bold text-white pt-2'><CountUp end={b.heading} /></h1>
                                <h2 className='uppercase text-white font-semibold text-[16px] pt-1'>{b.dec}</h2>
                            </div>
                        ))
                    }

                </div>
            </div>

        </>
    )
}

export default Boxes