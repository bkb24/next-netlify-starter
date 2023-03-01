import styles from "@/styles/our_gites/Lightbox.module.css";

const Lightbox = (props) => {

    const closeLightBox = () => {
        props.closeLightBox()
    }

    return (
        <div className={styles.lightboxWrap}>
            <img src={props.src} />

            <button className={styles.lightboxClose} onClick={closeLightBox}>
                <svg width="35" height="35" viewBox="0 0 24 24">
                    <path fill="#fff" d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
                </svg>
            </button>
        </div>
    )
}

export default Lightbox;
