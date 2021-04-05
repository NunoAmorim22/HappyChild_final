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
    tab += `<tr><td>${r.nome} </td> <td>${r.contacto}</td> <td><a class="btn" onclick =""><i class="fas fa-phone-alt"></i></a></td></tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("dataTableLinhas").innerHTML = tab;
}


function saveLinhaDeApoio() {
    var data = {};
    data.nome = document.getElementById("nomeLinha").value;
    data.contacto = document.getElementById("contactoLinha").value;
    

    

    console.log(data); //debugging para ver os dados que foram enviados

    //chamada fetch para envio dos dados para o servior via POST
    fetch('http://localhost:8080/prochild/ Poe o resto aqui',
        {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(data),
        }
    )
        .then(function (response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
            } else {
                console.log("Success POST");
                console.log(response);
            }
        })
        .then(function (result) {
            console.log(result);
        })
        .catch(function (err) {
            alert("Submission error");
            console.error(err);
        });
}
