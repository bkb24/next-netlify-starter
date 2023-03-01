import styles from "@/styles/pricing/SubContent.module.css";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import Link from "next/link";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { format, formatRelative } from "date-fns";
import en from "date-fns/locale/en-GB";
// registerLocale("en-GB", en);
// setDefaultLocale("en-GB");

import { useEffect, useState } from "react";

const MainContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  var date = new Date();
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending");

    let data = {
      name,
      email,
      guests,
      checkin,
      checkout,
    };

    fetch("/api/availability", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setGuests("");
        setCheckin("");
        setCheckout("");
      }
    });
  };

  return (
    <div className={`container-fluid ${styles.background}`}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className="col-12 col-lg-6">
            <h3>Other Information</h3>
            <div className={styles.textContainer}>
              <ul className={styles.points}>
                <li>
                  Minimum rental period of one week during high and peak season
                </li>
                <li>What Three Words app - overnight/braved/pristine</li>
                <li>Over 18 years old only</li>
                <li>
                  * All Inclusive – we include in the rental charges costs for
                  linen, towels, cleaning and the famed French taxe de sejour
                  (payable daily per person) if you book directly with us so the
                  price you see is the price you pay.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h3>Gites availability</h3>
            <div className={styles.textContainer}>
              <p className={styles.text}>
                For availability and any further information or queries you may
                have about our vineyard, the gites or the local area, please
                contact us on:
              </p>
              <p className={styles.textTelephone}>Telephone: 07779 123 123</p>
              <p className={styles.text}>
                Alternatively, you can fill out the enquiry form detailing your
                stay information and dates required. Once received, we will let
                you know if the dates are available and how to proceed with
                payment.
              </p>
              <div className={styles.formWrapper}>
                <h3 className={styles.formTitle}>Enquiry Form</h3>
                <form className={styles.form}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Lead Guest Name</label>
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
                    <label htmlFor="message">Number of Guests</label>
                    <input
                      className={`form-control ${styles.inputField}`}
                      id="guests"
                      onChange={(e) => {
                        setGuests(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12 col-lg-6">
                      <label htmlFor="email">Check In</label>
                      <DatePicker
                        selected={checkin}
                        onChange={(date) => setCheckin(date)}
                        format="dd-MM-yyyy"
                      />
                      <div className="input-group-addon">
                        <span className="glyphicon glyphicon-th"></span>
                      </div>
                    </div>
                    <div className="form-group col-12 col-lg-6">
                      <label htmlFor="checkOut">Check Out</label>
                      <DatePicker
                        selected={checkout}
                        onChange={(date) => setCheckout(date)}
                        format="dd-MM-yyyy"
                      />
                      <div className="input-group-addon">
                        <span className="glyphicon glyphicon-th"></span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
