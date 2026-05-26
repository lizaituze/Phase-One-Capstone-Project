const API =
"https://openlibrary.org/search.json?q=";

export async function fetchBooks(
search="programming"
){

try{

const response =
await fetch(
`${API}${search}`
);

const data =
await response.json();

return data.docs;

}

catch(error){

console.log(error);

return [];

}

}