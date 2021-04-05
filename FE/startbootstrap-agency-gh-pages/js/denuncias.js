//funcao que faz get de todos os operacionais aceites e coloca na tabela para acesso do admin
const api_url = "link here";

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
    const response = await fetch(`link here ${id}`);
    var data = await response.json();

    document.getElementById("idDenuncia").setAttribute("value", data[0].id);
    document.getElementById("descricaoDenuncia").setAttribute("value", data[0].acontecimento);
    document.getElementById("dataDenuncia").setAttribute("value", data[0].data);
    document.getElementById("localDenuncia").setAttribute("value", data[0].localizacao);
    }
    fetchAsync()
      .then((data) => console.log("ok"))
      .catch((reason) => console.log(reason.message));
}