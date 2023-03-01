import styles from "@/styles/PricingAction.module.css";
import Link from "next/link";

const PricingAction = () => {
  return (
    <div className="container-fluid">
      <div className={`row`}>
        <div className={`col-12 ${styles.background}`}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.actionContainer}>
                  <h5 className={styles.title}>
                    The perfect base to explore the wine-making history and
                    properties of the Bordeaux region.
                  </h5>
                  <Link href="/pricing" className={styles.button}>
                    View Availability & Prices
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAction;
