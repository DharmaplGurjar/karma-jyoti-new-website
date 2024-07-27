import Footer from '@/components/Footer'
import MobileNav from '@/components/Mobile'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function Layout({ children }) {
  return (
    <main className="root">
      <Sidebar />

      <div className="block lg:hidden">
        <MobileNav />
        
      </div>

      <div className="root-container">
        <div className="wrapper">{children}</div>
        {/* <div className="block lg:hidden mt-[200px] overflow-hidden">
        <Footer/>
      </div> */}
      </div>
    </main>
  )
}

export default Layout








