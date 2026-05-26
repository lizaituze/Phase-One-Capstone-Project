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