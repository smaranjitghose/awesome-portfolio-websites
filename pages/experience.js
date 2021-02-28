import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from '../styles/Experience.module.scss';
import { work, volunteership, mentorship } from '../data/experience';
import Header from '../components/Header';

export default function Experience() {
    return (
        <>
            <Header active={1}/>
            
            <section className={styles.experience}>
                <Fade bottom>
                    <div className={styles.top}>
                        <img src="/experience/experience.svg" alt="Experience"/>
                        <div>
                                <h1>Experience</h1>
                                <p>Nothing ever becomes real 'til it is experienced.― John Keats</p>
                        </div>
                    </div>
                </Fade>

                <div className={styles.workExperience}>
                    <h1>Work Experience</h1>

                    <div className={styles.experiences}>
                        {
                            work.map((card, index) => (
                                <WorkCard card={card} key={index}/>
                            ))
                        }
                    </div>
                </div>

                <div className={styles.volunteership}>
                    <h1>Volunteership</h1>
                    
                    <div className={styles.volunteerships}>
                        {
                            volunteership.map((card, index) => (
                                <Volunteership card={card} key={index}/>
                            ))
                        }
                    </div>
                </div>

                <div className={styles.mentorship}>
                    <h1>Mentorship</h1>

                    <div className={styles.mentorships}>
                        {
                            mentorship.map((card, index) => (
                                <Mentorship card={card} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

function WorkCard({ card }) {

    const { title, image, place, time, desp } = card;

    return (
        <div className={styles.card}>
            <img src={image} alt={place}/>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.place}>{place}</div>
                <div className={styles.time}>{time}</div>
                <ul className={styles.desp}>
                    {
                        desp.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

function Volunteership({ card }) {

    const { title, image, description } = card;

    return (
        <div className={styles.card}>
            <img src={image} alt={title}/>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    )
}

function Mentorship({ card }) {

    const { title, image, time, desp } = card;

    return (
        <div className={styles.card}>
            <img src={image} alt={title}/>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.time}>{time}</div>
                <ul className={styles.desp}>
                    {
                        desp.map((point, index) => (
                            <li key={index}>
                                <span>{point}</span>
                                {
                                    index !== desp.length-1 && <hr/>
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}