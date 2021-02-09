'use strict';

let header = $(`
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
<a class="navbar-brand" href="index.html">John Doe </a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
   <li class="nav-item"><a class="nav-link" href="experience.html">Experience</a></li>
   <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
   <li class="nav-item"><a class="nav-link" href="research.html">Research</a></li>
   <li class="nav-item"><a class="nav-link" href="education.html">Education</a></li>
  </ul>
</div>
</nav>`);

let footer = $(
<footer class="footer" >
<div class="container p-4">
  <div class="row">

    <div>
    <div class="form-style-6">
    <h6 class="display" style="color: red;">Get in Touch</h6>
    <form>
    <input type="text" name="field1" placeholder="Your Name"  style="border:2px solid red;"/>
    <input type="email" name="field2" placeholder="Email Address" style="border:2px solid red;" />
    <textarea name="field3" placeholder="Type your Message" style="border:2px solid red;"></textarea>
    <input type="submit" value="Send" />
    </form>
    </div>
  </div>

  <div class="col-lg-6 col-md-12 mb-4 mb-md-0 justify-content-center" style="margin-top:5%;">
  <p class="tag" >"Develop a passion for learning. If you do, you will never cease to grow."
  </p>
      <div class="rounded-social-buttons tag">
          <a class="social-button twitter" href="#" target="_blank" style="margin-right:4%;"><i class="fab fa-twitter"></i></a>
          <a class="social-button linkedin" href="#" target="_blank" style="margin-right:4%;"><i class="fab fa-linkedin"></i></a>
          <a class="social-button medium" href="#" target="_blank" style="margin-right:4%;"><i class="fab fa-medium"></i></a>
          <a class="social-button github" href="#" target="_blank" style="margin-right:4%;"><i class="fab fa-github"></i></a>
       </div>
</div>
   <div class="row">
<ul style="list-style:none; margin-top:35%;">
<li><h4 style="font-family:cursive; margin-bottom:10px; margin-left:10px;"><a href="#">Contact Us</a></h4></li>
<li><h4 style="font-family:cursive; margin:10px;"><a href="#"> Developers </a></h4></li>
<li><h4 style="font-family:cursive; margin:10px;"><a href="#"> About Us </a></h4></li>
<li><h4 style="font-family:cursive; margin:10px;"><a href="#"> Blogs </a></h4></li>
<ul>
</div>   
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
  
  </di>
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
    if (!menuOpen) {
      menuBtn.classList.add('open')
      menuOpen = true;
    }
    else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  });

});

// function for toggling hamburger is-active class
$(function(){
  
  $("#js-hamburger").on("click", function(){
    $(this).toggleClass('is-active');
  });

});


