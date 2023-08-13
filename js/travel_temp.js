document.addEventListener("DOMContentLoaded", () => {
  /* dynamic load */
  const travelSummary = document.querySelector(".main");

  // json variable for injecting html into DOM
  const travel_data = [
    {
      day: "Day 1",
      description: "description",
      background_image: "assets/images/travel/trip1/street.jpg"
    },
    {
      day: "Day 2",
      description: "description",
      background_image: "assets/images/travel/trip1/qutub_minar.jpg"
    },
    {
      day: "Day 3",
      description: "description",
      background_image: "assets/images/travel/trip1/lotus_temple.jpg"
    },
    {
      day: "Day 4",
      description: "description",
      background_image: "assets/images/travel/trip1/old_fort.jpg"
    },
    {
      day: "Day 5",
      description: "description",
      background_image: "assets/images/travel/trip1/red_fort.jpg"
    }
  ];

  // AOS.init();
  const fillData = () => {
    let output = "";
    travel_data.forEach(
      ({ day, description, background_image }, index) => {
        output += `
    <div class="el">
    <div class="el__overflow">
        <div class="el__inner">
            <div class="el__bg"></div>
            <div class="el__preview-cont">
                <h2 class="el__heading">${day}</h2>
            </div>
            <div class="el__content">
                <div class="el__text">${description}</div>
                <div class="el__close-btn"></div>
            </div>
        </div>
    </div>
    <div class="el__index">
        <div class="el__index-back">${index + 1}</div>
        <div class="el__index-front">
            <div class="el__index-overlay" data-index="${index + 1}">${index + 1}</div>
        </div>
    </div>
</div>`

        /* adding style to stylesheet */
        document.styleSheets[0].addRule(`.el:nth-child(${index + 1}) .el__bg:before`, `background-image: url("${background_image}");`);

      });

    travelSummary.innerHTML = output;

  };

  fillData();

  // document.addEventListener("DOMContentLoaded", fillData);
  /* dynamic load */

  var $cont = document.querySelector('.cont');
  var $elsArr = [].slice.call(document.querySelectorAll('.el'));
  var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

  setTimeout(function () {
    $cont.classList.remove('s--inactive');
  }, 200);

  $elsArr.forEach(function ($el) {
    $el.addEventListener('click', function () {
      if (this.classList.contains('s--active')) return;

      /* added */
      const mediaQuery = window.matchMedia('(max-width: 700px)')
      // Check if the media query is true
      if (mediaQuery.matches) {
        $cont.style.height = "80vh";
      }
      else {
        $cont.style.height = "120vh";
      }

      document.styleSheets[0].addRule(".el__bg:before", "background-repeat: no-repeat; background-size: contain !important; background-position: center center !important;");
      /* added */

      $cont.classList.add('s--el-active');
      this.classList.add('s--active');
    });
  });

  $closeBtnsArr.forEach(function ($btn) {
    $btn.addEventListener('click', function (e) {

      /* added */
      $cont.style.height = "70vh";
      document.styleSheets[0].addRule(".el__bg:before", "background-size: 100% 100% !important;");
      /* added */

      e.stopPropagation();
      $cont.classList.remove('s--el-active');
      document.querySelector('.el.s--active').classList.remove('s--active');
    });
  });
});
