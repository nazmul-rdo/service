import React, { useState } from 'react'

const WhatWeDo = () => {
  const [isToggled1, setIsToggled1] = useState(true);
  const [isToggled2, setIsToggled2] = useState(true);
  const [isToggled3, setIsToggled3] = useState(true);

  const handleClickchange = (e) => {
    e((prevState) => !prevState);
  };
  return (
    <>
      <section id="about" className="mx-5 md:container md:mx-auto my-20 py-20">
        <div className="lg:flex flex-row-reverse gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold">WHO ARE WE?</h2>
            <div className="h-0.5 w-1/3 bg-[#ED1B24] mt-4"></div>
            <div className="accordion mt-10">
              <div className="accordion-item">
                <button
                  onClick={() => handleClickchange(setIsToggled1)}
                  className="accordion-header shadow-md w-full flex justify-between items-center p-4"
                >
                  <span className="font-semibold flex gap-4 items-center"
                  ><i className="fa-solid fa-briefcase"></i> About Company</span
                  >
                  <span className="accordion-icon">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </button>
                <div className={`accordion-content p-4 ${isToggled1 ? "hidden" : ""
                  }`}>
                  <p className="text-justify">
                    We are committed to being the most trusted local Carpentry Work
                    service provider in Singapore for all your residential,
                    Commercial & Industrial sectors. <br />We provides a
                    comprehensive solution for all of your local Carpentry Work
                    services. As an integrated provider of local Carpentry Work
                    services, you can expect to receive all your local Carpentry Work,
                    renovation & demolition requirements done via a WhatsApp
                    Message. <br />You can book multiple home or Carpentry Work
                    services at a very affordable price, and receive excellent
                    customer support 24/7.
                  </p>
                </div>
              </div>

              <div className="accordion-item">
                <button
                  onClick={() => handleClickchange(setIsToggled2)}
                  className="accordion-header shadow-md w-full flex justify-between items-center p-4"
                >
                  <span className="font-semibold flex gap-4 items-center"
                  ><i className="fa-solid fa-clock"></i>Our Mission</span
                  >
                  <span className="accordion-icon">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </button>
                <div className={`accordion-content p-4 ${
                  isToggled2 ? "hidden" : ""
                }`}>
                  <p className="text-justify">
                    Our organization’s mission is to serve the best quality
                    local Carpentry Work service to all clients of Singapore in a
                    professional manner.
                  </p>
                </div>
              </div>

              <div className="accordion-item">
                <button
                  onClick={() => handleClickchange(setIsToggled3)}
                  className="accordion-header shadow-md w-full flex justify-between items-center p-4"
                >
                  <span className="font-semibold flex gap-4 items-center"
                  ><i className="fa-solid fa-globe"></i>Our Vision</span
                  >
                  <span className="accordion-icon">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </button>
                <div className={`accordion-content p-4 ${
                  isToggled3 ? "hidden" : ""
                }`}>
                  <p className="text-justify">
                    Our organization’s vision is to providing our flexible range
                    of services is sure to answer most of your house repair and
                    house improvement needs. Able to meet your demands at your
                    flexible.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="why relative mt-20 lg:mt-0 h-[80vh] lg:w-1/2">
            <div className="absolute top-0 bg-black/50 w-full h-full">
              <div className="flex flex-col justify-center h-full p-10 gap-4">
                <i className="fa-solid fa-thumbs-up text-[72px] text-[#ED1B24]"></i>
                <h2 className="text-3xl font-bold text-white">
                  Solving problems since 2012
                </h2>
                <div className="h-0.5 w-1/3 bg-[#ED1B24]"></div>
                <p className="text-lg text-white">
                  We are very proud to be serving our local area for over 10+
                  years!
                  <br />
                  You will not wrong to take our services as your business tool.
                  <br />
                  We Provide The Best Carpentry Work service in residential,
                  Commercial & Industrial sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhatWeDo