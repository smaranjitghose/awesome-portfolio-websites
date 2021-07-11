import React, { useState } from "react";
import styles from "./Experience.css";
import Gnome from "./../../assets/images/workex/gnome.svg";
import Layer5 from "../../assets/images/workex/layer5-white.png";
import Google from "./../../assets/images/workex/google.png";
// AOS.init();

const Experience = () => {
  const exp = [
    {
      title: "Software Development Intern",
      cardImage: Gnome,
      place: "Gnome",
      time: "(May, 2020 - present)",
      desp: [
        {
          text: " Created a modern new interface that contributed to a 15% increase in new user adoption rates within one month of rollout",
        },
        {
          text: "Contributed to rollout of upgraded DEFSafe platform, delivering the company’s first persistent, end-to-end data protection that allow users to control security protocols across multiple devices",
        },
        {
          text: "Successfully installed Linux servers and virtualized environments using Docker, Hyper-V, and Amazon Web Services",
        },
      ],
    },
    {
      title: "Student Developer",
      cardImage: Layer5,
      place: "Layer5",
      time: "(Mar - Aug, 2019)",
      desp: [
        {
          text: "Supported Layer5’s testing and engineering processes",
        },
        {
          text: "Heavy focus on full stack engineering with modules on both front and back end processes.",
        },
        {
          text: "Efficiently deployed and integrated software engineered by team and updated integration/deployment scripts to improve continuous integration practices",
        },
      ],
    },
    {
      title: "Research Intern",
      cardImage: Google,
      place: "Google",
      time: "(Dec, 19 - Jan, 20)",
      desp: [
        {
          text: "Built innovative microservices and Web Services (incl. SOA/SOAP/REST/XML).",
        },
        {
          text: "Implemented new C# class library for the SQL server database access layer, and updated previous web page frameworks",
        },
        {
          text: "Sliced designer compositions from PSD format and created interactive HTML5 web-simulations utilizing CSS3, Javascript, ReactJS, and plugins",
        },
      ],
    },
  ];
  return (
    <>
      <section className={styles.section}>
        <div>
          {exp.map((item, id) => (
            <div key={item.id} className="card card1">
              <figure className="featured-image">{item.cardImage}</figure>
              <article className="card-body">
                <header>
                  <div className="title">
                    <h3>{item.title}</h3>
                    <p className="meta">
                      <span className="pre-heading">{item.place}</span>
                      <span className="author">{item.time}</span>
                    </p>
                  </div>
                  <ul className="list">
                    {item.desp.map(({ text }) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                </header>
              </article>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
