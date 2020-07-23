//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});

//Footer and Navbar

let header = $(`
<nav class="white">
<div class="nav-wrapper container">
    <a href="#!" class="brand-logo"><img src="assets/images/John-Doe.png"></a>
    <a href="#" data-target="mobile-demo" class="black-text sidenav-trigger"><i
            class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
        <li><a class="black-text" href="index.html">Home</a></li>
        <li><a class="black-text" href="experience.html">Experience</a></li>
        <li><a class="black-text" href="projects.html">Projects</a></li>
        <li><a class="black-text" href="#">Research</a></li>
        <li><a class="black-text" href="education.html">Education</a></li>
    </ul>
</div>
</nav>
<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
<li><a href="index.html">Home</a></li>
<li><a href="experience.html">Experience</a></li>
<li><a href="projects.html">Projects</a></li>
<li><a href="#">Research</a></li>
<li><a href="education.html">Education</a></li>
</ul>`)
let footer = $(`
<footer class="webintern-footer">
<div class="webintern-footer-inner">
  <div class="container">
    <div class="row">
      <div class="col-lg-7 col-md-10 pt-5" >
      <div class="col-sm-6 col-md-5">
        <a class="webintern-footer-logo" href="#">
          <center><img src="assets/images/John-Doe1.png"style="width: 200px;"/></center>
        </a>
        <div class="simple-text dark padding-sm">
          <p>
            "Develop a passion for learning. If you do, you will never cease to grow."
          </p>
        </div>
        <div class="empty-space xs-25 sm-25"></div>
      </div>
    </div>

      <div class="col-sm-6 col-md-5 pt-5 footer-2">
        <!-- footer_title -->
        <h4 class="webintern_footer_title h5">
          <small>Get In Touch</small>
        </h4>
        <!-- TT-SUBSCRIBE -->
      <div class="contact-form">
          <form>
              <fieldset class="form-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
              </fieldset>
              <fieldset class="form-group">
                  <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
              </fieldset>
              <fieldset class="form-group text-xs-right">
                  <button type="button" class="btn btn-secondary-outline btn-lg">Send</button>
              </fieldset>
          </form>
      </div>
        <div class="empty-space marg-lg-b30"></div>
      </div>
    </div>
  </div>
</div>
<div class="tt-copy">
  <div class="container col-sm-6">
    <center>Made with <i class="fa fa-heart" style="color: red;"></i></center>
  </div>
</div>
</footer>`);  
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);