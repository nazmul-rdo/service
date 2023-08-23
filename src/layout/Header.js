import React from 'react'

import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Header = () => {
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  const onToggleMenu = () => {
    setIsToggleMenu(!isToggleMenu)
  }
  return (
    <header className="py-5">
      <nav
        className="flex justify-between items-center md:container md:mx-auto mx-5"
      >
        <div className="z-40">
          <Link className="flex gap-2 items-center" to="/">
            <img
              src={logo}
              alt="nav_logo"
              className="w-[50px] h-[50px]"
            />
            <p className="uppercase text-[#ED1B24] font-extrabold text-xl">
              Carpentry Work
            </p>
          </Link>
        </div>
        <div
          className={`nav-links duration-500 lg:static absolute z-30 bg-white min-h-[100vh] lg:min-h-fit left-0 ${isToggleMenu ? "top-[-10%]" : "top-[-100%]"} lg:w-auto w-full flex items-center px-5 py-5 lg:py-0`}
        >
          <ul
            className="flex lg:flex-row flex-col w-full lg:gap-[4vw] gap-8 text-3xl lg:text-[16px] text-[#202020] uppercase font-semibold top-8"
          >
            <li>
              <Link
                onClick={onToggleMenu}
                className="hover:text-[#ED1B24]" to="/">Home</Link>
            </li>
            <li>
              <Link
                onClick={onToggleMenu}
                className="hover:text-[#ED1B24]" to="/about"
              >About Us</Link>
            </li>
            <li className="relative group">
              <Link
                onClick={onToggleMenu}
                to="/service"
                className="hover:text-[#ED1B24] cursor-pointer"
              >Services</Link>
              <ul
                className="lg:absolute hidden lg:group-hover:block ease-linear bg-white p-5"
              >
                <li>
                  <Link
                    className="hover:text-[#ED1B24] border-b-1 border-[#ED1B24]"
                    to={"/service/carpenter"}
                  >Carpentry</Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[#ED1B24] border-b-1 border-[#ED1B24]"
                    to={'/service/elecrical'}
                  >Electrical</Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[#ED1B24] border-b-1 border-[#ED1B24]"
                    to={'/service/plumbing'}
                  >Plumbing</Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[#ED1B24] border-b-1 border-[#ED1B24]"
                    to={"/service/painting"}
                  >Painting</Link>
                </li>
                
                
                
                <li>
                  <Link
                    className="hover:text-[#ED1B24] border-b-1 border-[#ED1B24]"
                    to={'/service/leakage_repair'}
                  >Lekage Repair</Link
                  >
                </li>
                <li>
                  <Link
                    className="hover:text-[#ED1B24] border-b-1 border-[#ED1B24]"
                    to={'/service/interior_renovation'}
                  >Interior Renovation</Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[#ED1B24] border-b-1 border-[#ED1B24]"
                    to={'/service/ceiling_partition'}
                  >Ceiling Partition</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                onClick={onToggleMenu}
                className="hover:text-[#ED1B24]" to="/ourworks"
              >Our Works</Link
              >
            </li>
            <li>
              <Link onClick={onToggleMenu}
                className="hover:text-[#ED1B24]" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div
          onClick={onToggleMenu}
          className="flex items-center gap-6 z-40 w-fit lg:hidden">
          {isToggleMenu ?
            <i className="fa-solid fa-xmark text-3xl cursor-pointer text-[#ED1B24]"></i>
            :
            <ion-icon
              name="menu"

            ><svg className="text-3xl cursor-pointer text-[#ED1B24]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </ion-icon>

          }

        </div>
      </nav>
    </header>
  )
}

export default Header