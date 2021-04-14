function login() {
  var myHeaders = new Headers();


  var formdata = new FormData();
  formdata.append("username", document.getElementById("inputEmail").value);
  formdata.append("password", document.getElementById("inputPassword").value);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
    mode: "no-cors"
  };

  fetch("http://localhost:8080/prochild/login", requestOptions)
    .then(response => console.log(response))
    .then(result => {
      window.location.href = './MenuPrincipal.html';
    })
    .catch(error => console.log('error', error))
}

function recuperarPassword() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var data = {};
  data.username = document.getElementById("inputUsername").value,
  data.email = document.getElementById("inputEmail").value

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow'
  };

  fetch("http://localhost:8080/prochild/email", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}