import Head from "next/head";
import styles from "../styles/Home.module.css";
import { faTwitter, faDribbble, faLinkedinIn, faKaggle, faMediumM, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import ContactLinks from "./../components/contactlinks";
import Container from "./../components/Navbar/Nav";

var ReactRotatingText = require("react-rotating-text");
export default function Home() {
  useEffect(() => {
    // if (window.particleInit() !== undefined) window.particleInit();
    // if (window.initAnimatedText() !== undefined) window.initAnimatedText();
  }, []);
  return (
    <>
      <Head>
        <title>Awesome Portfolio Websites</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="assets/js/particles.min.js"></script>
        <script src="assets/js/particle.js"></script>
        <script src="assets/js/animatedText.js"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Container>
        <section className={styles.home}>
          <div id="particles-js" className={styles.particles_js}></div>
        </section>
        <center className={`${styles.main}`}>
          <div className={styles.text}>
            <p className="truncate bg-clip-text text-transparent bg-gradient-to-l from-blue-700 dark:from-blue-500 to-green-500 text-4xl lg:text-8xl my-10 py-2  ">
              Hi <span className={`${styles.wave} text-gray-900`}>&#128075;</span>,I'm John Doe
            </p>
            <div className="center">
              <img src="assets/home/dp_male.svg" height="200" width="200" />
              <br />
              <span
                className={`${styles.animatedTextArea}  bg-clip-text text-transparent bg-gradient-to-l from-blue-700 dark:from-blue-500 to-green-500`}
              >
                I am into <br />
                <ReactRotatingText
                  items={["Designing", "UI/UX", "Cloud Computing", "Web Development", "Open Source", "Mentoring"]}
                />
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

        <div>
          <div className="w-full flex flex-wrap text-lg">
            <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 w-full h-full flex flex-wrap justify-center items-center text-center p-2">
              <div className="w-full md:w-1/2  md:mb-0 ">
                <h2 className=" bg-clip-text text-transparent bg-gradient-to-l from-blue-700 dark:from-blue-500 to-green-500">
                  About
                </h2>
                <p className="leading-snug">
                  My name is John Doe and I am a full-stack web developer. The tech stack I primarily work with is
                  TypeScript, React.js, Node.js, and Python. I love spending my free time learning new things and
                  improving myself.
                </p>
              </div>
            </div>
          </div>
          <footer className="w-full pt-20 pb-2 text-sm font-light text-center text-gray-600 bg-gray-100 md:pb-6 dark:bg-gray-900 dark:text-gray-100">
            <p className="my-0">
              Made With
              <span aria-label="love" className=" text-red-600 mx-1 align-middle" role="img">
                ❤
              </span>
              <span>by Open Source</span>
            </p>
            <ContactLinks />
          </footer>
        </div>
      </Container>
    </>
  );
}
