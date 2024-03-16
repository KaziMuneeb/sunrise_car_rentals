import { MdAddCall } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";

import { CiMail } from "react-icons/ci";
function page() {
  return (
    <div className="">
      <div className="hidden  sm:bg-contact bg-no-repeat bg-cover bg-center p-5 h-96 text-center sm:flex items-center justify-center flex-col ">
        <div className="pt-16">
          <p className=" text-vivid-orange text-lg">GET IN TOUCH</p>
          <h1 className=" text-5xl font-semibold text-slate-50">
            Contact <span className=" text-vivid-orange">Us</span>
          </h1>
        </div>
      </div>
      <div>
        <div className="relative">
          <ul className=" flex flex-col sm:flex-row    bg-bg-grey  sm:bg-inherit space-y-5 p-5 rounded-lg sm:w-11/12 sm:mx-auto sm:gap-10  sm:justify-center sm:px-60 sm:absolute sm:-top-24">
            <h1 className=" text-3xl font-semibold text-base-color sm:hidden ">
              Contact <span className=" text-vivid-orange">Us</span>
            </h1>
            <li className="flex items-center gap-5 flex-1  sm:bg-bg-grey sm:py-8 rounded-lg sm:justify-center">
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
            <li className="flex items-center gap-5  sm:bg-bg-grey flex-1  sm:py-8 rounded-lg sm:justify-center">
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
            <li className="flex items-center gap-5  sm:bg-bg-grey flex-1 sm:py-8 rounded-lg sm:justify-center">
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
            <li className=""></li>
          </ul>
        </div>
      </div>
      <div className=" bg-bg-grey sm:bg-white grid sm:grid-cols-2 p-5 sm:my-28 gap-y-5  sm:w-11/12 sm:mx-auto">
        <h1 className=" text-3xl font-semibold sm:text-center ">
          Get in touch
        </h1>
        <h1 className=" text-3xl font-semibold hidden sm:block sm:text-center">
          Location
        </h1>
        <div className=" ">
          <form action="" className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="p-2 rounded-2xl sm:bg-bg-grey sm:p-5"
            />
            <input
              type="text"
              placeholder="Your email"
              className="p-2 rounded-2xl sm:bg-bg-grey sm:p-5"
            />
            <input
              type="text"
              placeholder="Your number"
              className="p-2 rounded-2xl sm:bg-bg-grey sm:p-5"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-2 rounded-2xl sm:bg-bg-grey sm:p-5"
            />
            <textarea
              type="text"
              placeholder="Message"
              className=" col-span-full p-2 rounded-xl sm:bg-bg-grey sm:p-5"
            />
            <button className=" bg-vivid-orange  p-2 rounded-2xl">
              Submit
            </button>
          </form>
        </div>
        <div className=" place-self-center ">
          <h1 className=" text-3xl font-semibold block sm:hidden mt-10 mb-5">
            Location
          </h1>
          <span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15009.917035176915!2d75.3116618!3d19.8619749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9859313f6993%3A0xb8d33b752399114a!2sSunrise%20Car%20Rentals!5e0!3m2!1sen!2sin!4v1710498894790!5m2!1sen!2sin"
              width="350"
              height="280"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=""
            ></iframe>
          </span>
        </div>
      </div>
    </div>
  );
}

export default page;
