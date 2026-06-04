import { fetchBooks } from "./fetchBooks.js";
import { displayBooks } from "./ui.js";

async function loadBooks(){

const container =
document.getElementById(
"booksContainer"
);

container.innerHTML = `

<div class="
col-span-4
text-center
text-2xl
">

Loading books...

</div>

`;

const books =
await fetchBooks(
"programming"
);

displayBooks(
books.slice(
0,
16
)
);

}

loadBooks();

document
.getElementById(
"searchBtn"
)

.addEventListener(
"click",

async()=>{

const search =
document
.getElementById(
"searchInput"
)

.value
.trim();

if(
!search
)return;

const books =
await fetchBooks(
search
);

displayBooks(
books.slice(
0,
20
)
);

}

);