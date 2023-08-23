import React,{useEffect} from 'react'
import { Helmet } from 'react-helmet';
 
import painting1 from '../../assets/services-image/painting1.jpg'
import painting2 from '../../assets/services-image/painting2.jpg'
import painting3 from '../../assets/services-image/painting3.jpg'

 
const Painting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Painting Services</title>
      </Helmet>
      <div className='bg-gray-300'>
     <section class="mx-5 md:container md:mx-auto py-10 bg-gray-300">
        <h2 class="text-3xl font-bold">Painting Services in Singapore</h2>
        <div class="flex my-5 gap-4">
          <img
            src={painting1}
            class="h-[300px] w-full md:w-1/2 lg:w-full"
            alt=""
          />
          <img
            src={painting2}
            class="h-[300px] w-full hidden md:block md:w-1/2 lg:w-full"
            alt=""
          />
          <img
            src={painting3}
            class="h-[300px] w-full hidden lg:block"
            alt=""
          />
        </div>
        <div class="flex flex-col gap-5">
          <p class="text-justify font-semibold">
            Painting services renovating your house or residence or even
            commercial space and office certainly fulfill the experienced
            outcome and feel fresh while staying. Local Carpentry Work Sg offers the
            best painting renovation in Singapore give you an accurate estimate
            of your painting cost. If you need renovation service for painting
            your house or workplace then you are in the right place right now.
            Paintings can change an older house or office with new ordinary
            look. Local Carpentry Work Sg would like to provide you the expert people
            for your renovated painting need when it is about house or office
            painting with cheap and reasonable prices. Whenever you are
            contracting an experienced painting service like Local Carpentry Work Sg
            is always there for you anytime anywhere nears your area.
          </p>
          <ul class="list-disc">
            <li>Budget friendly services</li>
            <li>Quality and value assurance</li>
            <li>Quality products & workmanship</li>
            <li>Reasonable pricing</li>
            <li>Regional & national coverage</li>
            <li>Suitable scheduling</li>
            <li>Thorough cleanliness</li>
            <li>Timely delivery</li>
          </ul>
          <h2 class="text-xl font-bold">
            Local Carpentry Work SG Painting Renovation Service:
          </h2>
          <ul class="list-disc">
            <li>Artist creative wall paint design</li>
            <li>Anti-mould, anti-fungal, anti-viral, odorless paint</li>
            <li>Ceiling paint</li>
            <li>Custom colour paint</li>
            <li>Dulux paint series</li>
            <li>Epoxy paint</li>
            <li>Exterior paint</li>
            <li>Nippon paint series</li>
            <li>Paintable Sealant</li>
            <li>Paint removal</li>
            <li>Plastering</li>
            <li>Scraping of peeling paint</li>
            <li>Water and Oil-based paint</li>
            <li>Water and Oil-based sealer coating</li>
            <li>Wood stain and paint</li>
          </ul>
          <h2 class="text-xl font-bold">
            Commercial Painting Services in Singapore
          </h2>
          <p class="text-justify font-semibold">
            Local Carpentry Work Sg’s skilled and expert Carpentry Work painters can work on
            any size or structure perfectly for commercial painting service in
            Singapore. Therefore if you need painting renovation for your
            commercial or industrial and residential property, Local Carpentry Work
            Sg’s skillful painters here to provide you with the experienced
            service including the most affordable painters in Singapore
          </p>
          <h2 class="text-xl font-bold">Commercial Painting Services</h2>
          <ul class="list-disc">
            <li>Building painting</li>
            <li>Camp painting</li>
            <li>Factory painting</li>
            <li>Floor/ Epoxy painting</li>
            <li>Hospitals painting</li>
            <li>Industrial painting</li>
            <li>Office painting (exterior and interior)</li>
            <li>Outlet painting</li>
            <li>Retail shop painting</li>
            <li>Schools painting</li>
            <li>Shop painting</li>
            <li>Shopping centres painting</li>
            <li>Warehouse painting</li>
            <li>Wood & metal painting</li>
          </ul>
          <h2 class="text-xl font-bold">Condominium Painting Services</h2>
          <p class="text-justify font-semibold">
            Want a perfect shine and outlook of your condo a facelift and add
            value to your property with Local Carpentry Work Sg’s expert condominium
            painting service Singapore. Stunning combination of various visual
            paints is often the easiest and most affordable way to brighten up
            your lovable condo.
          </p>
          <ul class="list-disc">
            <li>Additional protection of investment</li>
            <li>Compatibility with style & complete makeover</li>
            <li>Emphasis on a clean look</li>
            <li>Heightening of mood</li>
            <li>Improvement aesthetics</li>
            <li>Increase of property value</li>
            <li>Transformation of home appearance</li>
            <li>Exterior condo painting</li>
            <li>Interior condo painting</li>
            <li>Gate painting</li>
            <li>Roof painting</li>
          </ul>
          <h2 class="text-xl font-bold">HDB House Painting Services</h2>
          <p class="text-justify font-semibold">
            Local Carpentry Work Sg’s paint service provider in Singapore offers the
            best HDB house painting service Singapore with wide range of quality
            paints. You want to calling years of working experiences HDB
            painting services provider in Singapore then Local Carpentry Work Sg will
            be there for you.
          </p>
          <ul class="list-disc">
            <li>HDB executive apartment – single storey</li>
            <li>HDB executive apartment – double storeys</li>
            <li>2 room 2 colour</li>
            <li>3 room 2 colour</li>
            <li>4 room 3 colour</li>
            <li>5 room 3 colour</li>
            <li>HDB maisonette apartment</li>
          </ul>
          <h2 class="text-xl font-bold">ICI Painting Services</h2>
          <p class="text-justify font-semibold">
            Since 1931 one of the first alkyd based paints, Dulux is the brand
            name has been used by both Imperial Chemical Industries (ICI) and
            DuPont. In case, you are looking for a reliable ICI painting
            services Singapore from Local Carpentry Work Sg, who can deliver a hassle
            free work. Local Carpentry Work Sg offers Dulux based wide connections of
            painters who are committed and experienced at professional painting
            works.
          </p>
          <ul class="list-disc">
            <li>Colour ceiling</li>
            <li>Corner terrace</li>
            <li>Inter terrace or clustered</li>
            <li>Oil based sealer</li>
            <li>Single room painting</li>
            <li>Shop house</li>
            <li>Water based sealer</li>
            <li>2 room 2 colour</li>
            <li>3 room 2 colour</li>
            <li>4 room 3 colour</li>
            <li>5 room 3 colour</li>
          </ul>
          <h2 class="text-xl font-bold">Landed House Painting Services</h2>
          <p class="text-justify font-semibold">
            In Singapore to the owners housing on landed properties are most the
            important asset classes. Additionally the exterior house painting
            solely last about five to moreover sis years. Local Carpentry Work Sg is a
            standard and professional landed house painting service company with
            experienced and renowned painters in Singapore. Our expertise
            working with any types of landed properties included cleaning and
            washing, clearing up works; erect scaffolding, painting works, wall
            preparation and final inspection for hand over near your area
            anytime in Singapore.
          </p>
          <ul class="list-disc">
            <li>Corner terrace</li>
            <li>Clustered houses</li>
            <li>Detached bungalow and houses</li>
            <li>Good class bungalows</li>
            <li>Inter terrace</li>
            <li>Landed paintings</li>
            <li>Semi detached</li>
            <li>Shop houses</li>
          </ul>
          <h2 class="text-xl font-bold">Nippon Painting Services</h2>
          <p class="text-justify font-semibold">
            Day by day in certain amount of time passes by, commercial or
            residential paint can get faded away or out glowed. After time being
            your chosen colour is out dated or feel like no more suit the rest
            of the furniture and other households. This is why Local Carpentry Work Sg
            offers the expertise and superb Nippon paint services in Singapore
            whenever you are calling for painting service.
          </p>
          <ul class="list-disc">
            <li>All in 1 odourless white paint</li>
            <li>Anti mould for ceilings paint</li>
            <li>Easy wash</li>
            <li>Expresskote</li>
            <li>Matex</li>
            <li>MozzieGaurd</li>
            <li>Odourless sealer</li>
            <li>Weatherbond</li>
            <li>Vinyl Silk</li>
          </ul>
          <h2 class="text-xl font-bold">Room Painting Services</h2>
          <p class="text-justify font-semibold">
            Local Carpentry Work Sg is the best and professional room painting
            services you are looking for only a few rooms in your place that
            provides room painting services in Singapore. May be it is your
            bedroom, living room or kitchen in your condo, HDB or landed home we
            are the professional painters for your room painting service to all
            around Singapore.
          </p>
          <ul class="list-disc">
            <li>Cabinet painting or refinishing</li>
            <li>Deck painting and staining</li>
            <li>Fence and door painting</li>
            <li>Home exterior painting</li>
            <li>Paint removal</li>
            <li>Special textured painting</li>
          </ul>
          <h2 class="text-xl font-bold">
            Painting Renovation Service Contact:
          </h2>
          <p class="text-justify font-semibold">
            In the end, there are various types of renovation service we’re
            providing in Singapore near your area anytime with the expert hands.
            If you need any type standard or touch up painting service or even
            any wall painting services then feel free to call up on painting
            renovation service contact for Local Carpentry Work Sg:+65 87743027
          </p>
        </div>
      </section>
       </div>
    </>
  )
}

export default Painting