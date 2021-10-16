import React from "react";
import { Helmet } from "react-helmet";
import { ReactComponent as HeroSvg } from "../../assets/images/design-page/hero.svg";
import projectImage1 from "../../assets/images/design-page/flower.jpg";
import projectImage2 from "../../assets/images/design-page/masonry.jpg";
import projectImage3 from "../../assets/images/design-page/dice.jpg";
import projectImage4 from "../../assets/images/design-page/purple.jpg";
import styles from "./design.module.css";

const PageContainer = ({ children }) => {
  return <div className={styles['page-container']}>{children}</div>;
};

const Hero = () => (
  <div className={styles['design-hero']}>
    <div className={styles['design-hero-text']}>
      <h1>
        I'm <span className={styles.purple}>John Doe</span>.
      </h1>
      <h1>I design stuff.</h1>
      <div className={styles['design-pt-5']}>Currently doing this.</div>
      <div>And also that.</div>
    </div>
    <HeroSvg className={styles['design-hero-image']}></HeroSvg>
  </div>
);

const StatementSection = () => {
  const ListItem = ({ number, text }) => (
    <div>
      <span className={styles['purple']}>
        [ {number} ]
      </span>{" "}
      {text}
    </div>
  );

  const Projects = () => (
    <div className={styles['design-statement-item']}>
      <div>Observe</div>
      <h1 className={styles['design-pt-half']}>My Projects.</h1>
      <div className={styles['design-pt-1 purple']}>
        Write something interesting below to sum up your project examples.
      </div>
      <div className={styles['design-pt-1']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className={styles['design-pt-1']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  );

  const Process = () => (
    <div className={`${styles['design-statement-process']} ${styles['design-statement-item']}`}>
      <div>Fathom</div>
      <h1 className={styles['design-pt-half']}>My Process.</h1>
      <div className={styles['design-pt-1 purple']}>
        Write something interesting below about how you approach your projects.
      </div>
      <div className={styles['design-pt-1']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className={styles['design-pt-1']}>
        <ListItem number={1} text="lists can be" />
        <ListItem number={2} text="a great way" />
        <ListItem number={3} text="to convey information" />
      </div>
    </div>
  );

  return (
    <div className={`${styles['design-statement']} ${styles['design-pt-4']}`}>
      <Projects />
      <div className={styles['design-statement-divider']}></div>
      <Process />
    </div>
  );
};

const ProjectsSection = () => {
  const Items = [
    {
      title: "Masonry in action",
      tags: ["grid", "layout"],
      image: projectImage2,
      description: "Practical designs using layouts with masonry.",
      href: "https://www.google.com/search?q=masonry+layout",
      hoverText: "see it",
    },
    {
      title: "3D browser",
      tags: ["3.js", "OpenGL"],
      image: projectImage3,
      description:
        "A 3D interactive experience, playble in any modern browser.",
      href: "https://github.com/mrdoob/three.js/",
      hoverText: "play it",
    },
    {
      title: "Data visualizations",
      tags: ["data driven", "dynamic"],
      image: projectImage4,
      description: "Experimental data visualizations using color gradiants.",
      hoverText: "track it",
      href: "https://d3js.org/",
    },
    {
      title: "Project name",
      tags: ["tag", "another tag", "tag me"],
      image: projectImage1,
      description:
        "Add one or two sentences here to describe the project. Avoid lengthy descriptions.",
      href: "https://google.com/",
      hoverText: "verb it",
    },
  ];

  const Item = ({ title, tags, image, description, hoverText, href }) => {
    return (
      <div className={styles['design-project-item']}>
        <div className={styles['design-project-item-title']}>{title}</div>
        <div className={styles['design-pt-half']}>
          {tags.map((tag, index, array) => {
            const isLastTag = array.length !== index + 1;
            return (
              <>
                <span className={styles['purple']}>{tag}</span>
                {isLastTag && " | "}
              </>
            );
          })}
        </div>
        <div style={{ position: "relative" }} className={styles['design-mt-1']}>
          <a href={href} target="_blank" rel="noreferrer">
            <div className={styles['design-project-item-image-overlay']}>
              <h1
                style={{ fontSize: 50 }}
                className={styles[`design-project-item-image-text`]}
              >
                {hoverText}
              </h1>
            </div>
            <img
              className={styles['design-project-item-image']}
              alt="project"
              src={image}
            />
          </a>
        </div>
        <div className={styles['design-pt-1']}>{description}</div>
      </div>
    );
  };

  return (
    <div className={styles['design-project']}>
      {Items.map((item, index, array) => {
        const isDividerAdded = index % 2 === 0 && array.length !== index + 1;
        return (
          <>
            <Item {...item} />
            {isDividerAdded && <div className={styles['design-statement-divider']}/>}
          </>
        );
      })}
    </div>
  );
};

const Designs = () => {
  return (
    <>
      <Helmet>
        <title>John Doe | Design</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="free portfolio template,portfolio template, portfolio website template, open source, open sourcing, contributing to open source" />
        <meta name="description" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="AdsBot-Google" content="index,follow" />
        <meta property="og:site_name" content="https://portfolio.smaranjitghose.codes/design.html" />
        <meta property="og:title" content="John Doe | Design" />
        <meta property="og:description" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio.smaranjitghose.codes/design.html" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="John Doe | Design" />
        <meta name="twitter:description" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
        <meta name="twitter:url" content="https://portfolio.smaranjitghose.codes/design.html" />
        <meta name="application-name" content="John Doe | Design" />
        <meta name="apple-mobile-web-app-title" content="John Doe | Design" />
        <meta name="summary" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
      </Helmet>
      <PageContainer>
        <Hero />
        <hr className={`${styles['design-hr']} ${styles['purple']}`} />
        <StatementSection />
        <hr className={`${styles['design-hr']} ${styles['purple']} ${styles['design-mt-4']}`} />
        <ProjectsSection />
      </PageContainer>
    </>
  );
};

export default Designs;
