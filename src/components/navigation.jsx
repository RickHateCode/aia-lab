"use client";

import { Component, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';


export default function Navigation({routes}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          
          <div className="fixed lg:hidden right-4 top-5">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white bg-black"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          
          <div className='w-full flex items-center justify-center'>
          <div className="hidden lg:flex fixed lg:gap-x-12  lg:bg-black px-5 py-3  rounded-md ">
            {routes.map((route) => (
              
              <NavLink key={route.name} onClick={() => scrollToSection(route.id)} className={({isActive}) => isActive?"h-7 w-48 border-2 bg-[#08c1dc] rounded-lg font-semibold text-base text-black" : "text-white"} to={route.id}>{route.name}</NavLink>
            ))}
          </div>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-64 h-64 overflow-y-auto bg-white px-6 py-6 mt-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

            <div className="flex items-center justify-between fixed right-3 top-4">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white bg-black"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6">
                <div className="space-y-2 py-6 divide-y divide-gray-500">
                  {routes.map((route) => (
                    <p
                      key={route.id}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7"
                    >
                      <NavLink  key={route.id} onClick={() => scrollToSection(route.id)} className={({isActive}) => isActive?"h-10 w-48 border-2 bg-[#08c1dc] rounded-lg font-semibold text-base text-white" : "text-black"} to={route.id} >{route.name}</NavLink>
                    </p>
                  ))}
                </div>
              
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}
