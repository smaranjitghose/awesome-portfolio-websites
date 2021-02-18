import Head from "next/head";
import EduCard from "../../components/education/EduCard";
import styles from "./../../styles/Edu.module.css";
import { moocscards } from "./../../public/assets/js/education";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Edu() {

  return (
    <>
      <Head>
        <title>Awesome Portfolio Websites</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <section className={styles.banner}>
        <img className={styles.SVG} src="./assets/education-page/header-male.svg" />

        <div className={styles.mainHead}>
          <h2>Education</h2>
          <p>
            An investment in knowledge pays the best interest.
            <br /> – Benjamin Franklin
          </p>
        </div>
      </section>

      <section className={styles.sec}>
        <h1 className={styles.head}>Education</h1>

        <EduCard
          qual="Post Graduation"
          institute="Massachusetts institute of technology"
          cls="M.Tech Computer Science"
          batch="2021-2023"
          activities="Sports, House Captain, Debate Club, Tech Society"
          desc="An investment in knowledge always pays the best interest."
        />
        <EduCard
          qual="Graduation"
          institute="Massachusetts institute of technology"
          cls="B.Tech Computer Science"
          batch="2017-2021"
          activities="Sports, House Captain, Debate Club, Tech Society"
          desc="An investment in knowledge always pays the best interest."
        />
        <EduCard
          qual="High School"
          institute="Delhi Public School"
          cls="High School"
          batch="2015-2017"
          activities="Sports, House Captain, Debate Club, Tech Society"
          desc="An investment in knowledge always pays the best interest."
        />
        <EduCard
          qual="Elementary School"
          institute="Joyride"
          cls="Pre-Primary"
          batch="2002-2015"
          activities="Sports, House Captain, Debate Club, Tech Society"
          desc="An investment in knowledge always pays the best interest."
        />
      </section>

      <section className={styles.sec}>
        <h1 className={styles.head}>MOOCs</h1>
        <div className={styles.MOOCsContainer}>
          {moocscards.map(({ title, cardImage, moocLink }) => (
            <div className={styles.card}>
              <div className={styles.cardHead}>
                <div className={styles.contentOverlay}></div>
                <img src={cardImage} className={``} />
                <div className={`${styles.contentDetails} ${styles.fadeInBottom}`}>
                  <a href={moocLink} target="_blank">
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </a>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h6 className={styles.moocTitle} style={{ fontSize: 12 }}>
                  {title}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
