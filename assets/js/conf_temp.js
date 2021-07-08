AOS.init();


const conference = document.querySelector(".conference");
const conferencecards = [
    {
        title: "Title1",
        eventImage: "assets/images/events/conf1/pic1.jpg",
        // description:
        //     "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
    },
    {
        title: "Title2",
        eventImage: "assets/images/events/conf1/pic4.jpg",
        // description:
        //     "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
    },
    {
        title: "Title3",
        eventImage: "assets/images/events/conf1/pic2.jpg",
        // description:
        //     "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
    },
    {
        title: "Title4",
        eventImage: "assets/images/events/conf1/pic3.jpg",
        // description:
        //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
    },
];


const confCards = () => {
    let output = "";
    conferencecards.forEach(
        ({ title, eventImage }) =>
        (output += `     
        <div class="slide">
        <h2 class="eventtitle"> ${title}</h2>
        <img
            src="${eventImage}" />
            
    </div>
        `)
    );
    conference.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", confCards);