"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Veera raghavan",
    text: "The service was prompt by the operator and the Driver Ayub is very knowledgeable on all the topics discussed with him. He was very kind and caring",
    url: "https://lh3.googleusercontent.com/a-/ALV-UjUSN4PsC6RNroR4qhE3XGbfGrAp6Qw17FoxLW1u9PvNtKbeDXMJnw=w75-h75-p-rp-mo-ba3-br100",
  },
  {
    name: "Nikhil Gharat",
    text: "Sunrise car Rental - Travel agency is a very nice and experienced travel agency. The service provided by them is really great and well planned.",
    url: "https://lh3.googleusercontent.com/a-/ALV-UjUbvQjzukz72B_ZUC9DYNsOY6AwdWjrtjKhWSeqsB1RvVYWPLeA=w75-h75-p-rp-mo-ba2-br100",
  },
  {
    name: "Debasish Roy",
    text: "I had a great experience with Sunrise Taxi as I was able to cover Ajanta and Ellora in one single day which other taxi companies refused to do so. The car was nice and clean, driver was polite and knowledgeable and guided me through the right track always. Highly recommended !",
    url: "https://lh3.googleusercontent.com/a-/ALV-UjUI63edPs7Gn13_Pi6chFSnrl6KmZ791kAjwMiePiO7u658hKk5Lg=w75-h75-p-rp-mo-ba3-br100",
  },
  {
    name: "Ayushi mehta",
    text: "Highly recommended: Amazing Service, polite drivers and they'll help you out to plan itenary considering your needs.",
    url: "https://lh3.googleusercontent.com/a-/ALV-UjWhs_4Jy35_kEjjl3IbNI7fUku7PPLKQ9A3LkSRk-uhRf5Y4Qih=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Yogita Gautam",
    text: "Used an ac cab Toyota etios. The car arrived absolutely on time. Driver Mr. Ayub was super helpful giving us brief history of the place and the monuments we were visiting.",
    url: "https://lh3.googleusercontent.com/a-/ALV-UjW6U3OEDtH7k_zA2ZZkx1wA6kDNFXCmGSdWSkWeKtls4_5D6CQ=w75-h75-p-rp-mo-br100",
  },
];

function Testimonials() {
  const settings = {
    // className: "center",
    // centerMode: true,
    // centerPadding: "120px",
    // speed: 500,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" mx-auto py-10 sm:py-28 bg-bg-grey">
      <h1 className="text-center text-3xl font-bold sm:text-5xl sm:tracking-wider text-vivid-orange pb-8 sm:mb-10 ">
        Testimonials
      </h1>
      <div className="slider-container overflow-hidden  ">
        <Slider {...settings}>
          {testimonials.map((testim, i) => (
            <figure
              className="max-w-screen-md mx-auto text-center px-8"
              key={testim.name}
            >
              <svg
                className="w-6 h-6 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-xl italic font-medium text-gray-900 dark:text-white">
                  {testim.text}
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                  className="w-6 h-6 rounded-full"
                  src={testim.url}
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                    {testim.name}
                  </cite>
                </div>
              </figcaption>
            </figure>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
