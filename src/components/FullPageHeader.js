import styles from "../styles/FullPageHeader.module.css";
import Link from "next/link";
import Image from "next/image";
import ScrollDownButton from "./ScrollDownButton";

const FullPageHeader = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <Image
          src="/home_images/barn-living-area.webp"
          alt="Living area"
          fill="fill"
          style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
        />
        <div className={`container-lg ${styles.mainRow}`}>
          <div className={`row ${styles.mainRow}`}>
            <div className="col-12 col-lg-6">
              <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                  <h1 className={styles.title}>
                    Luxury holiday cottages in the heart of the Bordeaux
                    vineyard region.
                  </h1>
                </div>
                <div className={styles.button}>
                  <Link className={styles.link} href="/gites">
                    View availability & Prices
                  </Link>
                </div>
                <ScrollDownButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileContainer}></div>
    </>
  );
};

export default FullPageHeader;
