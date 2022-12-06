import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import carImg from '../assests/images/audi.png'
import { IoClose } from 'react-icons/io5'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { callPublicApi } from '../utils/Callapi';
import moment from 'moment'
import { sendContactForm } from './Callapi'
// form schema
const schema = yup.object({
  // firstname: yup.string().required('First Name is Required'),
  // surname: yup.string().required('Surname is Required'),
  // email: yup.string().email('Invalid email format').required(),
  // desc: yup.string().required('Message is Required'),

});

const ViewInquire = ({ packagebtn, largbtn }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("10:00 a.m");
  const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState("10:00 a.m");
  const [age, setAge] = useState(false);
  const [terms, setTerms] = useState(false);
  const [policy, setPolicy] = useState(false);
  const [hundred, setHundred] = useState(false);
  const [twohundred, setTwoHundred] = useState(false);
  const [fivehundred, setFiveHundred] = useState(false);
  const [total, setTotal] = useState(0)
  const [adKm, setAdKm] = useState(0)
  const [kmValue, setKmValue] = useState(0)

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


  const StartTime = ["10.00 a.m", "10.30 a.m", "11.00 ", "11.30", "12.00", "12.30 p.m", "13:00", "14.00 p.m", "2.30 p.m", "15.00", "16.00", "17.00", "18.00"]
  const EndTime = ["10.00 a.m", "10.30 a.m", "11.00 ", "11.30", "12.00", "12.30 p.m", "13:00", "14.00 p.m", "2.30 p.m", "15.00", "16.00", "17.00", "18.00"]
  let Rent_Inital_Value = 150
  // Calculate days between 2 dates
  let Difference_In_Time = endDate.getTime() - startDate.getTime();
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  let Days_Multiply_Rentvalue = Difference_In_Days * Rent_Inital_Value
  // let TotalValue = Days_Multiply_Rentvalue.toFixed(2);



  useEffect(() => {

    if (hundred === true) {
      let value = Days_Multiply_Rentvalue + 220
      setAdKm(100)
      setKmValue(220)
      setTotal(value)
    }
    if (hundred === false && total > 0) {
      let value = total - 220
      setAdKm(0)
      setKmValue(0)
      setTotal(value)
    }
    if (twohundred === true) {
      // let twoValue = total + 400
      // console.log("twoValue", twoValue)
      setAdKm((prev) => (prev + 200))
      setKmValue((prev) => (prev + 400))
      setTotal((prev) => (prev + 400))
    }
    if (fivehundred === true) {
      // let fiveValue = total + 900
      setAdKm((prev) => (prev + 500))
      setKmValue((prev) => (prev + 900))
      setTotal((prev) => (prev + 900))
      // setTotal(fiveValue.toFixed(2))
    }
  }, [hundred, twohundred, fivehundred])



  const onSubmit = async (data) => {


    let value = {
      "startdate": moment(startDate).format('LL'),
      "starttime": startTime,
      "enddate": moment(endDate).format('LL'),
      "endtime": endTime,
      "firstname": data.firstname,
      "surname": data.surname,
      "address": data.address,
      "postalcode": data.postalcode,
      "location": data.location,
      "phone": data.phone,
      "email": data.email,
      // "atage": age,
      // "agreetoterms": terms,
      // "acceptprivacypolicy": policy,
      // "kilometerpackages": {
      //   "hundredkm": hundred,
      //   "twohundredkm": twohundred,
      //   "fivehundredkm": fivehundred
      // },
      // "totalfreekilometers": "200",
      // "basicprice": `${ Days_Multiply_Rentvalue.toFixed(2)}€`,
      // "additionalkilometers": {
      //   "distance": "0KM",
      //   "price": "340€"
      // },
      // "totalprice": `${total}€`,
      // "plusdeposit": `${2500}€`,
      // "excess": `${5000}€`
    }
    console.log("data", value)

    try {
      await sendContactForm(value);
      reset();
      setStartDate(new Date())
      setStartTime("")
      setEndDate(new Date())
      setEndTime("")
      toast.success("Email are Send Successfully");
    } catch (error) {
      toast.error(error);
    }
    // reset();
    // setStartDate(new Date())
    // setStartTime("")
    // setEndDate(new Date())
    // setEndTime("")
    // const res = await callPublicApi('/emails/carRentRequest', 'post', value);
    // if (res.status === 'Success') {
    //   toast.success(res.message);
    //   setAge(false)
    //   setTerms(false)
    //   setPolicy(false)
    //   setHundred(false)
    //   setTwoHundred(false)
    //   setFiveHundred(false)
    //   setTotal(0)

    // } else {
    //   toast.error(res.message);
    // }
  }




  return (
    <div className='container mx-auto h-full p-9 '>


      {largbtn ?
        <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModalScrollable" className='scale-70 hover:scale-105 ease-in duration-500 text-center w-full   bg-[#AE8B41]  py-2 font-semibold text-[18px] text-white'>Inquire Now</button>
        : packagebtn ?

          <button data-bs-toggle="modal" data-bs-target="#exampleModalScrollable" className='py-2 px-6 max-w-[50%] m-auto bg-[#363636] text-[#AE8B41] text-[18px] mt-3 rounded-md hover:text-white '>Inquire now </button>
          :
          <button data-bs-toggle="modal" data-bs-target="#exampleModalScrollable" className='uppercase mx-7  hover:bg-[#AE8B41]  text-black bg-white hover:text-white font-bold text-[14px] px-8 py-2 lg:h-[45px] w-full   rounded-full'>packages</button>

      }
      <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        style={{ top: '0', left: '0' }}
        id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl  relative w-auto pointer-events-none">
          <div
            className="modal-content border-none shadow-lg relative bg-white flex flex-col w-full pointer-events-auto  bg-clip-padding rounded-md outline-none text-current">
            <div
              className="modal-header flex flex-shrink-0 items-center justify-between bg-[#363636] p-4 border-b border-gray-200 rounded-t-md">
              <h5 className="text-2xl font-bold  leading-normal text-white" id="exampleModalLabel">Inquire Now</h5>
              <button type="button"
                data-bs-dismiss="modal"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              >
                <IoClose className="text-white" />
              </button>
            </div>
            <div className="modal-body relative p-4  " style={{ maxHeight: '460px', overflowY: 'auto' }}>
              <div className='grid lg:grid-cols-2 gap-5 '>
                <div className=' flex flex-col items-start'>
                  <label>Rental Start</label>
                  <div className='flex justify-between w-full '>
                    <DatePicker minDate={new Date()} selected={startDate} dateFormat="dd.MM.yyyy" className="border w-full text-center h-[45px] " onChange={(date) => setStartDate(date)} />
                    <select className='border mx-2 p-2' value={startTime} onChange={(e) => setStartTime(e.target.value)}>
                      {
                        StartTime.map((t, index) => (
                          <option key={index} value={t}>{t}</option>
                        ))
                      }
                    </select>
                  </div>

                </div>
                <div className=''>
                  <label>Rental End</label>
                  <div className='flex justify-around    '>
                    <DatePicker minDate={new Date()} selected={endDate} dateFormat="dd.MM.yyyy" className="border  text-center h-[45px] w-full " onChange={(date) => setEndDate(date)} />
                    <select className='border mx-2 p-2 ml-5' value={endTime} onChange={(e) => setEndTime(e.target.value)}>
                      {
                        EndTime.map((t, index) => (
                          <option key={index} value={t}>{t}</option>
                        ))
                      }
                    </select>
                  </div>

                </div>
              </div>
              <div className='grid lg:grid-cols-2 mt-3 gap-5'>
                <div>
                  <h2 className='text-[20px] font-semibold'>Audi RS6 C8 Avant</h2>
                  <div className='flex justify-between pb-3  '>
                    <Image src={carImg} alt="img-car" width={200} height={200} />
                    <ul className='px-3 list-disc flex flex-col items-start'>
                      <li ><span className='text-[30px] font-bold rounded'>.</span> 150 KM per day included</li>
                      <li ><span className='text-[30px] font-bold rounded'>.</span> 2 seats</li>
                      <li ><span className='text-[30px] font-bold rounded'>.</span> convertible</li>
                    </ul>
                  </div>
                  <hr />
                  <div className='pt-3 pb-2  flex flex-col items-start'>
                    <div>
                      <input type="checkbox" checked={hundred} onChange={(e) => setHundred(e.target.checked)} className='w-[40px] h-[40px] mx-2' />
                      <span>+100 km | + €220,00</span>
                    </div>
                    <div>
                      <input type="checkbox" checked={twohundred} onChange={(e) => setTwoHundred(e.target.checked)} className='w-[40px] h-[40px] mx-2' />
                      <span>+200 km | + €400,00</span>
                    </div>
                    <div>
                      <input type="checkbox" checked={fivehundred} onChange={(e) => setFiveHundred(e.target.checked)} className='w-[40px] h-[40px] mx-2' />
                      <span>+500 km | + €900,00</span>
                    </div>
                    <h2 className='font-semibold '>= 150 free kilometers in total (+ €2.50 / extra KM)</h2>
                  </div>
                  <hr />
                  <div className='pt-3'>
                    <div className='flex justify-between items-center'>
                      <h2 className='font-semibold'>Basic price: <span className='font-normal'>(incl. {Days_Multiply_Rentvalue.toFixed(2)} km)</span></h2>
                      <p className='text-[14px] font-medium'>€{Days_Multiply_Rentvalue.toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h2 className='font-semibold'>Additional kilometers: <span className='font-normal'>({adKm} km)</span></h2>
                      <p className='text-[14px] font-medium'>€${kmValue.toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h2 className='font-semibold text-[23px]'>Total price:</h2>
                      <p className='text-[25px] font-medium'>€{total > 0 ? total.toFixed(2) : Days_Multiply_Rentvalue.toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h2 className='text-[14px]'>plus deposit</h2>
                      <p className='text-[14px] font-medium'>€25,00.00</p>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h2 className='text-[14px]'>excess</h2>
                      <p className='text-[14px] font-medium'>€5,000.00</p>
                    </div>

                  </div>

                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <div className='mt-3 pb-2'>
                      <div className='flex justify-between flex-row items-start '>
                        <div className='  '>
                          <label className='text-gray-400 flex '>First name</label>
                          <input type="text" {...register('firstname')} className='border h-[45px] p-2 rounded w-full' />
                        </div>
                        <div>
                          <label className='text-gray-400 flex '>Surname</label>
                          <input type="text" {...register('surname')} className='border h-[45px] p-2 rounded w-full ' />
                        </div>
                      </div>
                      <div className='mt-3'>
                        <label className='text-gray-400 flex ' >Street, House Number</label>
                        <input type="text" {...register('address')} className='border h-[45px] p-2 mt-2 rounded w-full' />
                      </div>
                      <div className='flex justify-between mt-3 '>
                        <div>
                          <label className='text-gray-400 flex '>Postcode</label>
                          <input type="number" {...register('postcode')} className='border h-[45px] p-2 rounded w-full' />
                        </div>
                        <div>
                          <label className='text-gray-400 flex '>Location</label>
                          <input type="text" {...register('location')} className='border h-[45px] p-2 rounded w-full' />
                        </div>
                      </div>
                      <div className='mt-3'>
                        <label className='flex'>Phone number</label>
                        <input type="number" {...register('phone')} className='border h-[45px] p-2 mt-2 rounded w-full' />
                      </div>
                      <div className='mt-3'>
                        <label className='flex' >E-mail address</label>
                        <input type="text" {...register('email')} className='border h-[45px] p-2 mt-2 rounded w-full' />
                      </div>

                    </div>
                    <hr />
                    <div className='pt-3  flex flex-col items-start'>
                      <div>
                        <input type="checkbox" checked={age} onChange={(e) => setAge(e.target.checked)} className='w-[40px] h-[40px] mx-2' />
                        <span>I am at the time of rental 25years or older. </span>
                      </div>
                      <div>
                        <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} className='w-[40px] h-[40px] mx-2' />
                        <span>I have read the rental conditions and expressly agree. </span>
                      </div>
                      <div>
                        <input type="checkbox" checked={policy} onChange={(e) => setPolicy(e.target.checked)} className='w-[40px] h-[40px] mx-2' />
                        <span>I accept the privacy policy . </span>
                      </div>
                      <button type="submit" data-bs-dismiss="modal" className='px-6 py-2 mt-3 w-full bg-[#AE8B41] text-white'>Book Binding</button>
                    </div>

                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>

      </div>


    </div >
  )
}

export default ViewInquire