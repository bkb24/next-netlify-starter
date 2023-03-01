import Head from "next/head";
import styles from "@/styles/Home.module.css";
import FullPageHeader from "@/components/FullPageHeader";
/*import IntroContent from "@/components/IntroContent";
import ExploreLuxuryGites from "@/components/ExploreLuxuryGites";
import HomeContent from "@/components/HomeContent";
import PageBreak from "@/components/PageBreak";
import AvailabilityAction from "@/components/AvailabilityAction";
import LargeTitle from "@/components/small_comp/LargeTitle";
*/
import dynamic from "next/dynamic";

const Intro = dynamic(() => import("@/components/IntroContent"));
const Title = dynamic(() => import("@/components/small_comp/LargeTitle"));
const ExploreLuxury = dynamic(() => import("@/components/ExploreLuxuryGites"));
const Content = dynamic(() => import("@/components/HomeContent"));
const Availability = dynamic(() => import("@/components/AvailabilityAction"));
const PageBreaker = dynamic(() => import("@/components/PageBreak"));

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dompeyreton</title>
      </Head>
      <FullPageHeader />
      {Intro && <Intro />}
      {Title && <Title text="Explore our Luxury Gites" />}
      {ExploreLuxury && <ExploreLuxury />}
      {Content && <Content />}
      {Availability && <Availability />}
       
      {PageBreaker && <PageBreaker />}
    </div>
  );
}
