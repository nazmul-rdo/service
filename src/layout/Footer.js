import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className="bg-[#161619] text-[#FFFFFF85]">
      <section className="mx-5 md:container md:mx-auto md:flex">
        <div className="md:w-1/2 p-5">
          <p className="font-semibold text-xl text-white">Connect with us</p>
          <div className="h-0.5 w-1/3 bg-[#ED1B24] my-5"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex gap-4 items-center">
              <i
                className="fa-solid fa-map-location-dot text-[36px] text-[#ED1B24]"
              ></i>
              <div>
                <p className="text-[20px] uppercase">
                J & FONG DOCO PTE LTD
                </p>
                <p className="text-[14px]">20 Shaw Rd, #03-08 Ching Shine Industrial Building, Singapore 367956</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <i
                className="fa-solid fa-phone-volume text-[36px] text-[#ED1B24]"
              ></i>
              <div>
                <p className="text-[20px]">+65 87743027</p>
                <p className="text-[14px]">24/7 Emergency Services</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <i className="fa-solid fa-envelope text-[36px] text-[#ED1B24]"></i>
              <div>
                <p className="text-[20px] uppercase">Left us an email</p>
                <p className="text-[14px]">jahangir352@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 md:w-1/2">
          <p className="font-semibold text-xl text-white">Our services</p>
          <div className="h-0.5 w-1/3 bg-[#ED1B24] my-5"></div>
          <ul className="text-lg grid grid-cols-3 lg:grid-cols-4 gap-4">
            <li>
              <Link
                className="hover:text-[#ED1B24] border-b-1 border-[#ED1B24]"
                to={'/service/elecrical'}
                >Electrical</Link
              >
            </li>
            <li>
              <Link
                className="hover:text-[#ED1B24] border-b-1 border-[#ED1B24]"
                to={"/service/plumbing"}
                >Plumbing</Link
              >
            </li>
            <li>
              <Link
                className="hover:text-[#ED1B24] border-b-1 border-[#ED1B24]"
                to={"/service/painting"}
                >Painting</Link
              >
            </li>
            <li>
              <Link
                className="hover:text-[#ED1B24] border-b-1 border-[#ED1B24]"
                to={'/service/carpenter'}
                >Carpentry</Link
              >
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
                to={"/service/interior_renovation"}
                >
                  Interior Renovation
                </Link>   
            </li>
            <li>
              <Link
                className="hover:text-[#ED1B24] border-b-1 border-[#ED1B24]"
                to={"/service/ceiling_partition"}
                >
                  Ceiling Partition
                </Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="h-0.5 bg-[#ED1B24] my-5"></div>
      <p className="py-5 text-center">
        Copyright © 2023 <span className="text-white">J & FONG DOCO PTE LTD</span>. All
        rights reserved.
      </p>
    </footer>
    </>
  )
}

export default Footer