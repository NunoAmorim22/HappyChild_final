/*
function verImagem() {
  async function fetchAsync() {

  let response = await fetch('http://localhost:8080/prochild/livros', {
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    method: "GET"
  })
  let vari = await response.json();
  console.log(vari);
  /*const variavel = response.json();
  console.log(variavel);*/
  /*.then(res => res.json())
  .then((out) => {
    console.log(out[0]);
  })*/
  //console.log(users1);
  /*
    .then (res => res.Blob())
    .then(images => {
      // Then create a local URL for that image and print it 
      outside = URL.createObjectURL(images)
      console.log(outside) 
    console.log(res);
}
fetchAsync()
      .then((data) => console.log("ok"))
      
}
*/

function verImagem() {
  async function fetchAsync() {
    const response = await fetch(`http://localhost:8080/prochild/livros`);
    var data = await response.json();
    console.log(data);
  }
  fetchAsync()
    .then((data) => console.log("ok"))
    .catch((reason) => console.log(reason.message));
}

verImagem();

  
/*
//ver!!!!
function verImagem() {
  let outside

  fetch('http://localhost:8080/prochild/livros/capa/1')
  .then(response => response.blob())
  .then(images => {
      // Then create a local URL for that image and print it 
      outside = URL.createObjectURL(images)
      console.log(outside)
      document.getElementById("imagemteste").src = outside;
  })
  }
*/
//----------------------------------------------------------------------------------------------------------------------
//funcao de login como user normal
function LoginAdmin() {
  var data = {};
  data.email = document.getElementById("inputEmail").value;
  data.password = document.getElementById("inputPassword").value;

  if (data.email == "" || data.password == "") {
    document.getElementById("labelErro").style.display = "block";
    return false;
  }

  console.log(data);
  fetch(``, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(function (response) {
      if (!response.ok) {
        console.log(response.status); //=> number 100–599
        console.log(response.statusText); //=> String
        console.log(response.headers); //=> Headers

      } else {
        console.log("Success POST");
        console.log(response);
        //chama a funcao que faz o get dos dados
        ToFetchLoginDataAdmin();
      }
    })
    .then(function (result) {
      console.log(result);
    })
    .catch(function (err) {
      console.error(err);
    });
}

//funcao que retorna os dados do admin
function ToFetchLoginDataAdmin() {
  async function fetchAsync() {
    var data1 = {};
    data1.email = document.getElementById("inputEmail").value;

    const renderUsers = document.getElementById("result");
    const response = await fetch(
      ``,
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data1),
      }
    );
    const users = await response.json();
    localStorage.setItem("tipo", users[0].tipo);

    window.location.href = "./Index.html";
  }
  //chama a função fetchAsync()
  fetchAsync()
    .then((data) => console.log("ok"))
    .catch((reason) => console.log(reason.message));
}