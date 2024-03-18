import { MdAddCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className=" bg-base-color">
      <div className="p-4 sm:py-10 text-slate-100 space-y-8 sm:space-y-12 sm:w-11/12 sm:mx-auto">
        <ul className="grid sm:grid-cols-3 gap-5 items-start">
          <li className="flex items-center gap-5">
            <span className="rounded-full bg-vivid-orange p-3 self-start">
              <MdAddCall className="text-xl text-base-color font-semibold sm:text-2xl" />
            </span>
            <span>
              <h6 className="font-semibold text-sm text-vivid-orange sm:text-lg">
                Call us
              </h6>
              <p className="text-xs sm:text-base">+91 9890313072</p>
            </span>
          </li>
          <li className="flex items-center gap-5">
            <span className="rounded-full bg-vivid-orange p-3 self-start">
              <CiMail className="text-xl text-base-color font-semibold sm:text-2xl" />
            </span>
            <span>
              <h6 className="font-semibold text-sm text-vivid-orange sm:text-lg">
                Write to us
              </h6>
              <p className="text-xs sm:text-base">kazimuneeb5@gmail.com</p>
            </span>
          </li>
          <li className="flex items-center gap-5">
            <span className="rounded-full bg-vivid-orange p-3 self-start">
              <IoLocationOutline className="text-xl text-base-color font-semibold sm:text-2xl" />
            </span>
            <span>
              <h6 className="font-semibold text-sm text-vivid-orange sm:text-lg">
                Address
              </h6>
              <p className="text-xs sm:text-base">
                Mohammadi Chowk, Beed By Pass Road, Station
                Road,Aurangabad-Maharashtra - 431005
              </p>
            </span>
          </li>
        </ul>

        <ul className="grid sm:grid-cols-3 gap-5 grid-cols-2 sm:gap-x-11">
          <li className="space-y-1 sm:space-y-3 col-span-full sm:col-auto">
            <h3 className="sm:text-2xl">
              <span className="text-vivid-orange  ">S</span>UNRISE
            </h3>
            <p className="text-xs sm:text-lg">
              Rent a car imperdiet sapien porttito the bibenum ellentesue the
              commodo erat nesuen.
            </p>
          </li>

          <li className=" space-y-1 sm:space-y-3 sm:pl-14">
            <h3 className="text-vivid-orange sm:text-2xl">Quick Links</h3>
            <ul className="text-sm sm:text-lg list-disc list-disc-vivid-orange pl-4">
              <li>
                <p>About</p>
              </li>
              <li>
                <p>Contact</p>
              </li>
              <li>
                <p>Cars</p>
              </li>
              <li>
                <p>Car Types</p>
              </li>
              <li>
                <p>Team</p>
              </li>
            </ul>
          </li>
          <li className="pt-6">
            <ul className="flex gap-x-3">
              <li>
                <FaWhatsapp className="text-3xl text-white font-semibold sm:text-4xl" />
              </li>
              <li>
                <FaFacebook className="text-3xl text-white font-semibold sm:text-4xl" />
              </li>
              <li>
                <FaInstagram className="text-3xl text-white font-semibold sm:text-4xl" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
