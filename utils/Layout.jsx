import React, { useState } from 'react'
import Header from '../components/Header'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import Head from 'next/head'
import SideBar from './Sidebar'

const Layout = ({ children }) => {
    const [sideNavShow, setSideNavShow] = useState(false)
    console.log("sidebar", sideNavShow)
    return (
        <div className='relative'>
         <SideBar sidebarOpen={sideNavShow} setSidebarOpen={setSideNavShow} />
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <TopBar />
                <Header SideNavShow={setSideNavShow} />
            </header>
            <main>
                {
                    children
                }
            </main>
            <Footer />
        </div>
    )
}

export default Layout