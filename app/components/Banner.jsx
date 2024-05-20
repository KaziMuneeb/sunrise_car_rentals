import { FaThumbsUp } from "react-icons/fa6";
function Banner() {
  return (
    <div className=" ">
      <div className="sm:bg-banner bg-no-repeat bg-center bg-cover p-5 sm:h-banner-height flex items-center">
        <div className="sm:grid justify-between sm:grid-cols-2 gap-10 sm:w-11/12 sm:mx-auto shrink  ">
          <div className="space-y-3 sm:space-y-5  self-center">
            <p className="flex gap-3 items-center py-5 rounded-xl w-fit font-semibold">
              <FaThumbsUp className="text-vivid-orange" />
              <span>Making Every Mile Memorable</span>
            </p>

            <h1 className="text-xl font-bold sm:text-5xl">
              Luxury and Comfort, <br />
              <span className="text-vivid-orange">Every Mile of the Way</span>
            </h1>
            <p className="sm:text-lg">
              At Sunrise Car Rental, we pride ourselves on being an enterprising
              and customer-oriented travel agency based in Aurangabad.We are
              dedicated to making your journeys memorable and stress-free.
            </p>
            <button className="bg-vivid-orange font-bold sm:text-xl p-2 rounded">
              <a href="https://api.whatsapp.com/send?phone=9370808989">
                Book Now
              </a>
            </button>
          </div>
          <div className="hidden sm:block ">
            <img src="/images/banner-car.png" alt="" width={600} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
