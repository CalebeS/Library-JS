let contador = 0
const tbody = document.getElementById("tbody");

const form = document.getElementById("form"); 
console.log(form);

const handleSubmit = function (event) {
    console.log(event)
    event.preventDefault()
    const formData = new FormData(form);
    const title = formData.get("title");
    const author = formData.get("author");
    const pages = formData.get("pages");
    const readed = formData.get("readed");
    contador = contador+1
    tbody.innerHTML = `
        <tr id="livro-${contador}">
            <td>${title}</td>
            <td>${author}</td>
            <td>${pages}</td>
            <td>${readed}</td>
            <td>
                <button onclick="excluir('livro-${contador}')"> 
                    excluir
                </button>
            </td>
        </tr>
        ${tbody.innerHTML}
    `
}

function excluir() {
    const tr = document.getElementById("tbody");
    tr.removeChild(tr.firstElementChild)
}

form.addEventListener ("submit", handleSubmit)