//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});

//Get the top button
var mybutton = document.getElementById("myBtn");

if(mybutton) {
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 350 ||
      document.documentElement.scrollTop > 350
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

//Footer and Navbar

let header = $(`
<nav class="fixed-top black">
<div class="nav-wrapper">
    <a href="#!" class="brand-logo"><img src="assets/images/John-Doe1.png"></a>
    <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
            class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
        <li><a class="white-text" href="index.html">Home</a></li>
        <li><a class="white-text" href="experience.html">Experience</a></li>
        <li><a class="white-text" href="projects.html">Projects</a></li>
        <li><a class="white-text" href="research.html">Research</a></li>
        <li><a class="white-text" href="education.html">Education</a></li>
        <li><a class="white-text" href="skill.html">Skills</a></li>
        <li><a class="white-text" href="index.html">Blog</a></li>
        <!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
          <label for="switch-1" class="theme-switch">
            <input class="toggle-checkbox" type="checkbox" id="switch-1" name="theme" />
            <div class='toggle-slot'>
              <div class='sun-icon-wrapper'>
                <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
              </div>
              <div class='toggle-button-1 toggle-button'></div>
              <div class='moon-icon-wrapper'>
                <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
              </div>
            </div>
          </label>
        </li>
    </ul>
</div>
</nav>

<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
<li><a class="sidenav-close" href="#!"><i class="material-icons">close</i></a></li>
<li><a href="index.html">Home</a></li>
<li><a href="experience.html">Experience</a></li>
<li><a href="projects.html">Projects</a></li>
<li><a href="research.html">Research</a></li>
<li><a href="education.html">Education</a></li>
<li><a href="skill.html">Skills</a></li>
<li><a href="index.html">Blog</a></li>

<!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch-2" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch-2" name="theme" />
          <div class='toggle-slot'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button-2 toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
</ul>`);

let footer = $(`
<footer class="webintern-footer">
    <div class="footer-left">
      <div class="footer-text">
        <p>"Develop a passion for learning. If you do, you will never cease to grow."</p>
      </div>
      <div class="footer-icons">
      <a href="#" class="linkedin sub-footer-icon">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#" class="git sub-footer-icon">
          <i class="fab fa-github"></i>
        </a>
        <a href="#" class="twitter sub-footer-icon">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="email-icon sub-footer-icon" >
        <i id="mail" class="fa fa-envelope" ></i>
        </a>
        <a href="#" class="kaggle sub-footer-icon" >
        <i class="fab fa-kaggle" id="kaggle-icon" ></i>
        </a> 
        <!-- <a href="#" class="google-scholar sub-footer-icon">
        <i class="ai ai-google-scholar-square ai-3x" ></i>
        </a>
         <a href="#" class="leetcode sub-footer-icon">
        <span class="iconify" data-icon="cib:leetcode" data-inline="false"></span>
        </a>
        <a href="#" class="codeforces sub-footer-icon">
        <span class="iconify" data-icon="simple-icons:codeforces" data-inline="false"></span>
        </a>
        <a href="#" class="dribbble sub-footer-icon">
              <i class="fab fa-dribbble"></i>
            </a>
            <a href="#" class="instagram sub-footer-icon">
            <i class="fab fa-instagram"></i>
          </a>  -->
        </div>
    </div>
    <div class="footer-right">
      <h6 class="display-7">Get in Touch</h6>
      <form style="width:80%; margin-left:7%;">
        <div class="name">
          <input type="text" name="name" placeholder="Name" id="inputs" required>
        </div>
        <div class="email">
          <input type="email" name="email"  placeholder="Email"  id="inputs" required>
        </div>
        <div class="msg">
          <textarea type="text" name="msg" placeholder="Message" id="inputs" required></textarea>
        </div>
        <button class="submit"  type="submit">Send</button>
      </form>
    </div>
    
    <!-- <div class="tt-copy">
      <div class="container col-sm-6">
       <center class="text-animation">Made with <i class="fa fa-heart" style="color: red;"></i></center>
      </div>
    </div> -->
    
    </footer>`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);

/*JavaScript for toggle for light/dark mode*/

// selecting toggler dynamically as their are two separate code sections for the toggler to support both mobile screen and desktop screens
if(window.innerWidth <= 992) {
  var checkbox = document.querySelector("#switch-2");
  var toggler = document.querySelector('.toggle-button-2');
} else {
  var checkbox = document.querySelector("#switch-1");
  var toggler = document.querySelector('.toggle-button-1');
}

if (checkbox) {
  let a = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", a); // setting the initial theme to light

  if (localStorage.getItem("theme") === "dark") {
    checkbox.checked = true;
  }

  // selecting the footer text & footer icons
  const footerText = document.querySelector('.footer-text p');
  const footerIcons = document.querySelectorAll('.sub-footer-icon');

  // listening for click on toggler
  toggler.addEventListener("click", () => {
    if (checkbox.checked) {
      // if theme is dark then on the toggler click we have to make it light
      trans();
      // changing the color
      toggleDarkColor();

      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else { 
      /*
      if there is click on toggler and if theme is light (initially it will be light) then the theme should convert to dark
      */
      trans();
      // changing the color
      toggleLightColor();

      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });

  let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };

  // function for changing color when dark theme is on.
  let toggleDarkColor = () => {

    footerIcons.forEach(icon => {
        icon.style.backgroundColor = 'transparent';

        // hover effect
        icon.addEventListener('mouseover',  () => {
          icon.style.backgroundColor = 'transparent';
        });

        icon.addEventListener('mouseleave',  () => {
          icon.style.backgroundColor = 'transparent';
        });
    });
  }

  // function for changing color when the light theme is on.
  let toggleLightColor = () => {

    footerIcons.forEach(icon => {
        icon.style.backgroundColor='transparent';
        // hover effect
        icon.addEventListener('mouseover',  () => {
          icon.style.backgroundColor = 'transparent';
         
        });

        icon.addEventListener('mouseleave',  () => {
          icon.style.backgroundColor = 'transparent';
        });
    });
  } 
}


