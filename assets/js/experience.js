//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Reasearch and Development Intern",
    cardImage: "assets/images/experience-page/UCL.JPG",
    place: "UCL",
    time: "(May2020-present)",
    desp: "<li>Automatic detection of Orthopedic Implants using Deep Learning.</li> <li>Collection of radiographs, data cleaning and database management.</li> <li>Image Quality Analysis for Bio-Medical Images.</li> <li>Serving Models using TensorFlow JS.</li> <li>Experimenting with Few Shot Learning, Adversarial Training and Class Activation Maps.</li>",
  },
  {
    title: "Robotics and Embedded system Intern",
    cardImage: "assets/images/experience-page/lema-labs.png",
    place: "LEMA LABS",
    time: "(Jun-Jul,2019)",
    desp: "<li>Design low cost prototyping boards for teaching robotics to underprivileged children.</li> <li>Worked on integration of Face Recognition based models with Raspberry Pi and Intel Movidius.</li> <li>Image Quality Analysis for Bio-Medical Images.Experimented with various algorithms for Lane Detection as well as Shortest Paths for Autonomous Vehicles.</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/ISI.png",
    place: "ISI, Kolkata",
    time: "(Dec 19-Jan 20)",
    desp:"<li>Worked on for Image Encryption and Image Forgery Detection.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "/assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "/assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "/assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "/assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "30 DaysofFlutter",
    cardImage: "/assets/images/experience-page/5.jpg",
    description:
      "Helping beginners from their first steps in Flutter to building fully functional cross-platform applications.",
  },
  {
    title: "Garuda Hacks",
    cardImage: "/assets/images/experience-page/6.jpg",
    description:
      "MLH sponsored Indonesia's premier Global Virtual Hackathon on 14 - 16th August 2020.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h2 class="title">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "HakinCode",
    image: "assets/images/experience-page/hakin.png",
    time: "06/2020 - 08/2020",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Google Summer of Code",
    image: "assets/images/experience-page/gsoc.png",
    time: "03/2020 - 08/2020",
    desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="col-sm-6">
      <div class="card card2">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p>${time}</p>
        </div>
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2">${desp}</div>
        </ul>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
