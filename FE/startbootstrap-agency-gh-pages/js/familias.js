function saveFamilia() {
    var data = {};
    data.username = document.getElementById("usernameFamily").value;
    let password = document.getElementById("PwdFamily").value;
    let repPwd = document.getElementById("PwdFamily2").value;
    data.email = document.getElementById("mailFamily").value;
    data.tipo = "family";
    data.nome = document.getElementById("nameFamily").value;
    if (document.getElementById("inlineRadio1").checked) {
        data.sexo = document.getElementById("inlineRadio1").value;
    }
    else if (document.getElementById("inlineRadio2").checked) {
        data.sexo = document.getElementById("inlineRadio2").value;
    }
    data.concelho = document.getElementById("countyFamily").value;
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
                window.location.href = "./LoginFamilias.html";
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

function editDataFamily() {


    var requestOptions = {
        method: 'PUT',
        redirect: 'follow'
    };

    fetch(`http://localhost:8080/prochild/users/familias/1?concelho=${document.getElementById("inputConcelho").value}&nome=${document.getElementById("inputNome").value}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        //verificar confirmação password
    fetch(`http://localhost:8080/prochild/users/1?email=${document.getElementById("inputEmail").value}&password=${document.getElementById("inputPassword").value}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}

function fetchFamilia(/*id*/) {
    async function fetchAsync() {
        const response = await fetch(`http://localhost:8080/prochild/users/familias/1`);
        var data = await response.json();
        document.getElementById("inputNome").setAttribute("value", data.nome);
        document.getElementById("inputEmail").setAttribute("value", data.usersId.email);
        document.getElementById("inputConcelho").setAttribute("value", data.concelho);
        document.getElementById("inputUsername").setAttribute("value", data.usersId.username);
        console.log(data.password);

        //document.href = "#detalhes-denuncias";
    }
    fetchAsync()
        .then((data) => console.log("ok"))
        .catch((reason) => console.log(reason.message));
}