var slideIndex = 1;
localStorage.setItem("direito", slideIndex);
var fotos1 = [["assets/img/logos/LogoApp.png", "Logo da app"] , ["assets/img/logos/LgoProChild.png", "Logo da prochild"]];
var slides = 2;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}



function showSlides(n) {
    var i;
    console.log(slides);
    var dots = document.getElementsByClassName("dot");
    if (n > slides) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
    localStorage.setItem("direito", slideIndex);
    document.getElementById("mySlides").innerHTML = `<div class="numbertext">${slideIndex} / 3</div> <img src='${fotos1[slideIndex - 1][0]}' style="width:100%"/> <div class="text">${fotos1[slideIndex - 1][1]}</div>`;
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