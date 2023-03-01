import styles from "../styles/IntroContent.module.css";
import { useState, useEffect } from "react";

const IntroContent = () => {
  var [isMobile, setIsMobile] = useState(false);

  //check if window is mobile or desktop on load
  useEffect(() => {
    if (window.innerWidth < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  //is mobile or desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <div className={`row`}>
        <div className="col-12 col-lg-6">
          <div className={styles.focusContainer}>
            <h2 className={`${styles.focusText} "goldText"`}>Tranquility.</h2>
            <h2 className={`${styles.focusText} "goldText"`}>Relaxation.</h2>
            <h2 className={`${styles.focusText} "goldText"`}>Privacy.</h2>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className={styles.introContainer}>
            <h1 className={styles.introTitle}>
              Welcome to Château Vieux Moulin
            </h1>
            <p className={styles.introText}>
              Enjoy the peace and tranquillity of the French countryside at our
              newly created, adults-only, all-inclusive* five star Peyreton
              Gites de Prestige. With no nearby neighbours and views over our
              own small, working vineyard to the surrounding woods, our cottages
              offer an ideal opportunity to leave the cares and noise of
              every-day life behind and soak up the atmosphere whilst enjoying a
              glass of something chilled in your private, heated plunge pool.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
