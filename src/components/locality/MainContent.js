import styles from "@/styles/locality/MainContent.module.css";
import Image from "next/image";
import Link from "next/link";

const MainContent = () => {
  return (
    <div className={`container-fluid ${styles.background}`}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className="col-12 col-lg-6">
            <div className={styles.taglineContainer}>
              <Image
                src="/locality/midpoint-locality.webp"
                className={`${styles.image} ${styles.imageWine}`}
                alt={"The Lodge"}
                width="800"
                height="600"
              ></Image>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.textContainer}>
              <h2>The Lodge</h2>
              <p className={styles.text}>
                All the major wine producing areas of Bordeaux (for example St.
                Emilion, Pomerol, Pauillac, St. Estèphe, Medoc and Margaux) are
                a short drive away making our gites the perfect base to explore
                the wine-making properties and history of the Bordeaux region.
              </p>
              <p className={styles.text}>
                If you are looking for exciting nightlife and a hectic social
                whirl then Chateau Vieux Moulin is probably not for you – If,
                instead, you seek peace, tranquillity and the beautiful
                surroundings of the Bordeaux hinterland then you should
                definitely come and visit us!
              </p>
              <p className={styles.text}>
                Our welcome booklet provides more details of the local area,
                including recommendations for restaurants and places to visit.
              </p>
            </div>
            {/* <div className={styles.calltoaction}>
              <Link href="/our_gites/lodge" className={styles.link}>
                Find out more
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
