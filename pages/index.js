import styles from "../styles/Home.module.scss";

import ReactRotatingText from "react-rotating-text";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import twitter from "react-useanimations/lib/twitter";
import codepen from "react-useanimations/lib/codepen";
import instagram from "react-useanimations/lib/instagram";

import Particles from "../components/Particles";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header active={0} />

      <div className={styles.root}>
        <section className={styles.home}>
          <Particles />
        </section>

        <center className={`${styles.main}`}>
          <div className={styles.text}>
            <p className={styles.name}>
              Hi <span className={`${styles.wave}`}>&#128075;</span>,I'm John Doe
            </p>
            <div className={`center ${styles.avatar}`}>
              <img src="assets/home/dp_male.svg" height="200" width="200" />
              <br />
              <span className={`${styles.animatedTextArea}`}>
                I am into <br />
                <ReactRotatingText
                  items={["Designing", "UI/UX", "Cloud Computing", "Web Development", "Open Source", "Mentoring"]}
                />
              </span>
            </div>
          </div>

          <div className={styles.socialIcons}>
            <a className={`${styles.socialicon} ${styles.linkedin}`} href="" target="_blank" rel="author">
              <UseAnimations animation={linkedin} size={45} strokeColor={"#0e76a8"} />
            </a>

            <a className={`${styles.socialicon} ${styles.github}`} href="" target="_blank" rel="author">
              <UseAnimations animation={github} size={45} />
            </a>

            <a className={`${styles.socialicon} ${styles.twitter}`} href="" target="_blank" rel="author">
              <UseAnimations animation={twitter} size={45} strokeColor={"#007bff"} />
            </a>

            <a className={`${styles.socialicon} ${styles.codepen}`} href="" target="_blank" rel="author">
              <UseAnimations animation={codepen} size={45} />
            </a>

            <a className={`${styles.socialicon} ${styles.instagram}`} href="" target="_blank" rel="author">
              <UseAnimations animation={instagram} size={45} strokeColor="#00ab6c" />
            </a>
          </div>
        </center>

        {/* <div className={`${styles.about} `}>
            <h2 className="">About</h2>
            <p className="leading-snug">
              My name is John Doe and I am a full-stack web developer. The tech stack I primarily work with is
              TypeScript, React.js, Node.js, and Python. I love spending my free time learning new things and improving
              myself.
            </p>       
        </div> */}
      </div>
    </>
  );
}
