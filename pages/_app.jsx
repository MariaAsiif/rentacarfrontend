import '../styles/globals.css'
import Layout from '../utils/Layout'
import { BsWhatsapp } from 'react-icons/bs'
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  return (
    <div className='relative'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="fixed bottom-3 cursor-pointer shadow-lg bg-[#25d366] right-4 z-40  w-[50px] h-[50px] rounded-full">
        <div className='flex justify-center items-center'>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=15551234567">
            <BsWhatsapp className="mt-3 text-white text-[25px]" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MyApp
