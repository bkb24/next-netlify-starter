import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <div className={styles.logoContainer}>
              <Logo />
            </div>
          </div>
          <div className="col-12">
            <div className={styles.contactPhoneContainer}>
              <Link href="tel: +33 0766 109101" className={styles.phoneLink}>
                +33 (0)766 109101
              </Link>
              <span className={styles.bullet}>&#x2022;</span>
              <Link href="tel: +44 07740 930845" className={styles.phoneLink}>
                +44 (0)7740 930845
              </Link>
            </div>
          </div>
          <div className="col-12">
            <div className={styles.contactEmailContainer}>
              <Link
                href="mailto:info@dompeyreton.com"
                className={styles.emailLink}
              >
                info@dompeyreton.com
              </Link>
            </div>
          </div>
          <div className="col-12">
            <div className={styles.addressContainer}>
              <p className={styles.addressFirst}>
                Chateaux Vieux Moulin, Chemin de Peyreton,
              </p>
              <p className={styles.addressSecond}>33141, Villegouge, France</p>
            </div>
          </div>
          <div className="col-12">
            <div className={styles.subNavContainer}>
              <div className={styles.navLinkContainer}>
                <Link href="/" className={styles.navLink}>
                  Home
                </Link>
              </div>
              <div className={styles.navLinkContainer}>
                <Link href="/our_gites" className={styles.navLink}>
                  Our Gites
                </Link>
              </div>
              <div className={styles.navLinkContainer}>
                <Link href="/vineyard" className={styles.navLink}>
                  Our Vineyard
                </Link>
              </div>
              <div className={styles.navLinkContainer}>
                <Link href="/locality" className={styles.navLink}>
                  Locality
                </Link>
              </div>
              <div className={styles.navLinkContainer}>
                <Link href="/pricing" className={styles.navLink}>
                  Availability & price
                </Link>
              </div>
              <div className={styles.navLinkContainer}>
                <Link href="/about" className={styles.navLink}>
                  About Us
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.copyRightContainer}>
            <div className={styles.copyLinkContainer}>
              <Link href="/terms" className={styles.copyLink}>
                Terms & Conditions
              </Link>
            </div>
            <div className={styles.copyLinkContainer}>
              <div className={styles.copyRightText}>
                &copy; {new Date().getFullYear()} Dom Peyreton
              </div>
            </div>
            <div className={styles.copyLinkContainer}>
              <Link href="www.pc1.co.uk" className={styles.copyLink}>
                Handcrafted by PC1
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
