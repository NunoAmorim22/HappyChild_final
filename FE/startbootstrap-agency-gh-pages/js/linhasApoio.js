

function showLinhas(){
    let code = ``;
    let colors = ["#43bbc9", "#e5004e", "#f7be00"];
    let color = 0;
    for(i=0;i<linhas.length;i++){
        code = code + `<div class="col-lg-3 col-md-6 mb-4 ">
        <div class="card h-100">
          <img class="card-img-top" src="${linhas[i].imagem}" alt=""> <br>
          <p style="font-weight: bold; font-size:15px; color: ${colors[color]}" class="">${linhas[i].nome}</p>
          <p style="font-weight: bold; font-size:15px; color: ${colors[color]}" class="">${linhas[i].numero}</p>
          <a href="#"> <i class="fas fa-globe fa-3x"></i></a>
        </div>
      </div>`;
      color++;
        if(color > 2){
            color = 0
        }
    }
    document.getElementById("sitioLinhas").innerHTML = code;
}