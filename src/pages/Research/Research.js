import React, { useState } from "react";
import styles from "./Research.module.css";
import inteferenceNetwork from "../../assets/images/research-page/inteferenceNetwork.png";
import crossLingual from "../../assets/images/research-page/crossLingual.png";
import wordRepresentation from "../../assets/images/research-page/wordRepresentation.png";
import dialogueState from "../../assets/images/research-page/dialogueState.png";
import semanticSegmentation from "../../assets/images/research-page/semanticSegmentation.png";
import deepNetwork from "../../assets/images/research-page/deepNetwork.png";
import imageDecomposition from "../../assets/images/research-page/imageDecomposition.png";
import neuralNetworks from "../../assets/images/research-page/neuralNetworks.jpg";
import { Helmet } from "react-helmet";

const Research = () => {
  const [isActive, setActive] = useState("false");
  const [isCite, setCite] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleCiteToggle = () => {
    setCite(!isCite);
  };

  return (
    <div>
      <Helmet>
        <title>John Doe | Research</title>
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
          content="https://portfolio.smaranjitghose.codes/research.html"
        />
        <meta property="og:title" content="John Doe | Research" />
        <meta
          property="og:description"
          content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio.smaranjitghose.codes/research.html"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="John Doe | Research" />
        <meta
          name="twitter:description"
          content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
        />
        <meta
          name="twitter:url"
          content="https://portfolio.smaranjitghose.codes/research.html"
        />
        <meta name="application-name" content="John Doe | Research" />
        <meta name="apple-mobile-web-app-title" content="John Doe | Research" />
        <meta
          name="summary"
          content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
        />
      </Helmet>
      <div
        className={`${styles['research-container']} ${styles['research-upper']} ${styles['pt-5']}`}
        style={{ width: "100%", minHeight: "80%;" }}
      >
        <section className={`${styles['txt-bottom']}`}>
          <div className={`${styles['px-3']} ${styles['pt-5']}`}>
            <div className={`${styles['row']}`}>
              <div className={`${styles['col-md-6']} ${styles['d-flex']} ${styles['mt-5']} ${styles['flex-column']} ${styles['text-center']} ${styles['justify-content-center']} ${styles['animate__animated']} ${styles['animate__zoomIn']} ${styles['animate__delay-1s']}`}>
                <h2 className={`${styles['main-heading']} ${styles['mb-0']} ${styles['head-upper']} ${styles['research_head']}`}>
                  Research <span className={`${styles['research_work']}`}>Work</span>
                </h2>
                <p className={`${styles['pre-heading']} ${styles['p-upper']} ${styles['font-weight-bolder']}`}>
                  My area of interests are AI, Blockchain, Machine Learning and
                  Computer Vision.
                </p>
              </div>

              <div className={`${styles['col-md-6']}`} style={{ marginTop: '45px'}}>
                {/* <!-- <img className={`${styles['img-fluid']} ${styles['d-block']} ${styles['img-fluid']} ${styles['d-block']} ${styles['animate__animated']} ${styles['animate__zoomIn']} ${styles['animate__delay-1s"']} ${styles['src="./assets/images/research-page/research1.svg']}`}> --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id={`${styles['verapc']}`}
                  width="100%"
                  baseProfile="tiny"
                  className={`${styles['svgmate']}`}
                  version="1"
                  viewBox="800 300 1220 1080"
                >
                  <g id={`${styles['_L3_x5F_Frame-Plant-STable']}`}>
                    <g
                      id={`${styles['_x3C_Group_x5F_FRAME_x3E_']}`}
                      className={`${styles['framedropin']}`}
                      style={{
                        animationName: "veradropin",
                        animationIterationCount: "1",
                        animationDuration: ".9s",
                        animationTimingFunction: "ease-in-out",
                      }}
                    ></g>
                  </g>
                  <path
                    id={`${styles['Layer_13']}`}
                    fill="#FFF"
                    d="M126 1080c120-147 255-180 420-327 92-82 222-432 510-522s708 165 864 171 3-432 3-432L-23-28l-16 1109 165-1z"
                    className={`${styles['shapecut']}`}
                    style={{
                      animationName: "shapemask",
                      animationTimingFunction: "ease-in-out",
                      animationIterationCount: "infinite",
                      animationDuration: "5s",
                    }}
                  ></path>
                  <g
                    className={`${styles['plantsscalein']}`}
                    style={{
                      animationName: "verascalein",
                      animationIterationCount: "1",
                      animationDuration: "1.5s",
                      animationTimingFunction: "ease-in-out",
                      transformOrigin: "1907.25px 884.25px",
                    }}
                  >
                    <path
                      fill="#355469"
                      d="M1891 858s-6-28-8-52c-2-23-6-61-31-94-15-19-14-56-15-74 0-32-19-55-26-71s-10-32-12-40-6-27-14 10 4 87 17 112c18 38-3 91 20 135 13 23 30 30 41 32s14 3 17 13l8 29h3z"
                      className={`${styles['plant']} ${styles['p2']}`}
                      style={{ animationDuration: "8s" }}
                    ></path>
                    <path
                      fill="#bb86fc"
                      d="M1852 850s-49-48-57-70c-13-35-35-79-85-147-24-32-70-38-85-45-19-9-38-24-43-30-4-6-23-23-3 19 16 35 62 46 83 64 47 40 30 73 62 115 13 17 27 29 53 34 11 2 20 6 29 16 16 16 16 16 37 44h9z"
                      className={`${styles['plant']} ${styles['p3']}`}
                      style={{ animationDuration: "3.6s" }}
                    ></path>
                    <path
                      fill="#17354C"
                      d="M1883 858s-4-50-82-155-106-145-115-153-26-21-13 17c15 47 3 63 23 88l69 90c36 46 78 79 93 80 6 0 9 5 11 8 5 9 10 25 10 25h4z"
                      className={`${styles['plant']} ${styles['p4']}`}
                      style={{ animationDuration: "4.8s" }}
                    ></path>
                    <path
                      fill="#17354C"
                      d="M1852 850s-49-48-57-70c-13-35-82-82-97-91-37-23-55-46-60-52-12-15-31-37-22 16 6 34 40 70 62 88 47 40 73 44 99 49 11 2 20 6 29 16 16 16 16 16 37 44h9z"
                      className={`${styles['plant']} ${styles['p5']}`}
                      style={{ animationDuration: "5.6s" }}
                    ></path>
                  </g>
                  <g
                    className={`${styles['peopletableslide']}`}
                    style={{
                      animationName: "veraslidein",
                      animationIterationCount: "1",
                      animationDuration: "1s",
                      animationTimingFunction: "ease-in-out",
                      transform: "translateX(45px)",
                    }}
                  >
                    <g id={`${styles['L5_x5F_Human_x5F_Woman']}`}>
                      <path
                        id={`${styles['_x3C_Path_x5F_WArm_x5F_back_x3E_']}`}
                        fill="#F68E5A"
                        d="M1532 830s-10-81-32-113l-28 29 38 84h22z"
                      ></path>
                      <g id={`${styles['_x3C_Group_x5F_WShirt_x3E_']}`}>
                        <path
                          id={`${styles['_x3C_Path_x5F_Shirt_x5F_middle_x3E__1_']}`}
                          fill="#355469"
                          d="M1228 694s38-53 137-61c0 0 66-4 105 29l48 43s4 5-2 13c-3 4-8 3-10 6-6 6-3 9-10 16-4 3-8 1-12 10l-30 57c-9 17-17 25-38 26s-61 12-79 18c-21 6-91-7-95-45l-14-112z"
                        ></path>
                        <path
                          id={`${styles['_x3C_Path_x5F_Shirt_x5F_top_x3E_']}`}
                          fill="#17354C"
                          d="M1234 739l-6-45s38-53 137-61c0 0 66-4 105 29l40 35s-1 7-10 8-14-6-18-2c-5 4 9 15 0 22s-19-7-28-2 0 12-10 19c-8 6-27-14-35-9s-2 22-12 25c-7 3-25-17-32-15s-1 27-12 28-12-22-25-22-12 21-23 18c-10-4-2-30-13-34-8-3-15 18-23 17s-1-22-9-24-26 13-26 13z"
                        ></path>
                        <path
                          id={`${styles['_x3C_Group_x5F_Shirt_x5F_bottom_x3E_']}`}
                          fill="#2A475D"
                          d="M1489 833l-30-36-5 9c-9 18-17 26-38 27s-61 12-79 18c-10 3-31 1-51-5l-1 50c71-38 143-55 203-63h1z"
                        ></path>
                      </g>
                      <g id={`${styles['_x3C_Group_x5F_Face_x5F_Woman_x3E_']}`}>
                        <path
                          id={`${styles['_x3C_Path_x5F_WNeck_x3E_']}`}
                          fill="#F68E5A"
                          d="M1327 630s-5 6-1 13c4 8 31 55 32 59 1 3 6 13 10 4s11-58 11-58-18 15-52-18z"
                        ></path>
                        <path
                          id={`${styles['_x3C_Path_x5F_WFace_x5F_Shape_x3E_']}`}
                          fill="#F89F71"
                          d="M1313 606s18 47 54 47c26 0 38-32 38-50v-37h-92v40z"
                        ></path>
                        <path
                          id={`${styles['_x3C_Path_x5F_WHair_x3E_']}`}
                          fill="#585268"
                          d="M1356 511c-17-1-32 8-44 23-8 10-26 4-25 38 1 10 4 6 4 15-1 9-7 12-7 21s5 40 28 35c20-5 16-17 16-21s-1-6-6-10-5-8-3-10 5-1 7 1 4 4 5-3-4-19 4-16 17 11 40 10 29-13 30-16v27l-2 15s9-1 22-19c7-9 3-17 1-23 0 0-15-25-15-32s-15-31-55-35z"
                        ></path>
                        <g id={`${styles['_x3C_Group_x5F_WEyes_x3E_"']} ${styles['fill="#2C5169']}`}>
                          <path d="M1390 610h7c3 0 4-2 2-3-4-3-9 3-9 3zM1356 612h9c3 0 4-2 3-3-5-3-12 3-12 3z"></path>
                        </g>
                        <path
                          id={`${styles['_x3C_Path_x5F_WNose_x3E_']}`}
                          fill="#F68D59"
                          d="M1383 609c0 2 3 21-4 21s-6-9-3-15 6-13 7-6z"
                        ></path>
                        <path
                          id={`${styles['_x3C_Path_x5F_WMouth_x3E_']}`}
                          fill="#F5845F"
                          d="M1373 643c4 0 7-2 8-3s-3-2-8-2-10-1-7 2c2 2 5 3 7 3z"
                        ></path>
                      </g>

                      <g
                        className={`${styles['specrotate']}`}
                        style={{
                          animationName: "armright",
                          animationTimingFunction: "ease-in-out",
                          animationIterationCount: "infinite",
                          animationDuration: "7.5s",
                          animationDelay: "2s",
                          transformOrigin: "1519px 874.7px",
                        }}
                      >
                        <g id={`${styles['_x3C_Group_x5F_WGlasses_x3E_']}`}>
                          <path
                            fill="#F9B4A7"
                            d="M1346 726h-1c0-1-19-39-23-44l-2-2c-3 0-6 2-8 3h-1v-1c1-1 5-4 9-4l4 3 23 44a1 1 0 0 1-1 1zM1398 702h-1a1362 1362 0 0 0-26-48c-3 0-6 2-7 3h-2v-1c1-1 5-4 9-4l4 3a1300 1300 0 0 1 23 47z"
                          ></path>
                          <path
                            fill="#F9B4A7"
                            d="M1398 703h2v2c-3 4-10 8-16 8h-1l-3-1c0-1 2-4 6-6l12-3m0-2c-4 0-9 1-12 3-8 3-12 10-3 11h1c8 0 20-8 18-12-1-2-2-2-4-2zM1364 719h2v2c-3 4-10 8-16 8h-1l-3-1c0-1 2-4 6-6l12-3m0-2c-4 0-9 1-12 3-8 3-12 10-3 11h1c8 0 20-8 18-12-1-2-2-2-4-2z"
                          ></path>
                          <path
                            fill="#F9B4A7"
                            d="M1368 719l-2-1c4-5 9-6 13-6v2c-3 0-8 1-11 5z"
                          ></path>
                        </g>
                        <path
                          id={`${styles['_x3C_Path_x5F_WArm_x3E__1_']}`}
                          fill="#F89F71"
                          d="M1393 649c-8 1-18 1-24 10s-10 21-5 22c7 1 5-7 8-9 3-3 15-10 11-2-2 4-2 7-2 9s3 3 5-2c3-6 9-6 13-6s8 0 11 10 19 83 33 116c25 59 52 73 62 77 19 6 25-8 25-8s12-35-19-79c-24-34-40-68-58-89s-23-29-27-34-13-16-33-15z"
                        ></path>
                      </g>
                    </g>
                    <g id={`${styles['L5_x5F_Human_x5F_Man']}`}>
                      <path
                        id={`${styles['sholderforman']}`}
                        fill="#bb86fc"
                        d="M1163 622c58 28 85 38 82 193s-26 123-42 114-40-307-40-307z"
                      ></path>
                      <path
                        fill="#FDE6E1"
                        d="M1175 682l10 12c1-2-1-16-5-16s-5 4-5 4z"
                      ></path>
                      <path
                        fill="#F68F5B"
                        d="M1161 617l-8 13c-1 3-5 5 2 16s6 12 6 12h-61s-5-29-5-49c0-8 19-38 22-42 0 0 21 48 44 50z"
                      ></path>
                      <path
                        fill="#17354C"
                        d="M1114 650s15 6 23 5 20-17 20-17 17 36 27 83 16 96 0 242l-93 73 23-386z"
                      ></path>

                      <path
                        fill="#FFF"
                        d="M1122 707c-5-9-8-29-24-49s-26-34-22-42 12-12 22-16c-3 7-5 13-2 20 8 18 29 41 49 61 14 14 6 34 6 34 0-14-3-36-15-15-4 7-5 25-14 7z"
                      ></path>
                      <path
                        fill="#FFF5F3"
                        d="M1156 624l-4 8c-1 1-3 4 2 12s15 28 21 55c0-9 0-20 3-21s7 6 8 16c2-1 2-9-6-26l-24-44z"
                      ></path>

                      <g id={`${styles['_x3C_Group_x5F_Mouse_x3E_']}']`} className={styles['arm']}>
                        <path
                          fill="#d3b4f8"
                          d="M1363 1051c-6 6-17 11-36 10s-54 1-46-17 16-18 59-15c13 0 41 4 23 22z"
                        ></path>
                        <path
                          fill="#F3726C"
                          d="M1353 1037c-11-7-24-5-14 0s24 6 14 0z"
                        ></path>
                      </g>
                      <g
                        id={`${styles['_x3C_Group_x5F_ManSleeve_x3E_']}`}
                        className={`${styles['sleave']}`}
                        style={{
                          animationName: "sleave",
                          animationTimingFunction: "ease-in-out",
                          animationIterationCount: "infinite",
                          animationDuration: "5s",
                          transformOrigin: "1009.149px 711.625px",
                        }}
                      >
                        <path
                          id={`${styles['_x3C_Path_x5F_WhiteSleeve_x3E_']}`}
                          fill="#bb86fc"
                          d="M1084 712c-9-22-26-58-65-58s-97 56-97 183 1 211 45 213c7 0 14-9 26-17 25-19 60-40 64-47 6-10 7-36 6-56s6-107 18-136 13-60 3-82z"
                        ></path>
                        <path
                          id={`${styles['_x3C_Path_x5F_WhiteSleeve_x5F_Shadow_x3E_']}`}
                          fill="#bb86fc"
                          d="M994 1023s-21 18-31 18-13-10-13-17c2-20 46-76 113-78 0 0-36 49-69 77z"
                        ></path>
                      </g>
                      <g id={`${styles['_x3C_Group_x5F_ManArm_x3E_']}`} className={styles['arm']}>
                        <path
                          fill="#F89F71"
                          d="M1347 1034l-15-20c-3-5-8-10-25-6s-37 10-51 5-172-62-186-64-30-4-62 13-54 36-40 47 41 23 97 26 155 12 175 13 22-3 30-2l11 2c5 0 17-14 25-14s14 6 18 9 8 3 4-2-10-11 3-1c2 2 5 4 11 3s18 1 5-9z"
                        ></path>
                        <path
                          fill="#F79463"
                          d="M1024 954l-16 8c-32 18-54 36-40 47s41 23 97 26 155 12 175 13c0 0-23-22-66-22s-84-13-104-22-35-18-46-50z"
                        ></path>
                      </g>
                      <g
                        className={`${styles['armright']}`}
                        style={{
                          animationName: "armright",
                          animationTimingFunction: "ease-in-out",
                          animationIterationCount: "infinite",
                          animationDuration: "10s",
                          transformOrigin: "1243px 961.5px",
                        }}
                      >
                        <path
                          id={`${styles['_x3C_Path_x5F_ArmRight_x3E_']}`}
                          fill="#F89F71"
                          d="M1267 686c-5 22-106 264-24 276 54 7 58-146 53-260-1-15-1-18 4-29s11-26 4-38-11-17-16-21-7-7-13 10c-2-5-8-14-15-17-5-3-4 4-1 7s5 12 5 24 0 25 3 30 2 8 0 18z"
                        ></path>
                        <path
                          id={`${styles['_x3C_Path_x5F_HandShadow_x3E_']}`}
                          fill="#F68F5B"
                          d="M1303 660s-4 5-11 5-20-6-21-21c0-6 2-11 3-10s5 16 9 19 6 0 9 3 4 5 11 4z"
                        ></path>
                        <g id={`${styles['_x3C_Group_x5F_Pencil_x5F_Front_x3E_']}`}>
                          <path
                            fill="#F9B4A7"
                            d="M1344 683c-5-12-28-25-37-32l-2 8c6 4 29 23 39 24z"
                          ></path>
                          <path
                            fill="#FEEEE8"
                            d="M1344 683l-9-11-5 5c5 3 10 6 14 6z"
                          ></path>
                          <path
                            fill="#F26D57"
                            d="M1344 683l-3-4-2 3 5 1z"
                          ></path>
                        </g>
                        <g id={`${styles['_x3C_Group_x5F_Pencil_x5F_Back_x3E_']}`}>
                          <path
                            fill="#F26D57"
                            d="M1246 610c1-2 2-1 3-1l-7-5h-4c-2 1-1 4 0 5l7 4 1-3z"
                          ></path>
                          <path
                            fill="#F9B4A7"
                            d="M1274 627l-24-18s-3-1-4 1v4l27 19 1-6z"
                          ></path>
                        </g>
                      </g>
                      <g
                        id={`${styles['_x3C_Group_x5F_Man_x5F_Face_x3E_']}`}
                        className={`${styles['manhead']}`}
                        style={{
                          animationName: "head",
                          animationTimingFunction: "ease-in-out",
                          transformOrigin: "1117.293px 580.5px",
                          animationIterationCount: "infinite",
                          animationDuration: "5s",
                        }}
                      >
                        <path
                          fill="#F89F71"
                          d="M1212 508c14 8 27 26 8 72s-45 63-77 28-33-55-8-89c24-34 47-29 77-11z"
                        ></path>
                        <path
                          id={`${styles['_x3C_Path_x5F_Snor_x3E_']}`}
                          fill="#585268"
                          d="M1215 603c2-2 3-7-2-10s-8 1-11 4-7 4-10 4-8 3-1 4 20 4 24-2z"
                        ></path>
                        <path
                          fill="#585268"
                          d="M1175 557c0-12 10-16 5-23s-9-14-12-16-6-10 6-10 36 14 47 11 20-10 3-20-52-35-91-24c-12 4-16 12-17 15s-11 0-15 9-15 51-4 76c4 11 6 18 22 17 11-2 12 5 29-14 6-6 7-11 10-17 2-5 17-4 17-4z"
                        ></path>
                        <path
                          id={`${styles['_x3C_Path_x5F_Nose_x3E_']}`}
                          fill="#F68E5A"
                          d="M1219 569s-11 10-11 18 9 8 11 1 2-14 0-19z"
                        ></path>
                        <g id={`${styles['_x3C_Group_x5F_Glasses_x3E_']}`}>
                          <path
                            fill="#F26A56"
                            d="M1209 551c-7 0-14 10-14 18s5 11 8 11 14-3 14-18c0-4-1-11-8-11zm-5 25c-3 0-5-1-5-7 0-9 6-14 10-14 2 0 5 0 5 7 0 8-7 14-10 14z"
                          ></path>
                          <path
                            fill="#F26D57"
                            d="M1231 558c-3 0-7 3-11 9s-2 15 2 17c5 2 15-5 15-19 0-4-2-7-6-7zm-6 23c-2 0-3-3-3-5 0-7 6-14 9-14 1 0 2 1 2 4 0 7-5 15-8 15z"
                          ></path>
                          <path
                            fill="#F26A56"
                            d="M1156 561l3-5c2-3 6-1 8-1l30 9v4l-28-9c-2-1-6-2-8 0l-3 4c-1 2-3 0-2-2zM1216 568h5l-1 3h-5z"
                          ></path>
                        </g>
                        <path
                          id={`${styles['_x3C_Path_x5F_Beard-TOP_x3E_']}`}
                          fill="#585268"
                          d="M1166 602c-4 0-9 0-12 5s-6 11 5 16 13 9 17 15 13 13 22-2 10-24 8-27c0 0-4 4-12 5-9 1-20-11-28-12z"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g className={`${styles['stuffontable']}`}>
                    <g
                      id={`${styles['L4_x5F_ScreenLamp']}`}
                      className={`${styles['screenlamp']}`}
                      style={{
                        animationName: "veraslidein",
                        animationIterationCount: "1",
                        animationDuration: "1.39s",
                        animationTimingFunction: "ease-in-out",
                        transform: "translateX(45px)",
                      }}
                    >
                      <path
                        fill="#bb86fc"
                        d="M1823 958l41-366-187-272 3-9 194 281-41 366z"
                      ></path>
                      <path
                        fill="#bb86fc"
                        d="M1681 464c-2 3-24 2-61-11-32-11-57-26-55-31 2-4 32-1 63 11 34 12 55 26 53 31z"
                      ></path>
                      <ellipse
                        cx="1868"
                        cy="596"
                        fill="#FFF"
                        rx="9"
                        ry="9"
                      ></ellipse>
                      <ellipse
                        cx="1868"
                        cy="596"
                        fill="#F15E59"
                        rx="4"
                        ry="4"
                      ></ellipse>
                      <path
                        fill="#bb86fc"
                        d="M1628 433l-8 20c37 13 59 14 61 11 2-5-19-19-53-31"
                      ></path>
                      <path
                        fill="#FEEBE8"
                        d="M1618 430s-2 10 3 14 9 4 17-7c0 0-7-5-20-7z"
                      ></path>
                      <path
                        fill="#dfd0f3"
                        d="M1680 344c-4-9 1-32 8-45 4-7 0-14-7-17-9-4-16 0-20 10s-6 31-25 41c-19 11-38 21-52 48s-19 42-19 42c2-5 32-2 63 10 34 12 55 26 53 31 0 0 10-33 11-48s4-25-12-72z"
                      ></path>
                      <path
                        fill="#d3baf3"
                        d="M1621 430l7 3c33 12 55 26 53 31 0 0 10-33 11-48s4-25-12-72c-4-9 1-32 8-45 4-7 0-14-7-17-9-4-16 0-20 10l-4 13s4 24 2 32c-4 14-28 10-36 56-3 14-2 37-2 37z"
                      ></path>
                      <g id={`${styles['_x3C_Group_x5F_SCREEN_x3E_']}`}>
                        <path
                          fill="#FFF"
                          d="M1715 939c-5-5-41-60-47-70s-3-18-2-25l36-253c2-10 3-10 12-12 24-1 67 3 67 3 5 2 10 4 10 13-2 37-7 112-14 162a1897 1897 0 0 1-34 165c-6 22-8 24-15 26-4 2-10-5-13-9z"
                        ></path>
                        <path
                          fill="#FEE6DF"
                          d="M1820 955l-42-149-16 67-19 60c-5 16-11 15-15 15 7-2 9-4 15-26 10-37 23-104 30-144 9-48 15-141 18-183 0-8-5-11-10-13 7 0 14 3 14 20 1 37-4 110-12 167l50 186h-13z"
                        ></path>
                        <path
                          fill="#bb86fc"
                          d="M1778 600l-71-8-30 215 61 71s15-66 24-121c16-89 16-157 16-157z"
                        ></path>
                        <path
                          fill="#bb86fc"
                          d="M1931 1000c0 12-43 32-104 32-43 0-118-18-118-40 0-17 51-39 116-39 35 0 106 32 106 47z"
                        ></path>
                        <path
                          fill="purple"
                          d="M1706 607l2-15 71 8-1 18-72-11z"
                        ></path>

                        <path
                          fill="#FDE6E3"
                          d="M1701 719l18 9-5 39-19-12zM1731 733l18 9-8 45-17-13zM1740 648l20 4-5 34-19-5zM1709 640l21 5-5 33-19-6z"
                        ></path>
                        <ellipse
                          cx="1713"
                          cy="601"
                          fill="#FEF5F5"
                          rx="1"
                          ry="3"
                        ></ellipse>
                        <ellipse
                          cx="1717"
                          cy="602"
                          fill="#FEF5F5"
                          rx="1"
                          ry="3"
                        ></ellipse>
                        <path
                          fill="#c2bff5"
                          d="M1702 860c0 3-1 5-3 6-1 0-2-2-2-5s2-5 3-5c2-1 3 1 2 4z"
                        ></path>
                        <path
                          fill="#FDDFDB"
                          d="M1851 963c0 5-10 9-23 9s-23-8-23-13c0-6 10-10 23-10s23 8 23 14z"
                        ></path>
                      </g>
                    </g>
                    <g
                      id={`${styles['L4_x5F_Keyboard']}`}
                      className={`${styles['keyboard']}`}
                      style={{
                        animationName: "veraslidein",
                        animationIterationCount: "1",
                        animationDuration: "1.37s",
                        animationTimingFunction: "ease-in-out",
                        transform: "translateX(45px)",
                      }}
                    >
                      <path
                        fill="#FFF"
                        d="M1574 913c6 0 13-1 20 11l43 85c4 7 5 13-7 17s-91 15-98 17-18 1-23-14-22-95-23-103 1-13 17-13h71z"
                      ></path>
                      <path
                        fill="#FDDFDB"
                        d="M1511 1020a3001 3001 0 0 1-24-103c-2 2-2 5-2 9 2 8 19 87 24 103s16 15 23 14 86-13 98-17c6-2 9-5 9-8-12 4-98 15-105 16s-19 2-23-14z"
                      ></path>
                      <path
                        fill="#d3b4f8"
                        d="M1560 922c4 0 8 0 13 7l30 66c3 4 1 11-7 13l-61 9c-5 0-12 1-15-10l-19-77c-2-8-2-9 13-9l46 1z"
                      ></path>
                    </g>
                    <g
                      id={`${styles['L4_x5F_Cup']}`}
                      className={`${styles['coffee']}`}
                      style={{
                        animationName: "veraslidein",
                        animationIterationCount: "1",
                        animationDuration: "1.3s",
                        animationTimingFunction: "ease-in-out",
                        transform: "translateX(45px)",
                      }}
                    >
                      <path
                        fill="#dfd0f3"
                        d="M1339 900l-6-2 2-21h-54c0 1 9 64 17 84 3 8 6 11 13 11s10-4 12-11l3-15c9 0 10-3 11-6l7-28c2-10-3-11-5-12zm1 9l-7 30c-1 2-4 2-6 2l6-39 4 1c4 2 3 4 3 6z"
                      ></path>
                      <ellipse
                        cx="1308"
                        cy="877"
                        fill="#bb86fc"
                        rx="27"
                        ry="10"
                      ></ellipse>
                      <path
                        fill="#2A475D"
                        d="M1330 883c-5 2-13 4-22 4-8 0-15-1-20-3-4-2 5-6 20-6s25 3 22 5z"
                      ></path>
                      <g id={`${styles['_x3C_Group_x5F_Cup_x5F_Steam_x3E_']}`}>
                        <path
                          fill="#FFF5F3"
                          d="M1308 862c2 0 9-5 9-16s-1-19-6-26-8-21-9-9c0 8 3 10 3 16-1 5-6 16-6 22s3 13 9 13z"
                          className={`${styles['steam']} ${styles['ste1']}`}
                          style={{ animationDuration: "4s" }}
                        ></path>
                        <path
                          fill="#FFF5F3"
                          d="M1326 851c1 3-2 12-5 8-2-2 2-5 1-8-2-7 0-13 4 0z"
                          className={`${styles['steam']} ${styles['ste2']}`}
                          style={{ animationDuration: "4.8s" }}
                        ></path>
                      </g>
                    </g>
                    <g
                      id={`${styles['L_x3F__x5F_PencilBox_x5F_TopLayer']}`}
                      className={`${styles['pencils']}`}
                      style={{
                        animationName: "veraslidein",
                        animationIterationCount: "1",
                        animationDuration: "1.3s",
                        animationTimingFunction: "ease-in-out",
                        transform: "translateX(45px)",
                      }}
                    >
                      <path
                        fill="#FFF"
                        d="M1657 1080s-6-53-4-72h120c0 38-4 72-4 72h-112z"
                      ></path>
                      <ellipse
                        cx="1713"
                        cy="1008"
                        fill="#d3b4f8"
                        rx="60"
                        ry="22"
                      ></ellipse>
                      <g id={`${styles['_x3C_Group_x5F_PencilPink_x3E_']}`}>
                        <path
                          fill="#F8AFA3"
                          d="M1671 932s-6-1-8 3l-4-13c2-4 8-3 8-3l4 13"
                        ></path>
                        <path
                          fill="#FDDFDB"
                          d="M1702 1029l-31-97s-6-1-8 3l30 93 9 1z"
                        ></path>
                      </g>
                      <g id={`${styles['_x3C_Group_x5F_PencilBlue_x3E_']}`}>
                        <g fill="#17354C">
                          <path d="M1696 930v-1M1683 916c5-6 9 0 9 0l4 13c-1 0-6-2-10 1l-3-14z"></path>
                        </g>
                        <path
                          fill="#F8AFA3"
                          d="M1719 1029l-23-99s-6-3-10 0l22 99h11z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <div className={`${styles['researchMainWrapper']}`}>
          <div className={`${styles['container']}`}>
            <div className={`${styles['researchDetails']}`}>
              <table id={`${styles['researchDetailsTable']}`}>
                <tbody className={`${styles['main']}`}>
                  <tr data-aos="zoom-in-left" className={'aos-init'}>
                    <td className={`${styles['imgCol']}`}>
                      <img
                        src={inteferenceNetwork}
                        className={`${styles['rImg']}`}
                        alt="research"
                      />
                    </td>
                    <td className={`${styles['researchTitleName']}`}>
                      <div>
                        {/* <span className={`${styles['imgResponsive']}`}>
                                                    <img src={inteferenceNetwork} className={`${styles['imgRes']}`}/>
                                                </span> */}
                      </div>
                      <a href="#0" className={`${styles['paperTitle']}`}>
                        {" "}
                        A Batch Normalized Inference Network Keeps the KL
                        Vanishing Away{" "}
                      </a>
                      <div>
                        {" "}
                        Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li
                        and Dapeng Wu{" "}
                      </div>{" "}
                      <div className={`${styles['rConferences']}`}>
                        {" "}
                        The 58th Annual Meeting of the Association for
                        Computational Linguistics
                        <div className={`${styles['researchY']}`}>2020</div>
                      </div>
                      {/* <!--CITE BUTTON--> */}
                      <div className={'d-flex'} style={{ marginRight: '5%'}}>
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#absPopup1"
                          aria-expanded="false"
                          aria-controls="absPopup1"
                          onClick={handleToggle}
                        >
                          ABSTRACT
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#popup1"
                          aria-expanded="false"
                          aria-controls="popup1"
                          onClick={handleCiteToggle}
                        >
                          CITE
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div
                        id={`absPopup1`}
                        aria-labelledby="headingTwo"
                        data-parent=".collapse"
                        className={isActive ? styles['active'] : styles['hidden']}
                      >
                        <div className={`${styles['card-body']}`}>
                          This is currently left empty and this can be
                          considered as a dummy data 1
                        </div>
                      </div>
                      <div
                        id={'popup1'}
                        className={`collapse ${isCite ? styles['active'] : styles['hidden']}`}
                        aria-labelledby="headingTwo"
                        data-parent=".collapse"
                      >
                        <div className={`${styles['card-body']}`}>
                          Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li
                          and Dapeng Wu. A Batch Normalized Inference Network
                          Keeps the KL Vanishing Away. The 58th Annual Meeting
                          of the Association for Computational Linguistics 2020.
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr data-aos="zoom-in-left" className={'aos-init'}>
                    <td className={`${styles['imgCol']}`}>
                      <img src={crossLingual} className={`${styles['rImg']}`} alt='research' />
                    </td>
                    <td className={`${styles['researchTitleName']}`}>
                      <div>
                        {/* <span className={`${styles['imgResponsive']}`}>
                                                    <img src="assets/images/research-page/crossLingual.png" className={`${styles['imgRes']}`}/>
                                                </span> */}
                      </div>
                      <a href="#0" className={`${styles['paperTitle']}`}>
                        {" "}
                        A Call for More Rigor in Unsupervised Cross-lingual
                        Learning{" "}
                      </a>
                      <div>
                        {" "}
                        Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka
                        Labaka and Eneko Agirre{" "}
                      </div>{" "}
                      <div className={`${styles['rConferences']}`}>
                        {" "}
                        The 58th Annual Meeting of the Association for
                        Computational Linguistics
                        <div className={`${styles['researchY']}`}>2020</div>
                      </div>
                      {/* <!--CITE BUTTON--> */}
                      <div className={'d-flex'} style={{ marginRight: '5%'}}>
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#absPopup2"
                          aria-expanded="false"
                          aria-controls="absPopup2"
                          onClick={handleToggle}
                        >
                          ABSTRACT
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#popup2"
                          aria-expanded="false"
                          aria-controls="popup2"
                          onClick={handleCiteToggle}
                        >
                          CITE
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div
                        id={'absPopup2'}
                        className={isActive ? styles['active'] : styles['hidden']}
                        aria-labelledby="headingTwo"
                      >
                        <div className={`${styles['card-body']}`}>
                          This is currently left empty and this can be
                          considered as a dummy data 2
                        </div>
                      </div>
                      <div
                        id={`popup2`}
                        className={`collapse ${isCite ? styles['active'] : styles['hidden']}`}
                        aria-labelledby="headingTwo"
                        data-parent=".collapse"
                      >
                        <div className={`${styles['card-body']}`}>
                          Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka
                          Labaka and Eneko Agirre. A Call for More Rigor in
                          Unsupervised Cross-lingual Learning. The 58th Annual
                          Meeting of the Association for Computational
                          Linguistics 2020.
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr data-aos="zoom-in-left" className={'aos-init'}>
                    <td className={`${styles['imgCol']}`}>
                      <img
                        src={wordRepresentation}
                        className={`${styles['rImg']}`}
                        alt="research"
                      />
                    </td>
                    <td className={`${styles['researchTitleName']}`}>
                      <div>
                        {/* <span className={`${styles['imgResponsive']}`}>
                                                    <img src="assets/images/research-page/wordRepresentation.png" className={`${styles['imgRes']}`}/>
                                                </span> */}
                      </div>
                      <a href="#0" className={`${styles['paperTitle']}`}>
                        {" "}
                        A Comprehensive Analysis of Preprocessing for Word
                        Representation Learning in Affective Tasks{" "}
                      </a>
                      <div>
                        {" "}
                        Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos
                        Papagelis{" "}
                      </div>{" "}
                      <div className={`${styles['rConferences']}`}>
                        {" "}
                        The 58th Annual Meeting of the Association for
                        Computational Linguistics
                        <div className={`${styles['researchY']}`}>2020</div>
                      </div>
                      {/* <!--CITE BUTTON--> */}
                      <div className={'d-flex'} style={{ marginRight: '5%'}}>
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#absPopup3"
                          aria-expanded="false"
                          aria-controls="absPopup3"
                          onClick={handleToggle}
                        >
                          ABSTRACT
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#popup3"
                          aria-expanded="false"
                          aria-controls="popup3"
                          onClick={handleCiteToggle}
                        >
                          CITE
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div
                        id={`absPopup3`}
                        className={`collapse ${isActive ? styles['active'] : styles['hidden']}`}
                        aria-labelledby="headingTwo"
                      >
                        <div className={`${styles['card-body']}`}>
                          This is currently left empty and this can be
                          considered as a dummy data 3
                        </div>
                      </div>
                      <div
                        id={`popup3`}
                        className={`collapse ${isCite ? styles['active'] : styles['hidden']}`}
                        aria-labelledby="headingTwo"
                        data-parent=".collapse"
                      >
                        <div className={`${styles['card-body']}`}>
                          Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos
                          Papagelis. A Comprehensive Analysis of Preprocessing
                          for Word Representation Learning in Affective Tasks.
                          The 58th Annual Meeting of the Association for
                          Computational Linguistics 2020.
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr data-aos="zoom-in-left" className={'aos-init'}>
                    <td className={`${styles['imgCol']}`}>
                      <img src={dialogueState} className={`${styles['rImg']}`} alt='research'/>
                    </td>
                    <td className={`${styles['researchTitleName']}`}>
                      <div>
                        {/* <span className={`${styles['imgResponsive']}`}>
                                                    <img src="assets/images/research-page/dialogueState.png" className={`${styles['imgRes']}`}/>
                                                </span> */}
                      </div>
                      <a href="#0" className={`${styles['paperTitle']}`}>
                        {" "}
                        A Contextual Hierarchical Attention Network with
                        Adaptive Objective for Dialogue State Tracking{" "}
                      </a>
                      <div>
                        {" "}
                        Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang
                        Feng, Cheng Niu and Jie Zhou{" "}
                      </div>{" "}
                      <div className={`${styles['rConferences']}`}>
                        {" "}
                        The 58th Annual Meeting of the Association for
                        Computational Linguistics
                        <div className={`${styles['researchY']}`}>2020</div>
                      </div>
                      {/* <!--CITE BUTTON--> */}
                      <div className={'d-flex'} style={{ marginRight: '5%'}}>
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#absPopup4"
                          aria-expanded="false"
                          aria-controls="absPopup4"
                          onClick={handleToggle}
                        >
                          ABSTRACT
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#popup4"
                          aria-expanded="false"
                          aria-controls="popup4"
                          onClick={handleCiteToggle}
                        >
                          CITE
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div
                        id={`absPopup4`}
                        className={`collapse ${isActive ? styles['active'] : styles['hidden']}`}
                        aria-labelledby="headingTwo"
                      >
                        <div className={`${styles['card-body']}`}>
                          This is currently left empty and this can be
                          considered as a dummy data 4
                        </div>
                      </div>
                      <div
                        id={`popup4`}
                        className={`collapse ${isCite ? styles['active'] : styles['hidden']}`}
                        aria-labelledby="headingTwo"
                        data-parent=".collapse"
                      >
                        <div className={`${styles['card-body']}`}>
                          Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng,
                          Yang Feng, Cheng Niu and Jie Zhou. A Contextual
                          Hierarchical Attention Network with Adaptive Objective
                          for Dialogue State Tracking. The 58th Annual Meeting
                          of the Association for Computational Linguistics 2020.
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr data-aos="zoom-in-left" className={'aos-init'}>
                    <td className={`${styles['imgCol']}`}>
                      <img
                        src={semanticSegmentation}
                        className={`${styles['rImg']}`}
                        alt="research"
                      />
                    </td>
                    <td className={`${styles['researchTitleName']}`}>
                      <div>
                        {/* <span className={`${styles['imgResponsive']}`}>
                                                    <img src="assets/images/research-page/semanticSegmentation.png" className={`${styles['imgRes']}`}/>
                                                </span> */}
                      </div>
                      <a href="#0" className={`${styles['paperTitle']}`}>
                        {" "}
                        Dual Super-Resolution Learning for Semantic Segmentation{" "}
                      </a>
                      <div>
                        {" "}
                        Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and
                        Shan, Yi{" "}
                      </div>{" "}
                      <div className={`${styles['rConferences']}`}>
                        {" "}
                        IEEE/CVF Conference on Computer Vision and Pattern
                        Recognition (CVPR)
                        <div className={`${styles['researchY']}`}>2020</div>
                      </div>
                      {/* <!--CITE BUTTON--> */}
                      <div className={'d-flex'} style={{ marginRight: '5%'}}>
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#absPopup5"
                          aria-expanded="false"
                          aria-controls="absPopup5"
                          onClick={handleToggle}
                        >
                          ABSTRACT
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#popup5"
                          aria-expanded="false"
                          aria-controls="popup5"
                          onClick={handleCiteToggle}
                        >
                          CITE
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div
                        id={`absPopup5`}
                        className={`collapse ${isActive ? styles['active'] : styles['hidden']}`}
                        aria-labelledby="headingTwo"
                        rent=".collapse"
                      >
                        <div className={`${styles['card-body']}`}>
                          This is currently left empty and this can be
                          considered as a dummy data 5
                        </div>
                      </div>
                      <div
                        id={`popup5`}
                        className={`collapse ${isCite ? styles['active'] : styles['hidden']}`}
                        aria-labelledby="headingTwo"
                        data-parent=".collapse"
                      >
                        <div className={`${styles['card-body']}`}>
                          Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu
                          and Shan, Yi. Dual Super-Resolution Learning for
                          Semantic Segmentation. IEEE/CVF Conference on Computer
                          Vision and Pattern Recognition (CVPR) 2020.
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr data-aos="zoom-in-left" className={'aos-init'}>
                    <td className={`${styles['imgCol']}`}>
                      <img src={deepNetwork} className={`${styles['rImg']}`} alt='research' />
                    </td>
                    <td className={`${styles['researchTitleName']}`}>
                      <div>
                        {/* <span className={`${styles['imgResponsive']}`}>
                                                    <img src="assets/images/research-page/deepNetwork.png" className={`${styles['imgRes']}`}/>
                                                </span> */}
                      </div>
                      <a href="#0" className={`${styles['paperTitle']}`}>
                        {" "}
                        Deep Unfolding Network for Image Super-Resolution{" "}
                      </a>
                      <div>
                        {" "}
                        Zhang, Kai and Van Gool, Luc and Timofte, Radu{" "}
                      </div>{" "}
                      <div className={`${styles['rConferences']}`}>
                        {" "}
                        IEEE/CVF Conference on Computer Vision and Pattern
                        Recognition (CVPR)
                        <div className={`${styles['researchY']}`}>2020</div>
                      </div>
                      {/* <!--CITE BUTTON--> */}
                      <div className={'d-flex'} style={{ marginRight: '5%'}}>
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#absPopup6"
                          aria-expanded="false"
                          aria-controls="absPopup6"
                          onClick={handleToggle}
                        >
                          ABSTRACT
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#popup6"
                          aria-expanded="false"
                          aria-controls="popup6"
                          onClick={handleCiteToggle}
                        >
                          CITE
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div
                        id={`absPopup6`}
                        className={`collapse ${isActive ? styles['active'] : styles['hidden']}`}
                        aria-labelledby="headingTwo"
                      >
                        <div className={`${styles['card-body']}`}>
                          This is currently left empty and this can be
                          considered as a dummy data 6
                        </div>
                      </div>
                      <div
                        id={`popup6`}
                        className={`collapse ${isCite ? styles['active'] : styles['hidden']}`}
                        aria-labelledby="headingTwo"
                        data-parent=".collapse"
                      >
                        <div className={`${styles['card-body']}`}>
                          Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep
                          Unfolding Network for Image Super-Resolution. IEEE/CVF
                          Conference on Computer Vision and Pattern Recognition
                          (CVPR) 2020.
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr data-aos="zoom-in-left" className={'aos-init'}>
                    <td className={`${styles['imgCol']}`}>
                      <img
                        src={imageDecomposition}
                        className={`${styles['rImg']}`}
                        alt="research"
                      />
                    </td>
                    <td className={`${styles['researchTitleName']}`}>
                      <div>
                        {/* <span className={`${styles['imgResponsive']}`}>
                                                    <img src="assets/images/research-page/imageDecomposition.png" className={`${styles['imgRes']}`}/>
                                                </span> */}
                      </div>
                      <a href="#0" className={`${styles['paperTitle']}`}>
                        {" "}
                        Unsupervised Learning for Intrinsic Image Decomposition
                        From a Single Image{" "}
                      </a>
                      <div>
                        {" "}
                        Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng{" "}
                      </div>{" "}
                      <div className={`${styles['rConferences']}`}>
                        {" "}
                        IEEE/CVF Conference on Computer Vision and Pattern
                        Recognition (CVPR)
                        <div className={`${styles['researchY']}`}>2020</div>
                      </div>
                      {/* <!--CITE BUTTON--> */}
                      <div className={'d-flex'} style={{ marginRight: '5%' }}>
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#absPopup7"
                          aria-expanded="false"
                          aria-controls="absPopup7"
                          onClick={handleToggle}
                        >
                          ABSTRACT
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#popup7"
                          aria-expanded="false"
                          aria-controls="popup7"
                          onClick={handleCiteToggle}
                        >
                          CITE
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div
                        id={`absPopup7`}
                        className={`collapse ${isActive ? styles['active'] : styles['hidden']}`}
                        aria-labelledby="headingTwo"
                      >
                        <div className={`${styles['card-body']}`}>
                          This is currently left empty and this can be
                          considered as a dummy data 7
                        </div>
                      </div>
                      <div
                        id={`popup7`}
                        className={`collapse ${isCite ? styles['active'] : styles['hidden']}`}
                        aria-labelledby="headingTwo"
                        data-parent=".collapse"
                      >
                        <div className={`${styles['card-body']}`}>
                          Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng.
                          Unsupervised Learning for Intrinsic Image
                          Decomposition From a Single Image. IEEE/CVF Conference
                          on Computer Vision and Pattern Recognition (CVPR)
                          2020.
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr data-aos="zoom-in-left" className={'aos-init'}>
                    <td className={`${styles['imgCol']}`}>
                      <img src={neuralNetworks} className={`${styles['rImg']}`} alt='research' />
                    </td>
                    <td className={`${styles['researchTitleName']}`}>
                      <div>
                        {/* <span className={`${styles['imgResponsive']}`}>
                                                    <img src="assets/images/research-page/neuralNetworks.jpg" className={`${styles['imgRes']}`}/>
                                                </span> */}
                      </div>
                      <a href="#0" className={`${styles['paperTitle']}`}>
                        {" "}
                        Forward and Backward Information Retention for Accurate
                        Binary Neural Networks{" "}
                      </a>
                      <div>
                        {" "}
                        Qin, Haotong and Gong, Ruihao and Liu, Xianglong and
                        Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song,
                        Jingkuan{" "}
                      </div>{" "}
                      <div className={`${styles['rConferences']}`}>
                        {" "}
                        IEEE/CVF Conference on Computer Vision and Pattern
                        Recognition (CVPR)
                        <div className={`${styles['researchY']}`}>2020</div>
                      </div>
                      {/* <!--CITE BUTTON--> */}
                      <div className={'d-flex'} style={{ marginRight: "5%"} }>
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#absPopup8"
                          aria-expanded="false"
                          aria-controls="absPopup8"
                          onClick={handleToggle}
                        >
                          ABSTRACT
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          className={`${styles['button']} ${styles['button-accent']} ${styles['button-small']} ${styles['text-right']} ${styles['button-abstract']} ${styles['']}`}
                          type="button"
                          data-toggle={'collapse'}
                          data-target="#popup8"
                          aria-expanded="false"
                          aria-controls="popup8"
                          onClick={handleCiteToggle}
                        >
                          CITE
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div
                        id={`absPopup8`}
                        className={`collapse ${isActive ? styles['active'] : styles['hidden']}`}
                        aria-labelledby="headingTwo"
                      >
                        <div className={`${styles['card-body']}`}>
                          This is currently left empty and this can be
                          considered as a dummy data 8
                        </div>
                      </div>
                      <div
                        id={`popup8`}
                        className={`collapse ${isCite ? styles['active'] : styles['hidden']}`}
                        aria-labelledby="headingTwo"
                        data-parent=".collapse"
                      >
                        <div className={`${styles['card-body']}`}>
                          Qin, Haotong and Gong, Ruihao and Liu, Xianglong and
                          Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song,
                          Jingkuan. Forward and Backward Information Retention
                          for Accurate Binary Neural Networks. IEEE/CVF
                          Conference on Computer Vision and Pattern Recognition
                          (CVPR) 2020.
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
