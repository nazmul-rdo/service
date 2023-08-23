import React from 'react'

import { Link } from 'react-router-dom'

import electrical from '../../assets/electrical.jpg';
import plumbling from '../../assets/plumbing.jpg'
import carpentry from '../../assets/carpentry.jpg'

import paiting from '../../assets/paiting.jpg'
import leakage from '../../assets/leakage.jpg'

import wall_mount_services from '../../assets/wall_mount_services.png'
import door_repair from '../../assets/door_repair.jpg'

import { Helmet } from 'react-helmet';


const Services = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services</title>
      </Helmet>
      <div className="services relative h-[40vh]">
        <div
          className="absolute top-0 h-full w-full flex items-center justify-center bg-black/70"
        >
          <h2 className="text-5xl font-bold text-white">Our Services</h2>
        </div>
      </div>
      <div className="md:container md:mx-auto mx-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 my-20">
        <div
            className="group hover:shadow-red-600 relative flex flex-col items-center cursor-pointer shadow-md"
          >
            <img
              src={carpentry}
              className="h-[150px] w-full"
              alt=""
            />
            <div
              className="absolute top-0 bg-black/70 h-[150px] w-full hidden group-hover:flex justify-center items-center"
            >
              <Link to={"/service/carpenter"}
              ><i className="fa-solid fa-eye text-3xl text-red-600"></i
              ></Link>
            </div>
            <p className="p-4 text-xl font-bold">Carpentry</p>
          </div>
          <div
            className="group hover:shadow-red-600 relative flex flex-col items-center cursor-pointer shadow-md"
          >
            <img
              src={electrical}
              className="h-[150px] w-full"
              alt=""
            />
            <div
              className="absolute top-0 bg-black/70 h-[150px] w-full hidden group-hover:flex justify-center items-center"
            >
              <Link to={'/service/elecrical'}
              ><i className="fa-solid fa-eye text-3xl text-red-600"></i
              ></Link>
            </div>
            <p className="p-4 text-xl font-bold">Electrical</p>
          </div>
          <div
            className="group hover:shadow-red-600 relative flex flex-col items-center cursor-pointer shadow-md"
          >
            <img src={plumbling} className="h-[150px] w-full" alt="" />
            <div
              className="absolute top-0 bg-black/70 h-[150px] w-full hidden group-hover:flex justify-center items-center"
            >
              <Link to={"/service/plumbing"}
              ><i className="fa-solid fa-eye text-3xl text-red-600"></i
              ></Link>
            </div>
            <p className="p-4 text-xl font-bold">Plumbing</p>
          </div>
          
          <div
            className="group hover:shadow-red-600 relative flex flex-col items-center cursor-pointer shadow-md"
          >
            <img src={paiting} className="h-[150px] w-full" alt="" />
            <div
              className="absolute top-0 bg-black/70 h-[150px] w-full hidden group-hover:flex justify-center items-center"
            >
              <Link to={"/service/painting"}
              ><i className="fa-solid fa-eye text-3xl text-red-600"></i
              ></Link>
            </div>
            <p className="p-4 text-xl font-bold">Painting</p>
          </div>
          <div
            className="group hover:shadow-red-600 relative flex flex-col items-center cursor-pointer shadow-md"
          >
            <img src={leakage} className="h-[150px] w-full" alt="" />
            <div
              className="absolute top-0 bg-black/70 h-[150px] w-full hidden group-hover:flex justify-center items-center"
            >
              <Link to={'/service/leakage_repair'}
              ><i className="fa-solid fa-eye text-3xl text-red-600"></i
              ></Link>
            </div>
            <p className="p-4 text-xl font-bold">Leakage Repair</p>
          </div>
          <div
            className="group hover:shadow-red-600 relative flex flex-col items-center cursor-pointer shadow-md"
          >
            <img
              src={wall_mount_services}
              className="h-[150px] w-full"
              alt=""
            />
            <div
              className="absolute top-0 bg-black/70 h-[150px] w-full hidden group-hover:flex justify-center items-center"
            >
              <Link to={'/service/interior_renovation'}
              ><i className="fa-solid fa-eye text-3xl text-red-600"></i
              ></Link>
            </div>
            <p className="p-4 text-xl font-bold">Interior Renovation</p>
          </div>
          <div
            className="group hover:shadow-red-600 relative flex flex-col items-center cursor-pointer shadow-md"
          >
            <img
              src={door_repair}
              className="h-[150px] w-full"
              alt=""
            />
            <div
              className="absolute top-0 bg-black/70 h-[150px] w-full hidden group-hover:flex justify-center items-center"
            >
              <Link to={'/service/ceiling_partition'}
              ><i className="fa-solid fa-eye text-3xl text-red-600"></i
              ></Link>
            </div>
            <p className="p-4 text-xl font-bold">Ceiling Partition</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Services