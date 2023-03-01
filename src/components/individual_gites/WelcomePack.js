import Image from "next/image";
import styles from "@/styles/individual_gites/WelcomePack.module.css";
import { useState, useEffect } from "react";
import ProvisionsData from "@/data/provisions.js";

const WelcomePack = () => {
  const [mounted, setMounted] = useState(false);
  const [displayed, setDisplayed] = useState(false);

  let data = ProvisionsData;
  useEffect(() => {
    setMounted(true);
  }, []);

  const [title, setTitle] = useState(data.title);
  const [text, setText] = useState(data.text);
  const [provisions, setProvisions] = useState(data.provisions);

  return (
    <div className="container">
      <div className={`row ${styles.container}`}>
        <div className="col-12 col-lg-6">
          <Image
            src="/home_images/wine.webp"
            alt="Welcome pack provisions photograph"
            fill="fill"
            style={{ objectFit: "cover", objectPosition: "center" }}
            className={styles.image}
          />
        </div>
        <div className="col-12 col-lg-6">
          <div className={styles.content}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.text}>{text}</p>
            <p className={styles.provText}>
              <strong>This includes:</strong>
            </p>
            <ul className={styles.list}>
              {provisions &&
                provisions.map((provision, i) => (
                  <li key={i} className={styles.listItem}>
                    {provision}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePack;
