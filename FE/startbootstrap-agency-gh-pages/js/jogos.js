let jogos = [
  {
    "nome": 'Jogo do Galo',
    "imagem": 'assets/img/portfolio/jogodogalo.jpg',
    "descricao": 'O "Jogo do Galo", também conhecido por três em linha, pode ser jogado com um papel e lápis por dois jogadores que alternadamente vão desenhando um X e um O numa grelha de tamanho 3 x 3. Ganha o jogador que primeiro conseguir alinhar três símbolos na vertical, na horizontal ou na diagonal.',
    "regras": '1º: Começa por arranjar: um lápis ou caneta; uma folha de papel\n2º: Desenha uma grelha #\n3º: Escolhe com que simbolo vais jogar (X ou O) e começa o jogo',
    "video": '<iframe width="560" height="315" src="https://www.youtube.com/embed/YSbKz66dwVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    "nome": 'Jogo da macaca',
    "imagem": 'assets/img/portfolio/jogomacaca4.jpg',
    "descricao": 'O jogo tradicional da macaca, também conhecido como jogo do pé coxinho, remonta ao tempo das nossas avós. Este jogo tradicional pode ser jogado com apenas duas crianças. Ideal para o ar livre, por exemplo, jardim ou recreio. Material: espaço amplo, desenho de macaca e uma patela para cada jogador (por exemplo uma pequena pedra).',
    "regras": '1º: Desenhar a macaca\n2º: Começa a diversão\nPara jogar, a criança atira a patela para a primeira casa e desloca-se até lá ao pé-coxinho apanhando a mesma e voltando para trás;\nEfectua o mesmo processo até chegar ao último patamar;\nNa casa 4 e 5 e 7 e 8 os dois pés devem ser colocados em simultâneo;\nDepois de saltar as últimas casas é necessário efectuar o percurso contrário.',
    "video": ''
  }
];


function fetchJogos() {
  let outside;

  async function fetchAsync() {
    const response = await fetch(`http://localhost:8080/prochild/jogos`);
    jogos = await response.json()
    console.log(jogos);
    const response2 = await fetch(`http://localhost:8080/prochild/jogos/imagem/1`);
    outside = await response2.blob()
      .then(images => {
        // Then create a local URL for that image and print it 
        let outside1 = URL.createObjectURL(images);
        console.log(outside1);
        console.log(response2);
      });
    showJogos();
  }
  fetchAsync()
    .then((data) => console.log("ok"))
    .catch((reason) => console.log(reason.message));
}


/*.then (res => res.Blob())
    .then(images => {
      // Then create a local URL for that image and print it 
      outside = URL.createObjectURL(images)
      console.log(outside) 
    console.log(res);
*/
fetchJogos();

function showJogos() {
  let table = ``;
  let model = ``;
  for (i = 0; i < jogos.length; i++) {

    table = table + `<div class="col-lg-4 col-sm-6 mb-4">
          <div class="portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${i}">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="${image_url}" alt="" />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">${jogos[i].nome}</div>
              <div class="portfolio-caption-subheading text-muted"></div>
            </div>
          </div>
        </div>`;

    let video = ``
    if (jogos[i].video !== '') {
      video = video + `<div class="iframe-container">
            ${jogos[i].video}
            </div>`;
    }
    else {
      video = video + `<div>
            <img class="img-fluid d-block mx-auto" style="height: 100%; width: 100%; object-fit: contain" src="${image_url}" alt="" />
        </div>`;
    }



    model = model + `<div class="portfolio-modal modal fade" id="portfolioModal${i}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <!--Project Details Go Here-->
                    <h2 class="text-uppercase">${jogos[i].nome}</h2>
                    <p class="item-intro text-muted paragrafo">
                    ${jogos[i].descricao}
                    </p>
                    ${video} 
                    <br>
                    <p class="item-intro text-muted paragrafo">
                    Instruções:
                    ${jogos[i].regras}
                    </p>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fas fa-times mr-1"></i>
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
  document.getElementById("divJogos").innerHTML = table;
  document.getElementById("divModelsJogos").innerHTML = model;
}