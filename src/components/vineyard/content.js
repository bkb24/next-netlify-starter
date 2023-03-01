import styles from "@/styles/vineyard/MainContent.module.css";
import Image from "next/image";

const MainContent = () => {
  return (
    <div className={`container-fluid ${styles.background}`}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className="col-12 col-lg-6">
            <div className={styles.imageContainer}>
              <Image
                src="/vineyard/midpoint-vineyard.webp"
                className={`${styles.image} ${styles.imageWine}`}
                alt={"Tasting Notes"}
                width="800"
                height="600"
              ></Image>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.textContainer}>
              <h2>Tasting Notes</h2>
              <p className={styles.text}>
                The 2018, 100% merlot, vintage was created from a small harvest
                with hand-selected fruit and the deep ruby-red wine aged for 18
                months in new, French-oak barrels. Restricted to 650 bottles and
                pairing well with red meats or duck, the wine can be drunk now
                but has been judged to be one which will deliver increasing
                pleasure if laid down for a few years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
