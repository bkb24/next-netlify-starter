import styles from "@/styles/our_gites/MainContent.module.css";

const MainContent = () => {
  return (
    <div className="container">
      <div className={`row ${styles.row}`}>
        <div className="col-12 col-lg-6">
          <div className={styles.taglineContainer}>
            <h3 className={styles.tagline}>Tranquility.</h3>
            <h3 className={styles.tagline}>Relaxation.</h3>
            <h3 className={styles.tagline}>Privacy.</h3>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className={styles.textContainer}>
            <p className={styles.text}>
              All bedrooms have fully tiled en-suite bathrooms, most with
              Italian, wet-room rainfall showers and &rsquo;Jack &rsquo;n&rsquo;
              Jill&rsquo; luxury sink units. The bedrooms all have king or queen
              size beds with high quality cotton bed linen and goose-down
              pillows (non-allergenic options are available) together with solid
              oak furniture. Beds are all made up and waiting to greet you on
              arrival.<br></br>
              <br></br>
              Each gite is fitted with a high-specification kitchen featuring a
              range cooker, fridge-freezer, dishwasher, washer/dryer and stone
              worktops together with high quality appliances and kitchen
              equipment. LED mood lighting is provided throughout for those
              relaxing moments of a most relaxing holiday!<br></br>
              <br></br>
              Each land-scaped garden offers a private, heated plunge pool, BBQ,
              pool-side sun-bathing area, a large oak gazebo for alfresco
              dining, elegant garden furniture, mood lighting at night and
              beautiful, tranquil views over the adjoining countryside. A
              welcome pack of produce (including our own wine!) is provided on
              arrival to get you up and running.
              <br></br>
              Ample parking is available in a large gravelled parking area
              immediately adjacent to the courtyard and the parking, courtyard
              and the Chemin approaching the chateau are all illuminated at
              night to welcome you back after a tough day’s sightseeing and
              sampling of the excellent local cuisine and wine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
