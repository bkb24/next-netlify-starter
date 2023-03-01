import styles from "../styles/HomeContent.module.css";
import Image from "next/image";
import Link from "next/link";

const HomeContent = () => {
  return (
    <div className={styles.background}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className="col-12 col-lg-6">
            <div className={styles.imageContainer}>
              <Image
                src="/home_images/wine.webp"
                className={`${styles.image} ${styles.imageWine}`}
                alt={"Dompeyreton wine"}
                width="575"
                height="470"
              ></Image>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.content}>
              <h3 className={styles.title}>Our vineyard and wines</h3>
              <p className={styles.text}>
                Located adjacent to the world-renowned Fronsac appellation,
                Chateau Vieux Moulin was once an award winning vineyard with
                over 30 hectares of vines. The parcel of land bought in 2018 by
                Iain and Marta comprised 10.5 hectares of which 8.5 were planted
                with merlot, cabernet sauvignon and cabernet franc.
              </p>
              <Link href="/vineyard">
                <button className={styles.button}>Find Out More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`row ${styles.wineMobile}`}>
          <div className={`col-12 ${styles.wineBg}`}>
            <div className={styles.buttonMobileContainer}>
              <Link href="/vineyard">
                <button className={styles.buttonMobile}>Find Out More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`row ${styles.row}`}>
          <div className="col-12 col-lg-6">
            <div className={`${styles.content} ${styles.contentLow}`}>
              <h3 className={styles.title}>Locality</h3>
              <p className={styles.text}>
                Our property is located deep in the Bordeaux vineyards, a short
                drive from the beautiful, world famous hill-top village of St.
                Emilion and about 800m from the local village of Villegouge
                where you will find a small supermarket, hairdresser and artisan
                boulanger for your morning croissants. Libourne, a pretty
                bastide town located at the confluence of the Isle and Dordogne
                rivers, is around 10 minutes’ drive and all the sites and
                attractions of the beautiful city of Bordeaux are around 30
                minutes away.
              </p>
              <Link href="/about">
                <button className={styles.button}>Find Out More</button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.imageContainer}>
              <Image
                src="/home_images/cathedral.webp"
                className={`${styles.image} ${styles.imageCathedral}`}
                alt={"Dompeyreton village of "}
                width="575"
                height="470"
              ></Image>
            </div>
          </div>
        </div>
        <div className={`row ${styles.cathedralMobile}`}>
          <div className={`col-12 ${styles.cathedralBg}`}>
            <div className={styles.buttonMobileContainer}>
              <Link href="/about">
                <button className={styles.buttonMobile}>Find Out More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
