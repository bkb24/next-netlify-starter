import FullPageHeader from "@/components/locality/FullPageHeader";
import MainContent from "@/components/locality/MainContent";
import dynamic from "next/dynamic";
const PageBreaker = dynamic(() => import("@/components/PageBreak"));

const Locality = () => {
  return (
    <>
      <FullPageHeader />
      <MainContent />
      <PageBreaker />
    </>
  );
};

export default Locality;
