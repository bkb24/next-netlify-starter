import styles from "@/styles/individual_gites/InformationTabs.module.css";
import { useState, useEffect } from "react";
import GitesData from "@/data/gites.js";

const InformationTabs = ({ name }) => {
  let data = GitesData;
  const [activeTab, setActiveTab] = useState("tab1");
  const [mounted, setMounted] = useState(false);
  const [allData, setAllData] = useState([data[name]]);
  const [facilities, setFacilities] = useState([
    data[name]["information"]["facilities"],
  ]);
  const [suites, setSuites] = useState([data[name]["information"]["suites"]]);
  const [garden, setGarden] = useState([data[name]["information"]["garden"]]);
  const [kitchen, setKitchen] = useState([
    data[name]["information"]["kitchen"],
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  const handleTab4 = () => {
    setActiveTab("tab4");
  };

  useEffect(() => {
    let data = fetch("/api/gites")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data[name]);
        setFacilities(data[name]["information"]["facilities"]);
        setSuites(data[name]["information"]["suites"]);
        setGarden(data[name]["information"]["garden"]);
        setKitchen(data[name]["information"]["kitchen"]);
      });
  }, [name]);

  return (
    <div className={`container-fluid ${styles.background}`}>
      <div className="container">
        <div className={`row ${styles.container}`}>
          <div className="col-12">
            <h3 className={styles.mainTitle}>Gites information</h3>
          </div>
          <div className="col-12">
            <div className={styles.tabs}>
              <div
                className={`${styles.tab} ${
                  activeTab === "tab1" ? styles.active : ""
                }`}
                onClick={handleTab1}
              >
                Facilities
              </div>
              <div
                className={`${styles.tab} ${
                  activeTab === "tab2" ? styles.active : ""
                }`}
                onClick={handleTab2}
              >
                Bedroom suites
              </div>
              <div
                className={`${styles.tab} ${
                  activeTab === "tab3" ? styles.active : ""
                }`}
                onClick={handleTab3}
              >
                Kitchen facilities
              </div>
              <div
                className={`${styles.tab} ${
                  activeTab === "tab4" ? styles.active : ""
                }`}
                onClick={handleTab4}
              >
                Garden facilities
              </div>
            </div>
          </div>

          <div className={`col-12 ${styles.tabContentWrapper}`}>
            <div
              className={`${styles.tabContent} ${
                activeTab === "tab1" ? styles.show : styles.hide
              }`}
            >
              <div className={styles.tabWrapper}>
                <ul className={styles.tabList}>
                  {facilities &&
                    facilities.map((facility, i) => (
                      <li key={i} className={styles.tabListItem}>
                        {facility}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div
              className={`${styles.tabContent} ${
                activeTab === "tab2" ? styles.show : styles.hide
              }`}
            >
              <div className={styles.tabWrapper}>
                <ul className={styles.tabList}>
                  {suites &&
                    suites.map((suite, i) => {
                      return (
                        <li key={i} className={styles.themeTitle}>
                          <h4 className={styles.themeH4}>{suite.theme}</h4>
                          <ul className={styles.facilityList}>
                            {suite.facilities &&
                              suite.facilities.map((facility, j) => {
                                return (
                                  <li key={j} className={styles.facility}>
                                    {facility}
                                  </li>
                                );
                              })}
                          </ul>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div
              className={`${styles.tabContent} ${
                activeTab === "tab3" ? styles.show : styles.hide
              }`}
            >
              <div className={styles.kitchenTab}>
                <div className={styles.kitchenInfo}>
                  {kitchen && kitchen.information}
                </div>
                <div className={styles.kitchenTabWrapper}>
                  <ul className={styles.kitchenTabList}>
                    {kitchen &&
                      kitchen.facilities &&
                      kitchen.facilities.map((facility, i) => {
                        return (
                          <li key={i} className={styles.kitchenTabListItem}>
                            {facility}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`${styles.tabContent} ${
                activeTab === "tab4" ? styles.show : styles.hide
              }`}
            >
              <div className={styles.garden}>
                <ul className={styles.gardenList}>
                  {garden &&
                    garden.map((item, i) => {
                      return (
                        <li key={i} className={styles.gardenListItem}>
                          {item}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationTabs;
