import Footer from '@/components/Footer'
import MobileNav from '@/components/Mobile'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function Layout({ children }) {
  return (
   
    <main className="root overflow-scroll">
      <Sidebar />

      <div className="block lg:hidden">
        <MobileNav />
        
      </div>

      <div className="root-container">
        
        <div className="wrapper">{children}</div>
       
      </div>

      {/* <div className="block lg:hidden footer">
     <Footer/>
   </div> */}
    </main>
   
   
  )
}

export default Layout








