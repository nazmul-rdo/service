import React from 'react'

import customer1 from '../assets/customer1.webp'
import customer2 from '../assets/customer2.webp'

const Testimonial = () => {
  return (
    <>
    <section className="mx-5 md:container md:mx-auto my-20 py-20">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h2 className="text-3xl font-bold">OUR TESTIMONIALS</h2>
          <div className="h-0.5 w-1/3 bg-[#ED1B24]"></div>
        </div>
        <div className="mt-10">
          <p className="text-lg font-semibold uppercase">What Our Customers Say</p>
          <div className="mt-10 md:flex gap-8">
            <div className="md:w-1/2 shadow-lg shadow-[#ED1B24] hover:shadow p-5">
              <i className="fa-solid fa-comment text-4xl text-[#ED1B24]"></i>
              <p className="text-justify my-5">
                They are polite, fast and awesome! Had an additional issue with
                the water pipe but was rectified with what was suggested by them
                on the spot. Good job! Highly recommended
              </p>
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full h-[50px]"
                  src={customer1}
                  alt="customer_img"
                />
                <p className="text-sm font-semibold">Jane Oliver</p>
              </div>
            </div>
            <div
              className="md:w-1/2 mt-8 md:mt-0 shadow-lg shadow-[#ED1B24] hover:shadow p-5"
            >
              <i className="fa-solid fa-comment text-4xl text-[#ED1B24]"></i>
              <p className="text-justify my-5">
                Wardrobe sliding door problem. Messaged them the issue and
                responded fast and fixed price. Within 30minutes come to my
                location & repaired it nicely. Will recommend to their service.
              </p>
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full h-[50px]"
                  src={customer2}
                  alt="customer_img"
                />
                <p className="text-sm font-semibold">James Winston</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-lg font-semibold uppercase">Our Achivements</p>
          <div
            className="mt-10 bg-[#ED1B24] p-10 text-white grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-3xl font-bold">1249</p>
              <i className="fa-solid fa-heart text-3xl"></i>
              <p className="font-semibold text-center">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-3xl font-bold">4.8</p>
              <i className="fa-solid fa-star text-3xl"></i>
              <p className="font-semibold text-center">Average Rating</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-3xl font-bold">2549</p>
              <i className="fa-solid fa-comment text-3xl"></i>
              <p className="font-semibold text-center">Total Reviews</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-3xl font-bold">12</p>
              <i className="fa-solid fa-calendar text-3xl"></i>
              <p className="font-semibold text-center">Total Experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial