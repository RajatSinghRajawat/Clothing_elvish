import React from 'react'
import './Elvishbhai.css'
// import { NavLink } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { useState } from 'react';
const Elvishbhainav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <>
      


      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen ? 'true' : 'false'}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                </svg>
                <svg
                  className={`block h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://systumm.com/wp-content/uploads/2023/11/Untitled-design-1.png"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block ">
                <div className="flex  ms-[90%]">
                  <NavLink to='/'>
                    <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 mt-7 text-sm font-medium" aria-current="page">home</a>
                  </NavLink>
                  <div className="relative inline-block text-left">
                    <button
                      onClick={toggleDropdown}
                      type="button"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium focus:outline-none"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded={isOpen1 ? 'true' : 'false'}
                    >
                    Shop
                    </button>
                    {isOpen1 && (
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <div className="py-1" role="none">
                          <NavLink to='/tshirt' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">T-shirt</NavLink>
                          <NavLink to='/hoddies' activeClassName="bg-gray-100" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Hoddies</NavLink>
                        </div>
                      </div>
                    )}
                  </div>
                  <NavLink to='/contact' activeClassName="bg-gray-900 text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</NavLink>
                  <NavLink to='/about' activeClassName="bg-gray-900 text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</NavLink>

                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               <form class="d-flex" role="search">
              <NavLink to='/login'>
              <i className="fa-solid fa-user"></i>
              </NavLink>
              <i className="fa-solid fa-lock ps-5"></i>
              
            </form>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 text-center">
              <NavLink to='/' activeClassName="bg-gray-900 text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Dashboard</NavLink>
              <NavLink to='/team' activeClassName="bg-gray-900 text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</NavLink>
              <NavLink to='/projects' activeClassName="bg-gray-900 text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</NavLink>

            </div>
          </div>
        )}
      </nav>


    </>
  )
}

export default Elvishbhainav
