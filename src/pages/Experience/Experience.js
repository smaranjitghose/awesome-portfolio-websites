import React, { useState } from "react";
import styles from "./Experience.css";
import Gnome from "../../assets/images/workex/gnome.svg";
import Layer5 from "../../assets/images/workex/layer5-white.png";
import Google from "../../assets/images/workex/google.png";

const Experience = () => {
  const exp = [
    {
      title: "Software Development Intern",
      cardImage: Gnome,
      place: "Gnome",
      time: "(May, 2020 - present)",
      desp: [
        {
          text: " Created a modern new interface that contributed to a 15% increase in new user adoption rates within one month of rollout.",
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
          text: "Supported Layer5’s testing and engineering processes.",
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
      ],
    },
  ];
  return (
    <>
      <section>
        <div>
          {exp.map((item, id) => (
            <div key={item.id} className="card card1">
              <img
                src={item.cardImage}
                className="featured-image"
              />

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
