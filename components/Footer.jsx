import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { AiOutlineInstagram, AiFillPhone } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { IoLocationSharp } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assests/images/newlogo.jpg'
import ViewInquire from '../utils/Popup'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callPublicApi } from '../utils/Callapi';

const schema = yup.object({
  // firstname: yup.string().required('First Name is Required'),
  // surname: yup.string().required('Surname is Required'),
  email: yup.string().email('Invalid email format').required(),
  // desc: yup.string().required('Message is Required'),

});

const Footer = () => {
  let FooterList = [
    { heading: "Rental sports car", list: [{ name: "Imprint", link: "/imprint" }, { name: "Data protection", link: "/dataProtection" }, { name: "General Business Conditions", link: "/business" }, { name: "Contact form", link: "/contactus" }] },
    // { heading: "sports car rental company", list: [{ name: "Adjust vehicle", link: "/" }, { name: "your benefits", link: "/" }, { name: "Online shop for partners", link: "" }, { name: "Secure payment methods", link: "/" }, { name: "Packages", link: "/" }] },
    // { heading: "Rent a sports car", list: [{ name: "Rent an Audi R8", link: "/" }, { name: "Rent a BMW M4", link: "/" }, { name: "Rent a Ferrari", link: "" }, { name: "Rent an AMG", link: "/" }, { name: "Rent a sports car", link: "/" }] },
    // { heading: "Rent a luxury car", list: [{ name: "Rent an Audi RS3", link: "/" }, { name: "Rent a BMW M8", link: "/" }, { name: "C63 amg rent", link: "" }, { name: "Rent G class", link: "/" }, { name: "Rent a wedding car", link: "/" }] },

  ]


  const {
    register,
    // watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


  const onSubmit = async (data) => {
    let value = {
      "useremailaddress": data.email,
      "message": "This email is for subscription"
    }
    const res = await callPublicApi('/emails/contactUs', 'post', value);
    if (res.status === 'Success') {
      toast.success(res.message);
      reset();
    } else {
      toast.error(res.message);
    }
  }


  return (
    <>
      <div className='container mx-auto h-full p-9 pb-0'>
        <div className="grid lg:grid-cols-2 ">
          <div>
            <p className='text-white text-[12px]'>BECOME A RENTAL SPORTS CAR PARTNER!</p>
            <h2 className='text-white text-2xl font-bold'>Are you a sports car rental company and would like to offer your vehicles with us?</h2>
          </div>
          <div className='flex lg:justify-end justify-center lg:items-center  pt-3'>
            <Link href="/contactus" className='uppercase hover:bg-white hover:text-black bg-[#AE8B41]  text-white font-bold text-[14px] px-8 py-3 lg:h-[45px] lg:w-[30%]  rounded-full'>
              contact now</Link>
            <div>
              <ViewInquire />

            </div>
            {/* <button className='uppercase mx-7 hover:bg-[#AE8B41]  text-black bg-white hover:text-white font-bold text-[14px] px-8 py-2 lg:h-[45px] lg:w-[30%]   rounded-full'>packages</button> */}
          </div>
        </div>
        <div className='grid lg:grid-cols-4 grid-cols-2 gap-5 pt-[5rem]'>
          <div>
            {
              FooterList.map((f, ind) => (
                <div className='text-white' key={ind}>
                  <h2 className='text-[20px] font-semibold'>{f.heading}</h2>
                  <ul className='pt-4' >
                    {
                      f.list.map((l, index) => (
                        <li>
                          <Link href={l.link}>
                            <div className='flex items-center cursor-pointer' key={index}>
                              <BiChevronRight className='text-[18px] text-white' />
                              <span className='px-3 text-[#54595F]' >{l.name}</span>
                            </div>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
          <div>
            <div className='text-white' >
              <h2 className='text-[20px] font-semibold'>Driven Sportwagen </h2>
              <ul className='pt-4' >
                <li>
                  <div className='flex items-center cursor-pointer'>
                    <Image src={logo} width={200} height={200} alt="logo" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className='text-white' >
              <h2 className='text-[20px] font-semibold'>Reach Us At </h2>
              <ul className='pt-4' >
                <li>
                  <div className='flex items-center cursor-pointer'>
                    <AiFillPhone className='text-[18px]' />
                    <span className='px-3 text-[#54595F]' >0172 707 66 55</span>
                  </div>
                </li>
                <li className='py-2'>
                  <div className='flex items-center cursor-pointer '>
                    <FiMail className='text-[18px]' />
                    <span className='px-3 text-[#54595F]' >info@miete-sportwagen.de</span>
                  </div>
                </li>
                <li >
                  <div className='flex items-center cursor-pointer '>
                    <IoLocationSharp className='text-[18px]' />
                    <span className='px-3 text-[#54595F]' >d-block london</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className='text-white' >
              <h2 className='text-[20px] font-semibold'>Subscribe</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ul className='pt-1' >
                  <li>
                    {/* <input type="text" className='border h-[45px] w-full p-2' placeholder='email' /> */}
                    <input type="text" {...register('email')} className={`h-[45px] border  p-2 ${errors.email ? 'border-red-500' : 'border-gray-400'} bg-white  w-full mt-3 placeholder:text-[16px] font-medium `} placeholder='Your email address' />
                    {errors.email && (
                      <p className='text-red-500 text-sm'>{errors.email.message}</p>
                    )}
                  </li>
                  {/* <li>
                    <textarea rows={5} {...register('desc')} className={` w-full  mt-3 border ${errors.desc ? 'border-red-500' : 'border-gray-400'} p-2 bg-white text-black placeholder:text-[16px] font-medium `} placeholder='your message'></textarea>
                    {errors.desc && (
                      <p className='text-red-500 text-sm'>{errors.desc.message}</p>
                    )}
                  </li> */}
                  <li>
                    <button type="submit" className='w-full my-2 h-[45px] bg-[#AE8B41] text-white'>Send</button>
                  </li>
                </ul>
              </form>
            </div>
          </div>

        </div>
        <div className='grid grid-cols-2 gap-5 '>
          <h2 className='text-white text-sm'>© by RENT-SPORTWAGEN.de</h2>
          <div className='flex justify-end  mx-5'>
            <div >
              <AiOutlineInstagram className="text-[#54595F]" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer