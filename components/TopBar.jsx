import React from 'react'
import { AiFillPhone, AiOutlineInstagram } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
const TopBar = () => {
    return (
        <>
            <div className='bg-[#1A1A1A] lg:h-[40px]'>
                <div className="container mx-auto  h-full pt-1  text-[#AE8B41]  ">
                    <div className='p-2 '>
                        <div className='lg:flex items-center'>
                            <div className='flex items-center lg:mx-3'>
                                <AiFillPhone className='text-[18px] text-[#AE8B41]' />
                                <span className='mx-2 text-[14px]'>0172 707 66 55</span>
                            </div>
                            <div className='flex items-center'>
                                <FiMail className='text-[18px] text-[#AE8B41]' />
                                <span className='mx-2 text-[14px] text-[#AE8B41]'>info@miete-sportwagen.de</span>
                            </div>

                        </div>
                        <div className='flex justify-end -mt-[23px] mx-5'>
                            <div className='p-1 rounded-full bg-[#AE8B41] '>
                                <AiOutlineInstagram className="text-black" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopBar