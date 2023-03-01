import FullPageHeader from "@/components/pricing/FullPageHeader";
import Content from "@/components/pricing/MainContent";
import SubContent from "@/components/pricing/SubContent";

import dynamic from "next/dynamic";
const PageBreaker = dynamic(() => import("@/components/PageBreak"));

const Pricing = () => {
  return (
    <>
      <FullPageHeader />
      <Content />
      <SubContent />
      <PageBreaker />
    </>
  );
};

export default Pricing;
