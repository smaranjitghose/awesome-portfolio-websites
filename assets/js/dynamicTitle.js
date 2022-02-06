window.onload = function () {
  const favicon = document.getElementById("favicon");
  let pageTitle = document.title;
  let attentionMessage = "Come back";

  document.addEventListener("visibilitychange", function (e) {
    let isPageActive = !document.hidden;

    if (!isPageActive) {
      toggle();
    } else {
      document.title = pageTitle;
    }
  });

  document.addEventListener("visibilitychange", function (e) {
    if (!document.hidden) {
      document.title = pageTitle;
      favicon.href = "./assets/images/dp_male.svg";
    }
  });

  function toggle() {
    if (document.title === attentionMessage) {
        document.title = pageTitle;
        favicon.href = "./assets/images/dp_male.svg";
    } else {
        document.title = attentionMessage;
        favicon.href = "./assets/images/folded.png";
    }
  }   
};