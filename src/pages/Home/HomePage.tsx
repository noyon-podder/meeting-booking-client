import HeroBanner from "./HeroBanner";
import LatestRoom from "./LatestRoom";
import NewsletterSignup from "./Newsletter";
import PopularRooms from "./PopularRooms";
import ServiceAdvertisement from "./ServiceAdvertisement";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <ServiceAdvertisement />
      <PopularRooms />
      <LatestRoom />
      <Testimonials />
      <WhyChooseUs />
      <NewsletterSignup />
    </>
  );
};

export default HomePage;
