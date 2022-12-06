import React from 'react'
import { MdCheckCircleOutline } from 'react-icons/md'
import ViewInquire from '../../utils/Popup'
const Packages = () => {
    let Prices = [{ text: 'from 23 years' }, { text: "3,500€ deposit" }, { text: "€7,500 deductible" }]
    let PackageDetails = [{ title: '24 hours', desc: "including 200 free kilometers", price: "300", duration: "during the week" }, { title: 'Weekend rate', desc: "including 450 free kilometers ", price: "800", duration: "Friday to Sunday" }, { title: 'Weekly rate', desc: "including 1000 free kilometers", price: "1690", duration: "7 days" }]
    return (
        <>
            <div className='container mx-auto h-full p-9'>
                <div className='mt-[2rem] text-center'>
                    <h2 className=' text-white text-[2.2rem] font-bold'>Audi RS6 Avant</h2>
                    <span className=' text-[#2F2F2F] font-semibold text-[18px]'>Vehicle images differ from the original</span>
                </div>
                <div className='grid lg:grid-cols-3 gap-4 mt-4 mb-4'>
                    {PackageDetails.map((detail, index) => (
                        <div className='h-full bg-white pb-4'key={index}>
                            <div className={`${detail.title === "Weekend rate" ? 'bg-[#363636]' : 'bg-[#AE8B41]'} text-center p-3`}>
                                <h2 className='text-[25px] font-bold text-white'>{detail.title}</h2>
                                <p className='text-[16px]  text-white'>{detail.desc} </p>
                            </div>
                            <div className='flex justify-center flex-col text-center pt-6'>
                                <h2 className='text-[4rem] leading-none text-[#555] font-bold flex items-center justify-center'><sup className='text-[23px] -mt-[15px]'>€</sup>{detail.price}</h2>
                                <span className='text-[13px] text-[#7A7A7A]'>{detail.duration}</span>
                                <ul className='pt-4'>
                                    {Prices.map((p, i) => (
                                        <li className='border-b-2 mx-[4rem] pb-2 pt-1 last:border-b-0' key={i}>
                                            <div className='flex justify-center items-center'>
                                                <MdCheckCircleOutline className=' text-[20px] text-gray-500' />
                                                <span className='mx-2 text-[#7A7A7A] text-[15px] font-normal'>{p.text}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <ViewInquire packagebtn ={"packagebtn"}/>
                                <span className='text-[13px] text-[#7A7A7A] pt-2'>All prices include 16% VAT.</span>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Packages