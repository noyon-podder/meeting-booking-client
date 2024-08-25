import Container from "@/components/Container";
import SwiperSliderWrapper from "./SwiperSliderWrapper";

const Testimonials = () => {
  return (
    <div className="lg:py-16 py-10 ">
      <Container>
        <div>
          <h2 className="lg:text-4xl text-2xl font-bold lg:mb-10 mb-5 text-color-heading dark:text-color-darkHeading text-center font-mono">
            What Our Customers Say
          </h2>
        </div>

        <SwiperSliderWrapper />
      </Container>
    </div>
  );
};

export default Testimonials;
