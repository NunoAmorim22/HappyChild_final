function login() { 
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
   
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("username", document.getElementById("emailcor").value);
    urlencoded.append("password", document.getElementById("passwordCor").value);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      mode: "no-cors"
    };
    
    fetch("http://localhost:8080/prochild/login", requestOptions)
      .then(response => response.text())
      .then(result => {
        window.location.href = './MenuPrincipal.html';
        })
      .catch(error => console.log('error', error))
}