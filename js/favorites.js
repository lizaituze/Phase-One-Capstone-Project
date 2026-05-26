export function addFavorite(
book
){

let favorites =
JSON.parse(
localStorage.getItem(
"favorites"
)
) || [];

favorites.push(
book
);

localStorage.setItem(
"favorites",
JSON.stringify(
favorites
)
);

}

export function removeFavorite(
title
){

let favorites =
JSON.parse(
localStorage.getItem(
"favorites"
)
);

favorites =
favorites.filter(
book =>
book.title !== title
);

localStorage.setItem(
"favorites",
JSON.stringify(
favorites
)
export function getFavorites(){

return JSON.parse(

localStorage.getItem(
"favorites"
)

)||[];

}

export function addFavorite(
book
){

const favorites =
getFavorites();

favorites.push(
book
);

localStorage.setItem(

"favorites",

JSON.stringify(
favorites
)

);

}