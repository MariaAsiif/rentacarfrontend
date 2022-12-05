import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callPublicApi } from '../utils/Callapi';
// form schema
const schema = yup.object({
  // firstname: yup.string().required('First Name is Required'),
  // surname: yup.string().required('Surname is Required'),
  email: yup.string().email('Invalid email format').required(),
  desc: yup.string().required('Message is Required'),

});



const Contact = () => {


  const {
    register,
    // watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


  const onSubmit = async (data) => {
    let value = {
      "firstname": data.firstname,
      "surname": data.surname,
      "useremailaddress": data.email,
      "message": data.message
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
      
      <div className='bg-[#C6C6C6] p-4'>
     
        <div className="container mx-auto p-9 text-black ">
          <div className='grid lg:grid-cols-2 pt-[4rem]'>
            <div className='text-[30px] flex flex-col items-start pt-[3rem] '>
              <h1 className='text-[40px] font-bold text-center'>you  have questions</h1>
              <div className='flex justify-start my-3 '>
                <div className=' px-3 py-2 bg-black'>
                  <FiMail className='text-white pt-1' />
                </div>
                <div className="mx-2">
                  <h2 className='text-[20px] font-semibold'>e-mail address</h2>
                  <p className='text-[16px] font-semibold'>info@miete-sportwagen.de</p>
                </div>
              </div>
              <div className='flex justify-start  my-3 '>
                <div className='px-3 py-2 bg-black'>
                  <AiFillPhone className='text-white pt-1' />
                </div>
                <div className="mx-2">
                  <h2 className='text-[20px] font-semibold'>hotline</h2>
                  <p className='text-[16px] font-semibold'>0172 / 707 66 55</p>
                </div>

              </div>
              <div>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=15551234567">
                  <button className='uppercase  flex items-center  bg-[#212121] w-full px-6 py-3 text-[16px] text-[#AE8B41] font-bold hover:text-white'>
                    <BsWhatsapp className='mx-2' />
                    Whatsapp contact</button>
                </a>

              </div>
            </div>
            <div>
              <h2 className='lg:px-[9rem] font-semibold text-[18px]'>SEND US A MESSAGE</h2>
              <div className='pt-3 '>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="text" {...register('firstname')} className='h-[45px] border border-gray-400 p-2 bg-[#C6C6C6] lg:w-[40%] w-full placeholder:text-[16px] font-medium ' placeholder='first name' />



                  <input type="text" {...register('surname')} className='h-[45px] border border-gray-400 p-2 bg-[#C6C6C6] lg:w-[40%] w-full lg:mx-4 lg:mt-0 mt-2 placeholder:text-[16px] font-medium  ' placeholder='Surname' />

                  <input type="text" {...register('email')} className={`h-[45px] border  p-2 ${errors.email ? 'border-red-500' : 'border-gray-400'} bg-[#C6C6C6] lg:w-[83%] w-full mt-3 placeholder:text-[16px] font-medium `} placeholder='Your email address' />
                  {errors.email && (
                    <p className='text-red-500 text-sm'>{errors.email.message}</p>
                  )}
                  <textarea rows={5} {...register('desc')} className={`lg:w-[83%] w-full  mt-3 border ${errors.desc ? 'border-red-500' : 'border-gray-400'} p-2 bg-[#C6C6C6] placeholder:text-[16px] font-medium `} placeholder='your message'></textarea>
                  {errors.desc && (
                    <p className='text-red-500 text-sm'>{errors.desc.message}</p>
                  )}
                  <button type="submit" className={`lg:w-[83%] lg:mt-4 mt-2 p-3 w-full border hover:bg-[#AE8B41] transform duration-75 ease-in-out bg-black text-white`}>send Message</button>
                </form>
              </div>
            </div>



          </div>
        </div>
      </div>



    </>
  )
}

export default Contact