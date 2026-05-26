export function renderBooks(
books
){

const container =
document.getElementById(
"books-container"
);

container.innerHTML="";

books.forEach(book=>{

container.innerHTML += `

<div class="bg-white p-4 rounded shadow">

<h2>

${book.title}

</h2>

<p>

${book.author_name?.[0]
|| "Unknown"}

</p>

<button>

Favorite

</button>

</div>

`;

});

}