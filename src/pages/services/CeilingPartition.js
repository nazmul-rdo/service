import { Helmet } from 'react-helmet'


 
import ceiling_partition1 from '../../assets/services-image/ceiling_partition2.jpg'
import ceiling_partition2 from '../../assets/services-image/Carpentry-1.jpeg'

import ceiling_partition3 from '../../assets/services-image/ceiling_partition1.jpg'




const CeilingPartition = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ceiling Partition Services</title>
      </Helmet>
      <div className='bg-gray-300'>
        <section className="mx-5 md:container md:mx-auto py-10 ">
          <h2 className="text-3xl font-bold">Ceiling Partition Services in Singapore</h2>
          <div className="flex my-5 gap-4">
            <img
              src={ceiling_partition1}
              className="h-[300px] w-full md:w-1/2 lg:w-full"
              alt=""
            />
            <img
              src={ceiling_partition2}
              className="h-[300px] w-full hidden md:block md:w-1/2 lg:w-full"
              alt=""
            />
            <img
              src={ceiling_partition3}
              className="h-[300px] w-full hidden lg:block"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-justify font-semibold">
              Ceiling partition installation and maintenance is important to ensure its safety and longevity, and it is recommended to hire a professional contractor who is experienced in ceiling partition installation.
            </p>
            <p className="text-justify font-semibold">
              Our ceiling partition service is installation of a partition or divider that is suspended from the ceiling of a room or space. The partition can be made of different materials, such as metal, wood, glass, or gypsum, and can be used to divide a large space into smaller sections, create private areas, or improve acoustics.
            </p>
            <h2 className="text-3xl font-bold"> General Ceiling Partition</h2>
            <p className="text-justify font-semibold">
              There are different and various types of carpenter services are
              available in Singapore. Customize shelves or furniture, any display
              into a partition or mounting picture frame, alteration and repair of
              cabinet, doors, door frame and shelves or handrails, varnish woods
              etc. We are enlisted the most common carpenter services list in the
              followings:
            </p>

            <h2 className="text-3xl font-bold"> Home Ceiling Partition Services</h2>
            <p className="text-justify font-semibold">
              Ceiling partitions are commonly used in offices, conference rooms, and other commercial spaces to create separate workspaces or meeting areas. They can also be used in homes to divide rooms or create additional living spaces.
            </p>

            <h2 className="text-3xl font-bold">Furniture Assembly</h2>
            <p className="text-justify font-semibold">
              Our ceiling partition service involves the design, fabrication, and installation of the partition. We will work with the client to determine the appropriate materials and design for the partition, taking into consideration factors such as the size and shape of the space, the desired level of privacy or soundproofing, and the aesthetic preferences of the client.
            </p>

            <h2 className="text-3xl font-bold">General Carpentry Services</h2>
            <p className="text-justify font-semibold">
              Overall, Our ceiling partition service can be an effective way to enhance the functionality and versatility of a space, while also providing a stylish and modern design element.
            </p>



          </div>
        </section>
      </div>
    </>
  )
}

export default CeilingPartition