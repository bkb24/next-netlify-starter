import styles from "@/styles/pricing/FullPageHeader.module.css";
import Image from "next/image";

const FullPageHeader = () => {
  return (
    <div className="container-fluid">
      <div className={`row ${styles.background}`}>
        <Image
          src="/pricing/barn_garden_area.webp"
          alt="Picture of the lodge bedroom"
          fill="fill"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className={styles.bgImage}
        />
        <div className="col-12"></div>
      </div>
      <div className={`row ${styles.contentContainer}`}>
        <div className="col-12">
          <div className={styles.content}>
            <h1 className={styles.mainTitle}>Availability &amp; Pricing</h1>
            <p className={styles.text}>
              The property comprises two high-quality cottages within the
              Chateau&#39;s stone outbuildings. The Barn offers three en-suite
              bedrooms whilst The Lodge offers two, again, all en-suite. The two
              gites can be interconnected, both internally and between the
              gardens, to offer accommodation for 10 in five en-suite bedrooms.
              We also have an associate gite a few km away with a further five
              bedrooms for large groups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageHeader;
