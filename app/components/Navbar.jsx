"use client";
import { useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Places to visit",
    url: "/places",
  },
  {
    title: "Gallery",
    url: "/gallery",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <nav className=" p-2  sm:w-11/12 sm:mx-auto sm:h-20">
      <div
        className={`${
          isOpen
            ? "w-2/3 fixed left-0 top-0 z-50 bg-base-color/95 h-full"
            : " hidden "
        } sm:flex sm:w-auto sm:relative sm:bg-white sm:h-auto `}
      >
        <div className=" sm:flex sm:flex-row sm:items-center sm:justify-between sm:grow">
          <span className="flex items-center p-3 bg-white  space-x-8 justify-between">
            <span>
              <Logo width={70} height={70} type={"small"} />
            </span>
            <span
              className="text-vivid-orange font-black	sm:hidden"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              &#10005;
            </span>
          </span>

          <ul className="flex sm:flex-row flex-col text-slate-200   font-medium  col-span-full self-center  sm:bg-white sm:text-base-color  mt-5 sm:mt-0 gap-6">
            {navLinks.map((link) => (
              <li key={link.title} onClick={() => setIsOpen(!isOpen)}>
                <Link
                  href={link.url}
                  className={`  hover:text-vivid-orange p-3 ${
                    currentPath === link.url && "  text-vivid-orange"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden sm:block sm:p-2 sm:bg-vivid-orange sm:text-base-color sm:font-semibold rounded">
            <button>
              <a href="https://api.whatsapp.com/send?phone=9370808989">
                Book Now
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex items-center">
        <div
          className="   space-y-1 "
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className="bg-vivid-orange w-8 h-1 block rounded-md	"></span>
          <span className="bg-vivid-orange w-6 h-1 block rounded-md	 "></span>
          <span className="bg-vivid-orange w-4 h-1 block  rounded-md	 "></span>
        </div>
        <div className="grow flex  justify-center">
          <Logo height={170} width={170} type="normal" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
