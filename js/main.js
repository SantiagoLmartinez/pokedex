const pokemonContainer = document.querySelector('.pokemon-container');
const spinner = document.querySelector('#spinner')

// functions
// fetch=Traer algo/Ir a buscar
function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    // then=luego
    .then((res) => res.json())
    .then((data) => {
        createPokemon(data);
    spinner.style.display = "none"
    });
}
// funcion para traer X Cantidad de Pokemon
function fetchPokemons(number){
    spinner.style.display = "block"
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);        
    }
}

function createPokemon(pokemon){
    const card = document.createElement("div");
    card.classList.add("");

    const spriteContainer= document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;
    

    spriteContainer.appendChild(sprite);

    const number = document.createElement("p");
    number.classList.add("number-pokemon")
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement("p");
    name.textContent = pokemon.name ;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
}

// fetchPokemon(1);
fetchPokemons(20);