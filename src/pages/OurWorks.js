import React from 'react'
import { Helmet } from 'react-helmet'
 
import painting1 from '../assets/services-image/painting1.jpg'
import painting2 from '../assets/services-image/painting2.jpg'
import painting3 from '../assets/services-image/painting3.jpg'
import Carpentry1 from '../assets/services-image/Carpentry-1.jpeg'
import Carpentry2 from '../assets/services-image/Carpentry-2.jpeg'
import Carpentry3 from '../assets/services-image/Carpentry-3.jpeg'
import electrica2 from '../assets/services-image/electrical2.jpg'
import plumbing1 from '../assets/services-image/plumbing1.jpg'
import plumbing2 from '../assets/services-image/plumbing2.jpg'
import plumbing3 from '../assets/services-image/plumbing3.jpg'
 
 
import workimg1 from '../assets/services-image/workimg1.jpg'
import workimg2 from '../assets/services-image/workimg2.jpg'

 
const OurWorks = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Our Works</title>
        </Helmet>
            <div className="works relative h-[40vh]">
                <div
                    className="absolute top-0 h-full w-full flex items-center justify-center bg-black/70"
                >
                    <h2 className="text-5xl font-bold text-white">Our Works</h2>
                </div>
            </div>
            <div
                className="mx-5 my-10 md:container md:mx-auto columns-2 md:columns-3 lg:columns-6 gap-5 space-y-5"
            >
                <img
                    src={Carpentry1}
                    className="w-[250px] hover:-rotate-3"
                    alt="no img"
                />
                <img
                    src={painting2}
                    className="w-[250px] hover:-rotate-3"
                    alt=""
                />
                <img
                    src={painting1}
                    className="w-[250px] hover:-rotate-3"
                    alt=""
                />
                 <img
                src={workimg2}
                className="w-[250px] hover:-rotate-3"
                alt=""
            />
                <img
                    src={workimg1}
                    className="w-[250px] hover:-rotate-3"
                    alt=""
                />
                <img
                    src={Carpentry2}
                    className="w-[250px] hover:-rotate-3"
                    alt=""
                />
                <img
                    src={plumbing1}
                    className="w-[250px] hover:-rotate-3"
                    alt=""
                />
                <img
                    src={electrica2}
                    className="w-[250px] hover:-rotate-3"
                    alt=""
                />
                <img
                    src={plumbing2}
                    className="w-[250px] hover:-rotate-3"
                    alt=""
                />
                <img
                    src={painting3}
                    className="w-[250px] hover:-rotate-3"
                    alt=""
                />
                <img
                    src={Carpentry3}
                    className="w-[250px] hover:-rotate-3"
                    alt=""
                />
                <img
                    src={plumbing3}
                    className="w-[250px] hover:-rotate-3"
                    alt=""
                />
                 
            </div>
        </>
    )
}

export default OurWorks