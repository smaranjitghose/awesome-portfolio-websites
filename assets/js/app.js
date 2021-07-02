'use strict';

let header = $(`
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
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
   <li class="nav-item"><a class="nav-link" href="./assets/docs/john_doe.pdf" target="_blank">Resume</a></li>
   <li class="nav-item">
   <input type="checkbox" class="dark_toggler" aria-label="Toggle Light Mode" onclick="toggle_light_mode()">
   </li>
  </ul>
</div>
</nav>`);


// Footer

let footer = $(`
<footer class="footer sticky-bottom"  style="background-color:#2b2a2a;">
  <div class="p-4">
    <div class="container-fluid quote-container">
      <div class="quotes"    style="text-align:center;">
        <i class="fas fa-quote-left" style="color:white;"></i>
      </div>
      <p class="tag" >Develop a passion for learning. If you do, you will never cease to grow.</p>
    </div>

    
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0 justify-content-center">
          <style>svg#freepik_stories-smiley-face:not(.animated) .animable {opacity: 0;}svg#freepik_stories-smiley-face.animated #freepik--background-complete--inject-31 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) fadeIn;animation-delay: 0.2s;opacity: 0}svg#freepik_stories-smiley-face.animated #freepik--Shadow--inject-31 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) fadeIn;animation-delay: 0.2s;opacity: 0}svg#freepik_stories-smiley-face.animated #freepik--Character--inject-31 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideDown,1.5s Infinite  linear floating;animation-delay: 0.2s,1.2s;opacity: 0}            @keyframes fadeIn {                0% {                    opacity: 0;                }                100% {                    opacity: 1;                }            }                    @keyframes slideDown {                0% {                    opacity: 0;                    transform: translateY(-30px);                }                100% {                    opacity: 1;                    transform: translateY(0);                }            }                    @keyframes floating {                0% {                    opacity: 1;                    transform: translateY(0px);                }                50% {                    transform: translateY(-10px);                }                100% {                    opacity: 1;                    transform: translateY(0px);                }            }        </style>
              <svg class="animated" id="freepik_stories-smiley-face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"><g id="freepik--background-complete--inject-31" class="animable" style="transform-origin: 250px 207.723px;"><rect y="382.4" width="500" height="0.25" style="fill: rgb(235, 235, 235); transform-origin: 250px 382.525px;" id="elz12x8mjcuy" class="animable"></rect><rect x="359" y="391.92" width="90.9" height="0.25" style="fill: rgb(235, 235, 235); transform-origin: 404.45px 392.045px;" id="ele8kmyfspz6b" class="animable"></rect><rect x="306.33" y="389.21" width="24.89" height="0.25" style="fill: rgb(235, 235, 235); transform-origin: 318.775px 389.335px;" id="eledad4o6o5d" class="animable"></rect><rect x="349.52" y="401.21" width="38.59" height="0.25" style="fill: rgb(235, 235, 235); transform-origin: 368.815px 401.335px;" id="el2n7z79wktuo" class="animable"></rect><rect x="52.46" y="399.53" width="22.64" height="0.25" style="fill: rgb(235, 235, 235); transform-origin: 63.78px 399.655px;" id="elvxkkohbhat" class="animable"></rect><rect x="84" y="399.53" width="26.89" height="0.25" style="fill: rgb(235, 235, 235); transform-origin: 97.445px 399.655px;" id="el1hzhibkohdp" class="animable"></rect><rect x="178.31" y="395.31" width="46.84" height="0.25" style="fill: rgb(235, 235, 235); transform-origin: 201.73px 395.435px;" id="elhzpvwn605h7" class="animable"></rect><path d="M237,337.8H43.91a5.71,5.71,0,0,1-5.7-5.71V60.66A5.71,5.71,0,0,1,43.91,55H237a5.71,5.71,0,0,1,5.71,5.71V332.09A5.71,5.71,0,0,1,237,337.8ZM43.91,55.2a5.46,5.46,0,0,0-5.45,5.46V332.09a5.46,5.46,0,0,0,5.45,5.46H237a5.47,5.47,0,0,0,5.46-5.46V60.66A5.47,5.47,0,0,0,237,55.2Z" style="fill: rgb(235, 235, 235); transform-origin: 140.46px 196.4px;" id="el92bi8cxpvav" class="animable"></path><path d="M453.31,337.8H260.21a5.72,5.72,0,0,1-5.71-5.71V60.66A5.72,5.72,0,0,1,260.21,55h193.1A5.71,5.71,0,0,1,459,60.66V332.09A5.71,5.71,0,0,1,453.31,337.8ZM260.21,55.2a5.47,5.47,0,0,0-5.46,5.46V332.09a5.47,5.47,0,0,0,5.46,5.46h193.1a5.47,5.47,0,0,0,5.46-5.46V60.66a5.47,5.47,0,0,0-5.46-5.46Z" style="fill: rgb(235, 235, 235); transform-origin: 356.75px 196.4px;" id="elpbqyu6v2yks" class="animable"></path><g id="ellpbg5sgx4tl"><circle cx="122.74" cy="109.59" r="70.27" style="fill: rgb(235, 235, 235); transform-origin: 122.74px 109.59px; transform: rotate(-45deg);" class="animable" id="elqv1umdpmofn"></circle></g><path d="M69.64,99c.76,1.37,2.66,1.61,4.24.54s2.24-3,1.48-4.42-2.66-1.61-4.24-.54S68.88,97.61,69.64,99Z" style="fill: rgb(255, 255, 255); transform-origin: 72.5px 97.0522px;" id="elwyii447cnes" class="animable"></path><path d="M101.26,83.17a3.46,3.46,0,1,0,2.39-3.76A3.19,3.19,0,0,0,101.26,83.17Z" style="fill: rgb(255, 255, 255); transform-origin: 104.671px 82.7102px;" id="ellxn1f8vo9z" class="animable"></path><path d="M107.44,93.87c.85,1.71,4.56,1.29,8.28-.92s6-5.38,5.19-7.08-4.56-1.29-8.28.92S106.59,92.17,107.44,93.87Z" style="fill: rgb(240, 240, 240); transform-origin: 114.169px 89.8721px;" id="eld2400dcgy64" class="animable"></path><path d="M63.38,111.81c.61,1.74,4.25,2,8.13.58s6.54-4,5.93-5.73-4.24-2-8.12-.58S62.78,110.07,63.38,111.81Z" style="fill: rgb(240, 240, 240); transform-origin: 70.4113px 109.237px;" id="elaqe9wyt3w7f" class="animable"></path><path d="M113.55,99.45c-6.45,1.14-22.88,5-37.72,16.07a2.53,2.53,0,0,0-.32,3.34C85.68,134.62,112.74,123,116,102.4,116.3,100.77,115,99.2,113.55,99.45Z" style="fill: rgb(224, 224, 224); transform-origin: 95.5343px 112.803px;" id="ela0xzo5jc17k" class="animable"></path><path d="M90.41,116a12.06,12.06,0,0,1,3.27-.21,9.92,9.92,0,0,1,6.65-4.42,11.72,11.72,0,0,1,10.58,3,30.11,30.11,0,0,1-8.06,7.52,27.74,27.74,0,0,1-7.53,3.41A19.37,19.37,0,0,1,82.73,125C82.27,120.87,85.44,117,90.41,116Z" style="fill: rgb(255, 255, 255); transform-origin: 96.7979px 118.657px;" id="elnfdxc6486h" class="animable"></path><path d="M396,72.5a20.49,20.49,0,0,0,2.94,5,1.36,1.36,0,0,0,2.39-.81c.16-2.36,1.08-4.09,2.68-4.59a3.44,3.44,0,0,1,1.78-.06,1.37,1.37,0,0,0,1.65-1.73c-.15-.42-.3-.84-.48-1.26-2.33-5.67-6.67-9.51-9.7-8.56S393.68,66.82,396,72.5Z" style="fill: rgb(235, 235, 235); transform-origin: 401.034px 69.16px;" id="el6nwl8k97tju" class="animable"></path><g id="elf9faotbb9hs"><circle cx="358.27" cy="103.18" r="57.3" style="fill: rgb(245, 245, 245); transform-origin: 358.27px 103.18px; transform: rotate(-45deg);" class="animable" id="elqi86kkazii9"></circle></g><g id="eltc10qpfw589"><circle cx="110.29" cy="305.94" r="48.64" style="fill: rgb(250, 250, 250); transform-origin: 110.29px 305.94px; transform: rotate(-45deg);" class="animable" id="elbkp2k6by87d"></circle></g><path d="M85.38,339.06a19.78,19.78,0,0,1,4.46,2.57,1.07,1.07,0,0,1-.74,1.91c-2.1,0-3.66.69-4.11,2a2.47,2.47,0,0,0-.06,1.43,1.13,1.13,0,0,1-1.55,1.26c-.38-.13-.75-.27-1.13-.43-5-2.12-8.44-5.78-7.57-8.19S80.33,337,85.38,339.06Z" style="fill: rgb(235, 235, 235); transform-origin: 82.3982px 342.983px;" id="elpaf77a8n7sa" class="animable"></path><path d="M102,306.39a9.92,9.92,0,0,1,4,2.75c.76.86.37,3.4-.6,4a7.59,7.59,0,0,0-3.58,5.7,10.13,10.13,0,0,0,0,2.75c.19,1.54-.53,3.31-1.34,3.13a10,10,0,0,1-1-.28c-4.51-1.6-7.6-6.92-6.9-11.89S97.49,304.8,102,306.39Z" style="fill: rgb(235, 235, 235); transform-origin: 99.4407px 315.337px;" id="el2ptuoqt91zm" class="animable"></path><g id="els31dqseik8"><circle cx="355.9" cy="275.72" r="91.58" style="fill: rgb(240, 240, 240); transform-origin: 355.9px 275.72px; transform: rotate(-45deg);" class="animable" id="el7qamk7i2df9"></circle></g><path d="M338.37,309.46c-2.78,2.94-.1,7.21,6,9.53s13.29,1.8,16.07-1.15.09-7.21-6-9.52S341.15,306.51,338.37,309.46Z" style="fill: rgb(255, 255, 255); transform-origin: 349.404px 313.655px;" id="el8o56g9k4os5" class="animable"></path><path d="M404.76,316.39c.28,3.17,5.35,4.52,11.32,3s10.58-5.31,10.3-8.48-5.35-4.53-11.31-3S404.48,313.21,404.76,316.39Z" style="fill: rgb(255, 255, 255); transform-origin: 415.57px 313.648px;" id="elv9mhsatd7dl" class="animable"></path><path d="M344,338.53c10.72,1.76,32.24,4.77,50.43,4.06a2.29,2.29,0,0,1,1.46,4.13c-11.5,8.63-34.53,13.76-53.83-4.27A2.29,2.29,0,0,1,344,338.53Z" style="fill: rgb(224, 224, 224); transform-origin: 369.084px 346.543px;" id="elb8wu07kh5ik" class="animable"></path></g><g id="freepik--Shadow--inject-31" class="animable" style="transform-origin: 250px 416.24px;"><ellipse id="freepik--path--inject-31" cx="250" cy="416.24" rx="193.89" ry="11.32" style="fill: rgb(245, 245, 245); transform-origin: 250px 416.24px;" class="animable"></ellipse></g><g id="freepik--Character--inject-31" class="animable" style="transform-origin: 200.694px 236.008px;"><polygon points="271.81 407.29 264.32 404.2 270.35 386.07 277.84 389.16 271.81 407.29" style="fill: rgb(255, 139, 123); transform-origin: 271.08px 396.68px;" id="elc60u85tlpt4" class="animable"></polygon><polygon points="344.44 407.9 336.27 407.9 335.55 388.99 343.72 388.99 344.44 407.9" style="fill: rgb(255, 139, 123); transform-origin: 339.995px 398.445px;" id="elokf2bmtts4o" class="animable"></polygon><path d="M335.23,407h10a.69.69,0,0,1,.67.56l1.27,7.26a1.26,1.26,0,0,1-1.26,1.45c-3.2-.05-5.53-.24-9.56-.24-2.49,0-7.61.26-11,.26s-3.72-3.39-2.3-3.7c6.35-1.38,8.81-3.27,10.91-5.08A2.06,2.06,0,0,1,335.23,407Z" style="fill: rgb(38, 50, 56); transform-origin: 334.721px 411.645px;" id="elw965xu7ard" class="animable"></path><path d="M263.86,402.65l8.25,3.39a.77.77,0,0,1,.46.8l-.88,7.49a1.11,1.11,0,0,1-1.56.92c-2.95-1.27-7.19-3.22-10.93-4.76-4.38-1.79-6.27-2.29-11.39-4.4-3.1-1.28-2.86-4.84-1.46-4.6,6.37,1.11,9.27,2.14,15.49,1A3.66,3.66,0,0,1,263.86,402.65Z" style="fill: rgb(38, 50, 56); transform-origin: 258.968px 408.413px;" id="elgiznyosr41v" class="animable"></path><path d="M314.41,167c-1.06,1-2,1.74-3,2.54s-2,1.57-3,2.34c-2,1.54-4.13,2.95-6.28,4.33s-4.39,2.64-6.66,3.85a76.09,76.09,0,0,1-7.16,3.23c-1.23.49-2.52.89-3.8,1.3-.59.21-1.43.4-2.17.58a18.9,18.9,0,0,1-2.41.36,16.53,16.53,0,0,1-10-2.09,16.07,16.07,0,0,1-3.84-3.13,19.1,19.1,0,0,1-2.64-3.73,22.83,22.83,0,0,1-1.69-3.93c-.22-.67-.39-1.34-.55-2s-.26-1.3-.39-2.15L266.8,167l.74,1.28c.27.45.56.9.85,1.33a19.36,19.36,0,0,0,1.86,2.36,13.23,13.23,0,0,0,2,1.79,8.21,8.21,0,0,0,2.05,1,7.22,7.22,0,0,0,4.1,0c.37-.08.76-.23,1.15-.34s.74-.27,1.28-.5c1-.42,2-.81,2.95-1.31a84.07,84.07,0,0,0,11.54-6.79c1.89-1.27,3.73-2.62,5.57-4,.92-.68,1.83-1.38,2.72-2.09l2.57-2.07Z" style="fill: rgb(255, 139, 123); transform-origin: 287.615px 171.643px;" id="elo2wt8hp4pjd" class="animable"></path><path d="M319.22,164.71c-3.49,7.16-16.75,13.06-16.75,13.06l-5-16s2.14-2.9,7.58-5.5C317.89,150.15,323.92,155.06,319.22,164.71Z" style="fill: rgb(38, 50, 56); transform-origin: 309.139px 165.67px;" id="elvlqn45kl9b" class="animable"></path><g id="eleh712xjy8ad"><path d="M310.86,164.41a34.06,34.06,0,0,0-6.93,10.68,23.05,23.05,0,0,0-.81,2.38c2-1,8.41-4.2,12.74-8.37l.33-1.93A3.16,3.16,0,0,0,310.86,164.41Z" style="opacity: 0.2; transform-origin: 309.675px 170.489px;" class="animable" id="elhi72sn5dwrg"></path></g><path d="M268.71,170.68l-4.46-9.58-5.47,9.07s2.67,5.49,8.16,3.57Z" style="fill: rgb(255, 139, 123); transform-origin: 263.745px 167.624px;" id="elcvugl93uee" class="animable"></path><polygon points="257.51 156.82 253.8 163.66 258.78 170.17 264.25 161.1 257.51 156.82" style="fill: rgb(255, 139, 123); transform-origin: 259.025px 163.495px;" id="eloyef4kodfkg" class="animable"></polygon><g id="elqphaagxj41c"><polygon points="270.35 386.08 267.24 395.42 274.74 398.51 277.85 389.17 270.35 386.08" style="opacity: 0.2; transform-origin: 272.545px 392.295px;" class="animable" id="el0n2drzlzex8q"></polygon></g><g id="eldr68w7fq6fh"><polygon points="343.72 388.99 335.55 388.99 335.93 398.74 344.1 398.74 343.72 388.99" style="opacity: 0.2; transform-origin: 339.825px 393.865px;" class="animable" id="elsngt2bknpjf"></polygon></g>
                <path d="M308.84,158.77a367,367,0,0,0-4.69,65.62l43.31,5.68c.75-6.36,1.84-35.6,6.93-66.27.42-2.52.55-4.45-1.92-5.16-2.73-.79-8.08-2.27-11.69-2.93a161.51,161.51,0,0,0-18.41-2.41,73.89,73.89,0,0,0-7.59.13A6.45,6.45,0,0,0,308.84,158.77Z" style="fill: rgb(38, 50, 56); transform-origin: 329.358px 191.663px;" id="el946yuot26mr" class="animable"></path><path d="M340.78,155.71a161.09,161.09,0,0,0-18.42-2.41c-1.33-.05-2.64-.05-3.89,0l1.3,1.86a31.74,31.74,0,0,1,3.69,7.7h0a1.27,1.27,0,0,0,1.66.82l1.94-.74c3.2-1.21,8.51-2.63,11.73-3.44a49.17,49.17,0,0,0,5.67-1.81l1.84-.7C344.38,156.47,342.4,156,340.78,155.71Z" style="fill: rgb(255, 255, 255); transform-origin: 332.385px 158.512px;" id="elljcq3lr6ure" class="animable"></path><g id="el0esqeh2teg5c"><path d="M341.75,173a28.6,28.6,0,0,0-1.32,15.67,3.13,3.13,0,0,0,3.58,2.53l3.51-.55a3.15,3.15,0,0,0,2.61-2.59l3.87-23a3.15,3.15,0,0,0-5.32-2.76A33.72,33.72,0,0,0,341.75,173Z" style="opacity: 0.2; transform-origin: 346.967px 176.316px;" class="animable" id="eltzbbonv4ltk"></path></g><path d="M340.47,134.58l-12,8.24c.82,4.79.63,9.75-6.1,10.48a35.77,35.77,0,0,1,3.15,5.51,1.26,1.26,0,0,0,1.58.72c5.26-1.83,13.69-3.82,13.69-3.82C336.92,151.18,338.88,140.4,340.47,134.58Z" style="fill: rgb(255, 139, 123); transform-origin: 331.58px 147.09px;" id="el0uec5nugxxfr" class="animable"></path><g id="el6bt12hi7asb"><path d="M335.57,138l-7.1,4.87a20.67,20.67,0,0,1,.33,3.37c2.55,0,6.22-2.37,6.68-5A9,9,0,0,0,335.57,138Z" style="opacity: 0.2; transform-origin: 332.073px 142.12px;" class="animable" id="el11ytindgg50o"></path></g><path d="M328.8,111.66c-5.7,2.73-8.72,15.69-.6,12.79S335,108.69,328.8,111.66Z" style="fill: rgb(38, 50, 56); transform-origin: 328.552px 118.044px;" id="elpt58zhbkfa" class="animable"></path><path d="M347.21,126.48c-2.49,7.61-4.79,13.3-9.76,16-7.47,4.11-16.15-2.52-16-10.86.14-7.51,5.42-19.78,13.85-20.44A11.75,11.75,0,0,1,347.21,126.48Z" style="fill: rgb(255, 139, 123); transform-origin: 334.607px 127.445px;" id="elv8x2dnqpqjj" class="animable"></path><path d="M341.26,124.72c1.47-1.88,6.72-6.59,1.7-6.1s-14.84-1.23-17.74-7.09,4.23-5.49,5.71-3.23c-.51-3.22,1.61-5.62,4.16-4.45a6.66,6.66,0,0,1,3.35,3.7s.68-5.39,4.4-2.56a15.3,15.3,0,0,1,4.94,6.66s11.67,5,5.59,9.34c5.33,1,4,11.19-9,12.55C337.86,132.4,339.08,127.5,341.26,124.72Z" style="fill: rgb(38, 50, 56); transform-origin: 340.419px 118.544px;" id="el3vrz7e7oaja" class="animable"></path><path d="M354.33,121.33a4,4,0,0,1-3.33-1.39.27.27,0,0,1,.43-.31c.82,1.17,2.72,1.36,4.13,1,.9-.2,1.35-.55,1.39-.79s-.23-.4-.4-.51a.26.26,0,0,1-.08-.36.26.26,0,0,1,.36-.09c.61.39.69.79.64,1-.09.53-.76,1-1.79,1.22A6.5,6.5,0,0,1,354.33,121.33Z" style="fill: rgb(38, 50, 56); transform-origin: 354.229px 120.091px;" id="elgna1iuhbjx5" class="animable"></path><path d="M347.89,134.63a7.86,7.86,0,0,1-5.09,2.68c-2.66.29-3.54-2-2.42-4.17,1-1.93,3.59-4.4,6.07-3.69A3.11,3.11,0,0,1,347.89,134.63Z" style="fill: rgb(255, 139, 123); transform-origin: 344.339px 133.33px;" id="el5xsaybph3i4" class="animable"></path><path d="M304.15,224.39S290.53,282.2,285,306.59C279.16,332,265,392.47,265,392.47l12.8,5.26s14.46-49,22.23-73.26c8.48-26.43,31-75,32.57-96.35Z" style="fill: #bb86fc; transform-origin: 298.8px 311.06px;" id="elu3ra9n0vuvr" class="animable"></path><g id="el4ms1cvt8qk3"><path d="M316.85,279.83c4.64-12,9.11-24,12.11-34.29h0C318.27,240.46,316,260.18,316.85,279.83Z" style="opacity: 0.2; transform-origin: 322.824px 262.28px;" class="animable" id="elomz9f5siwel"></path></g><path d="M322.44,226.79s-1.75,64.26.62,88.4c2.6,26.43,9,81.66,9,81.66h15s-1.94-54-2.21-79.77c-.29-28,1.14-66.56,2.63-87Z" style="fill: #bb86fc; transform-origin: 334.649px 311.82px;" id="eli4p1ct2pom" class="animable"></path><polygon points="331.86 397.18 348.18 397.18 348.18 391.57 330.05 391.57 331.86 397.18" style="fill: #bb86fc; transform-origin: 339.115px 394.375px;" id="elybggkgwy7w" class="animable"></polygon><g id="elzfon7s5yb0a"><polygon points="331.86 397.18 348.18 397.18 348.18 391.57 330.05 391.57 331.86 397.18" style="opacity: 0.4; transform-origin: 339.115px 394.375px;" class="animable" id="elsnse9tg2ep"></polygon></g><polygon points="263.36 392.15 278.74 398.53 281.19 393.71 264.52 386.56 263.36 392.15" style="fill: #bb86fc; transform-origin: 272.275px 392.545px;" id="el7bsk8ohj0wq" class="animable"></polygon><g id="elatnyhjvt69m"><polygon points="263.36 392.15 278.74 398.53 281.19 393.71 264.52 386.56 263.36 392.15" style="opacity: 0.4; transform-origin: 272.275px 392.545px;" class="animable" id="eln0295pc960o"></polygon></g><path d="M333.62,126c-.17.63-.64,1-1.05.9s-.62-.75-.45-1.38.63-1,1-.91S333.78,125.34,333.62,126Z" style="fill: rgb(38, 50, 56); transform-origin: 332.863px 125.756px;" id="elax0lxbklnq6" class="animable"></path><path d="M326.45,123.68c-.16.63-.63,1-1.05.9s-.61-.75-.45-1.38.63-1,1.05-.9S326.62,123.05,326.45,123.68Z" style="fill: rgb(38, 50, 56); transform-origin: 325.702px 123.44px;" id="elewdgpqhr7bg" class="animable"></path><path d="M328.65,124.72a21.55,21.55,0,0,1-4.44,4.44,4,4,0,0,0,2.88,1.53Z" style="fill: rgb(255, 86, 82); transform-origin: 326.43px 127.705px;" id="elk982gv6wy4d" class="animable"></path><path d="M328.49,133a5.26,5.26,0,0,0,5-.72.19.19,0,0,0,0-.27.18.18,0,0,0-.27,0,5,5,0,0,1-4.61.65.17.17,0,0,0-.23.12A.21.21,0,0,0,328.49,133Z" style="fill: rgb(38, 50, 56); transform-origin: 330.962px 132.641px;" id="elbvpzy66yy06" class="animable"></path><path d="M337.17,122.89a.36.36,0,0,0,.25,0,.37.37,0,0,0,.23-.49,4.13,4.13,0,0,0-2.5-2.63.37.37,0,0,0-.47.27.41.41,0,0,0,.29.48h0a3.33,3.33,0,0,1,2,2.11A.4.4,0,0,0,337.17,122.89Z" style="fill: rgb(38, 50, 56); transform-origin: 336.174px 121.333px;" id="elnbodgf37rw" class="animable"></path><path d="M324.68,119.56a.36.36,0,0,0,.39-.1,2.9,2.9,0,0,1,2.53-1,.36.36,0,0,0,.43-.31.42.42,0,0,0-.33-.45,3.59,3.59,0,0,0-3.22,1.23.39.39,0,0,0,0,.55A.29.29,0,0,0,324.68,119.56Z" style="fill: rgb(38, 50, 56); transform-origin: 326.199px 118.624px;" id="el9wx9gvsjtjl" class="animable"></path><path d="M358.63,168.06c-.16,1.82-.36,3.38-.62,5s-.53,3.27-.84,4.9c-.63,3.24-1.4,6.48-2.36,9.7a78,78,0,0,1-3.5,9.59,45.08,45.08,0,0,1-5.42,9.33l-.44.56-.23.28-.39.47a10.55,10.55,0,0,1-1.8,1.58,14.24,14.24,0,0,1-3.35,1.72,27,27,0,0,1-5.74,1.28,60.24,60.24,0,0,1-10.26.23,114.5,114.5,0,0,1-19.34-2.87l.81-6.07c3.06,0,6.21,0,9.29-.05s6.17-.16,9.17-.39a62.4,62.4,0,0,0,8.62-1.14,15.54,15.54,0,0,0,3.41-1.1,2.79,2.79,0,0,0,.82-.52c.05,0,0-.06,0,0s-.07.08,0,0l.13-.2.26-.39a39.26,39.26,0,0,0,3.59-7.29A83.35,83.35,0,0,0,343,184.4c.74-2.87,1.38-5.8,1.94-8.75.28-1.48.54-3,.77-4.45s.46-3,.62-4.35Z" style="fill: rgb(255, 139, 123); transform-origin: 331.485px 189.834px;" id="eli3m5k9dxgk" class="animable"></path><path d="M359.65,164.46c4,9.37-2.49,22.43-2.49,22.43l-15.51-5.45a137.64,137.64,0,0,1,2.08-16.54C345.41,155.59,356.56,157.24,359.65,164.46Z" style="fill: rgb(38, 50, 56); transform-origin: 351.301px 172.681px;" id="elm02m2cvzvi" class="animable"></path><path d="M332.13,408.38a9.87,9.87,0,0,0,2.12-.29.17.17,0,0,0,.13-.16.19.19,0,0,0-.1-.19c-.3-.19-3-1.81-3.91-1.35a.6.6,0,0,0-.3.55,1.22,1.22,0,0,0,.46,1A2.6,2.6,0,0,0,332.13,408.38Zm1.54-.56a4.07,4.07,0,0,1-2.91-.15.87.87,0,0,1-.3-.7.23.23,0,0,1,.11-.23C331,406.5,332.57,407.2,333.67,407.82Z" style="fill: #bb86fc; transform-origin: 332.225px 407.346px;" id="elwlek70eu9ad" class="animable"></path><path d="M334.2,408.09a.2.2,0,0,0,.11,0,.2.2,0,0,0,.07-.18c0-.1-.34-2.45-1.34-3.23a1.12,1.12,0,0,0-.83-.25.6.6,0,0,0-.59.51c-.12.91,1.62,2.7,2.49,3.16Zm-1.84-3.31a.77.77,0,0,1,.46.17,5,5,0,0,1,1.11,2.56c-.88-.64-2-2-1.93-2.53,0-.05,0-.16.28-.19Z" style="fill: #bb86fc; transform-origin: 332.998px 406.262px;" id="elylc8uyv0kl" class="animable"></path><path d="M260.26,402.71a12.66,12.66,0,0,0,2.47.7.17.17,0,0,0,.19-.09.2.2,0,0,0,0-.23c-.28-.32-2.77-3.15-3.87-3a.57.57,0,0,0-.46.36,1.13,1.13,0,0,0,0,1A3.2,3.2,0,0,0,260.26,402.71Zm2,.2c-1.77-.4-3-1-3.3-1.6a.74.74,0,0,1,0-.68.23.23,0,0,1,.18-.15C259.68,400.4,261.18,401.78,262.22,402.91Z" style="fill: #bb86fc; transform-origin: 260.715px 401.749px;" id="elk8ubhqg1j" class="animable"></path><path d="M262.69,403.4a.17.17,0,0,0,.12,0,.2.2,0,0,0,.13-.14c0-.09.53-2.25-.15-3.46a1.49,1.49,0,0,0-.88-.72c-.51-.15-.74.05-.84.24-.44.82.78,3.23,1.55,4Zm-.76-3.89a1.1,1.1,0,0,1,.54.49,4.94,4.94,0,0,1,.17,2.8c-.73-1-1.51-2.78-1.24-3.27,0,0,.09-.16.42-.06Z" style="fill: #bb86fc; transform-origin: 262.057px 401.219px;" id="elxz3q5jv6u2a" class="animable"></path><path d="M89.47,164.52l-.9-.36c1-2.49,2.11-5,3.29-7.35l.88.43C91.57,159.61,90.47,162.06,89.47,164.52Z" style="fill: #bb86fc; transform-origin: 90.655px 160.665px;" id="elx5bhtq7loeh" class="animable"></path><path d="M82.8,189.18l-1-.14A107.77,107.77,0,0,1,86.41,170l.93.32A106.63,106.63,0,0,0,82.8,189.18Z" style="fill: #bb86fc; transform-origin: 84.57px 179.59px;" id="elrncsb9jbzu" class="animable"></path><g id="elwpa580009tp"><circle cx="189.55" cy="204.84" r="105.44" style="fill: #bb86fc; transform-origin: 189.55px 204.84px; transform: rotate(-45deg);" class="animable" id="elswvit1tjfz"></circle></g><g id="eliyrfy2n52e"><circle cx="195.48" cy="182.76" r="79.21" style="fill: rgb(255, 255, 255); opacity: 0.07; transform-origin: 195.48px 182.76px;" class="animable" id="el9jk9mqjah0t"></circle></g><path d="M237.61,143.74c-.15,3-3.79,5.33-8.13,5.11s-7.73-2.86-7.57-5.91,3.79-5.32,8.13-5.1S237.77,140.7,237.61,143.74Z" style="fill: rgb(38, 50, 56); transform-origin: 229.76px 143.345px;" id="elqtnmhnj1lja" class="animable"></path><path d="M156.57,148.74c.58,3-2.41,6.08-6.67,6.91s-8.19-.92-8.77-3.91,2.4-6.09,6.67-6.92S156,145.75,156.57,148.74Z" style="fill: rgb(38, 50, 56); transform-origin: 148.85px 150.235px;" id="elu7g5jhbm0om" class="animable"></path><ellipse cx="146.47" cy="166.1" rx="14.79" ry="5.51" style="fill: #bb86fc; transform-origin: 146.47px 166.1px;" id="el0y5r0oe5z848" class="animable"></ellipse><path d="M251,154.73c.45,2.9-5.49,6.24-13.26,7.46s-14.45-.15-14.91-3.05,5.49-6.23,13.26-7.45S250.57,151.83,251,154.73Z" style="fill: #bb86fc; transform-origin: 236.914px 156.939px;" id="elok3k7m7rsq" class="animable"></path><path d="M170.38,172.57c7.62-2.38,27.56-7.64,49.73-5.63a2.46,2.46,0,0,1,2.17,2.79c-2.46,19.32-38.18,23.28-53,6.76A2.42,2.42,0,0,1,170.38,172.57Z" style="fill: rgb(38, 50, 56); transform-origin: 195.487px 176.67px;" id="elr104jqj61tr" class="animable"></path><g id="el120fn8gk3ngl"><path d="M204.55,175.07a17.4,17.4,0,0,0-3.67,1.53,13.81,13.81,0,0,0-9.63-.4c-4.83,1.4-8.58,4.68-9.87,8.21a41.47,41.47,0,0,0,22.9,1.47c5.39-1.2,10.18-3.55,13.47-6.95C216,175.07,210.5,173.34,204.55,175.07Z" style="fill: #bb86fc; opacity: 0.6; transform-origin: 199.565px 180.622px;" class="animable" id="el19ja9ku3plk"></path></g><path d="M306.7,204.22,299.56,200,299,210.71s6.8,2.16,8.19-1.47Z" style="fill: rgb(255, 139, 123); transform-origin: 303.095px 205.674px;" id="ely8uzcj7fqk" class="animable"></path><polygon points="290.97 200.79 290.96 209.58 298.99 210.71 299.56 200.04 290.97 200.79" style="fill: rgb(255, 139, 123); transform-origin: 295.26px 205.375px;" id="elwu9i66vwydh" class="animable"></polygon></g><defs>     <filter id="active" height="200%">         <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2"></feMorphology>                <feFlood flood-color="#32DFEC" flood-opacity="1" result="PINK"></feFlood>        <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE"></feComposite>        <feMerge>            <feMergeNode in="OUTLINE"></feMergeNode>            <feMergeNode in="SourceGraphic"></feMergeNode>        </feMerge>    </filter>    <filter id="hover" height="200%">        <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2"></feMorphology>                <feFlood flood-color="#ff0000" flood-opacity="0.5" result="PINK"></feFlood>        <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE"></feComposite>        <feMerge>            <feMergeNode in="OUTLINE"></feMergeNode>            <feMergeNode in="SourceGraphic"></feMergeNode>        </feMerge>            <feColorMatrix type="matrix" values="0   0   0   0   0                0   1   0   0   0                0   0   0   0   0                0   0   0   1   0 "></feColorMatrix>    </filter></defs>
              </svg>
          </div>



        <div class="col-lg-6 col-md-12 mb-4 mb-md-0 form-comtainer">
          <div class="form-style-6">
             <div class="form-header">
                <h6 class="display">Get in Touch</h6>
              </div>
                <form>
                  <form action="https://formcarry.com/s/S2thQbCqEvW" method="POST" accept-charset="UTF-8" >
                  <input type="text" name="field1" placeholder="Your Name" required/>
                  <input type="email" name="field2" placeholder="Email Address"  required/>
                  <textarea name="field3" placeholder="Type your Message" required></textarea>
                  <input type="submit" value="Send" />
                </form>
             </div>
          </div>
        </div>
    </div>


    

    <div class="rounded-social-buttons tag">
    <a class="social-button twitter" href="#" target="_blank">
    <!-- SVG code for twitter icon -->
    <svg class="twitter-icon-footer" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500"
        xml:space="preserve">
        <!-- bird body -->
        <path id="body" fill="#5DA8DC" d="M142.9,364.1c-1.6,1-3,1.7-4,2.3c-3,1.5-7.9,3.8-14.9,6.9c-7,3.1-14.7,5.7-23.1,7.9
                          c-8.4,2.2-15.6,3.8-21.8,4.7c-6.2,0.9-12.2,1.5-18.1,1.8s-11.4,0.3-16.7,0c-5.2-0.3-8.5-0.5-9.6-0.6l-1.8-0.2l-0.4-0.1l-0.4-0.1v0.8
                          h0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1H33l0.4,0.2l0.4,0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l3.6,2.2c2.4,1.5,4.5,2.6,6.4,3.6
                          s6.6,3.3,14.1,7.1c7.6,3.7,16.6,7.4,27.2,11.1s18.6,6.2,24,7.4c5.4,1.3,12.8,2.6,22.2,3.9s14.9,2.1,16.3,2.2
                          c1.5,0.1,3.3,0.3,5.5,0.4l3.3,0.2v0.2h25.6v-0.2l14-1.3c9.3-0.9,17.6-2.1,25-3.3c7.3-1.3,14.9-3.1,22.8-5.5
                          c7.9-2.4,15.3-4.9,22.4-7.7c7.1-2.8,13.7-5.7,19.7-9c6.1-3.2,11.3-6,15.6-8.5c4.3-2.5,9.1-5.6,14.2-9.3c5.2-3.7,10-7.5,14.6-11.2
                          s7.1-5.9,7.7-6.4c0.6-0.6,4-4,10.2-10.2c6.2-6.3,11.3-11.9,15.4-16.8c4-5,8-10.3,12-15.9c3.9-5.6,8.3-12.5,13-20.6
                          s9.2-17.3,13.5-27.5s8-20.7,11-31.5c3-10.7,5.2-20.4,6.7-28.9s2.4-16.5,3-23.8c0.5-7.3,0.8-13.9,0.9-19.7s2.5-10.8,7.4-14.8
                          s9.9-8.5,15-13.7c5.1-5.1,7.9-8,8.3-8.7c0.5-0.7,0.9-1.1,1.1-1.2c0.3-0.1,2.1-2.3,5.3-6.7c3.3-4.4,5-6.6,5-6.7l0.1-0.1l0.2-0.4
                          l0.2-0.4l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.2-0.1l0.2-0.1V115l-1,0.3l-0.8,0.1
                          l-0.4,0.2l-0.4,0.2l-0.4,0.2l-0.4,0.2l-0.6,0.2l-1.2,0.4l-10.6,3.6c-6.7,2.2-13.7,4.1-21,5.7l-11,2.4h-1.9l0.1-0.1l0.1-0.1l0.1-0.1
                          l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.4-0.2l0.4-0.2l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.4-0.2l0.4-0.2l1.9-1.3
                          c1.3-0.9,2.4-1.8,3.3-2.8s2.8-2.7,5.6-5.1c2.8-2.4,6-6,9.5-10.7s6.5-9.4,8.8-14s3.6-7.2,3.7-7.9c0.1-0.6,0.3-1.2,0.4-1.6l0.2-0.6
                          l0.2-0.4l0.2-0.4l0.2-0.6l0.2-0.6l0.1-0.6l0.1-0.6l-0.4,0.1l-0.4,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.4,0.2l-0.4,0.2
                          l-0.4,0.2l-0.4,0.2l-0.1,0.1c-0.1,0.1-0.8,0.4-1.9,1.2c-1.2,0.7-4.7,2.4-10.5,5s-11.6,5-17.5,7.1s-11.4,3.7-16.5,4.9
                          s-8.8,0.5-11.3-1.9c-2.4-2.4-5.2-4.7-8.3-6.9c-3.1-2.2-6.5-4.3-10.4-6.4c-3.8-2.1-7.7-3.9-11.8-5.5c-4-1.6-8.6-2.9-13.5-3.8
                          l-7.4-1.5h-20.5v0.1c0,0.1-1.7,0.4-5.1,0.9s-7.6,1.6-12.6,3.3c-5,1.7-10.4,4.2-16.3,7.4c-5.9,3.3-11.1,7-15.7,11.2
                          s-8.3,8.3-11.2,12.2c-2.9,3.9-5.2,7.4-7,10.5C221.5,163.3,231.3,307,142.9,364.1z" />

        <!-- wing1 -->
        <path id="wing1" fill="#5DA8DC" d="M233.2,181.5c-5-0.5-12.4-1.7-22.2-3.6c-9.8-1.8-16.8-3.3-20.8-4.5s-11.1-3.7-21.2-7.4
                          c-10.1-3.8-19.5-8-28.3-12.8c-8.8-4.7-16.8-9.5-24-14.4s-13.1-9.1-17.5-12.8c-4.5-3.7-7.1-6-7.9-7s-1.5-1.6-1.9-1.8
                          c-0.5-0.2-3.2-2.7-8-7.6s-9.1-9.2-12.6-13.2l-5.3-5.9l-0.1-0.1l-0.1-0.1L63.1,90l-0.2-0.4l-0.1-0.1l-0.1-0.1l-0.1-0.1l-0.1-0.1
                          l-0.1-0.1L62.3,89l-0.1-0.1l0,0.1l-0.1,0.1L62,89.2l0,0.1l-0.1,0.1L61.7,90l-0.2,0.6L57.9,98c-2.2,5-3.9,9.7-5.1,14.1
                          c-1.2,4.5-1.9,8.5-2.4,12c-0.4,3.5-0.5,7.8-0.4,12.8s0.7,10,1.8,15.1c1,5.1,2.6,10.2,4.6,15.2c2.1,5.1,4,9.2,5.8,12.5
                          c1.8,3.2,3.9,6.4,6.3,9.2c2.4,2.9,4.7,5.6,7.1,8.3s4.6,4.7,6.7,6.4c2.2,1.6,3.3,2.5,3.4,2.5l0.1,0.1l0.4,0.2l0.4,0.2l0.1,0.1
                          l0.1,0.1l0.1,0.1L87,207l0.4,0.2l0.4,0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1H85l-1.8-0.2
                          c-1.2-0.1-4.8-0.9-10.8-2.2s-11.1-2.9-15.1-4.7l-6.1-2.8l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.1l-0.4-0.1l0.7,8.3
                          c0.4,5.5,1.4,11,2.8,16.3c1.5,5.4,3.6,11,6.5,16.9s6.2,11.1,9.8,15.5c3.7,4.5,7,8.1,10.1,11c3.1,2.8,6.3,5.4,9.8,7.8
                          c3.4,2.4,8,4.8,13.8,7.3s9.3,3.9,10.6,4.3c1.3,0.4,2.2,0.6,2.8,0.8l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l-0.1,0.1l-0.1,0.1
                          l-0.1,0.1l-0.1,0.1l-1,0.2l-1,0.2l-0.8,0.2c-0.5,0.1-1.9,0.4-4.3,0.8s-6.6,0.6-12.8,0.8c-6.2,0.1-10.7,0-13.5-0.4l-4.3-0.6L81,288
                          l-0.6-0.1l0.1,0.4l0.1,0.4l0.2,0.6l0.2,0.6l3.2,7.2c2.2,4.8,4.4,9,6.7,12.7c2.3,3.7,5.1,7.2,8.3,10.7c3.2,3.5,5.8,6.2,7.9,8
                          c2.1,1.9,5.3,4.3,9.9,7.2c4.6,2.9,9.3,5.4,14.1,7.4c4.9,2.1,9.4,3.7,13.5,4.7c4.2,1,7.3,1.6,9.2,1.8c1.9,0.1,4,0.3,6.1,0.4l3.1,0.2
                          c117.9-117.9,82.9-167.7,82.9-167.7l-2.8-0.1C241.6,182.3,238.2,181.9,233.2,181.5z" />
        <!-- wing2 -->
        <path id="wing2" fill="#5DA8DC" d="M233.2,181.5c-5-0.5-12.4-1.7-22.2-3.6c-9.8-1.8-16.8-3.3-20.8-4.5s-11.1-3.7-21.2-7.4
                          c-10.1-3.8-19.5-8-28.3-12.8c-8.8-4.7-16.8-9.5-24-14.4s-13.1-9.1-17.5-12.8c-4.5-3.7-7.1-6-7.9-7s-1.5-1.6-1.9-1.8
                          c-0.5-0.2-3.2-2.7-8-7.6s-9.1-9.2-12.6-13.2l-5.3-5.9l-0.1-0.1l-0.1-0.1L63.1,90l-0.2-0.4l-0.1-0.1l-0.1-0.1l-0.1-0.1l-0.1-0.1
                          l-0.1-0.1L62.3,89l-0.1-0.1l0,0.1l-0.1,0.1L62,89.2l0,0.1l-0.1,0.1L61.7,90l-0.2,0.6L57.9,98c-2.2,5-3.9,9.7-5.1,14.1
                          c-1.2,4.5-1.9,8.5-2.4,12c-0.4,3.5-0.5,7.8-0.4,12.8s0.7,10,1.8,15.1c1,5.1,2.6,10.2,4.6,15.2c2.1,5.1,4,9.2,5.8,12.5
                          c1.8,3.2,3.9,6.4,6.3,9.2c2.4,2.9,4.7,5.6,7.1,8.3s4.6,4.7,6.7,6.4c2.2,1.6,3.3,2.5,3.4,2.5l0.1,0.1l0.4,0.2l0.4,0.2l0.1,0.1
                          l0.1,0.1l0.1,0.1L87,207l0.4,0.2l0.4,0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1H85l-1.8-0.2
                          c-1.2-0.1-4.8-0.9-10.8-2.2s-11.1-2.9-15.1-4.7l-6.1-2.8l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.1l-0.4-0.1l0.7,8.3
                          c0.4,5.5,1.4,11,2.8,16.3c1.5,5.4,3.6,11,6.5,16.9s6.2,11.1,9.8,15.5c3.7,4.5,7,8.1,10.1,11c3.1,2.8,6.3,5.4,9.8,7.8
                          c3.4,2.4,8,4.8,13.8,7.3s9.3,3.9,10.6,4.3c1.3,0.4,2.2,0.6,2.8,0.8l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l-0.1,0.1l-0.1,0.1
                          l-0.1,0.1l-0.1,0.1l-1,0.2l-1,0.2l-0.8,0.2c-0.5,0.1-1.9,0.4-4.3,0.8s-6.6,0.6-12.8,0.8c-6.2,0.1-10.7,0-13.5-0.4l-4.3-0.6L81,288
                          l-0.6-0.1l0.1,0.4l0.1,0.4l0.2,0.6l0.2,0.6l3.2,7.2c2.2,4.8,4.4,9,6.7,12.7c2.3,3.7,5.1,7.2,8.3,10.7c3.2,3.5,5.8,6.2,7.9,8
                          c2.1,1.9,5.3,4.3,9.9,7.2c4.6,2.9,9.3,5.4,14.1,7.4c4.9,2.1,9.4,3.7,13.5,4.7c4.2,1,7.3,1.6,9.2,1.8c1.9,0.1,4,0.3,6.1,0.4l3.1,0.2
                          c117.9-117.9,82.9-167.7,82.9-167.7l-2.8-0.1C241.6,182.3,238.2,181.9,233.2,181.5z" />
    </svg>
    </a>

    <a class="social-button linkedin" href="" target="_blank" >
    <!-- svg code for linkedin icon -->
      <svg class="linkedin-icon-footer" xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 24 24" fill="#0e76a8"
        stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>



    <a class="social-button instagram" href="" target="_blank" >
    <!-- svg code for instagram icon -->
      <svg class="instagram-icon-footer" x="0px" y="0px" viewBox="0 0 202.5 202.5"
        style="enable-background:new 0 0 202.5 202.5;">
        <circle id="littleCircle" class="st0" cx="101" cy="101.5" r="18.9" />
        <circle id="shutter" class="st0" cx="101" cy="101.5" r="8" />
        <circle id="lens" class="st0" cx="125.5" cy="78.6" r="2.9" />
        <path id="camera" class="st0" d="M79,60.5h44c10.5,0,19,8.5,19,19v44c0,10.5-8.5,19-19,19H79c-10.5,0-19-8.5-19-19v-44                                                                            C60,69,68.5,60.5,79,60.5z" />
      </svg>
    </a>

    <a class="social-button github" href="#" target="_blank">
    <!-- SVG code for Github icon -->
    <svg class="github-icon-footer" width="45px" height="45px" viewBox="0 0 300 300">
        <!-- body -->
        <path id="body" d="M112.5,234.4v43.1c24.5,7.5,50.5,7.5,75,0V225c-0.4-11.1-4.9-21.6-12.7-29.6c30-3.4,59.5-23.5,59.5-64.1
                                    c0.9-13.9-3.3-27.7-11.8-38.7c4.1-11.6,3.7-24.4-1.3-35.7c0,0-11.2-3.7-37.5,13.8c-22.1-6.1-45.3-6.1-67.4,0
                                    C90.6,53.3,78.9,56.8,78.9,56.8c-5,11.3-5.4,24.1-1.3,35.7c-8.5,11.1-12.7,24.8-11.9,38.7c0.2,33.8,26.4,61.8,60.2,64.1
                                    c-5,4.7-8.1,11.1-8.6,18" />
        <!-- arm                             -->
        <path id="arm" d="M125.2,213.4c-13.9,7.8-31.5,2.8-39.3-11.2c-4.3-7.7-12-12.8-20.7-13.8c-11.2,0-4.6,6.4,0,9.4
                                    c6,5.1,10.8,11.5,13.8,18.8c2.9,7.4,7.7,24.1,41.5,17.8" />
    </svg>
    </a>


    
    </div>
    </div>
</footer>
`);

