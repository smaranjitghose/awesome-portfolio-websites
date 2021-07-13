let mouseCursor = document.querySelector(".cursor");
let dot = document.querySelector(".cursor-dot");


window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseleave', function () {
        mouseCursor.classList.remove("link-grow");
    });
    link.addEventListener('mouseover', function () {
        mouseCursor.classList.add("link-grow");
    });
   
});

document.addEventListener('mousedown', function() {
  mouseCursor.classList.add("link-grow");
});
document.addEventListener('mouseup', function() {
    mouseCursor.classList.remove("link-grow");
});
