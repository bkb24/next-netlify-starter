import styles from "@/styles/pricing/MainContent.module.css";
import Image from "next/image";
import Link from "next/link";

const MainContent = () => {
  return (
    <div className={`container-fluid ${styles.background}`}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className="col-12 col-lg-6">
            <div className={styles.textContainer}>
              <h2>Seasons 2023 - Prices per week</h2>
              <table className={styles.pricingTable}>
                <thead>
                  <tr>
                    <td>Season</td>
                    <td>Start</td>
                    <td>Finish</td>
                    <td>
                      The Lodge <span>(4 Persons)</span>
                    </td>
                    <td>
                      The Bard <span>(6 Persons)</span>
                    </td>
                    <td>
                      Combined <span>(10 Persons)</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Peak</td>
                    <td>1-Jul-23</td>
                    <td>1-Sep-23</td>
                    <td>&euro;1,700</td>
                    <td>&euro;2,500</td>
                    <td>&euro;4,200</td>
                  </tr>
                  <tr>
                    <td>High</td>
                    <td>
                      20-May-23
                      <br />
                      2-Sep-23
                      <br />
                      23-Dec-23
                    </td>
                    <td>
                      7-Jul-23
                      <br />
                      6-Oct-23
                      <br />
                      2-Jan-24
                    </td>
                    <td>&euro;1,590</td>
                    <td>&euro;2,340</td>
                    <td>&euro;3,930</td>
                  </tr>
                  <tr>
                    <td>Medium</td>
                    <td>1-Apr-23</td>
                    <td>19-May-23</td>
                    <td>&euro;1,360</td>
                    <td>&euro;2,000</td>
                    <td>&euro;3,360</td>
                  </tr>
                  <tr>
                    <td>Low</td>
                    <td>
                      1-Mar-23
                      <br />
                      2-Oct-23
                    </td>
                    <td>
                      31-Mar-23
                      <br />
                      22-Dec-23
                    </td>
                    <td>&euro;1,260</td>
                    <td>&euro;1,850</td>
                    <td>&euro;3,110</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.textContainer}>
              <h2>Seasons 2024 - Prices per week</h2>
              <table className={styles.pricingTable}>
                <thead>
                  <tr>
                    <td>Season</td>
                    <td>Start</td>
                    <td>Finish</td>
                    <td>
                      The Lodge <span>(4 Persons)</span>
                    </td>
                    <td>
                      The Bard <span>(6 Persons)</span>
                    </td>
                    <td>
                      Combined <span>(10 Persons)</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Peak</td>
                    <td>1-Jul-24</td>
                    <td>1-Sep-24</td>
                    <td>&euro;1,734</td>
                    <td>&euro;2,550</td>
                    <td>&euro;4,284</td>
                  </tr>
                  <tr>
                    <td>High</td>
                    <td>
                      20-May-24
                      <br />
                      2-Sep-24
                      <br />
                      23-Dec-24
                    </td>
                    <td>
                      7-Jul-24
                      <br />
                      6-Oct-24
                      <br />
                      2-Jan-25
                    </td>
                    <td>&euro;1,591</td>
                    <td>&euro;2,341</td>
                    <td>&euro;3,931</td>
                  </tr>
                  <tr>
                    <td>Medium</td>
                    <td>1-Apr-24</td>
                    <td>19-May-24</td>
                    <td>&euro;1,387</td>
                    <td>&euro;2,040</td>
                    <td>&euro;3,427</td>
                  </tr>
                  <tr>
                    <td>Low</td>
                    <td>
                      1-Mar-24
                      <br />
                      2-Oct-24
                    </td>
                    <td>
                      31-Mar-24
                      <br />
                      22-Dec-24
                    </td>
                    <td>&euro;1,285</td>
                    <td>&euro;1,887</td>
                    <td>&euro;3,172</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <div className={styles.calltoaction}>
              <Link href="/our_gites/lodge" className={styles.link}>
                Find out more
              </Link>
            </div> */}
          </div>
          <div className="col-12">
            <p className={styles.subtext}>
              For daily prices simply divide the price shown for the start date
              of your stay by 7 and multiply by the number of days of your stay.
              Prices include towels (pool and bathroom), bed linen and taxe de
              sejour.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
