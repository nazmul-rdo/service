import { Helmet } from 'react-helmet'
import interior_renation1 from '../../assets/services-image/interior_renation1.jpg'
import interior_renation2 from '../../assets/services-image/interior_renation2.jpg'
import interior_renation3 from '../../assets/services-image/interior_renation3.jpg'


const InteriorRenation = () => {
  return (
    <><Helmet>
      <meta charSet="utf-8" />
      <title>Interior Renation Services</title>
    </Helmet>
      <div className='bg-gray-300'>
        <section className="mx-5 md:container md:mx-auto py-10 ">
          <h2 className="text-3xl font-bold">Interior Renation Services in Singapore</h2>
          <div className="flex my-5 gap-4">
            <img
              src={interior_renation1}
              className="h-[300px] w-full md:w-1/2 lg:w-full"
              alt=""
            />
            <img
              src={interior_renation2}
              className="h-[300px] w-full hidden md:block md:w-1/2 lg:w-full"
              alt=""
            />
            <img
              src={interior_renation3}
              className="h-[300px] w-full hidden lg:block"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-justify font-semibold">
              Our company is the leading full-service interior design company in Singapore. We are passionate about creating beautiful interiors that are tailored to your lifestyle and personality, whilst balancing the demands of everyday life.
            </p>

            <h2 className="text-3xl font-bold">Interior Renation Services in Singapore</h2>
            <p className="text-justify font-semibold">
              Our company  provides a wide and flexible range of modern luxury interior design services. Our team always strives to deliver a diverse scope of briefs across residential and commercial projects.
            </p>

            <h2 className="text-3xl font-bold">Design Everest Interior Renation</h2>
            <p className="text-justify font-semibold">
              Design Everest’s blog might be for you. DE provides architectural and engineering services for Singapore Carpentry Work- and their blog provides a wealth of information on those subjects. From ADUs to mixed-use buildings to Singapore building permits, there’s a lot to learn.
            </p>

            <h2 className="text-3xl font-bold">Basic Interior Renation Service</h2>
            <p className="text-justify font-semibold">
            Basic renovation refers to the repair and improvement of roofs, downspouts, basements, floors, and walls. Generally, it is the regular maintenance of important parts of a room or entire place.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default InteriorRenation