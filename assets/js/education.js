AOS.init();
// MOOCs Cards
const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Data Science",
    cardImage: "assets/images/education-page/coursera.png",
    moocLink: "https://www.coursera.org/browse/data-science",
  },
  {
    title: "Cryptography",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/cryptography-for-beginners/",
  },
  {
    title: "Machine Learning",
    cardImage: "assets/images/education-page/coursera.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
];

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage,moocLink }) =>
      (output += `        
        <div class="col-md-4" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
            <div class="card mb-3 mx-auto" style="width: 25em;" >
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image" height=180>     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body p-1">
                    <h6 class="mt-0 py-2 text-center font-weight-bold" style="font-size: 20px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);