var slideIndex = 1;
var fotos1 = [["assets/img/logos/LogoApp.png", "<p> As armas e os barões assinalados <p>Que, da Ocidental praia Lusitana, <p>Por mares nunca dantes navegados <p>Passaram ainda além da Taprobana, <p>Em perigos e guerras esforçados <p>Mais do que prometia a força humana <p>E entre gente remota edificaram <p>Novo Reino, que tanto sublimaram;", "assets/audios/gravacao1.m4a"], ["assets/img/logos/LgoProChild.png", "Logo da prochild", "assets/audios/gravacao.m4a"]];
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
    let dots = "";
    if (n > slides) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides }
    for (i = 0; i < fotos1.length; i++) {
        if(slideIndex == i + 1){
            dots = dots + `<span class="dot active" onclick="currentSlide(${i + 1})"></span>`;
        }
        else{
        dots = dots + `<span class="dot" onclick="currentSlide(${i + 1})"></span>`;
        }
    }   
    document.getElementById("rights-texts").innerHTML = dots;
    document.getElementById("mySlides").innerHTML = `<div class="numbertext">${slideIndex} / ${fotos1.length}</div><br> <br><div><img src='${fotos1[slideIndex - 1][0]}' style="width:100%"/></div> <br> <br> <div class="text">${fotos1[slideIndex - 1][1]}</p><audio controls src="${fotos1[slideIndex - 1][2]}">AQUI</audio></div> <br> `;

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