import SubBanner from "@/components/Shared/SubBanner";
import ContactUsForm from "./ContactUsForm";
import NewsletterSignup from "../Home/Newsletter";

const ContactPage = () => {
  const breadcrumb = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <SubBanner
        backgroundImage="/contact.jpg"
        title="Contact Us"
        breadcrumb={breadcrumb}
      />
      <ContactUsForm />
      <NewsletterSignup />
    </>
  );
};

export default ContactPage;
