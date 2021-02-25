

window.onload = function () {
  const favicon = document.getElementById("favicon");
  let pageTitle = document.title;
  let attentionMessage = "Come back";
  let blinkEvent = null;

  document.addEventListener("visibilitychange", function (e) {
    let isPageActive = !document.hidden;

    if (!isPageActive) {
      blink();
    } else {
      document.title = pageTitle;
      clearInterval(blinkEvent);
    }
  });

  document.addEventListener("visibilitychange", function (e) {
    if (!document.hidden) {
      document.title = pageTitle;
      favicon.href = "./assets/images/dp_male.svg";
    }
  });

  function blink() {
    blinkEvent = setInterval(() => {
      if (document.title === attentionMessage) {
        document.title = pageTitle;
        favicon.href = "./assets/images/dp_male.svg";
      } else {
        document.title = attentionMessage;
        favicon.href = "./assets/images/folded.png";
      }
    }, 1000);
  }
};