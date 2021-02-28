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
                <div className={styles.logo}>
                    <img src="/logo.png" alt="Logo"/>
                </div>

                <div className={styles.links}>
                {
                    header.map((element, index) => (
                        <span className={`${styles.link} ${index === active && styles.linkActive}`}>
                            <Link href={element.to} key={index}>
                                {element.name}
                            </Link>
                        </span>
                    ))
                }
                </div>

                <div className={styles.hamburger} onClick={() => setNav(current => !current)}>
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
                    {
                        header.map((element, index) => (
                            <span className={styles.mobileLink}>
                                <Link href={element.to} key={index}>
                                    {element.name}
                                </Link>
                            </span>
                        ))
                    }
                </div>
            }
        </>
    )
}
