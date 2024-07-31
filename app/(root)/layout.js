"use client";
import MobileNav from "/components/Mobile";
import Sidebar from "/components/Sidebar";
import React, { useState } from "react";
import Footer from "/components/Footer";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "/components/ui/dialog"; // Adjust the path as necessary

function Layout({ children }) {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if mobile number is exactly 10 digits if it's provided
    if (user.mobile && user.mobile.length !== 10) {
      toast.error("Mobile number must be exactly 10 digits");
      return;
    }

    try {
      console.log("Submitting form with data:", user); // Debugging log
      const response = await axios.post("/api", user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        toast.success("Email sent successfully");
        setOpen(false);
      } else {
        toast.error(response.data.error || "Error sending email");
      }
    } catch (err) {
      toast.error("Error sending email");
    }

    setUser({
      name: "",
      mobile: "",
      subject: "",
      message: "",
    });
  };

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

      {/* Fixed Chat Icon and Dialog */}
      <Dialog open={open} onOpenChange={setOpen} className=" max-sm:w-[200px]">
        <DialogTrigger asChild>
          <div className="fixed bottom-10 right-12 cursor-pointer  rounded-full p-2">
            <Image
              src="/icons/messenger.png"
              width={50}
              height={40}
              alt="Chat Icon"
            />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-[#9b242d] text-3xl">
              Contact Us
            </DialogTitle>
            <DialogDescription>
              For any inquiries, please fill out and Send this form
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Ex:- Amit"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number (optional)
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                pattern="\d{10}"
                placeholder="Ex:- 1234567890"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={user.mobile}
                onChange={(e) => setUser({ ...user, mobile: e.target.value })}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Ex:- For Notes"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={user.subject}
                onChange={(e) => setUser({ ...user, subject: e.target.value })}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required

                placeholder="Ex:- Write Your Message"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none"
                value={user.message}
                onChange={(e) => setUser({ ...user, message: e.target.value })}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#9b242d] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>
          </form>
          <DialogClose />
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </main>
  );
}

export default Layout;
