import HeroBanner from "./HeroBanner";
import LatestRoom from "./LatestRoom";
import NewsletterSignup from "./Newsletter";
import ServiceAdvertisement from "./ServiceAdvertisement";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = () => {
  return (
    <div className="">
      <HeroBanner />
      <ServiceAdvertisement />
      <LatestRoom />
      <Testimonials />
      <NewsletterSignup />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
