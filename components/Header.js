import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { header } from '../data/header';
import styles from '../styles/Header.module.scss';

export default function Header({active}) {

    const [nav, setNav] = useState(false);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="description" content="This project serves free and beautiful portfolio template for everyone. Anyone can showcase their work including moocs, education, projects, experience,etc. to the world." />
                <meta name="keywords" content="free portfolio template,portfolio template, portfolio website template, open source, open sourcing, contributing to open source" />
                <title>John Doe</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <Link href="/">
                    <img src="/logo.png" alt="Logo" className={styles.logo}/>
                </Link>

                <div className={styles.links}>
                {
                    header.map((element, index) => (
                        <span className={`${styles.link} ${index === active && styles.linkActive}`} key={index}>
                            <Link href={element.to}>
                                {element.name}
                            </Link>
                        </span>
                    ))
                }
                </div>

                <div className={styles.hamburger} onClick={() => setNav(true)}>
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="10" rx="5"></rect>
                        <rect y="30" width="100" height="10" rx="5"></rect>
                        <rect y="60" width="100" height="10" rx="5"></rect>
                    </svg>
                </div>
            </header>

            {
                nav &&
                <div className={styles.mobileNav}>
                    <img src="/logo.png" alt="Logo"/>
                    <div>
                        {
                            header.map((element, index) => (
                                <span className={styles.mobileLink} key={index}>
                                    <Link href={element.to}>
                                        {element.name}
                                    </Link>
                                </span>
                            ))
                        }
                    </div>
                    <div className={styles.cross} onClick={() => setNav(false)}>
                        <span className={styles.line1}></span>
                        <span className={styles.line2}></span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fillOpacity="1" d="M0,224L8.6,224C17.1,224,34,224,51,202.7C68.6,181,86,139,103,112C120,85,137,75,154,96C171.4,117,189,171,206,165.3C222.9,160,240,96,257,101.3C274.3,107,291,181,309,202.7C325.7,224,343,192,360,165.3C377.1,139,394,117,411,112C428.6,107,446,117,463,117.3C480,117,497,107,514,128C531.4,149,549,203,566,197.3C582.9,192,600,128,617,133.3C634.3,139,651,213,669,250.7C685.7,288,703,288,720,261.3C737.1,235,754,181,771,144C788.6,107,806,85,823,80C840,75,857,85,874,101.3C891.4,117,909,139,926,154.7C942.9,171,960,181,977,176C994.3,171,1011,149,1029,154.7C1045.7,160,1063,192,1080,213.3C1097.1,235,1114,245,1131,229.3C1148.6,213,1166,171,1183,160C1200,149,1217,171,1234,149.3C1251.4,128,1269,64,1286,48C1302.9,32,1320,64,1337,96C1354.3,128,1371,160,1389,149.3C1405.7,139,1423,85,1431,58.7L1440,32L1440,0L1431.4,0C1422.9,0,1406,0,1389,0C1371.4,0,1354,0,1337,0C1320,0,1303,0,1286,0C1268.6,0,1251,0,1234,0C1217.1,0,1200,0,1183,0C1165.7,0,1149,0,1131,0C1114.3,0,1097,0,1080,0C1062.9,0,1046,0,1029,0C1011.4,0,994,0,977,0C960,0,943,0,926,0C908.6,0,891,0,874,0C857.1,0,840,0,823,0C805.7,0,789,0,771,0C754.3,0,737,0,720,0C702.9,0,686,0,669,0C651.4,0,634,0,617,0C600,0,583,0,566,0C548.6,0,531,0,514,0C497.1,0,480,0,463,0C445.7,0,429,0,411,0C394.3,0,377,0,360,0C342.9,0,326,0,309,0C291.4,0,274,0,257,0C240,0,223,0,206,0C188.6,0,171,0,154,0C137.1,0,120,0,103,0C85.7,0,69,0,51,0C34.3,0,17,0,9,0L0,0Z"></path></svg>
                </div>
            }
        </>
    )
}
