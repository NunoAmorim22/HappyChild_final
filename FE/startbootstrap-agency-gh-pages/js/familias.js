function saveFamilia() {
    var data = {};
    data.username = document.getElementById("nameFamily").value;
    let password = document.getElementById("PwdFamily").value;
    let repPwd = document.getElementById("PwdFamily2").value;
    data.email = document.getElementById("mailFamily").value;
    data.tipo = "familia";
    data.nome = document.getElementById("nameFamily").value;
    if (document.getElementById("inlineRadio1").checked) {
        data.sexo = document.getElementById("inlineRadio1").value;
    }
    else if (document.getElementById("inlineRadio2").checked) {
        data.sexo = document.getElementById("inlineRadio2").value;
    }
    data.localizacao = "1111";
    data.concelho = document.getElementById("countyFamly");

    if (password === "" || repPwd === "") {
        return false;
    }
    else if (password !== repPwd) {
        return false;
    }
    else {
        data.password = password;
    }
    /*data.nome = "Ruca";
    data.email = "ruca@gmail.com";
    data.username = "Ruca";
    data.password = "1234";
    data.tipo = "familia";
    data.sexo = "M";
    data.localizaca = "!!!";
    data.concelho = "Guimarães";*/

    console.log(data); //debugging para ver os dados que foram enviados

    //chamada fetch para envio dos dados para o servior via POST
    fetch('http://localhost:8080/prochild/users/familias',
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


//Eviar dados de perfil editados para a base de dados
function EditProfileFamily() {
    var data = {};
    let id_family = localStorage.getItem("!!!!!");
    data.email = document.getElementById("inputEmail").value;
    data.name = document.getElementById("inputNome").value;
    let palavraPass = document.getElementById("passwordEditar").value;
    let rep_password = document.getElementById("rep_passwordEditar").value;
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
