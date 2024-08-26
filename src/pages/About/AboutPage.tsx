import SubBanner from "@/components/Shared/SubBanner";
import NewsletterSignup from "../Home/Newsletter";
import MeetTheTeam from "./MeetTheTeam";
import MissionStatement from "./MissionStatement";
import OurStory from "./OurStory";
import Banner from "/aboutBanner.jpg";

const AboutPage = () => {
  const breadcrumb = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ];
  return (
    <>
      <SubBanner
        title="About Us"
        breadcrumb={breadcrumb}
        backgroundImage={Banner}
      />
      <MissionStatement />
      <MeetTheTeam />
      <OurStory />
      <NewsletterSignup />
    </>
  );
};

export default AboutPage;
