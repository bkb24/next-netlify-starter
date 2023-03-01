import FullPageHeader from "@/components/about/FullPageHeader";
import MainContent from "@/components/about/MainContent";
import dynamic from "next/dynamic";
const PageBreaker = dynamic(() => import("@/components/PageBreak"));

const About = () => {
  return (
    <>
      <FullPageHeader />
      <MainContent />
      <PageBreaker />
    </>
  );
};

export default About;
