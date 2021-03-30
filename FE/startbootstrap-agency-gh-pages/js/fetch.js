//---------------------funcao para fazer Post de utilizadores-----------------------------------------

function saveSuspect() {
    var data = {};
    data.username = document.getElementById("exampleFirstName").value;
    data.email = document.getElementById("exampleInputEmail").value;
    data.password = document.getElementById("exampleInputPassword").value;
    data.tipo = "familia";
  
    console.log(data); //debugging para ver os dados que foram enviados
  
    //chamada fetch para envio dos dados para o servior via POST
    fetch( 'http://localhost:8080/users',
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

  
  function verImagem() {
    let outside;
    fetch( 'http://localhost:8080/prochild/livros');
    const users1 = await response1.json();
    console.log(users1);/*
    .then (res => res.Blob())
    .then(images => {
      // Then create a local URL for that image and print it 
      outside = URL.createObjectURL(images)
      console.log(outside) 
    console.log(res);*/
  }
