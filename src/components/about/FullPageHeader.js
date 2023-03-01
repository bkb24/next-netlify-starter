import styles from "@/styles/aboutus/FullPageHeader.module.css";
import Image from "next/image";

const FullPageHeader = () => {
  return (
    <div className="container-fluid">
      <div className={`row ${styles.background}`}>
        <Image
          src="/about_us/about_us.webp"
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
            <h1 className={styles.mainTitle}>About Us</h1>
            <p className={styles.text}>
              Chateau Vieux Moulin is run by two (very) young-at-heart retirees,
              Iain Maxted and Marta Arias. Marta is a Spanish veterinary surgeon
              who moved to the UK from Spain in 2001. Iain is an engineer who
              founded a business in 1996 designing and manufacturing equipment
              for the oil industry which he sold in 2018. The couple moved to
              France in 2019 following a long-standing dream and having taken
              three rather stressful years to buy Chateau Vieux Moulin!
            </p>
            <p className={styles.text}>
              We hope you won’t, but if you have any problems during your stay
              then we are close at hand to quickly resolve them for you. Our one
              aim is that you have an enjoyable, restful and rejuvenating
              holiday – so please tell us if there is anything more we can do to
              make that a reality.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageHeader;
