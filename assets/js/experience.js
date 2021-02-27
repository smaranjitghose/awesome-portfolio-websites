//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "Flipkart",
    time: "(May, 2020 - present)",
    desp: "<li>Worked to migrate Flipkart lite’s product page to AMP pages so that they load up instantly.</li> <li>Made changes in the current progressive web app of Flipkart to react to different actions performed on AMP page.</li> <li>Created a node module called “fk-amp” which abstracts all the files and middlewares and can be easily imported and used from express server.</li>",
  },
  {
    title: "Student Developer",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Google Summer Of Code",
    time: "(Mar - Aug, 2019)",
    desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "IIT, Bombay",
    time: "(Dec, 19 - Jan, 20)",
    desp:"<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
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
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "30 DaysofFlutter",
    cardImage: "assets/images/experience-page/5.jpg",
    description:
      "Helping beginners from their first steps in Flutter to building fully functional cross-platform applications.",
  },
  {
    title: "Garuda Hacks",
    cardImage: "assets/images/experience-page/6.jpg",
    description:
      "MLH sponsored Indonesia's premier Global Virtual Hackathon on 14 - 16th August 2020.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
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
  {
    title:"Google Code-in",
    image:"assets/images/experience-page/googlecode-in.png",
    time:"10/2019-12/2019",
    desp:"<li>Google Code-in was a contest that introduced pre-university students to open source software development.</li><hr/><li>Google Code-in grew out of GHOP (The Google Highly Open Participation contest) </li>"
  },
  {
    title:"Red Hat Open Source Contest",
    image:"assets/images/experience-page/red hat.png",
    time:"03/2020-06/2020",
    desp:"<li>From unikernels to privacy-preserving AI to usable security, Red Hat Research projects help open source communities innovate.</li><hr/><li>Insights into people and projects that bring universities together to share outcomes with open source communities. </li>"
  },
  {
    title:"GirlScript Summer Of Code",
    image:"assets/images/experience-page/1.jpg",
    time:"04/2019-07/2019",
    desp:"<li>The GirlScript  Foundation is a well-acclaimed organization in the EdTech field.</li><hr/><li>It help beginners get started with Open Source Development. </li>"
  },
  {
    title:"BOSS - Bountiful Open Source Summer",
    image:"assets/images/experience-page/BOSS.png",
    time:"04/2020-05/2020",
    desp:"<li> Coding Blocks brings BOSS,a summer programme and helps students by creating  a vibrant Open Source Community.</li><hr/><li> Coding Blocks strongly believe in free and open source software. </li>"
  },
  {
    title:"Codeheat",
    image:"assets/images/experience-page/codeheat.png",
    time:"10/2019-06/2020",
    desp:"<li>FOSSASIA and OpnTec run the Codeheat coding contest .</li><hr/><li> Codeheat is separated into two month periodsand after each period we announce winners of the period.  </li>"
  },
  {
    title:"Season Of Docs",
    image:"assets/images/experience-page/Seasonofdocs.png",
    time:"05/2020-12/2020",
    desp:"<li>Season of Docs provides support for open source projects to improve their documentation.</li><hr/><li>It gives professional technical writers an opportunity to gain experience in open source. </li>"
  }
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
