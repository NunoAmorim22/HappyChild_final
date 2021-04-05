//funcao que faz get de todas as denuncias e coloca na tabela
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
  let tab = `<tr><th>Nome</th> <th>Contacto</th></tr>`;

  // Loop to access all rows
  for (let r of data) {
    tab += `<tr><td>${r.nome} </td> <td>${r.contacto}</td> <td><a class="btn" onclick = "showDetails(${r.id})"><i class="fas fa-search-plus"></i></a></td></tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("dataTableLinhas").innerHTML = tab;
}
