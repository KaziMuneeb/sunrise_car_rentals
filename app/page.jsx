import Banner from "./components/Banner";
import Fleet from "./components/Fleets";
import ImageGallery from "./components/ImageGallery";
import Testimonials from "./components/Testimonials";
// import { Testimonials } from "./components/Testimonials";
// import { Testimonials } from "./components/Testimonials";

function page() {
  return (
    <>
      <Banner />
      <Fleet />
      <ImageGallery />
      <Testimonials />
    </>
  );
}

export default page;
