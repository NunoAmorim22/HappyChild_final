let forum;
let messages;
function addDiscuss() {
    let data = {};
    data.nome = document.getElementById("novaDiscussaoTitulo").value;
    data.descricao = document.getElementById("novaDiscussaoTexto").value;
    data.usersId = "1";
    console.log(data);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };

    fetch("http://localhost:8080/prochild/topicos", requestOptions)
        .then(function (response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
            } else {
                console.log("Success POST");
                console.log(response);
                window.location.href = "./MenuForum.html";
            }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


}
function answer(topico) {
    let data = {};
    data.conteudo = document.getElementById("novaMensagem").value;
    data.usersId = "1";
    data.topicosId = topico;
    console.log(data);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };

    fetch("http://localhost:8080/prochild/mensagens", requestOptions)
        .then(function (response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
            } else {
                console.log("Success POST");
                console.log(response);
                window.location.href = "./MenuForum.html";

            }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


}

function fetchForums() {
    async function fetchAsync() {
        const response = await fetch(`http://localhost:8080/prochild/topicos`);
        forum = await response.json()
        console.log(forum);
        console.log(forum.length);
        if(window.location.href === "index.html"){
            document.getElementById("totalTopicos").innerHTML = forum.length;
        }
        show();

    }
    fetchAsync()
        .then((data) => console.log("ok"))
        .catch((reason) => console.log(reason.message));
}

function fetchMessages() {
    async function fetchAsync() {
        const response = await fetch(`http://localhost:8080/prochild/mensagens`);
        messages = await response.json()
        console.log(messages);
        console.log(messages.length);
        reloadSame();

    }
    fetchAsync()
        .then((data) => console.log("ok"))
        .catch((reason) => console.log(reason.message));
}

function show() {
    let tab = ` <thead>
    <th>
        Nome
    </th>
    <th>
        Autor
    </th>
    <th>

    </th>
</thead>`;

    // Loop to access all rows
    for (let r = 0; r < forum.length; r++) {
        tab += `<tbody>
      <tr>
          <td>
              ${forum[r].nome}
          </td>
          <td>
              ${forum[r].usersId.username}
          </td>
          <td>
              <a onclick="showDetail(${forum[r].id}, '${forum[r].nome}', '${forum[r].descricao}'); "><i class="fas fa-search-plus"></i> </a>
              <a name="garbage" id="${forum[r].usersId.id}" style="display: none;" onclick="deleteMessage(${forum[r].id});"><i class="far fa-trash-alt"></i> </a>
          </td>

      </tr>
  </tbody>`;
  console.log(forum[r].descricao);
    }
    // Setting innerHTML as tab variable
    document.getElementById("discussTable").innerHTML = tab;

    garbage();
}
fetchMessages();
function showDetail(id, title, descricao) {
    localStorage.setItem("titleMessage", title);
    localStorage.setItem("idMessage", id);
    localStorage.setItem("descMessage", descricao);
    document.getElementById("titulo").innerHTML = title;
    document.getElementById("sexaoMensagem").style.display = "";
    document.getElementById("descricao").innerHTML = descricao;
    let resp = `<thead>
    <th>
        Mensagem
    </th>
    <th>
        Autor
    </th>
</thead>
<tbody>`;
    console.log(messages);
    for (let i = 0; i < messages.length; i++) {
        if (messages[i].topicosId.id == id) {
            resp += `
            <tr>
                <td>
                ${messages[i].conteudo}
                </td>
                <td>
                ${messages[i].usersId.username}
                </td>
            </tr>
       `;        
        }
    }
    resp += `</tbody>`;
    document.getElementById("messageTable").innerHTML = resp;
    console.log(id);
    document.getElementById("btnSendAnswer").setAttribute("onclick", `answer(${id})`);
}

function reloadSame() {
    if (localStorage.hasOwnProperty("titleMessage") && localStorage.hasOwnProperty("idMessage")) {
        showDetail(localStorage.getItem("idMessage"), localStorage.getItem("titleMessage"), localStorage.getItem("descMessage"));
    }
}


function deleteMessage(id) {
    var requestOptions = {
        method: 'DELETE',
    };
    console.log(id);
    //selecionar o id do jogo selecionado
    for(let i=0;i<messages.length;i++){
        let message = messages[i].topicosId.id;
        if(message == id){
            fetch(`http://localhost:8080/prochild/mensagens/${messages[i].id}`, requestOptions)
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
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error)); 
        }
    }
    deleteForum(id);
}
function deleteForum(params) {
    var requestOptions = {
        method: 'DELETE',
    };

    fetch(`http://localhost:8080/prochild/topicos/${params}`, requestOptions)
        .then(function (response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
            } else {
                console.log("Success POST");
                console.log(response);
                localStorage.removeItem("idMessage");
                localStorage.removeItem("titleMessage");
                localStorage.removeItem("descMessage");
                window.location.href = "./MenuForum.html";
            }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}
