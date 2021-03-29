var slideIndex = 1;
var fotos1 = [
["assets/img/logos/LogoApp.png", "1.	A criança é todo o ser humano com menos de dezoito anos.", "assets/audios/gravacao1.m4a"], 
["assets/img/logos/LgoProChild.png", "2.	Todos os direitos se aplicam a todas as crianças sem exceção.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "3.	Todas as decisões que digam respeito à criança devem ter em conta o seu interesse superior. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "4.	O Estado deve fazer tudo o que puder para aplicar os direitos acordados na Convenção. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "5.	Os direitos e responsabilidades dos pais na orientação da criança devem ser respeitados.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "6.	Direito inerente à vida.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "7.	O Estado deve assegurar a sobrevivência e desenvolvimento da criança.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "8.	A criança tem direito a um nome desde o nascimento e a uma nacionalidade.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "9.	O Estado deve proteger os aspectos fundamentais da identidade da criança. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "10.	Direito de viver com os seus pais e de manter contacto com eles caso haja separação.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "11.	As crianças e os seus pais têm o direito de mudar de país para fins de reunificação.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "12.	O Estado deve combater as deslocações e retenções ilegais de crianças no estrangeiro.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "13.	Direito de exprimir livremente a sua opinião e que esta seja levada em consideração. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "14.	Direito de obter informações e dar a conhecer ideias e informações.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "15.	Direito à liberdade de pensamento, consciência e religião.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "16.	Direito de se reunir e de se juntar ou formar associações.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "17.	Direito de ter a sua vida privada protegida, sem ofensas à sua honra e reputação.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "18.	Ter acesso a diversas informações e materiais confiáveis e de diversas fontes.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "19.	Direito a ter uma educação responsável proporcionada pelos pais.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "20.	O Estado deve proteger a criança contra todas as formas de maus-tratos e negligência.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "21.	O Estado deve assegurar proteção especial às crianças privadas do seu ambiente familiar.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "22.	A adoção só poderá acontecer segundo o interesse superior da criança e com todas as autorizações necessárias.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "23.	Deve ser dada proteção às crianças refugiadas ou que queiram obter o estatuto de refugiadas. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "24.	As crianças com deficiência têm direito a cuidados especiais, educação e formação adequados.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "25.	Direito a ter o melhor estado de saúde possível e a beneficiar de serviços médicos. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "26.	As crianças institucionalizadas têm direito a uma revisão periódica da colocação na instituição. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "27.	Direito de beneficiar da segurança social e prestações sociais.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "28.	Direito a um nível de vida adequado ao desenvolvimento físico, mental, espiritual, moral e social.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "29.	Todas as crianças têm direito à educação e o ensino primário deve ser obrigatório e gratuito. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "30.	A educação deve promover o desenvolvimento da personalidade e aptidões mentais e físicas da criança.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "31.	Direito de crianças pertencentes a povos indígenas ou minorias a ter a sua própria vida cultural.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "32.	Direito ao repouso, a tempos livres e a participar em atividades culturais e artísticas.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "33.	Direito à proteção contra trabalhos que ponham em perigo a saúde, educação ou desenvolvimento. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "34.	Direito de ser protegida da produção e contra o consumo de drogas.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "35.	O Estado deve proteger a criança contra a violência e todas as formas de exploração.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "36.	O Estado tem a obrigação de fazer tudo para impedir o rapto, venda ou tráfico de crianças.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "37.	Nenhuma criança deve ser submetida à tortura, a penas cruéis nem à prisão ilegal. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "38.	Criança com menos de 15 anos não podem ser incorporadas nos exércitos nem em conflitos armados. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "39.	Crianças vítimas de conflitos armados ou exploração devem beneficiar de cuidados adequados.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "40.	Crianças culpadas de terem cometido um crime devem ter um tratamento que favoreça a sua dignidade e valor pessoal.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "41.	Qualquer lei nacional que seja mais favorável do que a correspondente na Convenção, deve ser aplicada preferencialmente.", "assets/audios/mariana_teste.mp3"]
];
var slides = fotos1.length;
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
            dots = dots + `<span class="dot active" onclick="currentSlide(${i + 1})">${i + 1}</span>`;
        }
        else{
        dots = dots + `<span class="dot" onclick="currentSlide(${i + 1})">${i + 1}</span>`;
        }
    }   
    document.getElementById("rights-texts").innerHTML = dots;
    document.getElementById("mySlides").innerHTML = `<div class="numbertext">${slideIndex} / ${fotos1.length}</div><br> <br><div><img  class="responsive" src='${fotos1[slideIndex - 1][0]}' style="display: block; width:50%; margin-left: auto; margin-right: auto;"/></div> <br> <br> <div class="text responsive">${fotos1[slideIndex - 1][1]}</p><audio controls src="${fotos1[slideIndex - 1][2]}">AQUI</audio></div> <br> `;

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