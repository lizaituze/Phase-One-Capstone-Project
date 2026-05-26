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
);

}