AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li><li><strong class='proficiency_title'>Proficiency</strong>:<div class='progress'><div class='progress-bar bg-primary' role='progressbar' aria-valuenow='95' aria-valuemin='0' aria-valuemax='100' style='width:95%;'><span>95%</span></div></div></li><li class='project_item'><strong class='project_title'>Project</strong>: <a href='https://github.com/smaranjitghose/awesome-portfolio-websites' target='_blank'>HTML</a></li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li><li><strong class='proficiency_title'>Proficiency</strong>:<div class='progress'><div class='progress-bar bg-primary' role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style='width:70%;'><span>70%</span></div></div></li><li class='project_item'><strong class='project_title'>Project</strong>: <a href='https://github.com/smaranjitghose/awesome-portfolio-websites' target='_blank'>CSS</a></li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li><li><strong class='proficiency_title'>Proficiency</strong>:<div class='progress'><div class='progress-bar bg-primary' role='progressbar' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' style='width:75%;'><span>75%</span></div></div></li><li class='project_item'><strong class='project_title'>Project</strong>: <a href='https://github.com/smaranjitghose/awesome-portfolio-websites' target='_blank'>JAVASCRIPT</a></li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
    langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li><li><strong class='proficiency_title'>Proficiency</strong>:<div class='progress'><div class='progress-bar bg-primary' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width:60%;'><span>60%</span></div></div></li><li class='project_item'><strong class='project_title'>Project</strong>: <a href='https://github.com/smaranjitghose/awesome-portfolio-websites' target='_blank'>NODE</a></li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li><li><strong class='proficiency_title'>Proficiency</strong>:<div class='progress'><div class='progress-bar bg-primary' role='progressbar' aria-valuenow='80' aria-valuemin='0' aria-valuemax='100' style='width:80%;'><span>80%</span></div></div></li><li class='project_item'><strong class='project_title'>Project</strong>: <a href='https://github.com/smaranjitghose/awesome-portfolio-websites' target='_blank'>PYTHON</a></li>",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes</li><li><strong class='proficiency_title'>Proficiency</strong>:<div class='progress'><div class='progress-bar bg-primary' role='progressbar' aria-valuenow='50' aria-valuemin='0' aria-valuemax='100' style='width:50%;'><span>50%</span></div></div></li><li class='project_item'><strong class='project_title'>Project</strong>: <a href='https://github.com/smaranjitghose/awesome-portfolio-websites' target='_blank'>C++</a></li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li><li><strong class='proficiency_title'>Proficiency</strong>:<div class='progress'><div class='progress-bar bg-primary' role='progressbar' aria-valuenow='80' aria-valuemin='0' aria-valuemax='100' style='width:80%;'><span>80%</span></div></div></li><li class='project_item'><strong class='project_title'>Project</strong>: <a href='https://github.com/smaranjitghose/awesome-portfolio-websites' target='_blank'>GIT</a></li>",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li><li><strong class='proficiency_title'>Proficiency</strong>:<div class='progress'><div class='progress-bar bg-primary' role='progressbar' aria-valuenow='95' aria-valuemin='0' aria-valuemax='100' style='width:95%;'><span>95%</span></div></div></li><li class='project_item'><strong class='project_title'>Project</strong>: <a href='https://github.com/smaranjitghose/awesome-portfolio-websites' target='_blank'>BOOTSTRAP</a></li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li><li><strong class='proficiency_title'>Proficiency</strong>:<div class='progress'><div class='progress-bar bg-primary' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100' style='width:90%;'><span>90%</span></div></div></li><li class='project_item'><strong class='project_title'>Project</strong>: <a href='https://github.com/smaranjitghose/awesome-portfolio-websites' target='_blank'>REACT</a></li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                    ${stack.langDesc}
                </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
