import MobileNav from "/components/Mobile";
import Sidebar from "/components/Sidebar";
import React from "react";
import Footer from "/components/Footer";

function Layout({ children }) {
  return (
    <main className="root overflow-scroll">
      <Sidebar />

      <div className="block lg:hidden">
        <MobileNav />
      </div>

      <div className="root-container">
        <div className="wrapper">{children}</div>

        {/* footer */}

        <div className="block lg:hidden w-screen overflow-x-hidden mb-[-35px] mt-16">
          <Footer />
        </div>
        
      </div>
    </main>
  );
}

export default Layout;
