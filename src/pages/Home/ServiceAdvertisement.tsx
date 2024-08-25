const ServiceAdvertisement = () => {
  return (
    <>
      <section className="service-advertisement py-16 light:bg-gray-100 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-color-heading dark:text-color-darkHeading ">
            Service Advertisement?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-item py-10 px-4 bg-white dark:bg-[#111c33] shadow-lg rounded-lg">
              <i className="icon-clock text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-semibold">Real-Time Availability</h3>
              <p className="text-gray-600 mt-2">
                Book with confidence knowing that our availability is always
                up-to-date.
              </p>
            </div>
            <div className="service-item p-4 bg-white shadow-lg rounded-lg">
              <i className="icon-check text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-semibold">
                Instant Booking Confirmation
              </h3>
              <p className="text-gray-600 mt-2">
                Get instant confirmation on all your bookings, with no waiting
                time.
              </p>
            </div>
            <div className="service-item p-4 bg-white shadow-lg rounded-lg">
              <i className="icon-calendar text-4xl text-yellow-500 mb-4"></i>
              <h3 className="text-xl font-semibold">Flexible Scheduling</h3>
              <p className="text-gray-600 mt-2">
                Easily reschedule or cancel appointments at your convenience.
              </p>
            </div>
            <div className="service-item p-4 bg-white shadow-lg rounded-lg">
              <i className="icon-headset text-4xl text-red-500 mb-4"></i>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-600 mt-2">
                We're here to help whenever you need it, day or night.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAdvertisement;
