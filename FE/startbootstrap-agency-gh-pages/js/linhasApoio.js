let linhas;

let fileContent;
window.addEventListener("load", function () {
  document.getElementById("file").onchange = function (event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.srcElement.files[0]);
    var me = this;
    reader.onload = function () {
      fileContent = reader.result;
      console.log(fileContent);
    }
  }
});

function saveJogo() {
    let data = {};
    data.nome = document.getElementById("nomeLinha").value;
    data.numero = document.getElementById("contactoLinha").value;
    data.imagem = fileContent;
    data.link = document.getElementById("inputSite")
  
    var myHeaders = new Headers();
    //myHeaders.append("Cookie", "JSESSIONID=B082F7E7ABE2EBF64420BBAB600DF404");
    myHeaders.append("Content-Type", "application/json");
  
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: 'follow'
    };
  
    fetch("http://localhost:8080/prochild/linhas", requestOptions)
      .then(function (response) {
        if (!response.ok) {
          console.log(response.status); //=> number 100–599
          console.log(response.statusText); //=> String
          console.log(response.headers); //=> Headers
        } else {
          console.log("Success POST");
          console.log(response);
          window.location.href = "./MenuJogos.html";
        }
      })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  
  }

function fetchLinhas() {
    async function fetchAsync() {
      const response = await fetch(`http://localhost:8080/prochild/linhas`);
      linhas = await response.json()
      console.log(linhas);
      showLinhas();
  
    }
    fetchAsync()
      .then((data) => console.log("ok"))
      .catch((reason) => console.log(reason.message));
  }

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
          <a href="${linhas[i].link}"> <i class="fas fa-globe fa-3x"></i></a>
          <br>
        </div>
      </div>`;
      color++;
        if(color > 2){
            color = 0
        }
    }
    document.getElementById("sitioLinhas").innerHTML = code;
}