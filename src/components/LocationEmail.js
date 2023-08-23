import React from 'react'

const LocationEmail = () => {
  return (
    <>
     <section id="contact" className="mx-5 md:container md:mx-auto my-20 py-20">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h2 className="text-3xl font-bold">CONTACT WITH US</h2>
          <div className="h-0.5 w-1/3 bg-[#ED1B24]"></div>
        </div>
        <div className="lg:flex justify-between gap-8 mt-10">
          <div className="lg:w-1/2">
            <p className="text-lg font-semibold">Locate us</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.732807428231!2d103.88172657455968!3d1.336559861619281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17d4c6edbd89%3A0x92b95ab02701eadd!2sChing%20Shine%20Industrial%20Building!5e0!3m2!1sen!2sbd!4v1692188160610!5m2!1sen!2sbd"
              title='map'
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <p className="text-lg font-semibold">Left us a message</p>
            <form className="flex flex-col gap-4 shadow-xl p-5 mt-5">
              <input
                placeholder="Your Name"
                className="px-4 py-2 border-2 focus:outline-[#ED1B24]"
              />
              <input
                placeholder="Your Email"
                className="px-4 py-2 border-2 focus:outline-[#ED1B24]"
              />
              <input
                placeholder="Your Phone"
                className="px-4 py-2 border-2 focus:outline-[#ED1B24]"
              />
              <textarea
                placeholder="Your Message"
                rows="8"
                className="px-4 py-2 border-2 focus:outline-[#ED1B24]"
              ></textarea>
              <button className="px-4 py-2 bg-[#ED1B24] text-white font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default LocationEmail