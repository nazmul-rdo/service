import React from 'react'

const FixContent = () => {
  return (
    <>
         <div
      className="w-fit fixed top-1/4 right-0 md:left-0 md:top-1/3 lg:top-1/2 group z-20"
    >
      <a target="_blank" without rel="noreferrer"
        href="http://wa.me/+6587743027"
        className="flex gap-4 bg-[#ED1B24] p-3 text-white font-semibold"
      >
        <i className="fa-brands fa-whatsapp text-xl"></i>
        <p className="hidden group-hover:block ease-in-out duration-300">
        +65 87743027
        </p>
      </a>
      <a
        href="tel:+65 87743027"
        className="flex gap-4 bg-[#151515] p-3 text-white font-semibold"
      >
        <i className="fa-solid fa-phone-volume text-xl"></i>
        <p className="hidden group-hover:block ease-in-out duration-300">
        +65 87743027
        </p>
      </a>
      <a target="_blank" without rel="noreferrer"
        href="mailto:jahangir352@gmail.com"
        className="flex gap-4 bg-[#ED1B24] p-3 text-white font-semibold"
      >
        <i className="fa-solid fa-envelope text-xl"></i>
        <p className="hidden group-hover:block ease-in-out duration-300">
        jahangir352@gmail.com
        </p>
      </a>
    </div>
    </>
  )
}

export default FixContent