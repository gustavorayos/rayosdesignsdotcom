
(adsbygoogle = window.adsbygoogle || []).push({
  google_ad_client: "ca-pub-6240170246039145",
  enable_page_level_ads: true
});

// Javascript used to toggle the menu on small screens when clicking on the menu
// button
function myFunction() {
  var x = document.getElementById("navDemo"); if
  (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
// When the user scrolls the page, execute stickyBar 
window.onscroll = function () { stickyBar() };
// Get the navbar
var stickyNav = document.getElementById("stickyNav");
// Get the offset position of the navbar
var sticky = stickyNav.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyBar() {
  if (window.pageYOffset >= sticky) {
    stickyNav.classList.add("sticky")
  } else {
    stickyNav.classList.remove("sticky");
  }
}

//Javascript used to have manual slideshow with bottons
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

function myFunction4(x) {
  x.classList.toggle("change");
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
