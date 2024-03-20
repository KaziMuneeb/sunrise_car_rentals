import { RiServiceLine } from "react-icons/ri";
import { MdCarRental } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const whyChooseUs = [
  {
    title: "Our Services",
    desc: "Sunrise Car Rental is well known and oldest car rental services in Aurangabad and offering luxurious Car Rental Services to tourists.",
    logo: <RiServiceLine />,
  },
  {
    title: "Our Fleet",
    desc: "Sunrise Car Rental Aurangabad, enjoys a high reputation for providing reliable, personalized, and professional services. Trust us for Reliable & Premium Car Rental Services in Aurangabad.",
    logo: <MdCarRental />,
  },
  {
    title: "Car Rental",
    desc: "Sunrise Car Rental offer cars on hire in Aurangabad. We offer you a choice to rent a variety of economy cars, Clean Cars and Courteous Drivers on Affordable Rates.",
    logo: <GiReceiveMoney />,
  },
];

function page() {
  return (
    <div className="w-11/12 mx-auto  my-10">
      <div className="grid lg:grid-cols-2 sm:gap-x-16 gap-y-5">
        <div className="relative sm:px-5">
          <div className="bg-vivid-orange absolute w-7/12 h-full rounded-xl flex items-center justify-start">
            <span className=" -rotate-90 transform h-fit pb-28 text-slate-50 font-semibold sm:text-xl sm:pb-40 lg:text-xl lg:pb-40 xl:text-2xl xl:pb-48">
              15+ Years of experience
            </span>
          </div>
          <div className=" relative z-10 pl-16 py-5 sm:py-6 ">
            <img
              src="/images/about-us_image.png"
              alt="abt_image"
              className="rounded-xl "
            />
          </div>
        </div>
        <div className=" self-center">
          <h1 className=" text-base-color text-xl lg:text-2xl font-semibold xl:text-4xl sm:mb-3 mb-1">
            Welcome to Sunrise Car Rental
          </h1>
          <span className="text-text-grey text-xs sm:text-sm  lg:text-sm xl:text-lg">
            We take the pleasure of introducing ourselves as an enterprising and
            customer Oriented Travel Agency located in Aurangabad, self name and
            style of{" "}
            <span className="text-vivid-orange">Sunrise Car Rental</span> The
            agency is being managed by Shaikh Imran who accounts for 15 years of
            experience in travel industry aiming to one stop shop for all
            travels and tours holidays needs under one roof. Sunrise Car Rental
            aiming to be the{" "}
            <span className="text-vivid-orange">
              ONE STOP SHOP FOR ALL TRAVEL AND TOUR NEEDS
            </span>{" "}
            of every discerning traveler. F.I.T.S, Groups, Beach Holidays,
            Incentives,Conferences, Theme Holidays such as Cruise, Camping,
            Ecological,Educational and Pilgrimage, Sunrise Car Rental is geared
            to offer excellent value for money with following specialized
            services to our client. We offer services of domestic airlines
            ticket like Jet Airways, Indian Airlines, Sahara Airlines,
            Kingfisher, Spice Jet, Air Deccan, Paramount Airways, Go Air and
            dealing with all International Airlines with competitive prize and
            provide better services to our client.
          </span>
        </div>
      </div>
      <div className="grid  md:grid-cols-3 gap-x-10 gap-y-10 my-16 place-items-center ">
        <h1 className="md:col-span-3">Why Choose Us</h1>
        {whyChooseUs.map((block) => (
          <div
            key={block.title}
            className=" place-items-center grid self-center"
          >
            <span>{block.logo}</span>
            <h2>{block.title}</h2>
            <span className="text-center">{block.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
