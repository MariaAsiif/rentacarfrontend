import Image from 'next/image'
import React from 'react'
import Link  from 'next/link'
import logo from '../assests/images/newlogo.jpg'
import { GoThreeBars } from 'react-icons/go'
const Header = ({ SideNavShow }) => {
    return (
        <>

            <div className='border-b'>
                <div className="container mx-auto h-full p-5 pb-3  ">
                    <div className="lg:grid grid-cols-2  flex justify-between  items-center  ">
                        <div className=''>
                            <Image src={logo} alt="logo" width={200} height={200} />
                        </div>
                        <div className='h-full mt-6 '>
                            <ul className='lg:flex hidden px-2 text-[18px] cursor-pointer  justify-between  h-full'>
                                <li className='hover:border-b-4 hover:border-b-[#AE8B41]'>
                                    <h2 className='hover:text-[#AE8B41] text-white px-0 font-semibold' >
                                        <Link href="/">Home</Link>
                                    </h2>
                                </li>
                                <li className='hover:border-b-4 hover:border-b-[#AE8B41]'>
                                    <h2 className='hover:text-[#AE8B41] text-white px-0 font-semibold' >
                                         <Link href="/imprint">Imprint</Link>
                                        </h2>
                                </li>
                                <li className='hover:border-b-4 hover:border-b-[#AE8B41]'>
                                    <h2 className='hover:text-[#AE8B41] text-white px-0 font-semibold' >
                                         <Link href="/dataProtection">Data protection</Link>
                                        </h2>
                                </li>
                                <li className='hover:border-b-4 hover:border-b-[#AE8B41]'>
                                    <h2 className='hover:text-[#AE8B41] text-white px-0 font-semibold' >
                                         <Link href="/business">Business condition</Link>
                                        </h2>
                                </li>
                                <li className='hover:border-b-4 hover:border-b-[#AE8B41]'>
                                    <h2 className='hover:text-[#AE8B41] text-white px-0 font-semibold' >
                                         <Link href="/contactus">Contact form</Link>
                                        </h2>
                                </li>
                            </ul>

                        </div>
                        <div className='lg:hidden cursor-pointer -mt-[10px]' onClick={() => SideNavShow(true)}>
                            <GoThreeBars className='text-white text-[30px]' />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header