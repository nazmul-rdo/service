import React,{useEffect} from 'react'
import { Helmet } from 'react-helmet';

import electrical from '../../assets/services-image/electrical1.jpg'
import electrica2 from '../../assets/services-image/electrical2.jpg'
import electrica3 from '../../assets/services-image/electrical3.jpg'


const Electrical = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Electrical Services</title>
        </Helmet>
        <div className='bg-gray-300'>
            <section className="mx-5 md:container md:mx-auto py-10 bg-gray-300">
                <h2 className="text-3xl font-bold">Electrical Services in Singapore</h2>
                <div className="flex my-5 gap-4">
                    <img
                        src={electrical}
                        className="h-[300px] w-full md:w-1/2 lg:w-full"
                        alt=""
                    />
                    <img
                        src={electrica2}
                        className="h-[300px] w-full hidden md:block md:w-1/2 lg:w-full"
                        alt=""
                    />
                    <img
                        src={electrica3}
                        className="h-[300px] w-full hidden lg:block"
                        alt=""
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-justify font-semibold">
                        24 hours electrician in Singapore for any kind of consumer and
                        commercial electrical work, we will work with you to meet the
                        official standards and make your place of living or work perfect for
                        you and yours. We’re even providing 24 hours emergency electrician
                        services anytime anywhere in Singapore 24/7! If you are looking for
                        electrical services or an electrician near me, you are in the right
                        place Local Carpentry Work Sg is the best place to choose for Carpentry Work
                        electrician service in Singapore.
                    </p>
                    <ul className="list-disc">
                        <li>Commercial generators</li>
                        <li>Childproof sockets and outlets</li>
                        <li>Electrical engineering works</li>
                        <li>Electrical extension</li>
                        <li>Electrical surge protectors</li>
                        <li>Electrical wiring</li>
                        <li>Extra TV, electrical sockets</li>
                        <li>Install cable TV sockets, SCV point</li>
                        <li>Install ceiling fan</li>
                        <li>Install distribution board (DB) and circuit breakers</li>
                        <li>Install & replace the power socket</li>
                        <li>Install power point for aircon, washing machine</li>
                        <li>Install & replace power socket and power outlets</li>
                        <li>Install telephone point</li>
                        <li>Install & replace water heater</li>
                        <li>Power conditioners</li>
                        <li>Power failure & trip repair</li>
                        <li>Replace DB & fuse box</li>
                        <li>Replace light fittings, light bulbs, switch</li>
                        <li>Repair light</li>
                        <li>Rewiring</li>
                        <li>Upgrades to electrical panels</li>
                        <li>Ventilation and exhaust fans</li>
                        <li>Wiring upgrades</li>
                        <li>All other Electrical installations</li>
                    </ul>
                    <p className="text-justify font-semibold">
                        Singapore is being famous for global financial center and world
                        heritage site consisting of electricity every moment every day to
                        move. It is unbearable to live in this type of modern city without
                        electricity within 24/7, therefore there are lots of electrical
                        issues occurred every moment more or less. 24 hours electrician
                        Singapore is also provided by Local Carpentry Work Sg any kind of
                        electrical fault or blackout.
                    </p>
                    <ul className="list-disc">
                        <li>
                            All electrical projects, including, new wiring & rewiring of the
                            space
                        </li>
                        <li>Auto gate & auto barrier installation and servicing</li>
                        <li>CCTV system & fire alarm installation</li>
                        <li>
                            Draw single line, testing, commissioning, LEW endorsement and SP
                            submission
                        </li>
                        <li>Electrical, cable, and telephone socket installation</li>
                        <li>Electrical circuit wiring and rewiring</li>
                        <li>Electrical inspection & troubleshooting services</li>
                        <li>
                            Electrical switch and light switch installation/ replacement/
                            repair
                        </li>
                        <li>
                            LED, fluorescent, halogen light installation/ replacement/ repair
                        </li>
                        <li>Light, heater and other electrical switches</li>
                        <li>Generator installation and regular maintenance</li>
                        <li>General repairs and troubleshooting</li>
                        <li>Hi-power water pressure motor pump & control panel</li>
                        <li>Main circuit breaker replacement</li>
                        <li>
                            Network cabling services and Data Point installation and cable
                            wiring contractor
                        </li>
                        <li>New and upgraded wiring</li>
                        <li>
                            Power socket & power point installation/ addition/ replacement/
                            repair
                        </li>
                        <li>Power trip or power failure circuit breaker services</li>
                    </ul>
                    <p className="text-justify font-semibold">
                        Having an electrical outage could be damaged any of your electrical
                        appliances and equipments, also it can happen at any time. You don’t
                        want to have just an untrustworthy electrician to come into your
                        home or even business to respond to that situation. In case of an
                        electrical emergency, it is very important to have a reliable
                        emergency 24 hours electrician Singaporeg service including licensed
                        electrical contractors to make sure that you and your belongings are
                        safe and in place.
                    </p>
                    <p className="text-justify font-semibold">
                        If you choose the wrong services and that is done by an
                        inexperienced local electrician it can be a big hassle to deal with
                        electrical issues. Changing an electric bulb wouldn’t make you an
                        electrical engineer. That’s why you need local electrician,
                        especially professional one. Local Carpentry Work Sg will provide you with
                        the best and most experienced professional electrician.
                    </p>
                    <p className="text-justify font-semibold">
                        Affordable and economical pricing that best fit at your local
                        Carpentry Work services with no time restrictions but 24/7. Find local
                        Carpentry Work services at your service for your electrical installation,
                        repair, or even replacement you can easily contact and connect with
                        the local Carpentry Work sg near your area, and contacting task will be
                        delivered in time in front of you when the working procedure is
                        fully satisfied.
                    </p>
                    <h2 className="text-xl font-bold">Need Local Carpentry Work?</h2>
                    <p className="text-justify font-semibold">
                        Do you need to fix anything, repair any kind of equipment s, or even
                        any replacement and you need local Carpentry Work? And the answer is
                        precisely then you are in the right place. Local Carpentry Work sg would
                        like to provide you with the best and most experienced Carpentry Work
                        service in Singapore anywhere anytime.
                    </p>
                </div>
            </section>
            </div>
        </>
    )
}

export default Electrical