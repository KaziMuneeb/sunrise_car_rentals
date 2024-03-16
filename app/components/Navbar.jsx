"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <nav className=" p-2 relative sm:w-11/12 sm:mx-auto">
      <div
        className={`${
          isOpen
            ? "w-2/3 fixed left-0 top-0 z-50 bg-base-color/95 h-screen"
            : " hidden "
        } sm:flex sm:w-auto sm:relative sm:bg-white sm:h-auto `}
      >
        <div className=" sm:flex sm:flex-row sm:items-center sm:justify-between sm:grow">
          <span className="flex items-center p-3 bg-white  space-x-8">
            <span>
              <Logo width={170} height={170} />
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
            <li className="">
              <Link
                href={"/"}
                className={`  hover:text-vivid-orange p-3 ${
                  currentPath === "/" && "  text-vivid-orange"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                href={"/listings"}
                className={` p-3  hover:text-vivid-orange	${
                  currentPath === "/listings" &&
                  " font-semibold text-vivid-orange "
                }`}
              >
                Listings
              </Link>
            </li>
            <li className=" ">
              <Link
                href={"/contact"}
                className={`p-3  hover:text-vivid-orange ${
                  currentPath === "/contact" && "  text-vivid-orange"
                }`}
              >
                Contact Us
              </Link>
            </li>

            <li className="">
              <Link
                href={"/about"}
                className={`p-3 hover:text-vivid-orange  ${
                  currentPath === "/about" && "  text-vivid-orange"
                }`}
              >
                About Us
              </Link>
            </li>
          </ul>
          <div className="hidden sm:block sm:p-2 sm:bg-vivid-orange sm:text-base-color sm:font-semibold rounded">
            <button>Listing</button>
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
          <Logo height={30} width={30} type="small" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
