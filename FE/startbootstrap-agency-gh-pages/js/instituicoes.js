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


    if(password === "" || repPwd === ""){
      return false;
    }
    else if(password !== repPwd){
      return false;
    }
    else{
      data.password = password;
    }
    console.log(data); //debugging para ver os dados que foram enviados
  
    //chamada fetch para envio dos dados para o servior via POST
    fetch('http://localhost:8080/users/instituicoes',
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
  