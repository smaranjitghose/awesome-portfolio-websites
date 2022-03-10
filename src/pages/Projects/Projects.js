import React from 'react';
import { Helmet } from "react-helmet";
import styles from './Project.module.css';
import image from '../../assets/images/project-page/quiz.jpg'
import data from './data';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from '../../components/Preloader/Preloader';
import 'animate.css';

const Projects = () => {
    if (data === undefined) {
        console.log("this");
    }
    if (data !== undefined) {
        console.log(data);
    }

    AOS.init()
    return (
        <div>
            <Helmet>
                <title>John Doe | Projects</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
                <meta name="keywords" content="free portfolio template,portfolio template, portfolio website template, open source and contribution to open source" />
                <meta name="description" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta name="AdsBot-Google" content="index,follow" />
                <meta property="og:site_name" content="https://portfolio.smaranjitghose.codes/projects.html" />
                <meta property="og:title" content="John Doe | Projects" />
                <meta property="og:description" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://portfolio.smaranjitghose.codes/projects.html" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="John Doe | Projects" />
                <meta name="twitter:description" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
                <meta name="twitter:url" content="https://portfolio.smaranjitghose.codes/projects.html" />
                <meta name="application-name" content="John Doe | Projects" />
                <meta name="twitter:site" content="https://portfolio.smaranjitghose.codes/projects.html" />
                <meta name="apple-mobile-web-app-title" content="John Doe | Projects" />
                <meta name="summary" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
            </Helmet>

            <Preloader />

            <div className={`${styles['main-container']} ${styles['pt-5']}`} style={{ width: "100%", minHeight: "80%;"}}>
                <section className={`${styles['main-section']}`}>
                        <div className={styles['row']}>

                            <div className={`${styles['project-img']}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" id={styles['ku']} width="90%" baseProfile="tiny" className={styles['svgmate']} version="1" viewBox="300 150 550 570">

                                    <g id={`${styles['wall']}`}>
                                        <path fill="#bb86fc" d="M674 333c0 2-2 4-4 4H553c-2 0-4-2-4-4V203c0-2 2-4 4-4h117c2 0 4 2 4 4v130z">
                                        </path>
                                        <path id={styles['Layer_33']} fill="#7348a7" d="M639 240c-4-4-10-4-13 0l-77 77v15l5 5h116c2 0 4-2 4-4v-58l-35-35z"></path>
                                    </g>
                                    <g id={styles['light']}>
                                        <circle id={styles['bulb']} cx="550" cy="230" r="9" fill="#c2c0c5"></circle>
                                        <path fill="#52057B" d="M550 201l-27 29h55z"></path>
                                    </g>
                                    <g id={styles['Woman__x2F__Chair__x2F__Screen']}>
                                        <g id={styles['backleg_1_']}>
                                            <path id={styles['backlegpath']} fill="#39065A" d="M651 521l47-90 24-16 12 11-29 44-46 56z"></path>
                                            <path fill="#BCBCBD" d="M639 549l20-23-8-5s-8 6-14 6-26-7-26-7v10l28 19z"></path>
                                        </g>
                                        <g id={styles['Chair_1_']}>
                                            <g id={styles["legs_1_"]}>
                                                <path fill="#34363E" d="M782 461l-65 36v-5l68-38v5z"></path>
                                                <path fill="#34363E" d="M726 459l65 36v-4l-65-37z"></path>
                                                <path fill="#52057B" d="M779 441l19 108 5 1-10-112zM729 440l-10 3-9 107h4l18-108z"></path>
                                            </g>
                                            <g id={styles["seat_1_"]}>
                                                <path fill="#bb86fc"
                                                    d="M804 360c15 0 18-2 19 20s-13 42-17 48-6 15-24 15h-70l-2-9s73 0 80-8 16-22 18-36 6-21 2-23-6-7-6-7z">
                                                </path>
                                                <path fill="#52057B"
                                                    d="M796 359h8c7-1 13 2 12 17s-9 34-13 42-9 17-32 17h-64s16-8 35-8 22-11 26-21 11-28 13-37 6-10 15-10z">
                                                </path>
                                                <path id={styles["womanshdow"]} fill="#413C69"
                                                    d="M803 407c0-10-13-23-15-31s4-14 9-17h-4c-8 0-11 2-12 10l-5 17v3c3 8 6 16 6 24s-15 17-15 17l-5 5h9c22 0 27-9 31-17l1-11z">
                                                </path>
                                            </g>
                                        </g>
                                        <g id={styles["back-arm"]}>
                                            <path fill="#F68E5A" d="M737 386l48-55s-4-25-17-7-35 54-35 54l4 8z"></path>z
                                            <path id={styles["lowervackarm"]} fill="#F68E5A" d="M669 361c4 1 13 4 15 2s8-4 11-2l42 25v-15s-46-22-51-19l-17 9z"></path>
                                        </g>
                                        <g id={styles["womanscreen"]} className="womscreenmove">
                                        </g>
                                        <g id={styles["Woman"]}>
                                            <g id={styles["Front_leg"]}>
                                                <path id={styles["leg"]} fill="#413C69" d="M737 435h-20s-2 1-1 2l26 78-11 1-42-74c-1-2-5-13 1-16l29-13 18 22z"></path>
                                                <path fill="#BCBCBD" d="M750 537c-1 1-17 13-23 13s-13 0-14-2c0-5 4-2 7-4s11-8 12-15l-2-15 11-2 7 21 2 4z">
                                                </path>
                                            </g>
                                            <g id={styles["hairback"]}>
                                                <path id={styles["shaded"]} fill="#585268" d="M809 308c11 4 11 23 2 32s-31-14-35-29-3-27 4-20c13 13 21 13 29 17z"></path>
                                                <path id={styles["main"]} fill="#585268"
                                                    d="M784 364c6-3 32-21 30-34s-18-16-26-29-21 2-13 11 11 33 7 36c-16 17 2 16 2 16z"></path>
                                            </g>
                                            <g id={styles["dress"]}>
                                                <path fill="#c4c1f7"
                                                    d="M755 315c-4 5-29 31-18 39s19 13 16 31-33 28-42 31l20 19h28c11 0 29-7 29-24s-7-19-7-27l5-21c1-4 3-32-2-39-8-10-17-19-29-9z">
                                                </path>

                                            </g>
                                            <g id={styles["womanhead"]}>
                                                <g id={styles["headbase"]}>
                                                    <path fill="#F89F71" d="M768 321c-3 2-9 8-11-1s-4-8-6-7-18-22-15-30 31-34 34-7-2 24 3 29 2 5 0 8l-5 8z">
                                                    </path>
                                                    <path fill="#F89F71" d="M733 281c-6 9 9 32 15 32 4 0 6-3 5-4-4-1-15-23-15-28 1-6-5 0-5 0z">
                                                    </path>
                                                    <path fill="#F89F71" d="M767 321c1-1 2-1 1-2l-3-5c-1-6-9-7-12-3l-1 1c2 0 4 1 5 8 2 8 7 4 10 1z"></path>
                                                </g>
                                                <g id={styles["hairbase"]}>
                                                    <path id={styles["tophairmain"]} fill="#585268"
                                                        d="M764 285c-7-7-13-2-28-2-8 0-23-12-13-15 8-3 5-12 16-17s22-4 32 7 13 33 14 38 5 8 9 13c0 0-4 14-9 12s-7 2-13-4-4-5-5-8 1-16-1-20l-2-4z">
                                                    </path>
                                                    <path id={styles["botshadehar"]} fill="#585268" d="M767 297c-2 10-7 34 11 26 20-8-9 3-11-26z"></path>
                                                    <path fill="#585268" d="M725 266c-7 4-13 5-12 9s9 8 25 8c-8-2-18-9-13-17z"></path>
                                                </g>
                                                <g id={styles["glasses_1_"]}>
                                                    <g id={styles["glassshadow"]} fill="#F89F71">
                                                        <path d="M760 281l-16 8 2 3 2 4 3-8c0-2 10-6 10-6l-1-1zM737 297c-1-3-3-3-3-3l5-3-2 6z">
                                                        </path>
                                                    </g>
                                                    <g id={styles["galssbody"]} fill="#FFF">
                                                        <path d="M762 278l-29 13-3 1v2h4l29-14-1-2"></path>
                                                        <path
                                                            d="M746 298c3-2 1-5 0-6-1-2-2-4-5-3-3 2-1 5 0 6s4 4 5 3zM732 294c2-1 4 1 5 3s2 3 0 5-4-1-5-3-2-3 0-5z">
                                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                            <g id={styles["Front_arm"]}>
                                                <g id={styles["lowerarm"]}>
                                                    <path fill="#F89F71" d="M751 386h-2c-5 0-36-13-39-14s-10-1-12 1l-6 7h-14l11-13c2-2 7-4 13-3l46 6s7 14 3 16z">
                                                    </path>
                                                    <path id={styles["highlights"]} fill="#F68E5A" d="M702 365c-6-1-11 1-13 3l-11 12h7l8-8c4-5 14-7 14-7h-5z"></path>
                                                </g>
                                                <path fill="#F89F71" d="M788 319c16 7 0 20-4 25l-25 33c-2 3-4 7-8 9l-3-16 19-41c4-8 10-15 21-10z"></path>
                                                <path fill="#F68E5A" d="M788 319c-11-5-17 2-21 10l-9 19s12-22 22-26c3-1 5-3 8-3z"></path>
                                            </g>
                                        </g>
                                    </g>
                                    <g id={styles["Laptop"]}>
                                        <path fill="#86858B" d="M647 339h7c2 0 3 1 4 3l15 38h38s-1 6-10 6h-31l-23-47z"></path>


                                    </g>
                                    <g id={styles["Desk"]}>
                                        <path fill="#52057B" d="M369 386h178v10H369zM547 386h220v10H547z"></path>
                                        <path fill="#e4d0fc" d="M548 396h9v154h-9z"></path>
                                    </g>
                                    <g id={styles["flowerpot"]}>
                                        <g id={styles["plants"]}>

                                        </g>

                                    </g>
                                    <g id={styles["Man__x2F__chair__x2F__screen"]}>
                                        <path id={styles["chairbackbar"]} fill="#52057B" d="M368 468h10v76h-10z"></path>
                                        <path id={styles["keyboard"]} fill="#D2D2D3" d="M507 380c3 0 4 2 1 4l-3 2h-55s4-6 9-6h48z"></path>
                                        <g id={styles["man"]}>
                                            <g id={styles["man-body"]}>
                                                <g id={styles["legs"]}>
                                                    <g id={styles["backleg"]}>
                                                        <path id={styles["foot"]} fill="#BCBCBD" d="M365 513l18-4 6 12s-1 15 6 22l10 5c-1 2-18 2-20 2l-14-9c-6-6-10-22-6-28z">
                                                        </path>
                                                        <path id={styles["bottombackleg"]} fill="#413C69"
                                                            d="M384 509s45-10 45-16c0-4-7-7-6-10 5-9 24-13 30-3 5 8 0 27-9 29l-55 12-5-12z">
                                                        </path>
                                                        <path id={styles["topbbackleg"]} fill="#413C69"
                                                            d="M415 474l-26-34c1 0-10-11 12-11s33 4 40 10 14 53 11 60-21-4-28-14l-9-11z"></path>
                                                    </g>
                                                    <g id={styles["Front-leg"]}>
                                                        <path id={styles["frontfoot"]} fill="#BCBCBD" d="M446 529v21l40-1 2-9s-12 1-20-3-9-8-9-8h-13z">
                                                        </path>
                                                        <g id={styles["bot"]}>
                                                            <path fill="#39065A" d="M459 529c5-15 21-89 20-95s-8-18-18-8-19 0-18 26l3 77h13z">
                                                            </path>
                                                            <path id={styles["shade_1_"]} fill="#39065A" d=" M444 488c7-15 19-35 11-42-5-4-13-2-13-2l2 44z"></path>
                                                        </g>
                                                        <g id={styles["top"]}>
                                                            <path fill="#39065A"
                                                                d="M410 408c19 3 62 9 67 18s0 14 0 20-11-2-23-2l-99-2c-7 0-12-4-9-18 7-39 64-16 64-16">
                                                            </path>
                                                            <path id={styles["shade"]} fill="#39065A" d=" M397 417c66 10 80 9 80 9s-6-14-70-18c-13 1-10 9-10 9z"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                                <g id={styles["head"]}>
                                                    <g id={styles["face"]}>
                                                        <path fill="#F89F71"
                                                            d="M411 281c0-12-8-25-19-16s-21 23-18 31 2 24 2 24c0 9 25 18 23 0s6-10 9-10 2 0 2-5l1-24z">
                                                        </path>
                                                        <path id={styles["faceglow"]} fill="#eda682" d="M411 264c5 5 6 23 3 32s-6 5-5 1c1-2 3-23-2-29-5-5 4-4 4-4z"></path>
                                                    </g>
                                                    <g id={styles["hair"]}>
                                                        <path fill="#585268"
                                                            d="M396 287c-2-9-1-14 3-15s15-21-1-22c-17 0-26-14-33 0s4 19 4 19-10 2-9 14 9 12 12 15c5 7 2 8 4 11 0 0 11-2 11-10s-4-15-1-18 8 1 7 19c-1 13 4 20 7 21s15 5 16 1 0-12-3-18c-1-3 2-9 0-11-3-2-4 6-8 5s-7-5-9-11z">
                                                        </path>
                                                        <path fill="#585268" d="M399 272c4-1 10-1 14-8s7-19 2-22-1 9-17 8c-27-1-3 23 1 22z" className={styles["mankauf"]}></path>
                                                    </g>
                                                </g>
                                                <g id={styles["torso"]}>

                                                    <path id={styles["shirt"]} fill="#c4c1f7"
                                                        d="M357 340l19-19h11c40 0 40 7 30 64-7 35-13 32-32 39-12 5-22 5-35 4s7-88 7-88z"></path>
                                                </g>
                                                <g id={styles["arm"]}>
                                                    <g id={styles["Bluearmbot"]}>
                                                        <path fill="#F68E5A" d="M487 380c-5-4-11-12-16-10-7 3-6 10 3 10h13z"></path>
                                                        <path fill="#F68E5A" d="M437 384l34-14-4 6-27 19z"></path>
                                                        <path fill="#F89F71" d="M440 395s20-16 26-19c4-2 10 1 11 4h-7c-5 6-14 20-22 23-1 1-8-8-8-8z"></path>
                                                    </g>
                                                    <path id={styles["Bluearmtop"]} fill="#F89F71" d="M404 360l31 40c5 4 9 4 10 4 10-1-4-5-5-11l-10-54c-28-6-26 21-26 21z">
                                                    </path>
                                                    <path id={styles["armhighlight"]} fill="#F68E5A" d="M439 386l-15-37 7-7z"></path>
                                                    <path id={styles["toparm"]} fill="#c2bff5" d="M406 322c22-5 26 18 24 21-3 8-26 19-26 19l-8-15c-8-18 10-25 10-25z">
                                                    </path>
                                                    <path id={styles["toparmshade"]} fill="#c2bff5"
                                                        d="M418 334c-5-7-10-13-13-11-8 2-15 14-8 27 4 9 7 12 7 12s15-7 19-12c3-3-3-13-5-16z">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                        <g id={styles["Chair"]}>
                                            <path id={styles["foot_1_"]} fill="#52057B" d="M337 550h73l-10-13h-52z"></path>
                                            <g id={styles["seat"]}>
                                                <path fill="#52057B" d="M371 442l53 1c3 0 6 0 6 7 0 5-3 6-6 6h-22s-2 6-4 7h-14l-4 12h-15l-5-12-3-8 14-13z">
                                                </path>
                                                <path fill="#bb86fc" d="M326 449c0 4 3 7 11 7h47s-5-1-5-6c0-3 0-8 5-8h-48c-7 0-10 2-10 7z">
                                                </path>
                                            </g>
                                            <g id={styles["backrest"]}>
                                                <path fill="#52057B" d="M349 340c12 0 19-2 20 8l7 41c2 14 4 29-18 29 7-5 12-7 12-10 0 0-6-56-12-61l-9-7z">
                                                </path>
                                                <path fill="#bb86fc" d="M318 340c-8 0-12 5-10 17l8 48c2 8 5 13 14 13h29s14-2 12-19-6-32-8-45-7-14-14-14h-31z">
                                                </path>
                                                <path fill="#dbd9fa" d="M332 376c-6 0-12-1-9 11l5 24c1 5 1 6 8 6h19s7 1 5-8l-5-25c-1-5-1-8-9-8h-14z"></path>
                                                <path fill="#36474A" d="M345 395l2 1 9 49c1 6 5 11 7 12s2 6 2 6-8-2-10-3-7-25-7-25l-3-28-2-11 2-1z"></path>
                                                <path fill="#52057B" d="M332 395l9 51c1 8 3 16 13 17h11s-7-3-9-6c-4-4-7-28-7-28l-4-34h-13z">
                                                </path>
                                            </g>
                                        </g>
                                        <g id={styles["Man_screen"]}>
                                            <g className={styles["redskmove"]}>
                                                <path fill="#a995ce" d="M574 360c0 2-2 4-4 4h-89c-2 0-4-2-4-4v-69c0-2 2-4 4-4h89c2 0 4 2 4 4v69z"
                                                    className={styles["redscreen"]}></path>
                                            </g>
                                            <g className={styles["greenscrmove"]}>
                                                <g className={styles["greenscreen"]}>
                                                    <path fill="#9562d3" d="M523 337c0 2-2 4-4 4h-68c-2 0-4-2-4-4v-46c0-2 2-4 4-4h68c2 0 4 2 4 4v46z"></path>
                                                    <path fill="#F7FCFB" d="M517 307c0 2-2 4-4 4h-51c-2 0-4-2-4-4v-4c0-2 2-4 4-4h51c2 0 4 2 4 4v4z"></path>
                                                    <path fill="#3B064D" d="M492 326c0 2-2 4-4 4h-26c-2 0-4-2-4-4v-2c0-2 2-4 4-4h26c2 0 4 2 4 4v2z"></path>
                                                </g>
                                            </g>
                                            <g className={styles["screenbutton"]}>

                                                <circle cx="523" cy="314" r="18" fill="#52057B"></circle>
                                                <path fill="#bb86fc" d="M523 309l-4 8h8z"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div  className={`${styles['project-heading']}`}>
                                <div className='animate__animated animate__zoomIn animate__delay-1s' style={{textAlign: "center"}}>
                                <h2 className={`${styles['main-heading']} ${styles['mb-0']} ${styles['projects_head']}`}>My <span className={styles['my_projects']}>Projects</span></h2>
                                <p className={`${styles['pre-heading']} ${styles['font-weight-bolder']} ${styles['mb-0']} ${styles['mt-3']} ${styles['text-center']} ${styles['animate__animated']} ${styles['animate__zoomIn']} ${styles['animate__delay-2s']}`}>
                                    My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.
                                </p>
                                </div>
                            </div>
                        </div>
                </section >
            </div>
            <div className={styles["project-box"]} style={{ padding: "20px;" }}>
                <div className={`${styles['page-content']} ${styles['projectcards']}`}>
                    {
                        data.map((item => (
                            <div className={`${styles['column']} ${styles['skill-card']} ${styles['card']}`} style={{ margin: "15px" }} data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600">
                                <div className={styles["wrapper"]} style={{ backgroundImage: `url(${item ? item.img : image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center' }}>
                                    <div className={styles["header"]}>
                                    </div>
                                    <div className={styles["data"]}>
                                        <div className={styles["content"]}>
                                            <div className={styles["title-div"]}>
                                                <h1 className={styles["title"]}><Link href="#">{!item ? "Project Name " : item.title}</Link></h1>
                                            </div>
                                            <ul className={styles["menu-content"]}><br />
                                                <li><Link to="/projects" className={styles["social-icon"]}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className={`${styles['feather']} ${styles['feather-monitor']}`}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></Link></li>
                                                <li><Link to="/projects" className={styles["social-icon"]}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className={`${styles["feather"]} ${styles["feather-github"]}`}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )))
                    }
                </div>
            </div>
        </div >
    );
}

export default Projects;
