import styles from "@/styles/individual_gites/OtherInformation.module.css";

const OtherInformation = () => {
  return (
    <div className={`container-fluid ${styles.background}`}>
      <div className="container">
        <div className={`row ${styles.container}`}>
          <div className={`col-12`}>
            <h4 className={styles.title}>Other information</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Minimum rental period of one week during high and peak season
              </li>
              <li className={styles.listItem}>
                What Three Words app - overnight/braved/pristine
              </li>
              <li className={styles.listItem}>Over 18 years old only</li>
              <li className={styles.listItem}>
                *All Inclusive – we include in the rental charges costs for
                linen, towels, cleaning and the famed French taxe de sejour
              </li>
              <p className={styles.text}>
                (payable daily per person) so the price you see is the price you
                pay.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInformation;
