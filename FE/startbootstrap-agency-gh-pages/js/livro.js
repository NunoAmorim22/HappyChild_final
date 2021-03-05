var slideIndex = 1;
localStorage.setItem("direito", slideIndex);
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

let fotos1 = ["assets/img/logos/LogoApp.png", "Logo da app"];
let fotos2 = ["assets/img/logos/LogoProChild.png", "Logo da prochild"];
var slides = 2;

function showSlides(n) {
    var i;
    console.log(slides);
    var dots = document.getElementsByClassName("dot");
    if (n > slides) {slideIndex = 1}
    if (n < 1) {slideIndex = slides}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex-1].className += " active";
    localStorage.setItem("direito", slideIndex);
    
  }
/*
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  localStorage.setItem("direito", slideIndex);
}*/