//"Scroll to top" button
let upArrow = $(`
  <button id="btnScrollToTop" onclick="scrollToTop()"><i class="fas fa-2x fa-angle-up"></i></button>
  <link rel="stylesheet" type="text/css" href="./css/style.css" />
  })
`)

//function for the "Scroll To Top" button to detect the footer
$(document).ready(function () {
  $(window).scroll(function () {
    console.log($(window).scrollTop());
    //The button will be hidden until we scroll more than the window's height
    if ($(window).scrollTop() < $(window).height()) {
      $("#btnScrollToTop").css("visibility", "hidden");
    } else {
      $("#btnScrollToTop").css("visibility", "visible");
      //The button will change it's color when it hits the footer
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 838) {
        // 838 should be changed if footer's height is changed so that the button changes it's color exactly when it hits the footer (preferably 14 less than the computer height of the footer)
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      } else {
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      }
    }
  })
});

//function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

// Window Loads
$(function () {
  let bodyElement = $(`body`);
  bodyElement.prepend(header);
  bodyElement.append(footer);
  bodyElement.append(upArrow);
  $("#btnScrollToTop").css("visibility", "hidden");

  //toggler hamburger functions
  const menuBtn = document.querySelector('.navbar-toggler');
  let menuOpen = false;
  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open')
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  });

});

// function for toggling hamburger is-active class

$(function () {

  $("#js-hamburger").on("click", function () {
    $(this).toggleClass('is-active');
  });

});

// Navbar current page highlight

let loader = document.querySelector('.loader-container');

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear")
}
$(function () {
  $('a.nav-link').each(function () {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current-link');
    }
  });
});

//function to remove underline on hover

$(document).ready(function () {

  $("a.nav-link").hover(
    function () {
      $(this).removeClass("current-link");
    },
    function () {
      if ($(this).prop('href') == window.location.href) {
        $(this).addClass('current-link');
      }
    }
  );
});

function toggle_light_mode() {
  var app = document.getElementsByTagName("HTML")[0];
  var nav = document.getElementById("navbar");
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
    nav.classList.remove("dark-theme");
  } else {
    nav.classList.add("dark-theme");
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
  }
}

window.addEventListener("storage", function () {
  if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
  } else {
    app.setAttribute("light-mode", "light");
  }
}, false);