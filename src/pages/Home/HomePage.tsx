import HeroBanner from "./HeroBanner";
import ServiceAdvertisement from "./ServiceAdvertisement";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = () => {
  return (
    <div className="">
      <HeroBanner />
      <ServiceAdvertisement />
      <Testimonials />

      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
