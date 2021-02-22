import Head from "next/head";
import styles from "../styles/Home.module.css";
import { faTwitter, faDribbble, faLinkedinIn, faKaggle, faMediumM, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "./../components/Navbar/Nav";
import ReactRotatingText from "react-rotating-text";
import { useRouter } from "next/router";

import Particles from "../components/Particles";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Awesome Portfolio Websites</title>
        <link rel="icon" href="/favicon.ico" />
        <script defer src="lib/particles.min.js"></script>
        <script defer src="lib/particle.js"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Container>
        <section className={styles.home}>
          <Particles/>
        </section>
        <center className={`${styles.main}`}>
          <div className={styles.text}>
            <p className="">
              Hi <span className={`${styles.wave}`}>&#128075;</span>,I'm John Doe
            </p>
            <div className="center">
              <img src="assets/home/dp_male.svg" height="200" width="200" />
              <br />
              <span className={`${styles.animatedTextArea}`}>
                I am into <br />
                <ReactRotatingText
                  items={["Designing", "UI/UX", "Cloud Computing", "Web Development", "Open Source", "Mentoring"]}
                />
              </span>

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
        </center>

        <div className={`${styles.about} `}>
          <div className="">
            <h2 className="">About</h2>
            <p className="leading-snug">
              My name is John Doe and I am a full-stack web developer. The tech stack I primarily work with is
              TypeScript, React.js, Node.js, and Python. I love spending my free time learning new things and improving
              myself.
            </p>
          </div>
          <footer className="">
            <p className="">
              Made With
              <span aria-label="love" className="" role="img">
                ❤
              </span>
              <span>by Open Source</span>
            </p>
          </footer>
        </div>
      </Container>
    </>
  );
}
