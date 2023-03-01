import FullPageHeader from "@/components/vineyard/FullPageHeader";
import MainContent from "@/components/vineyard/content";
import dynamic from "next/dynamic";
const PageBreaker = dynamic(() => import("@/components/PageBreak"));

const Vineyard = () => {
  return (
    <>
      <FullPageHeader />
      <MainContent />
      <PageBreaker />
    </>
  );
};

export default Vineyard;
