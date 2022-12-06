import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  console.log("sidebarOpen", sidebarOpen)
  const sidebar = useRef(null);
  const trigger = useRef(null);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, []);

  useEffect(() => {
    if (sidebarOpen === true) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarOpen]);

  return (
    <div>
      <div
        className={`fixed inset-0 bg-slate-900 h-full  bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-300  ${sidebarOpen ? "opacity-100 bg-black" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden="true"
        style={{ width: '300px' ,  }}
      >
        {/* Sidebar */}
        {
          sidebarOpen &&
          <div
            id="sidebar"
            ref={sidebar}
            className={`contents  z-1 left-0 top-0 absolute w-64 h-full overflow-y-auto  no-scrollbar shrink-0 bg- border-r  border   py-4 transition-all  duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "translate-x-64"
              }`}
          >
            {/* Sidebar header */}

            <div className="absolute z-20 w-full ">
              <div>
                {/* Close button */}
                <button ref={trigger} className="lg:hidden text-slate-500 mx-2 hover:text-slate-400" onClick={() => setSidebarOpen(false)} aria-controls="sidebar" aria-expanded={sidebarOpen}  >
                  <BsFillArrowLeftCircleFill className="text-white text-[30px] mt-[2rem]" />
                </button>

                <div className='h-full mt-5'>
                  <ul className='flex flex-col px-2 text-[18px] cursor-pointer justify-center items-center  h-full'>
                    <li className='hover:border-b-4 py-3 hover:border-b-[#AE8B41]'>
                      <h2 className='hover:text-[#AE8B41] text-white px-0 font-semibold' >
                        <Link href="/">Home</Link>
                      </h2>
                    </li>
                    <li className='hover:border-b-4 py-3 hover:border-b-[#AE8B41]'>
                      <h2 className='hover:text-[#AE8B41] text-white px-0 font-semibold' >
                        <Link href="/imprint">Imprint</Link>
                      </h2>
                    </li>
                    <li className='hover:border-b-4 py-3 hover:border-b-[#AE8B41]'>
                      <h2 className='hover:text-[#AE8B41] text-white px-0 font-semibold' >
                        <Link href="/dataProtection">Data protection</Link>
                      </h2>
                    </li>
                    <li className='hover:border-b-4 py-3 hover:border-b-[#AE8B41]'>
                      <h2 className='hover:text-[#AE8B41] text-white px-0 font-semibold' >
                        <Link href="/business">Business condition</Link>
                      </h2>
                    </li>
                    <li className='hover:border-b-4 py-3 hover:border-b-[#AE8B41]'>
                      <h2 className='hover:text-[#AE8B41] text-white px-0 font-semibold' >
                        <Link href="/contactus">Contact form</Link>
                      </h2>
                    </li>
                  </ul>

                </div>

              </div>


            </div>
          </div>
        }


        {/* <section
          className="relative w-screen h-full border border-red-500 cursor-pointer "
          onClick={() => {
            setSidebarOpen(false);
          }}
        >
          asdasdas
        </section> */}
      </div>


    </div>
  );
};

export default SideBar;
