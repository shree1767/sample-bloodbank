import React, { useState } from "react";
import './Navbar.css'
import { Transition } from "@headlessui/react";
import logo from './assets/logo.svg'
import istg from './assets/ion_logo-instagram.svg'
import {Turn as Hamburger} from 'hamburger-react'

export const  Navbar=()=> {
  const [isOpen, setOpen] = useState(false);
  
  return (
      <nav className="nav bg-white">
        <div className="max-w-8xl mx-auto py-5 px-5 sm:px-6 md:pl-10">
          <div className="flex items-center justify-between h-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className=" w-25 h-25"
                  src={logo}
                />
               
              </div>
              <div className="hidden md:block absolute right-0 mr-10">
                <div className="ml-10 flex space-x-4">
                  <a
                    href="#"
                    className=" text-[#AB0101] px-3 pt-2 text-sm font-medium"
                  >
                    Sign In
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="lg:pl-8" target="new"
                  >
                    <img src={istg} className='pt-1'/>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} size={25} color="#AB0101" duration={0.5} rounded />
            </div>
          </div>
        </div>

        <Transition show={isOpen}    
        enter="transition-opacity ease-linear duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >
          {(ref) => (
            <div className="md:hidden bg-[#f2f2f2]" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 text-center sm:px-3">
                <a
                  href="#"
                  className="text-[#6A0000] block px-3 py-2 font-medium"
                >
                  Sign In
                </a>

              </div>
            </div>
          )}
        </Transition>
      </nav>
    
  );
}

export default Navbar;