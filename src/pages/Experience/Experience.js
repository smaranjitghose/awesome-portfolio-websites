import React from "react";
import  "./Experience.css";
import Gnome from "../../assets/images/workex/gnome.svg";
import Layer5 from "../../assets/images/workex/layer5-white.png";
import Google from "../../assets/images/workex/google.png";

const Experience = () => {
  const exp = [
    {
      title: "Software Development Intern",
      cardImage: Gnome,
      place: "Gnome Foundation",
      time: "(May, 2020 - present)",
      desp: [
        {
          text: " Created a modern new interface that contributed to a 15% increase in new user adoption rates within one month of rollout.",
        },
        {
          text: " Completed maintenance on existing programs.",
        },

        {
          text: " Redesigned the rendering engine from scratch, speeding up the stock’s loading time by 600%",
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
        {
          text: "Heavy focus on full stack engineering with modules on both front and back end processes.",
        },
        {
          text: "Confirmed that completed software met client requirements",
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
          text: " Worked closely with product team on scope of future projects and innovations.",
        },
        {
          text: "Carried out continuous identification, measurement, and improvement of processes.",
        },
      ],
    },
  ];
  return (
    <>
      <section>
        <div>
          {exp.map((item, id) => (
            <div key={item.id} className="exp-card">
              <img
                src={item.cardImage}
                className="featured-image"
                alt="experience logo"
              />

              <article className="card-body">
                <header>
                  <div className="title">
                    <h3 className="header">{item.place}</h3>
                    <p className="meta">
                      <span className="role">{item.title}</span>
                      <div>
                        <span className="duration">{item.time}</span>
                      </div>
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
}

export default Experience;
