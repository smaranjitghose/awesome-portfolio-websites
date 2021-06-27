AOS.init();





// Volunteership Cards

const achivements = document.querySelector(".achivements");
const achivementscards = [{
        title: "Projects",
        cardImage: "assets/images/achivements-page/1.jpg",
        description: "I have Completed 100+ projects upto now and looking more forward",
    },
    {
        title: "Blogs",
        cardImage: "assets/images/achivements-page/2.jpg",
        description: "Write different blogs about diffrent tools to facalitate the people",
    },
    {
        title: "Workshops",
        cardImage: "assets/images/achivements-page/3.jpg",
        description: "Mentoring different online and on place workshops and encourges the people",
    },
    {
        title: "Saminars",
        cardImage: "assets/images/achivements-page/4.jpg",
        description: "Responsible for 100+ saminars and talks to give info to people to come in front",
    },
    {
        title: "100 daysofWebProjects",
        cardImage: "assets/images/achivements-page/5.jpg",
        description: "Successfully organize the 100 daysofWebProjects and helps people to complete their projects",
    },
    {
        title: "Coding 101",
        cardImage: "assets/images/achivements-page/6.jpg",
        description: " Organize the coding 101 worldwide eventLearn how to build a website and projects with the Coding Concepts such as basic HTML and CSS, Which are building blocks of web development",
    },
];

const showCards = () => {
    let output = "";
    achivementscards.forEach(
        ({ title, cardImage, description }) =>
        (output += `        
      <div class="card achivementsCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="achivementsTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
    );
    achivements.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card