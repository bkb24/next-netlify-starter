import styles from "@/styles/our_gites/FullPageHeader.module.css";
import Image from "next/image";

const FullPageHeader = () => {
  return (
    <div className="container-fluid">
      <div className={`row ${styles.background}`}>
        <Image
          src="/our_gites/lodge-bed-closeup.webp"
          alt="Picture of the lodge bedroom"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className={styles.bgImage}
        />
        <div className="col-12"></div>
      </div>
      <div className={`row ${styles.contentContainer}`}>
        <div className="col-12">
          <div className={styles.content}>
            <h1 className={styles.mainTitle}>Explore our Luxury Gites</h1>
            <p className={styles.text}>
              The property comprises two high-quality cottages within the
              Chateau&#39;s stone outbuildings, recently rated 5 star by the
              Gironde Tourist Authority. The Barn offers three en-suite bedrooms
              whilst The Lodge offers two, again, all en-suite. The two gites
              can be interconnected, both internally and between the gardens, to
              offer accommodation for 10 in five en-suite bedrooms. We also have
              an associate gite a few km away with a further five bedrooms for
              large groups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageHeader;
