import HeroBanner from "./HeroBanner";
import LatestRoom from "./LatestRoom";
import NewsletterSignup from "./Newsletter";
import ServiceAdvertisement from "./ServiceAdvertisement";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <ServiceAdvertisement />
      <LatestRoom />
      <Testimonials />
      <NewsletterSignup />
      <WhyChooseUs />
    </>
  );
};

export default HomePage;
