import styles from "@/styles/Contact.module.css";
import { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending");

    let data = {
      name,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      // headers: {
      //   Accept: "application/json, text/plain, */*",
      //   "Content-Type": "application/x-www-form-urlencoded",
      // },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }

      // if (res.status === 502) {
      //   return res.json()
      // }

      return res.text()
    })
    .then(data => {
      console.log('data', data)

      // if (data && data.error) {
      //   window.alert('Email error!')
      // }
    });
  };

  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="row">
        <div className="col-12">
          <h1 className={styles.title}>Contact us</h1>
        </div>
      </div>
      <div className="row">
        <div className={`${styles.formContainer} col-12 col-lg-6`}>
          <Image
            src="/contact_us/map_wbp.webp"
            fill="true"
            className={styles.map}
            alt="Chateux Vieux Moulin Map"
          />

          <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Send us a message</h2>
            <form className={styles.form}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className={`form-control ${styles.inputField}`}
                    id="name"
                    placeholder="Enter your name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className={`form-control ${styles.inputField}`}
                    id="email"
                    placeholder="Enter email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className={`form-control ${styles.inputField}`}
                  id="message"
                  rows="3"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
