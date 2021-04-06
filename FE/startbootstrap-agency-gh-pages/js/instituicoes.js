function saveInstitution() {
  var data = {};
  data.username = document.getElementById("exampleFirstName").value;
  data.email = document.getElementById("exampleInputEmail").value;
  let password = document.getElementById("InputPwd").value;
  let repPwd = document.getElementById("InputPwd2").value;
  data.tipo = "instituicao";
  data.nome = document.getElementById("exampleFirstName").value;
  data.localizacao = "!!!"
  data.conselho = document.getElementById("InputConcelho").value;
  data.funcao = document.getElementById("InputFuncao").value;


  if (password === "" || repPwd === "") {
    return false;
  }
  else if (password !== repPwd) {
    return false;
  }
  else {
    data.password = password;
  }
  console.log(data); //debugging para ver os dados que foram enviados

  //chamada fetch para envio dos dados para o servior via POST
  fetch('http://localhost:8080/prochild/users/instituicoes',
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

//ver
function EditProfileInstituition() {
  var data = {};
  let id_instituitions = localStorage.getItem("!!!!!");
  data.email = document.getElementById("inputEmail").value;
  data.name = document.getElementById("inputNome").value;
  let palavraPass = document.getElementById("passwordEditar").value;
  let rep_password = document.getElementById("rep_passwordEditar").value;
  data.funcao = document.getElementById("inputFuncao").value;
  if (
    palavraPass === "" ||
    rep_password === "" ||
    data.email === "" ||
    data.name === ""
  ) {
   /* swal
      .fire({
        icon: "warning",
        title: "Alerta!",
        text: "Preencha todos os campos!",
      })
      .then(function () {
        console.log("The Ok Button was clicked.");
      });*/
    document.getElementById("inputPassword").focus();
    return false;
  } else if (palavraPass != rep_password) {
   /* swal
      .fire({
        icon: "warning",
        title: "Alerta!",
        text: "Senhas diferentes!",
      })
      .then(function () {
        console.log("The Ok Button was clicked.");
      });*/
    document.getElementById("inputPassword").focus();
    return false;
  } else {
    data.password = palavraPass;
  }

  console.log(data); //debugging para ver os dados que foram enviados

  //chamada fetch para envio dos dados para o servior via PUT


  //Como no login temos de ir buscar as informações depois faz se o put por id
  fetch(
    `link here`,
    {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify(data),
    }
  )
    .then(function (response) {
      if (!response.ok) {
        console.log(response.status); //=> number 100â€“599
        console.log(response.statusText); //=> String
        console.log(response.headers); //=> Headers
      } else {
        console.log("Success PUT");
        console.log(response);
        /*swal
          .fire({
            icon: "success",
            title: "Sucesso!",
            text: "Perfil Atualizado",
          })
          .then(function () {
            // Redirect the user
            window.location.href = "./Perfil.html";
            console.log("The Ok Button was clicked.");
          });*/
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


