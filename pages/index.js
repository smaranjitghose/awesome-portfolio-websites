import Head from "next/head";
import styles from "../styles/Home.module.css";
import { faTwitter, faDribbble, faLinkedinIn, faKaggle, faMediumM, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.particleInit() !== undefined) window.particleInit();
    if (window.initAnimatedText() !== undefined) window.initAnimatedText();
  }, []);
  return (
    <>
      <Head>
        <title>Awesome Portfolio Websites</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="assets/js/particles.min.js"></script>
        <script src="assets/js/particle.js"></script>
        <script src="assets/js/animatedText.js"></script>
      </Head>
      <section className={`${styles.home}`}>
        <div id="particles-js" className={styles.particles_js}></div>
      </section>
      <center className={styles.main}>
        <div className={styles.text}>
          Hi <span className={styles.wave}>👋</span>,I'm <span className={styles.header}>John Doe</span>
          <div className="center">
            <img src="assets/home/dp_male.svg" height="200" width="200" />
            <br />
            <span className={styles.animatedTextArea}>
              I am into{" "}
              <br/>
              <span
                className={`${styles.animatedText} animated-text`}
                data-words="Designing, UI/UX, Cloud Computing, Web Development, Open Source, Mentoring"
              ></span>
            </span>
            <div>
              <div className={styles.socialIcons}>
                <a className={`${styles.socialicon} ${styles.twitter}`} href="" target="_blank" rel="author">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>

                <a className={`${styles.socialicon} ${styles.dribbble}`} href="" target="_blank" rel="author">
                  <FontAwesomeIcon icon={faDribbble} />
                </a>

                <a className={`${styles.socialicon} ${styles.linkedin}`} href="" target="_blank" rel="author">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>

                <a className={`${styles.socialicon} ${styles.medium}`} href="" target="_blank" rel="author">
                  <FontAwesomeIcon icon={faMediumM} />
                </a>

                <a className={`${styles.socialicon} ${styles.kaggle}`} href="" target="_blank" rel="author">
                  <FontAwesomeIcon icon={faKaggle} />
                </a>

                <a className={`${styles.socialicon} ${styles.github}`} href="" target="_blank" rel="author">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
