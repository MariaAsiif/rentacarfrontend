// import Image from 'next/image'
import React, { useState } from 'react'
// import ViewInquire from '../../utils/Popup'
import ImageGalleryPopup from './ImageGalleryPopup'
const GalleryImages = () => {
  
  return (
    <>

      <div className='container mx-auto h-full p-9'>
        <h1 className='text-white text-center font-bold text-[2.2rem] pb-5'> GALLERY</h1>
          <ImageGalleryPopup/>
        {/* <div className="grid lg:grid-cols-4 gap-5">
          <div className="w-full scale-90 hover:scale-110 ease-in duration-500">
            <img src={url} className="w-full " alt="Louvre" />
          </div>
          <div className=" w-full scale-90 hover:scale-110 ease-in duration-500">
            <img src={url} className="w-full " alt="Louvre" />
          </div>
          <div className=" w-full scale-90 hover:scale-110 ease-in duration-500">
            <img src={url} className="w-full " alt="Louvre" />
          </div>
          <div className=" w-full scale-90 hover:scale-110 ease-in duration-500">
            <img src={url} className="w-full " alt="Louvre" />
          </div>
          <div className=" w-full scale-90 hover:scale-110 ease-in duration-500">
            <img src={url} className="w-full " alt="Louvre" />
          </div>
          <div className=" w-full scale-90 hover:scale-110 ease-in duration-500">
            <img src={url} className="w-full " alt="Louvre" />
          </div>
          <div className=" w-full scale-90 hover:scale-110 ease-in duration-500">
            <img src={url} className="w-full " alt="Louvre" />
          </div>
          <div className=" w-full scale-90 hover:scale-110 ease-in duration-500">
            <img src={url} className="w-full " alt="Louvre" />
          </div>

        </div> */}
        {/* <ViewInquire  /> */}

        
        {/* <button onClick={() => setInquire(true)} className="text-white">click</button> */}

      </div>
    </>
  )
}

export default GalleryImages