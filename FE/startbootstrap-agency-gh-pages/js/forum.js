let forum;
function fetchForums() {
    async function fetchAsync() {
      const response = await fetch(`http://localhost:8080/prochild/topicos`);
       forum = await response.json()
      console.log(livros);
      show();
      
    }
    fetchAsync()
      .then((data) => console.log("ok"))
      .catch((reason) => console.log(reason.message));
  }
  
  fetchForums();
  
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
  