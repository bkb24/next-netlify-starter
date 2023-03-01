import styles from "@/styles/AvailabilityAction.module.css";
import Link from "next/link";

const AvailabilityAction = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className={styles.taglineMobile}>
            <h4 className={styles.tagline}>Tranquility.</h4>
            <h4 className={styles.tagline}>Relaxation.</h4>
            <h4 className={styles.tagline}>Privacy.</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className={`col-12 ${styles.background}`}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className={styles.taglineContainer}>
                  <h4 className={styles.tagline}>Tranquility.</h4>
                  <h4 className={styles.tagline}>Relaxation.</h4>
                  <h4 className={styles.tagline}>Privacy.</h4>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className={styles.actionContainer}>
                  <div className={styles.textContainer}>
                    <h4 className={styles.text}>
                      The perfect base to explore the wine-making history and
                      properties of the Bordeaux region.
                    </h4>
                  </div>
                  <div className={styles.buttonContainer}>
                    <Link href="/pricing">
                      <button className={styles.button}>
                        View availability & prices
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`row ${styles.pointerEvents}`}>
        <div className="col-12">
          <div className={styles.lowerContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityAction;
