var slideIndex = 1;
var fotos1 = [
["assets/img/logos/LogoApp.png", "A criança é todo o ser humano com menos de dezoito anos.", "assets/audios/gravacao1.m4a"], 
["assets/img/logos/LgoProChild.png", "Todos os direitos se aplicam a todas as crianças sem exceção.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Todas as decisões que digam respeito à criança devem ter em conta o seu interesse superior. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "O Estado deve fazer tudo o que puder para aplicar os direitos acordados na Convenção. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Os direitos e responsabilidades dos pais na orientação da criança devem ser respeitados.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Direito inerente à vida.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "O Estado deve assegurar a sobrevivência e desenvolvimento da criança.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "A criança tem direito a um nome desde o nascimento e a uma nacionalidade.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "O Estado deve proteger os aspectos fundamentais da identidade da criança. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Direito de viver com os seus pais e de manter contacto com eles caso haja separação.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "As crianças e os seus pais têm o direito de mudar de país para fins de reunificação.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "O Estado deve combater as deslocações e retenções ilegais de crianças no estrangeiro.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Direito de exprimir livremente a sua opinião e que esta seja levada em consideração. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Direito de obter informações e dar a conhecer ideias e informações.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Direito à liberdade de pensamento, consciência e religião.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Direito de se reunir e de se juntar ou formar associações.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Direito de ter a sua vida privada protegida, sem ofensas à sua honra e reputação.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Ter acesso a diversas informações e materiais confiáveis e de diversas fontes.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Direito a ter uma educação responsável proporcionada pelos pais.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "O Estado deve proteger a criança contra todas as formas de maus-tratos e negligência.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "O Estado deve assegurar proteção especial às crianças privadas do seu ambiente familiar.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "A adoção só poderá acontecer segundo o interesse superior da criança e com todas as autorizações necessárias.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Deve ser dada proteção às crianças refugiadas ou que queiram obter o estatuto de refugiadas. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "As crianças com deficiência têm direito a cuidados especiais, educação e formação adequados.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Direito a ter o melhor estado de saúde possível e a beneficiar de serviços médicos. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "As crianças institucionalizadas têm direito a uma revisão periódica da colocação na instituição. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Direito de beneficiar da segurança social e prestações sociais.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Direito a um nível de vida adequado ao desenvolvimento físico, mental, espiritual, moral e social.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Todas as crianças têm direito à educação e o ensino primário deve ser obrigatório e gratuito. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "A educação deve promover o desenvolvimento da personalidade e aptidões mentais e físicas da criança.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Direito de crianças pertencentes a povos indígenas ou minorias a ter a sua própria vida cultural.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Direito ao repouso, a tempos livres e a participar em atividades culturais e artísticas.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Direito à proteção contra trabalhos que ponham em perigo a saúde, educação ou desenvolvimento. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Direito de ser protegida da produção e contra o consumo de drogas.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "O Estado deve proteger a criança contra a violência e todas as formas de exploração.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "O Estado tem a obrigação de fazer tudo para impedir o rapto, venda ou tráfico de crianças.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Nenhuma criança deve ser submetida à tortura, a penas cruéis nem à prisão ilegal. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Criança com menos de 15 anos não podem ser incorporadas nos exércitos nem em conflitos armados. ", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Crianças vítimas de conflitos armados ou exploração devem beneficiar de cuidados adequados.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Crianças culpadas de terem cometido um crime devem ter um tratamento que favoreça a sua dignidade e valor pessoal.", "assets/audios/mariana_teste.mp3"],
["assets/img/logos/LgoProChild.png", "Qualquer lei nacional que seja mais favorável do que a correspondente na Convenção, deve ser aplicada preferencialmente.", "assets/audios/mariana_teste.mp3"]
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
    var i = 0;
    let dots = "";
    if (n > slides) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides }
    if(slideIndex > 5){
        i = slideIndex - 5
    }
    for (i; i < fotos1.length; i++) {
        if(slideIndex == i + 1){
            dots = dots + `<span class="dot active" style="fo" onclick="currentSlide(${i + 1})">${i + 1}</span>`;
        }
        else{
        dots = dots + `<span class="dot" onclick="currentSlide(${i + 1})">${i + 1}</span>`;
        }
        if(slideIndex == i - 3){
            break;
        }
    }   
    document.getElementById("rights-texts").innerHTML = dots;
    document.getElementById("mySlides").innerHTML = `<div class="numbertext">${slideIndex} / ${fotos1.length}</div><br> <br><div><img  class="responsive" src='${fotos1[slideIndex - 1][0]}' style="display: block; width:50%; margin-left: auto; margin-right: auto;"/></div> <br> <br> <div class="text responsive">${fotos1[slideIndex - 1][1]}</p><audio controls src="${fotos1[slideIndex - 1][2]}">AQUI</audio></div> <br> `;

}

function rightNormal(){
    let rights = ``;
    let color = 0;
    let colors = ["background-color: #7CCFD9","background-color: #ED4D83","background-color: #F9D24D","background-color: #B8DD9D"];
    for(i=0;i<fotos1.length;i++){
        rights = rights + `<div class="kids-ages" style= '${colors[color]}'>
        <div class="ages-thumb">
          <div class="ages-img" style='font-size: 120px; color: #ffffff;'>
            ${i+1}
          </div>
          <div class="ages-content">
            <p class="responsive" style="font-size: 20px; color: #ffffff">
              ${fotos1[i][1]}
            </p>
          </div>
        </div>
      </div>`;
        color++;
        if(color > 3){
            color = 0
        }
    }
    document.getElementById("direitos").innerHTML = rights;
}
