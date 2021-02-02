'use strict';

let header = $(`
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
<a class="navbar-brand" href="index.html">John Doe </a>
<div class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
  <svg width="100" height="100" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
  </svg>
</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
   <li class="nav-item"><a class="nav-link" href="experience.html">Experience</a></li>
   <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
   <li class="nav-item"><a class="nav-link" href="research.html">Research</a></li>
   <li class="nav-item"><a class="nav-link" href="education.html">Education</a></li>
     <!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
          <label for="switch-1" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch-1" name="theme" />
        <div class='toggle-slot'>
            <!-- <div class='sun-icon-wrapper'>
                    <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
                </div> -->
            <div class='toggle-button-1 toggle-button'>
                <span class="toggle--feature"></span>
            </div>
            <!-- <div class='moon-icon-wrapper'>
                    <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
                </div> -->
        </div>
    </label>
        </li>
  </ul>
</div>
</nav>`);

let footer = $(`
<footer class="footer">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0 justify-content-center">
        <p class="tag" >"Develop a passion for learning. If you do, you will never cease to grow."
        </p>
          <div class="rounded-social-buttons tag">
            <a class="social-button twitter" href="#" target="_blank"><i class="fab fa-twitter"></i></a>
            <a class="social-button linkedin" href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a class="social-button medium" href="#" target="_blank"><i class="fab fa-medium"></i></a>
            <a class="social-button github" href="#" target="_blank"><i class="fab fa-github"></i></a>
          </div>
      </div>

        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <div class="form-style-6">
            <h6 class="display">Get in Touch</h6>
            <form>
              <input type="text" name="field1" placeholder="Your Name" />
              <input type="email" name="field2" placeholder="Email Address" />
              <textarea name="field3" placeholder="Type your Message"></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
`);



// Window Loads
$(function () {
    let bodyElement = $(`body`);
    bodyElement.prepend(header);
    bodyElement.append(footer);
  
//toggler hamburger functions
    const menuBtn = document.querySelector('.navbar-toggler');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      if(!menuOpen){
        menuBtn.classList.add('open')
        menuOpen = true;
      }
      else{
        menuBtn.classList.remove('open');
        menuOpen = false;
      }
  });

  /*JavaScript for toggle for light/dark mode*/
  
    var checkbox = document.querySelector("#switch-1");
    var toggler = document.querySelector('.toggle-button-1');
  

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
        icon.addEventListener('mouseover', () => {
          icon.style.backgroundColor = 'transparent';
        });

        icon.addEventListener('mouseleave', () => {
          icon.style.backgroundColor = 'transparent';
        });
      });
    }

    // function for changing color when the light theme is on.
    let toggleLightColor = () => {

      footerIcons.forEach(icon => {
        icon.style.backgroundColor = 'transparent';
        // hover effect
        icon.addEventListener('mouseover', () => {
          icon.style.backgroundColor = 'transparent';

        });

        icon.addEventListener('mouseleave', () => {
          icon.style.backgroundColor = 'transparent';
        });
      });
    }
  }

});



