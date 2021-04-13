let forum;

function addDiscuss() {
    let data = {};
    data.nome = document.getElementById("novaDiscussaoTitulo").value;
    data.descricao = document.getElementById("novaDiscussaoTexto").value;
    data.userId = {
        "id": 1,
        "username": "gil",
        "email": "berto@gmail.com",
        "password": "$2a$10$8Y94FGrtjXAjpGqUT2RrtOObb1Io0nwoWX2BnnwjTCJasr03cI8lm",
        "tipo": "instituicao",
        "enabled": true,
        "authorities": [
            {
                "authority": "instituicao"
            }
        ],
        "accountNonLocked": true,
        "accountNonExpired": true,
        "credentialsNonExpired": true
    };
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
          window.location.href = "./MenuJogos.html";
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
      show();
      
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
    for (let r of forum) {
      tab += `<tbody>
      <tr>
          <td>
              ${forum[r].nome}
          </td>
          <td>
              ${forum[r].autor}
          </td>
          <td>
              <a onclick="showDetail(${forum[r].id})"><i class="fas fa-search-plus"></i> </a>
          </td>

      </tr>
  </tbody>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("discussTable").innerHTML = tab;
  }
  