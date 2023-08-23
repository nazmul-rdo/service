import React,{useEffect} from 'react'
import { Helmet } from 'react-helmet';

 
import plumbing1 from '../../assets/services-image/plumbing1.jpg'
import plumbing2 from '../../assets/services-image/plumbing2.jpg'
import plumbing3 from '../../assets/services-image/plumbing3.jpg'
 
const Plumbing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Plumbing Services</title>
      </Helmet>
      <div className='bg-gray-300'>
     <section class="mx-5 md:container md:mx-auto py-10 bg-gray-300">
        <h2 class="text-3xl font-bold">Plumbing Services in Singapore</h2>
        <div class="flex my-5 gap-4">
          <img src={plumbing2} class="h-[300px] w-full" alt="" />
          <img
            src={plumbing3}
            class="h-[300px] w-full hidden md:block"
            alt=""
          />
          <img
            src={plumbing1}
            class="h-[300px] w-full hidden lg:block"
            alt=""
          />
        </div>
        <div class="flex flex-col gap-5">
          <p class="text-justify font-semibold">
            Getting frustrated when you don’t find the right plumber and
            plumbing services is a common phenomenon. We want to help you by
            bringing professionally trained plumbers at your door-step. Our aim
            is to bring together a pool of proficient plumbers who can be
            available at all times to provide top-class services to our
            customers. We guarantee that we will provide you will dynamic and
            efficient plumbers who have experience of several years in the
            field. Customer satisfaction is our priority and we provide services
            that are at par with international standards. We are a trusted brand
            who provides all kinds of plumbing solutions. We offer supreme
            plumbing services at the best price available in the market. You
            just need to give us a call and one of our servicemen will be
            available to you within 24 hours.
          </p>
          <h2 class="text-xl font-bold">Our Plumber team are all LOCALS</h2>
          <h5 class="text-lg font-semibold">Highly experienced Staff</h5>
          <p class="text-justify font-semibold">
            We take pride in our highly experienced, friendly and courteous
            staff that provides plumbing services. Our staff is licensed and
            certified plumbing experts who are always delighted to provide
            on-time service guarantee.
          </p>
          <h5 class="text-lg font-semibold">Transparent pricing</h5>
          <p class="text-justify font-semibold">
            We have a transparent pricing where you get the breakup of the total
            cost and every detail regarding the pricing is provided to the
            customer. We certainly provide the most affordable in-house service
            to our customers.
          </p>
          <h5 class="text-lg font-semibold">Guaranteed free service</h5>
          <p class="text-justify font-semibold">
            In the case of recurrence of the same problem within 10 days of our
            service, we provide a free service to our customers. Our aim is to
            provide services that go beyond customer expectation. We want to
            ensure that you have a total peace of mind once you call us.
          </p>
          <h2 class="text-xl font-bold">What makes us different?</h2>
          <h5 class="text-lg font-semibold">Prioritising</h5>
          <p class="text-justify font-semibold">
            We offer emergency services to clients who have the urgency to get
            the work done. We will always put you in the top list of priority if
            you call us on our emergency line and give
          </p>
          <h5 class="text-lg font-semibold">Pricing & Regular services</h5>
          <p class="text-justify font-semibold">
            We offer very nominal pricing plans and regular servicing that can
            help you prevent any plumbing issues that can emerge. We guarantee
            the best plumbing services Singapore.
          </p>
          <h5 class="text-lg font-semibold">Special Offers</h5>
          <p class="text-justify font-semibold">
            We always have special offers for our regular customers. We
            customise the offers based on the needs of the customers. We have
            monthly, quarterly and yearly plans.
          </p>
          <h5 class="text-lg font-semibold">Customer Database</h5>
          <p class="text-justify font-semibold">
            We maintain a database for customers to ensure we provide on-time
            service to them. We try to arrange a preventive plumber visit to
            check for possible plumbing issues that can emerge.
          </p>
          <h5 class="text-lg font-semibold">All plumbing needs covered</h5>
          <p class="text-justify font-semibold">
            We provide a one stop solution for all plumbing needs. You can just
            give us a call and we will take care of all your plumbing related
            needs.
          </p>
          <p class="text-justify font-semibold">
            What are you waiting for? Call us and get a free preventive
            assessment done. We provide 24 hours service for your needs ranging
            from drain cleaning to plumbing inspection. Our experts are trained
            in dealing with the problem in kitchen or bathroom. We work with or
            without material. We are always ready to help with our latest tools
            to achieve the best results. We are always happy to walk an extra
            mile for 100% customer satisfaction.
          </p>
        </div>
      </section>
      </div>
    </>
  )
}

export default Plumbing