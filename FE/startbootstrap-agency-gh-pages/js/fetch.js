//---------------------funcao para fazer Post de utilizadores-----------------------------------------

function saveSuspect() {
  var data = {};
  data.username = document.getElementById("exampleFirstName").value;
  data.email = document.getElementById("exampleInputEmail").value;
  data.password = document.getElementById("exampleInputPassword").value;
  data.tipo = "familia";

  console.log(data); //debugging para ver os dados que foram enviados

  //chamada fetch para envio dos dados para o servior via POST
  fetch('http://localhost:8080/users',
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
/*
function verImagem() {
  fetch('http://localhost:8080/prochild/users/familias', {
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    method: "GET"
  })
  .then(res => res.json())
  .then((out) => {
    console.log(out);
  })
}*/