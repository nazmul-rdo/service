import React from 'react'
import { Link } from 'react-router-dom'

const MainServices = () => {
  return (
    <>
    <section id="service" className="bg-[#161619] text-white">
        <div className="mx-5 md:container md:mx-auto py-20">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-3xl font-bold">OUR MAIN SERVICES</h2>
            <div className="h-0.5 w-1/3 bg-[#ED1B24]"></div>
            <p className="font-semibold text-lg text-[#D1D1D1]">We are open 24x7</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          <Link to={"/service/carpenter"}
              className="flex flex-col items-center gap-4 cursor-pointer shadow-md shadow-[#ED1B24] hover:shadow-none ease-in-out p-4"
            >
              <i className="fa-solid fa-hammer text-[#ED1B24] text-[36px]"></i>
              <p className="text-xl font-bold">Carpentry</p>
            </Link>
            
            <Link to={'/service/plumbing'}
              className="flex flex-col items-center gap-4 cursor-pointer shadow-md shadow-[#ED1B24] hover:shadow-none ease-in-out p-4"
            >
              <i className="fa-solid fa-wrench text-[#ED1B24] text-[36px]"></i>
              <p className="text-xl font-bold">Plumbing</p>
            </Link>
            
            <Link to={'/service/painting'}
              className="flex flex-col items-center gap-4 cursor-pointer shadow-md shadow-[#ED1B24] hover:shadow-none ease-in-out p-4"
            >
              <i
                className="fa-solid fa-paint-roller text-[#ED1B24] text-[36px]"
              ></i>
              <p className="text-xl font-bold">Painting</p>
            </Link>
            <Link to={'/service/elecrical'}
              className="flex flex-col items-center gap-4 cursor-pointer shadow-md shadow-[#ED1B24] hover:shadow-none ease-in-out p-4"
            >
              <i className="fa-solid fa-bolt text-[#ED1B24] text-[36px]"></i>
              <p className="text-xl font-bold">Electrical</p>
            </Link>
            <Link to={'/service/leakage_repair'}
              className="flex flex-col items-center gap-4 cursor-pointer shadow-md shadow-[#ED1B24] hover:shadow-none ease-in-out p-4"
            >
              <i className="fa-solid fa-water text-[#ED1B24] text-[36px]"></i>
              <p className="text-xl font-bold">Leakage Repair</p>
            </Link>
            <Link to={'/service/interior_renovation'}
              className="flex flex-col items-center gap-4 cursor-pointer shadow-md shadow-[#ED1B24] hover:shadow-none ease-in-out p-4"
            >
              <i
                className="fa-solid fa-trowel-bricks text-[#ED1B24] text-[36px]"
              ></i>
              <p className="text-xl font-bold">
                Interior Renovation
              </p>
            </Link>
            <Link to={'/service/ceiling_partition'}
              className="flex flex-col items-center gap-4 cursor-pointer shadow-md shadow-[#ED1B24] hover:shadow-none ease-in-out p-4"
            >
              <i className="fa-solid fa-door-open text-[#ED1B24] text-[36px]"></i>
              <p className="text-xl font-bold">Ceiling Partition</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainServices