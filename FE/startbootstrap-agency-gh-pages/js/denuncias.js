//funcao que faz get de todas as denuncias e coloca na tabela
const api_url = "http://localhost:8080/prochild/denuncias";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
}

// Function to define innerHTML for HTML table
function show(data) {
  let tab = `<tr><th>Nº de denuncia</th> <th>Descrição</th></tr>`;

  // Loop to access all rows
  for (let r of data) {
    tab += `<tr><td>${r.id} </td> <td>${r.acontecimento}</td> <td><a class="btn" onclick = "showDetails(${r.id})"><i class="fas fa-search-plus"></i></a></td></tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("dataTable").innerHTML = tab;
}


//Aqui o fetch das informacoes!!
function showDetails(id){
    async function fetchAsync() {
    const response = await fetch(`http://localhost:8080/prochild/denuncias/${id}`);
    var data = await response.json();

    document.getElementById("idDenuncia").setAttribute("value", data.id);
    document.getElementById("descricaoDenuncia").setAttribute("value", data.acontecimento);
    document.getElementById("dataDenuncia").setAttribute("value", data.data);
    document.getElementById("localDenuncia").setAttribute("value", data.localizacao); 

    document.href="#detalhes-denuncias";
    }
    fetchAsync()
      .then((data) => console.log("ok"))
      .catch((reason) => console.log(reason.message));
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
   ~console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  console.log(position.coords.latitude + "\n" + position.coords.longitude);
}

getLocation();