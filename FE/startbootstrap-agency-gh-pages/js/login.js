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
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/login", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
}