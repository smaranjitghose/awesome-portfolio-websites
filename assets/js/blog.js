/* Project Cards */

const blogcards = document.querySelector(".blogcards");
const blog = [
  {
    title: "practical road-map for web development",
    cardImage: "assets/images/blog-page/blog1img.jpg",
    description:
      "Below is an illustrated roadmap focussed on how to become a developer in 2020...",
    Previewlink: "",
    
  },

  {
    title: "Top 10 JavaScript Frameworks to Learn in 2020",
    cardImage: "assets/images/blog-page/blog2img.png",
    description:
      "is fantastic article with a list of JavaScript frameworks for both frontend and backend...",
    Previewlink: "",
    
  },
  
];

const showCards = () => {
  let output = "";
  blog.forEach(
    ({ title, cardImage, description, Previewlink, Githublink }) =>
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="#">${title}</a></h1>
            </div>
            <p class="text">${description}</p>
            <ul class="menu-content">
              <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`)
  );
  blogcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);