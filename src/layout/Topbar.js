import React from 'react'

const Topbar = () => {
    return (
        <>
            <div className="bg-[#1D1D20] py-4 hidden lg:block">
                <div
                    className="flex justify-between items-center text-white mx-5 lg:container lg:mx-auto"
                >
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-phone"></i>
                        <p className="text-[13px]">Call Now: +65 87743027</p>
                    </div>
                    <div className="flex gap-4">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-whatsapp"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar