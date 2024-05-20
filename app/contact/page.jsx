import { MdAddCall } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { CiMail } from "react-icons/ci";
function page() {
  return (
    <div className="">
      <div className="hidden  sm:bg-contact  bg-cover bg-center p-5 h-96 text-center sm:flex items-center justify-center flex-col ">
        <div className="pt-16">
          <p className=" text-vivid-orange text-lg">GET IN TOUCH</p>
          <h1 className=" text-5xl font-semibold text-slate-50">
            Contact <span className=" text-vivid-orange">Us</span>
          </h1>
        </div>
      </div>
      <div>
        <div className="relative sm:flex sm:justify-center">
          <ul className=" flex flex-col sm:flex-row    bg-bg-grey  sm:bg-inherit space-y-5 p-5  sm:w-11/12 sm:mx-auto sm:gap-10  sm:justify-center sm:px-60 ">
            <h1 className=" text-3xl font-semibold text-base-color sm:hidden ">
              Contact <span className=" text-vivid-orange">Us</span>
            </h1>
            <li className="flex flex-col text-center items-center gap-5   sm:bg-bg-grey sm:py-8 rounded-lg sm:justify-center sm:basis-72 shrink-0	">
              <span className="rounded-full bg-vivid-orange p-3">
                <CiMail className="text-xl text-base-color font-semibold sm:text-2xl" />
              </span>
              <span>
                <h6 className="font-semibold text-sm text-vivid-orange sm:text-lg">
                  Write to us
                </h6>
                <p className="text-xs sm:text-base">kazimuneeb5@gmail.com</p>
              </span>
            </li>
            <li className="flex flex-col text-center items-center gap-5  sm:bg-bg-grey   sm:py-8 rounded-lg sm:justify-center sm:basis-72 shrink-0	">
              <span className="rounded-full bg-vivid-orange p-3">
                <MdOutlineWatchLater className="text-xl text-base-color font-semibold sm:text-2xl" />
              </span>
              <span>
                <h6 className="font-semibold text-sm text-vivid-orange sm:text-lg">
                  Open hours
                </h6>
                <p className="text-xs sm:text-base">Open 24 Hrs</p>
              </span>
            </li>
            <li className="flex flex-col text-center items-center gap-5  sm:bg-bg-grey  sm:py-8 rounded-lg sm:justify-center sm:basis-72 shrink-0	">
              <span className="rounded-full bg-vivid-orange p-3">
                <MdAddCall className="text-xl text-base-color font-semibold sm:text-2xl" />
              </span>
              <span>
                <h6 className="font-semibold text-sm text-vivid-orange sm:text-lg">
                  Call us
                </h6>
                <p className="text-xs sm:text-base">+91 9890313072</p>
              </span>
            </li>
            <li className="flex flex-col text-center items-center gap-5  sm:bg-bg-grey  sm:py-8 rounded-lg sm:justify-center sm:basis-80 shrink-0	">
              <span className="rounded-full bg-vivid-orange p-3">
                <FaLocationDot className="text-xl text-base-color font-semibold sm:text-2xl" />
              </span>
              <span>
                <h6 className="font-semibold text-sm text-vivid-orange sm:text-lg">
                  Address
                </h6>
                <p className="text-xs sm:text-base">
                  Shop no- 43 Sant Gadge vyapari <br /> mahasankul near bhaji
                  mandi Railway station Aurangabad
                </p>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className=" bg-bg-grey sm:bg-white grid  sm:my-14  sm:space-y-10   sm:mx-auto">
        <h1 className=" text-3xl font-semibold hidden sm:block sm:text-center">
          Location
        </h1>
        <div className=" place-self-center ">
          <h1 className=" text-3xl font-semibold block sm:hidden mt-10 mb-5">
            Location
          </h1>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15009.917035176915!2d75.3116618!3d19.8619749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9859313f6993%3A0xb8d33b752399114a!2sSunrise%20Car%20Rentals!5e0!3m2!1sen!2sin!4v1710498894790!5m2!1sen!2sin"
            width={350}
            height={280}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-auto sm:w-map-width  mx-auto sm:h-[500px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default page;
