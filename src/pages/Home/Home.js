import React from "react";
import Particles from "react-particles-js";
import styles from "./Home.module.css";
import Hand from "../../assets/images/Hand.gif";
import dp_male from "../../assets/images/dp_male.svg";
import ReactTypingEffect from "react-typing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMediumM } from "@fortawesome/free-brands-svg-icons";
import { faKaggle } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className={styles['home']}>
      <Helmet>
        <title>John Doe | Home</title>
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
          content="https://portfolio.smaranjitghose.codes/"
        />
        <meta property="og:title" content="John Doe | Home" />
        <meta
          property="og:description"
          content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio.smaranjitghose.codes/"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="John Doe | Home" />
        <meta
          name="twitter:description"
          content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
        />
        <meta
          name="twitter:url"
          content="https://portfolio.smaranjitghose.codes/"
        />
        <meta name="application-name" content="John Doe | Home" />
        <meta name="apple-mobile-web-app-title" content="John Doe | Home" />
        <meta
          name="summary"
          content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
        />
      </Helmet>
      <Particles
        id={styles['particlejs']}
        params={{
          particles: {
            number: {
              value: 140,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#fff",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
                width: 100,
                height: 100,
              },
            },

            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 5000,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: false,
                speed: 5000,
                size_min: 10,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#808080",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 70,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className={styles['desc-container']}>
        <div className={styles['desc']}>
          <div className={styles['desc-1']}>
            <span className={styles['text']}>
              Hi <img className={styles['wave']} src={Hand} alt="" />, I'm{" "}
              <span>
                {" "}
                <b> John Doe</b>
              </span>
            </span>
            <div className={styles['center']}>
              <img src={dp_male} alt="" />
            </div>
          </div>
          <div className={styles['typing']}>
            <ReactTypingEffect
              className={styles['typingEffect']}
              staticText="I'm into"
              text={[
                " Designing",
                " UI/UX",
                " Cloud Computing",
                " Web Development",
                " Open Source",
                " Mentoring",
              ]}
              speed={50}
              eraseSpeed={50}
              typingDelay={50}
              eraseDelay={150}
            />
          </div>
          <div className={styles['social-icons']}>
            <a
              className={`${styles['socialicon']} twitter`}
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className={'twitter-icon'}
                version="1.1"
                id={styles['Layer_1']}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 500 500"
                enableBackground="new 0 0 500 500"
                xmlSpace="preserve"
              >
                <path
                  id={styles['body']}
                  fill="#5DA8DC"
                  d="M142.9,364.1c-1.6,1-3,1.7-4,2.3c-3,1.5-7.9,3.8-14.9,6.9c-7,3.1-14.7,5.7-23.1,7.9
                                                c-8.4,2.2-15.6,3.8-21.8,4.7c-6.2,0.9-12.2,1.5-18.1,1.8s-11.4,0.3-16.7,0c-5.2-0.3-8.5-0.5-9.6-0.6l-1.8-0.2l-0.4-0.1l-0.4-0.1v0.8
                                                h0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1H33l0.4,0.2l0.4,0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l3.6,2.2c2.4,1.5,4.5,2.6,6.4,3.6
                                                s6.6,3.3,14.1,7.1c7.6,3.7,16.6,7.4,27.2,11.1s18.6,6.2,24,7.4c5.4,1.3,12.8,2.6,22.2,3.9s14.9,2.1,16.3,2.2
                                                c1.5,0.1,3.3,0.3,5.5,0.4l3.3,0.2v0.2h25.6v-0.2l14-1.3c9.3-0.9,17.6-2.1,25-3.3c7.3-1.3,14.9-3.1,22.8-5.5
                                                c7.9-2.4,15.3-4.9,22.4-7.7c7.1-2.8,13.7-5.7,19.7-9c6.1-3.2,11.3-6,15.6-8.5c4.3-2.5,9.1-5.6,14.2-9.3c5.2-3.7,10-7.5,14.6-11.2
                                                s7.1-5.9,7.7-6.4c0.6-0.6,4-4,10.2-10.2c6.2-6.3,11.3-11.9,15.4-16.8c4-5,8-10.3,12-15.9c3.9-5.6,8.3-12.5,13-20.6
                                                s9.2-17.3,13.5-27.5s8-20.7,11-31.5c3-10.7,5.2-20.4,6.7-28.9s2.4-16.5,3-23.8c0.5-7.3,0.8-13.9,0.9-19.7s2.5-10.8,7.4-14.8
                                                s9.9-8.5,15-13.7c5.1-5.1,7.9-8,8.3-8.7c0.5-0.7,0.9-1.1,1.1-1.2c0.3-0.1,2.1-2.3,5.3-6.7c3.3-4.4,5-6.6,5-6.7l0.1-0.1l0.2-0.4
                                                l0.2-0.4l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.2-0.1l0.2-0.1V115l-1,0.3l-0.8,0.1
                                                l-0.4,0.2l-0.4,0.2l-0.4,0.2l-0.4,0.2l-0.6,0.2l-1.2,0.4l-10.6,3.6c-6.7,2.2-13.7,4.1-21,5.7l-11,2.4h-1.9l0.1-0.1l0.1-0.1l0.1-0.1
                                                l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.4-0.2l0.4-0.2l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.4-0.2l0.4-0.2l1.9-1.3
                                                c1.3-0.9,2.4-1.8,3.3-2.8s2.8-2.7,5.6-5.1c2.8-2.4,6-6,9.5-10.7s6.5-9.4,8.8-14s3.6-7.2,3.7-7.9c0.1-0.6,0.3-1.2,0.4-1.6l0.2-0.6
                                                l0.2-0.4l0.2-0.4l0.2-0.6l0.2-0.6l0.1-0.6l0.1-0.6l-0.4,0.1l-0.4,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.4,0.2l-0.4,0.2
                                                l-0.4,0.2l-0.4,0.2l-0.1,0.1c-0.1,0.1-0.8,0.4-1.9,1.2c-1.2,0.7-4.7,2.4-10.5,5s-11.6,5-17.5,7.1s-11.4,3.7-16.5,4.9
                                                s-8.8,0.5-11.3-1.9c-2.4-2.4-5.2-4.7-8.3-6.9c-3.1-2.2-6.5-4.3-10.4-6.4c-3.8-2.1-7.7-3.9-11.8-5.5c-4-1.6-8.6-2.9-13.5-3.8
                                                l-7.4-1.5h-20.5v0.1c0,0.1-1.7,0.4-5.1,0.9s-7.6,1.6-12.6,3.3c-5,1.7-10.4,4.2-16.3,7.4c-5.9,3.3-11.1,7-15.7,11.2
                                                s-8.3,8.3-11.2,12.2c-2.9,3.9-5.2,7.4-7,10.5C221.5,163.3,231.3,307,142.9,364.1z"
                ></path>

                <path
                  id={'wing1'}
                  fill="#5DA8DC"
                  d="M233.2,181.5c-5-0.5-12.4-1.7-22.2-3.6c-9.8-1.8-16.8-3.3-20.8-4.5s-11.1-3.7-21.2-7.4
                                                c-10.1-3.8-19.5-8-28.3-12.8c-8.8-4.7-16.8-9.5-24-14.4s-13.1-9.1-17.5-12.8c-4.5-3.7-7.1-6-7.9-7s-1.5-1.6-1.9-1.8
                                                c-0.5-0.2-3.2-2.7-8-7.6s-9.1-9.2-12.6-13.2l-5.3-5.9l-0.1-0.1l-0.1-0.1L63.1,90l-0.2-0.4l-0.1-0.1l-0.1-0.1l-0.1-0.1l-0.1-0.1
                                                l-0.1-0.1L62.3,89l-0.1-0.1l0,0.1l-0.1,0.1L62,89.2l0,0.1l-0.1,0.1L61.7,90l-0.2,0.6L57.9,98c-2.2,5-3.9,9.7-5.1,14.1
                                                c-1.2,4.5-1.9,8.5-2.4,12c-0.4,3.5-0.5,7.8-0.4,12.8s0.7,10,1.8,15.1c1,5.1,2.6,10.2,4.6,15.2c2.1,5.1,4,9.2,5.8,12.5
                                                c1.8,3.2,3.9,6.4,6.3,9.2c2.4,2.9,4.7,5.6,7.1,8.3s4.6,4.7,6.7,6.4c2.2,1.6,3.3,2.5,3.4,2.5l0.1,0.1l0.4,0.2l0.4,0.2l0.1,0.1
                                                l0.1,0.1l0.1,0.1L87,207l0.4,0.2l0.4,0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1H85l-1.8-0.2
                                                c-1.2-0.1-4.8-0.9-10.8-2.2s-11.1-2.9-15.1-4.7l-6.1-2.8l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.1l-0.4-0.1l0.7,8.3
                                                c0.4,5.5,1.4,11,2.8,16.3c1.5,5.4,3.6,11,6.5,16.9s6.2,11.1,9.8,15.5c3.7,4.5,7,8.1,10.1,11c3.1,2.8,6.3,5.4,9.8,7.8
                                                c3.4,2.4,8,4.8,13.8,7.3s9.3,3.9,10.6,4.3c1.3,0.4,2.2,0.6,2.8,0.8l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l-0.1,0.1l-0.1,0.1
                                                l-0.1,0.1l-0.1,0.1l-1,0.2l-1,0.2l-0.8,0.2c-0.5,0.1-1.9,0.4-4.3,0.8s-6.6,0.6-12.8,0.8c-6.2,0.1-10.7,0-13.5-0.4l-4.3-0.6L81,288
                                                l-0.6-0.1l0.1,0.4l0.1,0.4l0.2,0.6l0.2,0.6l3.2,7.2c2.2,4.8,4.4,9,6.7,12.7c2.3,3.7,5.1,7.2,8.3,10.7c3.2,3.5,5.8,6.2,7.9,8
                                                c2.1,1.9,5.3,4.3,9.9,7.2c4.6,2.9,9.3,5.4,14.1,7.4c4.9,2.1,9.4,3.7,13.5,4.7c4.2,1,7.3,1.6,9.2,1.8c1.9,0.1,4,0.3,6.1,0.4l3.1,0.2
                                                c117.9-117.9,82.9-167.7,82.9-167.7l-2.8-0.1C241.6,182.3,238.2,181.9,233.2,181.5z"
                ></path>

                <path
                  id={'wing2'}
                  fill="#5DA8DC"
                  d="M233.2,181.5c-5-0.5-12.4-1.7-22.2-3.6c-9.8-1.8-16.8-3.3-20.8-4.5s-11.1-3.7-21.2-7.4
                                                c-10.1-3.8-19.5-8-28.3-12.8c-8.8-4.7-16.8-9.5-24-14.4s-13.1-9.1-17.5-12.8c-4.5-3.7-7.1-6-7.9-7s-1.5-1.6-1.9-1.8
                                                c-0.5-0.2-3.2-2.7-8-7.6s-9.1-9.2-12.6-13.2l-5.3-5.9l-0.1-0.1l-0.1-0.1L63.1,90l-0.2-0.4l-0.1-0.1l-0.1-0.1l-0.1-0.1l-0.1-0.1
                                                l-0.1-0.1L62.3,89l-0.1-0.1l0,0.1l-0.1,0.1L62,89.2l0,0.1l-0.1,0.1L61.7,90l-0.2,0.6L57.9,98c-2.2,5-3.9,9.7-5.1,14.1
                                                c-1.2,4.5-1.9,8.5-2.4,12c-0.4,3.5-0.5,7.8-0.4,12.8s0.7,10,1.8,15.1c1,5.1,2.6,10.2,4.6,15.2c2.1,5.1,4,9.2,5.8,12.5
                                                c1.8,3.2,3.9,6.4,6.3,9.2c2.4,2.9,4.7,5.6,7.1,8.3s4.6,4.7,6.7,6.4c2.2,1.6,3.3,2.5,3.4,2.5l0.1,0.1l0.4,0.2l0.4,0.2l0.1,0.1
                                                l0.1,0.1l0.1,0.1L87,207l0.4,0.2l0.4,0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1H85l-1.8-0.2
                                                c-1.2-0.1-4.8-0.9-10.8-2.2s-11.1-2.9-15.1-4.7l-6.1-2.8l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.1l-0.4-0.1l0.7,8.3
                                                c0.4,5.5,1.4,11,2.8,16.3c1.5,5.4,3.6,11,6.5,16.9s6.2,11.1,9.8,15.5c3.7,4.5,7,8.1,10.1,11c3.1,2.8,6.3,5.4,9.8,7.8
                                                c3.4,2.4,8,4.8,13.8,7.3s9.3,3.9,10.6,4.3c1.3,0.4,2.2,0.6,2.8,0.8l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l-0.1,0.1l-0.1,0.1
                                                l-0.1,0.1l-0.1,0.1l-1,0.2l-1,0.2l-0.8,0.2c-0.5,0.1-1.9,0.4-4.3,0.8s-6.6,0.6-12.8,0.8c-6.2,0.1-10.7,0-13.5-0.4l-4.3-0.6L81,288
                                                l-0.6-0.1l0.1,0.4l0.1,0.4l0.2,0.6l0.2,0.6l3.2,7.2c2.2,4.8,4.4,9,6.7,12.7c2.3,3.7,5.1,7.2,8.3,10.7c3.2,3.5,5.8,6.2,7.9,8
                                                c2.1,1.9,5.3,4.3,9.9,7.2c4.6,2.9,9.3,5.4,14.1,7.4c4.9,2.1,9.4,3.7,13.5,4.7c4.2,1,7.3,1.6,9.2,1.8c1.9,0.1,4,0.3,6.1,0.4l3.1,0.2
                                                c117.9-117.9,82.9-167.7,82.9-167.7l-2.8-0.1C241.6,182.3,238.2,181.9,233.2,181.5z"
                ></path>
              </svg>
            </a>
            <a
              className={`${styles['socialicon']} ${styles['dribbble']}`}
              href="https://dribbble.com/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className={styles['dribbble-icon']}
                viewBox="0 0 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M128,255.7 C57.4,255.7 0,198.4 0,127.9 C0,57.3 57.4,0 128,0 C198.6,0 256,57.3 256,127.8 C256,198.3 198.6,255.7 128,255.7 L128,255.7 L128,255.7 Z M235.9,145.3 C232.2,144.1 202.1,135.2 167.8,140.6 C182.1,179.8 187.9,211.8 189,218.4 C213.6,201.9 231.1,175.7 235.9,145.3 L235.9,145.3 L235.9,145.3 Z M170.7,228.5 C169.1,218.9 162.7,185.5 147.4,145.7 C147.2,145.8 146.9,145.9 146.7,145.9 C85,167.4 62.9,210.1 60.9,214.1 C79.4,228.5 102.7,237.1 128,237.1 C143.1,237.2 157.6,234.1 170.7,228.5 L170.7,228.5 L170.7,228.5 Z M46.8,201 C49.3,196.8 79.3,147.2 135.7,128.9 C137.1,128.4 138.6,128 140,127.6 C137.3,121.4 134.3,115.2 131.1,109.1 C76.5,125.4 23.5,124.7 18.7,124.6 C18.7,125.7 18.6,126.8 18.6,127.9 C18.7,156 29.3,181.6 46.8,201 L46.8,201 L46.8,201 Z M21,105.6 C25.9,105.7 70.9,105.9 122.1,92.3 C104,60.1 84.4,33.1 81.6,29.2 C50.9,43.6 28.1,71.8 21,105.6 L21,105.6 L21,105.6 Z M102.4,21.8 C105.4,25.8 125.3,52.8 143.2,85.7 C182.1,71.1 198.5,49.1 200.5,46.3 C181.2,29.2 155.8,18.8 128,18.8 C119.2,18.8 110.6,19.9 102.4,21.8 L102.4,21.8 L102.4,21.8 Z M212.6,58.9 C210.3,62 192,85.5 151.6,102 C154.1,107.2 156.6,112.5 158.9,117.8 C159.7,119.7 160.5,121.6 161.3,123.4 C197.7,118.8 233.8,126.2 237.4,126.9 C237.1,101.2 227.9,77.5 212.6,58.9 L212.6,58.9 L212.6,58.9 Z"
                    fill="#B2215A"
                    y="0"
                  ></path>
                </g>
              </svg>
            </a>
            <a
              className={`${styles['socialicon']} ${styles['linkedin']}`}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className={styles['linkedin-icon']}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                viewBox="0 0 24 24"
                fill="#0e76a8"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              className={`${styles['socialicon']} ${styles['medium']}`}
              href="https://medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faMediumM} className={styles['icons']} />
            </a>
            <a
              className={`${styles['socialicon']} ${styles['codeforces']}`}
              href="https://codeforces.com/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className={styles['codeforces-icon']}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="5 0 14 19"
                width="100"
                height="100"
              >
                <g>
                  <rect
                    className={styles['red']}
                    x="15"
                    width="2"
                    height="6.5"
                    rx="0.7"
                    y="0"
                    fill="#AE0F0A"
                  ></rect>
                  <rect
                    className={styles['blue']}
                    x="12"
                    width="2"
                    height="6.5"
                    rx="0.7"
                    y="0"
                    fill="#4F81C1"
                  ></rect>
                  <rect
                    className={styles['yellow']}
                    x="9"
                    width="2"
                    height="6.5"
                    rx="0.7"
                    y="0"
                    fill="#FFD400"
                  ></rect>
                </g>
              </svg>
            </a>
            <a
              className={`${styles['socialicon']} ${styles['kaggle']}`}
              href="https://www.kaggle.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faKaggle} className={styles['icons']} />
            </a>
            <a
              className={`${styles['socialicon']} instagram`}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className={'instagram-icon'}
                x="0px"
                y="0px"
                viewBox="0 0 202.5 202.5"
                enableBackground="new 0 0 202.5 202.5"
              >
                <circle
                  id={'littleCircle'}
                  className={'st0'}
                  cx="101"
                  cy="101.5"
                  r="18.9"
                ></circle>
                <circle
                  id={'shutter'}
                  className={'st0'}
                  cx="101"
                  cy="101.5"
                  r="8"
                ></circle>
                <circle
                  id={'lens'}
                  className={'st0'}
                  cx="125.5"
                  cy="78.6"
                  r="2.9"
                ></circle>
                <path
                  id={'camera'}
                  className={'st0'}
                  d="M79,60.5h44c10.5,0,19,8.5,19,19v44c0,10.5-8.5,19-19,19H79c-10.5,0-19-8.5-19-19v-44
                                                                                                        C60,69,68.5,60.5,79,60.5z"
                ></path>
              </svg>
            </a>

            <a
              className={`${styles['socialicon']} github`}
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className={'github-icon'}
                width="45px"
                height="45px"
                viewBox="0 0 300 300"
              >
                <path
                  id={styles['body']}
                  d="M112.5,234.4v43.1c24.5,7.5,50.5,7.5,75,0V225c-0.4-11.1-4.9-21.6-12.7-29.6c30-3.4,59.5-23.5,59.5-64.1
                                                            c0.9-13.9-3.3-27.7-11.8-38.7c4.1-11.6,3.7-24.4-1.3-35.7c0,0-11.2-3.7-37.5,13.8c-22.1-6.1-45.3-6.1-67.4,0
                                                            C90.6,53.3,78.9,56.8,78.9,56.8c-5,11.3-5.4,24.1-1.3,35.7c-8.5,11.1-12.7,24.8-11.9,38.7c0.2,33.8,26.4,61.8,60.2,64.1
                                                            c-5,4.7-8.1,11.1-8.6,18"
                ></path>

                <path
                  id={'arm'}
                  d="M125.2,213.4c-13.9,7.8-31.5,2.8-39.3-11.2c-4.3-7.7-12-12.8-20.7-13.8c-11.2,0-4.6,6.4,0,9.4
                                                            c6,5.1,10.8,11.5,13.8,18.8c2.9,7.4,7.7,24.1,41.5,17.8"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
