import styles from "@/styles/vineyard/FullPageHeader.module.css";
import Image from "next/image";

const FullPageHeader = () => {
  return (
    <div className="container-fluid">
      <div className={`row ${styles.background}`}>
        <Image
          src="/vineyard/wine-large.webp"
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
            <h1 className={styles.mainTitle}>Our Vineyard and wines</h1>
            <p className={styles.text}>
              Located adjacent to the world-renowned Fronsac appellation,
              Chateau Vieux Moulin was once an award winning vineyard with over
              30 hectares of vines. The parcel of land bought in 2018 by Iain
              and Marta comprised 10.5 hectares of which 8.5 were planted with
              merlot, cabernet sauvignon and cabernet franc. Unfortunately, much
              of the vineyard was in such a poor state that it had to be removed
              leaving around one hectare of merlot still planted. This hectare
              has been carefully cultivated and reinvigorated since 2018 and
              during the 2022 harvest produced over 4,500 litres! We make our
              wine as naturally as possible and whilst we are not bio-certified
              we comply with as many of the bio processes as possible. We are
              happy to arrange a wine tasting of our vintages from 2018 to 2022
              together with those of our associate properties, Chateau L’Eperon
              and Chateau La Brande.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageHeader;
