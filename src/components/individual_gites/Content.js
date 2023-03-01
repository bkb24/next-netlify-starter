import styles from "@/styles/individual_gites/Content.module.css";
import { use, useEffect, useState } from "react";
import Link from "next/link";

const Content = ({ name }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [title, setTitle] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    let data = fetch("/api/gites")
      .then((res) => res.json())
      .then((data) => {
        setTitle(data[name]["name"]);
        setText(data[name]["content"]);
      });
  }, [name]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className={styles.title}>
            <h2>{title}.</h2>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className={styles.textContainer}>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-auto">
          <Link href="/pricing" className="brand-btn mt-0 mb-5">
            View Availability & Prices
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
