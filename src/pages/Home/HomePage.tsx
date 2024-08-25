import HeroBanner from "./HeroBanner";
import NewsletterSignup from "./Newsletter";
import ServiceAdvertisement from "./ServiceAdvertisement";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = () => {
  return (
    <div className="">
      <HeroBanner />
      <ServiceAdvertisement />
      <Testimonials />
      <NewsletterSignup />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
