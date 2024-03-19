function page() {
  return (
    <div className="w-11/12 mx-auto ">
      <div className="grid sm:grid-cols-2 sm:gap-x-16 gap-y-5">
        <div className="relative sm:px-5">
          <div className="bg-vivid-orange absolute w-7/12 h-full rounded-xl flex items-centre justify-center">
            {/* absolute top-[16rem] -left-20 text-xl */}
            <span className=" -rotate-90 transform ">
              15+ Years of experience
            </span>
          </div>
          <div className=" relative z-10 pl-16 py-5 sm:py-6">
            {/* <img
              src="/images/about-us_image.png"
              alt="abt_image"
              className="rounded-xl "
            /> */}
          </div>
        </div>
        <div className=" self-center">
          <h1 className="text-2xl text-base-color sm:text-4xl font-semibold sm:mb-5">
            Welcome to Sunrise Car Rental
          </h1>
          <span className="text-text-grey text-sm sm:text-lg">
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
    </div>
  );
}

export default page;
