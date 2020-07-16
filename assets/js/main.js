//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});

// MOOCs Cards
const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Data Science",
    cardImage: "assets/images/education-page/mooc.jpg",
    instructor: "- Alex Aklson",
  },
  {
    title: "Cryptography",
    cardImage: "assets/images/education-page/mooc.jpg",
    instructor: "- Saurabh Mukhopadhyay",
  },
  {
    title: "Machine Learning",
    cardImage: "assets/images/education-page/mooc.jpg",
    instructor: "- Andrew Ng",
  },
];

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, instructor }) =>
      (output += `        
        <div class="col-md-4 ">
            <div class="card mb-2 shadow" >
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image" height=140 >     
                  <div class="content-details fadeIn-top">
                    <h4>Certificate</h4>
                  </div>
                </div>
                <div class="card-body p-1">
                    <h6 class="mt-0 text-center font-weight-bold" style="font-size: 20px;">${title}</h6>
                    <h6 class="pt-0 text-muted text-center font-weight-bold" style="font-size: 18px;">${instructor}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
