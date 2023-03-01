import ExploreSingleGite from "./ExploreSingleGite";
import styles from "@/styles/ExploreLuxuryGites.module.css";

const ExploreLuxuryGites = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`col-12 col-lg-6 ${styles.singleContainer}`}>
          <ExploreSingleGite
            name={"lodge"}
            title={"The Lodge"}
            size={"2 Double Ensuite Bedrooms"}
            link={"/our_gites/lodge"}
            image={"lodge-bedroom-area"}
          />
        </div>
        <div className={`col-12 col-lg-6 ${styles.singleContainer}`}>
          <ExploreSingleGite
            name={"barn"}
            title={"The Barn"}
            size={"3 Double Ensuite Bedrooms"}
            link={"/our_gites/barn"}
            image={"barn-bedroom-area"}
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreLuxuryGites;
