import React from 'react'

const WhyChooseUs = () => {
  return (
    <>
    <section className="mx-5 md:container md:mx-auto my-20 py-20">
        <h2 className="text-3xl font-bold">WHY CHOOSE US</h2>
        <div className="h-0.5 w-1/3 bg-[#ED1B24] my-4"></div>
        <p className="font-semibold text-lg text-[#ED1B24]">
          Fully Licensed, Bonded, And Insured
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div
            className="flex gap-4 hover:shadow-xl ease-in-out p-4 cursor-pointer"
          >
            <i className="fa-solid fa-users text-[36px] text-[#ED1B24]"></i>
            <div>
              <p className="font-semibold text-xl">Certified Carpentry Work</p>
              <p className="text-justify mt-3">
                Our office time is always open for you. Just contact us. Our
                inspection team will communicate shortly & Will brief you
                detail. The work will be completed soon.
              </p>
            </div>
          </div>
          <div
            className="flex gap-4 hover:shadow-xl ease-in-out p-4 cursor-pointer"
          >
            <i className="fa-solid fa-truck text-[36px] text-[#ED1B24]"></i>
            <div>
              <p className="font-semibold text-xl">EMERGENCY SERVICE PROVIDER</p>
              <p className="text-justify mt-3">
                We maintain 100% safety and security guidelines of WHO about
                Covid-19. Contact us for getting best service at Singapore.
              </p>
            </div>
          </div>
          <div
            className="flex gap-4 hover:shadow-xl ease-in-out p-4 cursor-pointer"
          >
            <i
              className="fa-solid fa-money-check-dollar text-[36px] text-[#ED1B24]"
            ></i>
            <div>
              <p className="font-semibold text-xl">SAVING YOU MORE MONEY</p>
              <p className="text-justify mt-3">
                We are trusted 100%. Transparent charges made us unique. No
                hidden charges after finishing work.
              </p>
            </div>
          </div>
          <div
            className="flex gap-4 hover:shadow-xl ease-in-out p-4 cursor-pointer"
          >
            <i className="fa-solid fa-calendar-days text-[36px] text-[#ED1B24]"></i>
            <div>
              <p className="font-semibold text-xl">YEARS OF EXPERIENCE</p>
              <p className="text-justify mt-3">
                We are Singapore's local Carpentry Work since 2012. Our 10+
                experiences made us our positive reputation. It's a big
                achievement for us
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs