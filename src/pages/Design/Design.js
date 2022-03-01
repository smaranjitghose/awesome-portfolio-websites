import { Helmet } from "react-helmet";

import styles from "./design.module.css";

const PageContainer = ({ children }) => {
  return <div className={styles["page-container"]}>{children}</div>;
};

const Hero = () => (
  <div className={styles["hero"]}>
    <div className={styles.item1}></div>
    <div className={styles.item2}>
      <h1>
        My <span className={styles.purple}>Gallery</span>.
      </h1>
      <p>“Creativity takes courage”</p>
    </div>
  </div>
);

const Designs = () => {
  return (
    <>
      <Helmet>
        <title>John Doe | Design</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="free portfolio template,portfolio template, portfolio website template, open source, open sourcing, contributing to open source"
        />
        <meta
          name="description"
          content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="AdsBot-Google" content="index,follow" />
        <meta
          property="og:site_name"
          content="https://portfolio.smaranjitghose.codes/design.html"
        />
        <meta property="og:title" content="John Doe | Design" />
        <meta
          property="og:description"
          content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio.smaranjitghose.codes/design.html"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="John Doe | Design" />
        <meta
          name="twitter:description"
          content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
        />
        <meta
          name="twitter:url"
          content="https://portfolio.smaranjitghose.codes/design.html"
        />
        <meta name="application-name" content="John Doe | Design" />
        <meta name="apple-mobile-web-app-title" content="John Doe | Design" />
        <meta
          name="summary"
          content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
        />
      </Helmet>
      <PageContainer>
        <Hero />

        <div className={styles.container_gallery}>
          <div className={styles.item1}>
            <h2>UI/UX</h2>
            <div class={styles.gallery_section}>
              <div className={styles.staggered_grid}>
                <div className={styles.picture_container}>
                  <a
                    href="uiux"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
                <div className={styles.picture_container}>
                  <a
                    href="/uiux2"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
                <div className={styles.picture_container}>
                  <a
                    href="/uiux3"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
                <div className={styles.picture_container}>
                  <a
                    href="/uiux4"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
                <div className={styles.picture_container}>
                  <a
                    href="/uiux5"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
                <div className={styles.picture_container}>
                  <a
                    href="/uiux6"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
                <div class={styles.picture_container}>
                  <a
                    href="/uiux7"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
                <div className={styles.picture_container}>
                  <a
                    href="/uiux8"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item2}>
            <h2>Mockups Design</h2>
            <div class={styles.gallery_section}>
              <div className={styles.staggered_grid}>
                <div className={styles.picture_container}>
                  <a
                    href="/mock"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
                <div className={styles.picture_container}>
                  <a
                    href="/mock2"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
                <div className={styles.picture_container}>
                  <a
                    href="/mock3"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
                <div className={styles.picture_container}>
                  <a
                    href="/mock4"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
                <div className={styles.picture_container}>
                  <a
                    href="/mock5"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
                <div className={styles.picture_container}>
                  <a
                    href="/mock6"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
                <div class={styles.picture_container}>
                  <a
                    href="/mock7"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
                <div className={styles.picture_container}>
                  <a
                    href="/mock8"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <span>Show Design</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default Designs;
