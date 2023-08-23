import React from 'react'

const HeroBanner = () => {
  return (
    <>
    <section className="banner relative h-[60vh] lg:h-[100vh] z-0">
        <div className="absolute top-0 h-full w-full bg-black/80">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-white flex gap-4 items-center font-bold">
              <p className="text-[32px] lg:text-[52px]">24<span>x</span>7</p>
              <div className="h-full w-0.5 bg-white"></div>
              <div>
                <p>Call us Now</p>
                <p className="text-[#ED1B24] font-semibold bg-white p-1 mt-1">
                +65 87743027
                </p>
              </div>
            </div>
            <p
              className="text-white text-[36px] lg:text-[56px] font-bold uppercase text-center"
            >
              Need help right away?
            </p>
            <p className="text-[#D1D1D1] lg:text-[18px] text-center">
              Since our begining. we have worked tirelessly to earn our <br />
              reputation for quality. service and dependability
            </p>
            <a
              href="#service"
              className="uppercase px-4 py-2 bg-[#ED1B24] text-white mt-5 text-xs lg:text-base border hover:bg-transparent"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroBanner