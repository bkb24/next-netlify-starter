import React, { useEffect, useState } from "react";
import styles from "../styles/NavBar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";




const NavBar = () => {
  // mobile menu variables
  const [isMobile, setIsMobile] = useState(false);

  // toggle function for mobile menu
  const [isExpanded, setIsExpanded] = useState(false);

  // scroll variables
  var [hasScrolled, setHasScrolled] = useState(false);

  let toggle = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  // react on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // react on scroll
  useEffect(() => {
    const hasScrolled = () => {
      setHasScrolled(true);
    };
    window.addEventListener("scroll", hasScrolled);
    return () => window.removeEventListener("scroll", hasScrolled);
  }, []);

  // scroll down after 10 seconds
  useEffect(() => {
    const move = () => {
      if (!hasScrolled && !isExpanded) {
        window.scrollBy({ left: 0, top: 1000, behavior: "smooth" });
      }
    };
    const timeout = setTimeout(move, 10000);
    return () => clearTimeout(timeout);
  }, [hasScrolled, isExpanded]);

  const router = useRouter();

  useEffect(() => {
    router.events.on('beforeHistoryChange', (url, { shallow }) => {
      setIsExpanded(false);
    });
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navigation}`}>
      <div className="container-xl">
        <Link href="/" className="navbar-brand">
          <div className={styles.imageContainer}>
            <Image
              src="/logo/logo_white.webp"
              className={`${styles.image} ${styles.imageLogo} + ${
                isMobile ? styles.logoMobile : styles.logoDesktop
              }`}
              alt={"Dompeyreton"}
              width="267"
              height="185"
            ></Image>
          </div>
        </Link>
        <div className={`navbar-nav ${styles.navItems}`}>
          <Link
            href="/"
            className={`nav-link ${
              router.asPath == "" || router.asPath == "/" ? "navActive" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/our_gites"
            className={`nav-link ${
              router.asPath == "/our_gites" ? "navActive" : ""
            }`}
          >
            Our Gites
          </Link>
          <Link
            href="/vineyard"
            className={`nav-link ${
              router.asPath == "/vineyard" ? "navActive" : ""
            }`}
          >
            Our Vineyard
          </Link>
          <Link
            href="/locality"
            className={`nav-link ${
              router.asPath == "/locality" ? "navActive" : ""
            }`}
          >
            Locality
          </Link>
          <Link
            href="/pricing"
            className={`nav-link ${
              router.asPath == "/pricing" ? "navActive" : ""
            }`}
          >
            Availability & Pricing
          </Link>
          <Link
            href="/about"
            className={`nav-link ${
              router.asPath == "/about" ? "navActive" : ""
            }`}
          >
            About Us
          </Link>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/contact" className={styles.button}>
            Contact us
          </Link>
          <button
            className={`${styles.toggler}`}
            type="button"
            data-target="#navbarMenuMobile"
            aria-controls="navbarMenuMobile"
            aria-label="Toggle navigation"
            onClick={toggle}
          >
            <span
              className={`${styles.togglerIcon} ${
                isExpanded ? styles.open : styles.closed
              }`}
            ></span>
            <span
              className={`${styles.togglerIcon} ${
                isExpanded ? styles.openDown : styles.closedDown
              }`}
            ></span>
          </button>
        </div>
        <div
          className={`${styles.mobileMenu} ${
            isExpanded ? styles.showNav : styles.hideNav
          }`}
          id="navbarMenuMobile"
        >
 <Image
              src="/logo/logo_white.webp"
               className={`${styles.logoMobile}`}
              alt={"Dompeyreton"}
              width="121"
              height="84"
            ></Image>


          <div className={`${styles.navMobileLinks}`}>
            <Link
              href="/"
              className={`${styles.navMobLink} ${
                router.asPath == "" || router.asPath == "/" ? "navActive" : ""
              }`}
            >
              Home
            </Link>

            <Link
              href="/our_gites"
              className={`${styles.navMobLink} ${
                router.asPath == "/our_gites" ? "v" : ""
              }`}
            >
              Our Gites
            </Link>


            <Link
              href="/vineyard"
              className={`${styles.navMobLink} ${
                router.asPath == "/vineyard" ? "navActive" : ""
              }`}
            >
              Our Vineyard
            </Link>
            <Link
              href="/locality"
              className={`${styles.navMobLink} ${
                router.asPath == "/locality" ? "navActive" : ""
              }`}
            >
              Locality
            </Link>
            <Link
              href="/pricing"
              className={`${styles.navMobLink} ${
                router.asPath == "/pricing" ? "navActive" : ""
              }`}
            >
              Availability & Pricing
            </Link>
            <Link
              href="/about"
              className={`${styles.navMobLink} ${
                router.asPath == "/about" ? "navActive" : ""
              }`}
            >
              About Us
            </Link>
            <Link href="/contact" className={styles.navMobLink}>
              Contact us
            </Link>

           
             <p className={'white'}>
             +33 (0)766 109101<br/>
             +44 (0)7740 930845<br/>
             <span>Chateaux Vieux Moulin,<br/>Chemin de Peyreton, 33141,<br/>Villegouge, France</span>
             </p>
   

          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
