function page() {
  return (
    <div>
      <div className="sm:bg-banner bg-no-repeat bg-center bg-cover p-5 ">
        <div className="sm:grid justify-between sm:grid-cols-2  sm:w-11/12 sm:mx-auto">
          <div className="space-y-3 sm:space-y-10 ">
            <h1 className="text-xl font-bold sm:text-5xl">
              Find Your Best <br />
              <span className="text-vivid-orange">Dream Car for Rental</span>
            </h1>
            <p className="sm:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button className="bg-vivid-orange font-bold sm:text-xl p-2 rounded">
              View All Cars{" "}
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

export default page;
